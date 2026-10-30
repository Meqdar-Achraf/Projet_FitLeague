import { users } from "./data.js"

const users_list = document.getElementById("participant-row_list")
console.log(users_list)
console.log(users)
affiche_participants(users)

function affiche_participants(list){
    list.forEach(element => {
        const row = `<tr class="mb-2.5 border-b-1 border-slate-300"><td class="py-2 pl-2 flex gap-4"> <img class="w-7 h-7 p-1 rounded-full ring-2 ring-default" src=${element.profile} alt="Bordered avatar">${element.name}</td> <td class="py-2">${element.pseudo}</td><td class="py-2">${element.challenges.length}</td><td class="py-2"><div class="flex gap-2"><button id="modify_user" button-data="${element.ID}" class="w-7.5 h-7.5 flex items-center justify-center bg-sky-100 rounded-lg text-sky-500 hover:cursor-pointer"><i class="fa-solid fa-pencil"></i></button> <button id="delete_user" button-data="${element.ID}" class="rounded-lg  bg-rose-100 text-rose-500 w-7.5 h-7.5 flex items-center justify-center hover:cursor-pointer"><i class="fa-regular fa-circle-xmark "></i></button></div></td></tr>`
        users_list.innerHTML+= row
    });
}