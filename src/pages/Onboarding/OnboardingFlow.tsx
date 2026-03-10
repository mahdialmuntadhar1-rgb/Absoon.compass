import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes.constants';
import { StepIdentity } from './StepIdentity';
import { StepQuadrants } from './StepQuadrants';
import { StepAIIntro } from './StepAIIntro';

export function OnboardingFlow() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else navigate(ROUTES.DASHBOARD);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-6">
      <div className="compass-card w-full max-w-2xl p-12 relative overflow-hidden">
        {step === 1 && <StepIdentity onNext={nextStep} />}
        {step === 2 && <StepQuadrants onNext={nextStep} />}
        {step === 3 && <StepAIIntro onNext={nextStep} />}
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--bg-elevated)]">
          <div className="h-full bg-[var(--gold)] transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }} />
        </div>
      </div>
    </div>
  );
}
