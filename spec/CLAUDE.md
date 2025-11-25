# First Project - Claude Hooks Directory

## Project Overview

**First Project** is a web application that showcases and catalogs community-created Claude Code hooks, making them discoverable and accessible to developers. The platform serves as a directory for exploring hook implementations, enabling users to find, browse, and adopt hooks for their Claude Code workflows.

### What are Claude Code Hooks?

Claude Code hooks are automated scripts that execute at specific lifecycle events during Claude's development workflow. They enable developers to:
- Enforce security policies and compliance rules
- Automate code formatting and validation
- Control tool permissions dynamically
- Extend Claude's capabilities with custom logic
- React to session events and tool executions

Hooks execute via shell commands and interact with Claude through a simple stdin/stdout protocol, making them easy to implement and share.

---

## MVP Scope

### Version 1.0 Goals

Focus on **browsing and discovering** community hooks. The MVP will:
- Display a curated collection of open-source Claude hooks
- Enable filtering by category
- Provide quick access to source repositories
- Create a visually appealing, responsive grid layout

**Out of Scope for MVP:**
- User authentication
- Hook submission system
- User ratings/comments
- Installation automation
- Hook testing/validation
- Search functionality

---

## Data Model

### Hook Entity

Each hook in the catalog contains the following attributes:

```typescript
interface Hook {
  id: string;                    // Unique identifier (slug)
  name: string;                  // Display name (e.g., "Auto Format on Save")
  category: HookCategory;        // Categorization
  description: string;           // Brief explanation (100-200 chars)
  longDescription?: string;      // Detailed explanation (optional, markdown)
  repositoryUrl: string;         // GitHub repository URL
  author: string;                // GitHub username or organization
  eventType: HookEventType[];    // Which Claude events trigger this hook
  tags: string[];                // Additional keywords for future search
  createdAt: string;             // ISO 8601 date
  featured?: boolean;            // Highlight exceptional hooks
}

enum HookCategory {
  SECURITY = "Security",
  CODE_QUALITY = "Code Quality",
  AUTOMATION = "Automation",
  COMPLIANCE = "Compliance",
  NOTIFICATIONS = "Notifications",
  WORKFLOW = "Workflow",
  PRODUCTIVITY = "Productivity",
  EXPERIMENTAL = "Experimental"
}

enum HookEventType {
  PRE_TOOL_USE = "PreToolUse",
  POST_TOOL_USE = "PostToolUse",
  PERMISSION_REQUEST = "PermissionRequest",
  USER_PROMPT_SUBMIT = "UserPromptSubmit",
  STOP = "Stop",
  SUBAGENT_STOP = "SubagentStop",
  SESSION_START = "SessionStart",
  SESSION_END = "SessionEnd",
  NOTIFICATION = "Notification",
  PRE_COMPACT = "PreCompact"
}
```

### Initial Data Source

For MVP, hooks will be stored in a static JSON file (`/public/data/hooks.json`) or directly in the codebase. Future versions can migrate to a database or CMS.

---

## User Interface Design

### Layout Structure

```
┌──────────────────────────────────────────────────────────────┐
│  Header                                                       │
│  - Logo + Title: "Claude Hooks Directory"                    │
│  - Tagline: "Discover community-created Claude Code hooks"   │
└──────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────┐
│  Filter Bar                                                   │
│  [All] [Security] [Code Quality] [Automation] [Compliance]   │
└──────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────┐
│  Hook Grid (Responsive)                                       │
│                                                               │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │ Hook 1  │  │ Hook 2  │  │ Hook 3  │  │ Hook 4  │        │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘        │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │ Hook 5  │  │ Hook 6  │  │ Hook 7  │  │ Hook 8  │        │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘        │
│                                                               │
└──────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────┐
│  Footer                                                       │
│  - Link to Claude Code documentation                         │
│  - GitHub repo for this project                              │
└──────────────────────────────────────────────────────────────┘
```

### Hook Card Design

Each hook card displays:

```
┌────────────────────────────────────────┐
│  [Category Badge]          [⭐Featured] │
│                                         │
│  Hook Name                              │
│  ────────────────────                   │
│  Short description text explaining      │
│  what the hook does in 1-2 lines.      │
│                                         │
│  👤 Author Name                         │
│  📋 Event Types: PreToolUse, PostTool   │
│                                         │
│  [View on GitHub →]                     │
└────────────────────────────────────────┘
```

**Card Styling:**
- Border with subtle shadow
- Hover effect: lift with increased shadow
- Category badge with color-coding
- Optional featured star icon
- GitHub link button with external icon

**Grid Responsiveness:**
- Desktop (≥1280px): 4 columns
- Tablet (768px-1279px): 3 columns
- Mobile (640px-767px): 2 columns
- Small mobile (<640px): 1 column

---

## Technical Implementation

### Tech Stack

Based on the current project setup:

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **UI Components**: Custom components (no component library for MVP)
- **Data Storage**: Static JSON file
- **Deployment**: Vercel (recommended) or similar

### File Structure

```
first_project/
├── app/
│   ├── page.tsx                 # Home page with hook grid
│   ├── layout.tsx               # Root layout (existing)
│   ├── globals.css              # Global styles (existing)
│   └── components/
│       ├── HookCard.tsx         # Individual hook card component
│       ├── HookGrid.tsx         # Grid container with filtering
│       ├── FilterBar.tsx        # Category filter buttons
│       └── Header.tsx           # Page header
├── lib/
│   ├── types.ts                 # TypeScript interfaces
│   └── hooks.ts                 # Hook data utilities
├── public/
│   └── data/
│       └── hooks.json           # Hook data (initial static data)
└── spec/
    └── CLAUDE.md                # This specification
```

### Component Architecture

#### 1. `app/page.tsx` (Main Page)

```typescript
// Server component - fetches hook data
export default async function HomePage() {
  const hooks = await getHooks(); // Load from JSON

  return (
    <main>
      <Header />
      <HookGrid initialHooks={hooks} />
    </main>
  );
}
```

#### 2. `app/components/HookGrid.tsx`

```typescript
// Client component - handles filtering
'use client';

export function HookGrid({ initialHooks }: { initialHooks: Hook[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const filteredHooks = filterHooksByCategory(initialHooks, selectedCategory);

  return (
    <>
      <FilterBar
        categories={getAllCategories(initialHooks)}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredHooks.map(hook => (
          <HookCard key={hook.id} hook={hook} />
        ))}
      </div>
    </>
  );
}
```

#### 3. `app/components/HookCard.tsx`

```typescript
// Pure presentational component
export function HookCard({ hook }: { hook: Hook }) {
  return (
    <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <CategoryBadge category={hook.category} />
        {hook.featured && <FeaturedStar />}
      </div>

      <h3 className="text-xl font-bold mb-2">{hook.name}</h3>
      <p className="text-gray-600 mb-4">{hook.description}</p>

      <div className="space-y-2 text-sm text-gray-500 mb-4">
        <div>👤 {hook.author}</div>
        <div>📋 {hook.eventType.join(', ')}</div>
      </div>

      <a
        href={hook.repositoryUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View on GitHub →
      </a>
    </article>
  );
}
```

#### 4. `app/components/FilterBar.tsx`

```typescript
// Filter category buttons
'use client';

export function FilterBar({
  categories,
  selected,
  onSelect
}: FilterBarProps) {
  return (
    <nav className="flex gap-2 mb-8 overflow-x-auto">
      <FilterButton
        label="All"
        active={selected === 'All'}
        onClick={() => onSelect('All')}
      />
      {categories.map(category => (
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
```

---

## Sample Data

### Initial Hook Collection (Seed Data)

Curate 12-20 initial hooks covering common use cases:

**Security Hooks:**
1. **Sensitive File Protector** - Prevents writing to secrets files
2. **Command Whitelist** - Restricts bash commands to approved list
3. **External API Blocker** - Blocks network requests to unauthorized domains

**Code Quality Hooks:**
4. **Auto Prettier** - Formats code after Write/Edit operations
5. **ESLint Validator** - Validates code before committing
6. **Type Check Enforcer** - Runs TypeScript checks on save

**Automation Hooks:**
7. **Git Auto-Commit** - Commits changes after successful edits
8. **Test Runner** - Runs test suite after code changes
9. **Build Validator** - Ensures project builds after modifications

**Compliance Hooks:**
10. **Audit Logger** - Logs all tool executions to audit trail
11. **License Checker** - Validates dependencies have approved licenses
12. **Change Request Tracker** - Links code changes to tickets

**Workflow Hooks:**
13. **Slack Notifier** - Sends notifications when session ends
14. **Context Compactor** - Intelligently manages session context
15. **Environment Switcher** - Auto-configures env for different projects

**Productivity Hooks:**
16. **Smart Stop** - Uses LLM to determine if Claude should continue
17. **Session Summarizer** - Creates summary at SessionEnd
18. **Quick Deploy** - Triggers deployment after successful builds

### Example Hook Entry

```json
{
  "id": "auto-prettier",
  "name": "Auto Prettier",
  "category": "Code Quality",
  "description": "Automatically formats code using Prettier after every Write or Edit operation.",
  "longDescription": "This hook ensures consistent code formatting across your project by running Prettier immediately after Claude makes changes. It integrates seamlessly with your existing Prettier configuration and supports all file types Prettier can format.",
  "repositoryUrl": "https://github.com/example/claude-auto-prettier",
  "author": "example-dev",
  "eventType": ["PostToolUse"],
  "tags": ["formatting", "prettier", "code-quality", "automation"],
  "createdAt": "2025-01-15T00:00:00Z",
  "featured": true
}
```

---

## Implementation Phases

### Phase 1: Core Setup (Week 1)
- [ ] Define TypeScript types and interfaces
- [ ] Create static hooks.json with 15+ sample hooks
- [ ] Set up basic page structure and routing

### Phase 2: Component Development (Week 1-2)
- [ ] Build HookCard component with styling
- [ ] Implement HookGrid with responsive layout
- [ ] Create FilterBar with category filtering
- [ ] Design and implement Header component

### Phase 3: Polish & Deploy (Week 2)
- [ ] Add hover effects and animations
- [ ] Implement responsive design testing
- [ ] Add footer with links
- [ ] Deploy to production (Vercel)

---

## Design Guidelines

### Color Scheme

Use Tailwind CSS utilities with semantic color categories:

- **Security**: Red/Pink shades (`bg-red-100`, `text-red-700`)
- **Code Quality**: Blue shades (`bg-blue-100`, `text-blue-700`)
- **Automation**: Green shades (`bg-green-100`, `text-green-700`)
- **Compliance**: Purple shades (`bg-purple-100`, `text-purple-700`)
- **Workflow**: Orange shades (`bg-orange-100`, `text-orange-700`)
- **Productivity**: Teal shades (`bg-teal-100`, `text-teal-700`)
- **Notifications**: Yellow shades (`bg-yellow-100`, `text-yellow-700`)
- **Experimental**: Gray shades (`bg-gray-100`, `text-gray-700`)

### Typography

- **Headings**: Geist Sans (already configured)
- **Body**: Geist Sans
- **Code snippets**: Geist Mono
- **Sizes**: Use Tailwind's typography scale (`text-sm`, `text-base`, `text-xl`, etc.)

### Spacing & Layout

- **Container max-width**: `max-w-7xl mx-auto px-4`
- **Card padding**: `p-6`
- **Grid gap**: `gap-6`
- **Section spacing**: `py-12` between major sections

---

## Future Enhancements (Post-MVP)

### V2.0 Features
- **Search**: Full-text search across hook names, descriptions, tags
- **Advanced Filtering**: Multi-select categories, event types
- **Hook Details Page**: Dedicated page per hook with full documentation
- **Installation Guide**: Step-by-step setup instructions
- **Code Preview**: Display hook configuration directly in the UI

### V3.0 Features
- **User Submissions**: Community can submit new hooks
- **Authentication**: GitHub OAuth for submissions
- **Ratings & Reviews**: User feedback system
- **Collections**: Curated hook bundles for specific workflows
- **Analytics**: Track popular hooks and categories

### V4.0 Features
- **Hook Marketplace**: Premium hooks with licensing
- **One-Click Install**: Automated hook installation via API
- **Testing Sandbox**: Browser-based hook testing environment
- **Hook Generator**: AI-powered hook creation assistant

---

## Success Metrics

### MVP Goals

- **Launch**: Deploy functional site with 15+ hooks
- **Performance**: Page load < 2 seconds
- **Responsiveness**: Works on mobile, tablet, desktop
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO**: Basic meta tags and semantic HTML

### Growth Metrics (Post-Launch)

- Unique visitors per month
- Hook click-through rate to GitHub
- Most popular categories
- Return visitor rate
- Time on site / engagement

---

## Resources & References

### Claude Code Documentation
- [Hooks Documentation](https://docs.claude.com/hooks)
- [Event Reference](https://docs.claude.com/hooks/events)
- [Configuration Guide](https://docs.claude.com/hooks/configuration)

### Design Inspiration
- GitHub Marketplace
- npm package directory
- VS Code Extension Marketplace
- Awesome Lists on GitHub

### Community
- Create Discord/Slack for hook creators
- GitHub Discussions for feature requests
- Submit hooks via Pull Requests to curated list

---

## Questions & Decisions

### Open Questions

1. **Hook Verification**: Should we verify hooks work before listing? (Post-MVP)
2. **Licensing**: Require specific OSS licenses for listed hooks?
3. **Quality Standards**: Define minimum documentation requirements?
4. **Branding**: Final project name and domain?

### Decisions Made

- ✅ Static JSON for MVP (database later)
- ✅ No authentication required for browsing
- ✅ Grid layout over list view
- ✅ Next.js App Router architecture
- ✅ Tailwind for styling (no component library)

---

## Getting Started for Developers

### Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

### Adding Hooks to the Catalog

Edit `/public/data/hooks.json`:

```json
{
  "hooks": [
    {
      "id": "your-hook-slug",
      "name": "Your Hook Name",
      "category": "Security",
      "description": "Brief description",
      "repositoryUrl": "https://github.com/...",
      "author": "username",
      "eventType": ["PreToolUse"],
      "tags": ["security", "validation"],
      "createdAt": "2025-01-20T00:00:00Z"
    }
  ]
}
```

---

## License

This project (First Project) is licensed under MIT. Individual hooks maintain their own licenses as specified in their repositories.

---

**Document Version**: 1.0
**Last Updated**: 2025-01-20
**Author**: First Project Team
