import { _ as __nuxt_component_2 } from './nuxt-img-e5fcc954.mjs';
import { R as Rt } from '../server.mjs';
import { resolveComponent, resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
  __name: "card",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_2;
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        provider: "storyblok",
        format: "webp",
        preload: true,
        src: __props.blok.image.filename,
        class: "w-full",
        alt: __props.blok.image.alt
      }, null, _parent));
      _push(`<div class="my-3 text-xl font-poppins font-bold dark:text-white text-terciario">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.title)}</div><div class="p2-rubik font-light prose text-gray-500 dark:text-gray-400">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.paragraph)}</div><!--[-->`);
      ssrRenderList(__props.blok.buttons, (blok_item) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          key: blok_item._uid,
          blok: blok_item,
          class: "bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 text-center text-sm text-white"
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/molecules/card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=card-2b2a8ecb.mjs.map
