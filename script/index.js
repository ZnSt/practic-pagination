import { fetchData, fetchDetails } from "./api.js";

const refs = {
  list: document.querySelector("#list"),
  modal: document.querySelector(".modal"),
};

fetchData(1).then(({ results }) => renderMarkup(results));

const renderMarkup = (array) => {
  const markup = array
    .map(({ id, title, name, poster_path }) => {
      return ` <li id='${id}'>
                    <h2>${title || name}</h2>
                    <img src="https://image.tmdb.org/t/p/w300${poster_path}" 
                    alt="${title || name}">
                </li>`;
    })
    .join("");
  refs.list.insertAdjacentHTML("beforeend", markup);
};

refs.list.addEventListener("click", renderDetails);

function renderDetails(e) {
  const idEl = e.target.closest("li").id;
  fetchDetails(idEl).then((res) => {
    console.log(res);
    renderFilm(res);
  });
}

function renderFilm({
  backdrop_path,
  overview,
  release_date,
  title,
  name,
  vote_average,
  popularity,
}) {
  const markup = `
      
        <h2>${title || name}</h2>
        <p>Release date: ${release_date}</p>
        <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" alt="">
        <p>Overview ${overview}</p>
        <p>Vote average: ${vote_average}</p>
        <p>Popularity: ${popularity}</p>
    `;
  refs.modal.insertAdjacentHTML("afterbegin", markup);
  refs.modal.classList.add("is-open");
}
