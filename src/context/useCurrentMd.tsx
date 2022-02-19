import type { ReactNode } from 'react';
import { useContext, createContext, Dispatch } from 'react';
import { ViewAction, ViewState } from './viewReducer';

type CurrentMd = {
  ty: string;
  id: string;
  state: ViewState;
  dispatch: Dispatch<ViewAction>; 
};

const CurrContext = createContext<CurrentMd | undefined>(undefined);

export function ProvideCurrentMd({
  children,
  value,
}: {
  children: ReactNode;
  value: CurrentMd;
}) {
  return <CurrContext.Provider value={value}>{children}</CurrContext.Provider>;
}

export const useCurrentMdContext = () => {
  const context = useContext(CurrContext);
  if (context === undefined) {
    throw new Error('useCurrentContext must be used within a provider');
  }
  return context;
};
