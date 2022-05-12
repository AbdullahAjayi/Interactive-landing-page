const submitBtn = document.querySelector('.submit-btn');
const ratingPage = document.querySelector('.rating-page');
const thankYouPage = document.querySelector('.thankyou-page');
const ratingBtns = document.querySelectorAll('.rating-star-component');
const ratingScore = document.querySelector('.rating-score')
let score = "nothing"; // Default

// Event Listeners

submitBtn.addEventListener('click', onSubmit);
ratingBtns.forEach(btn => {
    btn.addEventListener('click', onClick);
});

// Functions

function onSubmit(){
    ratingPage.classList.add('hidden');
    ratingScore.textContent = score;
    thankYouPage.classList.remove('hidden');
}

function onClick(e){
    ratingBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    // Rating Score
    score = e.target.textContent;
}