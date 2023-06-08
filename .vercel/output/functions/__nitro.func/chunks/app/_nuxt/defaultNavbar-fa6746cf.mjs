import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { resolveDirective, mergeProps, withCtx, unref, openBlock, createBlock, createVNode, createCommentVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { F as FontAwesomeIcon } from '../server.mjs';
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
  __name: "defaultNavbar",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps(_attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><nav class="bg-white shadow-xl rounded-b-md opacity-80 border-gray-200 dark:bg-gray-900"><div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"><a href="/" class="flex items-center"><img${ssrRenderAttr("src", __props.blok.image.filename)} class="h-8 mr-3 rounded"${ssrRenderAttr("alt", __props.blok.image.alt)}><span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">${ssrInterpolate(__props.blok.text)}</span></a><button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button><div class="hidden w-full md:block md:w-auto" id="navbar-default"><ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"><!--[-->`);
      ssrRenderList(__props.blok.list_item, (li) => {
        _push(`<li${ssrRenderAttrs(mergeProps({
          href: "",
          class: "flex py-2 pl-3 pr-4 my-0.5 bg-gray-200 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500",
          "aria-current": "page"
        }, ssrGetDirectiveProps(_ctx, _directive_editable, li)))}>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "flex",
          to: li.href.cached_url == "home" ? "/" : li.href.cached_url
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (li.icon.icon) {
                _push2(`<div class="mr-1"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(FontAwesomeIcon), {
                  icon: li.icon.icon
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(li.text)}`);
            } else {
              return [
                li.icon.icon ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mr-1"
                }, [
                  createVNode(unref(FontAwesomeIcon), {
                    icon: li.icon.icon
                  }, null, 8, ["icon"])
                ])) : createCommentVNode("", true),
                createTextVNode(" " + toDisplayString(li.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div></nav></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/layout/defaultNavbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=defaultNavbar-fa6746cf.mjs.map
