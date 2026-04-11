const movieTitle = document.getElementById("movie-title")

const movieRating = document.getElementById("movie-rating")

const movieReview = document.getElementById("movie-review")

const submitButton = document.getElementById("submit-btn")

const reviewList = document.getElementById("review-list")

submitButton.addEventListener('click', () => {
    const title = movieTitle.value;

    if (title == "") {
        alert("Movie title can not be empty")
        return
    }
    const rating = movieRating.value;
    const review = movieReview.value;

    const moviedata = { title, rating, review }

    const card = document.createElement('div')

    card.classList.add('review-card')

    card.innerHTML = `
        <h3>${title}</h3>
        <p>${rating}/10</p>
        <p>${review}</p>
    `

    reviewList.appendChild(card)

    movieTitle.value = ""
    movieRating.value = "1"
    movieReview.value = ""
})