import { f as useAsyncStoryblok } from '../server.mjs';
import { withAsyncContext, resolveComponent, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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
  __name: "default",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const storyHeader = ([__temp, __restore] = withAsyncContext(() => useAsyncStoryblok("layout/header", {
      version: "draft"
    })), __temp = await __temp, __restore(), __temp);
    const storyFooter = ([__temp, __restore] = withAsyncContext(() => useAsyncStoryblok("layout/footer", {
      version: "draft"
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_StoryblokComponent, {
        blok: unref(storyHeader).content
      }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_StoryblokComponent, {
        blok: unref(storyFooter).content
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-34e92f26.mjs.map
