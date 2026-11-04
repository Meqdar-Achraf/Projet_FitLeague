const container = document.querySelector("#defis-container");
defisrecents.forEach((defi) => {
  const defisrecent = `<div class="grid grid-cols-4 border-b-1 border-b-slate-200 pb-4 pt-4 ">
  <img class="flex h-11 w-11 rounded-xl "
                                src="${defi.image}"
                                alt="">
                            <div class="flex flex-col">
                                <p>${defi.titre}</p>
                                <p class="text-[#71869E]">${defi.categorie}</p>
                            </div>
                            <p
                                class="bg-[#E1F8EB] rounded-xl h-[25px] w-[35px] text-[#00994C] flex items-center justify-center justify-self-center">
                                ${defi.status}</p>
                            <p>${defi.date}</p>
                        </div>`;
  container.innerHTML += defisrecent;
});

const meilleursDefis = document.querySelector("#Meilleursdefis")
meilleurdefis.forEach((meilleurDefi)=>{
    const leMeilleurDefi = `<div class="grid grid-cols-3 pb-4 pt-4 border-b-1 border-b-slate-200">
                    <img class="$flex h-7 w-7 bg-[#E5EFF6] rounded-full" src="${meilleurDefi.image}" alt="">
                    <div class="flex flex-col">
                        <p>${meilleurDefi.titre}</p>
                        <p>${meilleurDefi.participant}</p>
                    </div>
                    <p class="flex justify-center">${meilleurDefi.distance}</p>
                </div>`
                meilleursDefis.innerHTML+= leMeilleurDefi
            
})

const btn = document.getElementById("Creer-defis");
const form = document.getElementById("form-container");
const closeBtn = document.getElementById("close-btn");

// Ouvrir le formulaire
btn.addEventListener("click", function() {
    form.classList.remove("hidden");
});

// Fermer le formulaire
closeBtn.addEventListener("click", function() {
    form.classList.add("hidden");
});