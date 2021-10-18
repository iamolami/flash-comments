/* ============================ Initializing Data ======================================== */
const cardsDiv = document.getElementById('main');
const mainCard = document.getElementById('main__card')

let requestURL = 'https://iamolami.github.io/rest-articles/articles.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function () {
    const articles = request.response;
    const article = JSON.parse(articles);
    assembleCards(article);
}

function assembleCards(jsonObj) {
    const data = jsonObj['members'];

    for (let i = 0; i < data.length; i++) {
        cardsDiv.innerHTML += `
                  <a href="/detail?${data[i].id}">
                  <div class="main__card" id="main__card">
                  <img src=${data[i].avatar} class="main__img">
                  <h2 class="main__main">${data[i].name}</h2>
                  <p class="main__date">${data[i].date}</p>
                  <p class="main__content">${data[i].content}</p>
                  <p class="main__author">Written by: ${data[i].author}</p>
                  </div>
                  </a>
          `;
    }
}