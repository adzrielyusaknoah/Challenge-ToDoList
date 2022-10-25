const table = document.getElementById('listTodo');
const activityInput = document.getElementById('activityInput');
const descInput = document.getElementById('descInput');
const dateInput = document.getElementById('dateInput');
const submitBtn = document.getElementById('submitBtn');
let i =1;
let editMode =false;
let updateId = "";


addEventListener("submit", (event) => {
  // Disable Refresh Browser
    event.preventDefault();

    // Validasi Inputan Kosong Form
    if(activityInput.value === ""){
      alert ("Input Activity !");
      return;
    }else if(descInput.value === ""){
      alert ("Input Description!");
      return;
    }else if(dateInput.value === ""){
      alert ("Input Date !");
      return;
    }

    // Fungsi untuk update/edit
    if(editMode) {
      const activity = document.getElementById(`activity-${updateId}`);
      const desc = document.getElementById(`desc-${updateId}`);
      const date = document.getElementById(`date-${updateId}`);

      activity.innerText = activityInput.value;
      desc.innerText = descInput.value;
      date.innerText = dateInput.value;
      submitBtn.innerText = "Submit";
      editMode = false;
      activityInput.value ="";
      descInput.value="";
      dateInput.value="";
    }else {
      // Fungsi untuk Create
      // Generate ID untuk angka random yang berbeda setiap dipanggil
      const generateID = Math.random(); 
      // Variabel untuk memanipulasi file html dengan javascript
      const tableContent = `
    <tr id="${generateID}">
            <th scope="row">${i++}</th>
            <td id="activity-${generateID}">${activityInput.value}</td>
            <td id="desc-${generateID}">${descInput.value}</td>
            <td id="date-${generateID}">${dateInput.value}</td>
            <td>
              <button type="button" class="btn btn-primary" onClick='update(${generateID})'>Edit</button>
              <button type="button" class="btn btn-danger" onClick='remove(${generateID})'>Delete</button>
            </td>
          </tr>
    `

    console.log(tableContent);

    table.innerHTML += tableContent;
    activityInput.value ="";
    descInput.value ="";
    dateInput.value ="";
    }
    
   
});

// Fungsi untuk update
const update = (id) => {
  editMode = true;
  submitBtn.innerText = "Update";
  updateId= id;
  const activity = document.getElementById(`activity-${id}`).innerText;
  const desc = document.getElementById(`desc-${id}`).innerText;
  const date = document.getElementById(`date-${id}`).innerText;

  activityInput.value= activity;
  descInput.value = desc;
  dateInput.value = date;
}

// FUngsi untuk delete
const remove = (id) => {
  if(editMode) {
    alert(
      "You cant Delete When your Edit Your Todo List !"
    )
  }else {
    const value = document.getElementById(id);
    value.remove();
  }
}