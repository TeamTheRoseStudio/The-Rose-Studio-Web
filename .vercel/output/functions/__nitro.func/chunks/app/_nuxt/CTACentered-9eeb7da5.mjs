import { R as Rt } from '../server.mjs';
import { resolveComponent, resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderClass, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "CTACentered",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><div class="sm:mx-64 max-w-7xl sm:my-16 sm:px-6 lg:px-8"><div class="${ssrRenderClass([[
        _ctx.useBackgroundColor()[__props.blok.color_palette.value],
        _ctx.useTextColor()[__props.blok.text_palette.value]
      ], "relative isolate overflow-hidden px-6 py-14 text-center shadow-2xl sm:rounded-3xl sm:px-16"])}"><div class="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.title)}</div><div class="mx-auto mt-6 max-w-xl text-lg leading-8">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.description)}</div><div class="mt-10 flex items-center justify-center gap-x-6"><!--[-->`);
      ssrRenderList(__props.blok.buttons, (blok_item) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          class: "m-1",
          key: blok_item._uid,
          blok: blok_item
        }, null, _parent));
      });
      _push(`<!--]--></div><svg viewBox="0 0 1024 1024" class="absolute top-44 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true"><circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7"></circle><defs><radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217"><stop stop-color="#7775D6"></stop><stop offset="1" stop-color="#E935C1"></stop></radialGradient></defs></svg></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/organisms/marketing/CTASections/CTACentered.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CTACentered-9eeb7da5.mjs.map
