const headerNav = document.querySelector("header nav")
const headerBurger = document.querySelector(".header__burger")
const body = document.body

let isOpenMenu = false
let touchStartX = 0;
let touchEndX = 0;

headerBurger.addEventListener("click", () => {
	headerNav.classList.toggle("active")
	headerBurger.classList.toggle("active")
	if (isOpenMenu) {
		isOpenMenu = false
		body.classList.remove("body-fixed")
	} else {
		isOpenMenu = true
		body.classList.add("body-fixed")
	}
})

headerNav.addEventListener("click", (event) => {
	if (event.target.closest("a") && event.target.href) {
		headerNav.classList.remove("active")
		headerBurger.classList.remove("active")
	}
})

headerNav.addEventListener('touchstart', function (event) {
	touchStartX = event.changedTouches[0].screenX;
}, false);

headerNav.addEventListener('touchend', function (event) {
	touchEndX = event.changedTouches[0].screenX;
	handleGesture();
}, false);

function handleGesture() {
	if (touchEndX + 40 < touchStartX) {
		headerBurger.classList.remove("active")
		headerNav.classList.remove("active")
		body.classList.remove("body-fixed")
		isOpenMenu = false
	}
}