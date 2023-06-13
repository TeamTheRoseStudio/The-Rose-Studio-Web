import _sfc_main$1 from './titleWithUnderline-9080ef91.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import '../server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TitleWithUnderline = _sfc_main$1;
  const _component_Paragraph = resolveComponent("Paragraph");
  const _component_EmployeeCard = resolveComponent("EmployeeCard");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "pb-14 md:pb-28 mx-4 md:mx-12 2xl:mx-72" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TitleWithUnderline, null, null, _parent));
  _push(ssrRenderComponent(_component_Paragraph, null, null, _parent));
  _push(ssrRenderComponent(_component_EmployeeCard, null, null, _parent));
  _push(`</section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/organisms/marketing/aboutUsSections/aboutUsSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutUsSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { aboutUsSection as default };
//# sourceMappingURL=aboutUsSection-99ed8eca.mjs.map
