const inputBox = document.getElementById("input");
const itemList = document.getElementById("list");

function addTask(){
    if(!inputBox.value){
        alert("Please fill out the input field");
        return;
    }
    else{
        const itemBox = document.createElement("div");
        itemBox.classList.add("item-box");
        itemList.appendChild(itemBox);

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        itemBox.appendChild(checkBox);

        checkBox.addEventListener("change", () => {
            if (checkBox.checked) {
                itemBox.classList.add("complete");
            } else {
                itemBox.classList.remove("complete");
            }
        });

        const task = document.createElement("input");
        task.type = "text";
        task.value = inputBox.value;
        task.setAttribute("disabled", "");
        itemBox.appendChild(task);

        const actions = document.createElement("div");
        actions.classList.add("btn");
        itemBox.appendChild(actions);        

        const edit_btn = document.createElement("button");
        edit_btn.classList.add("material-symbols-outlined", "edit_btn");
        edit_btn.innerText = "edit";
        actions.appendChild(edit_btn);

        const delete_btn = document.createElement("button");
        delete_btn.classList.add("material-symbols-outlined", "delete_btn");
        delete_btn.innerText = "delete";
        actions.appendChild(delete_btn);

        edit_btn.addEventListener ("click", () => {
            if(edit_btn.innerText.toLowerCase()=="edit"){
                task.removeAttribute("disabled");
                task.focus();
                edit_btn.innerText = "save";
            }
            else{
                task.setAttribute("disabled", "disabled");
                edit_btn.innerText = "edit";
            }
        })

        delete_btn.addEventListener ("click", () => {
            itemBox.remove();
        })
    }
    inputBox.value = "";
}