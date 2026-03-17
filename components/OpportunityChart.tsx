"use client";

import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import type { Opportunity } from "@/lib/diagnostic-data";

const chartConfig = {
  revenue: {
    label: "Revenue Opportunity",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export function OpportunityChart({ opportunities }: { opportunities: Opportunity[] }) {
  const chartData = opportunities.map((play) => ({
    id: play.id,
    play: play.name.replace("Customer ", "").replace("Personalized ", ""),
    revenue: play.chartValue,
  }));

  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={280} minWidth={280}>
        <BarChart data={chartData} margin={{ left: 0, right: 20, top: 8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="play" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis
            tickFormatter={(value) => `$${Math.round(value / 1000)}k`}
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Bar dataKey="revenue" radius={[6, 6, 0, 0]}>
            {chartData.map((entry) => (
              <Cell
                key={entry.id}
                fill="var(--color-revenue)"
                fillOpacity={entry.id === "cart-recovery" ? 1 : 0.4}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
