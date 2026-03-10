import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ROUTES } from '../constants/routes.constants';
import { Compass } from 'lucide-react';

export function Landing() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      <Compass className="w-24 h-24 text-[var(--gold)] mb-8 animate-float" />
      <h1 className="text-6xl font-display text-[var(--text-primary)] mb-4 tracking-tight">Absoon.compass</h1>
      <p className="text-xl text-[var(--text-muted)] mb-12 max-w-md font-light">Know your direction. Own your path.</p>
      
      <Link to={ROUTES.ONBOARDING}>
        <Button size="lg" className="text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(201,168,76,0.3)]">
          Begin Journey
        </Button>
      </Link>
    </div>
  );
}
