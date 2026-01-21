// react-router.config.ts
import { type Config } from "@react-router/dev/config";

export default {
  ssr: true, // Keep SSR enabled for the app in general
  
  // Add all your static marketing paths here
  prerender: [
    "/",
    "/services/regular", // Fixed typo from 'regulare'
    "/services/deep-clean", // Assuming 'deep' meant your deep clean route
    // Add other service routes here as needed
  ],
} satisfies Config;