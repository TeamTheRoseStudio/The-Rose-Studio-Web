import{r as c,w as i,o as d,a as o,b as r,p as b,q as g,u as l,R as s}from"./entry.0eb5e015.js";const u={id:"accordion-collapse","data-accordion":"collapse"},h=["id"],p=["data-accordion-target","aria-expanded","aria-controls"],x=["innerHTML"],v=r("svg",{"data-accordion-icon":"",class:"w-6 h-6 rotate-180 shrink-0",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[r("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),y=["id","aria-labelledby"],f={class:"p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"},k=["innerHTML"],L={__name:"accordion",props:{blok:Object},setup(n){return(a,_)=>{const t=c("editable");return i((d(),o("div",null,[r("div",u,[(d(!0),o(b,null,g(n.blok.accordion_item,(e,w)=>i((d(),o("div",null,[r("h2",{id:`accordion-collapse-heading-${e.index}`},[r("button",{type:"button",class:"flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800","data-accordion-target":`#accordion-collapse-body-${e.index}`,"aria-expanded":e.expanded,"aria-controls":`accordion-collapse-body-${e.index}`},[r("div",{class:"prose",innerHTML:("renderRichText"in a?a.renderRichText:l(s))(e.title)},null,8,x),v],8,p)],8,h),r("div",{id:`accordion-collapse-body-${e.index}`,class:"hidden","aria-labelledby":`accordion-collapse-heading-${e.index}`},[r("div",f,[r("div",{class:"mb-2 prose",innerHTML:("renderRichText"in a?a.renderRichText:l(s))(e.text)},null,8,k)])],8,y)])),[[t,e]])),256))])])),[[t,n.blok]])}}};export{L as default};
