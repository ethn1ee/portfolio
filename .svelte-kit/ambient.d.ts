
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 * 
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const STARSHIP_SHELL: string;
	export const MANPATH: string;
	export const __MISE_DIFF: string;
	export const GHOSTTY_RESOURCES_DIR: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const GHOSTTY_SURFACE_ID: string;
	export const TRANSIENT_PROMPT_MULTILINE_INDICATOR: string;
	export const TERM: string;
	export const SHELL: string;
	export const TMPDIR: string;
	export const INFISICAL_PROJECT_ID: string;
	export const GOBIN: string;
	export const TERM_PROGRAM_VERSION: string;
	export const GITHUB_PAT_MCP: string;
	export const npm_config_local_prefix: string;
	export const USER: string;
	export const HELIX_RUNTIME: string;
	export const TRANSIENT_PROMPT_COMMAND_RIGHT: string;
	export const NU_LOG_FORMAT: string;
	export const COMMAND_MODE: string;
	export const KUBECONFIG: string;
	export const SSH_AUTH_SOCK: string;
	export const PROMPT_INDICATOR_VI_NORMAL: string;
	export const CONFIG_DIR: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const ZEN_RECOVERY_KEY: string;
	export const PATH: string;
	export const NU_VERSION: string;
	export const npm_package_json: string;
	export const NU_LOG_DATE_FORMAT: string;
	export const GHOSTTY_SHELL_FEATURES: string;
	export const __CFBundleIdentifier: string;
	export const npm_command: string;
	export const PWD: string;
	export const INFISICAL_API_URL: string;
	export const CONTEXT7_API_KEY: string;
	export const CMD_DURATION_MS: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const GHFETCH_TOKEN: string;
	export const LUMEN_AI_MODEL: string;
	export const XPC_FLAGS: string;
	export const PROMPT_MULTILINE_INDICATOR: string;
	export const PROMPT_INDICATOR_VI_INSERT: string;
	export const OPENCODE_API_KEY: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const SHLVL: string;
	export const HOME: string;
	export const TERMINFO: string;
	export const PROMPT_INDICATOR: string;
	export const MISE_SHELL: string;
	export const ZELLIJ_CONFIG_DIR: string;
	export const STARSHIP_SESSION_KEY: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const XDG_DATA_DIRS: string;
	export const CARAPACE_BRIDGES: string;
	export const SPARKLE_ED_PUBLIC_KEY: string;
	export const SPARKLE_ED_PRIVATE_KEY: string;
	export const GHOSTTY_BIN_DIR: string;
	export const npm_config_user_agent: string;
	export const __MISE_SESSION: string;
	export const LAST_EXIT_CODE: string;
	export const OSLogRateLimit: string;
	export const LUMEN_AI_PROVIDER: string;
	export const HOMEBREW_TAP_TOKEN: string;
	export const npm_node_execpath: string;
	export const COLORTERM: string;
	export const _: string;
	export const NODE_ENV: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 * 
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * 
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		STARSHIP_SHELL: string;
		MANPATH: string;
		__MISE_DIFF: string;
		GHOSTTY_RESOURCES_DIR: string;
		TERM_PROGRAM: string;
		NODE: string;
		GHOSTTY_SURFACE_ID: string;
		TRANSIENT_PROMPT_MULTILINE_INDICATOR: string;
		TERM: string;
		SHELL: string;
		TMPDIR: string;
		INFISICAL_PROJECT_ID: string;
		GOBIN: string;
		TERM_PROGRAM_VERSION: string;
		GITHUB_PAT_MCP: string;
		npm_config_local_prefix: string;
		USER: string;
		HELIX_RUNTIME: string;
		TRANSIENT_PROMPT_COMMAND_RIGHT: string;
		NU_LOG_FORMAT: string;
		COMMAND_MODE: string;
		KUBECONFIG: string;
		SSH_AUTH_SOCK: string;
		PROMPT_INDICATOR_VI_NORMAL: string;
		CONFIG_DIR: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		ZEN_RECOVERY_KEY: string;
		PATH: string;
		NU_VERSION: string;
		npm_package_json: string;
		NU_LOG_DATE_FORMAT: string;
		GHOSTTY_SHELL_FEATURES: string;
		__CFBundleIdentifier: string;
		npm_command: string;
		PWD: string;
		INFISICAL_API_URL: string;
		CONTEXT7_API_KEY: string;
		CMD_DURATION_MS: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		npm_package_name: string;
		LANG: string;
		GHFETCH_TOKEN: string;
		LUMEN_AI_MODEL: string;
		XPC_FLAGS: string;
		PROMPT_MULTILINE_INDICATOR: string;
		PROMPT_INDICATOR_VI_INSERT: string;
		OPENCODE_API_KEY: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		SHLVL: string;
		HOME: string;
		TERMINFO: string;
		PROMPT_INDICATOR: string;
		MISE_SHELL: string;
		ZELLIJ_CONFIG_DIR: string;
		STARSHIP_SESSION_KEY: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		XDG_DATA_DIRS: string;
		CARAPACE_BRIDGES: string;
		SPARKLE_ED_PUBLIC_KEY: string;
		SPARKLE_ED_PRIVATE_KEY: string;
		GHOSTTY_BIN_DIR: string;
		npm_config_user_agent: string;
		__MISE_SESSION: string;
		LAST_EXIT_CODE: string;
		OSLogRateLimit: string;
		LUMEN_AI_PROVIDER: string;
		HOMEBREW_TAP_TOKEN: string;
		npm_node_execpath: string;
		COLORTERM: string;
		_: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 * 
 * ```
 * 
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
