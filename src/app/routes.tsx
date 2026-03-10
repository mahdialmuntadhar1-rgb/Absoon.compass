import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constants/routes.constants';

import { AppShell } from '../components/layout/AppShell';
import { Landing } from '../pages/Landing';
import { OnboardingFlow } from '../pages/Onboarding/OnboardingFlow';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { CompassChat } from '../pages/Chat/CompassChat';
import { GoalsList } from '../pages/Goals/GoalsList';
import { ReflectionFeed } from '../pages/Reflection/ReflectionFeed';
import { Insights } from '../pages/Insights/Insights';
import { Settings } from '../pages/Settings/Settings';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.LANDING} element={<Landing />} />
      <Route path={ROUTES.ONBOARDING} element={<OnboardingFlow />} />
      
      <Route element={<AppShell />}>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.COMPASS} element={<CompassChat />} />
        <Route path={ROUTES.GOALS} element={<GoalsList />} />
        <Route path={ROUTES.JOURNAL} element={<ReflectionFeed />} />
        <Route path={ROUTES.INSIGHTS} element={<Insights />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
      </Route>
    </Routes>
  );
}
