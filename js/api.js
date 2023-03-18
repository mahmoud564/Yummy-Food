import Contact from "./Contact.js"
let finallContact = new Contact

export default class Api {
    constructor() {
        this.api
        this.ShowData
        $(".categories").click(() => { this.categorie() })
    }
    async api() {
        let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        let recpons = await api.json()
        this.ShowData(recpons)
    }
    ShowData = (e) => {
        let code = 0
        if (e.meals.length > 20) {
            code = 20
        } else {
            code = e.meals.length
        }
        let conter = ""
        for (let index = 0; index < code; index++) {
            conter += `<div class="col-md-3 gy-3 target">
             <div class="meal position-relative rounded-2 overflow-hidden">
                <img src="${e.meals[index].strMealThumb}" alt="" class="w-100">
                <div class="leyar position-absolute d-flex align-items-center text-black p-2">
                <h3>${e.meals[index].strMeal}</h3>
                </div>
            </div>
        </div>`
        }
        document.getElementById("RowData").innerHTML = conter
        let target = document.querySelectorAll(".target")
        for (let index = 0; index < target.length; index++) {
            target[index].addEventListener("click", () => {
                finallContact.Contact(e.meals[index].idMeal)
            })
        }
    }


    async categorie() {
        $(".loading-screen").fadeIn(300)
        $(".Contact").addClass("d-none");
        $(".Searsh").addClass("d-none");
        $(".data").removeClass("d-none");
        $(".data").addClass("d-block");
        let api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        let recpons = await api.json()
        this.Showcategorie(recpons)
        $(".loading-screen").fadeOut(300)
    }
    Showcategorie = (e) => {
        let code = 0
        if (e.categories.length > 20) {
            code = 20
        } else {
            code = e.categories.length
        }
        let conter1 = ""
        for (let index = 0; index < code; index++) {
            ;
            conter1 += `<div class="col-md-3 gy-3 target">
             <div class="meal position-relative rounded-2 overflow-hidden">
                <img src="${e.categories[index].strCategoryThumb}" alt="" class="w-100">
                <div class="leyar position-absolute text-center align-items-center text-black p-2">
                <h3>${e.categories[index].strCategory}</h3>
                <p>${e.categories[index].strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
                </div>
            </div>
        </div>`
        }
        document.getElementById("RowData").innerHTML = conter1
        let target = document.querySelectorAll(".target")
        for (let index = 0; index < target.length; index++) {
            target[index].addEventListener("click", () => {
                this.AreaCategoryCantre(e.categories[index].strCategory);
            })
        }
    }
    async AreaCategoryCantre(cantre) {
        $(".loading-screen").fadeIn(300)
        $(".Contact").addClass("d-none");
        $(".Searsh").addClass("d-none");
        $(".data").removeClass("d-none");
        $(".data").addClass("d-block");
        let api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cantre}`)
        let recpons = await api.json()
        this.ShowData(recpons)
        $(".loading-screen").fadeOut(300)
    }
}
