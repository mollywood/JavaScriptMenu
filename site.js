let dishesDiv = document.querySelector("#dishesDiv")

let btnAll = document.querySelector("#btnAll")
btnAll.addEventListener('click',function(){
  populateDishes(dishes)
})

let btnStarters = document.querySelector('#btnStarters')
btnStarters.addEventListener('click', function(){
  let filteredDishes = getDishesBy("Starters")
  populateDishes(filteredDishes)
})

let btnEntrees = document.querySelector('#btnEntrees')
btnEntrees.addEventListener('click', function(){
  let filteredDishes = getDishesBy("Entrees")
  populateDishes(filteredDishes)
})

let btnDesserts = document.querySelector('#btnDesserts')
btnDesserts.addEventListener('click', function(){
  let filteredDishes = getDishesBy("Desserts")
  populateDishes(filteredDishes)
})

function getDishesBy(course) {
  let filteredDishes = dishes.filter(function(dishes) {
    return dishes.course == course
  })
  return filteredDishes
}

function populateDishes(dishesToDisplay) {
  dishesDiv.innerHTML = ''

  for(let index = 0; index < dishes.length; index++) {

    let dishItem = `<img src='${dishes[index].imageURL}' />
    <h4>${dishes[index].title}</h4>
    <p> ${dishes[index].description} </p>`

    dishesDiv.innerHTML += dishItem
  }
}
