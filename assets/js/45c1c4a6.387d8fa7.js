"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2036],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return d},mdx:function(){return g},useMDXComponents:function(){return u},withMDXComponents:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),f=function(e){return function(n){var t=u(n.components);return r.createElement(e,o({},n,{components:t}))}},u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return l},T:function(){return c}});var r=t(87462),a=t(67294),o=t(39960),i=t(52263),s=t(80907);function l(e){return a.createElement(o.default,(0,r.Z)({},e,{to:(n=e.to,l=(0,s.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==l?void 0:l.name)?t:"current"]+n),target:"_blank"}));var n,t,l}function c(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return a.createElement(l,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},35432:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return f},toc:function(){return u},default:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=t(93899),s=["components"],l={id:"config_files",title:"Config files example",sidebar_label:"Config files example"},c=void 0,f={unversionedId:"advanced/instantiate_objects/config_files",id:"advanced/instantiate_objects/config_files",title:"Config files example",description:"This example demonstrates the use of config files to instantiated objects.",source:"@site/docs/advanced/instantiate_objects/config_files.md",sourceDirName:"advanced/instantiate_objects",slug:"/advanced/instantiate_objects/config_files",permalink:"/docs/next/advanced/instantiate_objects/config_files",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/advanced/instantiate_objects/config_files.md",tags:[],version:"current",lastUpdatedBy:"Anirudh Thatipelli",lastUpdatedAt:1644281710,formattedLastUpdatedAt:"2/8/2022",frontMatter:{id:"config_files",title:"Config files example",sidebar_label:"Config files example"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/advanced/instantiate_objects/overview"},next:{title:"Structured Configs example",permalink:"/docs/next/advanced/instantiate_objects/structured_config"}},u=[],d={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.mdx)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(i.T,{text:"Example applications",to:"examples/instantiate",mdxType:"ExampleGithubLink"}),(0,o.mdx)("p",null,"This example demonstrates the use of config files to instantiated objects."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'class DBConnection:\n    def connect(self):\n        ...\n\nclass MySQLConnection(DBConnection):\n    def __init__(self, host: str, user: str, password: str) -> None:\n        self.host = host\n        self.user = user\n        self.password = password\n\n    def connect(self) -> None:\n        print(f"MySQL connecting to {self.host}")\n\n\nclass PostgreSQLConnection(DBConnection):\n    def __init__(self, host: str, user: str, password: str, database: str) -> None:\n        self.host = host\n        self.user = user\n        self.password = password\n        self.database = database\n\n    def connect(self) -> None:\n        print(f"PostgreSQL connecting to {self.host}")\n')),(0,o.mdx)("p",null,"To support this, we can have a parallel config structure:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},"conf/\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 mysql.yaml\n    \u2514\u2500\u2500 postgresql.yaml\n")),(0,o.mdx)("p",null,"Config files:"),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"_target_: my_app.MySQLConnection\nhost: localhost\nuser: root\npassword: 1234\n\n"))),(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/postgresql.yaml"',title:'"db/postgresql.yaml"'},"_target_: my_app.PostgreSQLConnection\nhost: localhost\nuser: root\npassword: 1234\ndatabase: tutorial\n")))),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n")),(0,o.mdx)("p",null,"With this, you can instantiate the object from the configuration with a single line of code:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg):\n    connection = hydra.utils.instantiate(cfg.db)\n    connection.connect()\n')))}p.isMDXComponent=!0}}]);