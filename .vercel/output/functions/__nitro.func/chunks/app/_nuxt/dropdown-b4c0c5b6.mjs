import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { R as Rt } from '../server.mjs';
import { unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "dropdown",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><button${ssrRenderAttr("id", __props.blok.id)} data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><div class="inline-block prose text-white">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.title)}</div><svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button><div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"><ul class="py-2 text-sm text-gray-700 dark:text-gray-200"${ssrRenderAttr("aria-labelledby", __props.blok.id)}><!--[-->`);
      ssrRenderList(__props.blok.dropdown_item, (blok_item, index) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: blok_item.link,
          class: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="prose"${_scopeId}>${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(blok_item.text)}</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "prose",
                  innerHTML: ("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(blok_item.text)
                }, null, 8, ["innerHTML"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/molecules/dropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dropdown-b4c0c5b6.mjs.map
