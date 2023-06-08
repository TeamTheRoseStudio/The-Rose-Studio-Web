import { _ as __nuxt_component_0 } from './nuxt-link-15b2078b.mjs';
import { R as Rt } from '../server.mjs';
import { resolveDirective, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "simpleFooter",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    let thisYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_editable = resolveDirective("editable");
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow m-4 dark:bg-gray-800" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"><span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">\xA9 ${ssrInterpolate(unref(thisYear))} <!--[-->`);
      ssrRenderList(__props.blok.texts, (text) => {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          href: "/",
          class: "hover:underline"
        }, ssrGetDirectiveProps(_ctx, _directive_editable, text)), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(text.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(text.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></span><ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"><!--[-->`);
      ssrRenderList(__props.blok.items, (li) => {
        _push(`<li${ssrRenderAttrs(mergeProps({ class: "md:mr-6 mr-4" }, ssrGetDirectiveProps(_ctx, _directive_editable, li)))}>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          href: li.link,
          class: "hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="prose"${_scopeId}>${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(li.text)}</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "prose",
                  innerHTML: ("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(li.text)
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/organisms/marketing/footerSections/simpleFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=simpleFooter-2d27dd5e.mjs.map
