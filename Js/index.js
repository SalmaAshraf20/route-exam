const rowData =document.querySelector(".row");
const catLi =document.querySelector(".li-cat");
const areaLi =document.querySelector(".li-area");
const ingLi =document.querySelector(".li-ing");
const itemsMain =document.querySelector(".items-main");
const itemscat =document.querySelector(".items-cat");
const itemsing =document.querySelector(".items-ing");
const itemsarea =document.querySelector(".items-area");

// !main function
async function getMeals() {
    let respose = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    var data = await respose.json();
    dispalyMeals(data.meals)
}
// !display main
function dispalyMeals(arr) {
    let col=``;
    for (let i=0 ; i <arr.length ;i++){
        col += `<div class="col-md-3 items-main">
                    <div class="inner px-1">
                        <img src="${arr[i].strMealThumb}" alt="" class="w-100 rounded-2" />
                        <div class="overlay d-flex justify-content-center align-items-center rounded-2">
                            ${arr[i].strMeal}
                        </div>
                    </div>
                </div>`}
    rowData.innerHTML=col;
}

// *category function
async function getCategory() {
    let respose = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    var data = await respose.json();
    dispalycategory(data.categories)
}
// *display category
function dispalycategory(arr) {
    let col=``;
    for (let i=0 ; i <arr.length ;i++){
        col += `
        <div class="col-md-3 .items-cat">
                    <div class="inner px-1">
                        <img src="${arr[i].strCategoryThumb}" alt="" class="w-100 rounded-2" />
                        <div class="overlay rounded-2">
                            <h3 class="my-2 text-center">${arr[i].strCategory}</h3>
                            <p class="my-2 mx-auto text-center w-75">${arr[i].strCategoryDescription}</p>
                        </div>
                    </div>
                </div>`}
    rowData.innerHTML = col;
}


// &area function
async function getArea() {
    let respose = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    var data = await respose.json();
    dispalyArea(data.meals)
}
// &display Area
function dispalyArea(arr) {
    let col=``;
    for (let i=0 ; i <arr.length ;i++){
        col += `
        <div class="col-md-3 .items-area">
                    <div class="inner px-1">
                        <div class="overlay rounded-2">
                            <h3 class="my-2 text-center">${arr[i].strArea}</h3>
                        </div>
                    </div>
                </div>`}
    rowData.innerHTML = col;
}

// ?Ingredients function
async function getIngredients() {
    let respose = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    var data = await respose.json();
    dispalyIngredients(data.meals)
}
// ?display Area
function dispalyIngredients(arr) {
    let col=``;
    for (let i=0 ; i <arr.length ;i++){
        col += `
        <div class="col-md-3 .items-ing">
                    <div class="inner px-1">
                        <div class="overlay rounded-2">
                            <h3 class="my-2 text-center">${arr[i].strIngredient}</h3>
                        </div>
                    </div>
                </div>`}
    rowData.innerHTML = col;
}

catLi.addEventListener("click" , function() {
    itemsMain.classList.add("d-none");
    itemsarea.classList.add("d-none");
    itemsing.classList.add("d-none");
    getCategory();
})
areaLi.addEventListener("click" , function() {
    itemsMain.classList.add("d-none");
    itemscat.classList.add("d-none");
    itemsing.classList.add("d-none");
    getArea();
})
ingLi.addEventListener("click" , function() {
    itemsMain.classList.add("d-none");
    itemscat.classList.add("d-none");
    itemsarea.classList.add("d-none");
    getIngredients();
})

getMeals();
// getCategory();
// getArea();
// getIngredients();