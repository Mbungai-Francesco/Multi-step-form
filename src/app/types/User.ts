import { AddOns } from "./Add-ons";
import { Plan } from "./Plan";

interface User {
  name: string;
  email: string;
  phone: string;
  plan?: Plan;
  planType: PlanType;
  addOns?: AddOns[];
}

enum PlanType {
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

export { User, PlanType };