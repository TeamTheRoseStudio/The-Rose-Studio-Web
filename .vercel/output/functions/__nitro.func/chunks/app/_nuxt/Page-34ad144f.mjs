import { ref, watchEffect, useSSRContext, computed, resolveComponent, resolveDirective, mergeProps, unref } from 'vue';
import { unpackMeta, composableNames } from 'unhead';
import { r as resolveUnrefHeadInput, a as useHead } from '../server.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
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

function useSeoMeta(input, options) {
  const headInput = ref({});
  watchEffect(() => {
    const resolvedMeta = resolveUnrefHeadInput(input);
    const { title, titleTemplate, ...meta } = resolvedMeta;
    headInput.value = {
      title,
      titleTemplate,
      meta: unpackMeta(meta)
    };
  });
  return useHead(headInput, options);
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});

const _sfc_main = {
  __name: "Page",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const prop = __props;
    const styleObject = computed(() => {
      var _a2;
      return {
        "--body-color": (_a2 = prop.blok.pageColor) == null ? void 0 : _a2.color
      };
    });
    useHead({
      titleTemplate: `${prop.blok.pageName} - The Rose Studio`
    });
    useSeoMeta({
      description: (_a = prop.blok.metatags) == null ? void 0 : _a.description,
      og_description: (_b = prop.blok.metatags) == null ? void 0 : _b.og_description,
      og_image: (_c = prop.blok.metatags) == null ? void 0 : _c.og_image,
      og_title: (_d = prop.blok.metatags) == null ? void 0 : _d.og_title,
      title: (_e = prop.blok.metatags) == null ? void 0 : _e.title,
      twitter_description: (_f = prop.blok.metatags) == null ? void 0 : _f.twitter_description,
      twitter_image: (_g = prop.blok.metatags) == null ? void 0 : _g.twitter_image,
      twitter_title: (_h = prop.blok.metatags) == null ? void 0 : _h.twitter_title
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bg-body",
        style: unref(styleObject)
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))} data-v-3288f583><!--[-->`);
      ssrRenderList(__props.blok.body, (blok_item) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          key: __props.blok._uid,
          blok: blok_item
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/contentType/Page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3288f583"]]);

export { Page as default };
//# sourceMappingURL=Page-34ad144f.mjs.map
