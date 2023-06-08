import { defineComponent, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "input",
  __ssrInlineRender: true,
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps(_attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}>`);
      if (__props.blok.type == "text" || __props.blok.type == "email" || __props.blok.type == "tel") {
        _push(`<div><div class="mb-6"><label for="base-input" class="text-white block mb-2 text-sm font-medium">${ssrInterpolate(__props.blok.text)}</label><input${ssrRenderAttr("type", __props.blok.type)}${ssrRenderAttr("id", `input-${__props.blok.text}`)} class="text-white border-[1px] border-gray-300/50 text-sm block w-full p-4 bg-black placeholder:text-gray-300/50"${ssrRenderAttr("placeholder", __props.blok.placeholder)}${ssrIncludeBooleanAttr(__props.blok.required) ? " required" : ""}${ssrRenderAttr("name", __props.blok.text)}></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.blok.type == "textarea") {
        _push(`<div><div class="w-full my-4"><label for="base-input" class="text-white block mb-2 text-sm font-medium">${ssrInterpolate(__props.blok.text)}</label><textarea id="message" rows="4"${ssrIncludeBooleanAttr(__props.blok.required) ? " required" : ""}${ssrRenderAttr("name", __props.blok.text)} class="block px-2.5 h-48 w-full text-sm text-white bg-black border border-gray-300/50"></textarea></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/atoms/input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=input-374b8f9c.mjs.map
