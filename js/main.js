window.addEventListener('load', init);
const apiUrl = "http://localhost/MovieMagazine/webservice/index.php";
const container = document.getElementsByTagName('aside')[0];

function init() {
    fetchUrl(apiUrl);
}

function fetchUrl(apiUrl) {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(onSuccess)
        .catch(onError);
}

function onSuccess(data) {

    for (let movie of data.results) {
        //Create div for each json element
        const movieCard = document.createElement('div');
        movieCard.classList.add('product-card');
        document.querySelector('.movie-list').appendChild(movieCard);

        //Add logo with link to YouTube trailer
        const movieLogo = document.createElement('href');
        movieLogo.classList.add('logo');
        movieLogo.src = movie.logo;
        movieLogo.innerHTML = `<a href="${movie.logo}"><img src="webservice/includes/images/youtube.png" alt="youtube logo"></a>`;
        movieCard.appendChild(movieLogo);

        // Add movie cover
        const movieImage = document.createElement('img');
        movieImage.classList.add('cover');
        movieImage.src = movie.img;
        movieCard.appendChild(movieImage);

        // Add title of the movie
        const movieTitle = document.createElement('h2');
        movieTitle.classList.add('title');
        movieTitle.innerHTML = movie.film;
        movieCard.appendChild(movieTitle);

        //Add duration
        const movieDuration = document.createElement('p');
        movieDuration.classList.add('duration');
        movieDuration.innerHTML = movie.duration;
        movieCard.appendChild(movieDuration);

        // Add details button
        const movieDetails = document.createElement('button');
        movieDetails.classList.add('details');
        movieDetails.id = movie.id;
        movieDetails.innerHTML = "View Details";
        movieCard.appendChild(movieDetails);

        //Add favorites button
        const movieFavorite = document.createElement('button');
        movieFavorite.classList.add('favorites');
        movieFavorite.id = movie.id;

        //Add text for the favorites button
        if (sessionStorage.getItem(movie.id) == null) {
            movieFavorite.innerHTML = "Add to Favorites";

        //When pressed remove text
        } else {
            movieFavorite.classList.toggle('added');
            movieFavorite.innerHTML = "";
        }

        movieCard.appendChild(movieFavorite);
    }


    const detailButtons = document.querySelectorAll('.details');

    detailButtons.forEach(function (btn) {
        btn.addEventListener('click', () => {
            fetchDetails(btn.id)

            //When details is pressed go to the top of the page
            window.scrollTo({ top: 0, behavior: 'smooth' })
        })
    })

    const addToFavorites = document.querySelectorAll('.favorites');

    addToFavorites.forEach(function (btn) {
        btn.addEventListener('click', () => {
            addToFavorite(btn)
        })
    })
}

//Get the data from the database
function fetchDetails(id) {
    fetch(`http://localhost/MovieMagazine/webservice/index.php?id=${id}`)
        .then((response) => {
            if (!response.ok) {
                console.log(response)
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(showDetails)
        .catch(onError);
}

function onError(error) {
    console.log(error)
}

function addToFavorite(btn){
    if(sessionStorage.getItem(btn.id) == null){
        btn.classList.toggle('added');
        sessionStorage.setItem(btn.id, btn.id);

    } else {
        btn.classList.toggle('added');
        sessionStorage.removeItem(btn.id);
        btn.innerHTML = "Add to Favorites";

    }
}

//Show the details on the page of the clicked movie
function showDetails(data) {
    container.innerHTML = '';
    const title = document.createElement('p');
    title.innerHTML = `<p>Details:</p>`;
    container.appendChild(title);

    const img = document.createElement('img');
    img.src = data.img;
    img.classList.add('detailsCover');
    container.appendChild(img);

    const director = document.createElement('div');
    director.innerHTML = `<h2>Director: ${data.director}</h2>`;
    container.appendChild(director);

    const filmTitle = document.createElement('div');
    filmTitle.innerHTML = `<h1>Title: ${data.film}</h1>`;
    container.appendChild(filmTitle);

    const Duration = document.createElement('div');
    Duration.innerHTML = `<h1>Duration: ${data.duration}</h1>`;
    container.appendChild(Duration);

    const Cover = document.createElement('div');
    Cover.innerHTML = `<h2>Leading role: ${data.cover}</h2>`;
    container.appendChild(Cover);

}
