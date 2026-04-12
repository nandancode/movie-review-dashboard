const movieTitle = document.getElementById("movie-title")

const movieRating = document.getElementById("movie-rating")

const movieReview = document.getElementById("movie-review")

const submitButton = document.getElementById("submit-btn")

const reviewList = document.getElementById("review-list")

submitButton.addEventListener('click', async () => {
    const title = movieTitle.value;

    if (title == "") {
        alert("Movie title can not be empty")
        return
    }

    let posterUrl = "https://via.placeholder.com/500x750?text=No+Poster+Found";

    try {
        const respone = await fetch(`${BASE_URL}/search/movie?api_key=${TMDB_KEY}&query=${title}`)
        const data = await respone.json()

        if (data.results && data.results.length > 0) {
            const movie = data.results[0]
            if (movie.poster_path) {
                posterUrl = `${IMAGE_URL}${movie.poster_path}`
            }
        }
    } catch (error) {
        console.error("unable to fetch movie poster :", error)
    }
    const rating = movieRating.value;
    const review = movieReview.value;

    const moviedata = { title, rating, review, poster: posterUrl }

    const card = document.createElement('div')

    card.classList.add('review-card')

    card.innerHTML = `
        <img src="${posterUrl}" alt="movie poster for ${title}" style="width: 100%; border-radius: 8px;">
        <h3>${title}</h3>
        <p>${rating}/10</p>
        <p>${review}</p>
    `

    reviewList.appendChild(card)

    movieTitle.value = ""
    movieRating.value = "1"
    movieReview.value = ""
})