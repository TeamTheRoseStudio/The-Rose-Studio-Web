import _ from"./titleWithUnderline.ed738d6f.js";import d from"./buttonTRS.78d16e4b.js";import{_ as p}from"./nuxt-img.186c9e74.js";import{_ as f}from"./nuxt-link.96126850.js";import{m as u,o as h,a as x,h as t,b as e,u as s,R as r,i as g}from"./entry.0eb5e015.js";const b={class:"gradient_bg_purple_hero h-full py-20 px-6"},w={class:"grid grid-cols-1 md:grid-cols-2 w-full place-content-center place-items-center mt-20 gap-y-10"},T={class:"order-2 md:order-1"},k=["innerHTML"],v={class:"order-1 md:order-2"},R={class:"lg:flex hidden items-center justify-center w-full mt-24"},y=["innerHTML"],C={__name:"visualImageWithHeadingAndText",props:{blok:Object},setup(o){return(n,H)=>{const a=_,c=d,i=p,l=u("font-awesome-icon"),m=f;return h(),x("section",b,[t(a),e("div",w,[e("div",T,[e("p",{innerHTML:("renderRichText"in n?n.renderRichText:s(r))(o.blok.paragraph),class:"prose max-w-xl mb-6 font-rubik text-white lg:mb-8 md:text-lg lg:text-xl"},null,8,k),t(c)]),e("div",v,[t(i,{provider:"storyblok",preload:!0,format:"webp",src:o.blok.image.filename,alt:o.blok.image.alt},null,8,["src","alt"])])]),e("div",R,[t(m,{to:"#",class:"flex space-x-3 cursor-pointer mb-6"},{default:g(()=>[t(l,{icon:["fas","arrow-down"],style:{color:"#ffffff"},class:"mt-[6.5px]"}),e("p",{innerHTML:("renderRichText"in n?n.renderRichText:s(r))(o.blok.paragraph),class:"text-white text-lg"},null,8,y)]),_:1})])])}}};export{C as default};