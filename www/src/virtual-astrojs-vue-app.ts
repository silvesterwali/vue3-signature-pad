import type { App } from "vue";

/**
 * Minimal runtime stub for the Vue renderer virtual module. The official
 * integration normally injects this via a Vite virtual import, but the
 * compiled server bundle that Vercel runs can keep the `virtual:` specifier.
 * Aliasing to this file ensures the import resolves to a real module at
 * runtime.
 */
export async function setup(_app: App) {
	// No-op: the docs site does not need extra Vue app wiring.
}
