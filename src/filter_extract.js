var filter = document.getElementById("filter_side_container")

appendchild(JSON.parse(localStorage.getItem("category")))
function appendchild(d) {
  d.forEach(({ image, tablet, price }) => {
    let div = document.createElement("div")
    div.className = "filter_side_container1"

    let img = document.createElement("img")
    img.src = image
    let p = document.createElement("p")
    let t = tablet.split(" ")
    // console.log(t[0])
    t = t.length > 1 ? `${t[0] + " " + t[1]}` : tablet
    p.innerText = t

    let pri = document.createElement("p")
    pri.className = "price_style_filter"
    pri.innerText = `${price}₹`
    let btn_div = document.createElement("div")
    btn_div.className = "button_contaner"
    pri.innerText = price
    pri.id = "price"
    pri.className = "price_cart_cont"

    let div2 = document.createElement("div")
    div2.className = "quantity button_view_cont"

    let b1 = document.createElement("button")
    b1.setAttribute("type", "button")
    b1.className = "btn minus-btn disabled"
    b1.textContent = "-"
    let in1 = document.createElement("input")
    in1.setAttribute("value", "1")
    in1.setAttribute("type", "text")
    in1.id = "quantity"
    let b2 = document.createElement("button")
    b2.setAttribute("type", "button")
    b2.className = "btn plus-btn"
    b2.textContent = "+"

    let buttn2 = document.createElement("button")
    buttn2.textContent = "ADD"
    buttn2.onclick = function () {
      addFav({ image, tablet, price })
    }
    div2.append(b1, in1, b2)
    btn_div.append(div2, buttn2)
    div.append(img, p, pri, btn_div)
    filter.append(div)
  })
}
function addFav(d) {
  let addi = localStorage.getItem("cart") //is ther anything called cart obvious not at starting
  if (addi == null) {
    addi = []
  } else {
    addi = JSON.parse(addi) //JSON to object in the foem of array
    // for (var i = 0; i < addi.length; i++) {
    //   if (addi[i].id == d.id) {
    //     alert("Already in Cart")
    //     return
    //   }
    // }
  }
  addi.push(d)
  console.log(addi) //array of Objects
  localStorage.setItem("cart", JSON.stringify(addi))
  alert("Added to cart") //back to JSON from Object
  console.log(addi, d)

  let suma = document.getElementById("tot")

  suma.innerText = addi.length
}
function viewcart() {
  window.location.href = "/pages/viewcart.html"
}
document.querySelector(".minus-btn").setAttribute("disabled", "disabled")

var valueCount

var price = document.getElementById("price").innerText

function priceTotal() {
  var total = valueCount * price
  console.log(typeof total)
  document.getElementById("price").innerText = total
}

document.querySelector(".plus-btn").addEventListener("click", function () {
  valueCount = document.getElementById("quantity").value

  valueCount++

  document.getElementById("quantity").value = valueCount

  if (valueCount > 1) {
    document.querySelector(".minus-btn").removeAttribute("disabled")
    document.querySelector(".minus-btn").classList.remove("disabled")
  }

  priceTotal()
})

document.querySelector(".minus-btn").addEventListener("click", function () {
  valueCount = document.getElementById("quantity").value

  valueCount--

  document.getElementById("quantity").value = valueCount

  if (valueCount == 1) {
    document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
  }

  priceTotal()
})