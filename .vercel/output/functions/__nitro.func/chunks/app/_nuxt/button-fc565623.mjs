import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { useSSRContext, computed, resolveDirective, mergeProps, withCtx, unref, openBlock, createBlock, createVNode, createCommentVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { F as FontAwesomeIcon } from '../server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
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
  __name: "button",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    const props = __props;
    const styleObject = computed(() => {
      return {
        "--hover-color": props.blok.hover_palette.value,
        "--background-color": props.blok.color_palette.value,
        "--text-color": props.blok.text_palette.value
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps(_attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))} data-v-a664367f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.blok.link
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.blok.type == "normal") {
              _push2(`<button type="button" style="${ssrRenderStyle(unref(styleObject))}" class="${ssrRenderClass([__props.blok.size_button, "background-color shadow-lg hover-color text-color text-white bg-blue-700 font-medium rounded-lg"])}" data-v-a664367f${_scopeId}>`);
              if (__props.blok.left_icon.icon) {
                _push2(`<div class="inline-block" data-v-a664367f${_scopeId}>`);
                _push2(ssrRenderComponent(unref(FontAwesomeIcon), {
                  icon: __props.blok.left_icon.icon
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="inline-block mx-1.5" data-v-a664367f${_scopeId}>${ssrInterpolate(__props.blok.title)}</div>`);
              if (__props.blok.right_icon.icon) {
                _push2(`<div class="inline-block" data-v-a664367f${_scopeId}>`);
                _push2(ssrRenderComponent(unref(FontAwesomeIcon), {
                  icon: __props.blok.right_icon.icon
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.blok.type == "bottomNav") {
              _push2(`<button type="button" style="${ssrRenderStyle(unref(styleObject))}" class="${ssrRenderClass([__props.blok.size_button, "background-color shadow-lg hover-color text-color text-white bg-blue-700 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800"])}" data-v-a664367f${_scopeId}>`);
              if (__props.blok.left_icon.icon) {
                _push2(`<div class="" data-v-a664367f${_scopeId}>`);
                _push2(ssrRenderComponent(unref(FontAwesomeIcon), {
                  icon: __props.blok.left_icon.icon
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="inline-block mx-1.5" data-v-a664367f${_scopeId}>${ssrInterpolate(__props.blok.title)}</div>`);
              if (__props.blok.right_icon.icon) {
                _push2(`<div class="inline-block" data-v-a664367f${_scopeId}>`);
                _push2(ssrRenderComponent(unref(FontAwesomeIcon), {
                  icon: __props.blok.right_icon.icon
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</button>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.blok.type == "normal" ? (openBlock(), createBlock("button", {
                key: 0,
                type: "button",
                style: unref(styleObject),
                class: ["background-color shadow-lg hover-color text-color text-white bg-blue-700 font-medium rounded-lg", __props.blok.size_button]
              }, [
                __props.blok.left_icon.icon ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "inline-block"
                }, [
                  createVNode(unref(FontAwesomeIcon), {
                    icon: __props.blok.left_icon.icon
                  }, null, 8, ["icon"])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "inline-block mx-1.5" }, toDisplayString(__props.blok.title), 1),
                __props.blok.right_icon.icon ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "inline-block"
                }, [
                  createVNode(unref(FontAwesomeIcon), {
                    icon: __props.blok.right_icon.icon
                  }, null, 8, ["icon"])
                ])) : createCommentVNode("", true)
              ], 6)) : createCommentVNode("", true),
              __props.blok.type == "bottomNav" ? (openBlock(), createBlock("button", {
                key: 1,
                type: "button",
                style: unref(styleObject),
                class: ["background-color shadow-lg hover-color text-color text-white bg-blue-700 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800", __props.blok.size_button]
              }, [
                __props.blok.left_icon.icon ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ""
                }, [
                  createVNode(unref(FontAwesomeIcon), {
                    icon: __props.blok.left_icon.icon
                  }, null, 8, ["icon"])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "inline-block mx-1.5" }, toDisplayString(__props.blok.title), 1),
                __props.blok.right_icon.icon ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "inline-block"
                }, [
                  createVNode(unref(FontAwesomeIcon), {
                    icon: __props.blok.right_icon.icon
                  }, null, 8, ["icon"])
                ])) : createCommentVNode("", true)
              ], 6)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/atoms/button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const button = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a664367f"]]);

export { button as default };
//# sourceMappingURL=button-fc565623.mjs.map
