// 1. Nađemo element za ikonicu Comment
const commentIcon = document.querySelector('.fa-comment');

// 2. Nađemo element za komentar
const commentInput = document.querySelector('.comment-input');

// 3. Napravimo funkciju koja će da prikaže input za komentar
function showCommentInput() {
  // Ovako upravljamo CSS-om preko JavaScript-a
  commentInput.style.display = 'block';
}

// 4. Zakačimo funkciju za komentar ikonicu
// Event koji slušamo je "click"
// Kada se taj event desi, pozvaće našu funkciju
commentIcon.addEventListener('click', showCommentInput);


// 1. Nađemo element za ikonicu Heart
const likeIcon = document.querySelector('.fa-heart');
// 2. Napravimo funkciju
function fillHeartIcon() {

    likeIcon.classList.remove('far');
    likeIcon.classList.add('fas');
    likeIcon.style.color = "red";

  }
  
  // 3. Zakačimo funkciju za komentar ikonicu
  // Event koji slušamo je "click"
  // Kada se taj event desi, pozvaće našu funkciju
  likeIcon.addEventListener('click', fillHeartIcon);


