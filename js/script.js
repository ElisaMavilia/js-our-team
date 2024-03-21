/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
BONUS 3:
Permettere l'aggiunta di un nuovo membro del team
 */

// To do
// # creo array di oggetti con i membri tel team
// # keys: nome, ruolo, foto

let teamMembers = [
    {
        fullname: "Wayne Barnett",
        position: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg"
    },

    {
        fullname: "Angela Caroll",
        position: "Chief Editor",
        picture: "angela-caroll-chief-editor.jpg"
    },

    {
        fullname: "Walter Gordon",
        position: "Office Manager",
        picture: "walter-gordon-office-manager.jpg"
    },

    {
        fullname: "Angela Lopez",
        position: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg"
    },

    {
        fullname: "Scott Estrada",
        position: "Developer",
        picture: "scott-estrada-developer.jpg"
    },

    {
        fullname: "Barbara Ramos",
        position: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg"
    }
]

console.log(teamMembers);

    let boxContainer = document.getElementById("box-container");
    for( let i = 0; i < teamMembers.length; i++){
        let singleBox = document.createElement ("div");
        singleBox.innerHTML = `
        <img class="images card-img-top" src="img/${teamMembers[i].picture}">
        <div class="card-body">
        <h5 class="card-title text-center pt-2"><strong>${teamMembers[i].fullname}</strong><br>${teamMembers[i].position}</h5>
        </div>
        `;
        singleBox.classList.add("single-box", "card");
        boxContainer.appendChild(singleBox);
     }

    let textUp = document.getElementById("text-elements");
    textUp.innerHTML = `
    <h3 class="text-center pt-3 pb-3 text-uppercase ">Our Team</h3>
    <p class="text-center pb-4 fs-6 ps-5">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor<br>
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor</p>`;
    
   



