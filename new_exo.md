## Exercice 1 ##
A partir d'un tableau de chiffre calculer la moyenne. Si aucune note n'est présente dans le tableau, Afficher 0
	- Afficher la moyenne de votre tableau.

## Exercice 2 ##
Faire une fonction qui prend en paramètre un prix HT unitaire d’un produit, et son nombre de produit.
On veut connaitre le total TTC.
	- Afficher le prix unitaire et le quantitée sur votre page, de cette manière = X HT, X Quantité
	- En dessous grace à l'appel de votre fonction, afficher le résultat de cette manière = XX euros.

## Exercice 3 ##
Faire une fonction qui prend en paramètre une température d’un volume d’eau, on veut savoir dans quel état est l’eau (solide, liquide ou gaz) (positif : liquide, négatif : solide, au dela de 100°: gaz)
	- Afficher la température sur votre page sous cette forme = X degré
	- En dessous grace à l'appel de votre fonction, afficher le résultat de cette manière : "l'eau est dans un état solide/liquide/gaz"

## Exercice 4 ##
Faire une fonction qui prend 2 arguments en paramètres : un prix et un pourcentage.
La fonction doit renvoyer le prix augmenté avec le pourcentage.
	- Afficher les deux paramètres dans votre page sous cette forme = X euros, X pourcentage
	- En dessous grace à l'appel de votre fonction, afficher le résultat de cette manière : X euros

## Exercice 5 ##
(renseignez vous sur la function in_array en php)
Écrivez une fonction pour supprimer les doublons d’un tableau : Exemple : [1, 2, 3, 3, 3, 4, 5, 5] Résultat attendu : [1, 2, 3, 4, 5]
	- Afficher le tableau sur votre page, sous cette forme = X, X, X, X, X, X, X.
	- Afficher le résultat sur votre page, sous cette forme = X, X, X, X.

## Exercice 6 ##
Avec le moins de lignes de code possible, proposez moi un algorithme qui, pour un nombre donné, affiche la table de multiplication liée. Par exemple : Si je demande 1, je veux voir :
1x1 = 1
1x2 = 2
etc Et ce jusqu'à 12

	- Afficher le nombre donné sur votre page : Nombre donné : 3
	- Puis affiché le résultat comme au dessus

## Exercice 7 ##
Faites une fonction qui prend en argument une chaîne de caractères (LONGUE) Cette fonction doit afficher les 15 premiers caractères puis '...' Par exemple :
Je passe la chaîne : 'Lorem quisque class vestibulum'
La fonction doit afficher 'Lorem quisque c...'
	- Afficher la chaine de charactere longue sur votre page : 'Lorem quisque class vestibulum'
	- En dessous grace à l'appel de votre fonction, affiché le résultat voulu

## Exercice 8 ##
Faites une fonction checkPassword, dont le but est de vérifier la validité d'un mot de passe, qui sera pris en argument Un mot de passe est considéré valide lorsqu'il fait plus de 9 caractères, et qu'il contient au moins le caratère '@' La fonction renverra un booléen pour indiquer la validité du mot de passe.
	- Afficher sur votre page la string X que vous aller checker
	- Afficher grace au retour de votre fonction : valide OU invalide

## Exercice 9 ##
Faire une fonction qui ajoute derrière chaque voyelle d'une chaine de caractères 'fe' et répète ensuite la voyelle
Par exemple :
Chat donne : chafeat
	- Afficher la string X donnée
	- Afficher grace à l'appel de votre fonction la string X rendue

## Exercice 10 ##
Faire une fonction qui permet d'inverser une chaîne de caractères.
Elle prendra en paramètre une chaîne de caractère et la chaîne de caractères inversées sera retournée par la fonction.
	- Afficher la string X donnée
	- Afficher grace à l'appel de votre fonction la string X rendue

## Exercice 11 ##
Faire une fonction qui permet de déterminer si une chaîne de caractères est un "Pangram".
Elle prendra en paramètre une chaîne de caractère, et elle retournera un booléen : true si la chaine est un pangram, false sinon.
Qu'est-ce qu'un pangram ?
Un pangram est une phrase qui utilise **toutes** les lettres de l'alphabet au moins une fois.
Vous allez avoir besoin de ça : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
Vous pouvez tester un résultat "true" avec cette phrase : "The quick brown fox jumps over the lazy dog."

	- Afficher la string X donnée
	- Afficher le résultat true ou false en dessous grace à votre fonction

## Exercice 12 ##
Faire une fonction qui permet de calculer la valeur d'un mot au Scrabble.

Elle prendra en paramètre une chaîne de caractère et la valeur en point du mot sera retournée.

Valeurs des lettres :

- 1 point: "A", "E", "I", "O", "U", "L", "N", "R", "S", "T",
- 2 points: "D", "G",
- 3 points: "B", "C", "M", "P",
- 4 points: "F", "H", "V", "W", "Y",
- 5 points: "K",
- 8 points: "J", "X",
- 10 points: "Q", "Z",

	- Afficher le mot donnée, exemple : CHAT
	- Afficher en dessous le nombre de point obtenu grace à votre fonction, ex : 10 pts

## Exercice 13 ##
Créer une fonction qui va prendre un (gros) nombre en paramètre (EXEMPLE : 1350)
	- Rentrer dans une boucle qui va décrémenter votre nombre d'un nombre aléatoire compris entre 1 et 50.
	- Compter combien de passages sont nécéssaire dans votre boucle pour que votre nombre de base soit égal ou inférieur à zéro.
	
	- Afficher le nombre donné, ex : 1569
	- Afficher en dessous le nombre de passage dans la boucle : ex : 45 passages.

## Exercice 14 ##
Le jeu du petit cochon! Attention plûtot difficile dans l'algo!
   - Un cochon peut avoir : 4 pattes, 2 yeux, 1 queue, 2 oreilles
   - Une fois le cochon assemblé, vous avez gagné !
   - Pour se faire il faut lancer un dé spécial :
      - Ce dé est composé de 6 faces :
      * 3 avec des pattes
      * 1 avec un oeil
      * 1 avec une queue
      * 1 avec une oreille
        (Les faces avec les pattes, se sont pas toutes collées)
        
   Objectif (fonction à faire) :
   - Vous devez compter en combien de lancé de dé vous avez réussi à assembler votre cochon ! 
   
   - Affichez pour chaque lancé de dés, quelle face avez vous eu : ex en premier : pattes, ensuite : oeil etc etc
   - Affichez à la toute fin, combien de lancé vous avez du faire, exemple : j'ai du faire X lancés !

## Exercice 15 ##
Un jeu de Yahtzee ! Attention plûtot difficile dans l'algo (même très difficile, attention aux noeuds au cerveau) !
Faire une fonction qui simule un jeu de yatzee (https://fr.wikipedia.org/wiki/Yahtzee)
   Le Yatzee est un jeu de lancer de dé (au nombre de 5)
   Vous devrez afficher chaque lancé de dé random, on va rester simple et afficher quelque chose de ce style :
   (1) (4) (6) (2) (4)
   
   Une fois le lancé affiché, la fonction doit informer l'utilisateur de ce qu'il a fait :
   - Brelan (3 dés du même résultat)
   - Carré (4 dés du même résultat)
   - Full (3 dés du même résultat et 2 dés du même résultat)
   - Yams (5 dés du même résultat)
   - Petite suite : 4 dés se suivent (1, 2, 3, 4 ou 2, 3, 4, 5 ou 3, 4, 5, 6)
   - Grande suite : les 5 dés se suivent

	Exemple à afficher à l'utilisateur une fois les calculs terminés : 
	(2) (2) (4) (4) (4)
	Est ce une grande suite : Non
	Est ce une petite suite : Non
	Est ce que c'est un Yatzhee : Non
	Est ce que c'est un Square : Non
	Est ce que c'est un Full : Oui
	Est ce que c'est un Brelan : Oui
