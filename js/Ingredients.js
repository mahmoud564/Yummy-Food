import Contact from "./Contact.js"
let finallContact = new Contact
export default class Ingredients {
    constructor() {
        $(".Ingredients").click(() => { this.Ingredients() })
    }
    async Ingredients() {
        $(".loading-screen").fadeIn(300)
        $(".Contact").addClass("d-none");
        $(".Searsh").addClass("d-none");
        $(".data").removeClass("d-none");
        $(".data").addClass("d-block");
        let api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        let recpons = await api.json()
        this.ShowIngredients(recpons)
        $(".loading-screen").fadeOut(300)
    }

    ShowIngredients = (e) => {
        let code = 0
        if (e.meals.length > 20) {
            code = 20
        } else {
            code = e.meals.length
        }
        let conter = ""
        for (let index = 0; index < code; index++) {
            conter += `<div class="col-md-3 gy-3 text-center target">
                    <div class="meal position-relative rounded-2 overflow-hidden">
                    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <h3>${e.meals[index].strIngredient}</h3>
                    <p>${e.meals[index].strDescription.split(" ").slice(0, 20).join(" ")}</p>
                    
                </div>
            </div>`
        }
        document.getElementById("RowData").innerHTML = conter

        let target = document.querySelectorAll(".target")
        for (let index = 0; index < target.length; index++) {
            target[index].addEventListener("click", () => { this.IngredientsCaunt(e.meals[index].strIngredient); })
        }
    }



    async IngredientsCaunt(e) {
        $(".loading-screen").fadeIn(300)
        $(".Contact").addClass("d-none");
        $(".Searsh").addClass("d-none");
        $(".data").removeClass("d-none");
        $(".data").addClass("d-block");
        let api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${e}`)
        let recpons = await api.json()
        this.ShowIngredientCaunt(recpons)
        $(".loading-screen").fadeOut(300)
    }


    ShowIngredientCaunt = (e) => {
        let code = 0
        if (e.meals.length > 20) {
            code = 20
        } else {
            code = e.meals.length
        }
        let conter2 = ""
        for (let index = 0; index < code; index++) {
            conter2 += `<div class="col-md-3 gy-3 target">
                 <div class="meal position-relative rounded-2 overflow-hidden">
                    <img src="${e.meals[index].strMealThumb}" alt="" class="w-100">
                    <div class="leyar position-absolute d-flex align-items-center text-black p-2">
                    <h3>${e.meals[index].strMeal}</h3>
                    </div>
                </div>
            </div>`
        }
        document.getElementById("RowData").innerHTML = conter2
        let target = document.querySelectorAll(".target")
        for (let index = 0; index < target.length; index++) {
            target[index].addEventListener("click", () => {
                finallContact.Contact(e.meals[index].idMeal)
            })
        }
    }

}
