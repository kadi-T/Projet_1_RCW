import sys
import json

# Lire les données JSON passées en argument
if len(sys.argv) > 1:
    data = json.loads(sys.argv[1])
else:
    print("Aucune donnée fournie")
    sys.exit(1)

nom = data['nom']
prix = data['prix']
quantite = data['quantite']
total = data['total']
taxe = total * 0.5
total_avec_taxe = total + taxe

# Afficher le résultat
print(f"Taxe: {taxe}<br>Total avec taxe: {total_avec_taxe}")
