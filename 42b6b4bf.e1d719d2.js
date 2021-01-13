(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),o=(n(0),n(252)),i={id:"defaults",title:"Selecting defaults for config groups"},l={unversionedId:"tutorials/basic/your_first_app/defaults",id:"version-1.0/tutorials/basic/your_first_app/defaults",isDocsHomePage:!1,title:"Selecting defaults for config groups",description:"Example",source:"@site/versioned_docs/version-1.0/tutorials/basic/your_first_app/5_defaults.md",slug:"/tutorials/basic/your_first_app/defaults",permalink:"/docs/tutorials/basic/your_first_app/defaults",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/basic/your_first_app/5_defaults.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1610531838,sidebar:"version-1.0/docs",previous:{title:"Grouping config files",permalink:"/docs/tutorials/basic/your_first_app/config_groups"},next:{title:"Putting it all together",permalink:"/docs/tutorials/basic/your_first_app/composition"}},c=[{value:"Config group defaults",id:"config-group-defaults",children:[{value:"Overriding a config group default",id:"overriding-a-config-group-default",children:[]}]},{value:"Non-config group defaults",id:"non-config-group-defaults",children:[]}],u={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/tutorials/basic/your_first_hydra_app/5_defaults"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example-informational",alt:"Example"})))),Object(o.b)("p",null,"After office politics, you decide that you want to use MySQL by default.\nYou no longer want to type ",Object(o.b)("inlineCode",{parentName:"p"},"+db=mysql")," every time you run your application."),Object(o.b)("p",null,"You can add a ",Object(o.b)("inlineCode",{parentName:"p"},"defaults")," list into your config file."),Object(o.b)("h2",{id:"config-group-defaults"},"Config group defaults"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"defaults:\n  - db: mysql\n")),Object(o.b)("p",null,"Remember to specify the ",Object(o.b)("inlineCode",{parentName:"p"},"config_name"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n')),Object(o.b)("p",null,"When you run the updated application, MySQL is loaded by default."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")),Object(o.b)("p",null,"You can have multiple items in the defaults list, e.g"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n - db: mysql\n - db/mysql/storage_engine: innodb\n")),Object(o.b)("p",null,"The defaults are ordered:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If multiple configs define the same value, the last one wins. "),Object(o.b)("li",{parentName:"ul"},"If multiple configs contribute to the same dictionary, the result is the combined dictionary.")),Object(o.b)("h3",{id:"overriding-a-config-group-default"},"Overriding a config group default"),Object(o.b)("p",null,"You can still load PostgreSQL, and override individual values."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgre_user\n")),Object(o.b)("p",null,"You can remove a default entry from the defaults list by prefixing it with ~:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py ~db\n{}\n")),Object(o.b)("h2",{id:"non-config-group-defaults"},"Non-config group defaults"),Object(o.b)("p",null,"Sometimes a config file does not belong in any config group.\nYou can still load it by default. Here is an example for ",Object(o.b)("inlineCode",{parentName:"p"},"some_file.yaml"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - some_file\n")),Object(o.b)("p",null,"Config files that are not part of a config group will always be loaded. They cannot be overridden.",Object(o.b)("br",{parentName:"p"}),"\n","Prefer using a config group."))}p.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,d=s["".concat(i,".").concat(f)]||s[f]||b[f]||o;return n?r.a.createElement(d,l(l({ref:t},u),{},{components:n})):r.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);