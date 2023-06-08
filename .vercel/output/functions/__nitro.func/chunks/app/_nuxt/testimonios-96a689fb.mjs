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
  __name: "testimonios",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _component_NuxtImg = __nuxt_component_2;
      const _directive_editable = resolveDirective("editable");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 my-10"><div class="md:grid md:grid-cols-3 md:w-full text-center mb-8 lg:mb-16"><div><div class="mb-4 text-start text-5xl md:text-4xl lg:text-5xl tracking-tight font-extrabold">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.title)}</div><div class="bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[2.81px] w-[280px] md:w-[220px] lg:w-[280px] mb-3"></div></div><div class="md:col-span-2 prose max-w-none md:ms-10 text-start font-light dark:text-gray-400 sm:text-xl">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.paragraph)}</div></div><div class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-x-8 gap-y-14"><!--[-->`);
      ssrRenderList(__props.blok.testimonialCards, (blok_item) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          key: blok_item._uid,
          blok: blok_item
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex items-left md:items-center w-full flex-col mt-20"><div class="mb-4 text-5xl md:text-7xl tracking-tight font-extrabold text-left md:text-center">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.subtitle)}</div><div class="bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[2.81px] w-full md:w-[420px] mb-3"></div></div><div class="grid grid-cols-3 grid-rows-3 place-content-center place-items-center gap-y-16 mt-14"><!--[-->`);
      ssrRenderList(__props.blok.images, (image) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          provider: "storyblok",
          format: "webp",
          preload: true,
          src: image.filename,
          alt: image.alt
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="flex w-full justify-center mt-20 mb-10 lg:mb-0"><div class="bg-gradient-to-r from-[#8A2387] to-[#F26021] text-white pr-5 inline-flex items-center justify-center"><!--[-->`);
      ssrRenderList(__props.blok.button, (blok_item) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          key: blok_item._uid,
          blok: blok_item
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/molecules/testimonios.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=testimonios-96a689fb.mjs.map
