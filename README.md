
# AI Bridge 

Extension Chrome permettant de faciliter la communication entre ChatGPT et Claude directement depuis leurs interfaces officielles.

## Présentation

AI Bridge est un projet personnel visant à créer un pont entre deux intelligences artificielles : ChatGPT (OpenAI) et Claude (Anthropic).

L'objectif est de permettre à l'utilisateur de transférer des messages entre les deux plateformes sans avoir à effectuer de copier-coller manuel.

Chaque transfert nécessite une validation humaine afin de garder le contrôle sur les échanges.

Ce projet est développé dans un objectif d'apprentissage du JavaScript et du fonctionnement des extensions Chrome.

## Fonctionnalités prévues

- Détection des onglets ChatGPT et Claude.
- Récupération des réponses des deux IA.
- Prévisualisation des messages avant transfert.
- Modification des messages avant validation.
- Transfert bidirectionnel ChatGPT ↔ Claude.
- Possibilité d'annuler un transfert.
- Interface simple et intuitive.

## 🛠️ Technologies utilisées

- HTML5 : structure de l'interface.
- CSS3 : mise en forme et design.
- JavaScript : logique et interactions.
- Chrome Extensions API : communication avec les onglets.
- Manifest V3 : configuration de l'extension.
- Git & GitHub : versionnement et documentation.

## Structure du projet

```text
ai-bridge/
├── manifest.json
├── popup.html
├── popup.css
├── popup.js
└── README.md
```

Les fichiers de l'interface seront ajoutés progressivement.

## Installation 

Une fois une première version fonctionnelle disponible :

1. Télécharger ou cloner le dépôt GitHub.
2. Ouvrir Google Chrome.
3. Accéder à `chrome://extensions/`.
4. Activer le mode développeur.
5. Cliquer sur "Charger l'extension non empaquetée".
6. Sélectionner le dossier `ai-bridge`.

## Confidentialité

AI Bridge est conçu pour fonctionner localement dans le navigateur.

L'utilisateur doit valider les transferts de messages.

L'extension n'a pas vocation à collecter des données personnelles ni à envoyer des conversations vers un serveur tiers.

Les messages transférés restent soumis aux politiques de confidentialité de ChatGPT et Claude.

## État du projet

En cours de développement.

### Roadmap

- [x] Initialisation du projet.
- [x] Création du manifest.json.
- [x] Initialisation de Git.
- [x] Création de l'interface popup.
- [x] Détection des onglets.
- [ ] Récupération des messages.
- [ ] Validation manuelle des transferts.
- [ ] Communication bidirectionnelle.
- [ ] Tests et finalisation.
