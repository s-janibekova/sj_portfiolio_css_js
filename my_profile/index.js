$( document ).ready(function() {
    typingText()
    subtext()
});

function typingText() {
    const texts = ["I am Web developer" , "I Have a lot of hobbies",]
    const display = document.querySelector('.mainText');
    let textIndex = 0;
    let characterIndex = 0;
    display.classList.add('typing');
    setTimeout(() => {

        setInterval(() => {

            if (characterIndex === texts[textIndex].length) {
              characterIndex = 0;
              if (textIndex === texts.length - 1) {
                textIndex = 0;
              } else {
                textIndex++;
              }
              display.innerHTML = '';
              return;
            }

            display.innerHTML += texts[textIndex][characterIndex];
            characterIndex++;

          }, 150);

    },2000)

}
