"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[425],{3905:function(e,n,a){a.r(n),a.d(n,{MDXContext:function(){return m},MDXProvider:function(){return s},mdx:function(){return y},useMDXComponents:function(){return p},withMDXComponents:function(){return c}});var r=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var m=r.createContext({}),c=function(e){return function(n){var a=p(n.components);return r.createElement(e,l({},n,{components:a}))}},p=function(e){var n=r.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=p(e.components);return r.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=p(a),s=t,h=c["".concat(i,".").concat(s)]||c[s]||u[s]||l;return a?r.createElement(h,o(o({ref:n},m),{},{components:a})):r.createElement(h,o({ref:n},m))}));function y(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},93899:function(e,n,a){a.d(n,{Z:function(){return d},T:function(){return m}});var r=a(87462),t=a(67294),l=a(39960),i=a(52263),o=a(80907);function d(e){return t.createElement(l.default,(0,r.Z)({},e,{to:(n=e.to,d=(0,o.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(a=null==d?void 0:d.name)?a:"current"]+n),target:"_blank"}));var n,a,d}function m(e){var n,a=null!=(n=e.text)?n:"Example (Click Here)";return t.createElement(d,e,t.createElement("span",null,"\xa0"),t.createElement("img",{src:"https://img.shields.io/badge/-"+a+"-informational",alt:"Example (Click Here)"}))}},84838:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=a(87462),t=a(63366),l=(a(67294),a(3905)),i=a(93899),o=["components"],d={id:"ray_launcher",title:"Ray Launcher plugin",sidebar_label:"Ray Launcher plugin"},m=void 0,c={unversionedId:"plugins/ray_launcher",id:"version-1.1/plugins/ray_launcher",title:"Ray Launcher plugin",description:"PyPI",source:"@site/versioned_docs/version-1.1/plugins/ray_launcher.md",sourceDirName:"plugins",slug:"/plugins/ray_launcher",permalink:"/docs/1.1/plugins/ray_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/plugins/ray_launcher.md",tags:[],version:"1.1",lastUpdatedBy:"Guilherme Pires",lastUpdatedAt:1660741096,formattedLastUpdatedAt:"8/17/2022",frontMatter:{id:"ray_launcher",title:"Ray Launcher plugin",sidebar_label:"Ray Launcher plugin"},sidebar:"version-1.1/docs",previous:{title:"Joblib Launcher plugin",permalink:"/docs/1.1/plugins/joblib_launcher"},next:{title:"RQ Launcher plugin",permalink:"/docs/1.1/plugins/rq_launcher"}},p=[{value:"Installation",id:"installation",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3},{value:"<code>ray_aws</code> launcher",id:"ray_aws-launcher",children:[{value:"Examples",id:"examples",children:[{value:"Manage Cluster LifeCycle",id:"manage-cluster-lifecycle",children:[],level:5},{value:"Configure Ray Logging",id:"configure-ray-logging",children:[],level:5}],level:4}],level:3},{value:"<code>ray</code> launcher",id:"ray-launcher",children:[],level:3},{value:"Configure <code>ray.init()</code> and <code>ray.remote()</code>",id:"configure-rayinit-and-rayremote",children:[],level:3}],s={toc:p};function u(e){var n=e.components,a=(0,t.Z)(e,o);return(0,l.mdx)("wrapper",(0,r.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://pypi.org/project/hydra-ray-launcher/"},(0,l.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-ray-launcher",alt:"PyPI"})),"\n",(0,l.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-ray-launcher",alt:"PyPI - License"}),"\n",(0,l.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-ray-launcher",alt:"PyPI - Python Version"}),"\n",(0,l.mdx)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-ray-launcher"},(0,l.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-ray-launcher.svg",alt:"PyPI - Downloads"})),(0,l.mdx)(i.T,{text:"Example application",to:"plugins/hydra_ray_launcher/examples",mdxType:"ExampleGithubLink"}),(0,l.mdx)(i.T,{text:"Plugin source",to:"plugins/hydra_ray_launcher",mdxType:"ExampleGithubLink"})),(0,l.mdx)("p",null,"The Ray Launcher plugin provides 2 launchers: ",(0,l.mdx)("inlineCode",{parentName:"p"},"ray_aws")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"ray"),".\n",(0,l.mdx)("inlineCode",{parentName:"p"},"ray_aws")," launches jobs remotely on AWS and is built on top of ",(0,l.mdx)("a",{parentName:"p",href:"https://docs.ray.io/en/releases-1.3.0/cluster/sdk.html"},"ray autoscaler sdk"),". ",(0,l.mdx)("inlineCode",{parentName:"p"},"ray")," launches jobs on your local machine or existing ray cluster. "),(0,l.mdx)("h3",{id:"installation"},"Installation"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},"$ pip install hydra-ray-launcher --upgrade\n")),(0,l.mdx)("h3",{id:"usage"},"Usage"),(0,l.mdx)("p",null,"Once installed, add ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra/launcher=ray_aws")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra/launcher=ray")," to your command line. Alternatively, override ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/launcher: ray_aws\n")),(0,l.mdx)("p",null,"There are several standard approaches for configuring plugins. Check ",(0,l.mdx)("a",{parentName:"p",href:"/docs/1.1/patterns/configuring_plugins"},"this page")," for more information."),(0,l.mdx)("h3",{id:"ray_aws-launcher"},(0,l.mdx)("inlineCode",{parentName:"h3"},"ray_aws")," launcher"),(0,l.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},(0,l.mdx)("inlineCode",{parentName:"p"},"ray_aws")," launcher is built on top of ray's ",(0,l.mdx)("a",{parentName:"p",href:"https://docs.ray.io/en/releases-1.3.0/cluster/sdk.html"},"autoscaler sdk"),". To get started, you need to\n",(0,l.mdx)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"},"config your AWS credentials"),".\n",(0,l.mdx)("inlineCode",{parentName:"p"},"ray autoscaler sdk")," expects your AWS credentials have certain permissions for ",(0,l.mdx)("a",{parentName:"p",href:"https://aws.amazon.com/ec2"},(0,l.mdx)("inlineCode",{parentName:"a"},"EC2"))," and ",(0,l.mdx)("a",{parentName:"p",href:"https://aws.amazon.com/iam"},(0,l.mdx)("inlineCode",{parentName:"a"},"IAM")),". Read ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/ray-project/ray/issues/9327"},"this")," for more information."))),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"ray autoscaler sdk")," expects a configuration for the EC2 cluster; we've schematized the configs in ",(0,l.mdx)(i.Z,{to:"plugins/hydra_ray_launcher/hydra_plugins/hydra_ray_launcher/_config.py",mdxType:"GithubLink"},"here")),(0,l.mdx)("details",null,(0,l.mdx)("summary",null,"Discover ray_aws launcher's config"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},"$ python my_app.py hydra/launcher=ray_aws --cfg hydra -p hydra.launcher\n# @package hydra.launcher\n_target_: hydra_plugins.hydra_ray_launcher.ray_aws_launcher.RayAWSLauncher\nenv_setup:\n  pip_packages:\n    omegaconf: ${ray_pkg_version:omegaconf}\n    hydra_core: ${ray_pkg_version:hydra}\n    ray: ${ray_pkg_version:ray}\n    cloudpickle: ${ray_pkg_version:cloudpickle}\n    pickle5: 0.0.11\n    hydra_ray_launcher: 1.1.0.dev3\n  commands:\n  - conda create -n hydra_${python_version:micro} python=${python_version:micro} -y\n  - echo 'export PATH=\"$HOME/anaconda3/envs/hydra_${python_version:micro}/bin:$PATH\"'\n    >> ~/.bashrc\nray:\n  init:\n    address: null\n  remote: {}\n  cluster:\n    cluster_name: default\n    min_workers: 0\n    max_workers: 1\n    initial_workers: 0\n    autoscaling_mode: default\n    target_utilization_fraction: 0.8\n    idle_timeout_minutes: 5\n    docker:\n      image: ''\n      container_name: ''\n      pull_before_run: true\n      run_options: []\n    provider:\n      type: aws\n      region: us-west-2\n      availability_zone: us-west-2a,us-west-2b\n      cache_stopped_nodes: false\n      key_pair:\n        key_name: hydra-${oc.env:USER,user}\n    auth:\n      ssh_user: ubuntu\n    head_node:\n      InstanceType: m5.large\n      ImageId: ami-008d8ed4bd7dc2485\n    worker_nodes:\n      InstanceType: m5.large\n      ImageId: ami-008d8ed4bd7dc2485\n    file_mounts: {}\n    initialization_commands: []\n    setup_commands: []\n    head_setup_commands: []\n    worker_setup_commands: []\n    head_start_ray_commands:\n    - ray stop\n    - ulimit -n 65536;ray start --head --port=6379 --object-manager-port=8076\n      --autoscaling-config=~/ray_bootstrap_config.yaml\n    worker_start_ray_commands:\n    - ray stop\n    - ulimit -n 65536; ray start --address=$RAY_HEAD_IP:6379 --object-manager-port=8076\n  run_env: auto\nstop_cluster: true\nsync_up:\n  source_dir: null\n  target_dir: null\n  include: []\n  exclude: []\nsync_down:\n  source_dir: null\n  target_dir: null\n  include: []\n  exclude: []\nlogging:\n  log_style: auto\n  color_mode: auto\n  verbosity: 0\ncreate_update_cluster:\n  no_restart: false\n  restart_only: false\n  no_config_cache: false\nteardown_cluster:\n  workers_only: false\n  keep_min_workers: false\n"))),(0,l.mdx)("h4",{id:"examples"},"Examples"),(0,l.mdx)("p",null,"The following examples can be found ",(0,l.mdx)(i.Z,{to:"plugins/hydra_ray_launcher/examples",mdxType:"GithubLink"},"here"),"."),(0,l.mdx)("details",null,(0,l.mdx)("summary",null,"Simple app"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},"$ python my_app.py --multirun task=1,2,3\n[HYDRA] Ray Launcher is launching 3 jobs, \n[HYDRA]        #0 : task=1\n[HYDRA]        #1 : task=2\n[HYDRA]        #2 : task=3\n[HYDRA] Pickle for jobs: /var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmpqqg4v4i7/job_spec.pkl\nCluster: default\n...\nINFO services.py:1172 -- View the Ray dashboard at http://localhost:8265\n(pid=3374) [__main__][INFO] - Executing task 1\n(pid=3374) [__main__][INFO] - Executing task 2\n(pid=3374) [__main__][INFO] - Executing task 3\n...\n[HYDRA] Stopping cluster now. (stop_cluster=true)\n[HYDRA] Deleted the cluster (provider.cache_stopped_nodes=false)\nDestroying cluster. Confirm [y/N]: y [automatic, due to --yes]\n...\nNo nodes remaining.\n\n"))),(0,l.mdx)("details",null,(0,l.mdx)("summary",null,"Upload & Download from remote cluster"),(0,l.mdx)("p",null,"If your application is dependent on multiple modules, you can configure ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra.launcher.sync_up")," to upload dependency modules to the remote cluster.\nYou can also configure ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra.launcher.sync_down")," to download output from remote cluster if needed. This functionality is built on top of ",(0,l.mdx)("inlineCode",{parentName:"p"},"rsync"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"include")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"exclude")," is consistent with how it works in ",(0,l.mdx)("inlineCode",{parentName:"p"},"rsync"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},"$  python train.py --multirun random_seed=1,2,3\n[HYDRA] Ray Launcher is launching 3 jobs, \n[HYDRA]        #0 : random_seed=1\n[HYDRA]        #1 : random_seed=2\n[HYDRA]        #2 : random_seed=3\n[HYDRA] Pickle for jobs: /var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmptdkye9of/job_spec.pkl\nCluster: default\n...\nINFO services.py:1172 -- View the Ray dashboard at http://localhost:8265\n(pid=1772) [__main__][INFO] - Start training...\n(pid=1772) [INFO] - Init my model\n(pid=1772) [INFO] - Created dir for checkpoints. dir=checkpoint\n(pid=1772) [__main__][INFO] - Start training...\n(pid=1772) [INFO] - Init my model\n(pid=1772) [INFO] - Created dir for checkpoints. dir=checkpoint\n(pid=1772) [__main__][INFO] - Start training...\n(pid=1772) [INFO] - Init my model\n(pid=1772) [INFO] - Created dir for checkpoints. dir=checkpoint\nLoaded cached provider configuration\n...\n[HYDRA] Output: receiving file list ... done\n16-32-25/\n16-32-25/0/\n16-32-25/0/checkpoint/\n16-32-25/0/checkpoint/checkpoint_1.pt\n16-32-25/1/\n16-32-25/1/checkpoint/\n16-32-25/1/checkpoint/checkpoint_2.pt\n16-32-25/2/\n16-32-25/2/checkpoint/\n16-32-25/2/checkpoint/checkpoint_3.pt\n...\n[HYDRA] Stopping cluster now. (stop_cluster=true)\n[HYDRA] Deleted the cluster (provider.cache_stopped_nodes=false)\nDestroying cluster. Confirm [y/N]: y [automatic, due to --yes]\n...\nNo nodes remaining.\n\n"))),(0,l.mdx)("h5",{id:"manage-cluster-lifecycle"},"Manage Cluster LifeCycle"),(0,l.mdx)("p",null,"You can manage the Ray EC2 cluster lifecycle by configuring the flags provided by the plugin:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Default setting (no need to specify on commandline): delete cluster after job finishes remotely:"),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.stop_cluster=true\nhydra.launcher.ray.cluster.provider.cache_stopped_nodes=false\nhydra.launcher.teardown_cluster.workers_only=false\nhydra.launcher.teardown_cluster.keep_min_workers=false\n"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Keep cluster running after jobs finishes remotely"),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.stop_cluster=false\n"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Power off EC2 instances and control node termination using ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra.launcher.ray.cluster.provider.cache_stopped_nodes"),"\nand ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra.launcher.teardown_cluster.workers_only")),(0,l.mdx)("table",{parentName:"li"},(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"cache_stopped_nodes"),(0,l.mdx)("th",{parentName:"tr",align:null},"workers_only"),(0,l.mdx)("th",{parentName:"tr",align:null},"behavior"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"false"),(0,l.mdx)("td",{parentName:"tr",align:null},"false"),(0,l.mdx)("td",{parentName:"tr",align:null},"All nodes are terminated")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"false"),(0,l.mdx)("td",{parentName:"tr",align:null},"true"),(0,l.mdx)("td",{parentName:"tr",align:null},"Keeps head node running and terminates only worker node")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"true"),(0,l.mdx)("td",{parentName:"tr",align:null},"false"),(0,l.mdx)("td",{parentName:"tr",align:null},"Keeps both head node and worker node and stops both of them")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"true"),(0,l.mdx)("td",{parentName:"tr",align:null},"true"),(0,l.mdx)("td",{parentName:"tr",align:null},"Keeps both head node and worker node and stops only worker node"))))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Keep ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra.launcher.ray.cluster.min_workers")," worker nodes\nand delete the rest of the worker nodes"),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.teardown_cluster.keep_min_workers=true\n")))),(0,l.mdx)("p",null,"Additionally, you can configure how to create or update the cluster:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Default config: run setup commands, restart Ray and use\nthe config cache if available"),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.create_update_cluster.no_restart=false\nhydra.launcher.create_update_cluster.restart_only=false\nhydra.launcher.create_update_cluster.no_config_cache=false\n"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Skip restarting Ray services when updating the cluster config"),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.create_update_cluster.no_restart=true\n"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Skip running setup commands and only restart Ray (cannot be used with\n",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra.launcher.create_update_cluster.no_restart"),")"),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.create_update_cluster.restart_only=true\n"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fully resolve all environment settings from the cloud provider again"),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.create_update_cluster.no_config_cache=true\n")))),(0,l.mdx)("h5",{id:"configure-ray-logging"},"Configure Ray Logging"),(0,l.mdx)("p",null,"You can manage Ray specific logging by configuring the flags provided by the plugin:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Default config: use minimal verbosity and automatically\ndetect whether to use pretty-print and color mode"),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},'hydra.launcher.logging.log_style="auto"\nhydra.launcher.logging.color_mode="auto"\nhydra.launcher.logging.verbosity=0\n'))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Disable pretty-print"),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},'hydra.launcher.logging.log_style="record"\n'))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Disable color mode"),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},'hydra.launcher.logging.color_mode="false"\n'))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Increase Ray logging verbosity"),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.logging.verbosity=3\n")))),(0,l.mdx)("h3",{id:"ray-launcher"},(0,l.mdx)("inlineCode",{parentName:"h3"},"ray")," launcher"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"ray")," launcher lets you launch application on your ray cluster or local machine. You can easily config how your jobs are executed by changing ",(0,l.mdx)("inlineCode",{parentName:"p"},"ray")," launcher's configuration here\n",(0,l.mdx)("inlineCode",{parentName:"p"},"~/hydra/plugins/hydra_ray_launcher/hydra_plugins/hydra_ray_launcher/conf/hydra/launcher/ray.yaml")),(0,l.mdx)("p",null," The ",(0,l.mdx)(i.Z,{to:"plugins/hydra_ray_launcher/examples/simple",mdxType:"GithubLink"},"example application")," starts a new ray cluster."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},"$ python my_app.py  --multirun hydra/launcher=ray\n[HYDRA] Ray Launcher is launching 1 jobs, sweep output dir: multirun/2020-11-10/15-16-28\n[HYDRA] Initializing ray with config: {}\nINFO services.py:1164 -- View the Ray dashboard at http://127.0.0.1:8266\n[HYDRA]        #0 : \n(pid=97801) [__main__][INFO] - Executing task 1\n")),(0,l.mdx)("p",null,"You can run the example application on your existing ray cluster as well by overriding ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra.launcher.ray.init.address"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-commandline"},"$ python my_app.py  --multirun hydra/launcher=ray hydra.launcher.ray.init.address=localhost:6379'\n[HYDRA] Ray Launcher is launching 1 jobs, sweep output dir: multirun/2020-11-10/15-13-32\n[HYDRA] Initializing ray with config: {'num_cpus': None, 'num_gpus': None, 'address': 'localhost:6379'}\nINFO worker.py:633 -- Connecting to existing Ray cluster at address: 10.30.99.17:6379\n[HYDRA]        #0 : \n(pid=93358) [__main__][INFO] - Executing task 1\n")),(0,l.mdx)("h3",{id:"configure-rayinit-and-rayremote"},"Configure ",(0,l.mdx)("inlineCode",{parentName:"h3"},"ray.init()")," and ",(0,l.mdx)("inlineCode",{parentName:"h3"},"ray.remote()")),(0,l.mdx)("p",null,"Ray launcher is built on top of ",(0,l.mdx)("a",{parentName:"p",href:"https://docs.ray.io/en/master/package-ref.html?highlight=ray.remote#ray-init"},(0,l.mdx)("inlineCode",{parentName:"a"},"ray.init()")),"\nand ",(0,l.mdx)("a",{parentName:"p",href:"https://docs.ray.io/en/master/package-ref.html?highlight=ray.remote#ray-remote"},(0,l.mdx)("inlineCode",{parentName:"a"},"ray.remote()")),".\nYou can configure ",(0,l.mdx)("inlineCode",{parentName:"p"},"ray")," by overriding ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra.launcher.ray.init")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"hydra.launcher.ray.remote"),".\nCheck out an ",(0,l.mdx)(i.Z,{to:"plugins/hydra_ray_launcher/examples/simple/config.yaml",mdxType:"GithubLink"},"example config"),"."))}u.isMDXComponent=!0}}]);