"use client";

import { FilterBarProps } from "@/lib/types";

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
        active
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}

export function FilterBar({ categories, selected, onSelect }: FilterBarProps) {
  return (
    <nav className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-thin">
      <FilterButton
        label="All"
        active={selected === "All"}
        onClick={() => onSelect("All")}
      />
      {categories.map((category) => (
        <FilterButton
          key={category}
          label={category}
          active={selected === category}
          onClick={() => onSelect(category)}
        />
      ))}
    </nav>
  );
}
