import { useSSRContext, computed, resolveDirective, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  __name: "indicator",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    const props = __props;
    const styleObject = computed(() => {
      var _a;
      return {
        "--background-color": (_a = props.blok.color) == null ? void 0 : _a.color
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps(_attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))} data-v-3d14473a><span style="${ssrRenderStyle(unref(styleObject))}" class="color flex w-3 h-3 rounded-full" data-v-3d14473a></span></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/atoms/indicator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const indicator = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3d14473a"]]);

export { indicator as default };
//# sourceMappingURL=indicator-fc2bc83e.mjs.map
