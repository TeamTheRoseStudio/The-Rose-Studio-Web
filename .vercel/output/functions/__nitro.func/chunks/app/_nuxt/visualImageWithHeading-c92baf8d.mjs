import { _ as __nuxt_component_2 } from './nuxt-img-e5fcc954.mjs';
import { resolveComponent, resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { e as useRoute, R as Rt } from '../server.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "visualImageWithHeading",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    const route = useRoute();
    console.log(route);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _component_NuxtImg = __nuxt_component_2;
      const _directive_editable = resolveDirective("editable");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-dark gradient_bg_orange_hero h-full" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><div class="gradient_bg_purple_hero"><div class="grid grid-cols-1 lg:grid-cols-2"><div class="px-10 md:px-20 pb-32 py-0 lg:py-40 order-2 lg:order-first"><div class="flex items-end space-x-3 lg:space-x-0 lg:items-center lg:space-y-8 pb-6 xl:space-x-4 md:pb-14"><div class="leading-[50px] mb-1 lg:mb-4 inline-block text-3xl max-w-[300px] md:max-w-xl lg:min-w-[270px] font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white text-white">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.title)}</div><h1 class="xl:mr-0 mb-3 md:mb-0 lg:pt-2 xl:pt-5 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-[#8A2387] to-[#F26021]">${ssrInterpolate(__props.blok.featuredTitleText)}</h1></div><div class="prose max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.paragraph)}</div><div class="mt-4 bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"><!--[-->`);
      ssrRenderList(__props.blok.button, (blok_item) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          key: blok_item._uid,
          blok: blok_item,
          class: "text-white"
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="flex-col lg:mt-0 justify-end flex md:flex pt-12 pb-4 items-end md:items-right order-1 lg:order-last">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        provider: "storyblok",
        preload: true,
        format: "webp",
        src: __props.blok.image.filename,
        class: "object-cover w-[300px] h-[310px] object-left md:object-left md:w-[400px] md:h-[410px] lg:w-[800px] lg:h-[830px]",
        alt: __props.blok.image.alt
      }, null, _parent));
      _push(`</div></div><div class="lg:flex hidden items-center justify-center w-full"><div class="flex space-x-3 cursor-pointer mb-6"><!--[-->`);
      ssrRenderList(__props.blok.endButton, (blok_item) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          key: blok_item._uid,
          blok: blok_item,
          class: "text-white text-lg"
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/organisms/marketing/heroSections/visualImageWithHeading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=visualImageWithHeading-c92baf8d.mjs.map
