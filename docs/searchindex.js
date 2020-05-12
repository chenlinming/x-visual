Search.setIndex({docnames:["design-memo/affine","design-memo/animizer","design-memo/assets","design-memo/ecs","design-memo/extensions/chart","design-memo/extensions/effects","design-memo/extensions/htmltex","design-memo/extensions/index","design-memo/extensions/svg","design-memo/index","design-memo/obj3","design-memo/renderer","design-memo/scene","design-memo/shaders/flame","design-memo/shaders/index","design-memo/shaders/instance","design-memo/shaders/phong","design-memo/todo","design-memo/view","guide/index","guide/intro","guide/intro-cn","guide/tests","index","reference/components","reference/gltf","reference/index","reference/svg","reference/systems"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:54},filenames:["design-memo/affine.rst","design-memo/animizer.rst","design-memo/assets.rst","design-memo/ecs.rst","design-memo/extensions/chart.rst","design-memo/extensions/effects.rst","design-memo/extensions/htmltex.rst","design-memo/extensions/index.rst","design-memo/extensions/svg.rst","design-memo/index.rst","design-memo/obj3.rst","design-memo/renderer.rst","design-memo/scene.rst","design-memo/shaders/flame.rst","design-memo/shaders/index.rst","design-memo/shaders/instance.rst","design-memo/shaders/phong.rst","design-memo/todo.rst","design-memo/view.rst","guide/index.rst","guide/intro.rst","guide/intro-cn.rst","guide/tests.rst","index.rst","reference/components.rst","reference/gltf.rst","reference/index.rst","reference/svg.rst","reference/systems.rst"],objects:{},objnames:{},objtypes:{},terms:{"005c9a":27,"00c0c0":11,"0125520511237016e":25,"0x000000":15,"0x111111":15,"100px":11,"11_basecolor":25,"12vec":4,"16_basecolor":25,"217fba":27,"2413066498289683e":25,"24f":4,"256x256":4,"3668332938134597e":25,"3in":27,"3rd":22,"3x3":1,"4d4100bcb1c640e69699a87140df79d7":25,"4em":4,"4vec":4,"6096576513098873e":25,"610216327898289e":25,"64px":11,"7047907974381987e":25,"8070770596253361e":25,"8385761910227429e":25,"8em":4,"\u4e09\u7ef4\u7a7a\u95f4\u6a21\u578b\u7684\u5e38\u89c1\u53d8\u6362":21,"\u4e0a\u4f8b\u4e2d":21,"\u4e3a":21,"\u4e3b\u7a0b\u5e8f\u521b\u5efa\u4e86\u4e00\u4e2axworld":21,"\u4e3b\u7a0b\u5e8f\u6a21\u677f":21,"\u4e4b\u540e\u53ef\u80fd\u6269\u5c55post":21,"\u4e4b\u540e\u8c03\u7528xworld":21,"\u4e5f\u53ef\u4ee5plain":21,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u5e94\u7528\u7a0b\u5e8f":21,"\u4f5c\u4e3a\u6e32\u67d33d\u7a7a\u95f4":21,"\u4fdd\u5b58\u5728\u4e00\u4e2a\u7279\u6b8a\u7684entiti":21,"\u5168\u5c40\u9759\u6001asset\u7ba1\u7406":21,"\u5168\u90e8\u5305\u88c5\u5728thrender":21,"\u5173\u4e8eaffin":21,"\u5177\u4f53\u529f\u80fd\u5305\u62ec":21,"\u521d\u7b49\u51e0\u4f55\u4f53\u521b\u5efa\u5c55\u793a\u51c6\u5907":21,"\u52a8\u753b\u65f6\u957f1\u79d2":21,"\u52a8\u753b\u811a\u672c\u5230\u6e32\u67d3\u5bf9\u8c61\u7684\u5206\u89e3\u8f6c\u6362":21,"\u5305\u62ec\u4e00\u4e2amvc\u6a21\u5f0f\u7684view\u7ed3\u6784\u5c01\u88c5":21,"\u5305\u62ec\u521b\u5efaxworld":21,"\u5305\u62ec\u7528\u6237\u8f93\u5165\u54cd\u5e94":21,"\u5305\u62ecanimtyp":21,"\u53d6\u900f\u660e\u6750\u8d28\u540e\u9762\u7684\u6a21\u578b\u5bf9\u8c61":21,"\u53ef\u4ee5\u5206\u89e3\u4e3a\u57fa\u672c\u53d8\u6362":21,"\u53ef\u4ee5\u62fe":21,"\u53ef\u89e3\u91ca\u7684\u52a8\u753b\u7c7b\u578b\u7531animtype\u5b9a\u4e49":21,"\u540c\u65f6\u8fd8\u4e0d\u65ad\u66f4\u65b0\u989c\u8272\u900f\u660e\u5ea6":21,"\u56e0\u4e3au_morph\u8bbe\u7f6e\u4e86\u4e24\u4e2a\u6a21\u578b\u9876\u70b9\u7684\u6743\u91cd":21,"\u5728cube\u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7acb\u65b9\u4f53":21,"\u5728thrender\u5904\u7406\u6e32\u67d3\u4e4b\u524d":21,"\u57fa\u4e8ethree":21,"\u57fa\u4e8ex":21,"\u5982":21,"\u5982\u7acb\u65b9\u4f53":21,"\u5982orbit":21,"\u5b9e\u73b0\u7528\u6237\u5904\u7406\u903b\u8f91":21,"\u5b9e\u9645\u662f\u4e00\u7ec4\u6570\u636e\u548csystem\u52a8\u4f5c\u89c4\u5219":21,"\u5e76\u4e14\u63a7\u5236\u5728\u8fd9\u4e24\u4e2a\u6a21\u578b\u5bf9\u5e94\u9876\u70b9\u95f4\u79fb\u52a8":21,"\u5e76\u4f7f\u9876\u70b9\u5728\u4e0d\u540c\u76ee\u6807\u4f4d\u7f6e\u95f4\u53d6\u6743\u91cd":21,"\u5e94\u7528\u7a0b\u5e8f\u7684\u4e1a\u52a1\u5904\u7406\u7531\u5404\u79cd\u7ee7\u627f\u7684system\u6765\u5b9e\u73b0":21,"\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u9075\u5faaec":21,"\u5f00\u59cb\u53cd\u590d\u6e32\u67d3\u66f4\u65b0\u573a\u666f":21,"\u6240\u6709\u7684\u6570\u636e\u5c55\u793a\u7ea6\u675f":21,"\u62fe\u53d6\u5bf9\u8c61\u653e\u5728entity\u5305\u542b\u7684pick":21,"\u63d0\u9ad8\u5f00\u53d1\u6548\u7387":21,"\u642d\u5efa\u5e76\u8fd0\u884cx":21,"\u6570\u636e\u5c55\u793a\u65b9\u5f0f\u5904\u7406\u7b49":21,"\u662fecs\u5904\u7406\u7684\u6700\u540e\u73af\u8282":21,"\u66f4\u591a\u590d\u6742":21,"\u6700\u540e\u6e32\u67d3\u505a\u597d\u4e86\u51c6\u5907":21,"\u6a21\u578b\u5c06\u88abxtweener\u9a71\u52a8\u7ed5x\u8f74\u65cb\u8f6c45":21,"\u6bd4\u5982\u4e0b\u6587\u4e2d\u7684cube\u7c7b":21,"\u6dfb\u52a0entity\u548c\u542f\u52a8\u6e32\u67d3\u5faa\u73af\u7b49\u4ee3\u7801":21,"\u6e32\u67d3html\u9875\u9762\u6750\u8d28":21,"\u7136\u540e\u5b9a\u4e49\u4e86\u82e5\u5e72\u9876\u70b9":21,"\u7136\u540e\u6dfb\u52a0\u5b9a\u4e49\u7684\u7acb\u65b9\u4f53":21,"\u73af\u7b49":21,"\u7403\u4f53":21,"\u7528\u6237\u5904\u7406\u903b\u8f91\u5728\u8fd9\u91cc\u5e94\u8be5\u53ea\u5904\u7406\u4e0e\u6e32\u67d3\u6709\u5173\u7684\u5de5\u4f5c":21,"\u7528\u6237\u8f93\u5165\u6620\u5c04":21,"\u7528\u6237\u8f93\u5165\u88ab\u7ffb\u8bd1\u6210usercmd":21,"\u76ee\u524d\u7248\u672c\u53ea\u8003\u8651\u4e86\u952e\u76d8\u9f20\u6807\u4e8b\u4ef6":21,"\u7a7a\u95f4\u52a8\u753b":21,"\u7ba1\u7406":21,"\u7ebf\u6027\u53d8\u6362\u6709\u4e00\u7c7b\u7279\u6b8a\u7684\u53d8\u6362":21,"\u7ee7\u627fec":21,"\u82e5\u5e72\u4e2asystem\u6765\u5904\u7406\u89c6\u6548\u914d\u7f6e":21,"\u8bbe\u8ba1\u601d\u60f3\u624d\u80fd\u4e0ex":21,"\u8be6\u60c5\u53c2\u89c1exampl":21,"\u8f7d\u5165gltf\u6a21\u578b":21,"\u8fd9\u4e2a\u52a8\u753b\u811a\u672c\u5c06\u4f7fpoints\u7684\u4f4d\u7f6e\u5728\u4e24\u4e2a\u6a21\u578b\u7684\u9876\u70b9\u4f4d\u7f6e\u95f4\u79fb\u52a8":21,"\u8fd9\u4e2a\u52a8\u753b\u811a\u672c\u88ab\u89e3\u91ca\u4e3a\u521b\u5efa\u7b49\u8ddd\u5206\u5e03\u7684\u9876\u70b9":21,"\u8fd9\u6bb5\u9996\u5148\u5b9a\u4e49\u4e86\u4e24\u4e2a\u7528\u4e8e\u505a\u4f4d\u7f6e\u53c2\u7167\u7684\u6a21\u578b":21,"\u903b\u8f91\u5904\u7406\u5e94\u5f53\u63a8\u5230\u540e\u53f0\u5904\u7406":21,"\u9759\u6001\u52a8\u753b\u811a\u672c\u89e3\u91ca":21,"break":[13,25],"case":[0,1,11,17,19,20,23,25],"catch":25,"class":[0,5,20,21],"const":[4,15,20,21,22,24],"default":[2,9,15,18,20,21,25],"entity\u5b9a\u4e49":21,"entity\u7531\u82e5\u5e72component\u6784\u6210":21,"examples\u540e\u6709\u66f4\u52a9\u4e8e\u9605\u8bfb\u4e0b\u6587\u5185\u5bb9\u7ec6\u8282":21,"export":[15,20,21,24],"final":[0,5],"float":[13,15,16,17],"function":[1,4,5,7,10,11,15,25],"gltf\u8f7d\u5165":21,"import":[3,5,15,20,21,24],"instanceof":[0,5],"int":[11,13,16],"javascript\u65b9\u5f0f\u5f15\u7528":21,"js\u6e32\u67d3":21,"js\u6e32\u67d3\u5f15\u64ce":21,"new":[0,1,3,4,5,15,17,18,20,21,22,25],"null":[1,2,5,11],"pickid\u4e2d":21,"public":27,"return":[1,10,13,15,16,17,25],"rotatxyz\u7b49":21,"static":[1,2,3],"super":[20,21],"switch":25,"system\u4e2d":21,"system\u5b9e\u73b0":21,"throw":25,"transformation\u7684\u4ecb\u7ecd\u8f83\u591a":21,"transformation\u7684\u7ec4\u5408\u53ef\u4ee5\u5f62\u6210\u65b0\u7684\u7a7a\u95f4\u52a8\u753b":21,"true":[0,5,10,11,13,22,25],"try":[5,7,20,25],"tween\u52a8\u753b\u5904\u7406\u5df2\u7ecf\u5206\u89e3\u5230\u4e0d\u540c\u7684\u5b50\u7cfb\u7edf\u4e2d\u5904\u7406\u5b8c\u6210":21,"tween\u52a8\u753b\u9a71\u52a8":21,"var":[0,1,4,5,10,11,12,15,17,20,21,24,25],"visual\u4e3a\u8fd9\u4e00\u7cfb\u5217\u5904\u7406\u63d0\u4f9b\u4e86\u4e00\u4e2a\u57fa\u672c\u7ed3\u6784":21,"visual\u53ef\u4ee5\u7528npm\u7ba1\u7406\u4f9d\u8d56\u5305":21,"visual\u5b9e\u73b0\u4e86\u4e00\u4e2a\u5229\u7528\u6e32\u67d3\u7ed3\u679c\u62fe\u53d6\u573a\u666f\u6a21\u578b\u7684\u5b50\u7cfb\u7edf":21,"visual\u5c01\u88c5\u4e86thre":21,"visual\u5e94\u7528\u7a0b\u5e8f\u57fa\u672c\u7ed3\u6784":[19,23],"visual\u662f\u4e00\u4e2aec":21,"visual\u6b65\u8c03\u4e00\u81f4":21,"visual\u7684\u5e94\u7528\u7a0b\u5e8f\u4e3b\u5165\u53e3\u4e0e\u4ee5\u4e0a\u7a0b\u5e8f\u7247\u6bb5\u4e00\u81f4":21,"visual\u7684\u5e94\u7528\u7a0b\u5e8f\u5305\u62ec\u5982\u4e0b\u90e8\u5206":21,"void":[13,15,16,17],"webgl\u6e32\u67d3\u7a0b\u5e8fjavascript\u6846\u67b6":21,"while":[1,11,22,25],"xsys\u57fa\u7840\u7c7b":21,Axes:4,But:5,ECS:[1,5,9,18,20,23],For:[1,5,10,12,20,24,25],Not:[10,12],The:[0,1,3,4,5,6,8,10,11,12,18,20,22,26],Then:1,There:[0,1,5,20,25],These:[12,24],Use:1,Using:[4,9,17],With:24,_m1:[1,10],_mf:0,_onchangecallback:1,_onerror:25,_v1:[1,10],a_dest:[21,22],a_nois:[1,11,21,22],a_target:1,aaaaaaaaaaaaaaaaaacapwaaaaa:25,aaabaaiaaaaaaaaaaaaaaaaaaaaaaia:25,about:[0,1,7,9,10,11,15,22],abov:[1,4,20],abs:13,abstratct:5,access:[18,25],accord:[20,22],acctual:1,accumul:[0,10],aco:13,across:0,act:[1,11],action:[18,20],actual:[5,16,25],add:[4,5,17,20,21,25],added:[5,20],addent:[21,22],addit:10,addpass:5,addsystem:[4,20,21],adjust:4,aff:0,affect:13,affin:[1,9,17,23,24],affinecombin:[0,1,17],affinetran:0,affinetyp:0,after:[0,5,20,25],afther:20,again:0,algorithm:0,alias:17,all:[0,1,2,3,4,11,12,18,20,21,22,24,25],alon:4,along:4,alpha:[0,9,12,21],alreadi:[5,15,17],also:[0,1,4,10,11,17,20,25],alteredq:15,alteredqualia:15,alwai:[0,1,4,12,18],ambient:16,ambientcolor:16,ancestor:22,ani:[1,3,10,17,20,21,22],anim:[0,9,10,11,17,20,21,23,24,25],animationclip:25,animc:9,animi:9,animtyp:[9,11,21],anoth:[5,11,18],anti:17,antonmoek:25,anyth:25,ap_0:25,api:[0,1,2,11,17,23,26],app:[19,21,23],appaffin:[0,17],appli:[0,2,10,11,22],applic:[21,24,25],applying_matrix_transform:15,applymatrix4:[1,10],applymatrix:10,applyquaternion:1,architectur:[19,23],argument:[1,5,20,25],arial:[4,11],around:1,arrai:[0,1,4,5,10,11,25],arraybuff:25,arrow:4,arsen:20,art:20,articl:5,artist:22,ask:5,asset:[1,9,12,17,18,20,21,22,23,24,26],assetid:2,assetkeepr:[2,17,18],assettyp:[1,11,12,17,20,21,22],assign:[1,5,10],assum:[1,3],asynchron:[17,22,25],attribut:[1,4,11,15,16,17,25],author:[15,18,25],auto:[1,21,22],automat:1,auxiliari:[7,9],avail:23,averag:15,axes:4,axi:[1,7,9,10,21],axisi:4,back:[1,5],bar:[4,16],base64:25,base:[5,20],basecolorfactor:25,basecolortextur:25,basic:[10,15,20,22,25],becaus:10,been:[0,1,3,10,11,17,18,20,22,25],befor:[0,4],begin:[0,18],behavior:4,behaviour:[9,11],being:[0,17],between:[0,1,10,22,24],bin:[11,25],bind:4,blob:[17,25],bloom:5,blue:17,bodi:4,bone_textur:16,bool:[13,15,16],border:13,both:[5,11,21,22,23],bounc:1,bound:[11,20,21,24],box:[1,4,11,12,20,21,22,24],branch:17,breach:10,bridg:0,browser:27,brutal:22,buffer:[1,18],bufferattribut:25,buffergeometri:[24,25],build:25,built:20,bundl:[5,20],byr0:[12,21,22,24],byteblacksmith:15,bytelength:25,byteoffset:25,bytestrid:25,cach:25,cachekei:25,calcul:[1,17],call:[0,5,18,20,25],callback:25,caller:25,camera:[5,10,18,20,21,25],cameraposit:16,can:[0,1,2,3,4,5,10,11,13,17,18,20,21,22,24,25],canon:15,canv:[4,20,21],canva:[4,11],canvtex:11,car:[11,17,22,25],car_03:25,car_03_1:25,car_03_1_world:25,car_03_world:25,cardin:4,care:22,carefulli:3,cartoon:25,caus:[5,22],cdot:0,chang:[0,3,10,11,18,20,22],charact:1,chart:[7,9,10,16,24],cheat:0,check:[5,11],children:[12,25],circular:1,citi:[11,21,22,26],citysi:11,clamp:15,clarifi:25,clear:[0,18,21],clearcoat:15,clearcoatnorm:15,client:18,clietxi:18,clipping_planes_pars_vertex:15,clipping_planes_vertex:15,clone:5,cloneuniform:15,closer:18,cmd:[18,20,21],cmdflag:[20,24],cmptween:[0,1,17,21,22,24],code:[1,4,5,10,11,17,20,24],coeffici:16,col:13,collaps:15,collect:0,color:[1,4,15,16,20],color_pars_vertex:15,color_vertex:15,colorarrai:16,com:[1,15,17,25],combin:[1,3,9,17,22],combine_affin:1,combineend:0,combineupd:0,come:[0,5,20,21,23],comin:0,command:[1,18,20,21,22],commerci:[20,23],common:[9,15],compact:5,complet:[0,12,22],complic:0,compon:[0,1,2,3,5,10,11,12,18,20,21,23,26],componenttyp:25,compos:[0,1,7,9,10],compositon:5,comput:16,concept:[3,20],condit:[9,20],configur:[4,22],consecut:0,consid:1,consist:11,consol:[1,20,21],consolid:20,constructor:[1,5,10,20,21,25],content:[7,9,14,19,23,26],contract:24,control:10,conveni:0,convent:20,convers:1,convert:[1,11,18],cooper:0,coord:4,copi:[0,1,2,5,10,11],core:0,correct:25,cos:13,cosin:16,could:[4,10,20],count:25,creat:[1,3,4,5,10,11,12,18,20,21,22,24,25],createdefaultmateri:25,createent:[1,5,11,12,20,21,24],createobj3:17,creativ:20,creativecommon:25,cross:0,crosstar:[21,22],css:[4,11],cube0:[11,12,20,21,24],cube:[1,11,20,21,24],cubic:1,current:[0,1,4,5,20],curv:27,cycl:3,d3pie:[7,9,10],dai:5,data:[0,1,7,16,20,21,23,25,26],debug:[3,4,5,9],decis:3,declar:[1,10,24],decompos:[0,1,10],defaultex:[11,21,22],defin:[1,3,4,5,10,12,15,16,20,22,24],definit:[1,10,26],defualt:18,deg:[1,10,21],degre:1,delai:1,delta:17,depend:[4,5,18,20,25],dependend:25,deprec:21,desc:4,design:[0,1,3,7,10,16,23],det:[1,10],detail:[1,10,20,23],determin:[1,10],differ:[0,10,11,25],diffus:16,diffusecolor:16,dir:[13,15],direct:15,directdiffus:15,directli:[5,10,17,18],directspecular:15,dirti:11,disabl:22,discours:1,discuss:[1,15],dist:24,distanc:[1,11],div:4,divid:1,doc:[0,3,5,8,21,23,26],doctrin:10,doctyp:27,document:[1,4,11,20,21,24],doesn:[1,11],dom:[6,8],don:0,done:25,dot:[13,15,16],doublesid:25,download:20,draft:27,draw:4,drive:0,driven:[0,1],driver:20,dtd:27,durat:[1,17,21,22],dure:3,dynam:[1,9,25],dynatex:11,each:[0,1,3,4,10,17,18,20,22],earli:23,eas:[1,17,21,22],easi:0,ecs:[1,3,4,6,8,11,12,20,21,24],edd1c604e1e045a0a2a552ddd9a293e6:25,edg:0,effect:[7,9,11,13,21],effectcompos:5,effecti:20,effectpass:5,elapsedtim:17,elast:[1,21,22],eleg:1,element:[1,4,5,10],elimin:3,els:[1,5,13,15,16,17,20,21,25],emiss:15,emissivefactor:25,emit:1,emting:15,enabl:5,encod:27,end:1,endif:[15,16],enforc:18,ent1:[21,22],ent2:21,entir:[3,11,22],entiti:[0,1,3,5,11,12,18,20,21,22,24],entity1:[21,22],entity2:[21,22],envmap:15,envmapintens:15,eps:13,epsilon:15,equal:12,equival:1,error:[0,1,25],essenti:[5,13],etail:20,etc:[4,5,10,20,25],euclideanspac:1,euler:1,event:[0,1,18],eventdispatch:[1,10],eventu:20,everi:[0,25],everyth:[20,21],exactli:[10,25],exampl:[4,5,9,11,21,26],except:[11,12,25],exist:[1,11],expans:0,expect:[5,15,23],experiment:23,explain:[19,20,23,25],exponenti:1,exponentialinout:17,ext:[4,5],extend:[5,6,8,17,20,21],extens:[6,8,9,17,23,24,25],extra:25,face:10,fade:[1,21,22],fail:5,fals:[0,5,10,13,17,21,22,25],far:[20,21],fbx:25,feel:20,field:[0,10],file:[2,4,5,11,18,22,25],fileload:25,fill:27,finalcompos:5,finalfrag:5,finalpass:5,finalvert:5,find:25,finger:0,finish:[0,1,25],fira:4,fire:0,first:[0,1,20,21],fixm:[12,21],flag:[0,1,11,18,20,21],flame:[9,14],float32arrai:25,floatbufferview:25,floor:13,flow:0,flowing_path:5,flowingpath:5,fog:15,fog_pars_vertex:15,fog_vertex:15,folder:11,follow:[0,1,4,10,20,21,22,23],followbi:[1,21,22],font:[4,11],forc:10,form:[1,24],format:[22,23,26],former:5,fragcolor:13,fragcoord:13,fragmentshad:[5,15],framework:[9,18,23],free:[20,23,25],fritz:3,fritzi:3,from:[0,1,4,5,10,11,15,20,21,22,24,25],fsquad:5,fullscreenquad:5,fundament:5,further:[10,20],futur:[3,20],fyi:22,gamma_factor:16,gener:[4,11,16,18,25],geom:[1,9,12,20,21,22,24],geometr:10,geometri:[1,8,9,11,20,21,22,24],geometriccontext:15,geomtyp:24,get:[3,10,11,25],getdepend:25,geteffectpass:5,getelementbyid:[4,20,21],getjson:4,gitf:11,github:[17,25],gl_pointsiz:11,gl_posit:[15,16,17],glow:13,glsl:[11,15,17],glsl_program:15,gltf:[2,9,17,23,26],gltfparser:25,goe:[20,21],gomo:15,good:[5,11],got:0,gpu:[17,18],gpupick:[9,12],green:4,grid:4,group:[0,1,4,12,20,21,25],guess:0,guid:[12,21,23],had:17,handl:[0,1,3,9,17,18,20,21],handler:[0,18],happen:18,hard:0,has:[0,1,3,11,12,18,20],have:[0,4,5,11,15,17,22],height:27,heikkinen:17,hello:12,hellocub:[20,21],help:[5,18,20],here:[5,10,11,20,21,22,24],high_precis:16,highli:3,highp:[15,16],hipr2:21,his:5,hole:18,hollow:[20,21],home:25,homepag:21,how:[0,1,11,12,20,22],htm:[1,21],html2textur:4,html:[0,1,4,7,8,9,11,12,17,20,21,22,25],htmltex:6,http:[0,1,15,17,21,25,27],hud0:12,hud:[9,23],hudchild:12,hudgroup:12,idea:[11,20,22,23],idl:[0,17],idx:[1,25],ifdef:[15,16],iffal:[3,20,21],ifndef:15,ignor:[1,11,12,21,22,24],iii:4,ilmari:17,imag:25,implement:[1,3,10,17,20,21],impos:3,improv:15,incidentlight:15,includ:[4,5,10,12,15,20,22,25],increas:[0,10],incur:0,independ:[0,20],index:[0,1,20,21,22,23,25],indic:[1,4,25],indirectdiffus:15,indirectspecular:15,inf:21,infin:[1,17,21,22],inform:22,init:[21,24],initc:11,initi:[2,10],initmateri:15,initmypick:18,inject:9,innov:20,inout:[1,21],input:9,insanceof:5,insid:0,inspir:3,instal:20,instanc:[5,9,14,25],instancematrix:16,instead:[1,5],intend:[20,22],interact:[18,22],intern:18,interpol:[0,10,17],introduct:0,intuit:18,inversetransformdirect:15,invert:[1,10],invis:[21,22],invsi:[1,10],invsx:[1,10],invsz:[1,10],iresolut:13,isobject3d:10,isorthograph:16,isperspectivematrix:15,isplai:0,isskinnedmesh:25,issu:[0,1,3,7,9,15,22],issuer:0,ital:4,items:25,iter:[0,18],itim:13,its:5,itself:22,javascript:[20,24],jet:17,jpeg:[21,25],jsdoc:[2,17,23],json:[4,25],just:[20,22],keep:0,keepingt:2,keept:0,kei:[0,18,20],kept:0,khronosgroup:25,kind:1,knowledg:[5,18,25],label:7,lambert:[15,16],lambertian:16,larg:3,larger:0,last:0,late:17,later:[0,11],latter:[5,17],law:16,layer:5,layerchannel:5,lead:5,learnt:0,leav:0,length:[0,1,10,13,18,25],lesser:[9,14],lesson:0,let:[0,1,11],letter:17,level:0,lib:[5,24],licens:25,life:3,light:16,lightpo:16,like:[0,4,5,10,16,20,21,22,25],limit:[3,5],line:[4,12,20,21,25],linear:[0,1,10,17,21],lineartorelativelumin:15,linedirect:15,linedist:15,lineplaneintersect:15,liner:15,lineseg:25,link:20,list:9,load:[1,2,11,17,22,25],loadcamera:25,loader:[9,11,23,26],loaderscop:25,loadgeometri:25,loadgltf:2,loadgltfnod:17,loadmesh:25,loadnod:25,loadscen:25,locat:11,log:[20,21],logcnt:[20,21],logdepthbuf_pars_vertex:15,logdepthbuf_vertex:15,logic:[3,20,25],longer:[1,4],look:[0,22],lookscreen:10,loop:[0,20],low:[0,25],lowpoli:26,m11:[1,10],m12:1,m13:1,m21:1,m22:1,m23:1,m31:1,m32:1,m33:1,m_f:0,magfilt:25,mai:[0,15,18],main:[4,12,15,16,17,20],mainimag:13,major:1,make:[0,5,10,22,25],manag:[2,9,14,18,20,25],mani:[3,11],manual:0,map:25,martrix4:0,mask:[5,24],master:[17,25],mat3:[15,16],mat4:[0,10,15,16,17],materail:[11,16,25],materi:[5,9,11,14,15,18,25],materialproperti:15,math:[1,10,20],mathemat:10,mathjax:0,matric:22,matrix4:[1,10],matrix:[0,1,10,11,15,17,22,25],matrixautoupd:[0,1,10,17],matrixtoquaternion:1,matter:3,max:[13,16,25],max_bon:16,mdn:[4,11,27],mean:[3,11,25],member:0,memo:23,memorandum:23,mergeuniform:15,mes:17,mesh:[0,5,9,10,12,17,20,21,22,24],mesh_:25,meshbasic_frag:15,meshbasic_vert:15,meshcolor:16,meshdef:25,meshindex:25,meshlambert_frag:15,meshlambert_vert:15,meshphong_frag:15,meshphong_vert:15,meshphysical_frag:15,meshphysical_vert:15,messag:18,met:20,metal:15,metallicfactor:25,method:[1,5,22],mf_z:0,mi_z:0,mikael:15,million:17,min:[13,24,25],minfilt:25,mix:[1,13,16],mixcolor:16,mocha:5,mode:[16,25],model:[1,11,18,21,22,25],modelmatrix:16,modelmorph:1,modelseq:[1,11,17,21,22],modelview:16,modelviewmatrix:[15,16,17],modif:[3,25],modifi:[1,10,25],modleseq:9,modul:[1,7,9,23],more:[1,3,10,18,20],morph:[1,16,21,24],morphinganim:26,morphnormal0:16,morphnormal1:16,morphnormal2:16,morphnormal3:16,morphseq:22,morphswitch:21,morphtarget0:16,morphtarget1:16,morphtarget2:16,morphtarget3:16,morphtarget4:16,morphtarget5:16,morphtarget6:16,morphtarget7:16,mous:18,move:[0,1,4,20,22],mrdoob:15,mtype:[9,21,22],mul:0,mulpost:0,multipl:[0,25],must:[0,12,18,20,22,25],mvc:[9,23],mvposit:15,name:[1,11,15,20,21,25],natur:25,ndoe:25,nds:17,need:[0,1,3,4,10,17,18],neg:[1,10],never:1,newposit:17,next:0,node:[9,17],nodedef:25,nodeindex:25,nodemap:25,nois:[1,11,13],noisi:17,none:0,normal:[13,15,16,25],normalinterp:16,normalmat:16,normalmatrix:16,note:[4,5,9,18,25],noth:20,now:[17,20,21,23,25],npm:[5,20,21,24],number:[1,10,25],obe3:11,obj3:[0,1,2,4,5,9,12,17,18,20,21,22,23,24],obj3rotaxi:21,obj3typ:[1,11,12,20,21,22],object3d:[1,5,10,11,24,25],object:[0,1,3,4,5,10,11,12,15,16,17,18,20,21,22,25],occlud:5,octet:25,odi:25,offici:23,offset:[4,25],onafterrend:10,onbeforerend:10,one:[0,1,3,4,10,11,12,15],onerror:25,onli:[0,1,3,4,5,10,11,16,17,18,20,22,23],onload:25,onprogress:25,onstart:0,opa0:1,opa1:1,opac:21,open:[0,20,21,23],opengl:15,oper:[10,21],optim:17,option:[5,20,21,25],orbit:[0,9,10],order:[0,1],org:[0,1,5,13,15,25,27],organ:1,orient:25,origin:3,originalmateri:25,orthocclud:5,orthogon:[0,1,5],osg_scen:25,other:[0,1,3,10,25],out:[1,13,25],pack:[5,25],packag:[5,20,25],page:[4,12,20,23,25],para:[9,12,17,21,22,25],parallel:0,param:[0,25],paramet:[4,9,11,12,15,20,21],parent:12,pars:[10,18,25],parser:25,part:[1,10,20,25],particl:[11,17,21],pass:[7,9,20],path:[2,11,20,25,27],patheffect:5,pattern:[7,9,18,20],pbrmetallicrough:25,pend:25,per:15,perman:0,person:20,phase:23,phong:[9,14,15],pick:[17,18],pickabl:18,pickid:18,picktick:21,pie:[4,10],pin:21,pivot:1,plai:[0,1,17],plain:[20,24],plane:[0,4,11,12],planenorm:15,plausibl:5,playris:[0,17],plug:5,plugin:4,png:[12,20,21,22,24],point:[0,1,12,15,17,21,22],pointonlin:15,pointonplan:15,poli:25,pool:[9,14],pos0:4,posit:[0,9,10,11,15,16,17,20,25],post:[0,7,9,22],postprocess:5,pow2:15,pow3:15,pow4:15,pow:[13,16,17],precis:[0,16],premultipli:[1,10],present:5,prestend:3,prev:0,prevent:[0,18],previou:[0,21,22],primer:27,primit:25,print:0,probabl:3,problem:[0,5,17,22],process:[1,3,10,17,18,25],produc:[4,11],program:[15,16,20],programcach:15,programchang:15,programm:22,progress:17,project:[16,20,23],projectionmatrix:[15,16,17],projectonplan:15,promis:25,properti:[0,1,10,11,18,22],prototyp:[1,10,25],provid:[1,3,4,7,10,11,16,18,22,24,25],pure:[0,1,20],push:[1,17,25],put2j:[0,17],quadrat:1,quartic:1,quaternion:[0,1,9],queri:[9,20,21],queryent:3,question:5,queue:18,quick:20,quintic:1,radian:10,ram:[1,11],rand:15,randomnum:17,randomparticl:[21,22],rang:[11,15],ratat:10,raymarch:[9,14],rbf:21,read:1,readi:[5,17],readm:[5,20,21,25],real:23,realli:0,reason:3,rec:27,recap:26,recommend:3,record:[1,23],red:4,refer:[1,7,9,13,14,16,23],referenc:[11,22],refin:0,reflect:[10,16,20],reflectedlight:15,refpoint:[1,21,22],relat:[3,24],relative_lumin:15,renam:24,render:[3,4,5,6,8,9,12,16,17,18,20,21,23],rendertarget2:5,rendertoscreen:5,reorgan:1,repeat:21,repeatedli:20,replac:5,report:25,repositori:20,repres:[10,11,20,25],represent:20,request:25,requir:[3,4,20],reset:0,resourc:[7,9],resourcepath:25,respect:[4,16],respons:18,restor:0,result:[0,3,5,25],rgb2x2:[20,21],rise:0,risg:0,road:22,rootnod:25,rot:21,rotat:[1,10,25],rotatex:[9,21],rotaxi:9,rough:15,roughnessfactor:25,round:20,row:4,rst:21,rule:[0,18],ruler256:12,run:20,runtim:18,same:[0,1,4,5,11],sampl:[9,16,23,26],sampler:25,san:4,satur:15,save:[0,5],scalar:25,scale:[0,1,10,11,15],scene:[2,3,4,5,9,11,13,17,18,20,22,23],schedul:1,schema:1,scope:25,screen:10,script:[0,9,11,20,21,22,24],seam:10,search:23,second:[1,21,22],section:[1,4,25],see:[1,4,5,10,11,12,15,17,18,20,21,24,25],separ:20,septemb:27,sequenc:[0,9,10,17],sequenti:1,seqx:[1,21,22],serial:[5,7],serif:4,serious:22,set:[0,1,3,10,17,18,22],setbyj:17,setfromrotationmatrix:[1,10],setup:[0,5,10],sever:5,shadderlib:15,shade:16,shader:[1,4,5,9,11,16,17,22,23,24],shader_nam:16,shaderchunk:15,shaderflag:[11,16,21,22],shaderid:15,shaderlib:15,shadermateri:[5,11,16],shaderpass:5,shadertoi:[9,14],shape:[4,11],share:[5,15,25],shear:10,sheet:0,shini:[15,16],shininessv:16,should:[0,1,5,18,20,21,22],shouldn:[1,5,10],show:[0,1,4,5,20,21,22],sideofplan:15,signal:0,significantli:[0,13],similar:[5,10],simpl:[12,17,20,26],simplifi:[3,25],sin:13,singl:[11,15],singleton:18,sinusoid:1,size:11,sketchfab:25,skinindex:16,skinnedmesh:25,skinweight:16,skip:0,small:25,snapshot:0,snippet:[5,10,17],solut:22,some:[0,1,5,7,10,20,22,23,24,25],someth:[0,17],sometim:22,soon:21,sourc:[0,5,10,20,23,25],space:[4,20],span:0,spark1:[21,22],specangl:16,special:[1,4],specif:25,specifi:[1,11,18,20,22,25],specular:[15,16],specularcolor:16,sphere:13,split:25,spr:13,sqrt:1,src:[17,24],stabl:0,stack:25,stand:[0,10,20],standalon:27,standard:15,star:[9,14],start:[0,4,9,17,20,21,22],startcmd:1,startseq:1,startupd:[4,11,20,21,22],startween:0,startwith:[1,21],statckoverflow:1,state:[0,20],step:[1,5,10],still:[18,23],stirng:4,stop:0,stream:25,string:[4,11,25],stroke:27,struct:15,structur:[0,9,22],struggl:1,stub:[3,4],style:[1,4,11],subclass:[5,20,21],subsequ:18,subsystem:[3,5,18],subtl:4,support:[1,4,5,6,8,10,11,12,22,23,24],suppos:[3,5],svg10:27,svg:[7,9,11,23,26],sys:[3,5,6,8],system:[0,1,3,4,5,11,18,21,23,26],sytl:4,taken:[0,25],tangent:[16,25],target:[0,1,5,10,17,21,22,24,25],targetposit:17,task:[9,23],tdiffus:5,temporari:15,term:16,test:[0,1,3,4,5,6,11,12,17,19,20,21,23,25],testd3pi:4,testdynamicpo:22,tex:[6,12,18,21,22,24],tex_alpha:11,texcoord:25,texcoord_0:25,texeffect:5,texscen:5,text:[4,9,24],textur:[1,2,4,5,7,9,11,17,18,21,25],textureid:5,than:[1,10],thei:18,them:0,themselv:5,thi:[0,1,3,4,5,10,11,17,18,20,21,22,24,25],thing:[0,25],though:3,thought:20,three:[0,1,7,9,10,11,15,17,18,20,21,22,24],threegeometrycas:10,threej:[0,5],threejsfundament:25,thrender:[1,2,5,9,10,17,21,24,26],throb:[9,14],through:[0,25],tick:[20,21],time:[0,1,17],titl:25,todai:27,todo:[0,5,8,9,10,11,21,24],togeth:[1,4,11,20],tonemapping_pars_frag:15,too:17,toolkit:23,tor:1,totori:25,trace:1,transforamt:10,transform:[0,1,2,9,12,17,23,24],transformdirect:15,transfrom:10,translat:[0,1,10,12,22,25],transpil:[20,21],transposemat3:15,tree:[22,25],tri:17,triangl:25,trigger:[0,1,5,20,21,22],trs:17,tutori:[4,25,27],tween:[9,10,11,17,20,21,22,23],tweenj:17,two:[0,1],type:[1,3,10,11,15,24,25],typic:0,u_alpha:[16,21,22],u_color0:16,u_color1:16,u_color2:16,u_dist:1,u_morph0:[16,21],u_morph1:[16,21],u_morph2:[16,21],u_morph:[1,21,22],u_morphi:[9,11,21],u_tex:[11,21,22],undefin:[1,2,5,11,12,20,21,22,24,25],unexpect:5,uniform:[5,9,11,15,16,17,21],uniformslib:15,uniformsutil:5,unit:4,unknown:25,unnecessari:18,unscal:1,updat:[0,1,3,5,10,11,15,17,18,20,21,22,25],updatematrix:[1,10],updaterang:25,upgrad:0,upon:[0,3],upper:1,uri:25,url:25,usag:[1,11,24,25],use:[0,1,3,5,10,11,20,21,22,24,25],use_color:[15,16],use_instanc:16,use_morphnorm:16,use_morphtarget:16,use_skin:16,use_tang:16,used:[0,1,4,5,10,11,16,18,20,22,24],useful:[0,20,21],user:[1,4,10,18,20,21,22],usercmd:24,userdata:25,using:[4,5,10,11,20,21,22,24,25],usual:[1,11,22],utf:27,util:[7,8],valpha:16,valu:[0,1,4,5,11,15,17,22],vari:[15,16,17],variabl:1,vcolor:[15,16],vec2:[13,15,16],vec3:[10,13,15,16,17,25],vec4:[13,15,16,17],vector3:1,vector:[1,16],verifi:[3,20,23],version:[0,1,4,18,25,27],vert:[11,22],vert_scal:[11,21,22],vertex:[1,11,17,25],vertex_textur:16,vertexshad:[5,15],vertic:[1,11,21,22,25],vertix:1,vertpo:16,vertpos4:16,via:[5,10,25],view:[9,20,23,25],viewbox:27,viewdir:15,viewer:16,viewmatrix:16,virtual:25,visaul:20,visibl:[11,15,18,21,22],vision:25,visual:[0,1,2,3,7,9,10,12,16,17,18,22,24,26],visualtyp:1,vlinedist:15,voxel:[11,21],vpara:16,vsual:10,vtype:[1,9,12,20,21,22,24],w3c:27,wai:[0,1,3,5,22,25],web:18,webclient:18,webgl:[9,11,14,20],webgl_const:25,webglrender:15,webpack:[20,21,24],websocket:18,weight:1,well:[20,21],what:[1,3,10,16,22],when:[0,1,3,5,11,17,20,25],where:[0,1,5,10,11,20],which:[1,5,11,17,20,22,24,25],white:4,whitecompl:15,width:27,wiki:15,wikibook:15,wikipedia:[10,15],wile:10,window:[4,20,21],wirefram:11,wish:9,without:22,withtransform:[11,17,22],won:[3,17],work:[0,1,11,18,21,22,27],world:[1,4,20],world_ap:25,world_ap_basecolor:21,worri:1,worth:5,would:[20,22],wrap:[1,11,25],wrapt:25,write:18,www:[1,27],x_y:10,x_z:10,xbar:[7,9],xcommon:[7,9],xcompon:[4,11,12,20,21,22,23,26],xeas:[1,21,22],xec:[4,20,21],xglsl:16,xml:27,xmln:27,xob:8,xscene:[4,20,21],xscnene:1,xsy:[5,6,20,21],xttweener:10,xtweener:[0,1,10,26],xview:[18,20,21],xworld:[4,5,11,12,18,22],xywh:11,xyz:[13,15],y_x:10,y_z:10,yep:1,you:[20,21,22],z_x:10,z_y:10,zero:1},titles:["Affine Tweening","Animizers","Assets Loader","ECS Framework","Charts","Post Effects","HTML Texture","Extensions","SVG Texture","Design Memo","Obj3 &amp; Transformation","Visual &amp; Renderers","Scene &amp; HUD","Shadertoy Flame","Shader Samples","Shader Instance Pool","WebGl Phong Material","Tasks","MVC View","X-visual Guide","X-visual App Architecture","X-visual\u5e94\u7528\u7a0b\u5e8f\u57fa\u672c\u7ed3\u6784","Test Case Explained","Welcome to x-visual\u2019s documentation!","Components","GLTF Format","Reference","SVG","Systems"],titleterms:{"\u4eff\u5c04\u53d8\u6362":21,"\u5e94\u7528\u7a0b\u5e8f\u57fa\u672c\u7ed3\u6784":21,"\u5f15\u7528x":21,"\u6846\u67b6\u57fa\u672c\u529f\u80fd\u8303\u56f4":21,"\u6a21\u578b\u7a7a\u95f4\u5c5e\u6027\u52a8\u753b":21,"\u793a\u4f8b":21,"case":22,"default":11,"enum":24,"function":20,"particles\u52a8\u753b":21,"uniform\u52a8\u753b":21,"visual\u5e94\u7528\u7a0b\u5e8f\u57fa\u672c\u7ed3\u6784":21,ECS:3,For:11,The:25,Using:10,about:[5,20],accessor:25,affin:[0,10,21],alpha:[1,22],anim:[1,22],animc:[1,24],animi:1,animtyp:[1,22,24],api:[20,24],app:20,applic:20,architectur:20,asset:[2,11,25],assettyp:24,auxiliari:4,axi:4,behaviour:0,buffer:25,bufferview:25,chart:4,citi:25,color:22,combin:[0,10],common:[1,20,24],compon:24,compos:5,condit:3,d3pie:4,data:[4,27],debug:0,definit:24,design:[5,9],doc:24,document:23,dynam:11,effect:5,exampl:[1,12,20,24,25],explain:22,expos:25,extens:[4,7],flame:13,format:25,framework:[3,20],geom:11,geometri:[10,25],gltf:[11,22,25],gltfloader:25,gpupick:18,guid:19,handl:[11,22],hello:[20,21],html:6,hud:12,indic:23,inject:10,input:18,instanc:15,issu:[5,10,17],label:4,lesser:13,list:17,loader:[2,25],lowpoli:25,manag:15,materi:16,memo:9,mesh:[1,11,25],modleseq:1,modul:5,morph:22,morphinganim:28,mtype:1,mvc:18,next:20,node:[11,22,25],note:0,obj3:[10,11],obj3typ:24,orbit:1,para:[1,11],paramet:10,pass:5,pattern:5,phong:16,point:11,pool:15,posit:[1,22],post:5,practic:20,quaternion:10,queri:3,raw:25,raymarch:13,recap:25,refer:[4,10,15,25,26,27],refpoint:11,render:11,represent:25,resourc:4,rotatex:1,rotaxi:1,sampl:[14,27],scene:[12,25],script:1,sequenc:1,serial:4,shader:[14,15,21],shaderflag:24,shadertoi:13,simpl:25,star:13,start:1,startup:20,step:20,structur:1,svg:[8,27],system:[20,28],tabl:23,task:17,test:22,text:11,textur:[6,8],three:[5,25],thrender:[11,28],throb:13,todo:17,transform:[10,11,21,22],tween:[0,1],u_morphi:[1,22],uniform:[1,22],view:18,visual:[4,5,11,19,20,21,23,25],vtype:11,webgl:16,welcom:23,wish:17,xbar:4,xcommon:4,xcompon:24,xtweener:28,xworld:[20,21]}})