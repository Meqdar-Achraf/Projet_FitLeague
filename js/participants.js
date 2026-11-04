import {users} from "./data.js";

const users_list = document.getElementById("participant-row_list");
// const btn_delete = document.getElementsByClassName("delete_user");

function affiche_participants(list){
  list.forEach(participant => {
    const participantline = `<tr class="mb-2.5 border-b-1 border-slate-300">
    ${participantname(participant)}
    ${participantinfo(participant)}
    ${participantbuttons(participant)}
    </tr>`
    users_list.innerHTML += participantline
  });
  const btn_delete = document.querySelectorAll(".delete_user");
  delete_user(btn_delete)
}


function participantname(element){
   const pname = `<td class="py-2 pl-2 flex gap-4"> <img class="w-7 h-7 p-1 rounded-full ring-2 ring-default" src=${element.profile} alt="Bordered avatar">${element.name}</td> `
  return pname
}

function participantinfo(element){
  const pinfo = `<td class="py-2">${element.pseudo}</td>
  <td class="py-2">${element.challenges.length}</td>`
  return pinfo;
}

function participantbuttons(element){
  const pbutton = `<td class="py-2">
    <div class="flex gap-2">
      <button  button-data="${element.ID}" class="modify_user w-7.5 h-7.5 flex items-center justify-center bg-sky-100 rounded-lg text-sky-500 hover:cursor-pointer"><i class="fa-solid fa-pencil"></i></button>
      <button  button-data="${element.ID}" class="delete_user rounded-lg bg-rose-100 text-rose-500 w-7.5 h-7.5 flex items-center justify-center hover:cursor-pointer"><i class="fa-regular fa-circle-xmark "></i></button>
    </div>
   </td>`
   return pbutton
}
affiche_participants(users);
console.log(users_list)
// close and open modaL

document.getElementById("btn-creat_users").addEventListener("click", () => {
  open_modal();
});

const open_modal = () => {
  document
    .getElementById("add-user_modal")
    .classList.replace("hidden", "block");
};

const close_modal = () => {
  document
    .getElementById("add-user_modal")
    .classList.replace("block", "hidden");
};

document.getElementById("quit-user_ajout").addEventListener("click", () => {
  close_modal();
});

// ajouter participants

function addparticipants() {
  const username = document.getElementById("user_firstname").value;
  const lastname = document.getElementById("user_lastname").value;
  const pseudo = document.getElementById("user_pseudo").value;
  const age = document.getElementById("user_age").value;
  let id_users = 10;
  const nouveau_user = {
    name: `${username} ${lastname}`,
    pseudo: pseudo,
    ID: ++id_users,
    profile: "assets/users_profile/user-profile-4255.svg",
    age: age,
    challenges: [],
    points: 0,
    classement: "null",
  };
  users.push(nouveau_user);
  users_list.innerHTML = "";
  affiche_participants(users);
}

const btn_validation = document.getElementById("valider-user");

btn_validation.addEventListener("click", () => {
  addparticipants();
  close_modal();
});

// supprimer participants

// const btn_delete = document.querySelectorAll(".delete_user");
function delete_user(btnsdelete) {
  btnsdelete.forEach(btn => eventdelete(btn))
}

function eventdelete(button){
      button.addEventListener('click', ()=>{
        const userdel = users.findIndex(user => button.getAttribute("button-data") == user.ID);
        users.splice(userdel, 1)
        users_list.innerHTML = "";
        affiche_participants(users);
    })
}
// delete_user(btn_delete)
