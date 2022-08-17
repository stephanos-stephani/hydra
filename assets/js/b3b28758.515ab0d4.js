"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3959],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return s},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return c},withMDXComponents:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),m=function(e){return function(n){var t=c(n.components);return r.createElement(e,i({},n,{components:t}))}},c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,f=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return p},T:function(){return s}});var r=t(87462),a=t(67294),i=t(39960),o=t(52263),l=t(80907);function p(e){return a.createElement(i.default,(0,r.Z)({},e,{to:(n=e.to,p=(0,l.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==p?void 0:p.name)?t:"current"]+n),target:"_blank"}));var n,t,p}function s(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return a.createElement(p,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},48573:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return c},default:function(){return d}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=t(93899),l=["components"],p={id:"rerun",title:"Re-run a job from previous config",sidebar_label:"Re-run"},s=void 0,m={unversionedId:"experimental/rerun",id:"version-1.2/experimental/rerun",title:"Re-run a job from previous config",description:"This is an experimental feature. Please read through this page to understand what is supported.",source:"@site/versioned_docs/version-1.2/experimental/rerun.md",sourceDirName:"experimental",slug:"/experimental/rerun",permalink:"/docs/1.2/experimental/rerun",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.2/experimental/rerun.md",tags:[],version:"1.2",lastUpdatedBy:"Guilherme Pires",lastUpdatedAt:1660741096,formattedLastUpdatedAt:"8/17/2022",frontMatter:{id:"rerun",title:"Re-run a job from previous config",sidebar_label:"Re-run"},sidebar:"docs",previous:{title:"Callbacks",permalink:"/docs/1.2/experimental/callbacks"},next:{title:"Developer Guide Overview",permalink:"/docs/1.2/development/overview"}},c=[{value:"Important Notes",id:"important-notes",children:[],level:3}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(o.T,{text:"Example application",to:"examples/experimental/rerun",mdxType:"ExampleGithubLink"}),(0,i.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"This is an experimental feature. Please read through this page to understand what is supported."))),(0,i.mdx)("p",null,"We use the example app linked above for demonstration. To save the configs for re-run, first use the experimental\nHydra Callback for saving the job info:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"hydra:\n  callbacks:\n    save_job_info:\n      _target_: hydra.experimental.pickle_job_info_callback.PickleJobInfoCallback\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Example function"',title:'"Example','function"':!0},'@hydra.main(version_base=None, config_path=".", config_name="config")\ndef my_app(cfg: DictConfig) -> None:\n    log.info(f"output_dir={HydraConfig.get().runtime.output_dir}")\n    log.info(f"cfg.foo={cfg.foo}")\n')),(0,i.mdx)("p",null,"Run the example app:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"$ python my_app.py\n[2022-03-16 14:51:30,905][hydra.experimental.pickle_job_info_callback][INFO] - Saving job configs in /Users/jieru/workspace/hydra/examples/experimental/outputs/2022-03-16/14-51-30/.hydra/config.pickle\n[2022-03-16 14:51:30,906][__main__][INFO] - Output_dir=/Users/jieru/workspace/hydra/examples/experimental/outputs/2022-03-16/14-51-30\n[2022-03-16 14:51:30,906][__main__][INFO] - cfg.foo=bar\n[2022-03-16 14:51:30,906][hydra.experimental.pickle_job_info_callback][INFO] - Saving job_return in /Users/jieru/workspace/hydra/examples/experimental/outputs/2022-03-16/14-51-30/.hydra/job_return.pickle\n")),(0,i.mdx)("p",null,"The Callback saves ",(0,i.mdx)("inlineCode",{parentName:"p"},"config.pickle")," in ",(0,i.mdx)("inlineCode",{parentName:"p"},".hydra")," sub dir, this is what we will use for rerun."),(0,i.mdx)("p",null,"Now rerun the app"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"$ OUTPUT_DIR=/Users/jieru/workspace/hydra/examples/experimental/outputs/2022-03-16/14-51-30/.hydra/\n$ python my_app.py --experimental-rerun $OUTPUT_DIR/config.pickle\n/Users/jieru/workspace/hydra/hydra/main.py:23: UserWarning: Experimental rerun CLI option.\n  warnings.warn(msg, UserWarning)\n[2022-03-16 14:59:21,666][__main__][INFO] - Output_dir=/Users/jieru/workspace/hydra/examples/experimental/outputs/2022-03-16/14-51-30\n[2022-03-16 14:59:21,666][__main__][INFO] - cfg.foo=bar\n")),(0,i.mdx)("p",null,"You will notice ",(0,i.mdx)("inlineCode",{parentName:"p"},"my_app.log")," is updated with the logging from the second run, but Callbacks are not called this time. Read on to learn more."),(0,i.mdx)("h3",{id:"important-notes"},"Important Notes"),(0,i.mdx)("p",null,"This is an experimental feature. Please reach out if you have any question. "),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Only single run is supported."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"--experimental-rerun")," cannot be used with other command-line options or overrides. They will simply be ignored."),(0,i.mdx)("li",{parentName:"ul"},"Rerun passes in a cfg_passthrough directly to your application, this means except for logging, no other ",(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.main"),"\nfunctions are called (such as change working dir, or calling callbacks.) "),(0,i.mdx)("li",{parentName:"ul"},"The configs are preserved and reconstructed to the best efforts. Meaning we can only guarantee that the ",(0,i.mdx)("inlineCode",{parentName:"li"},"cfg")," object\nitself passed in by ",(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.main")," stays the same across runs. However, configs are resolved lazily. Meaning we cannot\nguarantee your application will behave the same if your application resolves configs during run time. In the following example,\n",(0,i.mdx)("inlineCode",{parentName:"li"},"cfg.time_now")," will resolve to different value every run.")),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col  col--5"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"time_now: ${now:%H-%M-%S}\n\n\n\n"))),(0,i.mdx)("div",{className:"col col--7"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Example function"',title:'"Example','function"':!0},'@hydra.main(version_base=None, config_path=".", config_name="config")\ndef my_app(cfg: DictConfig) -> None:\n    val = cfg.time_now\n    # the rest of the application\n')))))}d.isMDXComponent=!0}}]);