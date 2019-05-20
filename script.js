$(document).ready(function() {
  let products = {
    original: {
      product: "original",
      image: "images/original.png",
      price: "$8.00",
      status: "sold out",

    },
    blueberry: {
      product: "blueberry",
      image: "images/blueberry.png",
      price: "$8.00",
      status: "sold out",
    },
    strawberry: {
      product: "strawberry",
      image: "images/strawberry.png",
      price: "$8.00",
      status: "sold out",
    },
    orange: {
      product: "orange",
      image: "images/orange.png",
      price: "$8.00",
      status: "sold out",
    },
    grape: {
      product: "grape",
      image: "images/grape.png",
      price: "$8.00",
      status: "sold out",
    },
    fruitPunch: {
      product: "fruit punch",
      image: "images/punch.png",
      price: "$8.00",
      status: "sold out",
    },
    lemonade: {
      product: "lemonade",
      image: "images/lemonade.png",
      price: "$8.00",
      status: "sold out",
    },
    welches: {
      product: "welches",
      image: "images/welches.png",
      price: "$8.00",
      status: "sold out",
    },
    cottonCandy: {
      product: "cotton candy",
      image: "images/candy.png",
      price: "$8.00",
      status: "sold out",
    },
    sweetMint: {
      product: "sweet mint",
      image: "images/mint.png",
      price: "$8.00",
      status: "sold out",
    },
    muchoMango: {
      product: "mucho mango",
      image: "images/mango.png",
      price: "$8.00",
      status: "sold out",
    },
    krispiesTendies: {
      product: "krispies tendies",
      image: "images/chicken.png",
      price: "$8.00",
      status: "coming soon",
    }
  }
  //loopping the JSon object in the website to load content
  for (let key in products) {
    let mContent = `
    <div class="card" id="${products[key]["product"]}">
  <p class="stuff">${products[key]["product"]}</p>
  <img src=${products[key]["image"]} class="poster" >
  <p class="stuff">${products[key]["price"]}<p>
  <p class="stuff">${products[key]["status"]}<p>
</div>`
    $("#display-area").append(mContent);
  }

  $(".card").click(function() {
    let cardId = $(this).attr("id");
    $("body").empty();
    let newNav = `
     <nav>
      <ul class="left">
        <li><a href="home.html">home</a></li>
        <li> <a href="index.html">about</a></li>
        <li> <a href="shop.html">shop</a></li>
        <li> <a href="contact.html">contact</a></li>
      </ul>
      <img src="images/logo.png" id="logo">
      <a href="shop.html"><img src="images/cart.png" id="cart" class="right"> </a>
    </nav>
    `
    $("body").append(newNav);

    let newElement = `
    <div id="backdiv">
    <a href="shop.html" id="back">back</a>
    </div>
    <div id="content">
    <img src="${products[cardId]["image"]}" class="pImage">
    <h3 class="pName">${products[cardId]["product"]}</h3>
    </div>

  `
    $("body").append(newElement);
  })

  let points = 0
  $("#logo").click(function() {
    points++;
    console.log(points);
    if (points >= 6) {
      $("body").empty()
      let newElement = `<embed src="dark.mp3" width="0" height="0" loop="true" autostart="true" hidden="true" />
    <div id="demlogo">
    <img src="images/demLogo.png" width="100px" height="100px">
    </div>
    <p class="dem">Smoking kills bro, but im not your mother so do what you want.</p>
    <div id="demlogo">
    <img src="images/demon.png">
    </div>
    `

      $("body").append(newElement);
      $("body").css({
        "background-color": "black"
      });
    }
  })





})
