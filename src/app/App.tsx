import { BrowserRouter } from 'react-router-dom';
import { Providers } from './providers';
import { AppRoutes } from './routes';
import { AnimatePresence } from 'motion/react';

export function App() {
  return (
    <Providers>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <AppRoutes />
        </AnimatePresence>
      </BrowserRouter>
    </Providers>
  );
}
