/**
 * File	name: app.js 
 * This file is JavaScript for MidTerm Test, "Complete the Single Page Application"
 * Author's name: Tetiana Reznychenko
 * Student number: 300870231
 * Date: 22 June, 2016 
 */

// setup your IIFE (Immediately Invoked Function Expression)
(function () {
"use strict";

//Landing Paragraphs

//Initialization and Declaration of the variables
var IntroParagraph = document.getElementById("IntroParagraph");
var Folegandros = document.getElementById("Folegandros"); 
var Alonissos = document.getElementById("Alonissos");
var Spetses = document.getElementById("Spetses"); 
var Amorgos = document.getElementById("Amorgos");
var Syros = document.getElementById("Syros"); 
var Milos = document.getElementById("Milos"); 
var Hydra = document.getElementById("Hydra");
var Ithaca = document.getElementById("Ithaca");
var Gavdos = document.getElementById("Gavdos");

var paragraphs = []; 

//Data for paragraphs
paragraphs[0] = "<br/>Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals.<br/> <br/> Greece has 1,400 islands, though only 230 of them are inhabited.<br/> <br/> And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.<br/>";

paragraphs[1] = "<br/>Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.";

paragraphs[2] = "<br/>Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy.";

paragraphs[3] = "<br/>This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.";

paragraphs[4] = "<br/>Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff.";

paragraphs[5] = "<br/>A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.";

paragraphs[6] = "<br/>This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as the island of colours it's home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape."; 

paragraphs[7] = "<br/>The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves.";

paragraphs[8] = "<br/>Most famous for being the home of Odysseus, and a prominent figure in Homer's The Odyssey, Ithaca is said to have been inhabited since the 2nd millennium BC. Made up of two islands joined by a narrow strip of land, many visit it to see the legendary sites mentioned by Homer. However, Ithaca is more than its mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and sleepy fishing villages full of Byzantine churches and monasteries.";

paragraphs[9] = "<br/>Near the more well-known Crete, Gavdos is the most southern island in Greece — and the most southern spot in Europe discounting the Canaries. Only accessible by ferry, the remote island has only about 50 permanent residents, and can feel like your private playground. Local legend has it that the island was the home of goddess Calypso, who kept Odysseus prisoner here. Today, a favorite tourist activity is to visit the spot believed to be her cave. Be warned, you won't find any luxury hotels here. While the romantically under-developed, super laid back island has a number of rooms for rent, those are limited, as the real draw here for many is the free, seaside camping.";


//To check if paragraphs exists
 if (IntroParagraph){
        IntroParagraph.innerHTML = paragraphs[0];

    }
 if (Folegandros){
        Folegandros.innerHTML = paragraphs[1];

    } 
 if (Alonissos){
        Alonissos.innerHTML = paragraphs[2];

    }        
 if (Spetses){
        Spetses.innerHTML = paragraphs[3];

    } 
 if (Amorgos){
        Amorgos.innerHTML = paragraphs[4];

    } 
 if (Syros){
        Syros.innerHTML = paragraphs[5];

    }     
 if (Milos){
        Milos.innerHTML = paragraphs[6];

    } 
 if (Hydra){
        Hydra.innerHTML = paragraphs[7];

    }
 if (Ithaca){
        Ithaca.innerHTML = paragraphs[8];

    }
 if (Gavdos){
        Gavdos.innerHTML = paragraphs[9];

    }


//Contant Page Section 

// To check if the sendButton exists
    if(sendButton) {
    // Event listener
        sendButton.addEventListener("click", sendButtonClick);
    }
// Event handler function
    function sendButtonClick(event) {
        console.log();
    }   
// Creation of a reference to the contact form`s fields
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var contactNumber = document.getElementById("contactNumber");
    var yourMessage = document.getElementById("yourMessage");  

// Creation of a reference to the contact form 
    var contactForm = document.getElementById("contactForm");

    if(contactForm) {
    // This is an event listener with inline anonymous event handler function
        contactForm.addEventListener("submit", function(event){
            event.preventDefault();
            showFormInput();
        });
    }   

//Creation of the function that makes pretty output 

    /**
     * This function shows the input from each form field 
     * on the console
     * 
     * @method showFormInput
     * @return {void} 
     */

    function showFormInput() {
        console.log("********************************");
        console.log("First Name: " + firstName.value);
        console.log("********************************");

        console.log("Last Name: " + lastName.value);
        console.log("********************************");
        
        console.log("Contact Number: " + contactNumber.value);
        console.log("********************************");  

        console.log("Email: " + email.value);
        console.log("********************************");
 
        console.log("Message: " + yourMessage.value);
        console.log("********************************");               

    }
     

})();

