"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4417],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return p},MDXProvider:function(){return u},mdx:function(){return y},useMDXComponents:function(){return m},withMDXComponents:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),d=function(e){return function(n){var t=m(n.components);return r.createElement(e,a({},n,{components:t}))}},m=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=m(t),u=o,f=d["".concat(i,".").concat(u)]||d[u]||s[u]||a;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},11280:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"config_file",title:"Configuration file",sidebar_label:"Configuration file"},c=void 0,p={unversionedId:"tutorial/config_file",id:"version-0.11/tutorial/config_file",title:"Configuration file",description:"It can get tedious to type all those command line arguments every time.",source:"@site/versioned_docs/version-0.11/tutorial/2_config_file.md",sourceDirName:"tutorial",slug:"/tutorial/config_file",permalink:"/docs/0.11/tutorial/config_file",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/tutorial/2_config_file.md",tags:[],version:"0.11",lastUpdatedBy:"P\xe1draig Brady",lastUpdatedAt:1649271406,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:2,frontMatter:{id:"config_file",title:"Configuration file",sidebar_label:"Configuration file"},sidebar:"version-0.11/docs",previous:{title:"Simple command line application",permalink:"/docs/0.11/tutorial/simple_cli"},next:{title:"Config groups",permalink:"/docs/0.11/tutorial/config_groups"}},d=[{value:"Strict mode",id:"strict-mode",children:[],level:3}],m={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"It can get tedious to type all those command line arguments every time.\nFix it by creating a configuration file:"),(0,a.mdx)("p",null,"Configuration file: ",(0,a.mdx)("inlineCode",{parentName:"p"},"config.yaml")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"db:\n  driver: mysql\n  user: omry\n  pass: secret\n")),(0,a.mdx)("p",null,"Specify the config file by passing a ",(0,a.mdx)("inlineCode",{parentName:"p"},"config_path")," parameter to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"@hydra.main()")," decorator.\nThe location of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"config_path")," is relative to your Python file."),(0,a.mdx)("p",null,"Python file: ",(0,a.mdx)("inlineCode",{parentName:"p"},"my_app.py")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"@hydra.main(config_path='config.yaml')\ndef my_app(cfg):\n    print(OmegaConf.to_yaml(cfg))\n")),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"config.yaml")," is loaded automatically when you run your application"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")),(0,a.mdx)("p",null,"You can override values in the loaded config from the command line:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db.user=root db.pass=1234\ndb:\n  driver: mysql\n  user: root\n  pass: 1234\n")),(0,a.mdx)("h3",{id:"strict-mode"},"Strict mode"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"Strict mode")," is useful for catching mistakes in both the command line overrides and in the code early.\nStrict mode is on by default when you specify a configuration file for the ",(0,a.mdx)("inlineCode",{parentName:"p"},"config_path")," argument in ",(0,a.mdx)("inlineCode",{parentName:"p"},"@hydra.main")," decorator.\nIt can be turned on or off via the ",(0,a.mdx)("inlineCode",{parentName:"p"},"strict")," argument in your ",(0,a.mdx)("inlineCode",{parentName:"p"},"@hydra.main()")," decorator."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"@hydra.main(config_path='config.yaml')\ndef my_app(cfg):\n    driver = cfg.db.driver # Okay\n    user = cfg.db.user # Okay\n    password = cfg.db.password # Not okay, there is no password field in db!\n                               # This will result in a KeyError\n")),(0,a.mdx)("p",null,"Strict mode will also catch command line override mistakes:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py db.port=3306\nTraceback (most recent call last):\n...\nKeyError: 'Accessing unknown key in a struct : db.port\n")),(0,a.mdx)("p",null,"With strict mode off, accessing unknown keys in the config is permitted and both the above override and the example\nbelow would run."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"@hydra.main(config_path='config.yaml', strict=False)\ndef my_app(cfg):\n    cfg.db.port = 3306 # Okay\n")))}u.isMDXComponent=!0}}]);