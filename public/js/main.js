// window.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".navbar"),n=document.querySelector(".navbar__collapse--icon"),o=document.querySelector(".close");n.onclick=function(){e.classList.toggle("navbar-resposive")},o.onclick=function(){e.classList.remove("navbar-resposive")};var t=document.getElementById("header"),s=document.querySelectorAll(".navbar__main--link-right"),i=document.querySelectorAll(".dropdown-title-icon"),c=document.querySelectorAll(".hasDropdown"),r=document.querySelectorAll(".dropdown-list");t.clientWidth>1199?(c[0].addEventListener("mouseover",function(){r[0].classList.add("open")}),c[0].addEventListener("mouseout",function(){r[0].classList.remove("open")}),c[1].addEventListener("mouseover",function(){r[1].classList.add("open")}),c[1].addEventListener("mouseout",function(){r[1].classList.remove("open")}),c[3].addEventListener("mouseover",function(){r[3].classList.add("open")}),c[3].addEventListener("mouseout",function(){r[3].classList.remove("open")}),c[2].addEventListener("mouseover",function(){r[2].classList.add("open")}),c[2].addEventListener("mouseout",function(){r[2].classList.remove("open")})):(s[0].onclick=function(){r[0].classList.add("navbar-resposive-2")},s[1].onclick=function(){r[1].classList.add("navbar-resposive-2")}),i[0].addEventListener("click",function(){r[0].classList.remove("navbar-resposive-2")}),i[1].addEventListener("click",function(){r[1].classList.remove("navbar-resposive-2")});var a=document.querySelector(".sidebar__inner--menu"),d=document.querySelector(".sidebar__inner--link"),l=document.querySelector(".sidebar__inner--title");l&&l.addEventListener("click",function(){a.classList.toggle("show")}),d&&(d.onclick=function(){a.classList.toggle("show")})});

window.addEventListener("DOMContentLoaded", function () {
    var e = document.querySelector(".navbar");
    var n = document.querySelector(".navbar__collapse--icon");
    var o = document.querySelector(".close");
    if (n) {
        n.onclick = function () {
            e.classList.toggle("navbar-resposive")
        };
    }
    if (o) {
        o.onclick = function () {
            e.classList.remove("navbar-resposive")
        };
    }
})