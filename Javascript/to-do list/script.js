const form_element = document.querySelector(".form");
const list_element = document.querySelector(".list");
const input_element = document.querySelector(".input");

//retrieve list from local storage
let list = JSON.parse(localStorage.getItem("list"));
if(list){
    list.forEach(to_do_list);
}
//form submission
form_element.addEventListener("submit", function(){
    to_do_list();
});



//to create li elements and buttons
function to_do_list(task){
    let newTask = input_element.value;
    if(task){
        newTask = task.name;
    }
    const item = document.createElement("li");
    if(task && task.checked){
        item.classList.add("checked");
    }
    item.innerText = newTask;
    list_element.appendChild(item);

    //check btn
    const checkBtn = document.createElement("div");
    check.innerHTML = `<i class="bi bi-check-square-fill"></i>`
    item.appendChild(checkBtn);
    //trash btn
    const trashBtn = document.createElement("div");
    trashBtn.innerHTML = `<i class="bi bi-trash-fill"></i>`
    item.appendChild(trashBtn);
}

//to store li to local storage
function updateLocalStorage(){
    list = [];
    const li_items = document.querySelectorAll("li");
    li_items.forEach(myFunction);
    
    function myFunction(item){
        list.push({
            name:item.innerText,
            checked:item.classList.contains("checked")
        });
    };
    localStorage.setItem("list", JSON.stringify(list));
}