//menu
let hamburgerMenu=document.querySelector(".nav i");
let menu=document.querySelector(".mega-menu");
hamburgerMenu.addEventListener('click',()=>{
    menu.classList.toggle('active');
    hamburgerMenu.classList.toggle('fa-times');

});
//up
let span = document.querySelector(".up");
window.onscroll=function(){
    if(scrollY>=1000){
        span.classList.add('show');
    }else{
        span.classList.remove('show');
    }
}
span.onclick=function(){
window.scrollTo({
top:0,
behavior:"smooth",
});
}
//language
let langList=document.querySelector('.lang');
let link=document.querySelectorAll('.lang li');
let listeOne=document.querySelector('.menu li:nth-child(1) a');
let listeTwo=document.querySelector('.menu li:nth-child(2) a');
let listeThree=document.querySelector('.menu li:nth-child(3) a');
let listeFour=document.querySelector('.menu li:nth-child(4) a');
let title=document.querySelector('.header h1');
let button=document.querySelector('button a');
let titleM2=document.querySelector('.about-us .main-title');
let titleS2=document.querySelector('.about-us .seconde-title');
let p=document.querySelector('.about-us p');
let titleM3=document.querySelector('.services .main-title');
let titleS3=document.querySelector('.services .seconde-title');
let titleM4=document.querySelector('.location .main-title');
let titleS4=document.querySelector('.location .seconde-title');
let titleM5=document.querySelector('.why-us .main-title');
let titleS5=document.querySelector('.why-us .seconde-title');
let titleS6=document.querySelector('.contact-us .main-title');

//choose
let choose=document.querySelector('.choos span');
let choo=document.querySelector('.choos');


link.forEach(el =>{
el.addEventListener('click',()=>{
langList.querySelector('.actives').classList.remove('actives');
el.classList.add('actives');
const attr=el.getAttribute('language');
if(attr==='fr'){
    location.reload();

}else{
//menu
if(attr==='ar'){
    choo.style.marginTop='25px'    
    document.querySelectorAll('.services li, .location li').forEach(li=>{
        li.style.textAlign='right';

});
document.querySelectorAll('.adresse p').forEach(p=>{
    p.style.textAlign='right';
});

}else if(attr==='en'){
    document.querySelectorAll('.services li, .location li').forEach(li=>{
        li.style.textAlign='left';

});
document.querySelectorAll('.adresse p').forEach(p=>{
    p.style.textAlign='left';
});

}


listeOne.textContent=data[attr].liste1.one;
listeTwo.textContent=data[attr].liste1.two;
listeThree.textContent=data[attr].liste1.three;
listeFour.textContent=data[attr].liste1.four;
//header
title.textContent=data[attr].title1;
//button
button.innerHTML=data[attr].button;
//title2
titleM2.textContent=data[attr].titlem2;
titleS2.textContent=data[attr].titles2;
//p
p.textContent=data[attr].p1;
//services
titleS3.textContent=data[attr].titles3;
titleM3.textContent=data[attr].titlem3;
titleS4.textContent=data[attr].titles4;
titleM4.textContent=data[attr].titlem4;
titleS5.textContent=data[attr].titles5;
titleM5.textContent=data[attr].titlem5;
choose.textContent=data[attr].choos;
//services liste
l1.textContent=data[attr].l1;
l2.textContent=data[attr].l2;
l3.textContent=data[attr].l3;
l4.textContent=data[attr].l4;
l5.textContent=data[attr].l5;
//service de location
t1.textContent=data[attr].t1;
t2.textContent=data[attr].t2;
t3.textContent=data[attr].t3;
//construction
c1.textContent=data[attr].c1;
c2.textContent=data[attr].c2;
c3.textContent=data[attr].c3;
c4.textContent=data[attr].c4;
c5.textContent=data[attr].c5;
c6.textContent=data[attr].c6;
c7.textContent=data[attr].c7;
//public
d1.textContent=data[attr].d1;
d2.textContent=data[attr].d2;
d3.textContent=data[attr].d3;
d4.textContent=data[attr].d4;
d5.textContent=data[attr].d5;
d6.textContent=data[attr].d6;
d7.textContent=data[attr].d7;
//fornnutur
e1.textContent=data[attr].e1;
e2.textContent=data[attr].e2;
e3.textContent=data[attr].e3;
//cars
f1.textContent=data[attr].f1;
f2.textContent=data[attr].f2;
f3.textContent=data[attr].f3;
//engin
g1.textContent=data[attr].g1;
g2.textContent=data[attr].g2;
g3.textContent=data[attr].g3;
g4.textContent=data[attr].g4;
g5.textContent=data[attr].g5;
g6.textContent=data[attr].g6;
g7.textContent=data[attr].g7;
g8.textContent=data[attr].g8;
g9.textContent=data[attr].g9;
//hilux
h1.textContent=data[attr].h1;
h2.textContent=data[attr].h2;
h3.textContent=data[attr].h3;
//camion
i1.textContent=data[attr].i1;
i2.textContent=data[attr].i2;
i3.textContent=data[attr].i3;
i4.textContent=data[attr].i5;
i5.textContent=data[attr].i5;
i6.textContent=data[attr].i6;
//network
n1.textContent=data[attr].n1;
n2.textContent=data[attr].n2;
n3.textContent=data[attr].n3;
n4.textContent=data[attr].n5;
n5.textContent=data[attr].n5;
n6.textContent=data[attr].n6;
n7.textContent=data[attr].n7;
n8.textContent=data[attr].n8;
n9.textContent=data[attr].n9;
n10.textContent=data[attr].n10;
n11.textContent=data[attr].n11;
n12.textContent=data[attr].n12;
//why
reason1.textContent=data[attr].reason1;
reason2.textContent=data[attr].reason2;
reason3.textContent=data[attr].reason3;
}
//conntact
titleS6.textContent=data[attr].contact;
add1.textContent=data[attr].add1
add2.textContent=data[attr].add2
});
});

//services variable
let l1=document.querySelector('.services .box:nth-child(1) h3');
let l2=document.querySelector('.services .box:nth-child(2) h3');
let l3=document.querySelector('.services .box:nth-child(3) h3');
let l4=document.querySelector('.services .box:nth-child(4) h3');
let l5=document.querySelector('.services .box:nth-child(5) h3');

//loc
let f1=document.querySelector('.location .box:nth-child(1) h3');
let f2=document.querySelector('.location .box:nth-child(2) h3');
let f3=document.querySelector('.location .box:nth-child(3) h3');
//les services de location
let t1=document.querySelector('.services .box:nth-child(1) li:nth-child(1)');
let t2=document.querySelector('.services .box:nth-child(1) li:nth-child(2)');
let t3=document.querySelector('.services .box:nth-child(1) li:nth-child(3)');
//construction attr
let c1=document.querySelector('.services .box:nth-child(2) li:nth-child(1)');
let c2=document.querySelector('.services .box:nth-child(2) li:nth-child(2)');
let c3=document.querySelector('.services .box:nth-child(2) li:nth-child(3)');
let c4=document.querySelector('.services .box:nth-child(2) li:nth-child(4)');
let c5=document.querySelector('.services .box:nth-child(2) li:nth-child(5)');
let c6=document.querySelector('.services .box:nth-child(2) li:nth-child(6)');
let c7=document.querySelector('.services .box:nth-child(2) li:nth-child(7)');
//public
let d1=document.querySelector('.services .box:nth-child(3) li:nth-child(1)');
let d2=document.querySelector('.services .box:nth-child(3) li:nth-child(2)');
let d3=document.querySelector('.services .box:nth-child(3) li:nth-child(3)');
let d4=document.querySelector('.services .box:nth-child(3) li:nth-child(4)');
let d5=document.querySelector('.services .box:nth-child(3) li:nth-child(5)');
let d6=document.querySelector('.services .box:nth-child(3) li:nth-child(6)');
let d7=document.querySelector('.services .box:nth-child(3) li:nth-child(7)');
//fornutur
let e1=document.querySelector('.services .box:nth-child(4) li:nth-child(1)');
let e2=document.querySelector('.services .box:nth-child(4) li:nth-child(2)');
let e3=document.querySelector('.services .box:nth-child(4) li:nth-child(3)');
//netwotk
let n1=document.querySelector('.services .box:nth-child(5) li:nth-child(1)');
let n2=document.querySelector('.services .box:nth-child(5) li:nth-child(2)');
let n3=document.querySelector('.services .box:nth-child(5) li:nth-child(3)');
let n4=document.querySelector('.services .box:nth-child(5) li:nth-child(4)');
let n5=document.querySelector('.services .box:nth-child(5) li:nth-child(5)');
let n6=document.querySelector('.services .box:nth-child(5) li:nth-child(6)');
let n7=document.querySelector('.services .box:nth-child(5) li:nth-child(7)');
let n8=document.querySelector('.services .box:nth-child(5) li:nth-child(8)');
let n9=document.querySelector('.services .box:nth-child(5) li:nth-child(9)');
let n10=document.querySelector('.services .box:nth-child(5) li:nth-child(10)');
let n11=document.querySelector('.services .box:nth-child(5) li:nth-child(11)');
let n12=document.querySelector('.services .box:nth-child(5) li:nth-child(12)');

//engin
let g1=document.querySelector('.location .box:nth-child(1) li:nth-child(1)');
let g2=document.querySelector('.location .box:nth-child(1) li:nth-child(2)');
let g3=document.querySelector('.location .box:nth-child(1) li:nth-child(3)');
let g4=document.querySelector('.location .box:nth-child(1) li:nth-child(4)');
let g5=document.querySelector('.location .box:nth-child(1) li:nth-child(5)');
let g6=document.querySelector('.location .box:nth-child(1) li:nth-child(6)');
let g7=document.querySelector('.location .box:nth-child(1) li:nth-child(7)');
let g8=document.querySelector('.location .box:nth-child(1) li:nth-child(8)');
let g9=document.querySelector('.location .box:nth-child(1) li:nth-child(9)');
//hilux
let h1=document.querySelector('.location .box:nth-child(2) li:nth-child(1)');
let h2=document.querySelector('.location .box:nth-child(2) li:nth-child(2)');
let h3=document.querySelector('.location .box:nth-child(2) li:nth-child(3)');
//camion
let i1=document.querySelector('.location .box:nth-child(3) li:nth-child(1)');
let i2=document.querySelector('.location .box:nth-child(3) li:nth-child(2)');
let i3=document.querySelector('.location .box:nth-child(3) li:nth-child(3)');
let i4=document.querySelector('.location .box:nth-child(3) li:nth-child(4)');
let i5=document.querySelector('.location .box:nth-child(3) li:nth-child(5)');
let i6=document.querySelector('.location .box:nth-child(3) li:nth-child(6)');
//why us
let reason1=document.querySelector('.why-us .list li:nth-child(1)');
let reason2=document.querySelector('.why-us .list li:nth-child(2)');
let reason3=document.querySelector('.why-us .list li:nth-child(3)');
//contact
let add1=document.querySelector('.adresse p:nth-child(1)');
let add2=document.querySelector('.adresse p:nth-child(2)');

//data
var data={
    "ar":{
        "liste1":{"one":"من نحن","two":"خدماتنا","three":"لماذا تخار شركتنا","four":"اتصل بنا"},
        "title1":"شركة بن موسى للخدمات",
        "button":"اتصل بنا",
        "titlem2":"تعرف على شركتنا",
        "titles2":"من نحن",
        "p1":"نتشرف بأن نقدم لكم شركة بن موسى للخدمات  آملين أن تستفيدوا بخدمات جيدة وأعمال متنوعة. تقدم لك شركتنا خدمة  تأجير المركبات مع أو بدون سائقين مؤهلين ومنضبطين ، وتأجير المواد والآلات والمعدات الزراعية ، المواد والأدوات للبناء والهيدروليك والأشغال العامة",
        "titles3":"الخدمات",
        "titlem3":"التي نقدمها",
        "l1":"كراء",
        "l2":"خدمات البناء",
        "l3":"الاشغال العامة",
        "l4":"تجهيزات",
        "l5":"تركيب أجهزة الاتصال الداخلي على الوجهين",
        "t1":"  كراء سيارات مع السائق وبدون سائق",
        "t2":"كراء معدات زراعية",
        "t3":" كراء معدات البناء والاشغال العامة",
        "c1":"اعمال الطلاء الصناعي و طلاء المنازل",
        "c2":"سفع رملي واعمال متنوعة",
        "c3":"اعمال الكهرباء",
        "c4":"تركيب محطات التبريد والتهوية",
        "c5":"اعمال الهدم والاعمال الريفية",
        "c6":"عمل هياكل معدنية",
        "c7":"اعمال السباكة",
        "d1":"الاشغال الحضرية واعمال التنظيف العامة",
        "d2":"اعمال الحراجة واستغلال الغابات",
        "d3":"ترميم المباني",
        "d4":"دراسة وانشاء محطات الكهرباء ومحطات الاتصال",
        "d5":"هندسة المناظر الطبيعية",
        "d6":"تركيب شبكات ومراكز كهربائية",
        "d7":"انشاء مرافق عامة",
        "e1":"خدمة التاثيث و تجهيزات المكتب",
        "e2":"توفير معدات و لوازم الاعلام الالي",
        "e3":"توفير معدات و ملابس رياضية وتنظيم فعاليات اجتماعية",
        "titlem4":"التي نقدمها",
        "titles4":"خدمة الكراء",
        "f1":"مركبات و معدات التشييد و البناء",
        "f2":"مركبات سياحية و حافلات صغيرة",
        "f3":"شاحنات النقل",
        "g1":"حفارة",
        "g2":"جرافة",
        "g3":"شاحنة تحميل",
        "g4":"ممهدات طرق",
        "g5":"الة السحق",
        "g6":"الة حفر و شحن",
        "g7":"رافعة",
        "g8":"رافعة شوكية",
        "g9":"(250, 450, 800, 900, 1100) مولدات الكهرباء",
        "n1":"إنشاء أبراج نقل للاتصالات",
        "n2":"تركيب معدات الاتصال الداخلي",
        "n3":"تركيب مقسم هاتفي",
        "n4":"تركيب الألياف الضوئية للاتصالات",
        "n5":"تركيب خطوط الهاتف",
        "n6":" تركيب معدات الإرسال والاستقبال اللاسلكي",
        "n7":"تركيب شبكات البيانات",
        "n8":" كابلات كمبيوتر (LAN) تركيب شبكات محلية",
        "n9":"(النظام العالمي للاتصالات المتنقلة) GSM  تركيب محطات ",
        "n10":"تركيب أنظمة الهاتف الخاصة والتجارية والصناعي ",
        "n11":"تركيب تلفزيون الكابل",
        "n12":"التركيب المؤقت لخطوط الهاتف للمعارض والمعارض",
        "h1":"شاحنة صغيرة (25-30)",
        "h2":"تويوتا(9 مقاعد) 4×4",
        "h3":"تويوتا هايلوکس",
        "i1":"شاحنة 20ت",
        "i2":"نقل المركبات 54ت",
        "i3":"شاحنة تفريغ (6x6, 6x4, 4x2)",
        "i4":"شاحنة خزان المياه (6x6, 6x4)",
        "i5":"شاحنة تبريد",
        "i6":"27m3 خزان ديزل ",
        "titlem5":"تختارنا",
        "titles5":"لماذا",
        "choos":"بن موسى للخدمات",
        "reason1":"في خدمتكم من اجل كشف مجاني",
        "reason2":"الحل المثالي لمشاكلكم التقنية و رمز لسرعة تقديم الخدمات",
        "reason3":"نحن في خدمتك للاستشارة و التوجيه في ظل احسن الشروط من حيث الجودة والسعر",
        "contact":"اتصل بنا",
        "add1":"حي المنظر الجميل الواد",
        "add2":"المنطقة الصناعية حاسي مسعود.الجزائر"
    },
    "en":{
        "liste1":{"one":"about us","two":"services","three":"why us","four":"contact us"},
        "title1":"BENMOUSSA SERVICES COMPANY",
        "button":"contact us",
        "titlem2":"know our company",
        "titles2":"about us",
        "p1":" We have the honor to present to you COMPANY BENMOUSSA SERVICES hoping that you work with our good services and various works service.COMPANY BENMOUSSA SERVICES offers you the car rental service with or without a qualified and well-disciplined drivers, the rental of materials, machinery and agricultural equipment, the rental of materials and tools for construction and hydraulics and public works.",
        "titles3":"SERVICES",
        "titlem3":"that we provid",
        "l1":"rent",
        "l2":"construction services",
        "l3":"public works",
        "l4":"supplying",
        "l5":"Installation of duplex intercom equipment",
        "t1":"car rental with and without driver",
        "t2":"rental of agriculture equipment",
        "t3":" rental of construction equipment and public work tools",
        "c1":"industrial paint",
        "c2":"sandblasting and various works",
        "c3":"electric work",
        "c4":"Installation of cooling station Installation of cooling station system",
        "c5":"demolition work and rural work",
        "c6":"metallic construction",
        "c7":"plumbing work",
        "d1":"Urban works and public cleaning",
        "d2":"Forestry work and logging",
        "d3":"restoration of buildings",
        "d4":"Study and realization of electrical and telephone stations",
        "d5":"development of greenspaces",
        "d6":"Installation of electrical and telephone networks and centres",
        "d7":"Installation of living bases",
        "e1":"furniture supply and  office equipment.",
        "e2":"Supply of computer equipment",
        "e3":"Supply of sport equipment and clothing ,social game",
        "titlem4":"That We Provid",
        "titles4":"rental services",
        "f1":"Civil engineering machinery and equipment",
        "f2":"Tourist Vehicles and Minis Buses",
        "f3":"trucks",
        "g1":"Backhoe Loader",
        "g2":" Bulldozer",
        "g3":"Loader",
        "g4":"Grader",
        "g5":" Compactor",
        "g6":"retro Charger",
        "g7":"Crane (30T, 40T, 60T)",
        "g8":"Forklift (6T, 10T, 12T)",
        "g9":"power generators (250, 450, 800, 900, 1100)",
        "n1":"Construction of transmission towers for telecommunications",
        "n2":"Installation of intercommunication equipment",
        "n3":"Installation de central téléphonique",
        "n4":"Installation de fibres optiques pour télécommunications",
        "n5":"Installation of telephone lines",
        "n6":" Installation of radio transmission and reception equipment",
        "n7":"Installation of data networks",
        "n8":"Installation of local area networks (LAN), computer cabling)",
        "n9":"Installation of GSM (Global System for Mobile Communications) base stations",
        "n10":"Installation de systèmes de téléphonie privée, commerciale et industrielle",
        "n11":"Cable television installation",
        "n12":"Temporary installation of telephone lines for fairs and exhibitions",
        "h1":"mini-bus (25-30)",
        "h2":"Toyota 4x4(9)",
        "h3":"Toyota 4x4 Hilux",
        "i1":"truck sr 20t",
        "i2":"heavy machine carrier",
        "i3":"dump truck (6x6, 6x4, 4x2)",
        "i4":"water tank trucks (6x6, 6x4)",
        "i5":"freezer trailer",
        "i6":"oil tank 27m3 ",
        "titlem5":"choose us",
        "titles5":"why",
        "choos":"BENMOUSSA SERVICES",
        "reason1":"is at your service for free quotes",
        "reason2":"a solution for your technical problems and a symbol of fast work",
        "reason3":"is at your service to advise and guide you ,with the best condition of delivery times quality, price",
        "contact":"contact us",
        "add1":"-belle vue street ELOUED",
        "add2":"-Industrial Zone HMD,HASSI MESSOUD.ALGERIA  "

    }
}
