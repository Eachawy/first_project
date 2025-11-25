(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TypeScript types for Claude Hooks Directory
__turbopack_context__.s([
    "HookCategory",
    ()=>HookCategory,
    "HookEventType",
    ()=>HookEventType
]);
var HookCategory = /*#__PURE__*/ function(HookCategory) {
    HookCategory["SECURITY"] = "Security";
    HookCategory["CODE_QUALITY"] = "Code Quality";
    HookCategory["AUTOMATION"] = "Automation";
    HookCategory["COMPLIANCE"] = "Compliance";
    HookCategory["NOTIFICATIONS"] = "Notifications";
    HookCategory["WORKFLOW"] = "Workflow";
    HookCategory["PRODUCTIVITY"] = "Productivity";
    HookCategory["EXPERIMENTAL"] = "Experimental";
    return HookCategory;
}({});
var HookEventType = /*#__PURE__*/ function(HookEventType) {
    HookEventType["PRE_TOOL_USE"] = "PreToolUse";
    HookEventType["POST_TOOL_USE"] = "PostToolUse";
    HookEventType["PERMISSION_REQUEST"] = "PermissionRequest";
    HookEventType["USER_PROMPT_SUBMIT"] = "UserPromptSubmit";
    HookEventType["STOP"] = "Stop";
    HookEventType["SUBAGENT_STOP"] = "SubagentStop";
    HookEventType["SESSION_START"] = "SessionStart";
    HookEventType["SESSION_END"] = "SessionEnd";
    HookEventType["NOTIFICATION"] = "Notification";
    HookEventType["PRE_COMPACT"] = "PreCompact";
    return HookEventType;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/data/hooks.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"hooks\":[{\"id\":\"sensitive-file-protector\",\"name\":\"Sensitive File Protector\",\"category\":\"Security\",\"description\":\"Prevents writing to sensitive files like .env, secrets.json, and credential files.\",\"longDescription\":\"This hook intercepts Write and Edit operations to protect sensitive files containing secrets, API keys, and credentials from accidental modifications or exposure.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/sensitive-file-protector\",\"author\":\"claude-hooks\",\"eventType\":[\"PreToolUse\"],\"tags\":[\"security\",\"protection\",\"secrets\",\"validation\"],\"createdAt\":\"2025-01-15T00:00:00Z\",\"featured\":true},{\"id\":\"command-whitelist\",\"name\":\"Command Whitelist\",\"category\":\"Security\",\"description\":\"Restricts bash commands to a pre-approved whitelist for enhanced security.\",\"longDescription\":\"Configure a list of allowed bash commands and block any execution attempts outside this whitelist. Perfect for production environments with strict security policies.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/command-whitelist\",\"author\":\"claude-hooks\",\"eventType\":[\"PreToolUse\"],\"tags\":[\"security\",\"bash\",\"whitelist\",\"compliance\"],\"createdAt\":\"2025-01-14T00:00:00Z\",\"featured\":false},{\"id\":\"external-api-blocker\",\"name\":\"External API Blocker\",\"category\":\"Security\",\"description\":\"Blocks network requests to unauthorized domains to prevent data leakage.\",\"longDescription\":\"Monitor and control all external API calls made during Claude's operations. Define allowed domains and block everything else to ensure data stays within your organization.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/external-api-blocker\",\"author\":\"claude-hooks\",\"eventType\":[\"PreToolUse\"],\"tags\":[\"security\",\"network\",\"api\",\"firewall\"],\"createdAt\":\"2025-01-13T00:00:00Z\",\"featured\":false},{\"id\":\"auto-prettier\",\"name\":\"Auto Prettier\",\"category\":\"Code Quality\",\"description\":\"Automatically formats code using Prettier after every Write or Edit operation.\",\"longDescription\":\"This hook ensures consistent code formatting across your project by running Prettier immediately after Claude makes changes. Integrates seamlessly with your existing Prettier configuration.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/auto-prettier\",\"author\":\"claude-hooks\",\"eventType\":[\"PostToolUse\"],\"tags\":[\"formatting\",\"prettier\",\"code-quality\",\"automation\"],\"createdAt\":\"2025-01-12T00:00:00Z\",\"featured\":true},{\"id\":\"eslint-validator\",\"name\":\"ESLint Validator\",\"category\":\"Code Quality\",\"description\":\"Validates code against ESLint rules before allowing commits.\",\"longDescription\":\"Run ESLint checks on modified files before they are committed. Prevents code that violates your linting rules from entering the repository.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/eslint-validator\",\"author\":\"claude-hooks\",\"eventType\":[\"PostToolUse\"],\"tags\":[\"linting\",\"eslint\",\"validation\",\"code-quality\"],\"createdAt\":\"2025-01-11T00:00:00Z\",\"featured\":false},{\"id\":\"type-check-enforcer\",\"name\":\"Type Check Enforcer\",\"category\":\"Code Quality\",\"description\":\"Runs TypeScript type checks automatically after code modifications.\",\"longDescription\":\"Ensure type safety by running tsc --noEmit after every code change. Catches type errors immediately before they cause runtime issues.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/type-check-enforcer\",\"author\":\"claude-hooks\",\"eventType\":[\"PostToolUse\"],\"tags\":[\"typescript\",\"type-checking\",\"validation\"],\"createdAt\":\"2025-01-10T00:00:00Z\",\"featured\":false},{\"id\":\"git-auto-commit\",\"name\":\"Git Auto-Commit\",\"category\":\"Automation\",\"description\":\"Automatically commits changes after successful edits with generated commit messages.\",\"longDescription\":\"Streamline your git workflow by automatically creating commits after Claude completes file modifications. Uses AI to generate meaningful commit messages based on changes.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/git-auto-commit\",\"author\":\"claude-hooks\",\"eventType\":[\"PostToolUse\"],\"tags\":[\"git\",\"automation\",\"commits\",\"version-control\"],\"createdAt\":\"2025-01-09T00:00:00Z\",\"featured\":true},{\"id\":\"test-runner\",\"name\":\"Test Runner\",\"category\":\"Automation\",\"description\":\"Runs your test suite automatically after code changes to ensure nothing breaks.\",\"longDescription\":\"Execute your test suite (Jest, Vitest, etc.) after every code modification. Get immediate feedback on whether changes break existing functionality.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/test-runner\",\"author\":\"claude-hooks\",\"eventType\":[\"PostToolUse\"],\"tags\":[\"testing\",\"automation\",\"ci\",\"quality\"],\"createdAt\":\"2025-01-08T00:00:00Z\",\"featured\":false},{\"id\":\"build-validator\",\"name\":\"Build Validator\",\"category\":\"Automation\",\"description\":\"Ensures your project builds successfully after modifications.\",\"longDescription\":\"Run your build command (npm run build, etc.) after code changes to verify the project still compiles. Catches build errors before they reach CI/CD.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/build-validator\",\"author\":\"claude-hooks\",\"eventType\":[\"PostToolUse\"],\"tags\":[\"build\",\"validation\",\"ci\",\"automation\"],\"createdAt\":\"2025-01-07T00:00:00Z\",\"featured\":false},{\"id\":\"audit-logger\",\"name\":\"Audit Logger\",\"category\":\"Compliance\",\"description\":\"Logs all tool executions to an audit trail for compliance and debugging.\",\"longDescription\":\"Maintain a comprehensive audit log of every action Claude takes. Essential for compliance requirements, security audits, and troubleshooting.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/audit-logger\",\"author\":\"claude-hooks\",\"eventType\":[\"PreToolUse\",\"PostToolUse\"],\"tags\":[\"logging\",\"audit\",\"compliance\",\"security\"],\"createdAt\":\"2025-01-06T00:00:00Z\",\"featured\":true},{\"id\":\"license-checker\",\"name\":\"License Checker\",\"category\":\"Compliance\",\"description\":\"Validates that dependencies have approved licenses before installation.\",\"longDescription\":\"Automatically scan package licenses when dependencies are added. Blocks packages with non-compliant licenses to ensure legal compliance.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/license-checker\",\"author\":\"claude-hooks\",\"eventType\":[\"PreToolUse\"],\"tags\":[\"licensing\",\"compliance\",\"legal\",\"dependencies\"],\"createdAt\":\"2025-01-05T00:00:00Z\",\"featured\":false},{\"id\":\"change-request-tracker\",\"name\":\"Change Request Tracker\",\"category\":\"Compliance\",\"description\":\"Links code changes to JIRA tickets or GitHub issues for traceability.\",\"longDescription\":\"Enforce ticket-based development by requiring issue numbers for all changes. Automatically links commits and changes to your project management system.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/change-request-tracker\",\"author\":\"claude-hooks\",\"eventType\":[\"PreToolUse\"],\"tags\":[\"jira\",\"github\",\"tracking\",\"compliance\"],\"createdAt\":\"2025-01-04T00:00:00Z\",\"featured\":false},{\"id\":\"slack-notifier\",\"name\":\"Slack Notifier\",\"category\":\"Notifications\",\"description\":\"Sends Slack notifications when Claude completes sessions or encounters errors.\",\"longDescription\":\"Stay informed about Claude's activities with real-time Slack notifications. Configure alerts for session completion, errors, or specific events.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/slack-notifier\",\"author\":\"claude-hooks\",\"eventType\":[\"SessionEnd\",\"Notification\"],\"tags\":[\"slack\",\"notifications\",\"alerts\",\"integration\"],\"createdAt\":\"2025-01-03T00:00:00Z\",\"featured\":false},{\"id\":\"context-compactor\",\"name\":\"Context Compactor\",\"category\":\"Workflow\",\"description\":\"Intelligently manages session context to prevent token limit issues.\",\"longDescription\":\"Automatically compress and optimize conversation context before hitting token limits. Uses smart algorithms to preserve important information while reducing context size.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/context-compactor\",\"author\":\"claude-hooks\",\"eventType\":[\"PreCompact\"],\"tags\":[\"context\",\"optimization\",\"tokens\",\"performance\"],\"createdAt\":\"2025-01-02T00:00:00Z\",\"featured\":false},{\"id\":\"environment-switcher\",\"name\":\"Environment Switcher\",\"category\":\"Workflow\",\"description\":\"Auto-configures environment variables based on the current project context.\",\"longDescription\":\"Automatically load the correct environment configuration when switching between projects. Supports multiple environments (dev, staging, prod) per project.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/environment-switcher\",\"author\":\"claude-hooks\",\"eventType\":[\"SessionStart\"],\"tags\":[\"environment\",\"configuration\",\"automation\",\"workflow\"],\"createdAt\":\"2025-01-01T00:00:00Z\",\"featured\":false},{\"id\":\"smart-stop\",\"name\":\"Smart Stop\",\"category\":\"Productivity\",\"description\":\"Uses LLM to intelligently determine if Claude should continue working.\",\"longDescription\":\"Leverage AI to decide when Claude should stop and ask for clarification versus continuing work. Reduces unnecessary back-and-forth while maintaining quality.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/smart-stop\",\"author\":\"claude-hooks\",\"eventType\":[\"Stop\"],\"tags\":[\"ai\",\"decision-making\",\"productivity\",\"prompt\"],\"createdAt\":\"2024-12-31T00:00:00Z\",\"featured\":true},{\"id\":\"session-summarizer\",\"name\":\"Session Summarizer\",\"category\":\"Productivity\",\"description\":\"Creates a summary of work completed when sessions end.\",\"longDescription\":\"Generate comprehensive summaries of what Claude accomplished during each session. Perfect for daily standups, progress tracking, and documentation.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/session-summarizer\",\"author\":\"claude-hooks\",\"eventType\":[\"SessionEnd\"],\"tags\":[\"summary\",\"documentation\",\"productivity\"],\"createdAt\":\"2024-12-30T00:00:00Z\",\"featured\":false},{\"id\":\"quick-deploy\",\"name\":\"Quick Deploy\",\"category\":\"Productivity\",\"description\":\"Triggers deployment pipelines after successful builds.\",\"longDescription\":\"Automatically kick off deployment to staging or production after builds pass. Integrates with Vercel, Netlify, AWS, and other deployment platforms.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/quick-deploy\",\"author\":\"claude-hooks\",\"eventType\":[\"PostToolUse\"],\"tags\":[\"deployment\",\"ci-cd\",\"automation\",\"productivity\"],\"createdAt\":\"2024-12-29T00:00:00Z\",\"featured\":false}]}"));}),
"[project]/lib/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Utility functions for working with hooks data
__turbopack_context__.s([
    "filterHooksByCategory",
    ()=>filterHooksByCategory,
    "getAllCategories",
    ()=>getAllCategories,
    "getCategoryColor",
    ()=>getCategoryColor,
    "getHooks",
    ()=>getHooks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$data$2f$hooks$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/data/hooks.json (json)");
;
;
async function getHooks() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$data$2f$hooks$2e$json__$28$json$29$__["default"].hooks;
}
function filterHooksByCategory(hooks, category) {
    if (category === "All") {
        return hooks;
    }
    return hooks.filter((hook)=>hook.category === category);
}
function getAllCategories(hooks) {
    const categories = new Set();
    hooks.forEach((hook)=>{
        categories.add(hook.category);
    });
    return Array.from(categories).sort();
}
function getCategoryColor(category) {
    const colorMap = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HookCategory"].SECURITY]: "bg-red-100 text-red-700 border-red-200",
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HookCategory"].CODE_QUALITY]: "bg-blue-100 text-blue-700 border-blue-200",
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HookCategory"].AUTOMATION]: "bg-green-100 text-green-700 border-green-200",
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HookCategory"].COMPLIANCE]: "bg-purple-100 text-purple-700 border-purple-200",
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HookCategory"].WORKFLOW]: "bg-orange-100 text-orange-700 border-orange-200",
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HookCategory"].PRODUCTIVITY]: "bg-teal-100 text-teal-700 border-teal-200",
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HookCategory"].NOTIFICATIONS]: "bg-yellow-100 text-yellow-700 border-yellow-200",
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HookCategory"].EXPERIMENTAL]: "bg-gray-100 text-gray-700 border-gray-200"
    };
    return colorMap[category] || "bg-gray-100 text-gray-700 border-gray-200";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/FilterBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterBar",
    ()=>FilterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function FilterButton({ label, active, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${active ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
        children: label
    }, void 0, false, {
        fileName: "[project]/app/components/FilterBar.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = FilterButton;
function FilterBar({ categories, selected, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-thin",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterButton, {
                label: "All",
                active: selected === "All",
                onClick: ()=>onSelect("All")
            }, void 0, false, {
                fileName: "[project]/app/components/FilterBar.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterButton, {
                    label: category,
                    active: selected === category,
                    onClick: ()=>onSelect(category)
                }, category, false, {
                    fileName: "[project]/app/components/FilterBar.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/FilterBar.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c1 = FilterBar;
var _c, _c1;
__turbopack_context__.k.register(_c, "FilterButton");
__turbopack_context__.k.register(_c1, "FilterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/HookCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HookCard",
    ()=>HookCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
;
;
function HookCard({ hook }) {
    const categoryColorClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategoryColor"])(hook.category);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `px-3 py-1 rounded-full text-xs font-semibold border ${categoryColorClass}`,
                        children: hook.category
                    }, void 0, false, {
                        fileName: "[project]/app/components/HookCard.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    hook.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-yellow-500",
                        title: "Featured Hook",
                        children: "⭐"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HookCard.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HookCard.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-bold text-gray-900 mb-2",
                children: hook.name
            }, void 0, false, {
                fileName: "[project]/app/components/HookCard.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 mb-4 flex-grow",
                children: hook.description
            }, void 0, false, {
                fileName: "[project]/app/components/HookCard.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 text-sm text-gray-500 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "👤"
                            }, void 0, false, {
                                fileName: "[project]/app/components/HookCard.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: hook.author
                            }, void 0, false, {
                                fileName: "[project]/app/components/HookCard.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HookCard.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "📋"
                            }, void 0, false, {
                                fileName: "[project]/app/components/HookCard.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex-1",
                                children: [
                                    hook.eventType.slice(0, 2).join(", "),
                                    hook.eventType.length > 2 && ` +${hook.eventType.length - 2}`
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HookCard.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HookCard.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HookCard.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: hook.repositoryUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center text-sm font-medium",
                children: "View on GitHub →"
            }, void 0, false, {
                fileName: "[project]/app/components/HookCard.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/HookCard.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = HookCard;
var _c;
__turbopack_context__.k.register(_c, "HookCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/HookGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HookGrid",
    ()=>HookGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/FilterBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HookCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/HookCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HookGrid({ initialHooks }) {
    _s();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const filteredHooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterHooksByCategory"])(initialHooks, selectedCategory).filter((hook)=>hook.name.toLowerCase().includes(searchQuery.toLowerCase()) || hook.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllCategories"])(initialHooks);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-4 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search hooks by name or description...",
                    value: searchQuery,
                    onChange: (e)=>setSearchQuery(e.target.value),
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                }, void 0, false, {
                    fileName: "[project]/app/components/HookGrid.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/HookGrid.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterBar"], {
                categories: categories,
                selected: selectedCategory,
                onSelect: setSelectedCategory
            }, void 0, false, {
                fileName: "[project]/app/components/HookGrid.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            filteredHooks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12 text-gray-500",
                children: "No hooks found matching your criteria."
            }, void 0, false, {
                fileName: "[project]/app/components/HookGrid.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                children: filteredHooks.map((hook)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HookCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HookCard"], {
                        hook: hook
                    }, hook.id, false, {
                        fileName: "[project]/app/components/HookGrid.tsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/HookGrid.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 text-center text-sm text-gray-500",
                children: [
                    "Showing ",
                    filteredHooks.length,
                    " of ",
                    initialHooks.length,
                    " hooks"
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HookGrid.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/HookGrid.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(HookGrid, "Tcd+yNu1EtcvvP6BpqAKzm3YCoA=");
_c = HookGrid;
var _c;
__turbopack_context__.k.register(_c, "HookGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_498d2001._.js.map