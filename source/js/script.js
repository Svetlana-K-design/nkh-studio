var accordion = document.getElementsByClassName("accordion");

for (var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var item = this.nextElementSibling;
        if (item.style.display === "block") {
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
    });
}
