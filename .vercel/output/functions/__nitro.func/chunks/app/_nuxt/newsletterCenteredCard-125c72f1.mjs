import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { e as useRoute, R as Rt } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "newsletterCenteredCard",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    const props = __props;
    const name = ref("");
    const email = ref("");
    const route = useRoute();
    const message = ref(props.blok.message);
    const hayCamposVacios = computed(() => {
      if (email.value == "" || name.value == "")
        return true;
      else
        return false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><div class=""><div class="${ssrRenderClass([[
        _ctx.useBackgroundColor()[(_a = __props.blok.color_palette) == null ? void 0 : _a.value],
        _ctx.useTextColor()[(_b = __props.blok.text_palette) == null ? void 0 : _b.value]
      ], "relative isolate overflow-hidden px-6 py-12 shadow-2xl sm:px-24 xl:py-18"])}"><div class="flex justify-center flex-col"><div class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.title)}</div><div class="mx-auto mt-2 max-w-xl text-center text-lg leading-8">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.description)}</div><form action="https://formsubmit.co/nbrito@guimar.es" method="POST" class="mx-auto mt-6 flex max-w-md gap-x-4"><input${ssrRenderAttr("value", name.value)} name="nombre" type="text" required class="min-w-0 flex-auto rounded-md text-black border-0 bg-white/50 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Su nombre"><input${ssrRenderAttr("value", email.value)} name="email" type="email" autocomplete="email" required class="min-w-0 flex-auto rounded-md text-black border-0 bg-white/50 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Su email">`);
      if (!unref(hayCamposVacios)) {
        _push(`<button type="submit" class="flex-none rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-black-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"> Enviar </button>`);
      } else {
        _push(`<button type="button" class="flex-none rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-black-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" disabled> Enviar </button>`);
      }
      _push(`<input type="hidden" name="_captcha" value="false"><input type="hidden" name="_template" value="table"><input type="hidden" name="_next"${ssrRenderAttr("value", "https://juventudguimar.org" + unref(route).fullPath)}></form><p class="mx-auto text-xs mt-6">${ssrInterpolate(message.value)}</p></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/organisms/marketing/newsletterSections/newsletterCenteredCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=newsletterCenteredCard-125c72f1.mjs.map
