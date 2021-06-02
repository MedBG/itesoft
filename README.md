# ITESOFT

### Configuration requise
•node v14.17.0
•Angular 11

### Démarrer l'application

* `cd backend`    
* `npm start`
  

L'application démarre sur le port 8080. 


### Backend

>**Overview** : L'architecture de l'application à été réaliser sur du NodeJs et Angular 11 puisque c’est votre cible.

* l'application  Node démarre sur le port `8080`
* models contient un fichier Frescoes.js qui joue le rôle d'une base de donnée
* Le fichier service `frescoes.service.js` contient le buisness logique de l'application.
* Le fichier controller `frescoes.controller.js` contient les différents fonctions à exposer via un service **RESTful**
    * un endpoint renvoyant une fresque par son id
    * un endpoint renvoyant toutes les fresques
    * un endpoint renvoyant une liste de fresques via un filtre acsendant et descendant sur la colonne `ANNEE_CREATION`
    * un endpoint supprimant une fresque par son id
* Le fichier route comporte les différents url de l'api à exposer

  

### Frontend

>**Overview** : L'application **Angular** est de version 11 qui permet d'appeler des services **RESTful** et d'exploiter les données récupérées exposée par le backend **Node JS**.

* l'application angular se présente sous le dossier `/dist`
* le projet se repartie comme suit
    * une dossier service
    * un dossier model
    * un composant frescoes
    * un dossier state pour la spécification des appels asychrones



#### Bonus :
* Défiler les photos des fresques dans un Carousel (ui.bootstrap.carousel) ☑
* Afficher les données de fresques détaillées dans une Modal (ui.bootstrap.modal) ☑
* Ajouter un filtre sur l'année pour remonter les fresques comprises entre l'année X et Y en utilisant le composant Datepicker (ui.bootstrap.datepicker) [x] (trie ascendant descendant)
* Afficher dans le panel de détails, la position en se basant sur les coordonnées `GEO_POINT`. Utiliser https://ngmap.github.io/ ☑


  
### Test

**Node Js**

* `npx jest` pour lancer le test
* Le fichier `frescoes.test.js` contient les différents test sur les appels **RESTful** des commentaires étaient mise en place pour plus de détails

**Angular**

* `ng test` pour lancer le test
* Le fichier `frescoes.service.spec.js` contient les différents test sur les appels **RESTful** des commentaires étaient mise en place pour plus de détails
