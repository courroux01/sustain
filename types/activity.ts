export type ActivityType = "TRANSPORT" | "ELECTRICITY" | "FOOD";

export interface Activity {
  type: ActivityType;
  amount: number;
  unit: string;
  subtype?: string;
  regionCode?: string;
}
