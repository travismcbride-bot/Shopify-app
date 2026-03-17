"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircleLinear, StarsLinear } from "solar-icon-set";

import { Button } from "@/components/ui/button";

const steps = [
  "Analyzing customer behavior patterns",
  "Identifying conversion opportunities",
  "Calculating revenue potential",
  "Prioritizing quick wins",
  "Generating recommendations",
];

export function ScanProgress() {
  const router = useRouter();
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompletedCount((current) => {
        if (current >= steps.length) {
          clearInterval(interval);
          return current;
        }
        return current + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (completedCount === steps.length) {
      const timeout = setTimeout(() => {
        router.push("/results");
      }, 900);

      return () => clearTimeout(timeout);
    }
  }, [completedCount, router]);

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-6 rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <Button disabled className="w-full max-w-xs">
        <StarsLinear size={18} color="currentColor" />
        Scanning Your Store...
      </Button>

      <ul className="w-full space-y-3 text-left">
        {steps.map((step, index) => {
          if (index >= completedCount) return null;

          return (
            <motion.li
              key={step}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-2 rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-700"
            >
              <CheckCircleLinear size={18} color="currentColor" className="text-emerald-600" />
              {step}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
