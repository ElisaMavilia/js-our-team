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
        "name": "Wayne Barnett",
        "position": "Founder & CEO",
        "picture": "wayne-barnett-founder-ceo.jpg"
    },

    {
        "name": "Angela Caroll",
        "position": "Chief Editor",
        "picture": "angela-caroll-chief-editor.jpg"
    },

    {
        "name": "Walter Gordon",
        "position": "Office Manager",
        "picture": "walter-gordon-office-manager.jpg"
    },

    {
        "name": "Angela Lopez",
        "position": "Social Media Manager",
        "picture": "angela-lopez-social-media-manager.jpg"
    },

    {
        "name": "Scott Estrada",
        "position": "Developer",
        "picture": "scott-estrada-developer.jpg"
    },

    {
        "name": "Barbara Ramos",
        "position": "Graphic Designer",
        "picture": "barbara-ramos-graphic-designer.jpg"
    }
]

console.log(teamMembers);