import{_ as m}from"./nuxt-img.186c9e74.js";import{m as b,r as u,w as k,o,a as n,h as p,b as a,u as l,R as s,p as h,q as x,c as f}from"./entry.0eb5e015.js";const g={class:"p-6"},v=["innerHTML"],_=["innerHTML"],R={__name:"card",props:{blok:Object},setup(e){return(t,T)=>{const i=m,c=b("StoryblokComponent"),d=u("editable");return k((o(),n("div",g,[p(i,{provider:"storyblok",format:"webp",preload:!0,src:e.blok.image.filename,class:"w-full",alt:e.blok.image.alt},null,8,["src","alt"]),a("div",{class:"my-3 text-xl font-poppins font-bold dark:text-white text-terciario",innerHTML:("renderRichText"in t?t.renderRichText:l(s))(e.blok.title)},null,8,v),a("div",{class:"p2-rubik font-light prose text-gray-500 dark:text-gray-400",innerHTML:("renderRichText"in t?t.renderRichText:l(s))(e.blok.paragraph)},null,8,_),(o(!0),n(h,null,x(e.blok.buttons,r=>(o(),f(c,{key:r._uid,blok:r,class:"bg-gradient-to-r from-[#8A2387] to-[#F26021] pr-5 text-center text-sm text-white"},null,8,["blok"]))),128))])),[[d,e.blok]])}}};export{R as default};
