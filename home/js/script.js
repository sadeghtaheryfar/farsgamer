//  script btn ..........................................................

var togglebtns = document.querySelectorAll(".toggle-btn");
var truebtntoggle = document.querySelectorAll(".true-btn-toggle");
var falsebtntoggle = document.querySelectorAll(".false-btn-toggle");

togglebtns.forEach((togglebtn,index) => {
    togglebtn.addEventListener('click', function handleClick(event) {
        truebtntoggle[index].classList.toggle("hide-item");
        falsebtntoggle[index].classList.toggle("hide-item");
    });
});

//  script range ......................................................

const rangeInput2 = document.querySelectorAll(".range-input2 input"),
priceInput2 = document.querySelectorAll(".price-input2 h2"),
range2 = document.querySelector(".slider2 .progress2");
if(rangeInput2.length != 0)
{
    let priceGap2 = 1000;
    range2.style.right = 0;
    range2.style.left = 0;
    priceInput2.forEach(input =>{
        input.addEventListener("input", e =>{
            let minPrice = parseInt(priceInput2[0].innerHTML),
            maxPrice = parseInt(priceInput2[1].innerHTML);
            
            if((maxPrice - minPrice >= priceGap2) && maxPrice <= rangeInput2[1].max){
                if(e.target.className === "input-min2"){
                    rangeInput2[0].value = minPrice;
                    range2.style.left = ((minPrice / rangeInput2[0].max) * 100) + "%";
                }else{
                    rangeInput2[1].value = maxPrice;
                    range2.style.right = 100 - (maxPrice / rangeInput2[1].max) * 100 + "%";
                }
            }
        });
    });
    rangeInput2.forEach(input =>{
        input.addEventListener("input", e =>{
            let minVal = parseInt(rangeInput2[0].value),
            maxVal = parseInt(rangeInput2[1].value);
            if((maxVal - minVal) < priceGap2){
                if(e.target.className === "range-min2"){
                    rangeInput2[0].value = maxVal - priceGap2;
                }else{
                    rangeInput2[1].value = minVal + priceGap2;
                }
            }else{
                priceInput2[0].innerHTML = minVal;
                priceInput2[1].innerHTML = maxVal;
                range2.style.left = ((minVal / rangeInput2[0].max) * 100) + "%";
                range2.style.right = 100 - (maxVal / rangeInput2[1].max) * 100 + "%";
            }
        });
    });
}

//  open box notif ......................................................

var iconnotif = document.getElementById("icon-notif");
var boxnotif = document.getElementById("box-show-notif");
var boxnotifclo = document.getElementById("box-notif-clothe");
var boxnotifclo = document.getElementById("box-notif-clothe");
var  txtmessagenotifone = document.getElementById("header-one-notif");
var  txtmessagenotiftwo = document.getElementById("header-two-notif");
var  txtmessagenotifthree = document.getElementById("header-three-notif");
var  txtmessagenotiffour = document.getElementById("header-four-notif");
var  boxnotifmobile = document.getElementById("box-notif-mobile");
var  messagenotifpersonal = document.getElementById("message-notif-personal");
var  messagenotifgeneral = document.getElementById("message-notif-general");
var  messagenotifpersonalM = document.getElementById("message-notif-personal-mobile");
var  messagenotifgeneralM = document.getElementById("message-notif-general-mobile");


var openmenu = document.querySelectorAll(".open-menu");

openmenu.forEach(openmenu => {
    openmenu.addEventListener('mouseover', function handleClick(event) {
        boxnotif.classList.remove("hide-item");
        iconnotif.classList.add("nav-right-icon-active");
    });
});


var overmenu = document.querySelectorAll(".over-menu");

overmenu.forEach(overmenu => {
    overmenu.addEventListener('mouseover', function handleClick(event) {
        boxnotifclo.classList.remove("hide-item");
    });
});


var exitmenu = document.querySelectorAll(".exit-menu");

exitmenu.forEach(exitmenu => {
    exitmenu.addEventListener('mouseover', function handleClick(event) {
        boxnotifclo.classList.add("hide-item");
        boxnotif.classList.add("hide-item");
        iconnotif.classList.remove("nav-right-icon-active");
    });
});


var clothemenu = document.querySelectorAll(".clothe-menu");

clothemenu.forEach(clothemenu => {
    clothemenu.addEventListener('click', function handleClick(event) {
        boxnotifclo.classList.add("hide-item");
        boxnotif.classList.add("hide-item");
        iconnotif.classList.remove("nav-right-icon-active");
    });
});


var personal = document.querySelectorAll(".personal");

personal.forEach(personal => {
    personal.addEventListener('click', function handleClick(event) {
        txtmessagenotifone.classList.add("item-notif-active");
        txtmessagenotiftwo.classList.remove("item-notif-active");
        messagenotifpersonal.classList.remove("hide-item");
        messagenotifgeneral.classList.add("hide-item");
    });
});


var general = document.querySelectorAll(".general");

general.forEach(general => {
    general.addEventListener('click', function handleClick(event) {
        txtmessagenotifone.classList.remove("item-notif-active");
        txtmessagenotiftwo.classList.add("item-notif-active");
        messagenotifpersonal.classList.add("hide-item");
        messagenotifgeneral.classList.remove("hide-item");
    });
});



var personalM = document.querySelectorAll(".personal-mobile");

personalM.forEach(personalM => {
    personalM.addEventListener('click', function handleClick(event) {
        txtmessagenotifthree.classList.add("item-notif-active");
        txtmessagenotiffour.classList.remove("item-notif-active");
        messagenotifpersonalM.classList.remove("hide-item");
        messagenotifgeneralM.classList.add("hide-item");
    });
});


var generalM = document.querySelectorAll(".general-mobile");

generalM.forEach(generalM => {
    generalM.addEventListener('click', function handleClick(event) {
        txtmessagenotifthree.classList.remove("item-notif-active");
        txtmessagenotiffour.classList.add("item-notif-active");
        messagenotifpersonalM.classList.add("hide-item");
        messagenotifgeneralM.classList.remove("hide-item");
    });
});


var clothemenuM = document.querySelectorAll(".clothe-menu-mobile");

clothemenuM.forEach(clothemenuM => {
    clothemenuM.addEventListener('click', function handleClick(event) {
        boxnotifmobile.classList.toggle("hide-item");
    });
});



//  slider gift carts script .....................................................................

var boxgiftcarts = document.querySelectorAll(".box-gift-carts");
var itemmessagegiftcarts = document.querySelectorAll(".item-message-gift-carts");

boxgiftcarts.forEach((boxgiftcart,index) => {
    boxgiftcart.addEventListener('click', function handleClick(event) {
        var numbergiftcarts = [0,1,2,3,4,5]
        for(x = 0 ; x < numbergiftcarts.length ; x++)
        {
            boxgiftcarts[x].classList.remove("gift-box-active-" + x);
            itemmessagegiftcarts[x].classList.add("hide-item");
            imggiftbox[x].classList.remove("hide-item2");
            imgselectgiftbox[x].classList.remove("show-item");
            imghovergiftbox[x].classList.remove("hide-item2");
        }
        boxgiftcart.classList.add("gift-box-active-" + index);
        itemmessagegiftcarts[index].classList.remove("hide-item");

        imggiftbox[index].classList.add("hide-item2");
        imgselectgiftbox[index].classList.add("show-item");
        imghovergiftbox[index].classList.add("hide-item2");
    });
});


var imggiftbox = document.querySelectorAll(".img-gift-box");
var imgselectgiftbox = document.querySelectorAll(".img-select-gift-box");
var imghovergiftbox = document.querySelectorAll(".img-hover-gift-box");


boxgiftcarts.forEach((boxgiftcart,index) => {
    boxgiftcart.addEventListener('mouseover', function handleClick(event) {
        var numbergiftcarts = [0,1,2,3,4,5]
        for(x = 0 ; x < numbergiftcarts.length ; x++)
        {
            imgselectgiftbox[x].classList.add("hide-item");
            imghovergiftbox[x].classList.add("hide-item");
        }

        imggiftbox[index].classList.add("hide-item");
        imgselectgiftbox[index].classList.add("hide-item");
        imghovergiftbox[index].classList.remove("hide-item");
    });
});

boxgiftcarts.forEach((boxgiftcart,index) => {
    boxgiftcart.addEventListener('mouseover', function handleClick(event) {
        var numbergiftcarts = [0,1,2,3,4,5]
        for(x = 0 ; x < numbergiftcarts.length ; x++)
        {
            imgselectgiftbox[x].classList.add("hide-item");
            imghovergiftbox[x].classList.add("hide-item");
        }

        imggiftbox[index].classList.add("hide-item");
        imgselectgiftbox[index].classList.add("hide-item");
        imghovergiftbox[index].classList.remove("hide-item");
    });
});


boxgiftcarts.forEach((boxgiftcart,index) => {
    boxgiftcart.addEventListener('mouseout', function handleClick(event) {
        var numbergiftcarts = [0,1,2,3,4,5]
        for(x = 0 ; x < numbergiftcarts.length ; x++)
        {
            imgselectgiftbox[x].classList.add("hide-item");
            imghovergiftbox[x].classList.add("hide-item");
        }


        imggiftbox[index].classList.remove("hide-item");
        imgselectgiftbox[index].classList.remove("hide-item");
        imghovergiftbox[index].classList.add("hide-item");
    });
});

//  hover menu .....................................................................


var  iconmenu1 = document.getElementById("icon-menu1");
var  iconmenu2 = document.getElementById("icon-menu2");
var  iconmenu3 = document.getElementById("icon-menu3");
var  iconmenu4 = document.getElementById("icon-menu4");
var  iconmenu5 = document.getElementById("icon-menu5");
var  iconmenu6 = document.getElementById("icon-menu6");
var  iconmenu7 = document.getElementById("icon-menu7");
var  iconmenu8 = document.getElementById("icon-menu8");
var  iconmenu9 = document.getElementById("icon-menu9");
var  iconmenu10 = document.getElementById("icon-menu10");
var  iconmenu11 = document.getElementById("icon-menu11");
var  iconmenu12 = document.getElementById("icon-menu12");
var  iconmenu13 = document.getElementById("icon-menu13");
var  iconmenu14 = document.getElementById("icon-menu14");
var  iconmenu15 = document.getElementById("icon-menu15");
var  iconmenu16 = document.getElementById("icon-menu16");
var  iconmenu17 = document.getElementById("icon-menu17");
var  iconmenu18 = document.getElementById("icon-menu18");
var  iconmenu19 = document.getElementById("icon-menu19");
var  iconmenu20 = document.getElementById("icon-menu20");
var  iconmenu22 = document.getElementById("icon-menu22");
var  iconmenu23 = document.getElementById("icon-menu23");

var menu1 = document.getElementById("menu1");
var menu1request = document.getElementById("menu1-request");
var menu2 = document.getElementById("menu2");
var menu3 = document.getElementById("menu3");
var menu4 = document.getElementById("menu4");
var menu5 = document.getElementById("menu5");
var menu6 = document.getElementById("menu6");
var menu7 = document.getElementById("menu7");
var menu8 = document.getElementById("menu8");
var menu9 = document.getElementById("menu9");
var menu10 = document.getElementById("menu10");



if(menu1 != undefined)
{
    menu1.addEventListener('mouseover', function handleClick(event) {
        iconmenu17.classList.remove("hide-item");
        iconmenu18.classList.add("hide-item");
        iconmenu19.classList.add("hide-item");
        iconmenu20.classList.remove("hide-item");
        boxheverstore.classList.remove("hide-item");
    });

    menu1.addEventListener('mouseout', function handleClick(event) {
        iconmenu17.classList.add("hide-item");
        iconmenu18.classList.remove("hide-item");
        iconmenu19.classList.remove("hide-item");
        iconmenu20.classList.add("hide-item");
    });
}


if(menu1request != undefined)
{
    menu1request.addEventListener('mouseover', function handleClick(event) {
        boxheverstore.classList.remove("hide-item");
    });
}


if(menu2 != undefined)
{
    menu2.addEventListener('mouseover', function handleClick(event) {
        iconmenu2.classList.remove("hide-item");
        iconmenu1.classList.add("hide-item");
    });


    menu2.addEventListener('mouseout', function handleClick(event) {
        iconmenu2.classList.add("hide-item");
        iconmenu1.classList.remove("hide-item");
    });
}


if(menu3 != undefined)
{
    menu3.addEventListener('mouseover', function handleClick(event) {
        iconmenu4.classList.remove("hide-item");
        iconmenu3.classList.add("hide-item");
    });


    menu3.addEventListener('mouseout', function handleClick(event) {
        iconmenu4.classList.add("hide-item");
        iconmenu3.classList.remove("hide-item");
    });
}


if(menu4 != undefined)
{
    menu4.addEventListener('mouseover', function handleClick(event) {
        iconmenu6.classList.remove("hide-item");
        iconmenu5.classList.add("hide-item");
    });


    menu4.addEventListener('mouseout', function handleClick(event) {
        iconmenu6.classList.add("hide-item");
        iconmenu5.classList.remove("hide-item");
    });
}


if(menu5 != undefined)
{
    menu5.addEventListener('mouseover', function handleClick(event) {
        iconmenu8.classList.remove("hide-item");
        iconmenu7.classList.add("hide-item");
    });


    menu5.addEventListener('mouseout', function handleClick(event) {
        iconmenu8.classList.add("hide-item");
        iconmenu7.classList.remove("hide-item");
    });
}


if(menu6 != undefined)
{
    menu6.addEventListener('mouseover', function handleClick(event) {
        iconmenu23.classList.remove("hide-item");
        iconmenu22.classList.add("hide-item");
    });


    menu6.addEventListener('mouseout', function handleClick(event) {
        iconmenu23.classList.add("hide-item");
        iconmenu22.classList.remove("hide-item");
    });
}


if(menu7 != undefined)
{
    menu7.addEventListener('mouseover', function handleClick(event) {
        iconmenu10.classList.remove("hide-item");
        iconmenu9.classList.add("hide-item");
    });


    menu7.addEventListener('mouseout', function handleClick(event) {
        iconmenu10.classList.add("hide-item");
        iconmenu9.classList.remove("hide-item");
    });
}


if(menu8 != undefined)
{
    menu8.addEventListener('mouseover', function handleClick(event) {
        iconmenu12.classList.remove("hide-item");
        iconmenu11.classList.add("hide-item");
    });


    menu8.addEventListener('mouseout', function handleClick(event) {
        iconmenu12.classList.add("hide-item");
        iconmenu11.classList.remove("hide-item");
    });
}


if(menu9 != undefined)
{
    menu9.addEventListener('mouseover', function handleClick(event) {
        iconmenu14.classList.remove("hide-item");
        iconmenu13.classList.add("hide-item");
    });


    menu9.addEventListener('mouseout', function handleClick(event) {
        iconmenu14.classList.add("hide-item");
        iconmenu13.classList.remove("hide-item");
    });
}


if(menu10 != undefined)
{
    menu10.addEventListener('mouseover', function handleClick(event) {
        iconmenu16.classList.remove("hide-item");
        iconmenu15.classList.add("hide-item");
    });


    menu10.addEventListener('mouseout', function handleClick(event) {
        iconmenu16.classList.add("hide-item");
        iconmenu15.classList.remove("hide-item");
    });
}

//  toggle menu store ................................................................

var boxheverstore = document.getElementById("box-hever-store");
var clotheboxhoverstore = document.getElementById("clothe-box-hover-store");
var showboxheverstore = document.getElementById("show-box-hever-store");


var clothemenustore = document.querySelectorAll(".clothe-menu-store");

clothemenustore.forEach(clothemenustore => {
    clothemenustore.addEventListener('mouseover', function handleClick(event) {
        clotheboxhoverstore.classList.add("hide-item");
        boxheverstore.classList.add("hide-item");
    });
});

var openmenustore = document.querySelectorAll(".open-menu-store");

openmenustore.forEach(openmenustore => {
    openmenustore.addEventListener('mouseover', function handleClick(event) {
        clotheboxhoverstore.classList.remove("hide-item");
    });
});


var itemboxheverstores = document.querySelectorAll(".header-box-hever-store");
var boxmessageboxheverstore = document.getElementsByClassName("box-message-box-hever-store");

itemboxheverstores.forEach((itemboxheverstore,index) => {
    itemboxheverstore.addEventListener('mouseover', function handleClick(event) {
        for(x = 0; x < boxmessageboxheverstore.length; x++)
        {
            itemboxheverstores[x].classList.remove("active-menu-sotre");
            boxmessageboxheverstore[x].classList.add("hide-item");
        }
        this.classList.add("active-menu-sotre");
        boxmessageboxheverstore[index].classList.remove("hide-item");
    });
});

//  toggle menu mobile ................................................................


var sidebarpc = document.getElementById("sidebar-pc");
var boxclothemenumobile = document.getElementById("box-clothe-menu-mobile");
var iconforniteheaderstore = document.getElementById("icon-fornite-header-store");
var icongamingheaderstore = document.getElementById("icon-gaming-header-store");
var sizeWidth = document.body.offsetWidth;


window.onresize = function (){
    var sizeWidth = document.body.offsetWidth;
    
    if(sizeWidth < 1025)
    {
        sidebarpc.classList.add("hide-item");
        boxclothemenumobile.classList.add("hide-item");
    }else
    {
        sidebarpc.classList.remove("hide-item");
    }
}


if(sizeWidth < 1025)
{
    sidebarpc.classList.add("hide-item");
    boxclothemenumobile.classList.add("hide-item");
}else
{
    sidebarpc.classList.remove("hide-item");
}



var openmenuM = document.querySelectorAll(".open-menu-mobile");

openmenuM.forEach(openmenuM => {
    openmenuM.addEventListener('click', function handleClick(event) {
        sidebarpc.classList.toggle("hide-item");
        boxclothemenumobile.classList.toggle("hide-item");
    });
});


var messagecategorystoremobile = document.getElementsByClassName("message-category-store-mobile");
var iconforniteheaderstore = document.getElementsByClassName(" icon-category-header-store");
var openboxfortnite = document.querySelectorAll(".open-box-category");

openboxfortnite.forEach((openboxfortnite,index) => {
    openboxfortnite.addEventListener('click', function handleClick(event) {
        messagecategorystoremobile[index].classList.toggle("hide-item");
        iconforniteheaderstore[index].classList.toggle("rotate-header-icon");
    });
});

//  script request page   ..............................................................

var formrequest = document.getElementById('form-request');

if(formrequest != undefined)
{
    (function () {
        document.getElementById('form-request').addEventListener('submit', calTotal);

        function calTotal(event) {
            event.preventDefault();
        }
    })();
}

//  script search page   ..............................................................

var mainpagesearch = document.getElementById('main-page-search');

if(mainpagesearch != undefined)
{
    var itemfilterheadersearch = document.querySelectorAll(".item-filter-header-search");

    itemfilterheadersearch.forEach((itemfilterheadersearchs,index) => {
        itemfilterheadersearchs.addEventListener('click', function handleClick(event) {
            for(x = 0; x < itemfilterheadersearch.length; x++)
            {
                itemfilterheadersearch[x].classList.remove("color-blue");
            }

            itemfilterheadersearch[index].classList.add("color-blue");
        });
    });

    var itemfiltersearchmos = document.querySelectorAll(".item-filter-search-mo");
    var imgitemfiltersearchmo = document.querySelectorAll(".img-item-filter-search-mo");
    var txtitemfiltersearchmo = document.querySelectorAll(".txt-item-filter-search-mo");

    itemfiltersearchmos.forEach((itemfiltersearchmo,index) => {
        itemfiltersearchmo.addEventListener('click', function handleClick(event) {
            for(x = 0; x < itemfiltersearchmos.length; x++)
            {
                imgitemfiltersearchmo[x].classList.add("hide-item");
                txtitemfiltersearchmo[x].classList.remove("color-blue");
            }

            imgitemfiltersearchmo[index].classList.remove("hide-item");
            txtitemfiltersearchmo[index].classList.add("color-blue");
        });
    });
}

//  script faqs page   ..............................................................

var formfaqs = document.getElementById('form-faqs');

if(formfaqs != undefined)
{
    (function () {
        document.getElementById('form-faqs').addEventListener('submit', calTotal);

        function calTotal(event) {
            const numberorderfaqs = document.getElementById('number-order-faqs').value;
            const numberphonefaqs = document.getElementById('number-phone-faqs').value;
            const errorenumberprudectfaqs = document.getElementById('errore-number-prudect-faqs');
            const errorenumberfaqs = document.getElementById('errore-number-faqs');

            if(numberphonefaqs ==='' || numberphonefaqs.length != 11)
            {
                event.preventDefault();
                errorenumberfaqs.classList.remove("hide-item");
                if(numberorderfaqs ==='' )
                {
                    errorenumberprudectfaqs.classList.remove("hide-item");
                    event.preventDefault();
                }else
                {
                    errorenumberprudectfaqs.classList.add("hide-item");
                }
            }else
            {
                if(numberorderfaqs ==='' )
                {
                    errorenumberprudectfaqs.classList.remove("hide-item");
                    event.preventDefault();
                }else
                {
                    errorenumberprudectfaqs.classList.add("hide-item");
                }
            }
        }
    })();
}

//   script select box  .......................................................

var headerselectbox = document.querySelectorAll(".header-select-box");
var itemmoreselectbox = document.querySelectorAll(".item-more-select-box");
var textitemmoreselectbox = document.getElementsByClassName("text-item-more-select-box");
var textheaderselectbox = document.getElementById("text-header-select-box");
var iconselectbox = document.querySelectorAll(".icon-select-box");
var moreselectbox = document.querySelectorAll(".more-select-box");

if(textheaderselectbox != undefined)
{
    textheaderselectbox.innerHTML = textitemmoreselectbox[0].innerHTML;
    headerselectbox.forEach((headerselectbox,index) => {
        headerselectbox.addEventListener('click', function handleClick(event) {
            iconselectbox[index].classList.toggle("icon-open");
            moreselectbox[index].classList.toggle("hide-item");
            this.classList.toggle("header-select-box-open");
        });

        itemmoreselectbox.forEach((itemmoreselectbox,index2) => {
            itemmoreselectbox.addEventListener('click', function handleClick(event) {
                iconselectbox[index].classList.toggle("icon-open");
                moreselectbox[index].classList.toggle("hide-item");
                headerselectbox.classList.toggle("header-select-box-open");
                textheaderselectbox.innerHTML = textitemmoreselectbox[index2].innerHTML;
            });
        });
    });
}




//   script ruels page  .......................................................

var counterrulesitemnumber = document.getElementsByClassName("counter-rules-item-number");

if(counterrulesitemnumber != undefined)
{
    for(var x = 0; x < counterrulesitemnumber.length ; x++)
    {
        counterrulesitemnumber[x].innerHTML = x + 1;
    }
}

//   script faqs page  .......................................................

var toggleboxacaredonfaq = document.getElementsByClassName("toggle-box-acaredon-faq");
var boxacaredonfaqmassage = document.getElementsByClassName("box-acaredon-faq-massage");

for(var xy = 0; xy < toggleboxacaredonfaq.length ; xy++)
{
    toggleboxacaredonfaq[xy].addEventListener("click",function handleClick()
    {
        this.nextElementSibling.classList.toggle("hide-acardeon");
        this.classList.toggle("open-box-faq-massage");
    });
}

//  sliders script   ................................................................

var swiper = new Swiper(".mySwiper-main-home", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: true,
    grabCursor: true,
    speed: 1100,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".slider-main-prudect", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    grabCursor: true,
    speed: 500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination-prudect",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next-prudect",
        prevEl: ".swiper-button-prev-prudect",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 4,
        },
        1450: {
            slidesPerView: 5,
        }
    }
});


var swiper = new Swiper(".mySwiper-comment-home", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    grabCursor: true,
    speed: 700,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination-comment",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next-comment",
        prevEl: ".swiper-button-prev-comment",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 4,
        }
    }
});


var swiper = new Swiper(".mySwiper-main-gift-carts", {
    loop: false,
    slidesPerView: 6,
    spaceBetween: 25,
    grabCursor: true,
    breakpoints: {
        1: {
            slidesPerView: "auto",
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 6,
        },
    }
});


var swiper = new Swiper(".mySwiper-main-best-sellers", {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination-best-sellers",
        clickable: true,
    },
    breakpoints: {
        1: {
            slidesPerView: "auto",
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
        },
    }
});


var swiper = new Swiper(".mySwiper-page-articles", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    grabCursor: true,
    speed: 1100,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination-page-articles",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next-page-articles",
        prevEl: ".swiper-button-prev-page-articles",
    },
});


var swiper = new Swiper(".mySwiper-page-request", {
    direction: "vertical",
    loop : true,
    slidesPerView: 3,
    spaceBetween: 40,
    speed: 1500,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});