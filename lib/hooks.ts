// Utility functions for working with hooks data

import { Hook, HookCategory } from "./types";
import hooksData from "@/public/data/hooks.json";

export async function getHooks(): Promise<Hook[]> {
  return hooksData.hooks as Hook[];
}

export function filterHooksByCategory(
  hooks: Hook[],
  category: string
): Hook[] {
  if (category === "All") {
    return hooks;
  }
  return hooks.filter((hook) => hook.category === category);
}

export function getAllCategories(hooks: Hook[]): string[] {
  const categories = new Set<string>();
  hooks.forEach((hook) => {
    categories.add(hook.category);
  });
  return Array.from(categories).sort();
}

export function getCategoryColor(category: string): string {
  const colorMap: Record<string, string> = {
    [HookCategory.SECURITY]: "bg-red-100 text-red-700 border-red-200",
    [HookCategory.CODE_QUALITY]: "bg-blue-100 text-blue-700 border-blue-200",
    [HookCategory.AUTOMATION]: "bg-green-100 text-green-700 border-green-200",
    [HookCategory.COMPLIANCE]: "bg-purple-100 text-purple-700 border-purple-200",
    [HookCategory.WORKFLOW]: "bg-orange-100 text-orange-700 border-orange-200",
    [HookCategory.PRODUCTIVITY]: "bg-teal-100 text-teal-700 border-teal-200",
    [HookCategory.NOTIFICATIONS]: "bg-yellow-100 text-yellow-700 border-yellow-200",
    [HookCategory.EXPERIMENTAL]: "bg-gray-100 text-gray-700 border-gray-200",
  };
  return colorMap[category] || "bg-gray-100 text-gray-700 border-gray-200";
}
