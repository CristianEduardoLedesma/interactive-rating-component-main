const ratingContainer = document.querySelector(".container-rating");
const thankyouContainer = document.querySelector(".container-thank-you");

const btnSubmit = document.querySelector(".btn-submit");

const rating = document.querySelector(".rating");
const btnNumbers = document.querySelectorAll(".btn-number");

btnSubmit.addEventListener("click", () => {
	thankyouContainer.classList.remove("hidden")
	ratingContainer.style.display = "none"
})

btnNumbers.forEach((btnNumber) => {
	btnNumber.addEventListener("click", () => {
		rating.innerHTML = btnNumber.innerHTML
	})
})


