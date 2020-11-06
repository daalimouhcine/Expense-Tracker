// Creat VARIABLES
const submitButton = document.querySelector(".submit");
const name = document.querySelector("#name");
const date = document.querySelector("#date");
const amount = document.querySelector("#amount");
const tbody = document.querySelector(".elements");



//Creat EVENTS
submitButton.addEventListener("click",addElement);



//Creat FUNCTIONS
function addElement (event) {
    //Stop browsr from reloding
    event.preventDefault();

    if(name.value !== "" && date.value !== "" && amount.value !== "") {
        //Creat element in table
        const trow = document.createElement("tr");
        const tName = document.createElement("td");
        const tDate = document.createElement("td");
        const tAmount = document.createElement("td");
        const tDelete = document.createElement("td");
            //Add the content
            tName.innerText = name.value;
            tDate.innerText = date.value;
            tAmount.innerText = amount.value;
            tDelete.innerHTML = '<button class="delete-btn"><i class="fas fa-trash"></i></button>';

        //append the elements
        tbody.appendChild(trow);
        trow.appendChild(tName);
        trow.appendChild(tDate);
        trow.appendChild(tAmount);
        trow.appendChild(tDelete);
            
        name.value = "";
        date.value = "";
        amount.value = "";
        
        //Check if the table is empty
        check();

        tDelete.addEventListener("click",removeElement);
    } else {
        alert("please fill in the form");
    }

}

function removeElement(e) {
    const parent = e.target.parentNode.parentNode.parentNode;

    parent.style.display = "none";

    //Check if the table is empty
    check();

}

function check() {

    if (tbody.childNodes === "") {
        document.querySelector(".empty").style.display = "flex";
    } else {
        document.querySelector(".empty").style.display = "none";
    }
}

function saveLocal() {

}