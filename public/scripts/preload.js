(function () {

  const word = ['Investor', 'Mentor/Coach', 'Entrepreneur', 'Author']
  let index = 1;
  const element = document.getElementsByClassName('animateText')[0]

  //Resetting the Animation
  function resetAnimation() {
      element.classList.remove('flip')
  }

  //Adding the  animation
  setInterval(() => {

      switch (index) {
          case 0:
              element.classList.add('flip');
              element.textContent = word[index];
              index = 1;
              setTimeout(resetAnimation, 1000);
              break;

          case 1:
              element.classList.add('flip');
              element.textContent = word[index];
              index = 2;
              setTimeout(resetAnimation, 1000);
              break;

          case 2:
              element.classList.add('flip');
              element.textContent = word[index];
              index = 3;
              setTimeout(resetAnimation, 1000);
              break;

          case 3:
              element.classList.add('flip');
              element.textContent = word[index];
              index = 0;
              setTimeout(resetAnimation, 1000);
              break;

          default:
              break;
      }

  }, 2000);
}());

let myVar

        function myFunction() {

            myVar = setTimeout(showPage, 10000);
        }

        function showPage() {

            const box = document.getElementById('myDiv');
            const loader = document.getElementById('loader');
            
            loader.style.display = "none";
            loader.classList.add('fadeIn')
            box.style.visibility = "visible";
            box.classList.add('fadeIn');
        }