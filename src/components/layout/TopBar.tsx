import { Menu } from 'lucide-react';
import { useUIStore } from '../../store/uiStore';
import { Avatar } from '../shared/Avatar';

export function TopBar() {
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <header className="h-16 border-b border-[var(--border)] bg-[var(--bg-secondary)]/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-30">
      <button 
        onClick={toggleSidebar}
        className="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors"
      >
        <Menu className="w-5 h-5" />
      </button>
      <div className="flex items-center gap-4">
        <Avatar fallback="EX" />
      </div>
    </header>
  );
}
