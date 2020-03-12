Search.setIndex({docnames:["design-memo/animizer","design-memo/assets","design-memo/ecs","design-memo/extensions/effects","design-memo/extensions/htmltex","design-memo/extensions/index","design-memo/extensions/svg","design-memo/index","design-memo/obj3","design-memo/renderer","design-memo/shaders/flame","design-memo/shaders/index","design-memo/todo","design-memo/view","guide/index","guide/intro","guide/intro-cn","index","reference/components","reference/gltf","reference/index","reference/svg","reference/systems"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:54},filenames:["design-memo/animizer.rst","design-memo/assets.rst","design-memo/ecs.rst","design-memo/extensions/effects.rst","design-memo/extensions/htmltex.rst","design-memo/extensions/index.rst","design-memo/extensions/svg.rst","design-memo/index.rst","design-memo/obj3.rst","design-memo/renderer.rst","design-memo/shaders/flame.rst","design-memo/shaders/index.rst","design-memo/todo.rst","design-memo/view.rst","guide/index.rst","guide/intro.rst","guide/intro-cn.rst","index.rst","reference/components.rst","reference/gltf.rst","reference/index.rst","reference/svg.rst","reference/systems.rst"],objects:{},objnames:{},objtypes:{},terms:{"005c9a":21,"0125520511237016e":19,"0x10":18,"0x11":18,"0x12":18,"0x13":18,"0x20":18,"0x21":18,"0x22":18,"0x23":18,"0x40":18,"0x82":18,"0x83":18,"0xffff":18,"11_basecolor":19,"16_basecolor":19,"217fba":21,"2413066498289683e":19,"3668332938134597e":19,"3in":21,"3rd":0,"3x3":0,"4d4100bcb1c640e69699a87140df79d7":19,"6096576513098873e":19,"610216327898289e":19,"7047907974381987e":19,"8070770596253361e":19,"8385761910227429e":19,"\u4e09\u7ef4\u7a7a\u95f4\u6a21\u578b\u7684\u5e38\u89c1\u53d8\u6362":16,"\u4e0a\u4f8b\u4e2d":16,"\u4e3a":16,"\u4e3b\u7a0b\u5e8f\u521b\u5efa\u4e86\u4e00\u4e2axworld":16,"\u4e3b\u7a0b\u5e8f\u6a21\u677f":16,"\u4e4b\u540e\u53ef\u80fd\u6269\u5c55post":16,"\u4e4b\u540e\u8c03\u7528xworld":16,"\u4e5f\u53ef\u4ee5plain":16,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u5e94\u7528\u7a0b\u5e8f":16,"\u4f5c\u4e3a\u6e32\u67d33d\u7a7a\u95f4":16,"\u4fdd\u5b58\u5728\u4e00\u4e2a\u7279\u6b8a\u7684entiti":16,"\u5168\u5c40\u9759\u6001asset\u7ba1\u7406":16,"\u5168\u90e8\u5305\u88c5\u5728thrender":16,"\u5173\u4e8eaffin":16,"\u5177\u4f53\u529f\u80fd\u5305\u62ec":16,"\u521d\u7b49\u51e0\u4f55\u4f53\u521b\u5efa\u5c55\u793a\u51c6\u5907":16,"\u52a8\u753b\u65f6\u957f1\u79d2":16,"\u52a8\u753b\u811a\u672c\u5230\u6e32\u67d3\u5bf9\u8c61\u7684\u5206\u89e3\u8f6c\u6362":16,"\u5305\u62ec\u4e00\u4e2amvc\u6a21\u5f0f\u7684view\u7ed3\u6784\u5c01\u88c5":16,"\u5305\u62ec\u521b\u5efaxworld":16,"\u5305\u62ec\u7528\u6237\u8f93\u5165\u54cd\u5e94":16,"\u5305\u62ecanimtyp":16,"\u53d6\u900f\u660e\u6750\u8d28\u540e\u9762\u7684\u6a21\u578b\u5bf9\u8c61":16,"\u53ef\u4ee5\u5206\u89e3\u4e3a\u57fa\u672c\u53d8\u6362":16,"\u53ef\u4ee5\u62fe":16,"\u53ef\u89e3\u91ca\u7684\u52a8\u753b\u7c7b\u578b\u7531animtype\u5b9a\u4e49":16,"\u540c\u65f6\u8fd8\u4e0d\u65ad\u66f4\u65b0\u989c\u8272\u900f\u660e\u5ea6":16,"\u56e0\u4e3au_morph\u8bbe\u7f6e\u4e86\u4e24\u4e2a\u6a21\u578b\u9876\u70b9\u7684\u6743\u91cd":16,"\u5728cube\u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7acb\u65b9\u4f53":16,"\u5728thrender\u5904\u7406\u6e32\u67d3\u4e4b\u524d":16,"\u57fa\u4e8ethree":16,"\u57fa\u4e8ex":16,"\u5982":16,"\u5982\u7acb\u65b9\u4f53":16,"\u5982orbit":16,"\u5b9e\u73b0\u7528\u6237\u5904\u7406\u903b\u8f91":16,"\u5b9e\u9645\u662f\u4e00\u7ec4\u6570\u636e\u548csystem\u52a8\u4f5c\u89c4\u5219":16,"\u5e76\u4e14\u63a7\u5236\u5728\u8fd9\u4e24\u4e2a\u6a21\u578b\u5bf9\u5e94\u9876\u70b9\u95f4\u79fb\u52a8":16,"\u5e76\u4f7f\u9876\u70b9\u5728\u4e0d\u540c\u76ee\u6807\u4f4d\u7f6e\u95f4\u53d6\u6743\u91cd":16,"\u5e94\u7528\u7a0b\u5e8f\u7684\u4e1a\u52a1\u5904\u7406\u7531\u5404\u79cd\u7ee7\u627f\u7684system\u6765\u5b9e\u73b0":16,"\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u9075\u5faaec":16,"\u5f00\u59cb\u53cd\u590d\u6e32\u67d3\u66f4\u65b0\u573a\u666f":16,"\u6240\u6709\u7684\u6570\u636e\u5c55\u793a\u7ea6\u675f":16,"\u62fe\u53d6\u5bf9\u8c61\u653e\u5728entity\u5305\u542b\u7684pick":16,"\u63d0\u9ad8\u5f00\u53d1\u6548\u7387":16,"\u642d\u5efa\u5e76\u8fd0\u884cx":16,"\u6570\u636e\u5c55\u793a\u65b9\u5f0f\u5904\u7406\u7b49":16,"\u662fecs\u5904\u7406\u7684\u6700\u540e\u73af\u8282":16,"\u66f4\u591a\u590d\u6742":16,"\u6700\u540e\u6e32\u67d3\u505a\u597d\u4e86\u51c6\u5907":16,"\u6a21\u578b\u5c06\u88abxtweener\u9a71\u52a8\u7ed5x\u8f74\u65cb\u8f6c45":16,"\u6bd4\u5982\u4e0b\u6587\u4e2d\u7684cube\u7c7b":16,"\u6dfb\u52a0entity\u548c\u542f\u52a8\u6e32\u67d3\u5faa\u73af\u7b49\u4ee3\u7801":16,"\u6e32\u67d3html\u9875\u9762\u6750\u8d28":16,"\u7136\u540e\u5b9a\u4e49\u4e86\u82e5\u5e72\u9876\u70b9":16,"\u7136\u540e\u6dfb\u52a0\u5b9a\u4e49\u7684\u7acb\u65b9\u4f53":16,"\u73af\u7b49":16,"\u7403\u4f53":16,"\u7528\u6237\u5904\u7406\u903b\u8f91\u5728\u8fd9\u91cc\u5e94\u8be5\u53ea\u5904\u7406\u4e0e\u6e32\u67d3\u6709\u5173\u7684\u5de5\u4f5c":16,"\u7528\u6237\u8f93\u5165\u6620\u5c04":16,"\u7528\u6237\u8f93\u5165\u88ab\u7ffb\u8bd1\u6210usercmd":16,"\u76ee\u524d\u7248\u672c\u53ea\u8003\u8651\u4e86\u952e\u76d8\u9f20\u6807\u4e8b\u4ef6":16,"\u7a7a\u95f4\u52a8\u753b":16,"\u7ba1\u7406":16,"\u7ebf\u6027\u53d8\u6362\u6709\u4e00\u7c7b\u7279\u6b8a\u7684\u53d8\u6362":16,"\u7ee7\u627fec":16,"\u82e5\u5e72\u4e2asystem\u6765\u5904\u7406\u89c6\u6548\u914d\u7f6e":16,"\u8bbe\u8ba1\u601d\u60f3\u624d\u80fd\u4e0ex":16,"\u8be6\u60c5\u53c2\u89c1exampl":16,"\u8f7d\u5165gltf\u6a21\u578b":16,"\u8fd9\u4e2a\u52a8\u753b\u811a\u672c\u5c06\u4f7fpoints\u7684\u4f4d\u7f6e\u5728\u4e24\u4e2a\u6a21\u578b\u7684\u9876\u70b9\u4f4d\u7f6e\u95f4\u79fb\u52a8":16,"\u8fd9\u4e2a\u52a8\u753b\u811a\u672c\u88ab\u89e3\u91ca\u4e3a\u521b\u5efa\u7b49\u8ddd\u5206\u5e03\u7684\u9876\u70b9":16,"\u8fd9\u6bb5\u9996\u5148\u5b9a\u4e49\u4e86\u4e24\u4e2a\u7528\u4e8e\u505a\u4f4d\u7f6e\u53c2\u7167\u7684\u6a21\u578b":16,"\u903b\u8f91\u5904\u7406\u5e94\u5f53\u63a8\u5230\u540e\u53f0\u5904\u7406":16,"\u9759\u6001\u52a8\u753b\u811a\u672c\u89e3\u91ca":16,"break":[10,19],"case":[0,9,15,19],"catch":19,"class":[3,15,16],"const":[0,15,16],"default":[0,7,13,15,16,18,19],"entity\u5b9a\u4e49":16,"entity\u7531\u82e5\u5e72component\u6784\u6210":16,"examples\u540e\u6709\u66f4\u52a9\u4e8e\u9605\u8bfb\u4e0b\u6587\u5185\u5bb9\u7ec6\u8282":16,"export":[15,16],"final":3,"float":[10,12],"function":[0,3,5,8,19],"gltf\u8f7d\u5165":16,"import":[2,3,15,16,18],"instanceof":3,"int":[9,10],"javascript\u65b9\u5f0f\u5f15\u7528":16,"js\u6e32\u67d3":16,"js\u6e32\u67d3\u5f15\u64ce":16,"new":[0,2,3,12,13,15,16,19],"null":[0,1,3,9,18],"pickid\u4e2d":16,"public":21,"return":[0,8,10,12,19],"rotatxyz\u7b49":16,"short":18,"static":[0,2],"super":[15,16],"switch":19,"system\u4e2d":16,"system\u5b9e\u73b0":16,"throw":19,"transformation\u7684\u4ecb\u7ecd\u8f83\u591a":16,"transformation\u7684\u7ec4\u5408\u53ef\u4ee5\u5f62\u6210\u65b0\u7684\u7a7a\u95f4\u52a8\u753b":16,"true":[0,3,8,9,10,19],"try":[3,5,15,19],"tween\u52a8\u753b\u5904\u7406\u5df2\u7ecf\u5206\u89e3\u5230\u4e0d\u540c\u7684\u5b50\u7cfb\u7edf\u4e2d\u5904\u7406\u5b8c\u6210":16,"tween\u52a8\u753b\u9a71\u52a8":16,"var":[0,3,8,9,15,16,18,19],"visual\u4e3a\u8fd9\u4e00\u7cfb\u5217\u5904\u7406\u63d0\u4f9b\u4e86\u4e00\u4e2a\u57fa\u672c\u7ed3\u6784":16,"visual\u53ef\u4ee5\u7528npm\u7ba1\u7406\u4f9d\u8d56\u5305":16,"visual\u5b9e\u73b0\u4e86\u4e00\u4e2a\u5229\u7528\u6e32\u67d3\u7ed3\u679c\u62fe\u53d6\u573a\u666f\u6a21\u578b\u7684\u5b50\u7cfb\u7edf":16,"visual\u5c01\u88c5\u4e86thre":16,"visual\u5e94\u7528\u7a0b\u5e8f\u57fa\u672c\u7ed3\u6784":[14,17],"visual\u662f\u4e00\u4e2aec":16,"visual\u6b65\u8c03\u4e00\u81f4":16,"visual\u7684\u5e94\u7528\u7a0b\u5e8f\u4e3b\u5165\u53e3\u4e0e\u4ee5\u4e0a\u7a0b\u5e8f\u7247\u6bb5\u4e00\u81f4":16,"visual\u7684\u5e94\u7528\u7a0b\u5e8f\u5305\u62ec\u5982\u4e0b\u90e8\u5206":16,"void":[10,12],"webgl\u6e32\u67d3\u7a0b\u5e8fjavascript\u6846\u67b6":16,"while":[9,19],"xsys\u57fa\u7840\u7c7b":16,But:3,ECS:[0,3,7,13,15,17],For:[0,3,15,19],Not:8,The:[0,3,4,6,8,9,13,15,20],Then:0,There:[3,15,19],Using:12,With:18,_m1:[0,8],_onchangecallback:0,_onerror:19,_v1:[0,8],a_dest:[0,16],a_nois:[0,9,16],a_target:0,about:[0,5,7],abov:[0,15],abs:10,abstratct:3,access:19,accessor:19,accord:[15,18],acctual:0,accumul:8,aco:10,act:9,action:[13,15],actual:3,add:[3,15,16,19],added:[3,15],addent:[0,16],addit:18,addpass:3,addsystem:[15,16],affect:10,affin:[0,7,18],after:[3,15,19],afther:15,all:[0,2,9,13,15,16,18,19],alpha:[7,16,18],alreadi:12,also:[0,12,15,18,19],alwai:[13,18],ani:[0,2,8,15,16],anim:[7,8,9,12,15,16,17,18,19],animationclip:19,animc:7,animi:7,animtyp:[7,9,16],animtype_0:18,anoth:[3,9,13],antonmoek:19,anyth:19,ap_0:19,api:[0,18],app:[14,16,17],appli:[0,8],applic:16,applymatrix4:[0,8],applymatrix:8,applyquaternion:0,ara:8,architectur:[14,17],argument:[0,3,15,19],around:0,arrai:[0,3,8,9,18,19],arraybuff:19,arsen:15,art:15,articl:3,ask:3,assertcomplet:0,asset:[0,7,15,16,17,18,19],assetid:1,assettyp:[0,9,15,16],assign:[0,3,8],assum:[0,2],asynchron:[0,19],attribut:[0,9,12,19],author:[13,19],auto:[0,16],automat:0,avail:17,axi:[0,16],back:[0,3],base:[3,15],basecolorfactor:19,basecolortextur:19,basic:[15,19],becaus:8,been:[0,2,8,9,13,15,19],befor:0,behaviour:9,between:8,bin:[9,19],bit:18,blob:[12,19],bloom:3,blue:12,bool:10,border:10,both:[3,9,17],bounc:0,bound:[9,15,16,18],box:[0,9,15,16,18],browser:21,buffer:[0,13,18],bufferattribut:19,buffergeometri:19,bufferview:19,build:19,built:15,bundl:[3,15],byr0:[0,16,18],bytelength:19,byteoffset:19,bytestrid:19,cach:19,cachekei:19,calcul:[0,12],call:[0,3,15],callback:19,caller:19,camera:[15,16,19],can:[0,2,3,8,9,10,13,15,16,18,19],canv:[0,15,16],canva:18,canvas:0,car:19,car_03:19,car_03_1:19,car_03_1_world:19,car_03_world:19,cartoon:19,caus:3,chang:[0,2,8,9,13,15],check:[3,9],children:19,circl:18,circular:0,citi:[0,9,16,20],citysi:9,clarifi:19,clear:[13,16],client:13,clietxi:13,clone:[0,3],closer:13,cmd:[0,15,16],cmdflag:[13,15,16,18],cmptween:[0,16,18],code:[3,8,9,15],col:10,color:15,com:[0,12,19],combin:[0,7,18],combinatiion:18,combine_affin:[0,18],combinebegin:0,combineupd:0,come:[3,15,17],command:[0,13,15,16],commerci:[15,17],common:7,comp:18,compact:3,completeflag:0,compon:[0,1,3,8,9,13,15,16,17,20],componenttyp:19,compos:[0,5,7],compositon:3,concept:[2,15],condit:[7,15],cone:18,consid:0,consist:9,consol:[0,15,16],consolid:15,constructor:[0,3,8,15,16,19],content:[5,7,11,14,17,20],convent:15,convers:0,convert:[9,13],copi:[0,3,8,9],correct:19,correctli:0,cos:10,could:15,count:19,creat:[0,2,3,8,9,13,15,16,18,19],createdefaultmateri:19,createent:[3,9,15,16,18],createobj3:18,creativ:15,creativecommon:19,crosstar:[0,16],cube0:[9,15,16,18],cube:[9,15,16,18],cubevoxel:18,cubic:0,cumul:0,current:[0,3,15],curv:[18,21],cust:18,custom:18,cycl:2,cylind:18,dai:3,data:[0,15,16,17,19,20],debug:3,decis:2,decompos:[0,8],defaultex:[0,9,16,18],defin:[0,3,8,15,18],definit:[8,20],deg:[0,16],degre:0,delai:0,delta:12,depend:[3,19],dependend:19,deprec:18,design:[0,5,17],det:[0,8],detail:[0,15,17],determin:[0,8],differ:[8,9],dir:10,directli:[3,8],discours:0,discuss:0,dist:18,distanc:[0,9],doc:[2,3,4,6,16,18],doctyp:21,document:[0,9,15,16],dodecahedron:18,dodecahedronbuffergeometri:18,doesn:9,dom:[4,6,18],done:19,dot:10,doublesid:19,draft:21,driver:15,drop:0,dtd:21,duck:0,durat:[0,12,16],dure:2,dynam:19,each:[0,2,8,12,13,15],earli:17,eas:[0,12,16],ecs:[0,4,6,9,15,16,18],edd1c604e1e045a0a2a552ddd9a293e6:19,edit:[9,20],effect:[5,7,9,10,16],effectcompos:3,effecti:15,effectpass:3,elapsedtim:12,elast:[0,16],element:[0,3,8,18],els:[0,3,10,12,15,16,19],emissivefactor:19,emit:0,enabl:3,encod:21,end:0,ent1:[0,16],ent2:[0,16],entir:2,entiti:[0,2,3,9,13,15,16,18],entity1:[0,16],entity2:[0,16],eps:10,equival:0,error:[0,18,19],essenti:[3,10],etc:[3,8,15,18,19],euclideanspac:0,euler:0,event:[0,13],eventdispatch:[0,8],eventu:15,everi:[0,19],everyth:[15,16],exactli:8,exampl:[3,7,8,9,16,20],except:[8,9,19],exist:9,expans:0,expect:[3,17],experiment:17,exponenti:0,exponentialinout:12,ext:3,extend:[3,4,6,12,15,16],extens:[4,6,7,12,17,18,19],extra:19,fade:[0,16],fail:3,fals:[0,3,10,16,18,19],far:[15,16],fbx:19,feel:15,field:[0,8],file:[3,9,18],fileload:19,fill:21,finalcompos:3,finalfrag:3,finalpass:3,finalvert:3,finish:[0,19],first:[0,16],fixm:[16,18],flag:[0,9,13,15,16],flame:[7,11],float32arrai:19,floatbufferview:19,floor:10,flowingpath:3,folder:9,follow:[0,8,15,16,17],followbi:[0,16],form:18,format:[17,20],former:3,found:19,fragcolor:10,fragcoord:10,fragmentshad:3,framework:[7,13,17],free:[15,17,19],fritz:2,from:[0,3,8,9,15,16,18,19],fsquad:3,fullscreenquad:3,fundament:3,further:[8,15],futur:[2,15],gener:[9,18,19],geom:[0,7,15,16,18],geomcurv:18,geometr:8,geometri:[0,6,9,15,16,18],geomtyp:18,get:[8,9,19],getdepend:19,geteffectpass:3,getelementbyid:[0,15,16],gitf:9,github:[12,19],gl_pointsiz:9,gl_posit:12,glow:10,glsl:[9,12],gltf:[9,17,18,20],gltfloader:20,gltfparser:19,goe:[15,16],good:[3,9],gpu:[12,13],gpupick:7,group:[15,16,19],guid:17,had:12,handl:[0,2,7,13,15,16],handler:13,has:[0,9,13,15,18],have:[0,3,9],height:21,heikkinen:12,hellocub:[15,16],help:[3,15],here:[0,3,9,15,16,18],highli:2,hilbert:18,hipr2:16,his:3,hollow:[15,16],home:19,homepag:16,how:[0,9,15],htm:[0,16],html:[0,5,6,7,9,15,16,18],htmltex:[4,18],http:[0,12,16,18,19,21],icosahedron:18,icosahedrongeometri:18,idea:[9,15,17],idx:[0,19],iffal:[2,15,16],ignor:[0,9,16,18],ilmari:12,imag:19,implement:[0,2,8,12,15,16],impos:2,includ:[3,8,15,19],increas:8,increment:0,independ:0,index:[0,15,16,17,18,19],indic:[0,19],inf:16,infin:[0,16],init:[0,16,18],initc:9,initi:[0,1,8],innov:15,inout:[0,16],input:7,insanceof:3,inspir:2,instanc:[3,19],instead:[0,3],intend:15,interact:13,interpol:[0,12],intuit:13,invert:[0,8],invis:[0,16,18],invsi:[0,8],invsx:[0,8],invsz:[0,8],iresolut:10,isobject3d:8,isplai:0,isskinnedmesh:19,issu:[0,5,7],items:19,iter:13,itim:10,its:3,javascript:[15,18],jet:12,jpeg:[0,16,19],jsdoc:17,json:19,jsut:15,kei:[13,15],kept:0,khronosgroup:19,kind:0,knowledg:[3,13,19],larg:2,later:9,lath:18,lathegeometri:18,latter:3,layer:[3,18],layerchannel:18,lead:3,length:[0,8,10,19],lesser:[7,11],let:[0,9],letter:12,lib:3,licens:19,life:2,like:[0,3,15,16,18,19],limit:[2,3],line:[15,18,19],linear:[0,8,12,16],lineseg:19,list:[7,17],load:[9,18,19],loadcamera:19,loader:[7,9,17,19],loaderscop:19,loadgeometri:19,loadmesh:19,loadnod:19,loadscen:19,locat:9,log:[15,16],logcnt:[15,16],logic:15,longer:0,loop:15,low:19,lowpoli:19,m11:[0,8],m12:0,m13:0,m21:0,m22:0,m23:0,m31:0,m32:0,m33:0,magfilt:19,mai:13,main:[12,15],mainimag:10,make:[0,3,8,18,19],manag:[15,19],mani:[2,9],map:19,mart4:18,mask:[3,18],master:[12,19],mat4:[0,8,18],mat:18,materail:[9,18,19],materi:[3,9,13,18,19],math:[0,8,15],mathemat:8,mathjax:0,matrix4:[0,8],matrix:[0,8,19],matrixautoupd:[0,8],matrixtoquaternion:0,max:[10,19],mdn:21,mean:[9,19],memberof:18,memo:17,memorandum:17,mesh:[3,7,8,15,16,18,19],mesh_:19,meshdef:19,meshindex:19,messag:13,met:15,metallicfactor:19,method:[0,3],million:12,min:[10,18,19],minfilt:19,mix:[0,10],mocha:3,mode:19,model:[0,9,16,18,19],modelseq:[0,9,16],modelviewmatrix:12,modif:[2,19],modifi:[8,19],modleseq:7,modul:[5,7,17],more:[2,13,15],morph:[0,16,18],morphinganim:20,morphswitch:[0,16],mous:13,move:[0,15,18],mtype:[7,16],mul:0,multipl:19,must:[13,15,18,19],mvc:[7,17],name:[0,9,15,16,18,19],namespac:[15,16],ndoe:19,need:[0,2,8,12,13],neg:[0,8],never:0,newposit:12,node:[9,20],nodedef:19,nodeindex:19,nodemap:19,nois:[0,9,10],noisi:12,none:18,normal:[10,19],note:[3,18,19],noth:15,now:[15,16,17],npm:[3,15,16,18],number:[0,8,19],obe3:9,obj3:[0,3,7,13,15,16,17],obj3rotaxi:16,obj3typ:[0,9,15,16],obj:18,object3d:[0,3,8,9,18,19],object:[0,2,3,8,9,13,15,16,19],occlud:18,octahedron:18,octahedronbuffergeometri:18,odi:19,offici:17,offset:19,onafterrend:8,onbeforerend:8,oncomplet:0,one:[0,8,9],onerror:19,onli:[0,3,8,9,15,17],onload:19,onprogress:19,opac:[0,16],open:[15,16,17],opengl:18,oper:[0,8,16],option:[3,15,16,19],orbit:7,org:[0,3,10,18,19,21],orient:19,originalmateri:19,orthocclud:3,orthogon:3,osg_scen:19,other:[0,2,19],out:[10,19],pack:[3,19],packag:[3,15,19],page:[0,17,19],para:[7,16,18,19],param:19,paramet:[8,9,15,16],pars:[8,19],parser:19,part:[0,8,19],particl:[9,12,16],pass:[5,7,15],path:[9,15,18,19,21],patheffect:3,pattern:[5,7,13,15],pbrmetallicrough:19,pend:19,person:15,phase:17,pick:[12,13],pickabl:13,picktick:16,pivot:0,plain:[15,18],plane:[9,18],plausibl:3,plug:3,png:[0,15,16,18],poings:0,point:[0,12,16,18],poli:19,polyhedron:18,polyhedronbuffergeometri:18,posit:[0,8,9,12,15,19],post:[5,7],postprocess:3,pow:[10,12],premultipli:[0,8],present:3,prevent:13,previou:[0,16],primer:21,primit:19,probabl:2,problem:3,process:[0,2,8,13,19],program:15,progress:12,project:17,projectionmatrix:12,promis:19,properti:[0,8,9,18],prototyp:[0,8,19],proven:18,provid:[0,5],pure:[0,15],push:19,quadrat:0,quartic:0,quaternion:[0,8],queri:[7,13,15,16],question:3,quick:15,quintic:0,radian:8,ram:[0,9],randomnum:12,randomparticl:[0,16,18],rang:9,ratat:8,raymarch:[7,11],rbf:16,read:0,readm:[3,15,16,19],real:17,reason:2,rec:21,record:[0,17],refer:[0,7,10,17],referenc:[0,9,18],reflect:[8,15,18],refpoint:[0,16,18],renam:18,render:[2,3,4,6,7,13,15,16,17,18],rendertarget2:3,rendertoscreen:3,reorgan:0,repeat:16,repeatedli:[0,15],report:19,repres:[8,9,15],represent:[15,20],request:19,requir:15,resourcepath:19,respons:13,result:[0,3,18,19],rgb2x2:[15,16],ring:18,ringgeometri:18,rootnod:19,rot:16,rotat:[0,8,18,19],rotatex:[7,16],rotaxi:7,roughnessfactor:19,round:15,runtim:13,same:[0,3,9,18],sampl:[7,17,20],sampler:19,save:3,scale:[0,8,9,18],scene:[2,3,7,9,10,13,15,17,20],schedul:0,schema:0,scope:19,script:[7,9,15,16,18],seam:8,search:17,second:[0,16],see:[0,3,8,9,12,15,16,18,19],senario:0,septemb:21,sequenc:[0,8],seqx:[0,16],serial:3,set:[0,8,13],setfromrotationmatrix:[0,8],setup:3,sever:3,shader:[0,3,7,9,12,17,18],shaderflag:[0,9,16,18],shadermateri:[3,9],shaderpass:3,shadertoi:[7,11],shape:[9,18],shapegeometri:18,share:3,shear:[8,18],should:[3,15,16],shouldn:[0,3,8],show:[3,15,16],significantli:10,similar:[3,8,18],simpl:[12,15],simplifi:[2,19],sin:10,singl:9,sinusoid:0,size:9,sketchfab:19,skinnedmesh:19,small:19,snapshot:0,snippet:3,some:[3,5,15,17,18,19],someth:12,sourc:[3,8,17,19],space:15,spark1:[0,16],special:0,specif:19,specifi:[9,15,19],sphere:[10,18],spr:10,sprite:18,sqrt:0,src:[12,18],stabl:0,stack:19,stand:[0,8,15],standalon:21,star:[7,11],start:[0,15,16],startupd:[0,9,15,16],startwith:[0,16],statckoverflow:0,state:15,step:[0,3,8],still:[13,17],strict:0,string:[9,19],stroke:21,stub:2,style:0,subclass:[3,15,16],subsequ:13,subsystem:[2,3,13],support:[0,3,4,6,8,17,18],suppos:[0,3],svg10:21,svg:[5,7,9,17,18,20],sys:[3,4,6,18],system:[0,3,9,13,16,17,20],take:0,taken:19,tangent:19,target:[0,3,8,16,18,19],targetposit:12,tdiffus:3,test:[0,3,9,15,16,18],testpoint:18,tetrahedron:18,tetrahedrongeometri:18,tex:[0,16,18],tex_alpha:9,texcoord:19,texcoord_0:19,texeffect:3,texscen:3,text:18,textur:[0,3,5,7,9,16,18,19],textureid:3,than:0,thei:13,themselv:3,thi:[0,2,3,8,9,12,13,15,16,18,19],thing:19,thought:15,three:[0,5,7,8,9,12,13,15,16,18,20],threej:[3,18],thrender:[0,1,3,7,16,18,20],throb:[7,11],tick:[15,16],time:[0,12],titl:19,todai:21,todo:[3,4,6,8,9,16,18],togeth:[9,15],toolkit:17,tor:0,toru:18,trace:0,transform:[0,7,9,18],translat:[8,18],transpil:[0,15,16],tree:19,tri:12,triangl:19,trigger:[0,3,15,16],tutori:[19,21],twee:18,tween:[0,8,9,12,15,16],tweenj:12,two:0,type:[0,9,18,19],u_alpha:[0,16],u_dist:0,u_morph0:16,u_morph1:16,u_morph2:16,u_morph:[0,16],u_tex:[0,9,16],u_vert_tran:16,u_verts_tran:[7,9,16,18],undefin:[0,1,3,9,15,16,18,19],unexpect:3,uniform:[3,7,9,12,16,18],uniformsutil:3,unknown:19,unnecessari:[0,13],unscal:0,unus:18,updat:[0,2,3,8,13,15,16,19],updatematrix:[0,8],updaterang:19,upgrad:0,upper:0,uri:19,url:19,usag:[9,18,19],use:[0,3,9,15,18],used:[3,8,9,13,15,18],useful:[15,16],user:[0,8,13,15,16,18],usercmd:[13,15,16,18],userdata:19,using:[0,3,8,9,15,16,18],usual:[9,18],utf:21,util:[4,5,6],valu:[0,3,9,12],vari:12,variabl:0,vec2:10,vec3:[8,10,12,19],vec4:[10,12],vector3:0,verifi:[2,15,17],version:[0,19,21],vert_scal:[0,9,16],vertex:[9,12],vertexshad:3,vertic:[0,9,16,18,19],vertix:0,via:[3,8,19],view:[7,15,17],viewbox:21,visaul:15,visibl:[0,9,13,16],vision:19,visual:[0,1,2,5,7,20],visualtyp:0,voxel:[9,16,18],vtype:[0,7,15,16,18],w3c:21,wai:[2,3],web:13,webclient:13,webgl:[9,15,18],webgl_buffergeometry_morphtarget:18,webgl_const:19,webpack:[15,16,18],websocket:13,well:[15,16],what:[0,8],when:[0,2,3,9,15,19],where:[0,3,8,9,15],which:[0,3,9,15,19],width:21,wikipedia:8,wile:8,window:[0,15,16],wirefram:[9,18],wish:[7,17],won:2,work:[0,9,21],world:15,world_ap:19,world_ap_basecolor:[0,16],worri:0,worth:3,would:15,wrap:[0,9,19],wrapt:19,wrong:18,www:[0,21],x_y:8,x_z:8,xcompon:[0,15,16,18],xeas:[0,16],xec:[0,15,16],xml:21,xmln:21,xob:[4,6],xscene:[15,16],xsy:[3,15,16],xttweener:8,xtweener:[0,8,18,20],xview:[13,16],xworld:[0,3,9,13],xyz:10,y_x:8,y_z:8,yep:0,you:[0,15,16],z_x:8,z_y:8},titles:["Animizers","Assets Loader","ECS Framework","Post Effects","HTML Texture","Extensions","SVG Texture","Design Memo","Obj3 &amp; Scene","Visual &amp; Renderers","Shadertoy Flame","Shader Samples","Wish List","MVC View","X-visual Guide","X-visual App Architecture","X-visual\u5e94\u7528\u7a0b\u5e8f\u57fa\u672c\u7ed3\u6784","Welcome to x-visual\u2019s documentation!","Components","GLTF Format","Reference","SVG","Systems"],titleterms:{"\u4eff\u5c04\u53d8\u6362":16,"\u5e94\u7528\u7a0b\u5e8f\u57fa\u672c\u7ed3\u6784":16,"\u5f15\u7528x":16,"\u6846\u67b6\u57fa\u672c\u529f\u80fd\u8303\u56f4":16,"\u6a21\u578b\u7a7a\u95f4\u5c5e\u6027\u52a8\u753b":16,"\u793a\u4f8b":16,"const":18,"default":[1,9],"function":15,"particles\u52a8\u753b":16,"uniform\u52a8\u753b":16,"visual\u5e94\u7528\u7a0b\u5e8f\u57fa\u672c\u7ed3\u6784":16,ECS:2,For:9,The:19,about:[3,15],affin:[8,16],alpha:0,anim:0,animc:[0,18],animi:0,animtyp:[0,18],api:15,app:15,applic:15,architectur:15,asset:[1,9],assettyp:18,buffer:19,citi:19,combin:8,common:[0,15],compon:18,compos:3,condit:2,data:21,definit:18,design:[3,7],document:17,edit:19,effect:3,exampl:[0,15,18,19],expos:19,extens:[2,5],flame:10,format:19,framework:[2,15],geom:9,geometri:19,gltf:19,gltfloader:19,gpupick:13,guid:14,handl:9,hello:[15,16],html:4,indic:17,input:13,issu:3,lesser:10,list:12,loader:1,memo:7,mesh:[0,9],modleseq:0,modul:3,morphinganim:22,mtype:0,mvc:13,next:15,node:19,obj3:[8,9,18],obj3typ:18,orbit:0,para:[0,9],pass:3,pattern:3,point:9,post:3,practic:15,queri:2,raw:19,raymarch:10,refer:[8,19,20,21],refpoint:9,render:9,represent:19,rotatex:0,rotaxi:0,sampl:[11,21],scene:[8,19],script:0,shader:[11,16],shadertoi:10,shadertyp:18,star:10,startup:15,step:15,svg:[6,21],system:[15,22],tabl:17,textur:[1,4,6],three:[3,19],thrender:[9,22],throb:10,transform:[8,16],u_verts_tran:0,uniform:0,view:13,visual:[3,9,14,15,16,17,18,19],vtype:9,welcom:17,wish:12,xtweener:22,xworld:[15,16]}})