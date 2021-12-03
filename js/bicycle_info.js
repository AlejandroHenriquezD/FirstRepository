window.onload = initialize;

let bicycles =[ 
    {
        brand: "Orbea ",
        model: "Star"
    },
    {
        brand: "Orbea",
        model: "Sky P3"
    },
    {
        brand: "BH",
        model: "Sunset"
    },
];

function initialize(){
    let bicycleInfo = document.getElementById("bicycle-info");
    let allInfo = "";
    for(let t=0;t<3;t++){
    allInfo += '<h1>' + bicycles[t].brand + ' <span class="highlight">' + bicycles[t].model + '</span></h1>';
    }
    
    bicycleInfo.innerHTML = allInfo;
}