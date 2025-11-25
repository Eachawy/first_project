"use client";

import { useState } from "react";
import { HookGridProps } from "@/lib/types";
import { filterHooksByCategory, getAllCategories } from "@/lib/hooks";
import { FilterBar } from "./FilterBar";
import { HookCard } from "./HookCard";

export function HookGrid({ initialHooks }: HookGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredHooks = filterHooksByCategory(initialHooks, selectedCategory).filter(
    (hook) =>
      hook.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hook.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const categories = getAllCategories(initialHooks);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search hooks by name or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <FilterBar
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {filteredHooks.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No hooks found matching your criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredHooks.map((hook) => (
            <HookCard key={hook.id} hook={hook} />
          ))}
        </div>
      )}

      <div className="mt-12 text-center text-sm text-gray-500">
        Showing {filteredHooks.length} of {initialHooks.length} hooks
      </div>
    </div>
  );
}
