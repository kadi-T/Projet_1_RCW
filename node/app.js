const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const port = 3000;

// Le midleware pr passer les data du form
app.use(bodyParser.urlencoded({ extended: true }));

// Route
app.post('/submit', (req, res) => {
    const { nom, prix, quantite } = req.body;

    if (nom && prix && quantite) {
        const total = prix * quantite;
        const data = { nom, prix, quantite, total };

        // Affichage des resultats
        res.write('Resultat JS \n')
        res.write(`Nom: ${nom}\n Prix: ${prix}\n Quantite: ${quantite}\n Total: ${total}`);

        // Convertion des data en JSON et les passer au script Python
        const jsonData = JSON.stringify(data);
        const scriptPath = path.join('C:', 'Users', 'PC', 'RCW', 'cours', 'app.py');
        const command = `python ${scriptPath} "${jsonData.replace(/"/g, '\\"')}"`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erreur: ${error.message}`);
                res.write('Erreur lors de l\'exécution du script Python');
                res.end();
            } else if (stderr) {
                console.error(`Erreur standard: ${stderr}`);
                res.write('Erreur lors de l\'exécution du script Python');
                res.end();
            } else {
                // Affichage des donnees en python
                res.write(stdout);
                res.end();
            }
        });
    } else {
        res.send('Veuillez remplir tous les champs.');
    }
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
