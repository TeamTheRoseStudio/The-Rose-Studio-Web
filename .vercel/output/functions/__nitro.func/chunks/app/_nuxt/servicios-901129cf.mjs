import _sfc_main$1 from './visualImageWithHeadingAndText-672b5e97.mjs';
import _sfc_main$2 from './howWeDevelopYourIdea-ad4608f2.mjs';
import __nuxt_component_2 from './comparisonPriceTable-66f796f7.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './titleWithUnderline-9080ef91.mjs';
import '../server.mjs';
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
import './buttonTRS-67e21aba.mjs';
import './nuxt-link-15b2078b.mjs';
import './nuxt-img-e5fcc954.mjs';
import './cardHowWeDevelopYourIdea-0d04b60e.mjs';
import './cardPlansPrice-30c2b21a.mjs';
import './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  __name: "servicios",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VisualImageWithHeadingAndText = _sfc_main$1;
      const _component_HowWeDevelopYourIdea = _sfc_main$2;
      const _component_ComparisonPriceTable = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_VisualImageWithHeadingAndText, null, null, _parent));
      _push(ssrRenderComponent(_component_HowWeDevelopYourIdea, null, null, _parent));
      _push(`<section>`);
      _push(ssrRenderComponent(_component_ComparisonPriceTable, null, null, _parent));
      _push(`</section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/organisms/marketing/serviceSections/servicios.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=servicios-901129cf.mjs.map
