export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Admin pages get a clean layout without the marketing Navbar/Footer
  return <>{children}</>;
}
