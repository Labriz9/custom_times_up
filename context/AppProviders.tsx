import React from 'react';
import { GameProvider } from './GameContext';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
      <GameProvider>
        {children}
      </GameProvider>
  );
}