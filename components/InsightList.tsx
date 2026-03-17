import { CheckCircleLinear } from "solar-icon-set";

export function InsightList({ insights }: { insights: string[] }) {
  return (
    <ul className="space-y-2 text-sm text-slate-700">
      {insights.map((insight) => (
        <li key={insight} className="flex items-start gap-2">
          <CheckCircleLinear size={18} color="currentColor" className="mt-0.5 text-emerald-600" />
          <span>{insight}</span>
        </li>
      ))}
    </ul>
  );
}
