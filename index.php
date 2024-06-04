<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire en PHP</title>
</head>
<body>
    <form method="post" action="http://localhost:3000/submit">
        <label>Nom: </label>
        <input type="text" name="nom">
        <br>
        <label>Prix: </label>
        <input type="number" name="prix">
        <br>
        <label>Quantite: </label>
        <input type="number" name="quantite">
        <br>
        <input type="submit" class="envoyer" name="envoyer" value="Submit">
    </form>
</body>
</html>




<!-- // if(isset($_POST['envoyer'])) {  

//     $nom = $_POST['nom'];
//     $prix = $_POST['prix'];
//     $quantite=$_POST['quantite'];

//     if(!empty($nom)&& !empty($prix)&& !empty($quantite)){
//         echo"envoyer";
//         echo $nom;
//         echo $prix;
//         echo $quantite;
//         }
    
// } -->

















