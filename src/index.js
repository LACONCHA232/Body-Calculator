
const form = document.querySelector('#myForms');
form.addEventListener('submit', DATA);
function DATA(event) {
    event.preventDefault();

    const weight = document.querySelector('#Weight').value;
    const height = document.querySelector('#Height').value;
    const age = document.querySelector('#Age').value;
    const gender = document.querySelector('#Gender').value;
    const activity = document.querySelector('#Activity').value;

    console.log(weight,height,age,gender,activity);

    const TDA = TMBH(weight,height,age);
    const sedentary = TDA * 1.2;
    console.log("dactor de actividad " + sedentary);

}

// FUNCION PARA LA TASA METABOLICA BASAL DEL HOMBRE
function TMBH(weight,height,age) {
    const TMBhombre = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    console.log("Tasa metcabolica Basal hombre es: " + TMBhombre);
    return TMBhombre;
}
// FUNCION PARA LA TASA METABOLICA BASAL DE LA MUJER
function TMBM(weight,height,age) {
    const TMBmujer = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    console.log("Tasa Metabolica Basal Mujer es: " + TMBmujer);
    return TMBmujer;
}
// ingresando los datos por el momento
// const TasaMetabolicaBasalHombre = TMBH(67,177,21);
// const TasaMetabolicaBasalMujer = TMBH(51,160,19);

// la multiplicacion funciona
// function FactorA() {
//     const factorActividad = activity;
//     const sedentary = TasaMetabolicaBasalHombre * 1.2;
//     console.log(sedentary);
//     // if (true) {
//     //     const sedentary = TasaMetabolicaBasalHombre * 1.2;
//     //     console.log(sedentary);
//     // }
// }
