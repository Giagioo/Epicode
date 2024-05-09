window.onscroll = function() { stickyMenu() }

function stickyMenu() {
    if(document.documentElement.scrollTop > 60) {
        document.querySelector("header").classList.add("sticky")
    } else {
        document.querySelector("header").classList.remove("sticky")
    }
}