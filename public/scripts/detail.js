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
    const urls = window.location.href.match(/\d+/g)[0];

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
                        <button class="details__btn"><a href="#">Download PDF</a></button>
                    </div>
                </div>

                <div class="comment">
            <form id="comment-form" method="POST" action="/detail?${urls}">
                <div class="comment__row">
                    <input type="text" required placeholder="enter your name" id="new_comment_name"
                        class="comment__input">
                    <input placeholder="enter valid email" required type="email" id="new_comment_email"
                        class="comment__input">
                </div>
                <div class="comment__output">
                    <textarea type="text" placeholder="Add your comment....." required id="new_comment_text" rows="10"
                        cols="30" class="comment__textarea"></textarea>
                    <button type="submit" class="comment__btn">Comment</button>
                </div>
            </form>
            <div id="comments-list">
                <template id="comment-template">
                    <div class="comment__hidden">
                        <div class="comment__user">
                            <div class="user-icon"><img src="./assets/user.png"></div>
                        </div>
                        <div class="comment__info">
                            <div class="comment__details">
                                <div class="name comment__name">{{name}}</div>
                                <div class="email comment__email">{{email}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="comment__textBox">
                        <div class="text comment__description">{{comment}}</div>
                    </div>
                </template>
            </div>
        </div>

        <div class = "sh-use">
            <h2 class ="sh-use__heading" > Recommended By Tim: </h2>
            <div class ="sh-use__wrapper">
                <div class ="sh-use__box">
                    <div class ="sh-use__img">
                        <img src = "${data[7].avatar}" alt="1">
                    </div>
                    <div class="sh-use__text">
                        <h3 class = "sh-use__title">${data[7].name}</h3>
                        <p class="sh-use__sub">${data[7].content}</p>
                        <button class="sh-use__btn"><a href="#">Download PDF</a></button>
                    </div> 
                </div>
                <div class ="sh-use__box">
                    <div class ="sh-use__img">
                        <img src = "${data[4].avatar}" alt="1">
                    </div>
                    <div class="sh-use__text">
                        <h3 class = "sh-use__title">${data[4].name}</h3>
                        <p class="sh-use__sub">${data[4].content}</p>
                        <button class="sh-use__btn"><a href= "#">Download PDF</a></button>
                    </div> 
                </div>
                <div class ="sh-use__box">
                    <div class ="sh-use__img">
                        <img src = "${data[5].avatar}" alt="1">
                    </div>
                    <div class="sh-use__text">
                        <h3 class = "sh-use__title">${data[5].name}</h3>
                        <p class="sh-use__sub">${data[5].content}</p>
                        <button class="sh-use__btn"><a href= "#">Download PDF</a></button>
                    </div> 
                </div>
                <div class ="sh-use__box">
                    <div class ="sh-use__img">
                        <img src = "${data[0].avatar}" alt="1">
                    </div>
                    <div class="sh-use__text">
                        <h3 class = "sh-use__title">${data[0].name}</h3>
                        <p class="sh-use__sub">${data[0].content}</p>
                        <button class="sh-use__btn"><a href="#">Download PDF</a></button>
                    </div> 
                </div>
            </div>
        </div>
        `;
            }

        }
    }

    findId(data, urls)
}

console.log('https://tim-akano.herokuapp.com/detail?1'.match(/\d+/g))