const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0){
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth",
			});
			e.preventDefault(); // отключает работу ссылки
		}
	}
}
// появление кнопки "наверх"
let arrowVar = document.querySelector('.scrollArrow');

window.addEventListener('scroll',function(){
	arrowVar.classList.toggle("active", window.scrollY>500)
})
//................
// бургер меню
let header = document.querySelector('header');
let headerHeight = header.offsetHeight;
let main = document.querySelector('.main-screen')
let mainHeight = main.offsetHeight;
let mainWithoutHeader = mainHeight - headerHeight; // высота главного экрана с вычетом хэдера


let burgerMenu = document.querySelector('.main-screen__burger-menu');
burgerMenu.style.height = mainWithoutHeader + 'px';

const burger = document.querySelector('.main-screen__burger');

burger.addEventListener('click', function(e) {
	if(burgerMenu.style.display === 'block'){
		burgerMenu.style.display = 'none';
	} else {
		burgerMenu.style.display = 'block';
	}
});
const menuLinksB = document.querySelectorAll('.menu__link-burger[data-goto]');
if(menuLinksB.length > 0){
	menuLinksB.forEach(menuLinksB => {
		menuLinksB.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		if(burgerMenu.style.display === 'block'){
			burgerMenu.style.display = 'none';
		} 
		const menuLinksB = e.target;
		if(menuLinksB.dataset.goto && document.querySelector(menuLinksB.dataset.goto)){
			const gotoBlock = document.querySelector(menuLinksB.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth",
			});
			e.preventDefault(); // отключает работу ссылки
		}
	}
}
// бургер меню конец
// const swiper = new Swiper('.five-block__row', swiperObj = {
//   // Optional parameters
//   // direction: 'vertical',
//   // loop: true,

//   // If we need pagination
// 	slidesPerView: 3,
//   pagination: {
//     el: '.swiper-pagination',
// 		clickable: true,
// 		dynamicBullets: true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   // scrollbar: {
//   //   el: '.swiper-scrollbar',
//   // },
// 	keyboard: {
// 		enabled: true,
// 		onlyInViewport: true,
// 		pageUpDown: true,
// 	}
// });
const swiper = new Swiper('.swiper', swiperObj = {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
	slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	}
});













