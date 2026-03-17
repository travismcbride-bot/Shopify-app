import Link from "next/link";
import { StarsLinear } from "solar-icon-set";

import { AppShell } from "@/components/AppShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const splashBrandingImage =
  "https://www.figma.com/api/mcp/asset/591973e0-c36f-4a73-a3be-744f07528c4d";

export default function SplashPage() {
  return (
    <AppShell>
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-50">
        <div
          aria-hidden
          className="fixed bottom-0 right-0 z-0 pointer-events-none translate-x-1/4 translate-y-1/4"
        >
          <img alt="" className="h-[597px] w-[620px] max-w-none" src={splashBrandingImage} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Badge variant="secondary" className="mb-4 gap-1 px-3 py-1 text-sm">
            <StarsLinear size={16} color="currentColor" />
            AI-Powered Growth Analysis
          </Badge>
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-slate-900">
            Discover Your Biggest Growth Opportunities
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Scan your Shopify data to identify revenue opportunities and activate growth plays.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/scanning">Scan My Store</Link>
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
