
$('.search-button').on('click', function () {
    $.ajax({
        url: 'https://api.jikan.moe/v3/search/anime?q=' + $('.input-keyword').val(),
        success: results => {
            const movies = results.results;
            let cards = '';
            movies.forEach(m => {
                cards += `<div class="col-md-4 my-5">
                    <div class="card">
                        <img src="${m.image_url}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${m.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${m.score}</h6>
                            <a href="#" class="btn btn-primary modal-detail-button" data-imdbid="${m}" data-toggle="modal" data-target="#exampleModal">Show Details</a>
                        </div>
                    </div>
                </div>`;
            })
            $('.movie-container').html(cards);

            $('.modal-detail-button').on('click', function () {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=7791cf18&i=' + $(this).data('imdbid'),
                    success: m => {
                        const movieDetail = `<div class="container-fluid">
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
                        $('.modal-body').html(movieDetail);
                    },
                    error: (e) => {
                        console.log(e.reponseText);
                    }
                })
            })
        },
        error: (e) => {
            console.log(e.reponseText);
        }
    })
})
