
// MENU HAMBURGUESA
const burguerIcon = document.querySelector('.burguer-icon');
const menu = document.querySelector('.burguer-menu');

burguerIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('inactive');
    console.log('clicked');
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
const TasaMetabolicaBasalHombre = TMBH(67,177,21);
const TasaMetabolicaBasalMujer = TMBH(51,160,19);

// la multiplicacion funciona
function FactorA(activity) {
    const factorActividad = activity;
    const sedentary = TasaMetabolicaBasalHombre * 1.2;
    console.log(sedentary);
    // if (true) {
    //     const sedentary = TasaMetabolicaBasalHombre * 1.2;
    //     console.log(sedentary);
    // }
}

