// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {

  const likeButtons = document.getElementsByClassName('like-glyph');
  
  function getButtons () {
    for (let btn of likeButtons) {
      btn.addEventListener('click', handleLike)
      } 
    }
  
  
  //Callback functions


function handleLike(e) {
  let like = e.target
  
  mimicServerCall()
  .then (() => {
  if (like.innerText === EMPTY_HEART) {
    like.innerText = FULL_HEART
    like.className = 'activated-heart';
  } else if (like.innerText === FULL_HEART) {
    like.innerText = EMPTY_HEART 
    like.className.remove()
  }
})
  .catch(error => handleError(error))
}

function handleError(error) {
  let errorMessage = documment.querySelector('#modal')
  errorMessage.className.remove();
  setTimeout(() => errorMessage.className = 'hidden', 3000)
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
})
