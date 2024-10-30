

let lists = document.querySelectorAll(".list");
let rightbox = document.getElementById("right");
let leftbox = document.getElementById("left");

lists.forEach(list => {
    list.addEventListener("dragstart", function(e) {
        let selected = e.target;

        rightbox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        rightbox.addEventListener("drop", function(e) {
            rightbox.appendChild(selected);
            selected = null;
        });

        leftbox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        leftbox.addEventListener("drop", function(e) {
            leftbox.appendChild(selected);
            selected = null;
        });
    });
});
