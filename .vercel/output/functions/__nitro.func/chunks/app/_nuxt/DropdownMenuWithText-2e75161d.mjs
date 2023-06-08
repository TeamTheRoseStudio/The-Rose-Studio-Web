import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "DropdownMenuWithText",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><button data-dropdown-toggle="dropdownWithText" class="text-white text-sm text-center inline-flex items-center" type="button"><div class="text-white/80 cursor-pointer font-rubik text-[16px]">${ssrInterpolate(__props.blok.title)}</div><svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button><div id="dropdownWithText" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"><ul class="py-2 text-sm text-gray-700 dark:text-gray-200"><!--[-->`);
      ssrRenderList(__props.blok.dropdownItem, (li) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/${li.link.cached_url}`,
          replace: true,
          class: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="prose cursor-pointer"${_scopeId}>${ssrInterpolate(li.name)}</div>`);
            } else {
              return [
                createVNode("div", { class: "prose cursor-pointer" }, toDisplayString(li.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/molecules/DropdownMenuWithText.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DropdownMenuWithText-2e75161d.mjs.map
