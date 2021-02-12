/*
 * Name: Ajaz Syed
 * This is the index.js script. It allows the user to change the theme
 * of the screen and hide their content.
 */
"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * Initializes the page at load event
   */
  function init() {
    qs("#text-button").addEventListener("click", addEntry);
    qs("#toggle-visibility").addEventListener("click", hideEntries);
    qs("#button-dark").addEventListener("click", darkMode);
  }

  /**
   * Adds an entry to posts section
   */
  function addEntry() {
    let entry = id("entry").value;
    let container = document.createElement("article");
    let contents = document.createElement("p");
    container.classList.add("post");
    contents.textContent = entry;
    container.appendChild(contents);
    container.addEventListener("dblclick", removePost);
    id("posts").appendChild(container);
    id("entry").value = "";
  }

  /**
   * Removes the selected entry
   */
  function removePost() {
    this.parentNode.removeChild(this);
  }

  /**
   * Hides all the entries
   */
  function hideEntries() {
    let entry = id("posts");
    if (entry.style.display === "none") {
      entry.classList.add('hidden')
    } else {
      entry.style.display = "none";
    }
    switchVisibilityName();
  }

  /**
   * Changes the name of the button based on the visibility of the items
   */
  function switchVisibilityName() {
    let name = id("toggle-visibility");
    if (name.innerHTML === "Hide my secrets!") {
      name.innerHTML = "Reveal my secrets!";
    } else {
      name.innerHTML = "Hide my secrets!";
    }
  }

  /**
   * Changes the theme of the entire page to a dark theme
   */
  function darkMode() {
    let bodyElement = document.body;
    bodyElement.classList.toggle("dark-mode");

    let postsElement = id("posts");
    postsElement.classList.toggle("dark-mode");

    let infoElement = id("info");
    infoElement.classList.toggle("dark-mode");

    let entryElement = id("entry");
    entryElement.classList.toggle("dark-mode");

    let lightButton = id("button-dark");
    lightButton.classList.toggle("dark-mode");

    let enterButton = id("text-button");
    enterButton.classList.toggle("dark-mode");

    let hideButton = id("toggle-visibility");
    hideButton.classList.toggle("dark-mode");

    switchModeName();
  }

  /**
   * Changes the name of the button based on the thme of the page
   */
  function switchModeName() {
    let name = id("button-dark");
    if (name.innerHTML === "Turn off the lights") {
      name.innerHTML = "Turn on the lights";
    } else {
      name.innerHTML = "Turn off the lights";
    }
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }
})();