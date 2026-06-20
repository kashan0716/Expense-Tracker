import {
  Utensils,
  Car,
  ShoppingBag,
  HeartPulse,
  Receipt,
  CircleDollarSign,
} from "lucide-react";

export const categories = [
  {
    name: "Food",
    icon: Utensils,
    color: "#f59e0b", // amber
    bg: "bg-amber-500/10",
  },

  {
    name: "Travel",
    icon: Car,
    color: "#3b82f6", // blue
    bg: "bg-blue-500/10",
  },

  {
    name: "Shopping",
    icon: ShoppingBag,
    color: "#a855f7", // purple
    bg: "bg-purple-500/10",
  },

  {
    name: "Health",
    icon: HeartPulse,
    color: "#ef4444", // red
    bg: "bg-red-500/10",
  },

  {
    name: "Bills",
    icon: Receipt,
    color: "#22c55e", // green
    bg: "bg-green-500/10",
  },

  {
    name: "Others",
    icon: CircleDollarSign,
    color: "#64748b", // slate
    bg: "bg-slate-500/10",
  },
];
