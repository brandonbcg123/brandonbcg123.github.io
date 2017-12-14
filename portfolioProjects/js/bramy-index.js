
/**
 * es6 modules and imports
 */

import sayHello from './hello';

sayHello('World');

/**
 * require style imports
 */

const getMovies = require('./getMovies.js');
const createList = require('./createList.js');

let id = 0;

// Progress bar
$(".progress-bar").css('width', '100%');

function retrieveMovies () {
    getMovies().then((movies) => {
        console.log('Here are all the movies:');
        movies.sort(function (a, b) {
            return a.rating - b.rating;
        }).reverse();
        createList(movies, moviesPerPage, currentPage);
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });
}
retrieveMovies();

$('#save-add').click(function () {
    let title = $("#movie-title").val();
    let rating = $("#rating").val();
    let genre = $("#movie-genre").val();
    let movie = {
        title: title,
        rating: rating,
        genre: genre
    };
    $('#movie-title').val("");
    $('#movie-genre').val("");
    console.log(movie);

    fetch("/api/movies", {
        headers: {"content-type": "application/json"},
        method: "POST",
        body: JSON.stringify({title, rating, genre})
    }).then(() => {
        getMovies().then((movies) => {
            createList(movies);
        });
    });
    $("#add-movie-form").modal("toggle");
});

$("#confirmDelete").on("click", function () {
    console.log(id);
    fetch(`/api/movies/${id}`, {
        headers: {"content-type": "application/json"},
        method: "DELETE"
    }).then(() => {
        getMovies().then((movies) => {
            createList(movies);
        });
    });
    $("#delete-movie").modal("toggle");
});

$("#main").delegate('.glyphicon-minus', "click", function (e) {
    id = $(this).attr('data-id');
});

$("#save-edit").on("click", function () {
    let title = $("#edited-movie-title").val();
    let rating = $("#edited-rating").val();
    let genre = $("#edit-movie-genre").val();
    let movie = {
        title: title,
        rating: rating,
        genre: genre
    };
    console.log(id);
    fetch(`/api/movies/${id}`, {
        headers: {"content-type": "application/json"},
        method: "PATCH",
        body: JSON.stringify({title, rating, genre})
    }).then(() => {
        getMovies().then((movies) => {
            createList(movies);
        });
    });
    $("#edit-movie").modal("toggle");
});

$("#main").delegate('.glyphicon-edit', "click", function (e) {
    id = $(this).attr('data-id');
    let title = $(this).parent().parent().find(".title").text();
    let rating = $(this).parent().parent().find(".rating").text();
    let genre = $(this).parent().parent().find(".genre").text();
    $("#edited-movie-title").val(title);
    $("#edited-rating").val(rating);
    console.log($("#edit-movie-genre").val(genre));
});

function testAnim(x) {
    $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated');
};
$('.modal').on('show.bs.modal', function (e) {
    testAnim("zoomIn");
})
$('.modal').on('hide.bs.modal', function (e) {
    testAnim("zoomOut");
})

var moviesPerPage = 8;
var currentPage = 1;
function goToPage (pageNumber) {
    currentPage = pageNumber;
    retrieveMovies();
}

$(".pagination-page").click(function(){
    goToPage($(this).text());
});