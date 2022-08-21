import { c as create_ssr_component, a as add_attribute } from "../../_app/immutable/chunks/index-2435e811.js";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".form-container.svelte-4v8eak.svelte-4v8eak.svelte-4v8eak.svelte-4v8eak{margin:0 auto;max-width:600px}.form-container.svelte-4v8eak form.svelte-4v8eak.svelte-4v8eak.svelte-4v8eak{display:flex;flex-direction:column;max-width:400px;margin:0 auto;padding:50px}.form-container.svelte-4v8eak form input.svelte-4v8eak.svelte-4v8eak.svelte-4v8eak{padding:20px;font-size:24px;margin-bottom:25px;transition:all 300ms ease-in}.form-container.svelte-4v8eak .result-container.svelte-4v8eak.svelte-4v8eak.svelte-4v8eak{backdrop-filter:blur(10px);color:#fff;border-radius:15px}.form-container.svelte-4v8eak .result-container.svelte-4v8eak>div.svelte-4v8eak.svelte-4v8eak{padding:20px}.form-container.svelte-4v8eak .result-container.svelte-4v8eak>div.svelte-4v8eak>div.svelte-4v8eak:not(:last-child){margin-bottom:40px}.form-container.svelte-4v8eak .result-container.svelte-4v8eak>div.svelte-4v8eak>div.svelte-4v8eak:first-child{margin-bottom:25px}.form-container.svelte-4v8eak .result-container .searched-city.svelte-4v8eak.svelte-4v8eak.svelte-4v8eak{display:flex;align-items:center;font-size:28px;gap:10px}.form-container.svelte-4v8eak .result-container .main-temp.svelte-4v8eak.svelte-4v8eak.svelte-4v8eak{display:flex;flex-direction:column;align-items:center;line-height:1}.form-container.svelte-4v8eak .result-container .main-temp.svelte-4v8eak>div.svelte-4v8eak.svelte-4v8eak{display:flex;font-size:36px;margin-bottom:10px}.form-container.svelte-4v8eak .result-container .main-temp>div .temperature.svelte-4v8eak.svelte-4v8eak.svelte-4v8eak{font-size:65px;color:#d0e8ff}.form-container.svelte-4v8eak .result-container .main-temp.svelte-4v8eak>span.svelte-4v8eak.svelte-4v8eak{font-size:16px}.form-container.svelte-4v8eak .result-container .other-info.svelte-4v8eak.svelte-4v8eak.svelte-4v8eak{display:flex;justify-content:space-between}.form-container.svelte-4v8eak .result-container .other-info.svelte-4v8eak>div.svelte-4v8eak.svelte-4v8eak{display:flex;gap:10px;align-items:center}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let city = "";
  $$result.css.add(css);
  return `<div class="${"form-container svelte-4v8eak"}"><form action="${"#"}" class="${"svelte-4v8eak"}"><input placeholder="${"Type a city ..."}" type="${"text"}" name="${"searchedCity"}" required class="${"svelte-4v8eak"}"${add_attribute("value", city, 0)}>
		<button type="${"submit"}">What&#39;s the temperature dude?</button></form>

	${`${``}`}
</div>`;
});
export {
  Routes as default
};
