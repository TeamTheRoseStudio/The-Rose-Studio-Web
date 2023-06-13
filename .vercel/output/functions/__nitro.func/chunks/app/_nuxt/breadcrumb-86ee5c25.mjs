import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { e as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "breadcrumb",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    const route = useRoute();
    console.log(route);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "flex",
        "aria-label": "Breadcrumb"
      }, _attrs))}><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: unref(route).path,
        class: "ml-2 inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(route).fullPath)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(route).fullPath), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ol></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/molecules/breadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=breadcrumb-86ee5c25.mjs.map
