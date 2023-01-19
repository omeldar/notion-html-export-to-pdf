// ==UserScript==
// @name         Notion HTML Formatter for PDF print
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Format notion exported html so to add page breaks, etc.
// @author       Eldar Omerovic
// @match        file:///*.html
// @icon         https://www.notion.so/images/favicon.ico
// @grant        none
// ==/UserScript==

const config = [
  { id: 1, key: "/pb-b", style: "page-break-before: always;", description: "page break" },
];

(function() {
    console.log("Notion Formatter running!");
    console.log("Loading elements...");
    const allElements = document.getElementsByTagName('p');
    console.log("Elements loaded!");
    console.log("Config:", config);
    console.log("Running config on elements...");
    let counter = 0;
    for (let element of allElements){
        for (let configEntry of config){
            if(element.innerHTML == configEntry.key){
                element.innerHTML = "";
                element.setAttribute("style", configEntry.style);
                counter++;
                console.log("Replaced", configEntry.key, "with", configEntry.description, "on", element);
            }
        }
    }
    console.log("Process finished!");
    console.log("Formatted", counter, "elements");
})();