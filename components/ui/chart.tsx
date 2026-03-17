"use client";

import * as React from "react";
import { Tooltip } from "recharts";

import { cn } from "@/lib/utils";

export type ChartConfig = {
  [key: string]: {
    label: string;
    color: string;
  };
};

export function ChartContainer({
  config,
  className,
  children,
}: {
  config: ChartConfig;
  className?: string;
  children: React.ReactNode;
}) {
  const style: React.CSSProperties = {};

  Object.entries(config).forEach(([key, value]) => {
    (style as Record<string, string>)[`--color-${key}`] = value.color;
  });

  return (
    <div className={cn("h-[280px] w-full", className)} style={style}>
      {children}
    </div>
  );
}

export const ChartTooltip = Tooltip;

export function ChartTooltipContent({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value?: number }>;
  label?: string;
}) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm">
      <p className="font-medium text-slate-900">{label}</p>
      <p className="text-slate-600">${Number(payload[0]?.value ?? 0).toLocaleString()} / year</p>
    </div>
  );
}
