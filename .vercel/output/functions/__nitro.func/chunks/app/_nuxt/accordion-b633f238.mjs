import { R as Rt } from '../server.mjs';
import { resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "accordion",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps(_attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><div id="accordion-collapse" data-accordion="collapse"><!--[-->`);
      ssrRenderList(__props.blok.accordion_item, (accordion_item, index) => {
        _push(`<div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_editable, accordion_item))}><h2${ssrRenderAttr("id", `accordion-collapse-heading-${accordion_item.index}`)}><button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"${ssrRenderAttr("data-accordion-target", `#accordion-collapse-body-${accordion_item.index}`)}${ssrRenderAttr("aria-expanded", accordion_item.expanded)}${ssrRenderAttr("aria-controls", `accordion-collapse-body-${accordion_item.index}`)}><div class="prose">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(accordion_item.title)}</div><svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></h2><div${ssrRenderAttr("id", `accordion-collapse-body-${accordion_item.index}`)} class="hidden"${ssrRenderAttr("aria-labelledby", `accordion-collapse-heading-${accordion_item.index}`)}><div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"><div class="mb-2 prose">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(accordion_item.text)}</div></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/molecules/accordion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=accordion-b633f238.mjs.map
