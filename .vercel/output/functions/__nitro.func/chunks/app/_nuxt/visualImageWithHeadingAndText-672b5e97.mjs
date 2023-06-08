import _sfc_main$1 from './titleWithUnderline-9080ef91.mjs';
import _sfc_main$2 from './buttonTRS-67e21aba.mjs';
import { _ as __nuxt_component_2 } from './nuxt-img-e5fcc954.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { R as Rt } from '../server.mjs';
import { resolveComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "visualImageWithHeadingAndText",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TitleWithUnderline = _sfc_main$1;
      const _component_ButtonTRS = _sfc_main$2;
      const _component_NuxtImg = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "gradient_bg_purple_hero h-full py-20 px-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_TitleWithUnderline, null, null, _parent));
      _push(`<div class="grid grid-cols-1 md:grid-cols-2 w-full place-content-center place-items-center mt-20 gap-y-10"><div class="order-2 md:order-1"><p class="prose max-w-xl mb-6 font-rubik text-white lg:mb-8 md:text-lg lg:text-xl">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.paragraph)}</p>`);
      _push(ssrRenderComponent(_component_ButtonTRS, null, null, _parent));
      _push(`</div><div class="order-1 md:order-2">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        provider: "storyblok",
        preload: true,
        format: "webp",
        src: __props.blok.image.filename,
        alt: __props.blok.image.alt
      }, null, _parent));
      _push(`</div></div><div class="lg:flex hidden items-center justify-center w-full mt-24">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "flex space-x-3 cursor-pointer mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "arrow-down"],
              style: { "color": "#ffffff" },
              class: "mt-[6.5px]"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-white text-lg"${_scopeId}>${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.paragraph)}</p>`);
          } else {
            return [
              createVNode(_component_font_awesome_icon, {
                icon: ["fas", "arrow-down"],
                style: { "color": "#ffffff" },
                class: "mt-[6.5px]"
              }),
              createVNode("p", {
                innerHTML: ("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.paragraph),
                class: "text-white text-lg"
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/organisms/marketing/serviceSections/visualImageWithHeadingAndText.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=visualImageWithHeadingAndText-672b5e97.mjs.map
