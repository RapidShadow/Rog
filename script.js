$(document).ready(function() {
  let products = [{
      product: "Original",
      image: "images/original.png",
      price: "$8.00"
    }, {
      product: "Blueberry",
      image: "images/blueberry.png",
      price: "$8.00"
    },
    {
      product: "Strawberry",
      image: "images/strawberry.png",
      price: "$8.00"
    },
    {
      product: "Orange",
      image: "images/orange.png",
      price: "$8.00"
    },
    {
      product: "Grape",
      image: "images/grape.png",
      price: "$8.00"
    },
    {
      product: "Fruit Punch",
      image: "images/punch.png",
      price: "$8.00"
    },
    {
      product: "Lemonade",
      image: "images/lemonade.png",
      price: "$8.00"
    },
    {
      product: "Wealches",
      image: "images/wealches.png",
      price: "$8.00"
    },
  ]
  for (let i = 0; i < products.length; i++) {
    let mContent = `
    <div class="card">
  <p class="stuff">${products[i]["product"]}</p>
  <img src=${products[i]["image"]} class="poster">
  <p class="stuff">${products[i]["price"]}<p>
  <p class="stuff">SOLD OUT<p>
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
    let newElement = `<embed src="dark.mp3" width="0" height="0" loop="infinite" autostart="true" hidden="true" />
    <div id="demlogo">
    <img src="images/demLogo.png" width="100px" height="100px">
    </div>
    <p class="dem">.ztgc a zgnc uj xknzus xaue zut so zah .zo uj z'tuj yrroq mtoqusy</p>
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
