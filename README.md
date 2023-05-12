## Instructions

**Comportement de base :**

Lorsqu'un utilisateur sélectionne une option du formulaire puis clique sur le bouton de soumission, il voit apparaître un message aléatoire provenant de la catégorie qu’il a choisie. Le message doit apparaître dans l’encart en dessous du formulaire et le “?” doit disparaître. Une fois un message affiché, le bouton de soumission du formulaire est disabled (on ne peut afficher qu’un seul message à la fois).

Vous êtes libres d’implémenter le design que vous voulez, la maquette est juste une base si vous ne savez pas par où commencer.

**Gestion des erreurs et bouton d'effacement :**

L'utilisateur ne doit pas pouvoir cliquer sur le bouton de soumission du formulaire s'il n'a pas sélectionné une des deux catégories. 

L'utilisateur peut cliquer sur un bouton d'effacement, qui efface le message de l’encart.

Le bouton pour afficher un message sera à nouveau enabled au clic sur le bouton d’effacement.

L'utilisateur ne doit pouvoir cliquer sur le bouton d'effacement que si un message est affiché.

Lorsque le bouton d'effacement est cliqué et que le message est supprimé, le “?” doit réapparaître.

Pour gérer les erreurs, il est possible de désactiver les boutons ou de les masquer / afficher, c’est vous qui choisissez.

**L'utilisateur peut ajouter une citation ou un proverbe :**

Ajoutez un bouton "Add message" à un endroit pertinent.

Lorsque l'utilisateur clique sur ce bouton, un formulaire apparaît dans l’encart réservé aux messages.

Le formulaire doit contenir deux entrées : l'une pour spécifier le type de message à ajouter, l'autre pour ajouter le texte du message.

Le formulaire doit également contenir un bouton "Valider”. Si un des deux champs n’est pas renseigné, un message d’erreur apparaît. Lorsque l'utilisateur clique sur le bouton "Valider", le message est ajouté à la liste avec la bonne catégorie. Lorsqu'un nouveau message est ajouté, ce message devrait s'afficher automatiquement dans la boîte de messages, à la place du “?”.

 ⚠️ Attention à bien appliquer le style.

**L'utilisateur peut ajouter des messages en favoris**

Lorsqu'un message apparaît, il doit être accompagné d'un bouton "Add to Favorites". Lorsque l'utilisateur clique sur ce bouton, le message est ajouté à une nouvelle liste de messages favoris.

L’utilisateur doit ensuite pouvoir consulter ses favoris en cliquant sur un bouton "Display favorites" situé quelque part sur la page. 

Lorsque l'utilisateur clique sur ce bouton, il est dirigé vers une nouvelle page qui affiche tous ses messages favoris. Les utilisateurs doivent pouvoir revenir à la page principale en cliquant sur un bouton.

Pour cette fonctionnalité, il faut utiliser le local storage et avoir une clé “favorites” qui a pour valeur un tableau d’objets (chaque objet sera un message qui a été ajouté en favori).