"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4315],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return m},mdx:function(){return y},useMDXComponents:function(){return u},withMDXComponents:function(){return s}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){return function(n){var t=u(n.components);return r.createElement(e,i({},n,{components:t}))}},u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(t),m=a,d=s["".concat(o,".").concat(m)]||s[m]||f[m]||i;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return p},T:function(){return c}});var r=t(87462),a=t(67294),i=t(39960),o=t(52263),l=t(80907);function p(e){return a.createElement(i.default,(0,r.Z)({},e,{to:(n=e.to,p=(0,l.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==p?void 0:p.name)?t:"current"]+n),target:"_blank"}));var n,t,p}function c(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return a.createElement(p,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},27438:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=t(93899),l=["components"],p={id:"config_file",title:"Specifying a config file"},c=void 0,s={unversionedId:"tutorials/basic/your_first_app/config_file",id:"tutorials/basic/your_first_app/config_file",title:"Specifying a config file",description:"It can get tedious to type all those command line arguments.",source:"@site/docs/tutorials/basic/your_first_app/2_config_file.md",sourceDirName:"tutorials/basic/your_first_app",slug:"/tutorials/basic/your_first_app/config_file",permalink:"/docs/next/tutorials/basic/your_first_app/config_file",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/tutorials/basic/your_first_app/2_config_file.md",tags:[],version:"current",lastUpdatedBy:"Anirudh Thatipelli",lastUpdatedAt:1644281710,formattedLastUpdatedAt:"2/8/2022",sidebarPosition:2,frontMatter:{id:"config_file",title:"Specifying a config file"},sidebar:"docs",previous:{title:"A simple command-line application",permalink:"/docs/next/tutorials/basic/your_first_app/simple_cli"},next:{title:"Using the config object",permalink:"/docs/next/tutorials/basic/your_first_app/using_config"}},u=[],m={toc:u};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(o.T,{to:"examples/tutorials/basic/your_first_hydra_app/2_config_file",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"It can get tedious to type all those command line arguments.\nYou can solve it by creating a configuration file next to my_app.py.\nHydra configuration files are yaml files and should have the .yaml file extension."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"db: \n  driver: mysql\n  user: omry\n  password: secret\n")),(0,i.mdx)("p",null,"Specify the config name by passing a ",(0,i.mdx)("inlineCode",{parentName:"p"},"config_name")," parameter to the ",(0,i.mdx)("strong",{parentName:"p"},"@hydra.main()")," decorator.\nNote that you should omit the ",(0,i.mdx)("strong",{parentName:"p"},".yaml")," extension.\nHydra also needs to know where to find your config. Specify the directory containing it relative to the application by passing ",(0,i.mdx)("inlineCode",{parentName:"p"},"config_path"),": "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py" {4}',title:'"my_app.py"',"{4}":!0},'from omegaconf import DictConfig, OmegaConf\nimport hydra\n\n@hydra.main(config_path=".", config_name="config")\ndef my_app(cfg):\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"config.yaml")," is loaded automatically when you run your application."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  user: omry\n  password: secret\n")),(0,i.mdx)("p",null,"You can override values in the loaded config from the command line.",(0,i.mdx)("br",{parentName:"p"}),"\n","Note the lack of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"+")," prefix."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:"{4-5}","{4-5}":!0},"$ python my_app.py db.user=root db.password=1234\ndb:\n  driver: mysql\n  user: root\n  password: 1234\n")),(0,i.mdx)("p",null,"Use ",(0,i.mdx)("inlineCode",{parentName:"p"},"++")," to override a config value if it's already in the config, or add it otherwise.\ne.g:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"# Override an existing item\n$ python my_app.py ++db.password=1234\n\n# Add a new item\n$ python my_app.py ++db.timeout=5\n")),(0,i.mdx)("p",null,"You can enable ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/tutorials/basic/running_your_app/tab_completion"},"tab completion")," for your Hydra applications."))}f.isMDXComponent=!0}}]);