import { _ as __nuxt_component_2 } from './nuxt-img-e5fcc954.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { R as Rt } from '../server.mjs';
import { resolveDirective, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
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
  __name: "mainFooter",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    const date = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "gradient_bg_purple_footer bg-black w-full" }, _attrs))}><div class="grid grid-cols-1 place-items-center place-content-center py-20 gap-y-6 gradient_bg_orange_footer px-4">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: __props.blok.image.filename,
        alt: "The Rose Studio Logo",
        class: "mb-4"
      }, null, _parent));
      _push(`<div class="grid grid-cols-3 place-items-center place-content-center"><!--[-->`);
      ssrRenderList(__props.blok.links, (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          key: item._uid,
          to: `/${item.link.cached_url}`
        }, ssrGetDirectiveProps(_ctx, _directive_editable, item)), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([index == 1 ? "w-full text-center md:text-start" : "", "text-white"])}"${_scopeId}>${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(item.text)}</div>`);
            } else {
              return [
                createVNode("div", {
                  innerHTML: ("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(item.text),
                  class: ["text-white", index == 1 ? "w-full text-center md:text-start" : ""]
                }, null, 10, ["innerHTML"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><p class="text-white/50 text-lg"> \xA9 ${ssrInterpolate(unref(date))} ${ssrInterpolate(__props.blok.text)}</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/layout/mainFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=mainFooter-d7f8972e.mjs.map
