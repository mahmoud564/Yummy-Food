import Contact from "./Contact.js"
let finallContact = new Contact
export default class Searsh {
    constructor() {
        let regx=/^([A-Z]||[0-9]||[.,%]){1}$/i
        $(".liSearch").click(() => this.Search());
        $(".liContact").click(() => this.Contact());
        let SearchName = document.getElementById("SearchName")
        SearchName.addEventListener("input", () => { this.api(SearchName.value) })
        let SearchLetter = document.getElementById("SearchLetter")
        SearchLetter.addEventListener("input", () => { if (regx.test(SearchLetter.value)) {
            this.apiL(SearchLetter.value)
        }else{if (SearchLetter.value=="") {
            this.apiL()
        }else{this.apiL("a")}
    }})
    }
    Search() {
        $(".Searsh").removeClass("d-none");
        $(".Searsh").addClass("d-block");
        $(".Searsh").siblings(".test").addClass("d-none")
    }
    Contact() {
        $(".Contact").removeClass("d-none");
        $(".Contact").addClass("d-block");
        $(".Contact").siblings(".test").addClass("d-none")
    }
    async api(e) {
        $(".loading-screen").fadeIn(300)
        $(".Contact").addClass("d-none");
        $(".data").removeClass("d-none");
        let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`)
        let recpons = await api.json()
        this.ShowData(recpons)
        $(".loading-screen").fadeOut(200)
    }
    async apiL(e) {
        $(".loading-screen").fadeIn(300)
        $(".Contact").addClass("d-none");
        $(".data").removeClass("d-none");
        let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${e || "A"}`)
        let recpons = await api.json()
        this.ShowData(recpons)
        $(".loading-screen").fadeOut(200)
    }
    ShowData = (e) => {
        if (e.meals == null) {
            $(".loading-screen").fadeOut(200)
            document.getElementById("RowData").innerHTML = ""

        } else {
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
    }
}




