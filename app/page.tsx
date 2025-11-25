import { getHooks } from "@/lib/hooks";
import { HookGrid } from "./components/HookGrid";

export default async function HomePage() {
  const hooks = await getHooks();

  return (
    <>
      <HookGrid initialHooks={hooks} />
      <footer className="border-t border-gray-200 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-sm text-gray-600">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://docs.claude.com/hooks"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              Claude Code Documentation
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="mt-4 text-gray-500">
            A directory of community-created Claude Code hooks
          </p>
        </div>
      </footer>
    </>
  );
}
