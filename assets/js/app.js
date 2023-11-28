
const modal = document.querySelector('.js-modal')
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
// aan class open
function hideBuyTicket() {
    modal.classList.remove('open')
}
// them class open
function showBuyTicket() {
    modal.classList.add('open')
}
// vong lap tung the button
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicket)
}
modal.addEventListener('click', hideBuyTicket)
modalClose.addEventListener('click', hideBuyTicket)
modalContainer.addEventListener('click', function (e) {
    e.stopPropagation()
})
var header = document.getElementById('header')
var mobimenu = document.querySelector('.js-mobile-menu')
var headerHeight = header.clientHeight;
// dong mo
mobimenu.onclick = function () {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}
//dong khi chon menu
var menuitems = document.querySelectorAll('#nav li a[href*="#"]')
for (var i = 0; i < menuitems.length; ++i) {
    var menuitem = menuitems[i];

    menuitem.onclick = function (e) {
        var isparentmenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isparentmenu) {
            e.preventDefault();
        }else{
            header.style.height = null;
        }
    }
}