"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LightningLinear, GraphUpLinear } from "solar-icon-set";

import { AppShell } from "@/components/AppShell";
import { InsightList } from "@/components/InsightList";
import { MetricsRow } from "@/components/MetricsRow";
import { OpportunityCard } from "@/components/OpportunityCard";
import { OpportunityChart } from "@/components/OpportunityChart";
import { BlueConicLogo } from "@/components/icons/BlueConicLogo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { diagnosticData } from "@/lib/diagnostic-data";

export default function ResultsPage() {
  const isExternalCanvasUrl = diagnosticData.growthCanvasUrl.startsWith("http");
  const prioritizedOpportunities = [...diagnosticData.opportunities].sort((a, b) => {
    if (a.id === "cart-recovery") return -1;
    if (b.id === "cart-recovery") return 1;
    return 0;
  });

  return (
    <AppShell>
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-semibold text-slate-900">Store Growth Diagnostic Results</h1>
          <p className="mt-2 text-slate-600">
            AI scan complete. Here are the highest-confidence plays to increase annual revenue.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
          <MetricsRow metrics={diagnosticData.metrics} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-blue-800">Potential Annual Revenue Opportunity</p>
                <p className="text-2xl font-semibold text-blue-900">
                  {diagnosticData.revenueOpportunitySummary.replace(" potential annual uplift", "")}
                </p>
                <p className="mt-1 text-sm text-blue-800">
                  Largest contributor: Cart Abandonment Recovery
                </p>
              </div>
              <LightningLinear size={22} color="currentColor" className="text-blue-700" />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <GraphUpLinear size={20} color="currentColor" className="text-slate-700" />
                Revenue Opportunity by Play
              </CardTitle>
            </CardHeader>
            <CardContent>
              <OpportunityChart opportunities={prioritizedOpportunities} />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid gap-4 md:grid-cols-3"
        >
          {prioritizedOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="grid gap-4 md:grid-cols-2"
        >
          <Card>
            <CardHeader>
              <CardTitle>Diagnostic Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <InsightList insights={diagnosticData.insights} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Other Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <details className="group text-sm text-slate-700">
                <summary className="cursor-pointer list-none font-medium text-slate-900">
                  Other plays evaluated but not recommended
                </summary>
                <p className="mt-2 text-slate-600">
                  These plays scored lower on short-term impact or confidence for your current
                  customer mix.
                </p>
                <ul className="mt-3 space-y-1 text-slate-700">
                  {diagnosticData.otherOpportunities.map((play) => (
                    <li key={play}>- {play}</li>
                  ))}
                </ul>
              </details>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <Button asChild size="lg" className="h-14 w-full text-base font-medium">
            <Link
              href={diagnosticData.growthCanvasUrl}
              target={isExternalCanvasUrl ? "_blank" : undefined}
              rel={isExternalCanvasUrl ? "noreferrer" : undefined}
            >
              <div className="flex items-center justify-center gap-2">
                <BlueConicLogo className="h-5 w-5" />
                <span>Launch the Growth Engine</span>
              </div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </AppShell>
  );
}
