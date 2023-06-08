import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "buttonTRS",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.blok.link
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.blok.type == "normal") {
              _push2(`<button type="button" style="${ssrRenderStyle(_ctx.styleObject)}" class="${ssrRenderClass([__props.blok.size_button, "bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center"])}"${_scopeId}><div class="px-5 py-3 text-sm font-medium text-center text-white"${_scopeId}>${ssrInterpolate(__props.blok.title)}</div>`);
              _push2(ssrRenderComponent(_component_font_awesome_icon, {
                icon: __props.blok.right_icon.icon
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.blok.type == "normal" ? (openBlock(), createBlock("button", {
                key: 0,
                type: "button",
                style: _ctx.styleObject,
                class: [__props.blok.size_button, "bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center"]
              }, [
                createVNode("div", { class: "px-5 py-3 text-sm font-medium text-center text-white" }, toDisplayString(__props.blok.title), 1),
                createVNode(_component_font_awesome_icon, {
                  icon: __props.blok.right_icon.icon
                }, null, 8, ["icon"])
              ], 6)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/atoms/buttonTRS.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=buttonTRS-67e21aba.mjs.map
