import { resolveComponent, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "form",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _directive_editable = resolveDirective("editable");
      _push(`<form${ssrRenderAttrs(mergeProps({
        enctype: "multipart/form-data",
        method: "post",
        action: __props.blok.submit
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><!--[-->`);
      ssrRenderList(__props.blok.rows, (blok_item) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          key: blok_item._uid,
          blok: blok_item,
          class: "mx-auto -mb-7 justify-self-center"
        }, null, _parent));
      });
      _push(`<!--]--><div class="w-full flex justify-center"><!--[-->`);
      ssrRenderList(__props.blok.buttons, (blok_item) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          key: blok_item._uid,
          blok: blok_item,
          class: "mx-1"
        }, null, _parent));
      });
      _push(`<!--]--></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/molecules/form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=form-e02e5ef3.mjs.map
