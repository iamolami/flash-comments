let requestURL = 'https://iamolami.github.io/rest-articles/articles.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function () {
    const articles = request.response;
    const article = JSON.parse(articles);
    // populateHeader(article);
    showArticles(article);
}

function showArticles(jsonObj) {
    const data = jsonObj['members'];
    const urls = window.location.href.match(/\d+/g);

    function findId(data, idToLookFor) {
        for (let i = 0; i < data.length; i++) {
            const mainDetails = document.getElementById('details')
            if (data[i].id == idToLookFor) {
                return mainDetails.innerHTML = `
                <div class="details__card">
                    <div class="details__box">
                        <img src="${data[i].avatar}" class="details__img">
                    </div>
                    <div class="details__info">
                        <h2 class="details__main">${data[i].name}</h2>
                        <p class="details__date">${data[i].date}</p>
                        <p class="details__content">${data[i].preview}</p>
                        <p class="details__author">Written by: ${data[i].author}</p>
                        <a href="${data[i].hyperlink}" download="${data[i].name} target="_blank" rel="noopener noreferrer">
                            <button class="details__btn">Download PDF</button>
                        </a>
                    </div>
                </div>
                <div class ="sh-use">
                    <h2 class="sh-use__heading">Recommended by Tim</h2>
                    <div class="sh-use__wrapper">
                        <a href="${data[0].hyperlink} download="${data[0].name}" target="_blank" rel="noopener noreferrer">
                            <div class="sh-use__box">
                                <div class ="sh-use__img">
                                    <img src = "${data[0].avatar}" alt="1">
                                </div>
                                <div class="sh-use__text">
                                    <h3 class = "sh-use__title">${data[0].name}</h3>
                                    <p class="sh-use__sub">${data[0].content}</p>    
                                </div> 
                            </div>
                        </a>
                        <a href="${data[4].hyperlink} download="${data[4].name}" target="_blank" rel="noopener noreferrer">
                            <div class="sh-use__box">
                                <div class ="sh-use__img">
                                    <img src = "${data[4].avatar}" alt="1">
                                </div>
                                <div class="sh-use__text">
                                    <h3 class = "sh-use__title">${data[4].name}</h3>
                                    <p class="sh-use__sub">${data[4].content}</p>    
                                </div> 
                            </div>
                        </a>

                        <a href="${data[6].hyperlink} download="${data[6].name}" target="_blank" rel="noopener noreferrer">
                            <div class="sh-use__box">
                                <div class ="sh-use__img">
                                    <img src = "${data[6].avatar}" alt="1">
                                </div>
                                <div class="sh-use__text">
                                    <h3 class = "sh-use__title">${data[0].name}</h3>
                                    <p class="sh-use__sub">${data[6].content}</p>    
                                </div> 
                            </div>
                        </a>
                        <a href="${data[8].hyperlink} download="${data[8].name}" target="_blank" rel="noopener noreferrer">
                            <div class="sh-use__box">
                                <div class ="sh-use__img">
                                    <img src = "${data[8].avatar}" alt="1">
                                </div>
                                <div class="sh-use__text">
                                    <h3 class = "sh-use__title">${data[8].name}</h3>
                                    <p class="sh-use__sub">${data[8].content}</p>    
                                </div> 
                            </div>
                        </a>
                    </div>
                </div>
        `;
            }

        }
    }

    findId(data, urls)
}

console.log('http://timakano.com/detail?2'.match(/\d+/g))