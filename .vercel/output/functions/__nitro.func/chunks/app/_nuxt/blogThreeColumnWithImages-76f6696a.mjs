import { R as Rt } from '../server.mjs';
import { resolveComponent, resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "blogThreeColumnWithImages",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["rounded-2xl m-10 pt-10 pb-8", [
          _ctx.useBackgroundColor()[(_a = __props.blok.color_palette) == null ? void 0 : _a.value],
          _ctx.useTextColor()[(_b = __props.blok.text_palette) == null ? void 0 : _b.value]
        ]]
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><div class="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center flex-col"><div class="mx-auto max-w-2xl text-center"><div class="text-3xl font-bold tracking-tight sm:text-4xl">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.title)}</div><div class="mt-2 text-lg leading-8">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.description)}</div></div><div class="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"><!--[-->`);
      ssrRenderList(__props.blok.cards, (blok_item) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          key: blok_item._uid,
          blok: blok_item
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="mx-auto mt-6 text-center"><!--[-->`);
      ssrRenderList(__props.blok.buttons, (blok_item) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          class: "m-1",
          key: blok_item._uid,
          blok: blok_item
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/organisms/marketing/blogSections/blogThreeColumnWithImages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blogThreeColumnWithImages-76f6696a.mjs.map
