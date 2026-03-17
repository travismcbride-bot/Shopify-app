import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type AppShellProps = {
  children: ReactNode;
  contentClassName?: string;
  disableContentContainer?: boolean;
};

export function AppShell({
  children,
  contentClassName,
  disableContentContainer = false,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {disableContentContainer ? (
        children
      ) : (
        <div className={cn("mx-auto max-w-6xl p-8", contentClassName)}>{children}</div>
      )}
    </div>
  );
}
