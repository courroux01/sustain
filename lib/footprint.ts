import { Activity } from "@/types/activity";

const FACTORS: Record<string, number> = {
  "transport.car.kgco2_per_km": 0.21,
  "electricity.ca-on.kgco2_per_kwh": 0.3,
  "food.beef.kgco2_per_kg": 27,
  "food.vegetables.kgco2_per_kg": 2,
};

export function computeCO2(activity: Activity) {
  const { type /*amount, unit, subtype, regionCode*/ } = activity;
  let key = "";
  let factor = 0;

  switch (type) {
    case "TRANSPORT":
      key = "transport.car.kgco2_per_km";
      // key = `transport.${subtype || "car"}.kgco2_per_${unit.toLowerCase()}`;
      break;
    case "ELECTRICITY":
      key = "electricity.ca-on.kgco2_per_kwh";
      /*key = `electricity.${
        regionCode || "ca-on"
      }.kgco2_per_${unit.toLowerCase()}`;
      */
      break;
    case "FOOD":
      key = `food.${activity.subtype ?? "vegetables"}.kgco2_per_kg`;
      // key = `food.${subtype || "vegetables"}.kgco2_per_${unit.toLowerCase()}`;
      break;
    default:
      break;
  }

  factor = FACTORS[key] ?? 0;
  const co2 = activity.amount * factor;

  return { co2Kg: co2, factorKey: key };
}
