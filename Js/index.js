const rowData =document.querySelector(".main");

async function getMeals() {
    let respose = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=`);
    var data = await respose.json();
    dispalyMeals(data.meals)
}
getMeals();

function dispalyMeals(arr) {
    let col=``;
    for (let i=0 ; i <arr.length ;i++){
        col += `
                <div class="col-md-3 ">
                    <img src="${arr[i].strMealThumb}" alt="" class="w-100 rounded-2" />
                    <div class="overlay d-flex justify-content-center align-items-center rounded-2">
                        ${arr[i].strMeal}
                    </div>
                </div>
    `    
    }
    rowData.innerHTML=col;
}