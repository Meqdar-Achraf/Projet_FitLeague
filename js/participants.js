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
  modify_user()
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
      <button  data-mod="${element.ID}" class="modify_user w-7.5 h-7.5 flex items-center justify-center bg-sky-100 rounded-lg text-sky-500 hover:cursor-pointer"><i class="fa-solid fa-pencil"></i></button>
      <button  button-data="${element.ID}" class="delete_user rounded-lg bg-rose-100 text-rose-500 w-7.5 h-7.5 flex items-center justify-center hover:cursor-pointer"><i class="fa-regular fa-circle-xmark "></i></button>
    </div>
   </td>`
   return pbutton
}
affiche_participants(users);


document.getElementById("btn-creat_users").addEventListener("click", () => {
  open_modal("add-user_modal");
});

const open_modal = (modal_id) => {
  document
    .getElementById(modal_id)
    .classList.replace("hidden", "block");
};

const close_modal = (modal_id) => {
  document
    .getElementById(modal_id)
    .classList.replace("block", "hidden");
};

document.getElementById("quit-user_ajout").addEventListener("click", () => {
  close_modal("add-user_modal");
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
  close_modal("add-user_modal");
});


// supprimer participants
function delete_user(btnsdelete) {
  btnsdelete.forEach(btn => eventdelete(btn))
}
function eventdelete(button){
      button.addEventListener('click', ()=>{
        const userdelindex = users.findIndex(user => button.getAttribute("button-data") == user.ID);
        users.splice(userdelindex, 1)
        users_list.innerHTML = "";
        affiche_participants(users);
    })
}

3.
// modification des participants
let usermod = {};
function modify_user(){
  document.querySelectorAll(".modify_user").forEach(btn =>{
    btn.addEventListener('click', (event)=>{
    let  participantID = event.currentTarget.getAttribute("data-mod")
    usermod = users.find(participant => participantID == participant.ID);
      console.log(usermod)
      if (!usermod) return;
      open_modal("modify-user_modal")
      close_modal("quit-user_modifyer")
      document.getElementById('moduser_firstname').value = usermod.name.split(' ')[0];
      document.getElementById('moduser_lastname').value = usermod.name.split(' ')[1];
      document.getElementById('moduser_pseudo').value = usermod.pseudo;
      document.getElementById('moduser_age').value = usermod.age;
      participantmodification(usermod)
    })
  })
}

document.getElementById("quit-user_modifyer").addEventListener('click',()=>{close_modal("modify-user_modal")})
function participantmodification(user){
  console.log(user)
  document.getElementById("modifier-participant").addEventListener('click',()=>{
    const mName = `${document.getElementById("moduser_firstname").value} ${document.getElementById("moduser_lastname").value}`
    const mPseudo =`${document.getElementById("moduser_pseudo").value}`
    const mAge =`${document.getElementById("moduser_age").value}`

    user.name = mName
    user.pseudo = mPseudo
    user.age = mAge
    close_modal("modify-user_modal")
    users_list.innerHTML = "";
    affiche_participants(users)
  })}

  // search participants

  const search = document.getElementById("searchInput")
  search.addEventListener('input', event =>{
  const resultparticipants = users.filter(participant => participant.name.toLowerCase().startsWith(search.value.toLowerCase()));
  users_list.innerHTML = "";
  affiche_participants(resultparticipants)
  })