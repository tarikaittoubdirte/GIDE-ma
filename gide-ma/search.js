  let availableKeywords = [
'Marrakech',
'Agadir',
'Ouarzazate',
'Ifrane',
'Rabat',
'Fes',
'Tanger',
'Chefchaouen',
];

const cityPages = {
    "Marrakech": "ville-marrakech.html",
    "Agadir": "ville-agadir.html",
    "Ouarzazate": "ville-ouarzazate.html",
    "Ifrane": "ville-ifrane.html",
    "Rabat": "ville-rabat.html",
    "Fes": "ville-fes.html",
    "Tanger": "ville-tanger.html",
    "Chefchaouen": "ville-chefchaouen.html"
};

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
if(input.length) {
result = availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes (input.toLowerCase());
});
console.log(result);
}
display(result);
if(!result.length) {
resultsBox.innerHTML = '';
}
}
       function display(result) {
    const content = result.map((city) => {
        return `<li onclick="redirectToCity('${city}')">${city}</li>`;
    });
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}
function redirectToCity(city){
    inputBox.value = city;
    resultsBox.innerHTML = '';

    // Redirection
    if (cityPages[city]) {
        window.location.href = cityPages[city];
    } else {
        alert("Page non trouvée pour : " + city);
    }
}

function selectInput (list){
inputBox.value = list.innerHTML;
resultsBox.innerHTML = '';
}