Search.setIndex({docnames:["design-memo/affine","design-memo/animizer","design-memo/assets","design-memo/debug","design-memo/ecs","design-memo/extensions/chart","design-memo/extensions/effects","design-memo/extensions/htmltex","design-memo/extensions/index","design-memo/extensions/svg","design-memo/geometry","design-memo/index","design-memo/obj3","design-memo/renderer","design-memo/scene","design-memo/shaders/flame","design-memo/shaders/index","design-memo/shaders/instance","design-memo/shaders/phong","design-memo/shaders/volumetric","design-memo/todo","design-memo/view","design-memo/vparas","guide/index","guide/intro","guide/intro-cn","index","reference/components","reference/geometry","reference/gltf","reference/index","reference/svg","reference/systems","tests/examples","tests/index","tests/test-effect","tests/test-geom","tests/test-morph"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:54},filenames:["design-memo/affine.rst","design-memo/animizer.rst","design-memo/assets.rst","design-memo/debug.rst","design-memo/ecs.rst","design-memo/extensions/chart.rst","design-memo/extensions/effects.rst","design-memo/extensions/htmltex.rst","design-memo/extensions/index.rst","design-memo/extensions/svg.rst","design-memo/geometry.rst","design-memo/index.rst","design-memo/obj3.rst","design-memo/renderer.rst","design-memo/scene.rst","design-memo/shaders/flame.rst","design-memo/shaders/index.rst","design-memo/shaders/instance.rst","design-memo/shaders/phong.rst","design-memo/shaders/volumetric.rst","design-memo/todo.rst","design-memo/view.rst","design-memo/vparas.rst","guide/index.rst","guide/intro.rst","guide/intro-cn.rst","index.rst","reference/components.rst","reference/geometry.rst","reference/gltf.rst","reference/index.rst","reference/svg.rst","reference/systems.rst","tests/examples.rst","tests/index.rst","tests/test-effect.rst","tests/test-geom.rst","tests/test-morph.rst"],objects:{},objnames:{},objtypes:{},terms:{"005c9a":31,"00c0c0":13,"0125520511237016e":29,"0x000000":17,"0x111111":17,"0xffff00":35,"11_basecolor":29,"12vec":[5,33],"16_basecolor":29,"1st":37,"217fba":31,"2413066498289683e":29,"24f":[5,33],"256x256":5,"2nd":37,"3668332938134597e":29,"3in":31,"3rd":37,"3x3":1,"4d4100bcb1c640e69699a87140df79d7":29,"4em":5,"4vec":5,"6096576513098873e":29,"610216327898289e":29,"7047907974381987e":29,"8070770596253361e":29,"8385761910227429e":29,"8em":5,"8x12":20,"\u4e09\u7ef4\u7a7a\u95f4\u6a21\u578b\u7684\u5e38\u89c1\u53d8\u6362":25,"\u4e0a\u4f8b\u4e2d":25,"\u4e3a":25,"\u4e3b\u7a0b\u5e8f\u521b\u5efa\u4e86\u4e00\u4e2axworld":25,"\u4e3b\u7a0b\u5e8f\u6a21\u677f":25,"\u4e4b\u540e\u53ef\u80fd\u6269\u5c55post":25,"\u4e4b\u540e\u8c03\u7528xworld":25,"\u4e5f\u53ef\u4ee5plain":25,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u5e94\u7528\u7a0b\u5e8f":25,"\u4f5c\u4e3a\u6e32\u67d33d\u7a7a\u95f4":25,"\u4fdd\u5b58\u5728\u4e00\u4e2a\u7279\u6b8a\u7684entiti":25,"\u5168\u5c40\u9759\u6001asset\u7ba1\u7406":25,"\u5168\u90e8\u5305\u88c5\u5728thrender":25,"\u5173\u4e8eaffin":25,"\u5177\u4f53\u529f\u80fd\u5305\u62ec":25,"\u521d\u7b49\u51e0\u4f55\u4f53\u521b\u5efa\u5c55\u793a\u51c6\u5907":25,"\u52a8\u753b\u65f6\u957f1\u79d2":25,"\u52a8\u753b\u811a\u672c\u5230\u6e32\u67d3\u5bf9\u8c61\u7684\u5206\u89e3\u8f6c\u6362":25,"\u5305\u62ec\u4e00\u4e2amvc\u6a21\u5f0f\u7684view\u7ed3\u6784\u5c01\u88c5":25,"\u5305\u62ec\u521b\u5efaxworld":25,"\u5305\u62ec\u7528\u6237\u8f93\u5165\u54cd\u5e94":25,"\u5305\u62ecanimtyp":25,"\u53d6\u900f\u660e\u6750\u8d28\u540e\u9762\u7684\u6a21\u578b\u5bf9\u8c61":25,"\u53ef\u4ee5\u5206\u89e3\u4e3a\u57fa\u672c\u53d8\u6362":25,"\u53ef\u4ee5\u62fe":25,"\u53ef\u89e3\u91ca\u7684\u52a8\u753b\u7c7b\u578b\u7531animtype\u5b9a\u4e49":25,"\u540c\u65f6\u8fd8\u4e0d\u65ad\u66f4\u65b0\u989c\u8272\u900f\u660e\u5ea6":25,"\u56e0\u4e3au_morph\u8bbe\u7f6e\u4e86\u4e24\u4e2a\u6a21\u578b\u9876\u70b9\u7684\u6743\u91cd":25,"\u5728cube\u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7acb\u65b9\u4f53":25,"\u5728thrender\u5904\u7406\u6e32\u67d3\u4e4b\u524d":25,"\u57fa\u4e8ethree":25,"\u57fa\u4e8ex":25,"\u5982":25,"\u5982\u7acb\u65b9\u4f53":25,"\u5982orbit":25,"\u5b9e\u73b0\u7528\u6237\u5904\u7406\u903b\u8f91":25,"\u5b9e\u9645\u662f\u4e00\u7ec4\u6570\u636e\u548csystem\u52a8\u4f5c\u89c4\u5219":25,"\u5e76\u4e14\u63a7\u5236\u5728\u8fd9\u4e24\u4e2a\u6a21\u578b\u5bf9\u5e94\u9876\u70b9\u95f4\u79fb\u52a8":25,"\u5e76\u4f7f\u9876\u70b9\u5728\u4e0d\u540c\u76ee\u6807\u4f4d\u7f6e\u95f4\u53d6\u6743\u91cd":25,"\u5e94\u7528\u7a0b\u5e8f\u7684\u4e1a\u52a1\u5904\u7406\u7531\u5404\u79cd\u7ee7\u627f\u7684system\u6765\u5b9e\u73b0":25,"\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u9075\u5faaec":25,"\u5f00\u59cb\u53cd\u590d\u6e32\u67d3\u66f4\u65b0\u573a\u666f":25,"\u6240\u6709\u7684\u6570\u636e\u5c55\u793a\u7ea6\u675f":25,"\u62fe\u53d6\u5bf9\u8c61\u653e\u5728entity\u5305\u542b\u7684pick":25,"\u63d0\u9ad8\u5f00\u53d1\u6548\u7387":25,"\u642d\u5efa\u5e76\u8fd0\u884cx":25,"\u6570\u636e\u5c55\u793a\u65b9\u5f0f\u5904\u7406\u7b49":25,"\u662fecs\u5904\u7406\u7684\u6700\u540e\u73af\u8282":25,"\u66f4\u591a\u590d\u6742":25,"\u6700\u540e\u6e32\u67d3\u505a\u597d\u4e86\u51c6\u5907":25,"\u6a21\u578b\u5c06\u88abxtweener\u9a71\u52a8\u7ed5x\u8f74\u65cb\u8f6c45":25,"\u6bd4\u5982\u4e0b\u6587\u4e2d\u7684cube\u7c7b":25,"\u6dfb\u52a0entity\u548c\u542f\u52a8\u6e32\u67d3\u5faa\u73af\u7b49\u4ee3\u7801":25,"\u6e32\u67d3html\u9875\u9762\u6750\u8d28":25,"\u7136\u540e\u5b9a\u4e49\u4e86\u82e5\u5e72\u9876\u70b9":25,"\u7136\u540e\u6dfb\u52a0\u5b9a\u4e49\u7684\u7acb\u65b9\u4f53":25,"\u73af\u7b49":25,"\u7403\u4f53":25,"\u7528\u6237\u5904\u7406\u903b\u8f91\u5728\u8fd9\u91cc\u5e94\u8be5\u53ea\u5904\u7406\u4e0e\u6e32\u67d3\u6709\u5173\u7684\u5de5\u4f5c":25,"\u7528\u6237\u8f93\u5165\u6620\u5c04":25,"\u7528\u6237\u8f93\u5165\u88ab\u7ffb\u8bd1\u6210usercmd":25,"\u76ee\u524d\u7248\u672c\u53ea\u8003\u8651\u4e86\u952e\u76d8\u9f20\u6807\u4e8b\u4ef6":25,"\u7a7a\u95f4\u52a8\u753b":25,"\u7ba1\u7406":25,"\u7ebf\u6027\u53d8\u6362\u6709\u4e00\u7c7b\u7279\u6b8a\u7684\u53d8\u6362":25,"\u7ee7\u627fec":25,"\u82e5\u5e72\u4e2asystem\u6765\u5904\u7406\u89c6\u6548\u914d\u7f6e":25,"\u8bbe\u8ba1\u601d\u60f3\u624d\u80fd\u4e0ex":25,"\u8be6\u60c5\u53c2\u89c1exampl":25,"\u8f7d\u5165gltf\u6a21\u578b":25,"\u8fd9\u4e2a\u52a8\u753b\u811a\u672c\u5c06\u4f7fpoints\u7684\u4f4d\u7f6e\u5728\u4e24\u4e2a\u6a21\u578b\u7684\u9876\u70b9\u4f4d\u7f6e\u95f4\u79fb\u52a8":25,"\u8fd9\u4e2a\u52a8\u753b\u811a\u672c\u88ab\u89e3\u91ca\u4e3a\u521b\u5efa\u7b49\u8ddd\u5206\u5e03\u7684\u9876\u70b9":25,"\u8fd9\u6bb5\u9996\u5148\u5b9a\u4e49\u4e86\u4e24\u4e2a\u7528\u4e8e\u505a\u4f4d\u7f6e\u53c2\u7167\u7684\u6a21\u578b":25,"\u903b\u8f91\u5904\u7406\u5e94\u5f53\u63a8\u5230\u540e\u53f0\u5904\u7406":25,"\u9759\u6001\u52a8\u753b\u811a\u672c\u89e3\u91ca":25,"break":[15,29],"case":[0,1,3,10,12,13,20,22,24,29,34],"catch":29,"class":[0,3,6,24,25,28],"const":[5,17,24,25,27,37],"default":[2,11,14,17,21,22,24,25,29],"entity\u5b9a\u4e49":25,"entity\u7531\u82e5\u5e72component\u6784\u6210":25,"examples\u540e\u6709\u66f4\u52a9\u4e8e\u9605\u8bfb\u4e0b\u6587\u5185\u5bb9\u7ec6\u8282":25,"export":[17,24,25,27],"final":[0,3,6],"float":[15,17,18,20],"function":[0,1,3,5,6,8,12,13,17,28,29],"gltf\u8f7d\u5165":25,"import":[3,4,17,24,25,27],"instanceof":3,"int":[13,15,18],"javascript\u65b9\u5f0f\u5f15\u7528":25,"js\u6e32\u67d3":25,"js\u6e32\u67d3\u5f15\u64ce":25,"new":[0,1,3,4,5,17,20,21,24,25,28,29,36,37],"null":[1,2,3,13,22,35],"pickid\u4e2d":25,"public":31,"return":[1,10,12,15,17,18,20,28,29,36],"rotatxyz\u7b49":25,"static":[1,2,4],"super":[22,24,25],"switch":29,"system\u4e2d":25,"system\u5b9e\u73b0":25,"throw":29,"transformation\u7684\u4ecb\u7ecd\u8f83\u591a":25,"transformation\u7684\u7ec4\u5408\u53ef\u4ee5\u5f62\u6210\u65b0\u7684\u7a7a\u95f4\u52a8\u753b":25,"true":[0,3,12,13,15,22,29,35,37],"try":[6,8,22,24,29,37],"tween\u52a8\u753b\u5904\u7406\u5df2\u7ecf\u5206\u89e3\u5230\u4e0d\u540c\u7684\u5b50\u7cfb\u7edf\u4e2d\u5904\u7406\u5b8c\u6210":25,"tween\u52a8\u753b\u9a71\u52a8":25,"typeof":0,"var":[0,1,3,5,12,13,14,17,20,24,25,27,28,29,37],"visual\u4e3a\u8fd9\u4e00\u7cfb\u5217\u5904\u7406\u63d0\u4f9b\u4e86\u4e00\u4e2a\u57fa\u672c\u7ed3\u6784":25,"visual\u53ef\u4ee5\u7528npm\u7ba1\u7406\u4f9d\u8d56\u5305":25,"visual\u5b9e\u73b0\u4e86\u4e00\u4e2a\u5229\u7528\u6e32\u67d3\u7ed3\u679c\u62fe\u53d6\u573a\u666f\u6a21\u578b\u7684\u5b50\u7cfb\u7edf":25,"visual\u5c01\u88c5\u4e86thre":25,"visual\u5e94\u7528\u7a0b\u5e8f\u57fa\u672c\u7ed3\u6784":[23,26],"visual\u662f\u4e00\u4e2aec":25,"visual\u6b65\u8c03\u4e00\u81f4":25,"visual\u7684\u5e94\u7528\u7a0b\u5e8f\u4e3b\u5165\u53e3\u4e0e\u4ee5\u4e0a\u7a0b\u5e8f\u7247\u6bb5\u4e00\u81f4":25,"visual\u7684\u5e94\u7528\u7a0b\u5e8f\u5305\u62ec\u5982\u4e0b\u90e8\u5206":25,"void":[15,17,18,20],"webgl\u6e32\u67d3\u7a0b\u5e8fjavascript\u6846\u67b6":25,"while":[1,13,29,37],"xsys\u57fa\u7840\u7c7b":25,And:[3,20],Axes:5,But:[3,22,37],ECS:[1,6,11,20,21,24,26],For:[1,6,12,14,19,22,24,27,29,37],Not:[12,14,22],The:[0,1,3,4,5,7,9,10,12,13,14,20,21,22,24,28,30,33,35,36,37],Then:1,There:[0,1,3,12,20,24,29,36],These:[14,22,27],Use:1,Using:[5,11,20,36],With:[13,27],_m1:[1,12],_mf:0,_onchangecallback:1,_onerror:29,_v1:[1,12],a_dest:[25,37],a_nois:[1,22,25,37],a_target:1,aaaaaaaaaaaaaaaaaacapwaaaaa:29,aaabaaiaaaaaaaaaaaaaaaaaaaaaaia:29,about:[1,11,12,13,17,20,22,34,36,37],abov:[0,1,5,24,36],abs:15,abstratct:6,acceler:20,accept:22,access:[21,29],accord:[10,24,37],acctual:1,accumul:[0,12],aco:15,acquireprogram:3,across:[0,11],act:[1,13],action:[21,24],actual:[3,18,29,37],add:[4,5,6,20,24,25,29],added:[6,22,24],addent:[20,25,37],addint:22,addit:[12,22],addpass:3,addsystem:[5,24,25],adjust:5,aff:0,affect:[15,20],affin:[1,11,20,26,27],affinecombin:[0,1,20],affinetyp:0,after:[0,3,22,24,29],afther:24,again:0,alan:20,algorithm:[0,36],alias:20,align:[13,33],all:[0,1,2,3,4,5,13,14,21,22,24,25,27,29,35,37],alon:5,along:5,alpha:[0,1,14,22,25,36,37],alreadi:[6,17,20],also:[0,1,5,10,12,13,18,20,22,24,29,35,36,37],alteredq:17,alteredqualia:17,alwai:[0,1,5,14,21,33],alwasi:36,ambient:[18,22],ambientcolor:18,ancestor:37,andrew:28,ani:[1,4,12,20,22,24,25,37],anim:[0,10,11,12,20,22,24,25,26,27,29,36],animationclip:29,animc:11,animi:11,animtyp:[11,12,22,25,36],anoth:[3,13,21],anti:20,antonmoek:29,anyth:29,ap_0:29,api:[0,1,2,10,12,13,19,20,26,30,37],app:[23,25,26],appaffin:20,appli:[0,2,10,12,13,37],applic:[22,25,27,29],apply2children:37,applying_matrix_transform:17,applymatrix4:[1,12],applymatrix:12,applyquaternion:1,approach:28,architectur:[23,26],area:12,argument:[1,3,22,24,29],arial:[5,13,33],around:1,arrai:[0,1,5,6,12,13,22,29,33,36],arraybuff:29,arrow:5,arsen:24,art:[20,24],articl:6,artist:37,ask:6,asset:[1,4,11,14,20,21,22,24,25,26,27,30,35,36,37],assetid:2,assetkeepr:[2,20,21,29],assettyp:[1,13,14,20,22,24,25,35,36,37],assign:[1,3,12],assum:[1,4],asynchron:[4,20,29,37],attribut:[1,5,13,17,18,20,22,29],author:[17,21,29],auto:[1,25,37],automat:1,auxiliari:[8,11],avail:26,averag:17,axes:[5,33],axi:[1,8,11,12,20,25,37],axisi:5,babel:33,back:[1,6],bar:[5,18,33],base64:29,base:[6,24],basecolorfactor:29,basecolortextur:29,basic:[12,17,24,29,37],becaus:[3,12,37],been:[0,1,3,4,10,12,13,20,21,22,24,29,33,35,36,37],befor:[0,4,5,13],begin:[0,21],behaviour:[11,22],being:[0,20],between:[0,1,12,27,37],bin:[13,29],bind:[3,5],binorm:28,bit:20,blend:22,blink:[11,16],blinn:20,blob:[20,29],bloom:6,blue:[20,22],bodi:5,bold:13,bone_textur:18,bool:[15,17,18],border:15,both:[3,25,26,37],bounc:1,bound:[3,13,24,25,27],box:[1,5,13,14,20,24,25,27,33,35,36,37],branch:20,breach:12,bridg:0,browser:[13,31],brutal:37,buffer:[1,12,21,28],bufferattribut:29,buffergeometri:[20,27,28,29],bug:[3,20],build:[28,29],built:24,bundl:[3,24],byr0:[14,25,27,37],byteblacksmith:17,bytelength:29,byteoffset:29,bytestrid:29,cach:[20,29],cachekei:29,calcul:[1,20],call:[0,3,6,21,24,28,29],callback:[10,29],caller:29,camera:[6,12,21,24,25,29],cameraposit:18,can:[0,1,2,3,4,5,6,10,12,13,15,18,20,21,22,24,25,27,29,36,37],cannot:20,canon:17,canv:[5,24,25],canva:[5,13,33],canvastextur:37,canvtex:13,car4:37,car66:37,car:[13,20,29,37],car_03:29,car_03_1:29,car_03_1_world:29,car_03_world:29,car_04:37,car_4:37,cardin:[5,33],care:37,carefulli:4,cartoon:29,cast:20,cate:34,catmullromcurve3:28,caus:[3,37],cdot:0,center:[10,19,36],chang:[0,4,12,21,22,24,36,37],channel:22,chapter:20,charact:1,charl:20,charset:20,chart:[8,11,12,18,27,34],cheap:22,cheat:0,check:[3,22],child:13,children:[14,29,37],chirldren:37,chromium:20,circl:10,circular:1,circumv:10,citi:[13,25,30,37],citysi:13,clamp:17,clarifi:29,clear:[0,21,25],clearcoat:17,clearcoatnorm:17,client:21,clietxi:21,clipping_planes_pars_vertex:17,clipping_planes_vertex:17,clone:3,cloneuniform:17,close:28,closer:21,cmd:[21,24,25],cmdflag:[24,27],cmptween:[0,1,20,25,27,36,37],code:[1,3,5,12,20,24,27,35],coeffici:18,col:15,collaps:17,collect:0,color:[1,5,10,17,18,20,22,24,33,34,35,36],color_pars_vertex:17,color_vertex:17,colorarrai:[11,18,20,37],com:[1,17,20,29],combin:[1,4,11,20,37],combine_affin:1,come:[0,3,24,25,26,36,37],comin:0,command:[1,21,24,25,37],commerci:[24,26],common:[11,17],compact:6,compar:35,comparison:37,complet:[0,14,37],complic:0,compon:[0,1,2,4,6,12,13,14,21,22,24,25,26,30,36],componenttyp:29,compos:[0,1,3,8,11,12],compositon:6,comput:[18,28],computefrenetfram:28,concept:[4,24],condit:[11,24],configur:[5,14,22,37],consecut:0,consid:1,consist:13,consol:[1,24,25],consolid:24,constant:22,constructor:[1,3,12,24,25,29],content:[8,11,16,23,26,30,34],context:13,contract:27,control:[12,20],convent:24,convers:1,convert:[1,13,21,22],cooper:0,coord:[5,33],coordin:[10,12,36],copi:[0,1,2,3,12,13,37],core:0,correct:29,cos:15,cosin:18,could:[5,12,24,28],count:29,crash:20,creat:[1,3,4,5,6,12,13,14,21,22,24,25,27,28,29,36,37],createdefaultmateri:29,createent:[1,6,13,14,24,25,27,37],createobj3:20,creativ:24,creativecommon:29,credit:34,cross:0,crosstar:[25,37],css:[5,13],cube0:[13,14,24,25,27],cube:[1,13,24,25,27],cubic:1,current:[0,1,5,6,22,24],curv:[28,31,35,37],custom:20,cycl:4,cylind:[10,36],d3pie:[8,11,12],dai:3,dashsiz:37,data:[0,1,8,12,18,22,24,25,26,28,29,30,33,36],datum:12,debug:[4,5,11,22,26,29,35],decis:4,declar:[1,12,13,27],decompos:[1,12],defaultex:[22,25,37],defin:[1,3,4,5,12,13,14,17,18,24,27,33,35,37],definit:[1,12,30,33],defualt:21,deg:[1,12,25,37],degre:1,delai:1,delta:20,depart:28,depend:[3,5,12,21,24,29],dependend:29,deprec:[25,33],desc:[5,33],design:[0,1,4,8,12,18,26],det:[1,12],detail:[1,12,20,24,26,33,34,36],determin:[1,12],detial:36,develop:20,differ:[0,10,11,12,13,29,36,37],diffus:[18,22],diffusecolor:18,dir:[15,17,30,34],direct:[17,20],directdiffus:17,directli:[3,12,20,21],directspecular:17,directwrit:20,dirti:[12,13],dirtub:36,disabl:37,discours:1,discuss:[1,17],displai:20,dist:27,distanc:[1,20,22,28],distribut:36,div:5,divid:1,divis:35,doc:[0,4,6,9,14,20,25,26,28,30,33,36,37],doce:33,dock:33,doctrin:12,doctyp:31,document:[1,5,13,24,25,27],doesn:[1,13],dom:[7,9],domain:33,don:0,done:29,dosn:28,dot:[15,17,18],doublesid:29,download:24,draft:[20,31],draw:5,drive:0,driven:[0,1],driver:24,dtd:31,duplic:20,durat:[1,20,25,36,37],dure:4,dynam:[1,11,20,29],dynatex:[13,37],each:[0,1,4,5,12,20,21,22,24,36,37],earli:26,earth:37,eas:[1,20,25,37],easi:0,ecs:[1,4,5,7,9,13,14,20,24,25,27,37],edd1c604e1e045a0a2a552ddd9a293e6:29,edg:0,editor:20,effect:[3,8,11,13,15,20,22,25,35],effectcompos:[3,6,20],effecti:24,effectpass:3,efinish:0,elapsedtim:20,elast:[1,25,37],eleg:1,element:[1,5,6,12,33],elimin:4,ellipsoid:20,els:[1,3,15,17,18,20,24,25,29],emiss:17,emissivefactor:29,emit:1,emting:17,enabl:[6,11],encod:31,end:[1,37],endif:[17,18],endingfir:0,enforc:21,engin:20,enough:12,ent1:[25,37],ent2:25,entir:[4,13,37],entiti:[0,1,4,6,13,14,21,22,24,25,27,35,37],entity1:[25,37],entity2:[25,37],envmap:17,envmapintens:17,eps:15,epsg4326:[10,22,36],epsg:[12,36],epsilon:17,equal:14,equival:1,error:[0,1,20,29],essenti:[3,15],etail:24,etc:[5,6,12,24,29],euclideanspac:1,euler:1,event:[0,1,21,22],eventdispatch:[1,12],eventu:24,everi:[0,20,29],everyth:[24,25],exactli:[12,29],exampl:[3,5,6,10,11,13,20,22,25,26,30,36,37],except:[12,13,14,29],exist:[1,3,13],expans:0,expect:[3,17,26],expens:20,experiment:26,explain:[22,24,29,36],explan:20,exponenti:1,exponentialinout:20,expos:28,express:[10,22,36],ext:[3,5,33],extend:[3,7,9,20,22,24,25],extens:[7,9,11,12,20,26,27,29,34],extra:29,extractor:20,face:[12,20],fade:[1,25,37],fail:[3,20],fals:[0,3,12,15,20,25,28,29,37],far:[24,25],fbx:29,featru:36,featur:[10,20,36],feel:24,ffinish:37,field:[0,12],figur:20,file:[2,3,5,13,21,22,29,33,35,36,37],fileload:29,fill:31,filter:20,finalcompos:[3,6],finalfrag:3,finalpass:3,finalvert:3,find:[20,29],finger:0,finish:[0,1,29],fira:5,fire:0,first:[1,22,24,25,36],fix:20,fixm:[14,25],flag:[0,1,13,21,22,24,25],flame:[11,16],float32arrai:29,float32bufferattribut:28,floatbufferview:29,floor:15,flow:35,flowing_path:6,flowingpath:6,fog:17,fog_pars_vertex:17,fog_vertex:17,folder:22,follow:[0,1,5,12,19,22,24,25,26,28,37],followbi:[1,25,37],font:[5,13,20,33],forc:12,form:[1,27],format2:33,format:[20,26,30,33,37],former:3,formula:28,fragcolor:15,fragcoord:15,fragmentshad:[3,17],frame:[22,30,36],framework:[11,21,26],free:[24,26,29],frenet:[30,36],fritz:4,fritzi:4,from:[0,1,3,5,6,12,13,17,20,22,24,25,27,29,37],frontsid:36,fsquad:3,full:26,fullscreenquad:3,fundament:6,further:[12,20,24],futur:[4,13,24,36],fyi:37,gamma_factor:18,gaultnei:20,gener:[5,10,12,18,20,21,22,28,29,36],generatebufferdata:28,generateindic:28,generateseg:28,generateuv:28,generatewayxz:[10,12],geograph:10,geojson:[10,12],geom:[1,11,14,20,24,25,27,28,35,36,37],geomcurv:35,geometr:12,geometri:[1,9,11,13,20,22,24,25,26,27,30,34,37],geometriccontext:17,geomtyp:27,geopath:[10,22,36],geoscal:12,geostyl:[10,36],gepath:22,get:[3,4,10,12,13,29],getdepend:29,geteffectpass:6,getelementbyid:[5,24,25],getjson:5,gettang:28,gettangentat:28,getutotmap:28,gitf:13,github:[20,29],gl_pointsiz:22,gl_posit:[17,18,20],glow:15,glsl:[11,17,20,22],glsl_program:17,gltf:[2,4,11,20,22,26,30,34],gltfparser:29,glyph:20,goe:[24,25],gomo:17,good:[3,13,20],got:0,goup:19,gpu:[20,21],gpupick:[11,14],grai:22,graphic:20,graphit:20,grasshopp:20,great:3,green:[5,22,33],grei:22,grid:[5,33],grogram:3,groundcolor:14,group:[0,1,5,10,11,14,16,22,24,25,29,36],guess:0,guid:[14,26,36],hack:11,had:20,handl:[0,1,4,11,12,18,20,21,22,24,25,26,34,36],handler:[0,10,21,22],hanson:28,happen:[0,21],hard:0,has:[0,1,4,13,14,21,22,24,33,35,36],have:[0,3,5,17,20,22,37],haxcylind:10,height:[10,13,22,31,33,36],heigth:10,heikkinen:20,hello:14,hellocub:[24,25],help:[6,20,21,24,36,37],helper:28,hemispherelight:14,here:[3,12,20,22,24,25,27,37],hexacylind:[22,36],hexacylinder3857:12,hexagon:[10,12,36],hexatil:11,hidden:22,hide:20,high_precis:18,higher:10,highest:10,highli:4,highp:[17,18],hipr2:25,his:3,hole:21,hollow:[24,25],home:29,homepag:25,hosken:20,how:[0,1,10,14,20,22,24,33,37],htm:[1,25],html2textur:5,html:[0,1,3,5,8,9,10,11,13,14,18,20,22,24,25,29,33,35,36,37],htmltex:7,http:[1,17,20,25,29,31,37],hud0:14,hud:[11,26],hudchild:14,hudgroup:14,hui:28,idea:[13,24,26,37],idl:[0,20],idx:[1,29],ifdef:[17,18],iffal:[4,24,25],ifndef:17,ignor:[1,13,14,22,25,27,36,37],iii:[5,33],ilmari:20,imag:[3,20,29,37],img:22,implement:[1,4,12,20,22,24,25,28],impos:4,improv:17,incidentlight:17,includ:[3,5,12,14,17,24,29,37],increas:12,incur:0,indeci:28,independ:[0,24],index:[0,1,10,24,25,26,29,33,37],indiana:28,indic:[1,5,28,29],indirectdiffus:17,indirectspecular:17,inf:25,infin:[1,20,25,37],inform:[22,37],ingor:22,init:[25,27],initc:13,initi:[2,4,12],initmateri:17,initmypick:21,inject:11,innov:24,inout:[1,25],input:11,insanceof:3,insid:[0,20],inspir:4,instal:24,instanc:[11,16,29],instancematrix:18,instead:[1,3,37],intend:[24,37],intens:14,interact:[21,37],intermedi:20,intern:[21,28],interpol:[0,12,20],introduc:22,introduct:20,intuit:21,invers:20,inversetransformdirect:17,invert:[1,12],invis:[25,37],invsi:[1,12],invsx:[1,12],invsz:[1,12],iresolut:15,isobject3d:12,isorthograph:18,isperspectivematrix:17,isplai:0,isskinnedmesh:29,issu:[0,1,4,11,17,29,37],issuer:0,ital:5,items:29,iter:[0,21],itim:15,its:3,itself:37,javascript:[24,27],jet:20,jim:20,jpeg:[25,29],jsdoc:[2,20,26,36],json0:36,json:[5,12,29,33],jun:20,just:[24,37],keep:0,keepingt:2,keept:0,kei:[0,21,24,28],kept:[0,37],khronosgroup:29,kilgard:20,kind:1,knowledg:[3,21,29],label:[8,33],lambert:[17,18],lambertian:18,larg:[4,12],larger:0,last:[0,22],late:20,later:[0,4,13,22],latter:[3,20],law:18,layer3:36,layer:6,layerchannel:6,lead:3,learnt:0,leav:0,left:[3,37],length:[0,1,12,15,21,29],lengthbefor:28,lesser:[11,16],lesson:0,let:[0,1,13],letter:20,level:[0,20],lib:[3,27],licens:29,life:4,light:[11,18],lightpo:18,like:[0,3,5,6,12,18,20,24,25,29,37],limit:[3,4],line:[5,14,24,25,29,35],linear:[0,1,12,20,25],lineartorelativelumin:17,linebasicmateri:3,linedashedmateri:37,linedirect:17,linedist:17,lineplaneintersect:17,liner:17,lineseg:[29,37],linewidth:35,link:24,list:[11,37],load:[1,2,3,4,13,20,29,37],loadcamera:29,loader:[11,13,26,30],loaderscop:29,loadgeometri:29,loadgltf:2,loadgltfnod:[20,29],loadmesh:29,loadnod:29,loadscen:29,local:26,locat:13,log:[24,25],logcnt:[24,25],logdepthbuf_pars_vertex:17,logdepthbuf_vertex:17,logic:[4,24,29],longer:[1,3,5],look:[0,20,37],lookscreen:12,loop:[0,20,24],low:[0,29,37],lower:37,lowpoli:30,m11:[1,12],m12:1,m13:1,m21:1,m22:1,m23:1,m31:1,m32:1,m33:1,m_f:0,magfilt:29,mai:[0,17,21],main:[5,11,17,18,20,24],mainimag:15,mainli:13,major:1,make:[0,3,6,12,20,22,29,36,37],manag:[2,11,16,21,24,29],mani:[4,13],map3d:[10,22,36],map:29,mapxzroad:[11,20],margin:[13,33],mark:20,martin:20,martrix4:0,mask:[6,27],master:[20,29],mat3:[17,18],mat4:[0,12,17,18,20],match:20,materi:[11,13,16,17,21,22,29,37],materialproperti:17,math:[1,12,24],mathemat:12,mathjax:0,matric:37,matrix4:[1,12],matrix:[0,1,12,13,17,20,29,37],matrixautoupd:[1,12,20],matrixtoquaternion:1,matter:4,max:[10,15,18,22,29],max_bon:18,maxheight:[10,36],mdn:[5,13,31],mean:[4,22,29],meaning:22,measur:13,memo:[4,12,26],memorandum:26,merg:22,mergeuniform:17,mes:20,mesh:[0,6,11,12,13,14,20,22,24,25,27,28,35,36,37],mesh_:29,meshbasic_frag:[3,17],meshbasic_vert:[3,17],meshdef:29,meshindex:29,meshlambert_frag:17,meshlambert_vert:17,meshphong_frag:17,meshphong_vert:17,meshphysical_frag:17,meshphysical_vert:17,messag:[13,21],met:24,metal:17,metallicfactor:29,method:[1,3,20,28,37],mf_z:0,mi_z:0,middl:37,mikael:17,million:20,mime:22,min:[15,27,29],minfilt:29,mix:[1,15,18,20,22],mixcolor:18,mocha:3,mode:[18,22,29,37],model:[1,13,20,21,22,25,29,37],modelmatrix:18,modelmorph:1,modelseq:[1,20,22,25,36,37],modelview:18,modelviewmatrix:[17,18,20],modif:[4,29],modifi:[1,12,22,29],modleseq:11,modul:[1,11,12,20,26,36],more:[1,4,12,21,24],morph:[1,11,16,22,25,26,27,34,36],morphinganim:30,morphnormal0:18,morphnormal1:18,morphnormal2:18,morphnormal3:18,morphseq:37,morphswitch:25,morphtarget0:18,morphtarget1:18,morphtarget2:18,morphtarget3:18,morphtarget4:18,morphtarget5:18,morphtarget6:18,morphtarget7:18,most:12,mous:21,move:[0,1,5,22,24,35,36,37],mrdoob:17,mtype:[11,25,36,37],mul:0,multi:[22,36],multipl:[0,29],multipli:22,must:[3,13,14,21,24,29,37],mvc:[11,26],mvposit:17,name:[1,13,17,22,24,25,29,33],natur:29,ndoe:29,nds:20,need:[0,1,4,5,12,20,21,22],neg:[1,12],never:1,newposit:20,next:0,nice:20,node:[11,20,22],node_on:29,nodedef:29,nodeindex:29,nodemap:29,nois:[1,15,22],noisi:20,none:0,normal:[13,15,17,18,22,28,29],normalinterp:18,normalmat:18,normalmatrix:18,nostalgicar:37,note:[5,11,13,21,26,29],noth:24,notic:12,now:[3,20,24,25,26,29],npm:[3,24,25,27],number:[1,12,22,29],nvidia:20,obe3:13,obj3:[0,1,2,5,6,11,14,20,21,22,24,25,26,27,35,36,37],obj3rotaxi:25,obj3typ:[1,10,11,13,14,20,22,24,25,35,36,37],object3d:[1,6,12,13,22,27,29],object:[0,1,3,4,5,6,12,13,14,17,18,20,21,22,24,25,29,33,36,37],obo:36,obsolet:20,occlud:[6,34],octet:29,octob:20,odi:29,offici:26,offset:[5,19,22,29,33,36],onafterrend:12,onbeforerend:12,one:[0,1,4,5,12,14,17,22,29],onerror:29,ongroup:[10,36],onli:[0,1,3,4,5,10,11,12,13,18,20,21,24,26,37],onlin:20,onload:29,onprogress:29,onstart:0,opa0:1,opa1:1,opac:[20,22,25,35],open:[0,24,25,26],opengl:[17,20],opentyp:20,oper:[12,25],optim:[20,28],option:[6,10,13,24,25,29],optionaltarget:28,orb:[11,16,22,36],orbgroup:[11,19,36],orbit:[0,11,12],orbr:[22,36],orbscal:[22,36],order:[1,33],org:[1,6,15,17,29,31,37],organ:1,orient:29,origin0:20,origin:[4,10,20,36],originalmateri:29,orthocclud:6,orthogon:[0,1,6],osg_scen:29,other:[0,1,4,12,20,22,28,29],otherwis:3,out:[1,15,20,22,29,36],outlin:20,overview:20,own:12,pack:[3,6,29],packag:[3,24,29],page:[5,10,14,24,26,29,36,37],para:[10,11,12,14,20,25,26,29,35,36,37],parallel:[0,28],param:29,paramet:[5,10,12,13,14,17,22,24,25,28,36],parent:[14,37],pars:[12,21,29],parser:29,part:[1,10,12,24,29,33,35,36],particl:[20,22,25,37],pass:[3,8,11,24],path0:20,path1:20,path:[2,12,13,20,22,24,26,28,29,31,34,35],patheffect:6,pathtub:[35,36],pattern:[8,11,21,24],pbrmetallicrough:29,pend:29,per:17,percent:22,percentag:[19,22],perman:0,person:24,phase:26,phone:22,phong:[11,16,17],phongmorph2:18,pick:[20,21],pickabl:21,pickid:21,picktick:25,pie:[5,12],pin:[0,25,37],pivot:1,pixel:22,plai:[0,1,20],plain:[24,27],plane:[0,5,12,13,14,20,35],planenorm:17,plausibl:3,playris:[0,20],plug:[5,6],png:[14,20,22,24,25,27,36,37],point:[0,1,10,11,13,14,17,20,25,28,35,36,37],pointcurv:35,pointgeom:34,pointonlin:17,pointonplan:17,poli:29,polygon:12,pool:[11,16],pos0:[5,33],posit:[11,12,13,14,16,17,18,20,22,24,28,29],possibl:[20,37],post:[0,8,11,35,37],postprocess:[3,26,34],pow2:17,pow3:17,pow4:17,pow:[15,18,20],power:13,precis:[0,18],premultipli:[1,12],present:[3,13,33],prestend:4,prev:0,prevent:[0,21],previou:[0,25,37],primer:31,primit:29,print:0,probabl:4,problem:[0,3,20,28,37],process:[1,4,12,20,21,29,35],produc:[5,13],program:[3,17,18,24,36],programcach:17,programchang:17,programm:37,progress:20,project:[18,20,24,26],projectionmatrix:[17,18,20],projectonplan:17,promis:29,properti:[1,12,13,20,21,22,37],propertybind:29,prototyp:[1,12,29],provid:[1,3,4,5,8,12,13,18,21,27,29,37],pure:[0,1,24],push:[1,20,29],put2j:[0,20],quadrat:1,quartic:1,quaternion:[1,11],queri:[11,24,25],queryent:4,question:[3,20],queue:21,quick:24,quintic:1,radialseg:28,radian:12,radiu:[10,22,28,36],rai:20,ram:[1,13],rand:17,randomnum:20,randomparticl:[25,37],rang:[17,19,22,33,36],raster:20,ratat:12,raymarch:[11,16],rbf:25,read:[1,20],readi:[6,20],readm:[3,24,25,29,34],real:26,reason:4,rec:31,recap:30,recommend:[4,12],record:[1,26],red:[5,22,33],ref:12,refer:[1,8,11,15,16,18,20,26,36],referenc:[11,13,37],refin:0,reflect:[12,18,24],reflectedlight:17,refpoint:[1,11,13,25,37],rel:26,relat:[4,27],relative_lumin:17,renam:27,render:[3,4,5,6,7,9,11,14,18,19,20,21,22,24,25,26,37],renderbufferdirect:20,renderobject:20,renderpass:20,rendertarget2:3,rendertoscreen:3,reorgan:1,repeat:25,repeatedli:24,replac:[6,29,36],report:29,repositori:24,repres:[12,13,24,29],represent:24,request:29,requir:[4,5,24],reset:0,resourc:[8,11],resourcepath:29,respect:[5,18],respons:21,restor:0,resulst:28,result:[0,3,4,5,29],retriev:20,revis:[3,20],rgb2x2:[24,25,36],right:37,rise:0,risg:0,road:[10,12,22,36,37],rootnod:29,rot:25,rotat:[1,12,20,29,37],rotatex:[11,25],rotaxi:11,rough:17,roughnessfactor:29,round:24,route66:37,row:[5,33],rst:25,rule:[0,21],ruler256:[14,20],run:24,runsystemgroup:20,runtim:21,said:20,same:[1,3,5,13,20,33,37],sampl:[11,18,26,30,36],sampler2d:3,sampler:[3,29],san:[5,13],sandbox:20,sanit:29,sanitizenodenam:29,satur:17,save:[0,6],scalabl:[11,16,37],scalar:29,scale:[1,10,12,13,17,20,22,36,37],scaleorb:[11,19,20,36],scene:[2,4,5,6,11,13,15,20,21,24,26,37],schedul:1,schema:1,scienc:28,scope:29,screen:12,script:[0,11,13,22,24,25,27,36,37],seam:[12,33],search:26,second:[1,25,33,36,37],section:[1,5,29,33,36],see:[0,1,3,5,6,10,12,13,14,17,19,20,21,22,24,25,27,28,29,33,34,36,37],segment:28,segmentfract:28,segmentlength:28,self:20,separ:[24,33],septemb:31,sequenc:[0,11,12,20],sequenti:1,seqx:[0,1,25,37],serial:[6,8,33],serif:[5,13],serious:37,serret:28,set:[0,1,3,4,12,13,14,20,21,22,37],setattribut:28,setbyj:20,setfromrotationmatrix:[1,12],setindex:[20,28],setup:[0,6,12],sever:6,shadderlib:17,shade:18,shader:[1,5,10,11,18,20,26,27,36,37],shader_nam:18,shaderalpha:[20,22],shaderchunk:[3,17],shaderflag:[11,18,19,20,25,36,37],shaderid:[3,17],shaderlib:[3,17],shadermateri:[3,13,18,22],shaderpass:3,shadertoi:[11,16,20],shape:[5,13,20],share:[3,11,17,29,35],shear:12,sheet:0,shini:[17,18],shininessv:18,should:[0,1,3,21,22,24,25,33,35,37],shouldn:[1,6,12],show:[0,1,3,5,10,12,20,22,24,25,33,35,37],side:36,sideofplan:17,signal:0,significantli:[0,15],sil:20,similar:[3,12,29,36],simoncozen:20,simpl:[14,20,24,30],simpli:[13,20],simplifi:[4,29],sin:15,sinc:37,singl:[17,22,37],singleton:21,sinusoid:1,size:[13,22,33],sketchfab:29,skinindex:18,skinnedmesh:29,skinweight:18,skip:0,skycolor:14,slow:20,small:[12,29],snapshot:0,snippet:[3,12,20,35],solut:37,some:[0,1,6,8,12,22,24,26,27,29,37],someth:[0,20],sometim:37,soon:25,sourc:[0,11,12,24,26,29,36,37],space:[5,24,33],span:0,spark1:[25,37],specangl:18,special:[1,5,22],specif:29,specifi:[1,10,13,21,22,24,29,35,37],specular:[17,18,22],specularcolor:18,speed:36,sphere:[15,22],split:29,spr:15,sqrt:1,squre:35,src:[3,20,27,28],stabl:0,stack:29,stackoverflow:20,stand:[0,12,24],standalon:31,standard:17,star:[11,16],start:[0,5,11,20,24,25,36,37],startcmd:1,startseq:[1,37],startupd:[5,13,24,25],startween:0,startwith:[1,25],statckoverflow:1,state:[0,24],stencil:20,step:[1,6,12],still:[21,26],stirng:[5,33],stop:[0,20],store:12,strang:20,stream:29,string:[5,13,22,29],stroke:31,struct:17,structur:[0,11,37],struggl:1,stub:[4,5],style:[1,5,13,36],subclass:[6,12,24,25],subsequ:21,subsystem:[4,6,21],subtl:5,support:[1,5,6,7,9,12,13,14,22,26,27,37],suppos:[3,4],svg10:31,svg:[4,8,11,20,22,26,30,37],sys:[3,4,7,9],system:[0,1,3,4,5,13,21,25,26,30],sytl:5,t_rang:22,take:12,taken:[0,29],tangent:[18,28,29],target:[1,3,12,20,25,27,29,37],targetarclength:28,targetposit:20,task:[11,26],tdiffus:3,technolog:20,templat:10,temporari:17,term:18,test:[0,1,3,4,5,7,10,12,13,14,18,20,22,24,25,26,28,29,33],testd3pi:5,testdynamicpo:37,tex:[7,14,20,21,25,27,36,37],tex_alpha:22,texcoord:29,texcoord_0:29,texeffect:3,texmix:[20,22],texscen:3,text:[5,11,27,33,37],textur:[1,2,5,8,11,13,18,20,21,22,25,29,33],textureid:3,than:[1,4,10,12],thei:21,them:0,themselv:6,thermal:[10,36],thermalcolor:[22,36],thi:[0,1,3,4,5,6,12,13,18,20,21,22,24,25,27,28,29,33,35,36,37],thing:[0,29],those:22,though:4,thought:24,three:[1,4,6,11,12,13,14,17,20,21,22,24,25,27,28,36,37],threegeometrycas:12,threej:[3,6,37],threejsfundament:29,thrender:[1,2,6,11,12,20,22,25,27,30],through:[0,29],tick:[24,25],tile:[10,12,22,36],tiledorb:[10,11,36],tileorb:36,time:[0,1,20],tip:29,titl:29,todai:31,todo:[0,6,9,11,12,14,22,25,27,28,36],togeth:[1,5,13,20,22,24],tonemapping_pars_frag:17,too:20,tool:20,toolkit:26,tor:1,total:10,totori:29,trace:1,transforamt:12,transform:[0,1,2,11,14,20,26,27,34],transformdirect:17,transfrom:12,translat:[1,12,13,14,29,37],transpil:[24,25],transport:28,transposemat3:17,tree:[29,37],tri:20,triangl:29,trigger:[0,1,6,24,25,37],trs:20,truetyp:20,ttf:20,tube:[10,20,30],tubebuffergeometri:28,tubegeomerti:28,tubegeometri:28,tubularseg:28,tutori:[5,29,31],tween:[11,12,19,20,22,24,25,26,37],tweenj:20,twn:37,twnx:0,two:[0,1,22,36],type:[1,4,12,13,17,20,22,27,28,29,36],typeerror:20,typic:[0,36],u_alpha:[11,18,20,25],u_color0:18,u_color1:18,u_color2:18,u_dist:1,u_morph0:[18,25],u_morph1:[18,25],u_morph2:[18,25],u_morph:[1,22,25,37],u_morphi:[11,22,25],u_now:36,u_pathn_morph:12,u_tex:[22,25,37],uncaught:20,undefin:[1,2,3,13,14,20,22,24,25,27,29,35,37],unexpect:3,uniform:[3,11,17,18,19,20,22,25,26,34,35],uniformslib:17,uniformsutil:3,unit:5,univers:28,unknown:29,unnecessari:21,unscal:1,updat:[0,1,4,6,12,13,17,20,21,22,24,25,29,36,37],updatematrix:[1,12],updaterang:29,upgrad:0,upon:[0,4],upper:[1,37],uri:[22,29,36],url:29,usabl:22,usag:[1,13,22,27,29],use:[0,1,4,6,12,13,14,20,24,25,27,28,29,37],use_color:[17,18],use_instanc:18,use_morphnorm:18,use_morphtarget:18,use_skin:18,use_tang:18,used:[0,1,5,6,10,12,13,18,20,21,22,24,27,28,33,37],useful:[0,22,24,25],user:[1,5,12,21,24,25,35,37],usercmd:27,userdata:29,uses:37,using:[3,5,12,13,20,22,24,25,27,29,37],usual:[1,22,37],utf:31,util:[8,9],uvs:28,valpha:18,valu:[0,1,3,5,17,20,22,33,37],vari:[17,18,20],variabl:[1,28],vcolor:[17,18],vec2:[15,17,18],vec3:[12,15,17,18,19,20,29],vec4:[15,17,18,20,33],vector2:28,vector3:[1,28],vector:[1,18,20,33],verifi:[3,4,24,26],version:[0,1,5,20,21,29,31],vert:[13,37],vert_scal:[22,25,37],vertex:[1,20,22,28,29],vertex_textur:18,vertexshad:[3,17],vertic:[1,13,22,25,28,29,37],vertix:1,vertpo:18,vertpos4:18,via:[3,12,29],victor:20,view:[11,24,26,29],viewbox:31,viewdir:17,viewer:18,viewmatrix:18,virtual:29,visaul:24,visibl:[17,21,22,25,37],vision:29,visual:[0,1,2,3,4,8,11,12,14,18,20,21,27,30,35,36,37],visualtyp:1,vlinedist:17,volumetr:[10,11,16,20],voxel:[22,25,37],vpara:[18,36],vsual:12,vtype:[1,11,14,20,24,25,27,35,36,37],w3c:[20,31],wai:[0,1,3,4,20,29,37],ward:20,warn:13,way0:20,web:21,webclient:21,webgl:[3,13,18,22,24],webgl_const:29,webglindexedbufferrender:20,webglprogram:3,webglrender:[3,17,20],webpack:[24,25,27],websocket:21,weight:[1,22],well:[24,25],what:[1,4,12,18,37],when:[0,1,3,4,13,20,22,24,29],where:[0,1,3,6,10,12,13,24,33,36],which:[1,3,13,20,22,24,27,28,29,35,36,37],white:5,whitealpha:[22,36],whitecompl:17,width:[13,31,33],wiki:17,wikibook:17,wikipedia:[12,17,28],wile:12,window:[5,20,24,25],wirefram:[13,20],wish:[11,37],within:37,without:[3,12,20,37],withtransform:[13,20,37],won:[4,20],word:10,work:[0,1,13,20,21,22,25,31,37],world:[1,5,11,16,24],world_ap:29,world_ap_basecolor:25,worldorb:[11,19,36],worri:1,worth:3,would:[24,37],wpo:19,wrap:[1,13,29],wrapt:29,write:21,wrong:3,www:[1,31],x080820:14,x_y:12,x_z:12,xbar:[8,11],xcommon:[8,11],xcompon:[5,10,14,19,20,22,24,25,26,30,35,36,37],xeas:[1,25,37],xec:[5,24,25],xffffbb:14,xgeom:[10,12],xglsl:[18,19],xmath:28,xml:31,xmln:31,xob:9,xscene:[5,24,25],xscnene:1,xsy:[3,7,24,25],xttweener:12,xtweener:[0,1,10,12,22,30,37],xview:[21,24,25],xworld:[4,5,6,10,13,14,20,21,37],xywh:[13,33],xyz:[15,17],y_x:12,y_z:12,yellow:35,yep:1,you:[24,25,29,37],z_x:12,z_y:12,zero:1},titles:["Affine Tweening","Animizers","Assets Loader","Debug Notes","ECS Framework","Charts","Post Effects","HTML Texture","Extensions","SVG Texture","X-Geometry Handling","Design Memo","Obj3 &amp; Transformation","Visual &amp; Renderers","Scene &amp; HUD","Shadertoy Flame","Shader Samples","Shader Instance Pool","Morphing Phong Material","Morphing Volumetric Shaders","Tasks","MVC View","Visual.paras","X-visual Guide","X-visual App Architecture","X-visual\u5e94\u7528\u7a0b\u5e8f\u57fa\u672c\u7ed3\u6784","Welcome to x-visual\u2019s documentation!","Components","Geometries","GLTF Format","Reference","SVG","Systems","Examples","Tests &amp; Example","Test - Postprocessing","Test - Geometries","Test - Morphing &amp; Uniform"],titleterms:{"\u4eff\u5c04\u53d8\u6362":25,"\u5e94\u7528\u7a0b\u5e8f\u57fa\u672c\u7ed3\u6784":25,"\u5f15\u7528x":25,"\u6846\u67b6\u57fa\u672c\u529f\u80fd\u8303\u56f4":25,"\u6a21\u578b\u7a7a\u95f4\u5c5e\u6027\u52a8\u753b":25,"\u793a\u4f8b":25,"case":[33,35,36,37],"default":13,"enum":27,"function":24,"particles\u52a8\u753b":25,"uniform\u52a8\u753b":25,"visual\u5e94\u7528\u7a0b\u5e8f\u57fa\u672c\u7ed3\u6784":25,ECS:4,The:29,Using:12,about:[3,24],accessor:29,across:3,affin:[0,12,25],anim:[1,37],animc:[1,27],animi:1,animtyp:[1,27,37],api:[24,27],app:24,applic:24,architectur:24,asset:[2,13,29],assettyp:27,auxiliari:5,axi:5,behaviour:0,blink:15,buffer:29,bufferview:29,cate:[35,36,37],chart:[5,33],citi:29,color:37,colorarrai:22,combin:[0,12],common:[1,24,27],compon:27,compos:6,condit:4,d3pie:5,data:[5,31],debug:[0,3],definit:27,design:[6,11],differ:22,dir:[28,36],dirtubegeometri:28,doc:27,document:26,dynam:13,effect:6,enabl:22,exampl:[1,14,24,27,29,33,34],expos:29,extens:[5,8,33],flame:15,flowingpath:35,format:29,frame:28,framework:[4,24],frenet:28,from:36,geojson:36,geom:13,geometri:[10,12,28,29,36],glsl:3,gltf:[13,29,37],gltfloader:29,gpupick:21,group:[19,37],guid:23,hack:3,handl:[10,13,37],hello:[24,25],hexatil:[10,12,36],html:7,hud:14,indic:26,inject:12,input:21,instanc:[3,17],issu:[3,12,20],label:5,lesser:15,light:14,line:37,list:20,loader:[2,29],lowpoli:29,main:14,manag:17,mapxzroad:[10,12],materi:[3,18],memo:11,mesh:[1,29],modleseq:1,modul:3,morph:[18,19,37],morphinganim:32,mtype:1,mvc:21,next:24,node:[13,29,37],note:[0,3],obj3:[12,13],obj3typ:[12,27],occlud:35,onli:22,orb:19,orbgroup:22,orbit:1,para:[1,13,22],pass:6,path:36,pattern:6,phong:18,point:22,pointgeom:35,pool:17,posit:[1,19,37],post:6,postprocess:35,practic:24,quaternion:12,queri:4,raw:29,raymarch:15,recap:29,refer:[5,12,17,28,29,30,31],referenc:3,refpoint:22,render:13,represent:29,resourc:5,rotatex:1,rotaxi:1,sampl:[16,31],scalabl:19,scaleorb:22,scene:[14,29],script:1,sequenc:1,serial:5,shader:[3,16,17,19,22,25],shaderflag:[22,27],shadertoi:15,share:22,simpl:29,sourc:3,star:15,start:1,startup:24,step:24,structur:1,svg:[9,31],system:[24,32],tabl:26,task:20,test:[34,35,36,37],text:13,textur:[3,7,9,37],three:[3,29],thrender:[13,32],tiledorb:22,todo:20,transform:[12,13,25,37],tube:[28,36],tubegeometri:36,tween:[0,1],u_alpha:[1,37],u_morphi:[1,37],uniform:[1,37],view:21,visual:[5,6,13,22,23,24,25,26,28,29],volumetr:[19,36],vtype:[13,22],welcom:26,wish:20,world:19,worldorb:22,xbar:[5,33],xcommon:5,xcompon:27,xtweener:32,xworld:[24,25]}})