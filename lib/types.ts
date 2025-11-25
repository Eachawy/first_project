// TypeScript types for Claude Hooks Directory

export enum HookCategory {
  SECURITY = "Security",
  CODE_QUALITY = "Code Quality",
  AUTOMATION = "Automation",
  COMPLIANCE = "Compliance",
  NOTIFICATIONS = "Notifications",
  WORKFLOW = "Workflow",
  PRODUCTIVITY = "Productivity",
  EXPERIMENTAL = "Experimental",
}

export enum HookEventType {
  PRE_TOOL_USE = "PreToolUse",
  POST_TOOL_USE = "PostToolUse",
  PERMISSION_REQUEST = "PermissionRequest",
  USER_PROMPT_SUBMIT = "UserPromptSubmit",
  STOP = "Stop",
  SUBAGENT_STOP = "SubagentStop",
  SESSION_START = "SessionStart",
  SESSION_END = "SessionEnd",
  NOTIFICATION = "Notification",
  PRE_COMPACT = "PreCompact",
}

export interface Hook {
  id: string;
  name: string;
  category: HookCategory;
  description: string;
  longDescription?: string;
  repositoryUrl: string;
  author: string;
  eventType: HookEventType[];
  tags: string[];
  createdAt: string;
  featured?: boolean;
}

export interface FilterBarProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export interface HookCardProps {
  hook: Hook;
}

export interface HookGridProps {
  initialHooks: Hook[];
}
