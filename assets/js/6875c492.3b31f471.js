"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[610],{6299:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),l=a(5999),n=a(1750);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(n.Z,{permalink:a,title:r.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&r.createElement(n.Z,{permalink:i,title:r.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},8902:function(e,t,a){a.d(t,{Z:function(){return C}});var r=a(7294),l=a(6010),n=a(3905),i=a(5999),s=a(9960),m=a(4996),o=a(9366),c=a(8780),g=a(66),u=a(7462),d=a(3366),p="iconEdit_dcUD",h=["className"];function E(e){var t=e.className,a=(0,d.Z)(e,h);return r.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(p,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function v(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},r.createElement(E,null),r.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var b="blogPostTitle_rzP5",f="blogPostData_Zg1s",_="blogPostDetailsFull_h6_j",N=a(7774),P="tags_XVD_",Z="tag_JSN8";function k(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(P,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:Z},r.createElement(N.Z,{name:t,permalink:a}))}))))}var T="image_o0gy";function w(e){return e.href?r.createElement(s.Z,e):r.createElement(r.Fragment,null,e.children)}function y(e){var t=e.author,a=t.name,l=t.title,n=t.url,i=t.imageURL,s=t.email,m=n||s&&"mailto:"+s||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement("span",{className:"avatar__photo-link avatar__photo"},r.createElement(w,{href:m},r.createElement("img",{className:T,src:i,alt:a}))),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(w,{href:m,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var M="authorCol_FlmR",x="imageOnlyAuthorRow_trpF",U="imageOnlyAuthorCol_S2np";function L(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?x:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?U:M),key:t},r.createElement(y,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function C(e){var t,a,u,d=(u=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return u(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=(0,m.C)().withBaseUrl,h=e.children,E=e.frontMatter,N=e.assets,P=e.metadata,Z=e.truncated,T=e.isBlogPostPage,w=void 0!==T&&T,y=P.date,M=P.formattedDate,x=P.permalink,U=P.tags,C=P.readingTime,I=P.title,R=P.editUrl,A=P.authors,B=null!=(t=N.image)?t:E.image,D=!w&&Z,F=U.length>0,O=w?"h1":"h2";return r.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(O,{className:b,itemProp:"headline"},w?I:r.createElement(s.Z,{itemProp:"url",to:x},I)),r.createElement("div",{className:(0,l.Z)(f,"margin-vert--md")},r.createElement("time",{dateTime:y,itemProp:"datePublished"},M),void 0!==C&&r.createElement(r.Fragment,null," \xb7 ",d(C))),r.createElement(L,{authors:A,assets:N})),B&&r.createElement("meta",{itemProp:"image",content:p(B,{absolute:!0})}),r.createElement("div",{id:w?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:g.Z},h)),(F||Z)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[_]=w,a))},F&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":D})},r.createElement(k,{tags:U})),w&&R&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(v,{editUrl:R})),D&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":F})},r.createElement(s.Z,{to:P.permalink,"aria-label":(0,i.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:I})},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9404:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=a(7294),l=a(9960),n=a(8665),i=a(8902),s=a(5999),m=a(9366),o=a(6299);function c(e){var t,a=e.metadata,c=e.items,g=e.sidebar,u=e.listMetadata,d=a.allTagsPath,p=a.name,h=a.count,E=(t=(0,m.c2)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),v=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:E(h),tagName:p});return r.createElement(n.Z,{title:v,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:g},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,v),r.createElement(l.Z,{href:d},r.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),c.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})),r.createElement(o.Z,{metadata:u}))}},1750:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294),l=a(9960);function n(e){var t=e.permalink,a=e.title,n=e.subLabel;return r.createElement(l.Z,{className:"pagination-nav__link",to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}}}]);