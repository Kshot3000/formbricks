/// <reference types="vite/client" />

declare global {
  interface Window {
    /** GTM's data layer. We push via the standard `window.dataLayer = window.dataLayer || []` idiom. */
    dataLayer?: Record<string, unknown>[];
    __formbricksNonce?: string;
    /** A host page's AMD loader (e.g. RequireJS), if it has one. The SDK hides it while its UMD bundles load. */
    define?: unknown;
    formbricksSurveys?: {
      renderSurvey: (options: unknown) => void;
      // Optional: the surveys bundle is served by the (possibly self-hosted, older)
      // Formbricks instance, so it may predate setNonce.
      setNonce?: (nonce: string | undefined) => void;
    };
  }
}

export {};
