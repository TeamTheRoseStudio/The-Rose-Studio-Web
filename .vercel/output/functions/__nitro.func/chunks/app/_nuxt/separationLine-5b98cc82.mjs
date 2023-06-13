import { useSSRContext, computed, resolveDirective, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  __name: "separationLine",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    const props = __props;
    const styleObject = computed(() => {
      return {
        "--separationLine_background-color": props.blok.color.value
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex justify-center" }, _attrs))} data-v-c1c30aff><hr${ssrRenderAttrs(mergeProps({
        class: [__props.blok.size, "h-px my-8 w-full border-0 dark:bg-gray-700 background_color"],
        style: unref(styleObject)
      }, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))} data-v-c1c30aff></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/atoms/separationLine.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const separationLine = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1c30aff"]]);

export { separationLine as default };
//# sourceMappingURL=separationLine-5b98cc82.mjs.map
