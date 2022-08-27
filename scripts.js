const ratingContainer = document.querySelector(".container-rating");
const thankyouContainer = document.querySelector(".container-thank-you");

const btnSubmit = document.querySelector(".btn-submit");

const rating = document.getElementById('rating');
const btnNumbers = document.querySelectorAll(".btn-number");

btnSubmit.addEventListener("click", () => {
    if(rating.textContent === '') 
    	return alert('Choose a rating before submitting!')
	thankyouContainer.classList.remove("hidden")
	ratingContainer.style.display = "none"
	console.log(rating.innerHTML)
})

btnNumbers.forEach((btnNumber) => {
	btnNumber.addEventListener("click", () => {
		rating.innerHTML = btnNumber.innerHTML
	})
})


