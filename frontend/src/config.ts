/**
 * Runtime configuration
 *
 * In development Vite proxies /api → localhost:4607,
 * so API_BASE is empty (relative URLs work).
 *
 * In production the frontend is a separate static site,
 * so API_BASE must point to the backend origin.
 */
export const API_BASE: string =
  import.meta.env.VITE_API_URL || '';

// UI Configuration - Control visibility of UI elements
// Set VITE_OAUTH_ENABLED=false to hide OAuth login buttons
export const OAUTH_ENABLED = false;
export const ICP_ENABLED = false;

// Set VITE_STRIPE_ENABLED=false to hide Stripe/Credit Card payment option
export const STRIPE_ENABLED = import.meta.env.VITE_STRIPE_ENABLED !== 'false';