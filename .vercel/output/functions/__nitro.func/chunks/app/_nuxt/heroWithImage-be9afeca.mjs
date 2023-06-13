import { R as Rt } from '../server.mjs';
import { resolveComponent, resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
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
  __name: "heroWithImage",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative isolate overflow-hidden bg-white" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><div class="mx-auto max-w-7xl px-6 py-10 sm:pb-32 lg:flex lg:py-12 lg:px-8 justify-center items-center"><div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"><img class="h-15"${ssrRenderAttr("src", __props.blok.logotipo.filename)}${ssrRenderAttr("title", __props.blok.logotipo.title)}${ssrRenderAttr("alt", __props.blok.logotipo.alt)}><div class="mt-14"><a href="#" class="inline-flex space-x-6"><span class="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.badge)}</span></a></div><div class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.title)}</div><div class="mt-6 text-lg leading-8 text-gray-600">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.description)}</div><div class="mt-10 flex items-center gap-x-6"><!--[-->`);
      ssrRenderList(__props.blok.buttons, (blok_item) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          class: "m-1",
          key: blok_item._uid,
          blok: blok_item
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="mx-auto mt-10 max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none xl:ml-32"><div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none"><div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"><img${ssrRenderAttr("src", __props.blok.image.filename)}${ssrRenderAttr("title", __props.blok.image.title)}${ssrRenderAttr("alt", __props.blok.image.alt)} width="2432" height="1442" class="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/organisms/marketing/heroSections/heroWithImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=heroWithImage-be9afeca.mjs.map
