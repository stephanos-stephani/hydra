(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4417],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3605:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={id:"config_file",title:"Configuration file",sidebar_label:"Configuration file"},c=void 0,p={unversionedId:"tutorial/config_file",id:"version-0.11/tutorial/config_file",isDocsHomePage:!1,title:"Configuration file",description:"It can get tedious to type all those command line arguments every time.",source:"@site/versioned_docs/version-0.11/tutorial/2_config_file.md",sourceDirName:"tutorial",slug:"/tutorial/config_file",permalink:"/docs/0.11/tutorial/config_file",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/tutorial/2_config_file.md",version:"0.11",lastUpdatedBy:"SaintMalik",lastUpdatedAt:1629398765,formattedLastUpdatedAt:"8/19/2021",sidebarPosition:2,frontMatter:{id:"config_file",title:"Configuration file",sidebar_label:"Configuration file"},sidebar:"version-0.11/docs",previous:{title:"Simple command line application",permalink:"/docs/0.11/tutorial/simple_cli"},next:{title:"Config groups",permalink:"/docs/0.11/tutorial/config_groups"}},s=[{value:"Strict mode",id:"strict-mode",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It can get tedious to type all those command line arguments every time.\nFix it by creating a configuration file:"),(0,o.kt)("p",null,"Configuration file: ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"db:\n  driver: mysql\n  user: omry\n  pass: secret\n")),(0,o.kt)("p",null,"Specify the config file by passing a ",(0,o.kt)("inlineCode",{parentName:"p"},"config_path")," parameter to the ",(0,o.kt)("inlineCode",{parentName:"p"},"@hydra.main()")," decorator.\nThe location of the ",(0,o.kt)("inlineCode",{parentName:"p"},"config_path")," is relative to your Python file."),(0,o.kt)("p",null,"Python file: ",(0,o.kt)("inlineCode",{parentName:"p"},"my_app.py")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@hydra.main(config_path='config.yaml')\ndef my_app(cfg):\n    print(OmegaConf.to_yaml(cfg))\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," is loaded automatically when you run your application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")),(0,o.kt)("p",null,"You can override values in the loaded config from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db.user=root db.pass=1234\ndb:\n  driver: mysql\n  user: root\n  pass: 1234\n")),(0,o.kt)("h3",{id:"strict-mode"},"Strict mode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Strict mode")," is useful for catching mistakes in both the command line overrides and in the code early.\nStrict mode is on by default when you specify a configuration file for the ",(0,o.kt)("inlineCode",{parentName:"p"},"config_path")," argument in ",(0,o.kt)("inlineCode",{parentName:"p"},"@hydra.main")," decorator.\nIt can be turned on or off via the ",(0,o.kt)("inlineCode",{parentName:"p"},"strict")," argument in your ",(0,o.kt)("inlineCode",{parentName:"p"},"@hydra.main()")," decorator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@hydra.main(config_path='config.yaml')\ndef my_app(cfg):\n    driver = cfg.db.driver # Okay\n    user = cfg.db.user # Okay\n    password = cfg.db.password # Not okay, there is no password field in db!\n                               # This will result in a KeyError\n")),(0,o.kt)("p",null,"Strict mode will also catch command line override mistakes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py db.port=3306\nTraceback (most recent call last):\n...\nKeyError: 'Accessing unknown key in a struct : db.port\n")),(0,o.kt)("p",null,"With strict mode off, accessing unknown keys in the config is permitted and both the above override and the example\nbelow would run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@hydra.main(config_path='config.yaml', strict=False)\ndef my_app(cfg):\n    cfg.db.port = 3306 # Okay\n")))}d.isMDXComponent=!0}}]);