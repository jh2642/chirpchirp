//Retrieving the Esty API data
fetchApi('/users', {}, function(response) {
  console.log(response)
})
// fetch('https://923ad329.ngrok.io/users')
//
// //Parsing the data
// .then(function(response) {
//     return response.json()
// })
//
// .then(function(data) {
//   console.log(data)
// })

//
//       return response;
// })
// console.log(response)
//
// //Actually doing something with the data!
// .then(function(timelineData) {
//
//     //"Do this to each piece of data" - actually creating the bulk of the page in this section
//     timelineData.results.forEach(function(post) {
//
//         //Creating div to nest rest of API data in - this whole div is a link to the item within it
//         // var div = document.createElement('a')
//         // div.setAttribute('href', boardGame.url)
//         // //Adding class name to make CSS styling easier
//         // div.classList.add('board-game')
//         //
//         // //Pulling in images from Etsy API and adding them to the div created above
//         // var img = document.createElement('img')
//         // img.setAttribute('src', boardGame.Images[0].url_570xN)
//         // div.appendChild(img)
//
//         //Pulling in the title from Etsy and adding the title to the div
//         var title = document.createElement('p')
//         title.innerHTML = name
//         //Adding class name to make CSS styling easier
//         title.classList.add('board-game-title')
//         div.appendChild(title)
//
//         // //Pulling in the price and adding it to the div
//         // var price = document.createElement('p')
//         // price.innerHTML = '$' + boardGame.price
//         // //Adding class name to make CSS styling easier
//         // price.classList.add('board-game-price')
//         // div.appendChild(price)
//
//         //Pulling in the shop name and adding it to the div
//         // var shopName = document.createElement('p')
//         // shopName.innerHTML = name
//         // //Adding class name to make CSS styling easier
//         // shopName.classList.add('board-game-shop')
//         // div.appendChild(shopName)
//
//         //appending the entire div to #board-games, an id in the HTML
//         document.getElementById('board-games').appendChild(div)
//     })
// })
//
// //This will only run if parsing the Etsy data does not work
// .catch(function(ex) {
//    console.log('parsing failed', ex)
// })
//
// // {"name":"alba","email":"jeie@herman.name","userpic":"https://robohash.org/daniel","bio":"Blue bottle heirloom scenester tote bag distillery keffiyeh.","chirps":[{"title":"Omnilingualism","body":"No reward is worth this.","user_id":1},{"title":"Immortality","body":"Judge me by my size, do you?","user_id":1},{"title":"Energy Manipulation","body":"I find your lack of faith disturbing.","user_id":1}]}
