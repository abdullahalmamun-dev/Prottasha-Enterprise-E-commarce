// _app.tsx or layout.tsx
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

// Disable auto CSS insertion (Next.js handles CSS differently)
config.autoAddCss = false;

export default function DashboardHome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full relative bg-white">
      <div className="hidden md:flex h-full flex-col fixed inset-y-0 z-50">
      </div>
      <main className=" h-full">
        {children}
      </main>
    </div>
  );
}