"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8403],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return m},MDXProvider:function(){return s},mdx:function(){return g},useMDXComponents:function(){return c},withMDXComponents:function(){return p}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=a.createContext({}),p=function(e){return function(n){var t=c(n.components);return a.createElement(e,r({},n,{components:t}))}},c=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),p=c(t),s=i,f=p["".concat(o,".").concat(s)]||p[s]||u[s]||r;return t?a.createElement(f,l(l({ref:n},m),{},{components:t})):a.createElement(f,l({ref:n},m))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},35725:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return s}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],l={id:"terminology",title:"Terminology"},d=void 0,m={unversionedId:"terminology",id:"version-1.0/terminology",title:"Terminology",description:"Overview",source:"@site/versioned_docs/version-1.0/terminology.md",sourceDirName:".",slug:"/terminology",permalink:"/docs/1.0/terminology",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/terminology.md",tags:[],version:"1.0",lastUpdatedBy:"P\xe1draig Brady",lastUpdatedAt:1649271406,formattedLastUpdatedAt:"4/6/2022",frontMatter:{id:"terminology",title:"Terminology"},sidebar:"version-1.0/docs",previous:{title:"Getting started",permalink:"/docs/1.0/intro"},next:{title:"Tutorials intro",permalink:"/docs/1.0/tutorials/intro"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"Input Configs",id:"input-configs",children:[{value:"Primary Config",id:"primary-config",children:[],level:3},{value:"Structured Config",id:"structured-config",children:[],level:3},{value:"Defaults List",id:"defaults-list",children:[],level:3},{value:"Config Group",id:"config-group",children:[],level:3},{value:"Config Group Option",id:"config-group-option",children:[],level:3},{value:"Config Node",id:"config-node",children:[],level:3},{value:"Package",id:"package",children:[],level:3},{value:"Package directive",id:"package-directive",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],level:2},{value:"Output Config Object",id:"output-config-object",children:[],level:2},{value:"Misc",id:"misc",children:[{value:"Config Search Path",id:"config-search-path",children:[],level:3},{value:"Plugins",id:"plugins",children:[],level:3}],level:2}],c={toc:p};function s(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.mdx)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"overview"},"Overview"),(0,r.mdx)("p",null,"This page describes some of the common concepts in Hydra.\nMost of the concepts are described in much more details throughout the documentation."),(0,r.mdx)("h2",{id:"input-configs"},"Input Configs"),(0,r.mdx)("p",null,"Input configs are used to construct the config object used by the application.",(0,r.mdx)("br",{parentName:"p"}),"\n","Supported input configs are:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Config Files (",(0,r.mdx)("a",{parentName:"li",href:"https://yaml.org/"},"YAML")," files)"),(0,r.mdx)("li",{parentName:"ul"},"Command line arguments"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#structured-config"},"Structured Configs")," (Python ",(0,r.mdx)("a",{parentName:"li",href:"https://docs.python.org/3/library/dataclasses.html"},"@dataclasses"),")")),(0,r.mdx)("h3",{id:"primary-config"},"Primary Config"),(0,r.mdx)("p",null,"The input config named in ",(0,r.mdx)("a",{parentName:"p",href:"/docs/1.0/tutorials/basic/your_first_app/simple_cli"},(0,r.mdx)("inlineCode",{parentName:"a"},"@hydra.main()"))," or in\nthe ",(0,r.mdx)("a",{parentName:"p",href:"/docs/1.0/experimental/compose_api"},(0,r.mdx)("inlineCode",{parentName:"a"},"Compose API")),".",(0,r.mdx)("br",{parentName:"p"}),"\n","The Primary Config is the only config that is allowed to have a ",(0,r.mdx)("a",{parentName:"p",href:"#defaults-list"},"Defaults List")),(0,r.mdx)("h3",{id:"structured-config"},"Structured Config"),(0,r.mdx)("p",null,"A @dataclass or an instance of a @dataclass that is used to construct a config. These enable both runtime and static type checking."),(0,r.mdx)("p",null,"There are two primary patterns for using Structured configs:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"As an ",(0,r.mdx)("a",{parentName:"li",href:"#input-configs"},"Input Config"),"."),(0,r.mdx)("li",{parentName:"ul"},"As a schema validating Config Files and command line arguments.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Example:"',title:'"Example:"'},"@dataclass\nclass User:\n  name: str = MISSING\n  age: int = MISSING\n")),(0,r.mdx)("h3",{id:"defaults-list"},"Defaults List"),(0,r.mdx)("p",null,"A list in the ",(0,r.mdx)("a",{parentName:"p",href:"#primary-config"},"Primary Config")," that determines how to build the final ",(0,r.mdx)("a",{parentName:"p",href:"#output-config-object"},"Config Object"),".\nThe list is typically composed of ",(0,r.mdx)("a",{parentName:"p",href:"#config-group-option"},"Config Group Options"),". "),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example: config.yaml"',title:'"Example:','config.yaml"':!0},"defaults:\n  - db: mysql\n  - schema: school\n")),(0,r.mdx)("h3",{id:"config-group"},"Config Group"),(0,r.mdx)("p",null,"A Config Group is a mutually exclusive set of ",(0,r.mdx)("a",{parentName:"p",href:"#config-group-option"},"Config Group Options"),".\nConfig Groups can be hierarchical and in that case the path elements are separated by a forward slash ('/')\nregardless of the operating system."),(0,r.mdx)("h3",{id:"config-group-option"},"Config Group Option"),(0,r.mdx)("p",null,"One of the configs in a Config Group."),(0,r.mdx)("h3",{id:"config-node"},"Config Node"),(0,r.mdx)("p",null,"A Config Node is either a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Value Node")," (a primitive type), or a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Container Node"),".  A ",(0,r.mdx)("inlineCode",{parentName:"p"},"Container Node")," is a list or dictionary of ",(0,r.mdx)("inlineCode",{parentName:"p"},"Value Nodes"),"."),(0,r.mdx)("h3",{id:"package"},"Package"),(0,r.mdx)("p",null,"A Package is the path of the ",(0,r.mdx)("a",{parentName:"p",href:"#config-node"},"Config Node")," in the ",(0,r.mdx)("a",{parentName:"p",href:"#output-config-object"},"Config Object"),". "),(0,r.mdx)("h3",{id:"package-directive"},"Package directive"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"/docs/1.0/advanced/overriding_packages"},"Package Directive")," specifies the root ",(0,r.mdx)("a",{parentName:"p",href:"#package"},"Package")," of an ",(0,r.mdx)("a",{parentName:"p",href:"#input-configs"},"Config File")),(0,r.mdx)("h3",{id:"example"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Input config: mi6/agent/james_bond.yaml"',title:'"Input',"config:":!0,'mi6/agent/james_bond.yaml"':!0},"# @package _group_\ncodename: '007'\n")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Resulting config"',title:'"Resulting','config"':!0},"mi6:\n    agent:\n        codename: '007'\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#config-group"},"Config Group"),": mi6/agent"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#config-group-option"},"Config Group Option"),": james_bond  "),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#config-node"},"Container Nodes"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"{codename: '007'}"),", ","\xa0",". . . ","\xa0",",",(0,r.mdx)("inlineCode",{parentName:"li"},"{mi6: {agent: {codename: '007'}}}")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#config-node"},"Value Node"),": '007'"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#package"},"Packages")," ",(0,r.mdx)("inlineCode",{parentName:"li"},"<empty>"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"mi6"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"mi6.agent"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"mi6.agent.codename")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#package-directive"},"Package directive")," : ",(0,r.mdx)("inlineCode",{parentName:"li"},"@package _group_"),", which expands to ",(0,r.mdx)("inlineCode",{parentName:"li"},"mi6.agent"))),(0,r.mdx)("h2",{id:"output-config-object"},"Output Config Object"),(0,r.mdx)("p",null,"The config for the application. It is a dictionary of ",(0,r.mdx)("a",{parentName:"p",href:"#config-node"},"Config Nodes")," generated from the ",(0,r.mdx)("a",{parentName:"p",href:"#input-configs"},"Input Configs"),"."),(0,r.mdx)("h2",{id:"misc"},"Misc"),(0,r.mdx)("h3",{id:"config-search-path"},"Config Search Path"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"/docs/1.0/advanced/search_path"},"Config Search Path")," is a list of paths that are searched in order to find configs. It is similar to\nthe Python ",(0,r.mdx)("a",{parentName:"p",href:"https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH"},"PYTHONPATH"),"."),(0,r.mdx)("h3",{id:"plugins"},"Plugins"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/docs/1.0/advanced/plugins"},"Plugins")," extend Hydra's capabilities. Some examples are Launcher and Sweeper."))}s.isMDXComponent=!0}}]);