import Api from "./api.js";
import Area from "./Area.js";
import Contact from "./Contact.js";
import Ingredients from "./Ingredients.js";
import regex from "./regex.js";
import Searsh from "./SearshInput.js";
import sidebar from "./sidebar.js";
let finallContact = new Contact
let egex = new regex
let ingredients = new Ingredients
let area = new Area
let api = new Api
let searsh = new Searsh
let slide = new sidebar

$(function () {
    $(".loading-screen2").fadeOut(500, function () {
        $(".loading-screen").fadeOut(0)
        $(".SaideBar").fadeIn(100)
        slide.side()
        searsh
        api.api()
        area
        ingredients
        egex
        finallContact
        slide.sidebar()

    });
});