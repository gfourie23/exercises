let currentMovie = 0

let movieList = [];

$(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        let movieTitle = $('#movie-title').val();
        let movieRating = $('#rating').val();

        let movieData = {title, rating, currentMovie};
        const HTMLtoAppend = createMovieDataHTML(movieData);

        currentMovie++
        movieList.push(movieData);

        $("movie-table-body").append(HTMLtoAppend);
        $('form').trigger('reset');
    });

$('tbody').on("click", "removeButton", function(event) {
    let removeMovie = movieList.findIndex (movie => movie.currentMovie === +$(event.target).data("deleteMovie"))

    movieList.splice(removeMovie, 1) 

    $(event.target)
    .closest('tr')
    .remove();
});
});


function createMovieDataHTML(data) {
    return `
      <tr>
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td>
          <button class="removeButton" movie-delete-id=${data.currentMovie}>
            Delete
          </button>
        </td>
      <tr>
    `;
  }