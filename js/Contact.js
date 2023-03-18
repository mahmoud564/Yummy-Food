export default class Contact {
    constructor() {
        this.Contact
    }
    async Contact(e) {
        $(".loading-screen").fadeIn(300)
        $(".Contact").addClass("d-none");
        $(".Searsh").addClass("d-none");
        $(".data").removeClass("d-none");
        $(".data").addClass("d-block");
        let api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e}`)
        let recpons = await api.json()
        this.ShowContact(recpons.meals[0])
        $(".loading-screen").fadeOut(300)
    }
    ShowContact(e) {
        let strTagstext = ""
        if (e.strTags == null) {
            strTagstext = ""
        } else {
            let strTagsarry = e.strTags.split(",")
            for (let i = 0; i < strTagsarry.length; i++) {
                strTagstext += `<li class="alert alert-danger m-2 p-1">${strTagsarry[i]}</li>`
            }
        }



        let strMeasuretext = ''
        for (let i = 0; i <= 20; i++) {
            if (e[`strIngredient${i}`]) {
                strMeasuretext += `<li class="alert alert-info m-2 p-1">${e[`strMeasure${i}`]} ${e[`strIngredient${i}`]}</li>`
            }

        }
        document.getElementById("RowData").innerHTML =
            `<div class="col-md-4">
        <img class="w-100 rounded-3" src="${e.strMealThumb}" alt="">
            <h2>${e.strMeal}</h2>
    </div>
    <div class="col-md-8">
        <h2>Instructions</h2>
        <p>${e.strInstructions}</p>
        <h3><span class="fw-bolder">Area : </span>${e.strArea}</h3>
        <h3><span class="fw-bolder">Category : </span>${e.strCategory}</h3>
        <h3>Recipes :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap strMeasure">
            <li class="alert alert-info m-2 p-1">${e.strMeasure1} ${e.strIngredient1}</li>
        </ul>
        <h3>Tags :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap strTags">
       
        </ul>
        <a target="_blank" href="${e.strSource}" class="btn btn-success">Source</a>
        <a target="_blank" href="${e.strYoutube}" class="btn btn-danger">Youtube</a>
    </div></div >`
        document.querySelector(".strTags").innerHTML = strTagstext
        document.querySelector(".strMeasure").innerHTML = strMeasuretext
    }

}