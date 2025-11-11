let liested = document.querySelectorAll(".li1")
console.log(liested);

let dropdown = document.querySelectorAll(".dropdown")
let magni = document.querySelector(".fa-magnifying-glass")
let search_drop = document.querySelector(".search-drop")
let search_drop_box1 = document.querySelector(".search-drop-box1")
let mark_x = document.querySelector(".fa-x")

let buket = document.querySelector(".fa-basket-shopping")
let side_head = document.querySelector(".side-head")
let side_bar = document.querySelector(".side-bar")
let side = document.querySelector(".side")
let side_iconbar = document.querySelector(".side-iconbar")
let icon_bar = document.querySelector(".icon-bar")
let cross = document.querySelector(".xmark")
 icon_bar.addEventListener("click",()=>{
           side_iconbar.style.right = "12px"
 })

 cross.addEventListener("click",()=>{

     side_iconbar.style.right = "-100px"  
 })






liested.forEach((ele, i) => {
       ele.addEventListener("mouseenter", () => {
              ele.style.cursor = "pointer"
              ele.style.color = "gold"
              dropdown[i].classList.add("op")
              dropdown[i].style.color = "black"
              console.log(dropdown[i]);
       })
       ele.addEventListener("mouseleave", () => {
              dropdown[i].classList.remove("op")
              ele.style.color = "white"
       })


})
dropdown.forEach((ele, i) => {
       ele.addEventListener("mouseleave", () => {
              dropdown[i].classList.remove("op")
              dropdown[i].style.color = "black"

       })
})


magni.addEventListener("click", () => {
       search_drop.classList.add("down")
       search_drop_box1.classList.add("s-d-box1")
})

mark_x.addEventListener("click", () => {
       search_drop.classList.remove("down")
       search_drop_box1.classList.remove("s-d-box1")

})

buket.addEventListener("click", () => {
       side_bar.classList.add("sider-right")
       side.classList.add("side-left")
})
side_head.addEventListener("click", () => {
       side_bar.classList.remove("sider-right")
       side.classList.add("side-left")

})

let home = document.querySelector("#home")
let a_circle = document.querySelector(".angel-circle")
let a_circle2 = document.querySelector(".angel-circle2")
let cat_box = document.querySelector(".cat-box")
let dog_box = document.querySelector(".dog-box")
let dog_img = document.querySelector(".dog-img")
let round_dog = document.querySelector(".round-dog")
home.addEventListener("mouseenter", () => {
       a_circle.classList.add("cp")
       a_circle2.classList.add("cp")
       a_circle2.style.marginLeft = "0"
})
home.addEventListener("mouseleave", () => {
       a_circle.classList.remove("cp")
       a_circle2.classList.remove("cp")
       a_circle2.style.marginLeft = "33px"

})
a_circle.addEventListener("click", () => {
       if (cat_box.classList.contains("opacity")) {
              cat_box.classList.remove("opacity")
              dog_box.classList.add("opacity")
              dog_img.classList.add("dogimg")
              round_dog.classList.add("rounddog")
       }
       else {
              dog_box.classList.remove("opacity")
              cat_box.classList.add("opacity")
              dog_img.classList.remove("dogimg")
              round_dog.classList.remove("rounddog")
       }
})
a_circle2.addEventListener("click", () => {
       if (cat_box.classList.contains("opacity")) {
              cat_box.classList.remove("opacity")
              dog_box.classList.add("opacity")
              dog_img.classList.add("dogimg")
              round_dog.classList.add("rounddog")
       }
       else {
              dog_box.classList.remove("opacity")
              cat_box.classList.add("opacity")
              dog_img.classList.remove("dogimg")
              round_dog.classList.remove("rounddog")
       }
})
let t_box1 = document.querySelectorAll(".t-box1")
let box_t_round = document.querySelectorAll(".box-t-round")

t_box1.forEach((ele, i) => {
       ele.addEventListener("mouseenter", () => {
              box_t_round[i].classList.add("box-trend-ani")
              box_t_round[i].style.border = "2px dashed rgb(114,27,101)"
              box_t_round[i].style.cursor = "pointer"
       })
       ele.addEventListener("mouseleave", () => {
              box_t_round[i].classList.remove("box-trend-ani")
              box_t_round[i].style.borderStyle = "none"
       })
})

let dis_box1 = document.querySelectorAll(".dis-box1")
let img_dis = document.querySelectorAll(".img-dis")

dis_box1.forEach((ele, i) => {
       ele.addEventListener("mouseenter", () => {
              img_dis[i].classList.add("img-scale")
       })
       ele.addEventListener("mouseleave", () => {
              img_dis[i].classList.remove("img-scale")
       })
})


let arr = [
       {
              image: "./images/1\ \(2\).jpeg",
              name: "Joust Duffle Bag",
              price: "$20.19"
       },
       {
              image: "./images/2 (2).jpeg",
              name: "Endeavor Daytripa",
              price: "$33.00"
       },
       {
              image: "./images/3 (1).jpeg",
              name: "Impulse Duffle",
              price: "$65.00"
       },
       {
              image: "./images/4.jpeg",
              name: "Driven Backpack",
              price: "$25.00"
       },
       {
              image: "./images/5.jpeg",
              name: "Fusion Backpack",
              price: "$45.00"
       },
       {
              image: "./images/6.jpeg",
              name: "Savvy Shoulder Tote",
              price: "$30.00"
       },
       {
              image: "./images/7.jpeg",
              name: "Voyage Yoga Bag",
              price: "$39.00"
       },
       {
              image: "./images/8.jpeg",
              name: "Wayfarer Messenger Bag",
              price: "$50.00"
       },

]

let small_box = document.querySelectorAll(".small-box")
let filtered
let product = document.querySelector(".product")

small_box.forEach((ele, i) => {
       ele.addEventListener("click", () => {
              product.innerHTML = ""
              small_box.forEach((eel) => {
                     eel.classList.remove("small-box-border")
              })
              ele.classList.add("small-box-border")
              if (ele.innerHTML == "All") {
                     filtered = arr

              }
              else if (ele.innerHTML == "New") {
                     filtered = arr.filter((e, i) => i > 5 || i < 2)
              }
              else if (ele.innerHTML == "Best Seller") {
                     filtered = arr.filter((e, i) => i > 3 || i < 0)
              }
              else if (ele.innerHTML == "Featured") {
                     filtered = arr.filter((e, i) => i > 7 || i < 4)
              }

              else if (ele.innerHTML == "On sall") {
                     filtered = arr.filter((e, i) => i > 4 || i < 1)
              }
              update(filtered)

              // console.log(filtered);


       })
})
update()
function update(filtered) {
       if (filtered) {
              filtered.forEach((e, i) => {
                     product.innerHTML += `
                       <div class="product-box">
                <div class="product-img">
                    <img src="${e.image}" alt="">
                    <div class="icon1">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="icon2">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                    <div class="icon3">
                        <i class="fa-solid fa-eye"></i>
                    </div>
                </div>
                <h1 class="por">${e.name}</h1>
                <h2>${e.price}</h2>
            </div>
                     `
              })
       }
       else {
              arr.forEach((e, i) => {
                     product.innerHTML += `
                       <div class="product-box">
                <div class="product-img">
                    <img src="${e.image}" alt="">
                    <div class="icon1">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="icon2">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                    <div class="icon3">
                        <i class="fa-solid fa-eye"></i>
                    </div>
                </div>
                <h1 class="por">${e.name}</h1>
                <h2>${e.price}</h2>
            </div>
                     `
              })
       }
       get()
}
function get() {

       let icon1 = document.querySelectorAll(".icon1")
       let icon2 = document.querySelectorAll(".icon2")
       let icon3 = document.querySelectorAll(".icon3")
       let black1 = document.querySelector(".black")
       let black_box1 = document.querySelector(".black-box1")
       let icon_x = document.querySelector(".fa-xmark")
       let bag1 = document.querySelector(".bag")
       let bag_icon = document.querySelector(".bag-icon")
       icon1.forEach((e, i) => {
              e.addEventListener("click", () => {
                     black1.classList.add("black-op")
                     black_box1.classList.add("black-box1m")
              })

       })
       black_box1.addEventListener("click", () => {
              black1.classList.remove("black-op")
              black_box1.classList.remove("black-box1m")
       })
       icon2.forEach((e, i) => {
              e.addEventListener("click", () => {
                     black1.classList.add("black-op")
                     black_box1.classList.add("black-box1m")
              })

       })
       icon3.forEach((e, i) => {
              e.addEventListener("click", () => {
                     bag1.classList.add("bag-op")
              })

       })

       bag_icon.addEventListener("click", () => {
              bag1.classList.remove("bag-op")
       })

}



let icon1_img = document.querySelectorAll(".icon1-img")
let icon2_img = document.querySelectorAll(".icon2-img")
let icon3_img = document.querySelectorAll(".icon3-img")
let black1 = document.querySelector(".black")
let black_box1 = document.querySelector(".black-box1")
let icon_x = document.querySelector(".fa-xmark")
let bag1 = document.querySelector(".bag")
let bag_icon = document.querySelector(".bag-icon")
icon1_img.forEach((ele) => {
       ele.addEventListener("click", () => {
              black1.classList.add("black-op")
              black_box1.classList.add("black-box1m")
       })
})
icon2_img.forEach((ele) => {
       ele.addEventListener("click", () => {
              black1.classList.add("black-op")
              black_box1.classList.add("black-box1m")
       })
})
icon3_img.forEach((ele) => {
       ele.addEventListener("click", () => {
              bag1.classList.add("bag-op")
       })
})

bag_icon.addEventListener("click", () => {
       bag1.classList.remove("bag-op")
})