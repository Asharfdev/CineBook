"use strict";
const selectedMovieIdList = [];
const movieContainer = document.querySelector("#films-container")
// Bienvenue dans le fichier de travail principal de CineBook !
// Le HTML et les données sont prêts, mais les interactions sont volontairement absentes.
// La page contient déjà un exemple statique complet pour montrer le résultat attendu.
// Inspectez et copiez la structure HTML utile, puis remplacez ces exemples avec
// les éléments que votre code crée à partir des tableaux de data.js.
// Avancez section par section et testez souvent dans le navigateur.


// ==================================================
// 0 - SÉLECTIONNER LES ÉLÉMENTS HTML
// ==================================================
// OBJECTIF : garder des références vers les zones qui seront modifiées.
// NOTIONS UTILES : const, document.querySelector(), document.getElementById().
// QUESTIONS : Quel identifiant correspond au catalogue ? Au prix total ?
// TODO : créez ici des constantes explicites pour les éléments nécessaires.
// ÉCRIVEZ VOTRE CODE ICI :


// ==================================================
// 0 BIS - MÉMORISER L'ÉTAT DE L'APPLICATION
// ==================================================
// OBJECTIF : mémoriser temporairement le film, la séance et les sièges choisis.
// Les données décrivent les films ; l'état décrit les choix actuels de l'utilisateur.
// NOTIONS UTILES : let, null, tableau vide [].
// PISTES : que faut-il remettre à zéro lorsqu'un autre film est choisi ?
// TODO : déclarez trois variables avec des valeurs initiales adaptées.
// ÉCRIVEZ VOTRE CODE ICI :


// ==================================================
// US01 - AFFICHER LES FILMS
// ==================================================
// OBJECTIF : créer une carte pour chaque objet du tableau "films" et l'ajouter
// dans #films-container.
// NOTIONS UTILES : forEach, createElement ou innerHTML, propriétés d'un objet.
// QUESTIONS : Comment parcourir films ? Comment utiliser film.affiche et film.titre ?
// TODO : 1) vider les cartes statiques ; 2) construire les cartes ; 3) les insérer.
// PISTE : ajoutez l'identifiant du film dans un attribut data-film-id du bouton.
// MODÈLE : observez l'élément <article data-film-id="1"> dans index.html.
// ÉCRIVEZ VOTRE CODE ICI :




// ==================================================
// US02 - SÉLECTIONNER UN FILM
// ==================================================
// OBJECTIF : réagir au clic sur une carte, retrouver le film correspondant et
// afficher ses informations dans #film-details.
// NOTIONS UTILES : addEventListener, Number(), find(), textContent, classList.
// QUESTIONS : Où lire l'id du bouton ? Comment comparer cet id à film.id ?
// TODO : écouter les clics, modifier l'état et mettre à jour les détails.
// PISTE : un changement de film doit aussi réinitialiser séance et sièges.
// MODÈLE : #film-details contient déjà un exemple de détail à reproduire.
// ÉCRIVEZ VOTRE CODE ICI :



// ==================================================
// US03 - AFFICHER LES SÉANCES
// ==================================================
// OBJECTIF : afficher les horaires du film sélectionné dans #seances-container.
// NOTIONS UTILES : tableau imbriqué, boucle, bouton, innerHTML.
// QUESTIONS : Dans quelle propriété du film se trouvent les séances ?
// TODO : créer un bouton par séance et conserver son id dans data-seance-id.
// MODÈLE : les trois boutons statiques de #seances-container montrent le HTML attendu.
// ÉCRIVEZ VOTRE CODE ICI :


// ==================================================
// US04 - SÉLECTIONNER UNE SÉANCE
// ==================================================
// OBJECTIF : mémoriser la séance cliquée et montrer visuellement le bouton actif.
// NOTIONS UTILES : addEventListener, find(), classList, conditions.
// QUESTIONS : Faut-il autoriser une séance qui n'appartient pas au film choisi ?
// TODO : retrouver la séance, modifier l'état et réinitialiser les sièges choisis.
// ÉCRIVEZ VOTRE CODE ICI :


// ==================================================
// US05 - AFFICHER LES 30 SIÈGES
// ==================================================
// OBJECTIF : créer les rangées A à E, avec les numéros 1 à 6.
// NOTIONS UTILES : boucles imbriquées, concaténation, createElement, classList.
// QUESTIONS : Comment fabriquer le nom "C4" ? Où sont les sièges occupés ?
// TODO : générer les sièges et donner un état visuel différent aux places occupées.
// PISTE : rangees et siegesParRangee sont fournis dans data.js.
// MODÈLE : #sieges-container contient les 30 sièges statiques et leurs classes Tailwind.
// ÉCRIVEZ VOTRE CODE ICI :


// ==================================================
// US06 - SÉLECTIONNER ET DÉSÉLECTIONNER DES SIÈGES
// ==================================================
// OBJECTIF : ajouter ou retirer une place du tableau des sièges sélectionnés.
// NOTIONS UTILES : includes(), push(), splice() ou filter(), classList.toggle().
// QUESTIONS : Comment empêcher le clic sur une place occupée ?
// TODO : écouter chaque siège disponible et actualiser son état visuel.
// ÉCRIVEZ VOTRE CODE ICI :


// ==================================================
// US07 - CALCULER LE TOTAL ET METTRE À JOUR LE RÉCAPITULATIF
// ==================================================
// OBJECTIF : afficher le film, la séance, les sièges et le montant actuel.
// NOTIONS UTILES : multiplication, length, join(), textContent.
// QUESTIONS : Quelle formule relie prix du film et nombre de sièges ?
// TODO : écrire une fonction appelée après chaque changement de sélection.
// MODÈLE : le récapitulatif HTML affiche des exemples de valeurs déjà remplies.
// ÉCRIVEZ VOTRE CODE ICI :


// ==================================================
// US08 - CONFIRMER LA RÉSERVATION
// ==================================================
// OBJECTIF : vérifier les choix puis afficher un succès ou une erreur dans
// #reservation-message. Les données restent seulement en mémoire.
// NOTIONS UTILES : if / else, addEventListener, textContent, classList.
// QUESTIONS : Quelles conditions rendent une réservation valide ?
// TODO : écouter #confirmer-reservation et construire un message clair.
// ÉCRIVEZ VOTRE CODE ICI :


// PREMIER TEST CONSEILLÉ :
// console.log(films);
// Décommentez temporairement cette ligne pour explorer les données, puis avancez.

// films.forEach(movie => {
//    movieContainer.innerHTML += `<article class="overflow-hidden rounded-2xl border border-red-400 bg-white shadow-xl ring-2 ring-red-100" data-film-id="1">
//           <div class="relative"><img src=${movie.affiche} alt="Affiche de Mission Galaxie" class="aspect-[2/3] w-full object-cover"><span class="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold shadow-lg">55 DH</span></div>
//           <div class="p-4"><p class="text-xs font-bold uppercase tracking-wider text-cine-red">Science-fiction</p><h3 class="mt-1 text-lg font-black">Mission Galaxie</h3><p class="mt-2 text-sm text-slate-500">2 h 04 min</p><button type="button" class="mt-4 w-full rounded-xl bg-cine-red px-4 py-3 font-extrabold text-white">Sélectionné</button></div>
//         </article>`;

// });




onloadingPage();

function onloadingPage() {
    films.forEach(movie => {
        movieContainer.innerHTML += renderCard(movie);
    });
}

function renderCard(movie) {
    return `<article class="overflow-hidden rounded-2xl border border-red-400 bg-white shadow-xl ring-2 ring-red-100" >
          ${renderImg(movie)}
          ${renderCardContext(movie)}
            </article>`
}

function renderImg(movie) {
    return `<div class="relative"><img src=${movie.affiche} alt=${movie.description} class="aspect-[2/3] w-full object-cover">
          <span class="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold shadow-lg">${movie.prix}</span>
          </div>`

}

function renderCardContext(movie) {
    return `<div class="p-4"><p class="text-xs font-bold uppercase tracking-wider text-cine-red">${movie.genre}</p>
          <h3 class="mt-1 text-lg font-black">${movie.titre}</h3>
          <p class="mt-2 text-sm text-slate-500">${time(movie.duree)}</p>
          <button type="button" onclick="toggleSelectMovie(this, ${movie.id})"  class="mt-4 w-full  rounded-xl bg-cine-red px-4 py-3 font-extrabold text-white">Select</button></div>
`
}

function time(duree) {

    let hour = Math.floor(duree / 60)
    let minutes = duree % 60
    return hour + "h" + minutes + "minutes"
}


/**
 *
 * @param buttonClickedHtmlElement
 * @param movieId
 * @desc this method will select and unselect the movie by changing the button text and the button color and notify the
 * card pannier that the movie is selected
 */
function toggleSelectMovie(buttonClickedHtmlElement, movieId) {
    if (movieAlreadySelected(movieId)) {
        unSelectTheMovie(buttonClickedHtmlElement, movieId)
        removeMovieFromPanier(movieId)
    } else {
        selectTheMovie(buttonClickedHtmlElement, movieId)
        addMovieToPanier(movieId)
    }

}

function movieAlreadySelected(movieId) {
    return selectedMovieIdList.includes(movieId)
}


function unSelectTheMovie(buttonClickedHtmlElement, movieId) {
    const index = selectedMovieIdList.indexOf(movieId);
    if (index !== -1) {
        selectedMovieIdList.splice(index, 1);
    }
    buttonClickedHtmlElement.textContent = "Select";
    buttonClickedHtmlElement.classList.replace("bg-green-500", "bg-cine-red");
}

function selectTheMovie(buttonClickedHtmlElement, movieId) {
    selectedMovieIdList.push(movieId)
    buttonClickedHtmlElement.textContent = "Selected"
    buttonClickedHtmlElement.classList.replace("bg-cine-red", "bg-green-500");
}

function getMovieById(movieId) {
    return films.find(movie => movie.id === movieId)
}

function addMovieToPanier(movieId) {
    const movie = getMovieById(movieId)
    const reservationContainer = document.getElementById("reservation-details")

    reservationContainer.innerHTML += `
        <article id="panier-movie-${movieId}" class="mt-6 grid gap-5 rounded-2xl bg-slate-50 p-5 sm:grid-cols-[100px_1fr]">
        <img src=${movie.affiche} alt=${movie.description} 
             class="aspect-[2/3] w-24 rounded-xl object-cover shadow-md">
            <div>
                <div class="flex flex-wrap items-center gap-2"><h3 class="text-xl font-black">${movie.titre}</h3><span
                    class="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">${movie.prix}</span>
                </div>
                <p class="mt-2 text-sm font-semibold text-slate-500">Science-fiction · ${time(movie.duree)}</p>
                <p class="mt-3 leading-7 text-slate-600">${movie.description}</p></div>
    </article>
    `
}

function removeMovieFromPanier(movieId) {
    document.getElementById(`panier-movie-${movieId}`)?.remove()
}













