!function(e){var n={};function c(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,c),l.l=!0,l.exports}c.m=e,c.c=n,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)c.d(t,l,function(n){return e[n]}.bind(null,l));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c(c.s=5)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getSavedRecipes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return saveRecipes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return removeRecipe; });\n/* unused harmony export recipeStatus */\n/* unused harmony export generateRecipeElements */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return renderRecipes; });\nvar getSavedRecipes = function getSavedRecipes() {\n  var getRecipes = localStorage.getItem('recipes');\n\n  try {\n    return getRecipes ? JSON.parse(getRecipes) : [];\n  } catch (e) {\n    return [];\n  }\n};\n\nvar saveRecipes = function saveRecipes(recipes) {\n  localStorage.setItem('recipes', JSON.stringify(recipes));\n};\n\nvar removeRecipe = function removeRecipe(recipes, id) {\n  var rmRecipeIndex = recipes.findIndex(function (recipe) {\n    return recipe.id === id;\n  });\n\n  if (rmRecipeIndex > -1) {\n    recipes.splice(rmRecipeIndex, 1);\n  }\n};\n\nvar recipeStatus = function recipeStatus(recipe, p) {\n  var readyStatusText = '';\n  var x = recipe.ingredients.map(function (ingredient) {\n    return ingredient.ihave;\n  });\n  var all = x.every(function (el) {\n    return el === true;\n  });\n  var some = x.some(function (el) {\n    return el === true;\n  });\n  var nodata = !recipe.ingredients;\n  var nothave = x.every(function (el) {\n    return !el === true;\n  });\n  var none = nodata || nothave;\n\n  if (none) {\n    readyStatusText = \"You have none of the ingredients\";\n    p.classList.add('none');\n  } else if (all) {\n    readyStatusText = \"You have all the ingredients\";\n    p.classList.add('all');\n  } else if (some) {\n    readyStatusText = \"You have some of the ingredients\";\n    p.classList.add('some');\n  }\n\n  return readyStatusText;\n};\n\nvar generateRecipeElements = function generateRecipeElements(recipe) {\n  var element = document.createElement('a');\n  element.setAttribute('href', \"edit.html#\".concat(recipe.id, \" \"));\n  element.classList.add('element');\n  var title = document.createElement('h2');\n\n  if (recipe.title) {\n    title.textContent = recipe.title;\n  } else {\n    title.textContent = 'Unnamed Recipe';\n  }\n\n  var p = document.createElement('p');\n  p.classList.add('recipe-status');\n  var span = document.createElement('span');\n  p.appendChild(span);\n  span.textContent = recipeStatus(recipe, p);\n  element.appendChild(title);\n  element.appendChild(p);\n  return element;\n};\n\nvar renderRecipes = function renderRecipes(recipes, filters) {\n  var filteredRecipes = recipes.filter(function (recipe) {\n    return recipe.title.toLowerCase().includes(filters.searchText.toLowerCase());\n  });\n  document.querySelector('#recipes').innerHTML = '';\n  filteredRecipes.forEach(function (recipe) {\n    document.querySelector('#recipes').appendChild(generateRecipeElements(recipe));\n  });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMuanM/OWYyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgZ2V0U2F2ZWRSZWNpcGVzID0gKCkgPT4ge1xuICBjb25zdCBnZXRSZWNpcGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlY2lwZXMnKVxuICB0cnkge1xuICAgIHJldHVybiBnZXRSZWNpcGVzID8gSlNPTi5wYXJzZShnZXRSZWNpcGVzKSA6IFtdXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5jb25zdCBzYXZlUmVjaXBlcyA9IChyZWNpcGVzKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWNpcGVzJywgSlNPTi5zdHJpbmdpZnkocmVjaXBlcykpXG59XG5cbmNvbnN0IHJlbW92ZVJlY2lwZSA9IChyZWNpcGVzLCBpZCkgPT4ge1xuICBsZXQgcm1SZWNpcGVJbmRleCA9IHJlY2lwZXMuZmluZEluZGV4KHJlY2lwZSA9PiB7XG4gICAgcmV0dXJuIHJlY2lwZS5pZCA9PT0gaWRcbiAgfSlcblxuICBpZiAocm1SZWNpcGVJbmRleCA+IC0xKSB7XG4gICAgcmVjaXBlcy5zcGxpY2Uocm1SZWNpcGVJbmRleCwgMSlcbiAgfVxufVxuXG5jb25zdCByZWNpcGVTdGF0dXMgPSAocmVjaXBlLCBwKSA9PiB7XG4gIGxldCByZWFkeVN0YXR1c1RleHQgPSAnJ1xuICBjb25zdCB4ID0gcmVjaXBlLmluZ3JlZGllbnRzLm1hcChpbmdyZWRpZW50ID0+IHtcbiAgICByZXR1cm4gaW5ncmVkaWVudC5paGF2ZVxuICB9KVxuICBjb25zdCBhbGwgPSB4LmV2ZXJ5KGVsID0+IGVsID09PSB0cnVlKVxuICBjb25zdCBzb21lID0geC5zb21lKGVsID0+IGVsID09PSB0cnVlKVxuXG4gIGNvbnN0IG5vZGF0YSA9ICFyZWNpcGUuaW5ncmVkaWVudHNcbiAgY29uc3Qgbm90aGF2ZSA9IHguZXZlcnkoZWwgPT4gIWVsID09PSB0cnVlKVxuICBjb25zdCBub25lID0gbm9kYXRhIHx8IG5vdGhhdmVcblxuICBpZiAobm9uZSkge1xuICAgIHJlYWR5U3RhdHVzVGV4dCA9IGBZb3UgaGF2ZSBub25lIG9mIHRoZSBpbmdyZWRpZW50c2BcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ25vbmUnKVxuICB9IGVsc2UgaWYgKGFsbCkge1xuICAgIHJlYWR5U3RhdHVzVGV4dCA9IGBZb3UgaGF2ZSBhbGwgdGhlIGluZ3JlZGllbnRzYFxuICAgIHAuY2xhc3NMaXN0LmFkZCgnYWxsJylcbiAgfSBlbHNlIGlmIChzb21lKSB7XG4gICAgcmVhZHlTdGF0dXNUZXh0ID0gYFlvdSBoYXZlIHNvbWUgb2YgdGhlIGluZ3JlZGllbnRzYFxuICAgIHAuY2xhc3NMaXN0LmFkZCgnc29tZScpXG4gIH1cbiAgcmV0dXJuIHJlYWR5U3RhdHVzVGV4dFxufVxuXG5jb25zdCBnZW5lcmF0ZVJlY2lwZUVsZW1lbnRzID0gKHJlY2lwZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgYGVkaXQuaHRtbCMke3JlY2lwZS5pZH0gYClcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlbGVtZW50JylcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgaWYgKHJlY2lwZS50aXRsZSkge1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcmVjaXBlLnRpdGxlXG4gIH0gZWxzZSB7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVW5uYW1lZCBSZWNpcGUnXG4gIH1cblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHAuY2xhc3NMaXN0LmFkZCgncmVjaXBlLXN0YXR1cycpXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgcC5hcHBlbmRDaGlsZChzcGFuKVxuICBzcGFuLnRleHRDb250ZW50ID0gcmVjaXBlU3RhdHVzKHJlY2lwZSwgcClcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKHApXG4gIHJldHVybiBlbGVtZW50XG59XG5cbmNvbnN0IHJlbmRlclJlY2lwZXMgPSAocmVjaXBlcywgZmlsdGVycykgPT4ge1xuICBjb25zdCBmaWx0ZXJlZFJlY2lwZXMgPSByZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgIHJldHVybiByZWNpcGUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJzLnNlYXJjaFRleHQudG9Mb3dlckNhc2UoKSlcbiAgfSlcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVjaXBlcycpLmlubmVySFRNTCA9ICcnXG4gIGZpbHRlcmVkUmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlY2lwZXMnKS5hcHBlbmRDaGlsZChnZW5lcmF0ZVJlY2lwZUVsZW1lbnRzKHJlY2lwZSkpXG4gIH0pXG59XG5cblxuZXhwb3J0IHsgZ2V0U2F2ZWRSZWNpcGVzLCBzYXZlUmVjaXBlcywgcmVtb3ZlUmVjaXBlLCByZWNpcGVTdGF0dXMsIGdlbmVyYXRlUmVjaXBlRWxlbWVudHMsIHJlbmRlclJlY2lwZXMgfVxuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('var generateUuId = function generateUuId() {\n  var chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");\n\n  for (var i = 0, len = chars.length; i < len; i++) {\n    switch (chars[i]) {\n      case "x":\n        chars[i] = Math.floor(Math.random() * 16).toString(16);\n        break;\n\n      case "y":\n        chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);\n        break;\n    }\n  }\n\n  return chars.join("");\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (generateUuId);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dWlkLXY0LmpzPzBiOTkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2VuZXJhdGVVdUlkID0gKCkgPT4ge1xuICBsZXQgY2hhcnMgPSBcInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiLnNwbGl0KFwiXCIpO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2hhcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBzd2l0Y2ggKGNoYXJzW2ldKSB7XG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICBjaGFyc1tpXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KS50b1N0cmluZygxNik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgY2hhcnNbaV0gPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKyA4KS50b1N0cmluZygxNik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2hhcnMuam9pbihcIlwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVVdUlkXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n')},function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3M/ZGE5NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n")},function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3M/YTliZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n")},,function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);\n/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);\n/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar recipes = Object(_functions__WEBPACK_IMPORTED_MODULE_1__[/* getSavedRecipes */ \"a\"])();\nvar recipeId = location.hash.substring(1);\nvar recipe = recipes.find(function (recipe) {\n  return recipe.id === recipeId;\n});\nvar ingredients = recipe.ingredients;\nvar titleElement = document.querySelector('#recipe-title');\nvar bodyElement = document.querySelector('#recipe-body');\nvar ingredientElement = document.querySelector('#add-ingredient');\nvar rmBtn = document.querySelector('#delete-recipe');\n\nvar removeIngredients = function removeIngredients(id) {\n  var targetIndex = ingredients.findIndex(function (ingredient) {\n    return ingredient.id === id;\n  });\n\n  if (targetIndex > -1) {\n    ingredients.splice(targetIndex, 1);\n  }\n};\n\nvar toggleIngredient = function toggleIngredient(id) {\n  var target = ingredients.find(function (ingredient) {\n    return ingredient.id === id;\n  });\n\n  if (target) {\n    target.ihave = !target.ihave;\n  }\n};\n\nvar generateIngredientList = function generateIngredientList(ingredient) {\n  var li = document.createElement('li');\n  var checkbox = document.createElement('input');\n  checkbox.setAttribute('type', 'checkbox');\n  checkbox.checked = ingredient.ihave;\n  checkbox.addEventListener('change', function () {\n    toggleIngredient(ingredient.id);\n    Object(_functions__WEBPACK_IMPORTED_MODULE_1__[/* saveRecipes */ \"d\"])(recipes);\n    renderIngredients(ingredients);\n  });\n  var span = document.createElement('span');\n  span.textContent = ingredient.name;\n  var rmBtn = document.createElement('button');\n  rmBtn.textContent = 'remove';\n  rmBtn.addEventListener('click', function () {\n    removeIngredients(ingredient.id);\n    Object(_functions__WEBPACK_IMPORTED_MODULE_1__[/* saveRecipes */ \"d\"])(recipes);\n    renderIngredients(ingredients);\n  });\n  li.appendChild(checkbox);\n  li.appendChild(span);\n  li.appendChild(rmBtn);\n  return li;\n};\n\nvar renderIngredients = function renderIngredients(ingredients) {\n  document.querySelector('#ingredients__list').innerHTML = '';\n  ingredients.forEach(function (ingredient) {\n    document.querySelector('#ingredients__list').appendChild(generateIngredientList(ingredient));\n  });\n};\n\ntitleElement.value = recipe.title;\nbodyElement.value = recipe.body;\nrenderIngredients(ingredients);\ntitleElement.addEventListener('input', function (e) {\n  recipe.title = e.target.value;\n  Object(_functions__WEBPACK_IMPORTED_MODULE_1__[/* saveRecipes */ \"d\"])(recipes); // titleElement.value = recipe.title\n});\nbodyElement.addEventListener('input', function (e) {\n  recipe.body = e.target.value;\n  Object(_functions__WEBPACK_IMPORTED_MODULE_1__[/* saveRecipes */ \"d\"])(recipes); // bodyElement.value = recipe.body\n});\nrmBtn.addEventListener('click', function (e) {\n  Object(_functions__WEBPACK_IMPORTED_MODULE_1__[/* removeRecipe */ \"b\"])(recipes, recipe.id);\n  Object(_functions__WEBPACK_IMPORTED_MODULE_1__[/* saveRecipes */ \"d\"])(recipes);\n  location.assign('index.html');\n});\ningredientElement.addEventListener('submit', function (e) {\n  e.preventDefault();\n\n  if (e.target.elements.text.value) {\n    var id = Object(_uuid_v4__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])();\n    recipe.ingredients.push({\n      name: e.target.elements.text.value,\n      ihave: false,\n      id: id\n    });\n    Object(_functions__WEBPACK_IMPORTED_MODULE_1__[/* saveRecipes */ \"d\"])(recipes);\n    renderIngredients(ingredients);\n    e.target.elements.text.value = '';\n  }\n});\nwindow.addEventListener('storage', function (e) {\n  if (e.key === 'recipes') {\n    recipes = JSON.parse(e.newValue);\n  }\n\n  recipeId = location.hash.substring(1);\n  recipe = recipes.find(function (recipe) {\n    return recipe.id === recipeId;\n  });\n  titleElement.value = recipe.title;\n  bodyElement.value = recipe.body;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VkaXQuanM/ZWZiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2VuZXJhdGVVdUlkIGZyb20gJy4uL3V1aWQtdjQnXG5pbXBvcnQgeyBnZXRTYXZlZFJlY2lwZXMsIHNhdmVSZWNpcGVzLCByZW1vdmVSZWNpcGUgfSBmcm9tICcuLi9mdW5jdGlvbnMnXG5pbXBvcnQgJ25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlcy5zY3NzJ1xuXG5sZXQgcmVjaXBlcyA9IGdldFNhdmVkUmVjaXBlcygpXG5sZXQgcmVjaXBlSWQgPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKVxubGV0IHJlY2lwZSA9IHJlY2lwZXMuZmluZChyZWNpcGUgPT4ge1xuICByZXR1cm4gcmVjaXBlLmlkID09PSByZWNpcGVJZFxufSlcbmxldCBpbmdyZWRpZW50cyA9IHJlY2lwZS5pbmdyZWRpZW50c1xuXG5jb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVjaXBlLXRpdGxlJylcbmNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlY2lwZS1ib2R5JylcbmNvbnN0IGluZ3JlZGllbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1pbmdyZWRpZW50JylcbmNvbnN0IHJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlbGV0ZS1yZWNpcGUnKVxuXG5cbmNvbnN0IHJlbW92ZUluZ3JlZGllbnRzID0gKGlkKSA9PiB7XG4gIGNvbnN0IHRhcmdldEluZGV4ID0gaW5ncmVkaWVudHMuZmluZEluZGV4KGluZ3JlZGllbnQgPT4ge1xuICAgIHJldHVybiBpbmdyZWRpZW50LmlkID09PSBpZFxuICB9KVxuICBpZiAodGFyZ2V0SW5kZXggPiAtMSkge1xuICAgIGluZ3JlZGllbnRzLnNwbGljZSh0YXJnZXRJbmRleCwgMSlcbiAgfVxuXG59XG5cbmNvbnN0IHRvZ2dsZUluZ3JlZGllbnQgPSAoaWQpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gaW5ncmVkaWVudHMuZmluZChpbmdyZWRpZW50ID0+IHtcbiAgICByZXR1cm4gaW5ncmVkaWVudC5pZCA9PT0gaWRcbiAgfSlcbiAgaWYgKHRhcmdldCkge1xuICAgIHRhcmdldC5paGF2ZSA9ICF0YXJnZXQuaWhhdmVcbiAgfVxufVxuXG5jb25zdCBnZW5lcmF0ZUluZ3JlZGllbnRMaXN0ID0gKGluZ3JlZGllbnQpID0+IHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICBjaGVja2JveC5jaGVja2VkID0gaW5ncmVkaWVudC5paGF2ZVxuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgdG9nZ2xlSW5ncmVkaWVudChpbmdyZWRpZW50LmlkKVxuICAgIHNhdmVSZWNpcGVzKHJlY2lwZXMpXG4gICAgcmVuZGVySW5ncmVkaWVudHMoaW5ncmVkaWVudHMpXG4gIH0pXG5cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBzcGFuLnRleHRDb250ZW50ID0gaW5ncmVkaWVudC5uYW1lXG5cbiAgY29uc3Qgcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBybUJ0bi50ZXh0Q29udGVudCA9ICdyZW1vdmUnXG4gIHJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZUluZ3JlZGllbnRzKGluZ3JlZGllbnQuaWQpXG4gICAgc2F2ZVJlY2lwZXMocmVjaXBlcylcbiAgICByZW5kZXJJbmdyZWRpZW50cyhpbmdyZWRpZW50cylcbiAgfSlcblxuICBsaS5hcHBlbmRDaGlsZChjaGVja2JveClcbiAgbGkuYXBwZW5kQ2hpbGQoc3BhbilcbiAgbGkuYXBwZW5kQ2hpbGQocm1CdG4pXG4gIHJldHVybiBsaVxufVxuXG5jb25zdCByZW5kZXJJbmdyZWRpZW50cyA9IChpbmdyZWRpZW50cykgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5ncmVkaWVudHNfX2xpc3QnKS5pbm5lckhUTUwgPSAnJ1xuICBpbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmdyZWRpZW50c19fbGlzdCcpLmFwcGVuZENoaWxkKGdlbmVyYXRlSW5ncmVkaWVudExpc3QoaW5ncmVkaWVudCkpXG4gIH0pXG59XG5cbnRpdGxlRWxlbWVudC52YWx1ZSA9IHJlY2lwZS50aXRsZVxuYm9keUVsZW1lbnQudmFsdWUgPSByZWNpcGUuYm9keVxucmVuZGVySW5ncmVkaWVudHMoaW5ncmVkaWVudHMpXG5cbnRpdGxlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4ge1xuICByZWNpcGUudGl0bGUgPSBlLnRhcmdldC52YWx1ZVxuICBzYXZlUmVjaXBlcyhyZWNpcGVzKVxuICAvLyB0aXRsZUVsZW1lbnQudmFsdWUgPSByZWNpcGUudGl0bGVcbn0pXG5cbmJvZHlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XG4gIHJlY2lwZS5ib2R5ID0gZS50YXJnZXQudmFsdWVcbiAgc2F2ZVJlY2lwZXMocmVjaXBlcylcbiAgLy8gYm9keUVsZW1lbnQudmFsdWUgPSByZWNpcGUuYm9keVxufSlcblxucm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgcmVtb3ZlUmVjaXBlKHJlY2lwZXMsIHJlY2lwZS5pZClcbiAgc2F2ZVJlY2lwZXMocmVjaXBlcylcbiAgbG9jYXRpb24uYXNzaWduKCdpbmRleC5odG1sJylcbn0pXG5cbmluZ3JlZGllbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgaWYgKGUudGFyZ2V0LmVsZW1lbnRzLnRleHQudmFsdWUpIHtcbiAgICBjb25zdCBpZCA9IGdlbmVyYXRlVXVJZCgpXG4gICAgcmVjaXBlLmluZ3JlZGllbnRzLnB1c2goe1xuICAgICAgbmFtZTogZS50YXJnZXQuZWxlbWVudHMudGV4dC52YWx1ZSxcbiAgICAgIGloYXZlOiBmYWxzZSxcbiAgICAgIGlkOiBpZFxuICAgIH0pXG4gICAgc2F2ZVJlY2lwZXMocmVjaXBlcylcbiAgICByZW5kZXJJbmdyZWRpZW50cyhpbmdyZWRpZW50cylcbiAgICBlLnRhcmdldC5lbGVtZW50cy50ZXh0LnZhbHVlID0gJydcbiAgfVxufSlcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGUgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdyZWNpcGVzJykge1xuICAgIHJlY2lwZXMgPSBKU09OLnBhcnNlKGUubmV3VmFsdWUpXG4gIH1cbiAgcmVjaXBlSWQgPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKVxuICByZWNpcGUgPSByZWNpcGVzLmZpbmQocmVjaXBlID0+IHtcbiAgICByZXR1cm4gcmVjaXBlLmlkID09PSByZWNpcGVJZFxuICB9KVxuXG4gIHRpdGxlRWxlbWVudC52YWx1ZSA9IHJlY2lwZS50aXRsZVxuICBib2R5RWxlbWVudC52YWx1ZSA9IHJlY2lwZS5ib2R5XG59KVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n")}]);