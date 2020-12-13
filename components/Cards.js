// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.





function createArticleCard({ id, headline, authorPhoto, authorName }){

  const divCard = document.createElement('div')
  const divHeadline = document.createElement('div')
  const divAuthor =  document.createElement('div')
  const divImgContainer  = document.createElement('div')
  const authorImg = document.createElement('img')
  const authorSpan = document.createElement('span')

  divCard.classList.add('card')
  divHeadline.classList.add('headline')
  divAuthor.classList.add('author')
  divImgContainer.classList.add('img-container')
 
  divHeadline.textContent = headline
  authorImg.setAttribute('src', authorPhoto);
  //authorImg.src = authorPhoto
  authorSpan.textContent =  `By ${authorName}`


  divCard.appendChild(divHeadline)
  divCard.appendChild(divAuthor)
  divAuthor.appendChild(divImgContainer)
  divAuthor.appendChild(authorImg)
  divCard.appendChild(authorSpan)

  divCard.addEventListener('click', () => {
    console.log(headline)
  });

  return divCard
}


let cardContainer = document.querySelector('.cards-container');

function getData(){
    axios.get("https://lambda-times-api.herokuapp.com/articles")
      .then ( res => {
        const article = res.data.articles.javascript
        console.log(article);
        article.forEach(element => {
            cardContainer.appendChild(createArticleCard(element))
        });


      })
      .catch()

}

getData()