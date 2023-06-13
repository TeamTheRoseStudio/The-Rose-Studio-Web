import { defineComponent, resolveComponent, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "grid",
  __ssrInlineRender: true,
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex py-8 mb-6",
        "data-test": "grid"
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><!--[-->`);
      ssrRenderList(__props.blok.columns, (subBlok) => {
        _push(`<div class="flex-auto px-6">`);
        _push(ssrRenderComponent(_component_StoryblokComponent, { blok: subBlok }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/atoms/grid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=grid-d5000db9.mjs.map
