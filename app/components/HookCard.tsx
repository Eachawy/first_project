import { HookCardProps } from "@/lib/types";
import { getCategoryColor } from "@/lib/hooks";

export function HookCard({ hook }: HookCardProps) {
  const categoryColorClass = getCategoryColor(hook.category);

  return (
    <article className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColorClass}`}
        >
          {hook.category}
        </span>
        {hook.featured && (
          <span className="text-yellow-500" title="Featured Hook">
            ⭐
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{hook.name}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{hook.description}</p>

      <div className="space-y-2 text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-2">
          <span>👤</span>
          <span>{hook.author}</span>
        </div>
        <div className="flex items-start gap-2">
          <span>📋</span>
          <span className="flex-1">
            {hook.eventType.slice(0, 2).join(", ")}
            {hook.eventType.length > 2 && ` +${hook.eventType.length - 2}`}
          </span>
        </div>
      </div>

      <a
        href={hook.repositoryUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center text-sm font-medium"
      >
        View on GitHub →
      </a>
    </article>
  );
}
