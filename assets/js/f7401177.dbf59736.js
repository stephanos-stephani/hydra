"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5022],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return m},withMDXComponents:function(){return p}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),p=function(e){return function(n){var t=m(n.components);return r.createElement(e,o({},n,{components:t}))}},m=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(t),u=i,g=p["".concat(a,".").concat(u)]||p[u]||c[u]||o;return t?r.createElement(g,s(s({ref:n},d),{},{components:t})):r.createElement(g,s({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},69347:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={id:"testing",title:"Testing",sidebar_label:"Testing"},l=void 0,d={unversionedId:"development/testing",id:"version-1.2/development/testing",title:"Testing",description:"Hydra uses nox - a build automation tool - to manage tests, linting, code coverage, etc.",source:"@site/versioned_docs/version-1.2/development/testing.md",sourceDirName:"development",slug:"/development/testing",permalink:"/docs/1.2/development/testing",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.2/development/testing.md",tags:[],version:"1.2",lastUpdatedBy:"Guilherme Pires",lastUpdatedAt:1660741096,formattedLastUpdatedAt:"8/17/2022",frontMatter:{id:"testing",title:"Testing",sidebar_label:"Testing"},sidebar:"docs",previous:{title:"Developer Guide Overview",permalink:"/docs/1.2/development/overview"},next:{title:"Style Guide",permalink:"/docs/1.2/development/style_guide"}},p=[{value:"Testing with pytest",id:"testing-with-pytest",children:[],level:2},{value:"Testing with nox",id:"testing-with-nox",children:[],level:2}],m={toc:p};function u(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.mdx)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Hydra uses ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/theacodes/nox"},"nox")," - a build automation tool - to manage tests, linting, code coverage, etc.\nThe command ",(0,o.mdx)("inlineCode",{parentName:"p"},"nox")," will run all the configured sessions. List the sessions using ",(0,o.mdx)("inlineCode",{parentName:"p"},"nox -l")," and\nrun specific sessions with ",(0,o.mdx)("inlineCode",{parentName:"p"},"nox -s NAME")," (you may need to quote the session name in some cases)"),(0,o.mdx)("h2",{id:"testing-with-pytest"},"Testing with pytest"),(0,o.mdx)("p",null,"Run ",(0,o.mdx)("inlineCode",{parentName:"p"},"pytest")," at the repository root to run all the Hydra core tests.\nTo run the tests of individual plugins, use ",(0,o.mdx)("inlineCode",{parentName:"p"},"pytest plugins/NAME")," (The plugin must be installed)."),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOTE")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Some plugins support fewer versions of Python than the Hydra core."))),(0,o.mdx)("h2",{id:"testing-with-nox"},"Testing with nox"),(0,o.mdx)("p",null,"See ",(0,o.mdx)("inlineCode",{parentName:"p"},"nox -l"),". a few examples:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"nox -s test_core")," will test Hydra core on all supported Python versions"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},'nox -s "test_plugins-3.8"')," will test plugins on Python 3.8."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},'nox -s "test_plugins-3.8"')," will test plugins on Python 3.8.")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"noxfile.py")," is checking some environment variables to decide what to run. For example,\nto test a single plugin:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell",metastring:"{4}","{4}":!0},"$ PLUGINS=hydra_colorlog nox -s test_plugins-3.8\nOperating system        :       Linux\nNOX_PYTHON_VERSIONS     :       ['3.6', '3.7', '3.8', '3.9']\nPLUGINS                 :       ['hydra_colorlog']\nSKIP_CORE_TESTS         :       False\nFIX                     :       False\nVERBOSE                 :       0\nINSTALL_EDITABLE_MODE   :       0\nnox > Running session test_plugins-3.8\n...\n")))}u.isMDXComponent=!0}}]);