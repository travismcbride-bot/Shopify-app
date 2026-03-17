import Link from "next/link";
import { CheckCircleLinear, StarLinear } from "solar-icon-set";

import { AppShell } from "@/components/AppShell";
import { BlueConicLogo } from "@/components/icons/BlueConicLogo";
import { ShopifyLogo } from "@/components/icons/ShopifyLogo";
import { Button } from "@/components/ui/button";

const benefits = [
  "Popular with stores like yours",
  "Works with all Shopify themes",
  "AI-powered personalization",
  "Integrated Shopify data analysis",
];

const featureItems = [
  {
    title: "AI-powered opportunity detection",
    description:
      "Identify the highest-impact revenue opportunities based on real customer behavior.",
  },
  {
    title: "Next-best action recommendations",
    description:
      "Determine the optimal message, timing, and channel for each customer segment.",
  },
  {
    title: "Revenue impact forecasting",
    description:
      "Estimate potential uplift across key areas like conversion, retention, and average order value.",
  },
  {
    title: "Transparent, controllable execution",
    description:
      "Review and validate recommendations before activating any growth plays.",
  },
  {
    title: "Seamless Shopify integration",
    description: "Analyze your existing store data with no setup required.",
  },
];

export default function ShopifyAppStorePage() {
  return (
    <AppShell disableContentContainer>
      <header className="w-full border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <ShopifyLogo className="h-6 w-6" />
            <p className="text-sm font-medium text-slate-900">Shopify App Store</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-500 sm:block">
              Search apps, guides, and more
            </div>
            <Button variant="secondary" className="h-8 rounded-md px-3 text-xs">
              Browse apps
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-[320px_1fr_280px] gap-8">
          <section className="pt-2">
            <div className="mb-5 flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-[#015FFF] p-[12px]">
                <BlueConicLogo className="h-4 w-4" />
              </div>
              <div>
                <h1 className="text-[26px] font-semibold leading-8 text-slate-900">
                  True Customer Growth Engine
                </h1>
                <p className="text-sm text-slate-500">by BlueConic</p>
              </div>
            </div>

            <ul className="mb-5 space-y-2 text-sm text-slate-700">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <CheckCircleLinear
                    size={16}
                    color="currentColor"
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mb-5 flex items-center gap-2 text-sm text-slate-700">
              <StarLinear size={16} color="currentColor" className="text-amber-500" />
              <span>4.8 (127 reviews)</span>
            </div>

            <div className="mb-7">
              <p className="text-xs uppercase tracking-wide text-slate-500">Developer</p>
              <p className="text-sm text-slate-700">BlueConic</p>
            </div>

            <Button asChild className="h-11 w-full rounded-lg bg-black text-white hover:bg-black/90">
              <Link href="/splash">Install</Link>
            </Button>
          </section>

          <section className="space-y-8">
            <div className="w-full rounded-2xl border border-[#015FFF]/30 bg-[#015FFF] p-8 text-white">
              <BlueConicLogo className="mx-auto mb-4 h-12 w-12" />
              <h2 className="text-center text-3xl font-semibold leading-tight text-white">
                Unlock Your Store&apos;s Growth Potential
              </h2>
              <p className="mx-auto mt-3 max-w-md text-center text-base text-white/80">
                AI-powered growth plays that drive revenue and customer engagement
              </p>
              <div className="mt-5 flex justify-center">
                <Button
                  type="button"
                  variant="outline"
                  className="h-7 rounded-full border-white/40 bg-white/10 px-4 text-xs text-white hover:bg-white/20"
                >
                  Watch Demo
                </Button>
              </div>
            </div>

            <div className="w-full max-w-none">
              <h3 className="text-2xl font-semibold leading-tight text-slate-800">
                Unlock the Revenue You&apos;re Leaving on the Table
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We&apos;re about to analyze your store&apos;s data to identify where revenue is
                being left on the table and recommend the highest-impact growth plays. From
                recovering abandoned carts to reactivating dormant customers, our AI will surface
                the actions most likely to drive measurable uplift.
              </p>

              <div className="mt-6 space-y-4">
                {featureItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircleLinear
                      size={18}
                      color="currentColor"
                      className="mt-0.5 shrink-0 text-green-600"
                    />
                    <div>
                      <p className="text-base font-medium text-slate-800">{item.title}</p>
                      <p className="text-sm text-slate-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="pt-2" />
        </div>
      </div>
    </AppShell>
  );
}
