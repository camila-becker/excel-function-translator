const excelFunctions = [
    {
        name: "procv",
        english: "vlookup",
        descriptionEnglish: "Something",
        descriptionPortuguese: "Alguma coisa"
    },
    {
        name: "soma",
        english: "sum",
        descriptionEnglish: "Something else",
        descriptionPortuguese: "Alguma coisa"
    }
]


let portuguese = document.getElementById("portuguese");
let english = document.getElementById("english");

let descriptionEnglish = document.querySelector(".description-english");
let descriptionPortuguese = document.querySelector(".description-portuguese");

let resultEnglish = document.querySelector(".result-english");
let resultPortuguese = document.querySelector(".result-portuguese");

let btnPortuguese = document.querySelector(".btn-portuguese");
let btnEnglish = document.querySelector(".btn-english");

btnPortuguese.addEventListener("click", (event) => {
    event.preventDefault();

    const isFunction = excelFunctions.find(excelFunction => excelFunction.name === portuguese.value.toLowerCase());

    if(isFunction){
        return resultEnglish.innerHTML = isFunction.english;
    }else{
        return resultEnglish.innerHTML = "Função inválida!";
    }
});  

btnEnglish.addEventListener("click", (event) => {
    event.preventDefault();

    const isFunction = excelFunctions.find(excelFunction => excelFunction.english === english.value.toLowerCase());

    if(isFunction){
        return resultPortuguese.innerHTML = isFunction.name;
    }else{
        return resultPortuguese.innerHTML = "Invalid function!";
    }
});