(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Tl1Y:function(e,t,n){},"l/wD":function(e,t,n){},pcw8:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return o}));var a=n("GJcz"),c=n("dA+l"),l=n("zSok"),r=n("VXBa"),s=n("H8eV"),u=n("uP4m"),o=(n("Tl1Y"),"3613285653");t.default=function(e){var t=e.data.allMarkdownRemark.edges,n=Object(a.useState)(""),o=n[0],i=n[1],m=Object(a.useState)(!0),d=m[0],p=m[1],f=Object(a.useCallback)(t.filter((function(e){var t=e.node,n=t.frontmatter,a=t.rawMarkdownBody,c=n.title,l=o.toLocaleLowerCase();return!(d||!a.toLocaleLowerCase().includes(l))||c.toLocaleLowerCase().includes(l)})),[o,d]);return a.createElement(r.a,null,a.createElement(s.a,{title:"Search"}),a.createElement("div",{id:"Search"},a.createElement("div",{className:"search-inner-wrap"},a.createElement("div",{className:"input-wrap"},a.createElement(c.a,{icon:l.l}),a.createElement("input",{type:"text",name:"search",id:"searchInput",value:o,placeholder:"Search",autoComplete:"off",autoFocus:!0,onChange:function(e){i(e.currentTarget.value)}}),a.createElement("div",{className:"search-toggle"},a.createElement("span",{style:{opacity:d?.8:.15},onClick:function(){p(!0)}},"in Title"),a.createElement("span",{style:{opacity:d?.15:.8},onClick:function(){p(!1)}},"in Title+Content"))),""===o||f.length?null:a.createElement("span",{className:"no-result"},"No search results"),a.createElement(u.a,{posts:""===o?t:f}))))}},uP4m:function(e,t,n){"use strict";var a=n("V0hb"),c=n("cI4T"),l=n.n(c),r=n("GJcz"),s=n("Wbzz");n("l/wD");t.a=function(e){var t=e.posts,n=Object(r.useState)(10),c=n[0],u=n[1],o=Object(r.useState)([]),i=o[0],m=o[1],d=Object(r.useMemo)((function(){return t.sort((function(e,t){var n=e.node.frontmatter,a=t.node.frontmatter,c=new Date(n.update.includes("0001")?n.date:n.update),l=new Date(a.update.includes("0001")?a.date:a.update);return c<l?1:c>l?-1:0})),t}),[t]),p=Object(r.useCallback)(l()((function(){window.outerHeight>document.querySelector(".post-list").getBoundingClientRect().bottom&&u((function(e){return e>=d.length?e:e+10}))}),250),[d]),f=Object(r.useCallback)((function(e){var t=e.map((function(e){var t=e.node,n=t.excerpt,a=t.fields,c=t.frontmatter,l=a.slug,u=c.date,o=c.title,i=c.tags,m=c.update;1===Number(m.split(",")[1])&&(m=null);var d=i.map((function(e){if("undefined"!==e)return r.createElement("div",{key:l+"-"+e,className:"tag"},r.createElement("span",null,r.createElement(s.Link,{to:"/tags#"+e},"#"+e)))}));return r.createElement("li",{key:l,className:"post"},r.createElement("article",null,r.createElement("h2",{className:"title"},r.createElement(s.Link,{to:l},o)),r.createElement("div",{className:"info"},r.createElement("div",{className:"date-wrap"},r.createElement("span",{className:"date"},u),m?r.createElement("span",{className:"update"}," ","(Updated: "+m+")"):null),i.length&&"undefined"!==i[0]?r.createElement("span",{className:"info-dot"},"·"):null,r.createElement("ul",{className:"tag-list"},d)),r.createElement(s.Link,{to:l},r.createElement("span",{className:"excerpt"},n))))}));m((function(e){return[].concat(Object(a.a)(e),Object(a.a)(t))}))}),[]);return Object(r.useEffect)((function(){c>0&&10!==c&&f(d.slice(i.length,c))}),[c]),Object(r.useEffect)((function(){return i.length&&m([]),u((function(e){return 10===e&&f(d.slice(0,10)),10})),window.addEventListener("scroll",p),function(){window.removeEventListener("scroll",p)}}),[d]),r.createElement("div",{className:"post-list"},r.createElement("ul",null,i))}}}]);
//# sourceMappingURL=component---src-pages-search-tsx-8770685e40b67a32d4f6.js.map