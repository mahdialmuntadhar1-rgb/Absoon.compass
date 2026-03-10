import { PageWrapper } from '../../components/layout/PageWrapper';
import { useUserStore } from '../../store/userStore';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

export function Settings() {
  const user = useUserStore((state) => state.user);

  return (
    <PageWrapper className="max-w-3xl mx-auto space-y-8">
      <header>
        <h1 className="text-4xl font-display text-[var(--text-primary)] mb-2">Ship's Log</h1>
        <p className="text-[var(--text-muted)]">Manage your profile and preferences.</p>
      </header>

      <div className="compass-card p-8 space-y-6">
        <h2 className="text-xl font-display text-[var(--gold)] border-b border-[var(--border)] pb-4">Captain Profile</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm text-[var(--text-muted)]">Full Name</label>
            <Input defaultValue={user?.name} />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-[var(--text-muted)]">Email</label>
            <Input defaultValue={user?.email} disabled />
          </div>
        </div>

        <div className="pt-4">
          <Button>Save Changes</Button>
        </div>
      </div>

      <div className="compass-card p-8 border-[var(--rose)]/30">
        <h2 className="text-xl font-display text-[var(--rose)] mb-4">Danger Zone</h2>
        <p className="text-sm text-[var(--text-muted)] mb-4">Once you delete your account, there is no going back. Please be certain.</p>
        <Button variant="destructive">Delete Account</Button>
      </div>
    </PageWrapper>
  );
}
