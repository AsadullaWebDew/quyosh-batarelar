const totop = dacument.querySelector(".to-top");

window.addEeventListener("scrool",() => {
    if (window.pageYOffset > 100) {
        totop.classList.add("active");
    } else {
        totop.classList.remove("active")
    }
})

