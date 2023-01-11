const hamburger = document.querySelector(".hamburger"),
	menu = document.querySelector(".menu"),
	closeElem = document.querySelector(".menu__close"),
	overlay = document.querySelector(".menu__overlay"),
	menuItem = document.querySelectorAll(".menu__item");

hamburger.addEventListener("click", () => {
	menu.classList.add("active");
});

function closeMenu(elem) {
	elem.addEventListener("click", () => {
		menu.classList.remove("active");
	});
}
menuItem.forEach(item => {
	closeMenu(item);
});
closeMenu(closeElem);
closeMenu(overlay);

// Script for automatic display of the percentage scale (section Work skills)
const percents = document.querySelectorAll(".skills__percent"),
	lines = document.querySelectorAll(".skills__scale-progress");

percents.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});

// Icon up
$(window).scroll(function () {
	if ($(this).scrollTop() > 500) {
		$(".scroll-up").fadeIn();
	} else {
		$(".scroll-up").fadeOut();
	}
});
