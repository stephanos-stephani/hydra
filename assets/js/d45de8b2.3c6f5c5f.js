"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4805],{3905:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return s},MDXProvider:function(){return d},mdx:function(){return b},useMDXComponents:function(){return c},withMDXComponents:function(){return u}});var a=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=a.createContext({}),u=function(e){return function(n){var r=c(n.components);return a.createElement(e,l({},n,{components:r}))}},c=function(e){var n=a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=t,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return r?a.createElement(h,o(o({ref:n},s),{},{components:r})):a.createElement(h,o({ref:n},s))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=h;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},82501:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=r(87462),t=r(63366),l=(r(67294),r(3905)),i=["components"],o={id:"joblib_launcher",title:"Joblib Launcher plugin",sidebar_label:"Joblib Launcher plugin"},p=void 0,s={unversionedId:"plugins/joblib_launcher",id:"version-1.0/plugins/joblib_launcher",title:"Joblib Launcher plugin",description:"PyPI",source:"@site/versioned_docs/version-1.0/plugins/joblib_launcher.md",sourceDirName:"plugins",slug:"/plugins/joblib_launcher",permalink:"/docs/1.0/plugins/joblib_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/plugins/joblib_launcher.md",tags:[],version:"1.0",lastUpdatedBy:"Jasha",lastUpdatedAt:1652205437,formattedLastUpdatedAt:"5/10/2022",frontMatter:{id:"joblib_launcher",title:"Joblib Launcher plugin",sidebar_label:"Joblib Launcher plugin"},sidebar:"version-1.0/docs",previous:{title:"Colorlog plugin",permalink:"/docs/1.0/plugins/colorlog"},next:{title:"Ray Launcher plugin",permalink:"/docs/1.0/plugins/ray_launcher"}},u=[{value:"Installation",id:"installation",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3}],c={toc:u};function d(e){var n=e.components,r=(0,t.Z)(e,i);return(0,l.mdx)("wrapper",(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://pypi.org/project/hydra-joblib-launcher/"},(0,l.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-joblib-launcher",alt:"PyPI"})),"\n",(0,l.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-joblib-launcher",alt:"PyPI - License"}),"\n",(0,l.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-joblib-launcher",alt:"PyPI - Python Version"}),"\n",(0,l.mdx)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-joblib-launcher"},(0,l.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-joblib-launcher.svg",alt:"PyPI - Downloads"})),"\n",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_joblib_launcher/example"},(0,l.mdx)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"})),"\n",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_joblib_launcher"},(0,l.mdx)("img",{parentName:"a",src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"}))),(0,l.mdx)("p",null,"The Joblib Launcher plugin provides a launcher for parallel tasks based on ",(0,l.mdx)("a",{parentName:"p",href:"https://joblib.readthedocs.io/en/latest/parallel.html"},(0,l.mdx)("inlineCode",{parentName:"a"},"Joblib.Parallel")),"."),(0,l.mdx)("h3",{id:"installation"},"Installation"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-joblib-launcher --upgrade\n")),(0,l.mdx)("h3",{id:"usage"},"Usage"),(0,l.mdx)("p",null,"Once installed, add ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra/launcher=joblib")," to your command line. Alternatively, override ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/launcher: joblib\n")),(0,l.mdx)("p",null,"By default, process-based parallelism using all available CPU cores is used. By overriding the default configuration, it is e.g. possible limit the number of parallel executions."),(0,l.mdx)("p",null,"The JobLibLauncherConf backing the config is defined ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_joblib_launcher/hydra_plugins/hydra_joblib_launcher/config.py"},"here"),":"),(0,l.mdx)("p",null,"You can discover the Joblib Launcher parameters with:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python your_app.py hydra/launcher=joblib --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"your_app.py":!0,"hydra/launcher":"joblib","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0},"# @package hydra.launcher\n_target_: hydra_plugins.hydra_joblib_launcher.joblib_launcher.JoblibLauncher\nn_jobs: 10\nbackend: null\nprefer: processes\nrequire: null\nverbose: 0\ntimeout: null\npre_dispatch: 2*n_jobs\nbatch_size: auto\ntemp_folder: null\nmax_nbytes: null\nmmap_mode: r\n")),(0,l.mdx)("p",null,"See ",(0,l.mdx)("a",{parentName:"p",href:"https://joblib.readthedocs.io/en/latest/parallel.html"},(0,l.mdx)("inlineCode",{parentName:"a"},"Joblib.Parallel")," documentation")," for full details about the parameters above."),(0,l.mdx)("div",{class:"alert alert--info",role:"alert"},"NOTE: The only supported JobLib backend is Loky (process-based parallelism)."),(0,l.mdx)("br",null),(0,l.mdx)("p",null,"An ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_joblib_launcher/example"},"example application")," using this launcher is provided in the plugin repository."),(0,l.mdx)("p",null,"Starting the app with ",(0,l.mdx)("inlineCode",{parentName:"p"},"python my_app.py --multirun task=1,2,3,4,5")," will launch five parallel executions:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py --multirun task=1,2,3,4,5\n[HYDRA] Joblib.Parallel(n_jobs=-1,verbose=0,timeout=None,pre_dispatch=2*n_jobs,batch_size=auto,temp_folder=None,max_nbytes=None,mmap_mode=r,backend=loky) is launching 5 jobs\n[HYDRA] Launching jobs, sweep output dir : multirun/2020-02-18/10-00-00\n[__main__][INFO] - Process ID 14336 executing task 2 ...\n[__main__][INFO] - Process ID 14333 executing task 1 ...\n[__main__][INFO] - Process ID 14334 executing task 3 ...\n[__main__][INFO] - Process ID 14335 executing task 4 ...\n[__main__][INFO] - Process ID 14337 executing task 5 ...\n")))}d.isMDXComponent=!0}}]);