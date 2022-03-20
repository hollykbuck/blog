"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[803],{2548:function(a,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return N},metadata:function(){return o},toc:function(){return k}});var s=t(7462),m=t(3366),n=t(7294),p=t(4137),r=function(){var a=(0,n.useRef)(null);return(0,n.useEffect)((function(){var e=document.createElement("script");e.setAttribute("src","https://utteranc.es/client.js"),e.setAttribute("crossorigin","anonymous"),e.setAttribute("async",""),e.setAttribute("repo","hollykbuck/blog"),e.setAttribute("issue-term","pathname"),e.setAttribute("theme","github-light"),a.current.append(e)}),[]),n.createElement("div",{ref:a})},l=["components"],N={slug:"mdx-blog-post",title:"Implement a RPC Protocol in C++",authors:["paul"],tags:["cpp"]},i=void 0,o={permalink:"/blog/mdx-blog-post",source:"@site/blog/2022-03-16-hello.mdx",title:"Implement a RPC Protocol in C++",description:"$f(x)$",date:"2022-03-16T00:00:00.000Z",formattedDate:"March 16, 2022",tags:[{label:"cpp",permalink:"/blog/tags/cpp"}],readingTime:.95,truncated:!0,authors:[{name:"Paul P. Baran",title:"Graduate Student @ SHIEP",url:"https://github.com/pdeantihuman",imageURL:"https://www.gravatar.com/avatar/5866a77bf269935769ffffade99a397a",key:"paul"}],frontMatter:{slug:"mdx-blog-post",title:"Implement a RPC Protocol in C++",authors:["paul"],tags:["cpp"]},prevItem:{title:"C++ Network Basics",permalink:"/blog/cpp-post"}},c={authorsImageUrls:[void 0]},k=[],h={toc:k};function g(a){var e=a.components,t=(0,m.Z)(a,l);return(0,p.kt)("wrapper",(0,s.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"f"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,p.kt)("mi",{parentName:"mrow"},"x"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(x)")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"("),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,p.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,p.kt)("div",{className:"math math-display"},(0,p.kt)("span",{parentName:"div",className:"katex-display"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"f"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,p.kt)("mi",{parentName:"mrow"},"x"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(x)")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"("),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,p.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,p.kt)("p",null,"RTL8852AE is a network card model that Lenovo's notebook and desktop computers like to use. RTL8852AE+AX201 provides Wi-Fi 6 experience. However, because this set of things is relatively new, the driver has not been incorporated into the kernel, so it needs to compile the kernel module to support it."),(0,p.kt)("p",null,"Let ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"f"),(0,p.kt)("mspace",{parentName:"mrow"}),(0,p.kt)("mspace",{parentName:"mrow",width:"0.1111em"}),(0,p.kt)("mo",{parentName:"mrow",lspace:"0em",rspace:"0.17em"}),(0,p.kt)("mtext",{parentName:"mrow"},"\u2009\u2063"),(0,p.kt)("mo",{parentName:"mrow",lspace:"0em",rspace:"0em"},":"),(0,p.kt)("mspace",{parentName:"mrow",width:"0.3333em"}),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,p.kt)("mi",{parentName:"mrow"},"a"),(0,p.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,p.kt)("mi",{parentName:"mrow"},"b"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,p.kt)("mo",{parentName:"mrow"},"\u2192"),(0,p.kt)("mi",{parentName:"mrow",mathvariant:"double-struck"},"R")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f\\colon[a,b] \\to \\R")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,p.kt)("span",{parentName:"span",className:"mspace nobreak"}),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1111em"}}),(0,p.kt)("span",{parentName:"span",className:"mpunct"}),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mrel"},":")),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.3333em"}}),(0,p.kt)("span",{parentName:"span",className:"mopen"},"["),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,p.kt)("span",{parentName:"span",className:"mpunct"},","),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,p.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,p.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6889em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathbb"},"R")))))," be Riemann integrable. Let ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"F"),(0,p.kt)("mspace",{parentName:"mrow"}),(0,p.kt)("mspace",{parentName:"mrow",width:"0.1111em"}),(0,p.kt)("mo",{parentName:"mrow",lspace:"0em",rspace:"0.17em"}),(0,p.kt)("mtext",{parentName:"mrow"},"\u2009\u2063"),(0,p.kt)("mo",{parentName:"mrow",lspace:"0em",rspace:"0em"},":"),(0,p.kt)("mspace",{parentName:"mrow",width:"0.3333em"}),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,p.kt)("mi",{parentName:"mrow"},"a"),(0,p.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,p.kt)("mi",{parentName:"mrow"},"b"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,p.kt)("mo",{parentName:"mrow"},"\u2192"),(0,p.kt)("mi",{parentName:"mrow",mathvariant:"double-struck"},"R")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F\\colon[a,b]\\to\\R")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,p.kt)("span",{parentName:"span",className:"mspace nobreak"}),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1111em"}}),(0,p.kt)("span",{parentName:"span",className:"mpunct"}),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mrel"},":")),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.3333em"}}),(0,p.kt)("span",{parentName:"span",className:"mopen"},"["),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,p.kt)("span",{parentName:"span",className:"mpunct"},","),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,p.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,p.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6889em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathbb"},"R")))))," be ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"F"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,p.kt)("mi",{parentName:"mrow"},"x"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,p.kt)("mo",{parentName:"mrow"},"="),(0,p.kt)("msubsup",{parentName:"mrow"},(0,p.kt)("mo",{parentName:"msubsup"},"\u222b"),(0,p.kt)("mi",{parentName:"msubsup"},"a"),(0,p.kt)("mi",{parentName:"msubsup"},"x")),(0,p.kt)("mi",{parentName:"mrow"},"f"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,p.kt)("mi",{parentName:"mrow"},"t"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,p.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,p.kt)("mi",{parentName:"mrow"},"d"),(0,p.kt)("mi",{parentName:"mrow"},"t")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F(x)=\n\\int_{a}^{x} f(t)\\,dt")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"("),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,p.kt)("span",{parentName:"span",className:"mclose"},")"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,p.kt)("span",{parentName:"span",className:"mrel"},"="),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2151em",verticalAlign:"-0.3558em"}}),(0,p.kt)("span",{parentName:"span",className:"mop"},(0,p.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{marginRight:"0.19445em",position:"relative",top:"-0.0006em"}},"\u222b"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8593em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-2.3442em",marginLeft:"-0.1945em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a")))),(0,p.kt)("span",{parentName:"span",style:{top:"-3.2579em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"))))),(0,p.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3558em"}},(0,p.kt)("span",{parentName:"span"})))))),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"("),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,p.kt)("span",{parentName:"span",className:"mclose"},")"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))))),". Then ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"F")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F")))))," is continuous, and at all ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"x")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," such that ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"f")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f")))))," is continuous at ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"x")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),", ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"F")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F")))))," is differentiable at ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"x")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," with ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("msup",{parentName:"mrow"},(0,p.kt)("mi",{parentName:"msup"},"F"),(0,p.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,p.kt)("mi",{parentName:"mrow"},"x"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,p.kt)("mo",{parentName:"mrow"},"="),(0,p.kt)("mi",{parentName:"mrow"},"f"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,p.kt)("mi",{parentName:"mrow"},"x"),(0,p.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F'(x)=f(x)")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0019em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord"},(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,p.kt)("span",{parentName:"span",className:"msupsub"},(0,p.kt)("span",{parentName:"span",className:"vlist-t"},(0,p.kt)("span",{parentName:"span",className:"vlist-r"},(0,p.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7519em"}},(0,p.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,p.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,p.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},(0,p.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,p.kt)("span",{parentName:"span",className:"mopen"},"("),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,p.kt)("span",{parentName:"span",className:"mclose"},")"),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,p.kt)("span",{parentName:"span",className:"mrel"},"="),(0,p.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,p.kt)("span",{parentName:"span",className:"mopen"},"("),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,p.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,p.kt)("p",null,"Actually, the developer of RealTek has submitted the driver patch to Linux, but the code has not been incorporated into the kernel.\nLook at this patch ",(0,p.kt)("a",{parentName:"p",href:"https://lwn.net/ml/Linux-wireless/202012301527.izlr86em-lkp"},"https://lwn.net/ml/Linux-wireless/202012301527.izlr86em-lkp")," @ intel.com/\n",(0,p.kt)("a",{parentName:"p",href:"https://patches.linaro.org/cover/463567/"},"https://patches.linaro.org/cover/463567/")),(0,p.kt)("p",null,"You can see that the folder rtw89 does not exist in the kernel. This folder should be/drivers/net/wireless/realtek/RTW 89.\n",(0,p.kt)("a",{parentName:"p",href:"https://elixir.bootlin.com/linux/v5.15-rc6/source/drivers/net/wireless/realtek"},"https://elixir.bootlin.com/linux/v5.15-rc6/source/drivers/net/wireless/realtek")),(0,p.kt)("p",null,"Good people in the community have changed rtw89 v5 to dkms kernel module.\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/lwfinger/rtw89"},"https://github.com/lwfinger/rtw89")),(0,p.kt)("p",null,"By following the README of rtw89, a kernel module can be compiled and installed in the system."),(0,p.kt)("p",null,"The solution is the simplest in arch system, and the warehouse rtw89-dkms-git already exists in AUR."),(0,p.kt)(r,{mdxType:"Comments"}))}g.isMDXComponent=!0}}]);