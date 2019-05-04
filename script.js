$(document).ready(function() {
      let products = [{
          product: "Blueberry",
          image:"images/product1.png",
          price: "$8.00"
        },
        {
          product: "Strawberry",
          image: "images/product1.png",
          price: "$8.00"
        }
      ]
      for (let i = 0; i < products.length; i++) {
        let mContent = `<div class="card">
  <p>${products[i]["product"]}</p>
  <img src=${products[i]["image"]} class="poster">
  <p>${products[i]["price"]}</p>
</div>`
        console.log(mContent);
        $("#display-area").append(mContent);
      }
    })
