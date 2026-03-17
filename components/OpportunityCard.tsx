import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CartCheckLinear, UserCheckLinear, GraphUpLinear } from "solar-icon-set";
import type { Opportunity } from "@/lib/diagnostic-data";

const iconById = {
  "cart-recovery": CartCheckLinear,
  "dormant-reactivation": UserCheckLinear,
  "basket-expansion": GraphUpLinear,
} as const;

export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  const Icon = iconById[opportunity.id as keyof typeof iconById] ?? GraphUpLinear;
  const isTopOpportunity = opportunity.id === "cart-recovery";

  return (
    <Card className={isTopOpportunity ? "border-blue-200 shadow-md" : undefined}>
      <CardHeader className="space-y-3">
        {isTopOpportunity ? (
          <div className="flex justify-end">
            <Badge variant="default">Top Opportunity</Badge>
          </div>
        ) : null}
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg">{opportunity.name}</CardTitle>
          <Icon size={20} color="currentColor" className="text-slate-500" />
        </div>
        <p className="text-sm font-medium text-slate-700">{opportunity.primaryMetric}</p>
        {isTopOpportunity ? (
          <p className="text-sm text-slate-600">Highest-impact revenue opportunity identified</p>
        ) : null}
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-slate-700">
        <div>
          <p className="text-slate-500">Detected signal</p>
          <p className="font-medium text-slate-900">{opportunity.detectedSignal}</p>
        </div>
        <div>
          <p className="text-slate-500">Revenue Opportunity</p>
          <p className="font-semibold text-slate-900">{opportunity.revenueRange}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-500">Confidence:</span>
          <Badge variant={opportunity.confidence === "High" ? "success" : "secondary"}>
            {opportunity.confidence}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
