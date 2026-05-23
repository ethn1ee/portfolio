//#region .svelte-kit/adapter-bun/manifest.js
const manifest = (() => {
	function __memo(fn) {
		let value;
		return () => value ??= value = fn();
	}
	return {
		appDir: "_app",
		appPath: "_app",
		assets: new Set([
			"card.png",
			"iosevka.woff2",
			".DS_Store",
			"robots.txt",
			"favicon.svg"
		]),
		mimeTypes: {
			".png": "image/png",
			".woff2": "font/woff2",
			".txt": "text/plain",
			".svg": "image/svg+xml"
		},
		_: {
			client: {
				start: "_app/immutable/entry/start.CbqlJ1cH.js",
				app: "_app/immutable/entry/app.CJhRrsdF.js",
				imports: [
					"_app/immutable/entry/start.CbqlJ1cH.js",
					"_app/immutable/chunks/C3rnXgNk.js",
					"_app/immutable/chunks/Cf5OCA1V.js",
					"_app/immutable/entry/app.CJhRrsdF.js",
					"_app/immutable/chunks/Cf5OCA1V.js",
					"_app/immutable/chunks/CFXd3wAK.js",
					"_app/immutable/chunks/DEDqjojZ.js"
				],
				stylesheets: [],
				fonts: [],
				uses_env_dynamic_public: false
			},
			nodes: [
				__memo(() => import("./chunks/0-Crm9MSU8.js")),
				__memo(() => import("./chunks/1-CjfWbrKI.js")),
				__memo(() => import("./chunks/2-zHOcWliR.js"))
			],
			remotes: {},
			routes: [{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: {
					layouts: [0],
					errors: [1],
					leaf: 2
				},
				endpoint: null
			}, {
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import("./chunks/_server.ts-CWohQr9D.js"))
			}],
			prerendered_routes: /* @__PURE__ */ new Set([]),
			matchers: async () => {
				return {};
			},
			server_assets: {}
		}
	};
})();
const prerendered = /* @__PURE__ */ new Set([]);
const base = "";
//#endregion
export { base, manifest, prerendered };

//# sourceMappingURL=manifest.js.map