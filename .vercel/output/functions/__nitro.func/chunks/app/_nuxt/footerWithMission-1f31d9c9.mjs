import { R as Rt } from '../server.mjs';
import { mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext, defineComponent, h } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
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
  __name: "footerWithMission",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    let date = (/* @__PURE__ */ new Date()).getFullYear();
    const navigation = {
      support: [
        { name: "Pasarlo bien", href: "/pasarlo-bien" },
        { name: "S\xE9 lo que tu quieras", href: "/se-lo-que-quieras" },
        { name: "Ser independiente", href: "/ser-independiente" },
        { name: "Aprende cosas nuevas", href: "/aprende-cosas-nuevas" }
      ],
      company: [
        { name: "Juventud G\xFC\xEDmar News", href: "/juventud-guimar-news" },
        { name: "Arr\xEDmate a la casa", href: "/arrimate-a-la-casa" },
        { name: "Sobre nosotros", href: "/sobre-nosotros" },
        { name: "Inicio", href: "/" }
      ],
      social: [
        {
          name: "Facebook",
          href: "https://www.facebook.com/casajuventudguimar",
          icon: /* @__PURE__ */ defineComponent({
            render: () => h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                "clip-rule": "evenodd"
              })
            ])
          })
        },
        {
          name: "Instagram",
          href: "https://www.instagram.com/juventudguimar/",
          icon: /* @__PURE__ */ defineComponent({
            render: () => h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                "clip-rule": "evenodd"
              })
            ])
          })
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "bg-stone-900",
        "aria-labelledby": "footer-heading"
      }, _attrs))}><h2 id="footer-heading" class="sr-only">Footer</h2><div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32"><div class="xl:grid xl:grid-cols-3 xl:gap-8"><div class="space-y-8"><img class="h-20"${ssrRenderAttr("src", __props.blok.image.filename)}${ssrRenderAttr("title", __props.blok.image.title)}${ssrRenderAttr("alt", __props.blok.image.alt)}><div class="text-sm leading-6 text-gray-300">${("renderRichText" in _ctx ? _ctx.renderRichText : unref(Rt))(__props.blok.description)}</div><div class="flex space-x-6"><!--[-->`);
      ssrRenderList(navigation.social, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} target="_blank" class="text-gray-500 hover:text-gray-400"><span class="sr-only">${ssrInterpolate(item.name)}</span>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
          class: "h-6 w-6",
          "aria-hidden": "true"
        }, null), _parent);
        _push(`</a>`);
      });
      _push(`<!--]--></div></div><div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"><div></div><div class="md:grid md:grid-cols-2 md:gap-8"><div class="mt-10 md:mt-0"><h3 class="text-sm font-semibold leading-6 text-white"> Secciones </h3><ul role="list" class="mt-6 space-y-4"><!--[-->`);
      ssrRenderList(navigation.support, (item) => {
        _push(`<li><a${ssrRenderAttr("href", item.href)} class="text-sm leading-6 text-gray-300 hover:text-white">${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div><h3 class="text-sm font-semibold leading-6 text-white"> Ent\xE9rate de todo </h3><ul role="list" class="mt-6 space-y-4"><!--[-->`);
      ssrRenderList(navigation.company, (item) => {
        _push(`<li><a${ssrRenderAttr("href", item.href)} class="text-sm leading-6 text-gray-300 hover:text-white">${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div><div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24"><p class="text-xs leading-5 text-gray-400"> \xA9 ${ssrInterpolate(unref(date))}. Hecho con \u2665 by <a target="_blank" class="underline" href="https://www.therosestudio.es/">The Rose Studio</a></p></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/organisms/marketing/footerSections/footerWithMission.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=footerWithMission-1f31d9c9.mjs.map
