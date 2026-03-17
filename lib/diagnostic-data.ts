export type Opportunity = {
  id: string;
  name: string;
  primaryMetric: string;
  detectedSignal: string;
  revenueRange: string;
  confidence: "High" | "Medium" | "Low";
  chartValue: number;
};

export const diagnosticData = {
  metrics: {
    customersAnalyzed: "142,381",
    ordersAnalyzed: "58,421",
    revenueAnalyzed: "$6.4M",
  },
  revenueOpportunitySummary: "$480k - $720k potential annual uplift",
  opportunities: [
    {
      id: "cart-recovery",
      name: "Cart Abandonment Recovery",
      primaryMetric: "Recovery Rate",
      detectedSignal: "4,800 abandoned carts / month",
      revenueRange: "$180k - $240k annually",
      confidence: "High",
      chartValue: 220000,
    },
    {
      id: "dormant-reactivation",
      name: "Dormant Customer Reactivation",
      primaryMetric: "Reactivation Rate",
      detectedSignal: "38% of customers inactive for 180+ days",
      revenueRange: "$120k - $180k annually",
      confidence: "High",
      chartValue: 180000,
    },
    {
      id: "basket-expansion",
      name: "Personalized Basket Expansion",
      primaryMetric: "Multi-Item Order Rate",
      detectedSignal: "Only 9% of orders include multiple items",
      revenueRange: "$90k - $140k annually",
      confidence: "Medium",
      chartValue: 140000,
    },
  ] as Opportunity[],
  insights: [
    "71% of carts are abandoned before checkout",
    "38% of customers have not purchased in 180+ days",
    "Only 9% of orders contain multiple items",
    "Top 20% of customers generate 62% of revenue",
  ],
  otherOpportunities: [
    "Lookalike Prospect Expansion",
    "Intent-Based Media Targeting",
    "Churn Prediction",
    "Predictive Replenishment",
  ],
  growthCanvasUrl: process.env.NEXT_PUBLIC_GROWTH_ENGINE_CANVAS_URL ?? "/",
};
