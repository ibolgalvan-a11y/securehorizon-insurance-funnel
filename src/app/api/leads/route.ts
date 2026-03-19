import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

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

    // Build lead record
    const lead = {
      id: crypto.randomUUID(),
      submittedAt: new Date().toISOString(),
      coverageTypes: body.coverageTypes || [],
      primaryGoal: body.primaryGoal || "",
      firstName: String(body.firstName).trim(),
      lastName: String(body.lastName).trim(),
      email: String(body.email).trim().toLowerCase(),
      phone: String(body.phone).trim(),
      age: body.age || "",
      maritalStatus: body.maritalStatus || "",
      dependents: body.dependents || "",
      employmentStatus: body.employmentStatus || "",
      annualIncome: body.annualIncome || "",
      currentCoverage: body.currentCoverage || "",
      budgetRange: body.budgetRange || "",
      timeframe: body.timeframe || "",
      additionalNotes: body.additionalNotes || "",
      status: "new",
    };

    // Store leads in a JSON file (replace with a database in production)
    const leadsDir = path.join(process.cwd(), "data");
    const leadsFile = path.join(leadsDir, "leads.json");

    await fs.mkdir(leadsDir, { recursive: true });

    let leads: typeof lead[] = [];
    try {
      const existing = await fs.readFile(leadsFile, "utf-8");
      leads = JSON.parse(existing);
    } catch {
      // File doesn't exist yet — that's fine
    }

    leads.push(lead);
    await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2));

    console.log(`[NEW LEAD] ${lead.firstName} ${lead.lastName} — ${lead.email}`);

    return NextResponse.json(
      { success: true, message: "Lead submitted successfully", id: lead.id },
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
    const leadsFile = path.join(process.cwd(), "data", "leads.json");
    const data = await fs.readFile(leadsFile, "utf-8");
    const leads = JSON.parse(data);

    return NextResponse.json({ leads, total: leads.length });
  } catch {
    return NextResponse.json({ leads: [], total: 0 });
  }
}
