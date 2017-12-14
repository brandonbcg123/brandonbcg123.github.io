const $ = require("jquery");

let createList = (movies, moviesPerPage = 8, currentPage = 1) => {
    $("#main").empty();
    console.log(moviesPerPage, currentPage);
    console.log(movies.length);
    let table = "<h2 id='chart-title'>Movies </h2><span class='glyphicon glyphicon-plus myModal entrance' id='show-add-form' data-target='#add-movie-form' data-toggle='modal'></span>" +

        "<table id='movieTable' class='table table-hover'>" +
        "<thead>" +
            "<tr>" +
                // "<th class='text-center'>ID</th>" +
                "<th>Title</th>" +
                "<th class='text-center'>Rating</th>" +
                "<th>Genre</th>" +
                "<th></th>" +
                "<th></th>" +
            "</tr>" +
        "</thead>";

    // movies.forEach(({id, title, rating, genre}) => {
    for (let i = (currentPage - 1) * moviesPerPage;
         i < movies.length &&
        i < ((currentPage - 1) * moviesPerPage) + moviesPerPage; i++) {
        let movie = movies[i];
        let id = movie.id;
        let title = movie.title;
        let rating = movie.rating;
        let genre = movie.genre;

        table += `
        <tbody>
          <tr>
            <!--// <td class="id">${id}</td>-->
            <td class="title text-left">${title}</td>
            <td class="rating">${rating}</td>
            <td class="genre text-left">${genre}</td>
            <td><span class="glyphicon glyphicon-edit" data-id="${id}" data-target="#edit-movie" data-toggle="modal"></span></td>
            <td><span class="glyphicon glyphicon-minus" data-id="${id}" data-target="#delete-movie" data-toggle="modal"></span></td>
          </tr>
        </tbody>
        `;
        console.log(`id#${id} - ${title} - rating: ${rating} - genre: ${genre}`);
    };
        // });
    table += `</table>`;
    $("#main").append(table);

};


module.exports = createList;