import { R as Rt } from '../server.mjs';
import { resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps } from 'vue/server-renderer';
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
  __name: "testimonialCard",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-10 bg-white border border-black/50 shadow dark:bg-gray-800 dark:border-gray-700" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><div class="text-center pb-6 text-terciario font-semibold text-lg">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.title)}</div><a class=""><div class="mb-2 text-center">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.subtitle)}</div></a><div class="mb-3 prose-xl max-w-none text-center font-bold">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.person)}</div><div class="text-center">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.text)}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/molecules/testimonialCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=testimonialCard-b8cc622d.mjs.map
