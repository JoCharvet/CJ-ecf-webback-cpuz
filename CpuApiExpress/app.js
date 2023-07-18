// Import du module Express.js
const express = require('express');

// Création de l'instance de l'application Express.js
const app = express();

// Ajoute la gestion du JSON
app.use(express.json());


// import de la collection de CPU
const CpuCollection = require('./CpuCollection');

// création de l'instance
let cpuCollection = new CpuCollection();



/* NE PAS MODIFIER LE FICHIER AVANT CETTE LIGNE */


// GET "http://localhost:3000/{id}"
app.get('/:id', (req, res) => {

    let idToSearch = req.params.id; // récupération de l'identifiant via l'url

    console.log(idToSearch);
    
    let cpu = cpuCollection.findCpuById(idToSearch);

    // Rechercher le CPU dans la collection
    // Renvoyer l'objet trouvé en paramètre de res.json();

    res.json(cpu);
});



// POST "http://localhost:3000/"
app.post('/', (req, res) => {

    let cpu = req.body // on reçoit l'objet au format JSON dans req.body

    let newCpu = cpuCollection.addCpu(cpu);

    res.send(newCpu); // on affiche le nouveau CPU ajouté avec son nouvel identifiant
});





/* NE PAS MODIFIER LE FICHIER APRES CETTE LIGNE */


// GET "http://localhost:3000/"
app.get('/', (req, res) => {
    res.json(cpuCollection.data); // retourne la collection de CPU
});


/* Démarrage du serveur et de l'application */
app.listen(3000, () => {
  console.log(`CPU API server listening on port ${3000}`);
});
