import{_ as p}from"./nuxt-img.186c9e74.js";import{_ as k}from"./nuxt-link.96126850.js";import b from"./DropdownMenu.20327b2b.js";import{m as h,r as f,w as g,o,a as l,b as s,h as n,i as r,p as c,q as i,C as x,t as v,c as w}from"./entry.0eb5e015.js";const y={class:"grid grid-cols-2 lg:grid-cols-3 pb-4 pt-10 lg:pt-0 place-items-center"},C={class:"flex lg:hidden pl-14"},B={class:"space-x-10 hidden lg:flex"},D={class:"headerLink"},q={__name:"mainHeader",props:{blok:Object},setup(e){return(N,I)=>{const d=p,a=k,m=b,_=h("StoryblokComponent"),u=f("editable");return g((o(),l("div",null,[s("div",y,[n(a,{to:"/",class:"lg:ms-10 lg:place-self-start"},{default:r(()=>[n(d,{provider:"storyblok",preload:!0,format:"webp",width:"97",height:"50",src:e.blok.image.filename,class:"cursor-pointer pe-3",alt:e.blok.image.filename.alt},null,8,["src","alt"])]),_:1}),s("div",C,[n(m,{items:e.blok.headerItem},null,8,["items"])]),s("div",B,[(o(!0),l(c,null,i(e.blok.headerItem,t=>(o(),l("div",D,[n(a,{to:t.link.cached_url},{default:r(()=>[x(v(t.text),1)]),_:2},1032,["to"])]))),256)),(o(!0),l(c,null,i(e.blok.dropdown,t=>(o(),w(_,{key:t._uid,blok:t},null,8,["blok"]))),128))])])])),[[u,e.blok]])}}};export{q as default};
