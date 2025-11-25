module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/public/data/hooks.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"hooks\":[{\"id\":\"sensitive-file-protector\",\"name\":\"Sensitive File Protector\",\"category\":\"Security\",\"description\":\"Prevents writing to sensitive files like .env, secrets.json, and credential files.\",\"longDescription\":\"This hook intercepts Write and Edit operations to protect sensitive files containing secrets, API keys, and credentials from accidental modifications or exposure.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/sensitive-file-protector\",\"author\":\"claude-hooks\",\"eventType\":[\"PreToolUse\"],\"tags\":[\"security\",\"protection\",\"secrets\",\"validation\"],\"createdAt\":\"2025-01-15T00:00:00Z\",\"featured\":true},{\"id\":\"command-whitelist\",\"name\":\"Command Whitelist\",\"category\":\"Security\",\"description\":\"Restricts bash commands to a pre-approved whitelist for enhanced security.\",\"longDescription\":\"Configure a list of allowed bash commands and block any execution attempts outside this whitelist. Perfect for production environments with strict security policies.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/command-whitelist\",\"author\":\"claude-hooks\",\"eventType\":[\"PreToolUse\"],\"tags\":[\"security\",\"bash\",\"whitelist\",\"compliance\"],\"createdAt\":\"2025-01-14T00:00:00Z\",\"featured\":false},{\"id\":\"external-api-blocker\",\"name\":\"External API Blocker\",\"category\":\"Security\",\"description\":\"Blocks network requests to unauthorized domains to prevent data leakage.\",\"longDescription\":\"Monitor and control all external API calls made during Claude's operations. Define allowed domains and block everything else to ensure data stays within your organization.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/external-api-blocker\",\"author\":\"claude-hooks\",\"eventType\":[\"PreToolUse\"],\"tags\":[\"security\",\"network\",\"api\",\"firewall\"],\"createdAt\":\"2025-01-13T00:00:00Z\",\"featured\":false},{\"id\":\"auto-prettier\",\"name\":\"Auto Prettier\",\"category\":\"Code Quality\",\"description\":\"Automatically formats code using Prettier after every Write or Edit operation.\",\"longDescription\":\"This hook ensures consistent code formatting across your project by running Prettier immediately after Claude makes changes. Integrates seamlessly with your existing Prettier configuration.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/auto-prettier\",\"author\":\"claude-hooks\",\"eventType\":[\"PostToolUse\"],\"tags\":[\"formatting\",\"prettier\",\"code-quality\",\"automation\"],\"createdAt\":\"2025-01-12T00:00:00Z\",\"featured\":true},{\"id\":\"eslint-validator\",\"name\":\"ESLint Validator\",\"category\":\"Code Quality\",\"description\":\"Validates code against ESLint rules before allowing commits.\",\"longDescription\":\"Run ESLint checks on modified files before they are committed. Prevents code that violates your linting rules from entering the repository.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/eslint-validator\",\"author\":\"claude-hooks\",\"eventType\":[\"PostToolUse\"],\"tags\":[\"linting\",\"eslint\",\"validation\",\"code-quality\"],\"createdAt\":\"2025-01-11T00:00:00Z\",\"featured\":false},{\"id\":\"type-check-enforcer\",\"name\":\"Type Check Enforcer\",\"category\":\"Code Quality\",\"description\":\"Runs TypeScript type checks automatically after code modifications.\",\"longDescription\":\"Ensure type safety by running tsc --noEmit after every code change. Catches type errors immediately before they cause runtime issues.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/type-check-enforcer\",\"author\":\"claude-hooks\",\"eventType\":[\"PostToolUse\"],\"tags\":[\"typescript\",\"type-checking\",\"validation\"],\"createdAt\":\"2025-01-10T00:00:00Z\",\"featured\":false},{\"id\":\"git-auto-commit\",\"name\":\"Git Auto-Commit\",\"category\":\"Automation\",\"description\":\"Automatically commits changes after successful edits with generated commit messages.\",\"longDescription\":\"Streamline your git workflow by automatically creating commits after Claude completes file modifications. Uses AI to generate meaningful commit messages based on changes.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/git-auto-commit\",\"author\":\"claude-hooks\",\"eventType\":[\"PostToolUse\"],\"tags\":[\"git\",\"automation\",\"commits\",\"version-control\"],\"createdAt\":\"2025-01-09T00:00:00Z\",\"featured\":true},{\"id\":\"test-runner\",\"name\":\"Test Runner\",\"category\":\"Automation\",\"description\":\"Runs your test suite automatically after code changes to ensure nothing breaks.\",\"longDescription\":\"Execute your test suite (Jest, Vitest, etc.) after every code modification. Get immediate feedback on whether changes break existing functionality.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/test-runner\",\"author\":\"claude-hooks\",\"eventType\":[\"PostToolUse\"],\"tags\":[\"testing\",\"automation\",\"ci\",\"quality\"],\"createdAt\":\"2025-01-08T00:00:00Z\",\"featured\":false},{\"id\":\"build-validator\",\"name\":\"Build Validator\",\"category\":\"Automation\",\"description\":\"Ensures your project builds successfully after modifications.\",\"longDescription\":\"Run your build command (npm run build, etc.) after code changes to verify the project still compiles. Catches build errors before they reach CI/CD.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/build-validator\",\"author\":\"claude-hooks\",\"eventType\":[\"PostToolUse\"],\"tags\":[\"build\",\"validation\",\"ci\",\"automation\"],\"createdAt\":\"2025-01-07T00:00:00Z\",\"featured\":false},{\"id\":\"audit-logger\",\"name\":\"Audit Logger\",\"category\":\"Compliance\",\"description\":\"Logs all tool executions to an audit trail for compliance and debugging.\",\"longDescription\":\"Maintain a comprehensive audit log of every action Claude takes. Essential for compliance requirements, security audits, and troubleshooting.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/audit-logger\",\"author\":\"claude-hooks\",\"eventType\":[\"PreToolUse\",\"PostToolUse\"],\"tags\":[\"logging\",\"audit\",\"compliance\",\"security\"],\"createdAt\":\"2025-01-06T00:00:00Z\",\"featured\":true},{\"id\":\"license-checker\",\"name\":\"License Checker\",\"category\":\"Compliance\",\"description\":\"Validates that dependencies have approved licenses before installation.\",\"longDescription\":\"Automatically scan package licenses when dependencies are added. Blocks packages with non-compliant licenses to ensure legal compliance.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/license-checker\",\"author\":\"claude-hooks\",\"eventType\":[\"PreToolUse\"],\"tags\":[\"licensing\",\"compliance\",\"legal\",\"dependencies\"],\"createdAt\":\"2025-01-05T00:00:00Z\",\"featured\":false},{\"id\":\"change-request-tracker\",\"name\":\"Change Request Tracker\",\"category\":\"Compliance\",\"description\":\"Links code changes to JIRA tickets or GitHub issues for traceability.\",\"longDescription\":\"Enforce ticket-based development by requiring issue numbers for all changes. Automatically links commits and changes to your project management system.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/change-request-tracker\",\"author\":\"claude-hooks\",\"eventType\":[\"PreToolUse\"],\"tags\":[\"jira\",\"github\",\"tracking\",\"compliance\"],\"createdAt\":\"2025-01-04T00:00:00Z\",\"featured\":false},{\"id\":\"slack-notifier\",\"name\":\"Slack Notifier\",\"category\":\"Notifications\",\"description\":\"Sends Slack notifications when Claude completes sessions or encounters errors.\",\"longDescription\":\"Stay informed about Claude's activities with real-time Slack notifications. Configure alerts for session completion, errors, or specific events.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/slack-notifier\",\"author\":\"claude-hooks\",\"eventType\":[\"SessionEnd\",\"Notification\"],\"tags\":[\"slack\",\"notifications\",\"alerts\",\"integration\"],\"createdAt\":\"2025-01-03T00:00:00Z\",\"featured\":false},{\"id\":\"context-compactor\",\"name\":\"Context Compactor\",\"category\":\"Workflow\",\"description\":\"Intelligently manages session context to prevent token limit issues.\",\"longDescription\":\"Automatically compress and optimize conversation context before hitting token limits. Uses smart algorithms to preserve important information while reducing context size.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/context-compactor\",\"author\":\"claude-hooks\",\"eventType\":[\"PreCompact\"],\"tags\":[\"context\",\"optimization\",\"tokens\",\"performance\"],\"createdAt\":\"2025-01-02T00:00:00Z\",\"featured\":false},{\"id\":\"environment-switcher\",\"name\":\"Environment Switcher\",\"category\":\"Workflow\",\"description\":\"Auto-configures environment variables based on the current project context.\",\"longDescription\":\"Automatically load the correct environment configuration when switching between projects. Supports multiple environments (dev, staging, prod) per project.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/environment-switcher\",\"author\":\"claude-hooks\",\"eventType\":[\"SessionStart\"],\"tags\":[\"environment\",\"configuration\",\"automation\",\"workflow\"],\"createdAt\":\"2025-01-01T00:00:00Z\",\"featured\":false},{\"id\":\"smart-stop\",\"name\":\"Smart Stop\",\"category\":\"Productivity\",\"description\":\"Uses LLM to intelligently determine if Claude should continue working.\",\"longDescription\":\"Leverage AI to decide when Claude should stop and ask for clarification versus continuing work. Reduces unnecessary back-and-forth while maintaining quality.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/smart-stop\",\"author\":\"claude-hooks\",\"eventType\":[\"Stop\"],\"tags\":[\"ai\",\"decision-making\",\"productivity\",\"prompt\"],\"createdAt\":\"2024-12-31T00:00:00Z\",\"featured\":true},{\"id\":\"session-summarizer\",\"name\":\"Session Summarizer\",\"category\":\"Productivity\",\"description\":\"Creates a summary of work completed when sessions end.\",\"longDescription\":\"Generate comprehensive summaries of what Claude accomplished during each session. Perfect for daily standups, progress tracking, and documentation.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/session-summarizer\",\"author\":\"claude-hooks\",\"eventType\":[\"SessionEnd\"],\"tags\":[\"summary\",\"documentation\",\"productivity\"],\"createdAt\":\"2024-12-30T00:00:00Z\",\"featured\":false},{\"id\":\"quick-deploy\",\"name\":\"Quick Deploy\",\"category\":\"Productivity\",\"description\":\"Triggers deployment pipelines after successful builds.\",\"longDescription\":\"Automatically kick off deployment to staging or production after builds pass. Integrates with Vercel, Netlify, AWS, and other deployment platforms.\",\"repositoryUrl\":\"https://github.com/topics/claude-hooks/quick-deploy\",\"author\":\"claude-hooks\",\"eventType\":[\"PostToolUse\"],\"tags\":[\"deployment\",\"ci-cd\",\"automation\",\"productivity\"],\"createdAt\":\"2024-12-29T00:00:00Z\",\"featured\":false}]}"));}),
"[project]/lib/hooks.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-rsc] (ecmascript)");
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
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HookCategory"].SECURITY]: "bg-red-100 text-red-700 border-red-200",
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HookCategory"].CODE_QUALITY]: "bg-blue-100 text-blue-700 border-blue-200",
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HookCategory"].AUTOMATION]: "bg-green-100 text-green-700 border-green-200",
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HookCategory"].COMPLIANCE]: "bg-purple-100 text-purple-700 border-purple-200",
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HookCategory"].WORKFLOW]: "bg-orange-100 text-orange-700 border-orange-200",
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HookCategory"].PRODUCTIVITY]: "bg-teal-100 text-teal-700 border-teal-200",
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HookCategory"].NOTIFICATIONS]: "bg-yellow-100 text-yellow-700 border-yellow-200",
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HookCategory"].EXPERIMENTAL]: "bg-gray-100 text-gray-700 border-gray-200"
    };
    return colorMap[category] || "bg-gray-100 text-gray-700 border-gray-200";
}
}),
"[project]/app/components/Header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "border-b border-gray-200 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold text-gray-900 mb-2",
                    children: "Claude Hooks Directory"
                }, void 0, false, {
                    fileName: "[project]/app/components/Header.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-600",
                    children: "Discover community-created Claude Code hooks"
                }, void 0, false, {
                    fileName: "[project]/app/components/Header.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Header.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Header.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/HookGrid.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "HookGrid",
    ()=>HookGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HookGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HookGrid() from the server but HookGrid is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/HookGrid.tsx <module evaluation>", "HookGrid");
}),
"[project]/app/components/HookGrid.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "HookGrid",
    ()=>HookGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HookGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HookGrid() from the server but HookGrid is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/HookGrid.tsx", "HookGrid");
}),
"[project]/app/components/HookGrid.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HookGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/components/HookGrid.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HookGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/components/HookGrid.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HookGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HookGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/HookGrid.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function HomePage() {
    const hooks = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHooks"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HookGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HookGrid"], {
                initialHooks: hooks
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "border-t border-gray-200 bg-white mt-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 py-8 text-center text-sm text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://docs.claude.com/hooks",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "hover:text-blue-600 transition-colors",
                                    children: "Claude Code Documentation"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "hover:text-blue-600 transition-colors",
                                    children: "GitHub"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-gray-500",
                            children: "A directory of community-created Claude Code hooks"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cbaa6aa8._.js.map