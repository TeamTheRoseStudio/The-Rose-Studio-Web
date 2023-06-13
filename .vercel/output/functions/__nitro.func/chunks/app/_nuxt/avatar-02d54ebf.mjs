import { R as Rt } from '../server.mjs';
import { resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "avatar",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center space-x-4" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><div id="avatar-image" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.name)}</div>`);
      if (__props.blok.image.filename) {
        _push(`<img data-tooltip-target="avatar-image" class="${ssrRenderClass([__props.blok.size, __props.blok.style])}"${ssrRenderAttr("src", __props.blok.image.filename)}${ssrRenderAttr("alt", __props.blok.image.alt)}>`);
      } else {
        _push(`<div class="relative overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"><svg class="${ssrRenderClass([__props.blok.size, "absolute text-gray-400 -left-1"])}" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg></div>`);
      }
      _push(`<div class="font-medium dark:text-white"><div class="prose">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.name)}</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/atoms/avatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=avatar-02d54ebf.mjs.map
