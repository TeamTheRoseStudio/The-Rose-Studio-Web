import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { resolveComponent, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "DropdownMenu",
  __ssrInlineRender: true,
  props: { items: Object },
  setup(__props) {
    const prop = __props;
    console.log(prop.items);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><button data-dropdown-toggle="dropdown" type="button">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: "bars",
        size: "xl",
        style: { "color": "#ffffff" },
        class: "cursor-pointer me-5"
      }, null, _parent));
      _push(`</button><div id="dropdown" class="z-10 hidden bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"><ul class="py-2 text-sm text-gray-700 dark:text-gray-200"><!--[-->`);
      ssrRenderList(prop.items, (li) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: li.link.cached_url,
          class: "block px-4 py-2 hover:bg-gray-100/20"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="prose text-white"${_scopeId}>${ssrInterpolate(li.text)}</div>`);
            } else {
              return [
                createVNode("div", { class: "prose text-white" }, toDisplayString(li.text), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/molecules/DropdownMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DropdownMenu-3b8f9b84.mjs.map
