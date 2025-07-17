/**
 * Funzioni di utilità per la navigazione nell'applicazione
 */

export const navigate = (path: string): void => {
  window.history.pushState({}, '', path);
  // Dispara un evento personalizzato per informare i componenti del cambio di navigazione
  window.dispatchEvent(new Event('navigationChange'));
};
