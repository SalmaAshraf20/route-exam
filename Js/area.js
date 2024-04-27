const rowData =document.querySelector(".main");

async function area() {
    let respose = await fetch(`www.themealdb.com/api/json/v1/1/list.php?a=list`);
    var data = await respose.json();
    dispalyArea(data.meals)
}
area();

function dispalyArea(arr) {
    let col=``;
    for (let i=0 ; i <arr.length ;i++){
        col += `
                <div class="col-md-3 ">
                    <div class="overlay d-flex justify-content-center align-items-center rounded-2">
                        ${arr[i].strArea}
                    </div>
                </div>
    `    
    }
    rowData.innerHTML=col;
}