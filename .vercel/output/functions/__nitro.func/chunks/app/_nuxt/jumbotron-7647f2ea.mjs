import { useSSRContext, computed, resolveComponent, resolveDirective, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  __name: "jumbotron",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    const props = __props;
    const styleObject = computed(() => {
      return {
        "--background-image": `url(${props.blok.background.filename})`
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _directive_editable = resolveDirective("editable");
      _push(`<section${ssrRenderAttrs(mergeProps({
        style: unref(styleObject),
        class: "background bg-center bg-no-repeat bg-gray-600 bg-blend-multiply"
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))} data-v-cc0ba39c><div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56" data-v-cc0ba39c><h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl" data-v-cc0ba39c>${ssrInterpolate(__props.blok.title)}</h1><p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48" data-v-cc0ba39c>${ssrInterpolate(__props.blok.paragraph)}</p><div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4" data-v-cc0ba39c><!--[-->`);
      ssrRenderList(__props.blok.buttons, (blok_item) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          key: blok_item._uid,
          blok: blok_item
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/molecules/jumbotron.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jumbotron = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cc0ba39c"]]);

export { jumbotron as default };
//# sourceMappingURL=jumbotron-7647f2ea.mjs.map
