import { _ as __nuxt_component_2 } from './nuxt-img-e5fcc954.mjs';
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
  __name: "defaultFeatureList",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_2;
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _directive_editable = resolveDirective("editable");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-dark gradient_bg_orange_services mb-20 h-full" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><div class="gradient_bg_purple_services"><div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 gradient_bg_orange_services_mobile"><div class="md:grid md:grid-cols-3 md:w-full text-center mb-8 lg:mb-16"><div><div class="mb-4 text-start text-5xl tracking-tight font-extrabold text-white">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.title)}</div><div class="bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[2.81px] w-[190px] mb-3"></div></div><div class="md:col-span-2 md:ms-10 text-start font-light text-white dark:text-gray-400 sm:text-xl">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.paragraph)}</div></div><div class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 pl-2 pt-20 gap-y-20 md:gap-x-4 lg:gap-x-10"><!--[-->`);
      ssrRenderList(__props.blok.items, (item) => {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, ssrGetDirectiveProps(_ctx, _directive_editable, item)))}>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          provider: "storyblok",
          format: "webp",
          preload: true,
          alt: item.image.alt,
          src: item.image.filename
        }, null, _parent));
        _push(`<div class="text-white text-3xl">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(item.title)}</div><div class="text-white">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(item.paragraph)}</div><div class="md:ml-0 bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center"><!--[-->`);
        ssrRenderList(item.button, (blok_item) => {
          _push(ssrRenderComponent(_component_StoryblokComponent, {
            key: blok_item._uid,
            blok: blok_item,
            class: "text-white"
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/organisms/marketing/featureSection/defaultFeatureList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=defaultFeatureList-afb46d1f.mjs.map
