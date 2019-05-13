/* global shoppingList, store, api */
'use strict';
import $ from 'jquery';
import store from './store.js';
import api from './api.js';
import './index.css';
import shoppingList from './shopping-list.js';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  console.log("Testing importing jquery without hardcoding the link in the HTML File");
  // On initial load, fetch Shopping Items and render
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => console.log(err.message))
});
