(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return f}));var n=a("GJcz"),l=a("Wbzz"),r=a("dA+l"),c=a("zSok"),s=a("VXBa"),i=a("H8eV"),m=a("BLTX"),o=(a("qnFv"),a("4QKa")),u=a.n(o),d=function(){var e=u.a.comment,t=u.a.name,a=u.a.company,l=u.a.location,s=u.a.email,i=u.a.website,o=u.a.linkedin,d=u.a.facebook,E=u.a.instagram,f=u.a.github;return n.createElement("div",{className:"bio"},e?n.createElement("span",{className:"comment"},e):null,t?n.createElement("div",{className:"bio-item name"},n.createElement("div",{className:"icon-wrap"},n.createElement(r.a,{icon:c.o})),n.createElement("span",null,t)):null,a?n.createElement("div",{className:"bio-item company"},n.createElement("div",{className:"icon-wrap"},n.createElement(r.a,{icon:c.a})),n.createElement("span",null,a)):null,l?n.createElement("div",{className:"bio-item location"},n.createElement("div",{className:"icon-wrap"},n.createElement(r.a,{icon:c.i})),n.createElement("span",null,l)):null,s?n.createElement("div",{className:"bio-item email"},n.createElement("div",{className:"icon-wrap"},n.createElement(r.a,{icon:c.d})),n.createElement("a",{href:"mailto:"+s},s)):null,i?n.createElement("div",{className:"bio-item website"},n.createElement("div",{className:"icon-wrap"},n.createElement(r.a,{icon:c.g})),n.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},i)):null,n.createElement("div",{className:"social"},n.createElement("a",{href:u.a.siteUrl+"/rss",target:"_blank",rel:"noopener noreferrer"},n.createElement(r.a,{icon:c.k,className:"rss"})),o?n.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},n.createElement(r.a,{icon:m.d,className:"linkedin"})):null,d?n.createElement("a",{href:d,target:"_blank",rel:"noopener noreferrer"},n.createElement(r.a,{icon:m.a,className:"facebook"})):null,E?n.createElement("a",{href:E,target:"_blank",rel:"noopener noreferrer"},n.createElement(r.a,{icon:m.c,className:"instagram"})):null,f?n.createElement("a",{href:f,target:"_blank",rel:"noopener noreferrer"},n.createElement(r.a,{icon:m.b,className:"github"})):null))},E=(a("fMxN"),a("uP4m")),f="1872984473";t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,m=t.site.siteMetadata.title;return n.createElement(s.a,null,n.createElement(i.a,{title:m}),n.createElement("div",{className:"index-wrap"},n.createElement(d,null),n.createElement("div",{className:"index-post-list-wrap"},n.createElement(E.a,{posts:a}),a.length<100?null:n.createElement("div",{className:"show-more-posts"},n.createElement("div",{className:"show-more-btn"},n.createElement(l.Link,{to:"/search"},n.createElement(r.a,{icon:c.l}),n.createElement("span",null,"SHOW MORE POSTS")))))))}},fMxN:function(e,t,a){},"l/wD":function(e,t,a){},qnFv:function(e,t,a){},uP4m:function(e,t,a){"use strict";var n=a("V0hb"),l=a("cI4T"),r=a.n(l),c=a("GJcz"),s=a("Wbzz");a("l/wD");t.a=function(e){var t=e.posts,a=Object(c.useState)(10),l=a[0],i=a[1],m=Object(c.useState)([]),o=m[0],u=m[1],d=Object(c.useMemo)((function(){return t.sort((function(e,t){var a=e.node.frontmatter,n=t.node.frontmatter,l=new Date(a.update.includes("0001")?a.date:a.update),r=new Date(n.update.includes("0001")?n.date:n.update);return l<r?1:l>r?-1:0})),t}),[t]),E=Object(c.useCallback)(r()((function(){window.outerHeight>document.querySelector(".post-list").getBoundingClientRect().bottom&&i((function(e){return e>=d.length?e:e+10}))}),250),[d]),f=Object(c.useCallback)((function(e){var t=e.map((function(e){var t=e.node,a=t.excerpt,n=t.fields,l=t.frontmatter,r=n.slug,i=l.date,m=l.title,o=l.tags,u=l.update;1===Number(u.split(",")[1])&&(u=null);var d=o.map((function(e){if("undefined"!==e)return c.createElement("div",{key:r+"-"+e,className:"tag"},c.createElement("span",null,c.createElement(s.Link,{to:"/tags#"+e},"#"+e)))}));return c.createElement("li",{key:r,className:"post"},c.createElement("article",null,c.createElement("h2",{className:"title"},c.createElement(s.Link,{to:r},m)),c.createElement("div",{className:"info"},c.createElement("div",{className:"date-wrap"},c.createElement("span",{className:"date"},i),u?c.createElement("span",{className:"update"}," ","(Updated: "+u+")"):null),o.length&&"undefined"!==o[0]?c.createElement("span",{className:"info-dot"},"·"):null,c.createElement("ul",{className:"tag-list"},d)),c.createElement(s.Link,{to:r},c.createElement("span",{className:"excerpt"},a))))}));u((function(e){return[].concat(Object(n.a)(e),Object(n.a)(t))}))}),[]);return Object(c.useEffect)((function(){l>0&&10!==l&&f(d.slice(o.length,l))}),[l]),Object(c.useEffect)((function(){return o.length&&u([]),i((function(e){return 10===e&&f(d.slice(0,10)),10})),window.addEventListener("scroll",E),function(){window.removeEventListener("scroll",E)}}),[d]),c.createElement("div",{className:"post-list"},c.createElement("ul",null,o))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-42e9c7b9e0008b9f30b5.js.map