export default class SideBar {
    constructor() {
        this.side
        this.sidebar
        $(".link ul li").click(() => this.clicklift())
    }
    sidebar() {
        let sidebarinnerwidth = $(".contact").innerWidth();
        $(".SaideBar").animate({ left: -sidebarinnerwidth }, 200)
    }
    side() {
        $(".nav-header i").click(function () {
            let sidebarinnerwidth = $(".contact").innerWidth();
            if ($(".SaideBar").css("left") == "0px") {
                $(".SaideBar").animate({ left: -sidebarinnerwidth }, 500, function () {
                    $(".1,.2,.3,.4,.5").animate({ top: "300px" }, 10)
                    document.querySelector(".icon i").classList.replace("fa-x", "fa-align-justify")
                })
            }
            else {
                $(".SaideBar").animate({ left: "0px" }, 500, function () {
                    document.querySelector(".icon i").classList.replace("fa-align-justify", "fa-x")
                    $(".1").animate({ top: "0px" }, 0, function () {
                        $(".2").animate({ top: "0px" }, 50, function () {
                            $(".3").animate({ top: "0px" }, 50, function () {
                                $(".4").animate({ top: "0px" }, 50, function () {
                                    $(".5").animate({ top: "0px" }, 50, function () { })
                                })
                            })
                        })
                    })
                })
            }
        })
    }
    clicklift() {
        let sidebarinnerwidth = $(".contact").innerWidth();
        $(".SaideBar").animate({ left: -sidebarinnerwidth }, 500)
        document.querySelector(".icon i").classList.replace("fa-x", "fa-align-justify")
        $(".1,.2,.3,.4,.5").animate({ top: "300px" }, 10)

    }
}
