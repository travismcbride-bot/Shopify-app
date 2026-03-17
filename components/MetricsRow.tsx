import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UsersGroupRoundedLinear, BagLinear, DollarMinimalisticLinear } from "solar-icon-set";

export function MetricsRow({
  metrics,
}: {
  metrics: {
    customersAnalyzed: string;
    ordersAnalyzed: string;
    revenueAnalyzed: string;
  };
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-slate-600">Customers analyzed</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <p className="text-2xl font-semibold">{metrics.customersAnalyzed}</p>
          <UsersGroupRoundedLinear size={20} color="currentColor" className="text-slate-500" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-slate-600">Orders analyzed</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <p className="text-2xl font-semibold">{metrics.ordersAnalyzed}</p>
          <BagLinear size={20} color="currentColor" className="text-slate-500" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-slate-600">Revenue analyzed</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <p className="text-2xl font-semibold">{metrics.revenueAnalyzed}</p>
          <DollarMinimalisticLinear size={20} color="currentColor" className="text-slate-500" />
        </CardContent>
      </Card>
    </div>
  );
}
