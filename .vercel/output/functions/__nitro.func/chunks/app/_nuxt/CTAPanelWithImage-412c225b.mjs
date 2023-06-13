import { R as Rt } from '../server.mjs';
import { resolveComponent, resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "CTAPanelWithImage",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"><div class="${ssrRenderClass([[
        _ctx.useBackgroundColor()[__props.blok.color_palette.value],
        _ctx.useTextColor()[__props.blok.text_palette.value]
      ], "relative isolate overflow-hidden px-6 pt-16 shadow-2xl mx-2 rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"])}"><svg viewBox="0 0 1024 1024" class="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2" aria-hidden="true"><circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7"></circle><defs><radialGradient id="759c1415-0410-454c-8f7c-9a820de03641"><stop stop-color="#7775D6"></stop><stop offset="1" stop-color="#E935C1"></stop></radialGradient></defs></svg><div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"><div class="text-3xl font-bold tracking-tight sm:text-4xl">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.title)}</div><div class="mt-6 text-lg leading-8">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.description)}</div><div class="my-10 flex items-center justify-center gap-x-6 lg:justify-start"><!--[-->`);
      ssrRenderList(__props.blok.buttons, (blok_item) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          class: "m-1",
          key: blok_item._uid,
          blok: blok_item
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="relative mt-16 w-[34rem] h-20 lg:mt-20 hidden sm:block"><img class="rounded-md bg-white/5 ring-1 ring-white/10"${ssrRenderAttr("src", __props.blok.image.filename)}${ssrRenderAttr("title", __props.blok.image.title)}${ssrRenderAttr("alt", __props.blok.image.alt)}></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/organisms/marketing/CTASections/CTAPanelWithImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CTAPanelWithImage-412c225b.mjs.map
