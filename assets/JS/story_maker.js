let names = [
    " Erwin",
    " Eren",
    " Livai",
    " Mikasa",
    " Armin"
]

let objects = [
    " avec une épée",
    " avec un équipement tridimentionel",
    " avec un Balais",
    " avec une Hache",
    " avec une dague"
]

let temperatures = [
    " par 10°",
    " par 20°",
    " par 15°",
    " par 5°",
    " par 0°"
]

let places = [
    " à la zone d'entrainement ",
    " au district de Trost ",
    " au district de Shiganshina ",
    " à l'extérieur des murs ",
    " au district de Stohese "
]

let verbs = [
    " se bat contre le Titan",
    " s'entraîne avec",
    " se bat contre le cuirassé",
    " se bat contre le colossal",
    " se bat contre le bestial"
]

let alea = -1

function aleaGenerator (){
    let newAlea = Math.round(Math.random() * 4)
    if (alea === newAlea){
        aleaGenerator()
    }
    else {
        alea = newAlea
    }
    return alea
}

document.getElementById("valid").addEventListener("click", function (){
    alea = aleaGenerator()
    if (document.getElementById("userName").value !== "") {
        document.getElementById("story").innerHTML = document.getElementById("userName").value + verbs[alea] + names[alea] + objects[alea] + places[alea] + temperatures[alea]
    }
})