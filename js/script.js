// Toggle class Active Hamburger menu

const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
    };



// Toggle class Active shopcart

const shopcart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = () => {
    shopcart.classList.toggle('active');
    };



// Toggle class active untuk search

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}


// Klik di luar elemen

const hamburger = document.querySelector('#hamburger-menu');
const search = document.querySelector('#search-button');
const shop = document.querySelector('#shopping-cart-button');

document.addEventListener ('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if(!search.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    if(!shop.contains(e.target) && !shopcart.contains(e.target)) {
        shopcart.classList.remove('active');
    }
})

// Modalbox

const detailmodal = document.querySelector('#item-detail');
const detailbutton = document.querySelectorAll('.detail-button');

detailbutton.forEach((btn) => {
    
    btn.onclick = (e) => {
        detailmodal.style.display = 'flex';
        e.preventDefault();
    };

})




// klik tombol close

document.querySelector('.modal .close-icon').onclick = (e) => {
    detailmodal.style.display = 'none';
    e.preventDefault();
};

// Klik diluar modal

window.onclick = (e) => {
    if (e.target === detailmodal){
        detailmodal.style.display = 'none';
    }
};