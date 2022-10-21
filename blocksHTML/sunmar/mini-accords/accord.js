const page = document.querySelector(".page");
const accord = page.querySelector(".links");
const accordTriggers = accord.querySelectorAll(".links__item-header");

accordTriggers.forEach((item) => {
	item.addEventListener("click", () => {
		item.parentElement.classList.toggle("links__item_opened");
	});
});
