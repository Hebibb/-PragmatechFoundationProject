// function Acan() {
//     document.querySelector(".sibling").style.display = "block";
// }
const accordion = document.getElementsByClassName('accord')
let i
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.height === "0px") {
            panel.style.height = "60px";
        } else {
            panel.style.height = "0px";
        }
    });
}