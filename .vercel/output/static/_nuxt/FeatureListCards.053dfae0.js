import{m as c,r as m,w as b,o as r,a as o,b as e,u as i,R as l,p as x,q as g,c as h}from"./entry.0eb5e015.js";const u={class:"bg-white"},k={class:"py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"},p={class:"md:grid md:grid-cols-3 md:w-full text-center mb-8 lg:mb-16"},v=["id","innerHTML"],_=e("div",{class:"bg-gradient-to-r from-[#8A2387] to-[#F26021] h-[2.81px] w-[190px] mb-3"},null,-1),f=["innerHTML"],y={class:"grid grid-cols-1 md:grid-cols-3"},L={__name:"FeatureListCards",props:{blok:Object},setup(t){return(s,T)=>{const a=c("StoryblokComponent"),d=m("editable");return b((r(),o("section",u,[e("div",k,[e("div",p,[e("div",null,[e("div",{id:t.blok.id,class:"mb-4 text-start text-5xl tracking-tight font-extrabold text-gray-900",innerHTML:("renderRichText"in s?s.renderRichText:i(l))(t.blok.title)},null,8,v),_]),e("div",{class:"md:col-span-2 md:ms-10 text-start font-light text-gray-500 dark:text-gray-400 sm:text-xl",innerHTML:("renderRichText"in s?s.renderRichText:i(l))(t.blok.paragraph)},null,8,f)]),e("div",y,[(r(!0),o(x,null,g(t.blok.cards,n=>(r(),h(a,{key:n._uid,blok:n},null,8,["blok"]))),128))])])])),[[d,t.blok]])}}};export{L as default};