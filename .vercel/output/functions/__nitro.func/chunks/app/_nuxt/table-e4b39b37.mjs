import { resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "table",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-x-auto shadow-md sm:rounded-lg" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"><thead class="text-xs text-gray-700 uppercase dark:text-gray-400"><tr><!--[-->`);
      ssrRenderList(__props.blok.table.thead, (th, index) => {
        _push(`<th class="${ssrRenderClass([
          index % 2 == 1 ? "bg-gray-50 dark:bg-gray-800" : "",
          "px-6 py-3"
        ])}">${ssrInterpolate(th.value)}</th>`);
      });
      _push(`<!--]--></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.blok.table.tbody, (tr) => {
        _push(`<tr class="border-b border-gray-200 dark:border-gray-700"><!--[-->`);
        ssrRenderList(tr.body, (td, index) => {
          _push(`<td class="${ssrRenderClass([
            index % 2 == 1 ? " bg-gray-50 dark:bg-gray-800" : "",
            "px-6 py-4"
          ])}">${ssrInterpolate(td.value)}</td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/atoms/table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=table-e4b39b37.mjs.map
