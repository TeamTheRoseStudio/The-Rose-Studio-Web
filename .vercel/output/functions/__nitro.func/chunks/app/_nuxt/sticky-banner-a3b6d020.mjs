import { withAsyncContext, resolveComponent, unref, mergeProps, useSSRContext } from 'vue';
import { f as useAsyncStoryblok } from '../server.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "sticky-banner",
  __ssrInlineRender: true,
  props: { blok: Object },
  async setup(__props) {
    let __temp, __restore;
    const stickyBanner = ([__temp, __restore] = withAsyncContext(() => useAsyncStoryblok("layout/sticky-banner", {
      version: "draft"
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      if (unref(stickyBanner)) {
        _push(ssrRenderComponent(_component_StoryblokComponent, mergeProps({
          blok: unref(stickyBanner).content
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layout/sticky-banner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sticky-banner-a3b6d020.mjs.map
