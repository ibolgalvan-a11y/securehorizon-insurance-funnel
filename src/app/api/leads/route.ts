import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Basic server-side validation
    const required = ["firstName", "lastName", "email", "phone"];
    for (const field of required) {
      if (!body[field] || !String(body[field]).trim()) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Insert lead into Supabase
    const { data, error } = await supabase
      .from("leads")
      .insert({
        coverage_types: body.coverageTypes || [],
        primary_goal: body.primaryGoal || "",
        first_name: String(body.firstName).trim(),
        last_name: String(body.lastName).trim(),
        email: String(body.email).trim().toLowerCase(),
        phone: String(body.phone).trim(),
        age: body.age || "",
        marital_status: body.maritalStatus || "",
        dependents: body.dependents || "",
        employment_status: body.employmentStatus || "",
        annual_income: body.annualIncome || "",
        current_coverage: body.currentCoverage || "",
        budget_range: body.budgetRange || "",
        timeframe: body.timeframe || "",
        additional_notes: body.additionalNotes || "",
        status: "new",
      })
      .select()
      .single();

    if (error) {
      console.error("[SUPABASE ERROR]", error);
      return NextResponse.json(
        { error: "Failed to save lead" },
        { status: 500 }
      );
    }

    console.log(`[NEW LEAD] ${data.first_name} ${data.last_name} — ${data.email}`);

    return NextResponse.json(
      { success: true, message: "Lead submitted successfully", id: data.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("[LEAD ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { data: leads, error } = await supabase
      .from("leads")
      .select("*")
      .order("submitted_at", { ascending: false });

    if (error) {
      return NextResponse.json({ leads: [], total: 0 });
    }

    return NextResponse.json({ leads, total: leads.length });
  } catch {
    return NextResponse.json({ leads: [], total: 0 });
  }
}
