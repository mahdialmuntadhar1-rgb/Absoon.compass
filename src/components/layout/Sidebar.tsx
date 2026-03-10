import { NavLink } from 'react-router-dom';
import { Compass, Target, BookOpen, Settings, Map } from 'lucide-react';
import { useUIStore } from '../../store/uiStore';
import { ROUTES } from '../../constants/routes.constants';
import { cn } from '../../utils/cn';

const NAV_ITEMS = [
  { path: ROUTES.DASHBOARD, label: 'Dashboard', icon: Map },
  { path: ROUTES.COMPASS, label: 'Compass', icon: Compass },
  { path: ROUTES.GOALS, label: 'Goals', icon: Target },
  { path: ROUTES.JOURNAL, label: 'Journal', icon: BookOpen },
  { path: ROUTES.SETTINGS, label: 'Settings', icon: Settings },
];

export function Sidebar() {
  const sidebarOpen = useUIStore((state) => state.sidebarOpen);

  return (
    <aside className={cn(
      "fixed top-0 left-0 h-full w-64 bg-[var(--bg-secondary)] border-r border-[var(--border)] transition-transform duration-300 z-40",
      !sidebarOpen && "-translate-x-full"
    )}>
      <div className="p-6">
        <h1 className="text-2xl font-display text-[var(--gold)] flex items-center gap-2">
          <Compass className="w-6 h-6" />
          Absoon
        </h1>
      </div>
      <nav className="px-4 mt-8 space-y-2">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors",
              isActive 
                ? "bg-[var(--bg-elevated)] text-[var(--gold)] border border-[var(--border)]" 
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]/50"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
