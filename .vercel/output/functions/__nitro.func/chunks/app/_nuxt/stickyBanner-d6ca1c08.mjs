import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { resolveComponent, resolveDirective, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import 'ufo';
import '../server.mjs';
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
  __name: "stickyBanner",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    const props = __props;
    console.log(props.blok.iconsCenter[0].link);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_NuxtLink = __nuxt_component_0;
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden lg:grid bg-black grid-cols-3 items-center place-items-center py-3" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><div class="flex space-x-4"><div>`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        class: "mt-0.5",
        icon: ["fab", "whatsapp"],
        size: "lg",
        style: { "color": "#ffffff" }
      }, null, _parent));
      _push(`</div>`);
      if (__props.blok.whatsappPhone) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `https://wa.me/${__props.blok.whatsappPhone.url}`,
          target: __props.blok.whatsappPhone.target,
          class: "text-white w-[90px]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.blok.whatsappPhone.url)}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.blok.whatsappPhone.url), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex space-x-4 2xl:pl-16"><!--[-->`);
      ssrRenderList(props.blok.iconsCenter, (icono) => {
        var _a;
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: icono.icon._uid,
          to: (_a = icono == null ? void 0 : icono.link) == null ? void 0 : _a.url,
          target: icono.link.target
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_font_awesome_icon, {
                icon: `${icono.icon.type} ${icono.icon.icon} `,
                size: "lg",
                style: { "color": "#ffffff" },
                class: "cursor-pointer"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_font_awesome_icon, {
                  icon: `${icono.icon.type} ${icono.icon.icon} `,
                  size: "lg",
                  style: { "color": "#ffffff" },
                  class: "cursor-pointer"
                }, null, 8, ["icon"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><!--[-->`);
      ssrRenderList(__props.blok.button, (blok_item) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          key: blok_item._uid,
          blok: blok_item,
          class: "text-sm font-medium text-center hidden max-w-[210px] max-h-[45pxs] md:w-full bg-gradient-to-r from-[#8A2387] to-[#F26021] md:pr-5 lg:inline-flex items-center justify-center hover:bg-gray-100 text-white"
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/layout/stickyBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=stickyBanner-d6ca1c08.mjs.map
