import { ref, resolveComponent, resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { R as Rt } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrGetDirectiveProps } from 'vue/server-renderer';
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
  __name: "ContactForm",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    const terms = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _directive_editable = resolveDirective("editable");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-dark mb-20 h-full" }, _attrs))}><div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 md:px-10"><div class="flex items-left md:items-center w-full flex-col mt-20"><div class="mb-4 text-4xl md:text-7xl tracking-tight font-extrabold text-left md:text-center text-white">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.title)}</div><div class="bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[2.81px] w-[360px] md:w-[420px] mb-3"></div></div><div class="w-full grid grid-cols-1 place-items-center place-content-center pt-14 pb-20"><div class="prose text-white text-3xl font-rubik leading-10 max-w-3xl text-center">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.paragraph)}</div></div><form${ssrRenderAttr("action", `https://formsubmit.co/${__props.blok.onSubmit.email}`)} enctype="multipart/form-data" method="post"><div class="grid grid-cols-2 grid-rows-2 gap-x-10"><!--[-->`);
      ssrRenderList(__props.blok.inputs, (blok_item) => {
        _push(ssrRenderComponent(_component_StoryblokComponent, {
          key: blok_item._uid,
          blok: blok_item,
          class: blok_item.allWidth ? "col-span-2" : ""
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-col items-start mb-6"><div class="flex items-start mb-8 mt-4"><div class="flex items-center h-5"><input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50" required${ssrRenderAttr("v-model", unref(terms))}><input type="hidden" name="_autoresponse" value="Gracias por contactar con The Rose Studio. En breve nos pondremos en contacto contigo."><input type="hidden" name="_next" value="https://localhost:3010/gracias"></div><label for="terms" class="ml-2 text-sm font-medium text-white/50">Al enviar este formulario, confirmas que has le\xEDdo y aceptas los <a href="#" class="text-white">T\xE9rminos de Servicio.</a></label></div>`);
      if (unref(terms)) {
        _push(`<button type="submit" class="bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 inline-flex items-center justify-center"><button type="submit" class="px-5 py-3 text-sm font-medium text-center text-white"> Enviar mensaje </button>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          icon: ["fas", "arrow-right"],
          style: { "color": "#ffffff" }
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form><div><div class="flex items-left md:items-center w-full flex-col mt-20"><div class="mb-4 text-5xl tracking-tight font-extrabold text-center text-white">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.downHeading)}</div></div><div class="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center pt-20 gap-y-10 md:gap-y-0"><!--[-->`);
      ssrRenderList(__props.blok.contactCards, (card) => {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 place-items-center" }, ssrGetDirectiveProps(_ctx, _directive_editable, card)))}>`);
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          icon: card.icon.icon,
          style: { "color": "#ffffff" },
          class: "bg-gradient-to-r from-[#8A2387] to-[#F26021] p-4 text-2xl w-[50px] h-[50px]"
        }, null, _parent));
        _push(`<div class="my-4"><div class="text-white font-rubik text-center">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(card.title)}</div><div class="text-white font-rubik text-center">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(card.subtitle)}</div><div class="font-rubik text-center mt-10 text-red-500">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(card.text)}</div></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/molecules/ContactForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContactForm-ee745159.mjs.map
