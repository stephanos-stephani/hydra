"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4427],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return u},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),d=function(e){return function(n){var t=p(n.components);return r.createElement(e,i({},n,{components:t}))}},p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=g(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,s=d["".concat(a,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(s,l(l({ref:n},u),{},{components:t})):r.createElement(s,l({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},11434:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return g},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={id:"logging",title:"Logging",sidebar_label:"Logging"},g=void 0,u={unversionedId:"tutorial/logging",id:"version-0.11/tutorial/logging",title:"Logging",description:"People often do not use Python logging due to the setup cost.",source:"@site/versioned_docs/version-0.11/tutorial/9_logging.md",sourceDirName:"tutorial",slug:"/tutorial/logging",permalink:"/docs/0.11/tutorial/logging",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/tutorial/9_logging.md",tags:[],version:"0.11",lastUpdatedBy:"Guilherme Pires",lastUpdatedAt:1660741096,formattedLastUpdatedAt:"8/17/2022",sidebarPosition:9,frontMatter:{id:"logging",title:"Logging",sidebar_label:"Logging"},sidebar:"version-0.11/docs",previous:{title:"Output/Working directory",permalink:"/docs/0.11/tutorial/working_directory"},next:{title:"Debugging",permalink:"/docs/0.11/tutorial/debugging"}},d=[],p={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"People often do not use Python logging due to the setup cost.\nHydra solves that by configuring the Python logging for you."),(0,i.mdx)("p",null,"By default Hydra logs at the INFO level to both console and a file."),(0,i.mdx)("p",null,"Example of logging with Hydra:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'import logging\n\n# A logger for this file\nlog = logging.getLogger(__name__)\n\n@hydra.main()\ndef my_app(_cfg):\n    log.info("Info level message")\n    log.debug("Debug level message")\n\n$ python my_app.py\n[2019-06-27 00:52:46,653][__main__][INFO] - Info level message\n\n')),(0,i.mdx)("p",null,"You can enable DEBUG level logging from the command line  by overriding ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.verbose"),"."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.verbose")," can be a Boolean, a String or a List:\nExamples:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.verbose=true")," : Set ",(0,i.mdx)("strong",{parentName:"li"},"all")," loggers log level to ",(0,i.mdx)("inlineCode",{parentName:"li"},"DEBUG")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.verbose=__main__")," : Set the ",(0,i.mdx)("inlineCode",{parentName:"li"},"__main__")," logger log level to ",(0,i.mdx)("inlineCode",{parentName:"li"},"DEBUG")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.verbose=[__main__,hydra]"),": Set the log levels of the loggers ",(0,i.mdx)("inlineCode",{parentName:"li"},"__main__")," and hydra log to ",(0,i.mdx)("inlineCode",{parentName:"li"},"DEBUG"))),(0,i.mdx)("p",null,"Example output:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py hydra.verbose=[__main__,hydra]\n[2019-09-29 13:06:00,880] - Installed Hydra Plugins\n[2019-09-29 13:06:00,880] - ***********************\n...\n[2019-09-29 13:06:00,896][__main__][INFO] - Info level message\n[2019-09-29 13:06:00,896][__main__][DEBUG] - Debug level message\n")),(0,i.mdx)("p",null,"Logging can be ",(0,i.mdx)("a",{parentName:"p",href:"/docs/0.11/configure_hydra/logging"},"customized"),"."))}m.isMDXComponent=!0}}]);