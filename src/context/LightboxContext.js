import { createContext, useContext } from 'react';

export const LightboxContext = createContext({
  openLightbox: () => {},
});

export function useLightbox() {
  return useContext(LightboxContext);
}
