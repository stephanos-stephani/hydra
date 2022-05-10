"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3202],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return s},MDXProvider:function(){return d},mdx:function(){return g},useMDXComponents:function(){return u},withMDXComponents:function(){return p}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){return function(n){var t=u(n.components);return r.createElement(e,i({},n,{components:t}))}},u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,h=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(h,l(l({ref:n},s),{},{components:t})):r.createElement(h,l({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},40348:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"plugins",title:"Hydra plugins types",sidebar_label:"Hydra plugins"},c=void 0,s={unversionedId:"advanced/plugins",id:"version-1.0/advanced/plugins",title:"Hydra plugins types",description:"Hydra can be extended via plugins.",source:"@site/versioned_docs/version-1.0/advanced/plugins.md",sourceDirName:"advanced",slug:"/advanced/plugins",permalink:"/docs/1.0/advanced/plugins",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/advanced/plugins.md",tags:[],version:"1.0",lastUpdatedBy:"Jasha",lastUpdatedAt:1652205437,formattedLastUpdatedAt:"5/10/2022",frontMatter:{id:"plugins",title:"Hydra plugins types",sidebar_label:"Hydra plugins"},sidebar:"version-1.0/docs",previous:{title:"Config Search Path",permalink:"/docs/1.0/advanced/search_path"},next:{title:"Application packaging",permalink:"/docs/1.0/advanced/app_packaging"}},p=[{value:"Plugin discovery",id:"plugin-discovery",children:[],level:2},{value:"Plugin types",id:"plugin-types",children:[{value:"Sweeper",id:"sweeper",children:[],level:3},{value:"Launcher",id:"launcher",children:[],level:3},{value:"SearchPathPlugin",id:"searchpathplugin",children:[],level:3},{value:"ConfigSource",id:"configsource",children:[],level:3}],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Hydra can be extended via plugins.\nYou can see example plugins ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/plugins"},"here"),"."),(0,i.mdx)("div",{class:"alert alert--info",role:"alert"},(0,i.mdx)("strong",null,"NOTE"),": If you develop plugins, please join the ",(0,i.mdx)("a",{href:"https://hydra-framework.zulipchat.com/#narrow/stream/233935-Hydra-plugin.20dev.20announcements"},"plugin developer announcement channel")," in the chat."),(0,i.mdx)("br",null),(0,i.mdx)("h2",{id:"plugin-discovery"},"Plugin discovery"),(0,i.mdx)("p",null,"The plugin discovery process runs whenever Hydra starts. During plugin discovery, Hydra scans for plugins in all the submodules of ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra_plugins"),". Hydra will import each module and look for plugins defined in that module.\nAny module under ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra_plugins")," that is slow to import will slow down the startup of ",(0,i.mdx)("em",{parentName:"p"},"ALL")," Hydra applicaitons.\nPlugins with expensive imports can exclude individual files from this by prefixing them with ",(0,i.mdx)("inlineCode",{parentName:"p"},"_")," (but not ",(0,i.mdx)("inlineCode",{parentName:"p"},"__"),").\nFor example, the file ",(0,i.mdx)("inlineCode",{parentName:"p"},"_my_plugin_lib.py")," would not be imported and scanned, while ",(0,i.mdx)("inlineCode",{parentName:"p"},"my_plugin_lib.py")," would be."),(0,i.mdx)("h2",{id:"plugin-types"},"Plugin types"),(0,i.mdx)("h3",{id:"sweeper"},"Sweeper"),(0,i.mdx)("p",null,"A sweeper is responsible for converting command line arguments list into multiple jobs.\nFor example, the basic built-in sweeper takes arguments like:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"batch_size=128 optimizer=nesterov,adam learning_rate=0.01,0.1 \n")),(0,i.mdx)("p",null,"And creates 4 jobs with the following parameters:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"batch_size=128 optimizer=nesterov learning_rate=0.01\nbatch_size=128 optimizer=nesterov learning_rate=0.1\nbatch_size=128 optimizer=adam learning_rate=0.01\nbatch_size=128 optimizer=adam learning_rate=0.1\n")),(0,i.mdx)("h3",{id:"launcher"},"Launcher"),(0,i.mdx)("p",null,"Launchers are responsible for launching a job to a specific environment.\nA Launcher is taking a batch of argument lists like the one above and launches a job for each one.\nThe job uses those arguments to compose its configuration.\nThe basic launcher simply launches the job locally. "),(0,i.mdx)("h3",{id:"searchpathplugin"},"SearchPathPlugin"),(0,i.mdx)("p",null,"A config path plugin can manipulate the search path.\nThis can be used to influence the default Hydra configuration to be more appropriate to a specific environment,\nor just add new entries to the search path to make more configurations available to the Hydra app."),(0,i.mdx)("p",null,"SearchPathPlugin plugins are discovered automatically by Hydra and are being called to manipulate the search path before\nthe configuration is composed."),(0,i.mdx)("p",null,"Many other plugins also implement SearchPathPlugin to add their configuration to the config search path once they are installed. "),(0,i.mdx)("h3",{id:"configsource"},"ConfigSource"),(0,i.mdx)("p",null,"ConfigSource plugins can be used to allow Hydra to access configuration in non-standard locations when composing the config.\nThis can be used to enable to access an in-house private config store, or as a way to access configs from public sources like GitHub or S3."))}d.isMDXComponent=!0}}]);