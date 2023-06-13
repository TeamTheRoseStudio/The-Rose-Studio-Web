import { computed, resolveComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "bottomNavigation",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    const props = __props;
    const styleObject = computed(() => {
      return {
        "--grid-cols": props.blok.buttons.length,
        "--background-bottomNavigation": props.blok.background.color
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600" }, _attrs))}><div class="grid prop-grid-cols place-items-center align-middle max-w-lg mx-auto font-medium" style="${ssrRenderStyle(unref(styleObject))}"><!--[-->`);
      ssrRenderList(__props.blok.buttons, (blok_item) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          key: blok_item._uid,
          blok: blok_item
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/layout/bottomNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=bottomNavigation-9a20cb21.mjs.map
