const USD_TO_RUB = 90;
const EUR_TO_RUB = 98;

const RECYCLING_FEE = 450_000;
const DELIVERY = 120_000;
const COMMISSION = 150_000;

/** Representative engine displacement (cm³) per bracket for EUR/cm³ formulas */
const ENGINE_CC = {
  low: 1400,
  mid: 1900,
  high: 2800,
} as const;

/** Approximate minimum duty floor (RUB) by engine bracket — illustrative per spec */
const MIN_DUTY_UNDER_3 = {
  low: 280_000,
  mid: 380_000,
  high: 520_000,
} as const;

export type EngineBracket = "low" | "mid" | "high";
export type AgeBracket = "new" | "mid" | "old";

export type CostBreakdown = {
  carPriceRub: number;
  customsDuty: number;
  recyclingFee: number;
  delivery: number;
  commission: number;
  total: number;
};

function dutyEurPerCm3(age: AgeBracket, engine: EngineBracket): number {
  if (age === "mid") {
    if (engine === "low") return 2.5;
    if (engine === "mid") return 3.5;
    return 6.5;
  }
  if (engine === "low") return 3;
  if (engine === "mid") return 5;
  return 7.5;
}

export function calculateImportCost(
  priceUsd: number,
  engine: EngineBracket,
  age: AgeBracket
): CostBreakdown {
  const carPriceRub = Math.max(0, priceUsd) * USD_TO_RUB;

  let customsDuty = 0;
  const cc = ENGINE_CC[engine];

  if (age === "new") {
    const percentDuty = carPriceRub * 0.54;
    const floor = MIN_DUTY_UNDER_3[engine];
    customsDuty = Math.max(percentDuty, floor);
  } else {
    const rate = dutyEurPerCm3(age, engine);
    customsDuty = rate * cc * EUR_TO_RUB;
  }

  const total =
    carPriceRub +
    customsDuty +
    RECYCLING_FEE +
    DELIVERY +
    COMMISSION;

  return {
    carPriceRub,
    customsDuty,
    recyclingFee: RECYCLING_FEE,
    delivery: DELIVERY,
    commission: COMMISSION,
    total,
  };
}

export function formatRub(value: number): string {
  return new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}
