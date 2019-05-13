$(document).ready(function() {
  let products = [{
      product: "original",
      image: "images/original.png",
      price: "$8.00",
      status: "sold out"
    }, {
      product: "blueberry",
      image: "images/blueberry.png",
      price: "$8.00",
      status: "sold out"
    },
    {
      product: "strawberry",
      image: "images/strawberry.png",
      price: "$8.00",
      status: "sold out"
    },
    {
      product: "orange",
      image: "images/orange.png",
      price: "$8.00",
      status: "sold out"
    },
    {
      product: "grape",
      image: "images/grape.png",
      price: "$8.00",
      status: "sold out"
    },
    {
      product: "fruit punch",
      image: "images/punch.png",
      price: "$8.00",
      status: "sold out"
    },
    {
      product: "lemonade",
      image: "images/lemonade.png",
      price: "$8.00",
      status: "sold out"
    },
    {
      product: "welches",
      image: "images/welches.png",
      price: "$8.00",
      status: "sold out"
    },
    {
      product: "cotton candy",
      image: "images/candy.png",
      price: "$8.00",
      status: "sold out"
    },
    {
      product: "sweet mint",
      image: "images/mint.png",
      price: "$8.00",
      status: "sold out"
    },
    {
      product: "mucho mango",
      image: "images/mango.png",
      price: "$8.00",
      status: "sold out"
    },
    {
      product: "krispies tendies",
      image: "images/chicken.png",
      price: "$8.00",
      status: "coming soon"
    }






  ]
  for (let i = 0; i < products.length; i++) {
    let mContent = `
    <div class="card" id="${products[i]["product"]}">
  <p class="stuff">${products[i]["product"]}</p>
  <img src=${products[i]["image"]} class="poster" >
  <p class="stuff">${products[i]["price"]}<p>
  <p class="stuff">${products[i]["status"]}<p>
</div>`
    console.log(mContent);
    $("#display-area").append(mContent);
  }
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

    $("body").append(newElement)
    $("body").css({
      "background-color": "black"
    });
  }






})
