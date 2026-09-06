'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface SecretRevealContextType {
  isRevealed: boolean;
  reveal: () => void;
  reset: () => void;
}

const SecretRevealContext = createContext<SecretRevealContextType | undefined>(undefined);

export function SecretRevealProvider({ children }: { children: ReactNode }) {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  useEffect(() => {
    // Check localStorage for reveal state
    const savedState = localStorage.getItem('limepak-secret-revealed');
    if (savedState === 'true') {
      setIsRevealed(true);
    }
  }, []);

  const reveal = () => {
    setIsRevealed(true);
    localStorage.setItem('limepak-secret-revealed', 'true');
    // Dispatch custom event for any components that need to react
    window.dispatchEvent(new CustomEvent('secret-revealed'));
  };

  const reset = () => {
    setIsRevealed(false);
    localStorage.removeItem('limepak-secret-revealed');
  };

  const value: SecretRevealContextType = {
    isRevealed,
    reveal,
    reset,
  };

  return (
    <SecretRevealContext.Provider value={value}>
      {children}
    </SecretRevealContext.Provider>
  );
}

export function useSecretReveal() {
  const context = useContext(SecretRevealContext);
  if (!context) {
    throw new Error('useSecretReveal must be used within a SecretRevealProvider');
  }
  return context;
}
