
export default function DashboardHome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full relative bg-white">
      <div className="hidden md:flex h-full w-72 flex-col fixed inset-y-0 z-50">
      </div>
      <main className=" h-full">
        {children}
      </main>
    </div>
  );
}