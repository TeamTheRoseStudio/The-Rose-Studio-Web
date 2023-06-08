import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { _ as __nuxt_component_2 } from './nuxt-img-e5fcc954.mjs';
import _sfc_main$1 from './DropdownMenu-3b8f9b84.mjs';
import { resolveComponent, resolveDirective, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "mainHeader",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_nuxtImg = __nuxt_component_2;
      const _component_DropdownMenu = _sfc_main$1;
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps(_attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><div class="grid grid-cols-2 lg:grid-cols-3 pb-4 pt-10 lg:pt-0 place-items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "lg:ms-10 lg:place-self-start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxtImg, {
              provider: "storyblok",
              preload: true,
              format: "webp",
              width: "97",
              height: "50",
              src: __props.blok.image.filename,
              class: "cursor-pointer pe-3",
              alt: __props.blok.image.filename.alt
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxtImg, {
                provider: "storyblok",
                preload: true,
                format: "webp",
                width: "97",
                height: "50",
                src: __props.blok.image.filename,
                class: "cursor-pointer pe-3",
                alt: __props.blok.image.filename.alt
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex lg:hidden pl-14">`);
      _push(ssrRenderComponent(_component_DropdownMenu, {
        items: __props.blok.headerItem
      }, null, _parent));
      _push(`</div><div class="space-x-10 hidden lg:flex"><!--[-->`);
      ssrRenderList(__props.blok.headerItem, (item) => {
        _push(`<div class="headerLink">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.link.cached_url
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(__props.blok.dropdown, (blok_item) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/layout/mainHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=mainHeader-35b29c96.mjs.map
