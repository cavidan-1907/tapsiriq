let add = document.querySelector("#add");
let addInput = document.querySelector("#text");
let searchInput = document.querySelector("#search");
let ul = document.querySelector("ul");
let arr = [];

add.addEventListener("click", () => {
    let inputValue = addInput.value;
    if (inputValue.trim() !== "") {
        arr.push(inputValue);
        updateList();
        addInput.value = "";
    }
});

searchInput.addEventListener("input", () => {
    updateList();
});

function updateList() {
    ul.innerHTML = "";

    let searchText = searchInput.value.toLowerCase();

    arr.forEach((element, index) => {
        if (element.toLowerCase().includes(searchText)) {
            let li = document.createElement("li");
            li.textContent = element;

            let button = document.createElement("i");
            button.classList.add("bi", "bi-trash");
            button.addEventListener("click", () => removeItem(button));

            li.appendChild(button);
            ul.appendChild(li);
        }
    });
}

function removeItem(item) {
    let index;
    let children = ul.children;
    for (let i = 0; i < children.length; i++) {
        if (children[i] === item.parentNode) {
            index = i;
            break;
        }
    }
    arr.splice(index, 1);
    updateList();
}
