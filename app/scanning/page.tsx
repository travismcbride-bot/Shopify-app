import { AppShell } from "@/components/AppShell";
import { ScanProgress } from "@/components/ScanProgress";

export default function ScanningPage() {
  return (
    <AppShell>
      <div className="flex min-h-[80vh] items-center justify-center">
        <ScanProgress />
      </div>
    </AppShell>
  );
}
