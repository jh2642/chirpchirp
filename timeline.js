//Retrieving the Esty API data
fetch('https://2af14e96.ngrok.io/chirps')

//Parsing the data
.then(function(response) {
    return response.json()
})

//Actually doing something with the data!
.then(function(timelineData) {

    //"Do this to each piece of data" - actually creating the bulk of the page in this section
    timelineData.results.forEach(function(post) {

        //Creating div to nest rest of API data in - this whole div is a link to the item within it
        var div = document.createElement('a')
        div.setAttribute('href', boardGame.url)
        //Adding class name to make CSS styling easier
        div.classList.add('board-game')

        //Pulling in images from Etsy API and adding them to the div created above
        var img = document.createElement('img')
        img.setAttribute('src', boardGame.Images[0].url_570xN)
        div.appendChild(img)

        //Pulling in the title from Etsy and adding the title to the div
        var title = document.createElement('p')
        title.innerHTML = boardGame.title
        //Adding class name to make CSS styling easier
        title.classList.add('board-game-title')
        div.appendChild(title)

        //Pulling in the price and adding it to the div
        var price = document.createElement('p')
        price.innerHTML = '$' + boardGame.price
        //Adding class name to make CSS styling easier
        price.classList.add('board-game-price')
        div.appendChild(price)

        //Pulling in the shop name and adding it to the div
        var shopName = document.createElement('p')
        shopName.innerHTML = boardGame.Shop.shop_name
        //Adding class name to make CSS styling easier
        shopName.classList.add('board-game-shop')
        div.appendChild(shopName)

        //appending the entire div to #board-games, an id in the HTML
        document.getElementById('board-games').appendChild(div)
    })
})

//This will only run if parsing the Etsy data does not work
.catch(function(ex) {
   console.log('parsing failed', ex)
})
