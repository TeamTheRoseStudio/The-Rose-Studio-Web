import{m as d,r as m,w as g,o as s,a as i,b as t,e as u,u as o,R as n,p as x,q as h,E as f,c as b}from"./entry.0eb5e015.js";const k={class:"bg-white"},v={class:"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"},p=f('<svg viewBox="0 0 1024 1024" class="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2" aria-hidden="true"><circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7"></circle><defs><radialGradient id="759c1415-0410-454c-8f7c-9a820de03641"><stop stop-color="#7775D6"></stop><stop offset="1" stop-color="#E935C1"></stop></radialGradient></defs></svg>',1),w={class:"mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"},y=["innerHTML"],T=["innerHTML"],C={class:"my-10 flex items-center justify-center gap-x-6 lg:justify-start"},_={class:"relative mt-16 w-[34rem] h-20 lg:mt-20 hidden sm:block"},B=["src","title","alt"],H={__name:"CTAPanelWithImage",props:{blok:Object},setup(e){return(l,R)=>{const r=d("StoryblokComponent"),c=m("editable");return g((s(),i("div",k,[t("div",v,[t("div",{class:u(["relative isolate overflow-hidden px-6 pt-16 shadow-2xl mx-2 rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0",[l.useBackgroundColor()[e.blok.color_palette.value],l.useTextColor()[e.blok.text_palette.value]]])},[p,t("div",w,[t("div",{class:"text-3xl font-bold tracking-tight sm:text-4xl",innerHTML:("renderRichText"in l?l.renderRichText:o(n))(e.blok.title)},null,8,y),t("div",{class:"mt-6 text-lg leading-8",innerHTML:("renderRichText"in l?l.renderRichText:o(n))(e.blok.description)},null,8,T),t("div",C,[(s(!0),i(x,null,h(e.blok.buttons,a=>(s(),b(r,{class:"m-1",key:a._uid,blok:a},null,8,["blok"]))),128))])]),t("div",_,[t("img",{class:"rounded-md bg-white/5 ring-1 ring-white/10",src:e.blok.image.filename,title:e.blok.image.title,alt:e.blok.image.alt},null,8,B)])],2)])])),[[c,e.blok]])}}};export{H as default};