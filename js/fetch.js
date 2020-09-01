// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function () {
//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=7791cf18&s=' + inputKeyword.value).then(response => response.json()).then(response => {
//         const movies = response.Search;
//         let cards = '';
//         movies.forEach(m => cards += tampilCards(m));
//         const movieContainer = document.querySelector('.movie-container');
//         movieContainer.innerHTML = cards;

//         //ketika detail
//         const modalButtonDetail = document.querySelectorAll('.modal-detail-button');
//         modalButtonDetail.forEach(btn => {
//             btn.addEventListener('click', function () {
//                 const imdbid = this.dataset.imdbid;
//                 fetch('http://www.omdbapi.com/?apikey=7791cf18&i=' + imdbid).then(response => response.json()).then(m => {
//                     const movieDetail = tampilDetail(m);
//                     const modalBody = document.querySelector('.modal-body');
//                     modalBody.innerHTML = movieDetail;
//                 });
//             });
//         })
//     });
// });

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inpuxtKeyword.value);
    updateUI(movies);
})

document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});

function updateUIDetail(m) {
    const movieDetail = tampilDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}

function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=7791cf18&i=' + imdbid).then(response => response.json()).then(m => m);
}



function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=7791cf18&s=' + keyword).then(response => response.json()).then(response => response.Search);
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += tampilCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

function tampilCards(m) {
    return `<div class="col-md-4 my-5">
                    <div class="card">
                        <img src="${m.Poster}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${m.Title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                            <a href="#" class="btn btn-primary modal-detail-button" data-imdbid="${m.imdbID}" data-toggle="modal" data-target="#exampleModal">Show Details</a>
                        </div>
                    </div>
                </div>`;
}

function tampilDetail(m) {
    return `<div class="container-fluid">
    <div class="row">
        <div class="col-md-3">
            <img src="${m.Poster}" class="img-fluid">
        </div>
        <div class="col">
            <ul class="list-group">
                <li class="list-group-item">
                    <h4>${m.Title} (${m.Year})</h4>
                </li>
                <li class="list-group-item"><strong>Director : ${m.Director}</strong></li>
                <li class="list-group-item"><strong>Writers : ${m.Writer}</strong></li>
                <li class="list-group-item"><strong>Actors : ${m.Actors}</strong></li>
                <li class="list-group-item"><strong>Plot :<br> ${m.Plot}</strong></li>
            </ul>
        </div>
    </div>
</div>`;
}