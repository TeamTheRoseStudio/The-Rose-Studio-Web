import { resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = {
  __name: "carousel",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps(_attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><div id="default-carousel" class="relative w-full" data-carousel="slide"><div class="relative h-56 overflow-hidden rounded-lg md:h-96">`);
      if (__props.blok.images) {
        _push(`<!--[-->`);
        ssrRenderList(__props.blok.images, (image, index) => {
          _push(`<div class="text-black duration-700 ease-in-out" data-carousel-item><img${ssrRenderAttr("src", image.filename)} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="image"></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"><!--[-->`);
      ssrRenderList(__props.blok.images, (image, index) => {
        _push(`<button type="button" class="w-3 h-3 rounded-full" aria-current="true"${ssrRenderAttr("aria-label", `Slide ${index}`)}${ssrRenderAttr("data-carousel-slide-to", index)}></button>`);
      });
      _push(`<!--]--></div><button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev><span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"><svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg><span class="sr-only">Previous</span></span></button><button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next><span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"><svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg><span class="sr-only">Next</span></span></button></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/molecules/carousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=carousel-b9723f1a.mjs.map
