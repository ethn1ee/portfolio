import { g as escape_html, h as ensure_array_like, o as attr } from "./dev-BytQt_9l.js";
//#region .svelte-kit/adapter-bun/entries/pages/_page.svelte.js
var me_default = {
	sources: {
		avif: "/_app/immutable/assets/me.BG-gki_E.avif 768w, /_app/immutable/assets/me.BeOpTIAi.avif 1536w",
		webp: "/_app/immutable/assets/me.jO6pu7N9.webp 768w, /_app/immutable/assets/me.BjAj2pb3.webp 1536w",
		jpeg: "/_app/immutable/assets/me.M8bjHBKs.jpeg 768w, /_app/immutable/assets/me.CUcWClJh.jpeg 1536w"
	},
	img: {
		src: "/_app/immutable/assets/me.CUcWClJh.jpeg",
		w: 1536,
		h: 2048
	}
};
var homelab_default = {
	sources: {
		avif: "/_app/immutable/assets/homelab.9r-0S9Hh.avif 400w, /_app/immutable/assets/homelab.DSgIrn2m.avif 800w",
		webp: "/_app/immutable/assets/homelab.gx9YIFhW.webp 400w, /_app/immutable/assets/homelab.BqCs2gnf.webp 800w",
		png: "/_app/immutable/assets/homelab.CGoVInKQ.png 400w, /_app/immutable/assets/homelab.ZtrsrJSH.png 800w"
	},
	img: {
		src: "/_app/immutable/assets/homelab.ZtrsrJSH.png",
		w: 800,
		h: 800
	}
};
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let social = [
			{
				name: "github",
				href: "https://github.com/thdxg"
			},
			{
				name: "linkedin",
				href: "https://linkedin.com/in/ethantlee"
			},
			{
				name: "resume",
				href: "/resume"
			}
		];
		$$renderer.push(`<header class="glitch mb-12 flex justify-between gap-4"><div class="img-bg size-45 rounded-lg">`);
		if (typeof me_default === "string") {
			$$renderer.push("<!--[0-->");
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<img${attr("src", me_default)} alt="me" class="block size-full rounded-lg object-cover object-bottom grayscale"/>`);
			$$renderer.push(`<!--]-->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<picture><!--[-->`);
			const each_array = ensure_array_like(Object.entries(me_default.sources));
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let [format, srcset] = each_array[$$index];
				$$renderer.push(`<source${attr("srcset", srcset)}${attr("type", "image/" + format)}/>`);
			}
			$$renderer.push(`<!--]--> <img${attr("src", me_default.img.src)} alt="me" class="block size-full rounded-lg object-cover object-bottom grayscale"${attr("width", me_default.img.w)}${attr("height", me_default.img.h)}/></picture>`);
		}
		$$renderer.push(`<!--]--></div> <nav class="flex gap-4"><!--[-->`);
		const each_array_1 = ensure_array_like(social);
		for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
			let link = each_array_1[$$index_1];
			$$renderer.push(`<a${attr("href", link.href)} target="_blank" class="h-fit">${escape_html(link.name)}</a>`);
		}
		$$renderer.push(`<!--]--></nav></header> <main class="glitch space-y-12"><h1 class="glitch-initial">Ethan Lee</h1> <section id="bio" class="space-y-2 text-neutral-400"><p>founding engineer of <a href="https://huddlesurety.co" target="_blank">huddle surety</a> <br/> studying distributed systems at carnegie mellon <br/> kubernetes, next.js contributor</p></section> <section id="homelab" class="flex flex-col gap-4 md:flex-row"><div class="img-bg size-50 shrink-0">`);
		if (typeof homelab_default === "string") {
			$$renderer.push("<!--[0-->");
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<img${attr("src", homelab_default)} alt="homelab" class="size-full"/>`);
			$$renderer.push(`<!--]-->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<picture><!--[-->`);
			const each_array_2 = ensure_array_like(Object.entries(homelab_default.sources));
			for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
				let [format, srcset] = each_array_2[$$index_2];
				$$renderer.push(`<source${attr("srcset", srcset)}${attr("type", "image/" + format)}/>`);
			}
			$$renderer.push(`<!--]--> <img${attr("src", homelab_default.img.src)} alt="homelab" class="size-full"${attr("width", homelab_default.img.w)}${attr("height", homelab_default.img.h)}/></picture>`);
		}
		$$renderer.push(`<!--]--></div> <p>i build things in web and cloud <br/> this is my raspberry pi cluster running kubernetes <br/> it runs my password manager, git server, observability stacks, and this website <br/> check out the whole setup <a href="https://github.com/thdxg/homelab" target="_blank">here</a></p></section> <section id="experience"><p>things i’ve done so far:</p> <ul><li>published an <a href="https://dl.acm.org/doi/10.1145/3772318.3790875" target="_blank">hci paper</a> to acm (2026)</li> <li>swe intern at ukg (2025 summer)</li> <li>swe intern at estreamly (2024 summer)</li></ul></section> <section id="projects"><p>things i’ve built for fun:</p> <ul><li><a href="https://github.com/thdxg/macterm" target="_blank">macterm</a> - a native macos terminal with vertical tabs built with libghostty and swiftui</li> <li><a href="https://github.com/thdxg/llog" target="_blank">llog</a> - a fully local journaling CLI written in go</li> <li><a href="https://github.com/thdxg/ttype" target="_blank">ttype</a> - a simple bring-your-own-text typing test CLI written in rust</li> <li><a href="https://github.com/thdxg/ghfetch" target="_blank">ghfetch</a> - neofetch for github profiles written in go</li></ul></section></main>`);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte-I2sCLcY-.js.map