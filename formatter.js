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

const formattingConfig = [
  { id: 1, key: "/pb-b", style: "page-break-before: always;", description: "page break", type: "styling_obj" },
  { id: 2, key: ".simple-table td", style: "min-width: 0px;", description: "remove min-width from table data", type: "css_overwrite" },
  { id: 3, key: ".simple-table th", style: "min-width: 0px;", description: "remove min-width from table header", type: "css_overwrite" },
];

(function() {
    console.log("Notion Formatter running!");
    console.log("Loading elements...");
    const allElements = document.getElementsByTagName('p');
    console.log("Elements loaded!");
    console.log("Config:", formattingConfig);
    console.log("Running config on elements...");
    let counter = 0;
    for (let configEntry of formattingConfig) {
        if(configEntry.type == "css_overwrite"){
            counter = overwriteClass(configEntry.key, configEntry.style);
        }
    }
    for (let element of allElements){
        if(!element.innerHTML.startsWith("/")){
            continue; // exit to avoid ununnecessary looping
        }
        for (let configEntry of formattingConfig){
            if(configEntry.type == "styling_obj") {
                counter = replaceStylingObjs(element, configEntry, counter)
            }
        }
    }
    console.log("Formatting finished!");
    console.log("Creating header and footer content.");
    console.log("Formatted", counter, "elements");
})();

function replaceStylingObjs(element, configEntry, counter){
    if(element.innerHTML == configEntry.key){
        element.innerHTML = "";
        element.setAttribute("style", configEntry.style);
        console.log("Replaced", configEntry.key, "with", configEntry.description, "on", element);
        counter++;
    }
    return counter;
}

function overwriteClass(classString, newStyle, counter){
    let elements = document.querySelectorAll(classString);
    console.log("found ", elements.length, " elements to adjust css for class ", classString, ".");
    console.log("elements: ", elements);
    for (let element of elements) {
        element.style.cssText = newStyle;
        counter++;
    }
    return counter;
}
