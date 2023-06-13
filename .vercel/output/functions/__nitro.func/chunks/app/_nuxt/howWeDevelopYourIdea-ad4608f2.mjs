import _sfc_main$1 from './cardHowWeDevelopYourIdea-0d04b60e.mjs';
import { R as Rt } from '../server.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/inputs';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/themes';
import '@formkit/observer';
import 'defu';
import '../../nitro/vercel.mjs';
import 'node-fetch-native/polyfill';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';

const _sfc_main = {
  __name: "howWeDevelopYourIdea",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardHowWeDevelopYourIdea = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white h-full py-20 px-4 lg:px-48" }, _attrs))}><div><h2 class="mb-4 text-start text-4xl tracking-tight font-extrabold">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.title)}</h2><div class="bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[4px] w-[280px] md:w-[220px] lg:w-[280px] mb-3"></div></div><div class="grid grid-cols-1 md:grid-cols-2 place-items-start place-content-center mt-20 gap-20">`);
      _push(ssrRenderComponent(_component_CardHowWeDevelopYourIdea, null, null, _parent));
      _push(ssrRenderComponent(_component_CardHowWeDevelopYourIdea, null, null, _parent));
      _push(ssrRenderComponent(_component_CardHowWeDevelopYourIdea, null, null, _parent));
      _push(ssrRenderComponent(_component_CardHowWeDevelopYourIdea, null, null, _parent));
      _push(ssrRenderComponent(_component_CardHowWeDevelopYourIdea, null, null, _parent));
      _push(ssrRenderComponent(_component_CardHowWeDevelopYourIdea, null, null, _parent));
      _push(ssrRenderComponent(_component_CardHowWeDevelopYourIdea, null, null, _parent));
      _push(ssrRenderComponent(_component_CardHowWeDevelopYourIdea, null, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/organisms/marketing/serviceSections/howWeDevelopYourIdea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=howWeDevelopYourIdea-ad4608f2.mjs.map
