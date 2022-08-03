(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./.storybook/crfTheme.js":
/*!********************************!*\
  !*** ./.storybook/crfTheme.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _storybook_theming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/theming */ "./node_modules/@storybook/theming/dist/esm/index.js");

/* harmony default export */ __webpack_exports__["a"] = (Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_0__[/* create */ "d"])({
  // base: 'dark',
  // brandTitle: "Storybook",
  // brandImage: "storybook-images/galapagos.png",
  colorSecondary: "#d74945"
}));

/***/ }),

/***/ "./.storybook/preview.js":
/*!*******************************!*\
  !*** ./.storybook/preview.js ***!
  \*******************************/
/*! exports provided: parameters */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parameters", function() { return parameters; });
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/esm/client/index.js");
/* harmony import */ var _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @storybook/addon-viewport */ "./node_modules/@storybook/addon-viewport/dist/esm/preview.js");
/* harmony import */ var _crfTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crfTheme */ "./.storybook/crfTheme.js");
/* harmony import */ var _styles_glpg_111_storybook_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/glpg-111/storybook.scss */ "./styles/glpg-111/storybook.scss");
/* harmony import */ var _styles_glpg_111_storybook_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_glpg_111_storybook_scss__WEBPACK_IMPORTED_MODULE_7__);






 // // golbal scss

 // //viewport addons

Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__["addParameters"])({
  viewport: {
    viewports: _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_5__[/* INITIAL_VIEWPORTS */ "a"]
  }
});
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__["addParameters"])({
  options: {
    theme: _crfTheme__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]
  }
});
var parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
      order: [],
      locales: 'en-US'
    }
  }
}; // automatically import all files ending in *.stories.js

var req = __webpack_require__("./components sync recursive \\.stories\\.js$");

function loadStories() {
  __webpack_require__(/*! ./welcomeStory */ "./.storybook/welcomeStory.js");

  req.keys().forEach(function (filename) {
    return req(filename);
  });
}

Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__["configure"])(loadStories, module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./.storybook/preview.js-generated-config-entry.js":
/*!*********************************************************!*\
  !*** ./.storybook/preview.js-generated-config-entry.js ***!
  \*********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@storybook/client-api */ "./node_modules/@storybook/client-api/dist/esm/ClientApi.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_storybook_preview_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./.storybook/preview.js */ "./.storybook/preview.js");









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
/* eslint-disable import/no-unresolved */




Object.keys(C_Users_BS691_Desktop_StorybookCommons_storybook_preview_js__WEBPACK_IMPORTED_MODULE_9__).forEach(function (key) {
  var value = C_Users_BS691_Desktop_StorybookCommons_storybook_preview_js__WEBPACK_IMPORTED_MODULE_9__[key];

  switch (key) {
    case 'args':
      {
        return Object(C_Users_BS691_Desktop_StorybookCommons_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_8__[/* addArgs */ "d"])(value);
      }

    case 'argTypes':
      {
        return Object(C_Users_BS691_Desktop_StorybookCommons_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_8__[/* addArgTypes */ "b"])(value);
      }

    case 'decorators':
      {
        return value.forEach(function (decorator) {
          return Object(C_Users_BS691_Desktop_StorybookCommons_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_8__[/* addDecorator */ "f"])(decorator, false);
        });
      }

    case 'loaders':
      {
        return value.forEach(function (loader) {
          return Object(C_Users_BS691_Desktop_StorybookCommons_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_8__[/* addLoader */ "g"])(loader, false);
        });
      }

    case 'parameters':
      {
        return Object(C_Users_BS691_Desktop_StorybookCommons_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_8__[/* addParameters */ "h"])(_objectSpread({}, value), false);
      }

    case 'argTypesEnhancers':
      {
        return value.forEach(function (enhancer) {
          return Object(C_Users_BS691_Desktop_StorybookCommons_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_8__[/* addArgTypesEnhancer */ "c"])(enhancer);
        });
      }

    case 'argsEnhancers':
      {
        return value.forEach(function (enhancer) {
          return Object(C_Users_BS691_Desktop_StorybookCommons_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_8__[/* addArgsEnhancer */ "e"])(enhancer);
        });
      }

    case 'render':
      {
        return Object(C_Users_BS691_Desktop_StorybookCommons_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_8__[/* setGlobalRender */ "i"])(value);
      }

    case 'globals':
    case 'globalTypes':
      {
        var v = {};
        v[key] = value;
        return Object(C_Users_BS691_Desktop_StorybookCommons_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_8__[/* addParameters */ "h"])(v, false);
      }

    case '__namedExportsOrder':
    case 'decorateStory':
    case 'renderToDOM':
      {
        return null; // This key is not handled directly in v6 mode.
      }

    default:
      {
        // eslint-disable-next-line prefer-template
        return console.log(key + ' was not supported :( !');
      }
  }
});

/***/ }),

/***/ "./.storybook/welcomeStory.js":
/*!************************************!*\
  !*** ./.storybook/welcomeStory.js ***!
  \************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/esm/client/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__["storiesOf"])("Others/Welcome", module).add("index", function () {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
    className: "px-4 py-5 my-5 text-center",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
        className: "img img-fluid",
        src: "storybook-images/galapagos.png"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h1", {
      className: "display-4 my-5",
      children: "Welcome to AEM Bulletproof UI components"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("h6", {
      children: ["Quickly design and customize responsive mobile-first sites with Storybook.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("br", {}), "Featuring Bootstrap Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("hr", {
      className: "my-4"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
      children: "Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient."
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
      className: "btn btn-primary btn-lg",
      href: "https://storybook.js.org/",
      target: "_blank",
      role: "button",
      children: "Learn more"
    })]
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components sync recursive \\.stories\\.js$":
/*!****************************************!*\
  !*** ./components sync \.stories\.js$ ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./atoms/a/a.stories.js": "./components/atoms/a/a.stories.js",
	"./atoms/h1/H1.stories.js": "./components/atoms/h1/H1.stories.js",
	"./atoms/h2/H2.stories.js": "./components/atoms/h2/H2.stories.js",
	"./atoms/h3/H3.stories.js": "./components/atoms/h3/H3.stories.js",
	"./atoms/h4/H4.stories.js": "./components/atoms/h4/H4.stories.js",
	"./atoms/h5/H5.stories.js": "./components/atoms/h5/H5.stories.js",
	"./atoms/h6/H6.stories.js": "./components/atoms/h6/H6.stories.js",
	"./molecules/button-link/1.ButtonLink.stories.js": "./components/molecules/button-link/1.ButtonLink.stories.js",
	"./molecules/headline-text/2.HeadlineText.stories.js": "./components/molecules/headline-text/2.HeadlineText.stories.js",
	"./molecules/image-extension/3.ImageExtension.stories.js": "./components/molecules/image-extension/3.ImageExtension.stories.js",
	"./pages/home/311p.homepage.stories.js": "./components/pages/home/311p.homepage.stories.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./components sync recursive \\.stories\\.js$";

/***/ }),

/***/ "./components sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$":
/*!****************************************************************************************************************************!*\
  !*** ./components sync ^\.(?:(?:^|[\\/]|(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/])(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|ts|tsx))$ ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./atoms/a/a.stories.js": "./components/atoms/a/a.stories.js",
	"./atoms/h1/H1.stories.js": "./components/atoms/h1/H1.stories.js",
	"./atoms/h2/H2.stories.js": "./components/atoms/h2/H2.stories.js",
	"./atoms/h3/H3.stories.js": "./components/atoms/h3/H3.stories.js",
	"./atoms/h4/H4.stories.js": "./components/atoms/h4/H4.stories.js",
	"./atoms/h5/H5.stories.js": "./components/atoms/h5/H5.stories.js",
	"./atoms/h6/H6.stories.js": "./components/atoms/h6/H6.stories.js",
	"./molecules/button-link/1.ButtonLink.stories.js": "./components/molecules/button-link/1.ButtonLink.stories.js",
	"./molecules/headline-text/2.HeadlineText.stories.js": "./components/molecules/headline-text/2.HeadlineText.stories.js",
	"./molecules/image-extension/3.ImageExtension.stories.js": "./components/molecules/image-extension/3.ImageExtension.stories.js",
	"./pages/home/311p.homepage.stories.js": "./components/pages/home/311p.homepage.stories.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./components sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$";

/***/ }),

/***/ "./components sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.js)$":
/*!***************************************************************************************************************!*\
  !*** ./components sync ^\.(?:(?:^|[\\/]|(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/])(?!\.)(?=.)[^\\/]*?\.stories\.js)$ ***!
  \***************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./atoms/a/a.stories.js": "./components/atoms/a/a.stories.js",
	"./atoms/h1/H1.stories.js": "./components/atoms/h1/H1.stories.js",
	"./atoms/h2/H2.stories.js": "./components/atoms/h2/H2.stories.js",
	"./atoms/h3/H3.stories.js": "./components/atoms/h3/H3.stories.js",
	"./atoms/h4/H4.stories.js": "./components/atoms/h4/H4.stories.js",
	"./atoms/h5/H5.stories.js": "./components/atoms/h5/H5.stories.js",
	"./atoms/h6/H6.stories.js": "./components/atoms/h6/H6.stories.js",
	"./molecules/button-link/1.ButtonLink.stories.js": "./components/molecules/button-link/1.ButtonLink.stories.js",
	"./molecules/headline-text/2.HeadlineText.stories.js": "./components/molecules/headline-text/2.HeadlineText.stories.js",
	"./molecules/image-extension/3.ImageExtension.stories.js": "./components/molecules/image-extension/3.ImageExtension.stories.js",
	"./pages/home/311p.homepage.stories.js": "./components/pages/home/311p.homepage.stories.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./components sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.js)$";

/***/ }),

/***/ "./components sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":
/*!****************************************************************************************************************!*\
  !*** ./components sync ^\.(?:(?:^|[\\/]|(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/])(?!\.)(?=.)[^\\/]*?\.stories\.mdx)$ ***!
  \****************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./components sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$";

/***/ }),

/***/ "./components/atoms/a/a.js":
/*!*********************************!*\
  !*** ./components/atoms/a/a.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




var A = function A(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
    href: "#",
    children: props.content
  });
};

A.displayName = "A";
A.defaultProps = {
  content: 'link'
};
A.propTypes = {
  /** Links allow users to click their way from page to page.  */
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
A.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "A",
  "props": {
    "content": {
      "defaultValue": {
        "value": "'link'",
        "computed": false
      },
      "description": "Links allow users to click their way from page to page.",
      "type": {
        "name": "string"
      },
      "required": false
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (A);

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["components\\atoms\\a\\a.js"] = {
    name: "A",
    docgenInfo: A.__docgenInfo,
    path: "components\\atoms\\a\\a.js"
  };
}

/***/ }),

/***/ "./components/atoms/a/a.stories.js":
/*!*****************************************!*\
  !*** ./components/atoms/a/a.stories.js ***!
  \*****************************************/
/*! exports provided: default, linkDefault */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkDefault", function() { return linkDefault; });
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./a */ "./components/atoms/a/a.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ = "\n    \n    // @ts-nocheck\n    // @ts-ignore\n    var __STORY__ = \"import React from 'react';\\r\\nimport A from './a';\\r\\n\\r\\nexport default {\\r\\n   title: 'Atoms/Link',\\r\\n   component: A,\\r\\n   argTypes: {\\r\\n    content: {\\r\\n        control: {type: 'text'},\\r\\n        name: 'Heading1',\\r\\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\\r\\n    },\\r\\n   }\\r\\n};\\r\\n\\r\\nconst Template = (args) => <A {...args}/>;\\r\\n\\r\\nexport const linkDefault = Template.bind({});\\r\\n\\r\\n\";\n    // @ts-ignore\n    var __LOCATIONS_MAP__ = {\"linkDefault\":{\"startLoc\":{\"col\":17,\"line\":16},\"endLoc\":{\"col\":41,\"line\":16},\"startBody\":{\"col\":17,\"line\":16},\"endBody\":{\"col\":41,\"line\":16}}};\n    \nimport React from 'react';\r\nimport A from './a';\r\n\r\nexport default {parameters: {\"storySource\":{\"source\":\"import React from 'react';\\r\\nimport A from './a';\\r\\n\\r\\nexport default {\\r\\n   title: 'Atoms/Link',\\r\\n   component: A,\\r\\n   argTypes: {\\r\\n    content: {\\r\\n        control: {type: 'text'},\\r\\n        name: 'Heading1',\\r\\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\\r\\n    },\\r\\n   }\\r\\n};\\r\\n\\r\\nconst Template = (args) => <A {...args}/>;\\r\\n\\r\\nexport const linkDefault = Template.bind({});\\r\\n\\r\\n\",\"locationsMap\":{\"link-default\":{\"startLoc\":{\"col\":17,\"line\":16},\"endLoc\":{\"col\":41,\"line\":16},\"startBody\":{\"col\":17,\"line\":16},\"endBody\":{\"col\":41,\"line\":16}}}},},\r\n   title: 'Atoms/Link',\r\n   component: A,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading1',\r\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <A {...args}/>;\r\n\r\nexport const linkDefault = Template.bind({});\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "linkDefault": {
    "startLoc": {
      "col": 17,
      "line": 24
    },
    "endLoc": {
      "col": 41,
      "line": 24
    },
    "startBody": {
      "col": 17,
      "line": 24
    },
    "endBody": {
      "col": 41,
      "line": 24
    }
  }
};
/* eslint-disable */
// @ts-nocheck
// @ts-ignore

var __STORY__ = "import React from 'react';\r\nimport A from './a';\r\n\r\nexport default {\r\n   title: 'Atoms/Link',\r\n   component: A,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading1',\r\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <A {...args}/>;\r\n\r\nexport const linkDefault = Template.bind({});\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "linkDefault": {
    "startLoc": {
      "col": 17,
      "line": 16
    },
    "endLoc": {
      "col": 41,
      "line": 16
    },
    "startBody": {
      "col": 17,
      "line": 16
    },
    "endBody": {
      "col": 41,
      "line": 16
    }
  }
};



/* harmony default export */ __webpack_exports__["default"] = ({
  parameters: {
    "storySource": {
      "source": "import React from 'react';\r\nimport A from './a';\r\n\r\nexport default {\r\n   title: 'Atoms/Link',\r\n   component: A,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading1',\r\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <A {...args}/>;\r\n\r\nexport const linkDefault = Template.bind({});\r\n\r\n",
      "locationsMap": {
        "link-default": {
          "startLoc": {
            "col": 17,
            "line": 16
          },
          "endLoc": {
            "col": 41,
            "line": 16
          },
          "startBody": {
            "col": 17,
            "line": 16
          },
          "endBody": {
            "col": 41,
            "line": 16
          }
        }
      }
    }
  },
  title: 'Atoms/Link',
  component: _a__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  argTypes: {
    content: {
      control: {
        type: 'text'
      },
      name: 'Heading1',
      defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting'
    }
  }
});

var Template = function Template(args) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_a__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({}, args));
};

Template.displayName = "Template";
var linkDefault = Template.bind({});
linkDefault.parameters = Object.assign({
  storySource: {
    source: "(args) => <A {...args}/>"
  }
}, linkDefault.parameters);

/***/ }),

/***/ "./components/atoms/h1/H1.stories.js":
/*!*******************************************!*\
  !*** ./components/atoms/h1/H1.stories.js ***!
  \*******************************************/
/*! exports provided: default, heading1 */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heading1", function() { return heading1; });
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _h1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./h1 */ "./components/atoms/h1/h1.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ = "\n    \n    // @ts-nocheck\n    // @ts-ignore\n    var __STORY__ = \"import React from 'react';\\r\\nimport H1 from './h1';\\r\\n\\r\\nexport default {\\r\\n   title: 'Atoms/Headings',\\r\\n   component: H1,\\r\\n   argTypes: {\\r\\n    content: {\\r\\n        control: {type: 'text'},\\r\\n        name: 'Heading1',\\r\\n        defaultValue: 'Lorem Ipsum is dummy text of the printing and typesetting',\\r\\n    },\\r\\n   }\\r\\n};\\r\\n\\r\\nconst Template = (args) => <H1 {...args}/>;\\r\\n\\r\\nexport const heading1 = Template.bind({});\\r\\n\\r\\n\";\n    // @ts-ignore\n    var __LOCATIONS_MAP__ = {\"heading1\":{\"startLoc\":{\"col\":17,\"line\":16},\"endLoc\":{\"col\":42,\"line\":16},\"startBody\":{\"col\":17,\"line\":16},\"endBody\":{\"col\":42,\"line\":16}}};\n    \nimport React from 'react';\r\nimport H1 from './h1';\r\n\r\nexport default {parameters: {\"storySource\":{\"source\":\"import React from 'react';\\r\\nimport H1 from './h1';\\r\\n\\r\\nexport default {\\r\\n   title: 'Atoms/Headings',\\r\\n   component: H1,\\r\\n   argTypes: {\\r\\n    content: {\\r\\n        control: {type: 'text'},\\r\\n        name: 'Heading1',\\r\\n        defaultValue: 'Lorem Ipsum is dummy text of the printing and typesetting',\\r\\n    },\\r\\n   }\\r\\n};\\r\\n\\r\\nconst Template = (args) => <H1 {...args}/>;\\r\\n\\r\\nexport const heading1 = Template.bind({});\\r\\n\\r\\n\",\"locationsMap\":{\"heading-1\":{\"startLoc\":{\"col\":17,\"line\":16},\"endLoc\":{\"col\":42,\"line\":16},\"startBody\":{\"col\":17,\"line\":16},\"endBody\":{\"col\":42,\"line\":16}}}},},\r\n   title: 'Atoms/Headings',\r\n   component: H1,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading1',\r\n        defaultValue: 'Lorem Ipsum is dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <H1 {...args}/>;\r\n\r\nexport const heading1 = Template.bind({});\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "heading1": {
    "startLoc": {
      "col": 17,
      "line": 24
    },
    "endLoc": {
      "col": 42,
      "line": 24
    },
    "startBody": {
      "col": 17,
      "line": 24
    },
    "endBody": {
      "col": 42,
      "line": 24
    }
  }
};
/* eslint-disable */
// @ts-nocheck
// @ts-ignore

var __STORY__ = "import React from 'react';\r\nimport H1 from './h1';\r\n\r\nexport default {\r\n   title: 'Atoms/Headings',\r\n   component: H1,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading1',\r\n        defaultValue: 'Lorem Ipsum is dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <H1 {...args}/>;\r\n\r\nexport const heading1 = Template.bind({});\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "heading1": {
    "startLoc": {
      "col": 17,
      "line": 16
    },
    "endLoc": {
      "col": 42,
      "line": 16
    },
    "startBody": {
      "col": 17,
      "line": 16
    },
    "endBody": {
      "col": 42,
      "line": 16
    }
  }
};



/* harmony default export */ __webpack_exports__["default"] = ({
  parameters: {
    "storySource": {
      "source": "import React from 'react';\r\nimport H1 from './h1';\r\n\r\nexport default {\r\n   title: 'Atoms/Headings',\r\n   component: H1,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading1',\r\n        defaultValue: 'Lorem Ipsum is dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <H1 {...args}/>;\r\n\r\nexport const heading1 = Template.bind({});\r\n\r\n",
      "locationsMap": {
        "heading-1": {
          "startLoc": {
            "col": 17,
            "line": 16
          },
          "endLoc": {
            "col": 42,
            "line": 16
          },
          "startBody": {
            "col": 17,
            "line": 16
          },
          "endBody": {
            "col": 42,
            "line": 16
          }
        }
      }
    }
  },
  title: 'Atoms/Headings',
  component: _h1__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  argTypes: {
    content: {
      control: {
        type: 'text'
      },
      name: 'Heading1',
      defaultValue: 'Lorem Ipsum is dummy text of the printing and typesetting'
    }
  }
});

var Template = function Template(args) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_h1__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({}, args));
};

Template.displayName = "Template";
var heading1 = Template.bind({});
heading1.parameters = Object.assign({
  storySource: {
    source: "(args) => <H1 {...args}/>"
  }
}, heading1.parameters);

/***/ }),

/***/ "./components/atoms/h1/h1.js":
/*!***********************************!*\
  !*** ./components/atoms/h1/h1.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




var H1 = function H1(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("h1", {
    children: [props.content, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("sup", {
      children: "Lorem"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("sub", {
      children: "ipsum"
    })]
  });
};

H1.displayName = "H1";
H1.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "H1"
};
/* harmony default export */ __webpack_exports__["a"] = (H1);

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["components\\atoms\\h1\\h1.js"] = {
    name: "H1",
    docgenInfo: H1.__docgenInfo,
    path: "components\\atoms\\h1\\h1.js"
  };
}

/***/ }),

/***/ "./components/atoms/h2/H2.stories.js":
/*!*******************************************!*\
  !*** ./components/atoms/h2/H2.stories.js ***!
  \*******************************************/
/*! exports provided: default, heading2 */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heading2", function() { return heading2; });
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _h2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./h2 */ "./components/atoms/h2/h2.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ = "\n    \n    // @ts-nocheck\n    // @ts-ignore\n    var __STORY__ = \"import React from 'react';\\r\\nimport H2 from './h2';\\r\\n\\r\\nexport default {\\r\\n   title: 'Atoms/Headings',\\r\\n   component: H2,\\r\\n   argTypes: {\\r\\n    content: {\\r\\n        control: {type: 'text'},\\r\\n        name: 'Heading2',\\r\\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\\r\\n    },\\r\\n   }\\r\\n};\\r\\n\\r\\nconst Template = (args) => <H2 {...args}/>;\\r\\n\\r\\nexport const heading2 = Template.bind({});\\r\\n\\r\\n\";\n    // @ts-ignore\n    var __LOCATIONS_MAP__ = {\"heading2\":{\"startLoc\":{\"col\":17,\"line\":16},\"endLoc\":{\"col\":42,\"line\":16},\"startBody\":{\"col\":17,\"line\":16},\"endBody\":{\"col\":42,\"line\":16}}};\n    \nimport React from 'react';\r\nimport H2 from './h2';\r\n\r\nexport default {parameters: {\"storySource\":{\"source\":\"import React from 'react';\\r\\nimport H2 from './h2';\\r\\n\\r\\nexport default {\\r\\n   title: 'Atoms/Headings',\\r\\n   component: H2,\\r\\n   argTypes: {\\r\\n    content: {\\r\\n        control: {type: 'text'},\\r\\n        name: 'Heading2',\\r\\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\\r\\n    },\\r\\n   }\\r\\n};\\r\\n\\r\\nconst Template = (args) => <H2 {...args}/>;\\r\\n\\r\\nexport const heading2 = Template.bind({});\\r\\n\\r\\n\",\"locationsMap\":{\"heading-2\":{\"startLoc\":{\"col\":17,\"line\":16},\"endLoc\":{\"col\":42,\"line\":16},\"startBody\":{\"col\":17,\"line\":16},\"endBody\":{\"col\":42,\"line\":16}}}},},\r\n   title: 'Atoms/Headings',\r\n   component: H2,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading2',\r\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <H2 {...args}/>;\r\n\r\nexport const heading2 = Template.bind({});\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "heading2": {
    "startLoc": {
      "col": 17,
      "line": 24
    },
    "endLoc": {
      "col": 42,
      "line": 24
    },
    "startBody": {
      "col": 17,
      "line": 24
    },
    "endBody": {
      "col": 42,
      "line": 24
    }
  }
};
/* eslint-disable */
// @ts-nocheck
// @ts-ignore

var __STORY__ = "import React from 'react';\r\nimport H2 from './h2';\r\n\r\nexport default {\r\n   title: 'Atoms/Headings',\r\n   component: H2,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading2',\r\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <H2 {...args}/>;\r\n\r\nexport const heading2 = Template.bind({});\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "heading2": {
    "startLoc": {
      "col": 17,
      "line": 16
    },
    "endLoc": {
      "col": 42,
      "line": 16
    },
    "startBody": {
      "col": 17,
      "line": 16
    },
    "endBody": {
      "col": 42,
      "line": 16
    }
  }
};



/* harmony default export */ __webpack_exports__["default"] = ({
  parameters: {
    "storySource": {
      "source": "import React from 'react';\r\nimport H2 from './h2';\r\n\r\nexport default {\r\n   title: 'Atoms/Headings',\r\n   component: H2,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading2',\r\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <H2 {...args}/>;\r\n\r\nexport const heading2 = Template.bind({});\r\n\r\n",
      "locationsMap": {
        "heading-2": {
          "startLoc": {
            "col": 17,
            "line": 16
          },
          "endLoc": {
            "col": 42,
            "line": 16
          },
          "startBody": {
            "col": 17,
            "line": 16
          },
          "endBody": {
            "col": 42,
            "line": 16
          }
        }
      }
    }
  },
  title: 'Atoms/Headings',
  component: _h2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  argTypes: {
    content: {
      control: {
        type: 'text'
      },
      name: 'Heading2',
      defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting'
    }
  }
});

var Template = function Template(args) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_h2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({}, args));
};

Template.displayName = "Template";
var heading2 = Template.bind({});
heading2.parameters = Object.assign({
  storySource: {
    source: "(args) => <H2 {...args}/>"
  }
}, heading2.parameters);

/***/ }),

/***/ "./components/atoms/h2/h2.js":
/*!***********************************!*\
  !*** ./components/atoms/h2/h2.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




var H2 = function H2(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("h2", {
    children: [props.content, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("sup", {
      children: "Lorem"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("sub", {
      children: "ipsum"
    })]
  });
};

H2.displayName = "H2";
H2.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "H2"
};
/* harmony default export */ __webpack_exports__["a"] = (H2);

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["components\\atoms\\h2\\h2.js"] = {
    name: "H2",
    docgenInfo: H2.__docgenInfo,
    path: "components\\atoms\\h2\\h2.js"
  };
}

/***/ }),

/***/ "./components/atoms/h3/H3.stories.js":
/*!*******************************************!*\
  !*** ./components/atoms/h3/H3.stories.js ***!
  \*******************************************/
/*! exports provided: default, heading3 */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heading3", function() { return heading3; });
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _h3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./h3 */ "./components/atoms/h3/h3.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ = "\n    \n    // @ts-nocheck\n    // @ts-ignore\n    var __STORY__ = \"import React from 'react';\\r\\nimport H3 from './h3';\\r\\n\\r\\nexport default {\\r\\n   title: 'Atoms/Headings',\\r\\n   component: H3,\\r\\n   argTypes: {\\r\\n    content: {\\r\\n        control: {type: 'text'},\\r\\n        name: 'Heading3',\\r\\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\\r\\n    },\\r\\n   }\\r\\n};\\r\\n\\r\\nconst Template = (args) => <H3 {...args}/>;\\r\\n\\r\\nexport const heading3 = Template.bind({});\\r\\n\\r\\n\";\n    // @ts-ignore\n    var __LOCATIONS_MAP__ = {\"heading3\":{\"startLoc\":{\"col\":17,\"line\":16},\"endLoc\":{\"col\":42,\"line\":16},\"startBody\":{\"col\":17,\"line\":16},\"endBody\":{\"col\":42,\"line\":16}}};\n    \nimport React from 'react';\r\nimport H3 from './h3';\r\n\r\nexport default {parameters: {\"storySource\":{\"source\":\"import React from 'react';\\r\\nimport H3 from './h3';\\r\\n\\r\\nexport default {\\r\\n   title: 'Atoms/Headings',\\r\\n   component: H3,\\r\\n   argTypes: {\\r\\n    content: {\\r\\n        control: {type: 'text'},\\r\\n        name: 'Heading3',\\r\\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\\r\\n    },\\r\\n   }\\r\\n};\\r\\n\\r\\nconst Template = (args) => <H3 {...args}/>;\\r\\n\\r\\nexport const heading3 = Template.bind({});\\r\\n\\r\\n\",\"locationsMap\":{\"heading-3\":{\"startLoc\":{\"col\":17,\"line\":16},\"endLoc\":{\"col\":42,\"line\":16},\"startBody\":{\"col\":17,\"line\":16},\"endBody\":{\"col\":42,\"line\":16}}}},},\r\n   title: 'Atoms/Headings',\r\n   component: H3,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading3',\r\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <H3 {...args}/>;\r\n\r\nexport const heading3 = Template.bind({});\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "heading3": {
    "startLoc": {
      "col": 17,
      "line": 24
    },
    "endLoc": {
      "col": 42,
      "line": 24
    },
    "startBody": {
      "col": 17,
      "line": 24
    },
    "endBody": {
      "col": 42,
      "line": 24
    }
  }
};
/* eslint-disable */
// @ts-nocheck
// @ts-ignore

var __STORY__ = "import React from 'react';\r\nimport H3 from './h3';\r\n\r\nexport default {\r\n   title: 'Atoms/Headings',\r\n   component: H3,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading3',\r\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <H3 {...args}/>;\r\n\r\nexport const heading3 = Template.bind({});\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "heading3": {
    "startLoc": {
      "col": 17,
      "line": 16
    },
    "endLoc": {
      "col": 42,
      "line": 16
    },
    "startBody": {
      "col": 17,
      "line": 16
    },
    "endBody": {
      "col": 42,
      "line": 16
    }
  }
};



/* harmony default export */ __webpack_exports__["default"] = ({
  parameters: {
    "storySource": {
      "source": "import React from 'react';\r\nimport H3 from './h3';\r\n\r\nexport default {\r\n   title: 'Atoms/Headings',\r\n   component: H3,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading3',\r\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <H3 {...args}/>;\r\n\r\nexport const heading3 = Template.bind({});\r\n\r\n",
      "locationsMap": {
        "heading-3": {
          "startLoc": {
            "col": 17,
            "line": 16
          },
          "endLoc": {
            "col": 42,
            "line": 16
          },
          "startBody": {
            "col": 17,
            "line": 16
          },
          "endBody": {
            "col": 42,
            "line": 16
          }
        }
      }
    }
  },
  title: 'Atoms/Headings',
  component: _h3__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  argTypes: {
    content: {
      control: {
        type: 'text'
      },
      name: 'Heading3',
      defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting'
    }
  }
});

var Template = function Template(args) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_h3__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({}, args));
};

Template.displayName = "Template";
var heading3 = Template.bind({});
heading3.parameters = Object.assign({
  storySource: {
    source: "(args) => <H3 {...args}/>"
  }
}, heading3.parameters);

/***/ }),

/***/ "./components/atoms/h3/h3.js":
/*!***********************************!*\
  !*** ./components/atoms/h3/h3.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




var H3 = function H3(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("h3", {
    children: [props.content, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("sup", {
      children: "Lorem"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("sub", {
      children: "ipsum"
    })]
  });
};

H3.displayName = "H3";
H3.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "H3"
};
/* harmony default export */ __webpack_exports__["a"] = (H3);

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["components\\atoms\\h3\\h3.js"] = {
    name: "H3",
    docgenInfo: H3.__docgenInfo,
    path: "components\\atoms\\h3\\h3.js"
  };
}

/***/ }),

/***/ "./components/atoms/h4/H4.stories.js":
/*!*******************************************!*\
  !*** ./components/atoms/h4/H4.stories.js ***!
  \*******************************************/
/*! exports provided: default, heading4 */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heading4", function() { return heading4; });
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _h4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./h4 */ "./components/atoms/h4/h4.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ = "\n    \n    // @ts-nocheck\n    // @ts-ignore\n    var __STORY__ = \"import React from 'react';\\r\\nimport H4 from './h4';\\r\\n\\r\\nexport default {\\r\\n   title: 'Atoms/Headings',\\r\\n   component: H4,\\r\\n   argTypes: {\\r\\n    content: {\\r\\n        control: {type: 'text'},\\r\\n        name: 'Heading4',\\r\\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\\r\\n    },\\r\\n   }\\r\\n};\\r\\n\\r\\nconst Template = (args) => <H4 {...args}/>;\\r\\n\\r\\nexport const heading4 = Template.bind({});\\r\\n\\r\\n\";\n    // @ts-ignore\n    var __LOCATIONS_MAP__ = {\"heading4\":{\"startLoc\":{\"col\":17,\"line\":16},\"endLoc\":{\"col\":42,\"line\":16},\"startBody\":{\"col\":17,\"line\":16},\"endBody\":{\"col\":42,\"line\":16}}};\n    \nimport React from 'react';\r\nimport H4 from './h4';\r\n\r\nexport default {parameters: {\"storySource\":{\"source\":\"import React from 'react';\\r\\nimport H4 from './h4';\\r\\n\\r\\nexport default {\\r\\n   title: 'Atoms/Headings',\\r\\n   component: H4,\\r\\n   argTypes: {\\r\\n    content: {\\r\\n        control: {type: 'text'},\\r\\n        name: 'Heading4',\\r\\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\\r\\n    },\\r\\n   }\\r\\n};\\r\\n\\r\\nconst Template = (args) => <H4 {...args}/>;\\r\\n\\r\\nexport const heading4 = Template.bind({});\\r\\n\\r\\n\",\"locationsMap\":{\"heading-4\":{\"startLoc\":{\"col\":17,\"line\":16},\"endLoc\":{\"col\":42,\"line\":16},\"startBody\":{\"col\":17,\"line\":16},\"endBody\":{\"col\":42,\"line\":16}}}},},\r\n   title: 'Atoms/Headings',\r\n   component: H4,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading4',\r\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <H4 {...args}/>;\r\n\r\nexport const heading4 = Template.bind({});\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "heading4": {
    "startLoc": {
      "col": 17,
      "line": 24
    },
    "endLoc": {
      "col": 42,
      "line": 24
    },
    "startBody": {
      "col": 17,
      "line": 24
    },
    "endBody": {
      "col": 42,
      "line": 24
    }
  }
};
/* eslint-disable */
// @ts-nocheck
// @ts-ignore

var __STORY__ = "import React from 'react';\r\nimport H4 from './h4';\r\n\r\nexport default {\r\n   title: 'Atoms/Headings',\r\n   component: H4,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading4',\r\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <H4 {...args}/>;\r\n\r\nexport const heading4 = Template.bind({});\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "heading4": {
    "startLoc": {
      "col": 17,
      "line": 16
    },
    "endLoc": {
      "col": 42,
      "line": 16
    },
    "startBody": {
      "col": 17,
      "line": 16
    },
    "endBody": {
      "col": 42,
      "line": 16
    }
  }
};



/* harmony default export */ __webpack_exports__["default"] = ({
  parameters: {
    "storySource": {
      "source": "import React from 'react';\r\nimport H4 from './h4';\r\n\r\nexport default {\r\n   title: 'Atoms/Headings',\r\n   component: H4,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading4',\r\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <H4 {...args}/>;\r\n\r\nexport const heading4 = Template.bind({});\r\n\r\n",
      "locationsMap": {
        "heading-4": {
          "startLoc": {
            "col": 17,
            "line": 16
          },
          "endLoc": {
            "col": 42,
            "line": 16
          },
          "startBody": {
            "col": 17,
            "line": 16
          },
          "endBody": {
            "col": 42,
            "line": 16
          }
        }
      }
    }
  },
  title: 'Atoms/Headings',
  component: _h4__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  argTypes: {
    content: {
      control: {
        type: 'text'
      },
      name: 'Heading4',
      defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting'
    }
  }
});

var Template = function Template(args) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_h4__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({}, args));
};

Template.displayName = "Template";
var heading4 = Template.bind({});
heading4.parameters = Object.assign({
  storySource: {
    source: "(args) => <H4 {...args}/>"
  }
}, heading4.parameters);

/***/ }),

/***/ "./components/atoms/h4/h4.js":
/*!***********************************!*\
  !*** ./components/atoms/h4/h4.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




var H4 = function H4(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("h4", {
    children: [props.content, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("sup", {
      children: "Lorem"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("sub", {
      children: "ipsum"
    })]
  });
};

H4.displayName = "H4";
H4.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "H4"
};
/* harmony default export */ __webpack_exports__["a"] = (H4);

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["components\\atoms\\h4\\h4.js"] = {
    name: "H4",
    docgenInfo: H4.__docgenInfo,
    path: "components\\atoms\\h4\\h4.js"
  };
}

/***/ }),

/***/ "./components/atoms/h5/H5.stories.js":
/*!*******************************************!*\
  !*** ./components/atoms/h5/H5.stories.js ***!
  \*******************************************/
/*! exports provided: default, heading5 */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heading5", function() { return heading5; });
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _h5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./h5 */ "./components/atoms/h5/h5.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ = "\n    \n    // @ts-nocheck\n    // @ts-ignore\n    var __STORY__ = \"import React from 'react';\\r\\nimport H5 from './h5';\\r\\n\\r\\nexport default {\\r\\n   title: 'Atoms/Headings',\\r\\n   component: H5,\\r\\n   argTypes: {\\r\\n    content: {\\r\\n        control: {type: 'text'},\\r\\n        name: 'Heading5',\\r\\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\\r\\n    },\\r\\n   }\\r\\n};\\r\\n\\r\\nconst Template = (args) => <H5 {...args}/>;\\r\\n\\r\\nexport const heading5 = Template.bind({});\\r\\n\\r\\n\";\n    // @ts-ignore\n    var __LOCATIONS_MAP__ = {\"heading5\":{\"startLoc\":{\"col\":17,\"line\":16},\"endLoc\":{\"col\":42,\"line\":16},\"startBody\":{\"col\":17,\"line\":16},\"endBody\":{\"col\":42,\"line\":16}}};\n    \nimport React from 'react';\r\nimport H5 from './h5';\r\n\r\nexport default {parameters: {\"storySource\":{\"source\":\"import React from 'react';\\r\\nimport H5 from './h5';\\r\\n\\r\\nexport default {\\r\\n   title: 'Atoms/Headings',\\r\\n   component: H5,\\r\\n   argTypes: {\\r\\n    content: {\\r\\n        control: {type: 'text'},\\r\\n        name: 'Heading5',\\r\\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\\r\\n    },\\r\\n   }\\r\\n};\\r\\n\\r\\nconst Template = (args) => <H5 {...args}/>;\\r\\n\\r\\nexport const heading5 = Template.bind({});\\r\\n\\r\\n\",\"locationsMap\":{\"heading-5\":{\"startLoc\":{\"col\":17,\"line\":16},\"endLoc\":{\"col\":42,\"line\":16},\"startBody\":{\"col\":17,\"line\":16},\"endBody\":{\"col\":42,\"line\":16}}}},},\r\n   title: 'Atoms/Headings',\r\n   component: H5,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading5',\r\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <H5 {...args}/>;\r\n\r\nexport const heading5 = Template.bind({});\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "heading5": {
    "startLoc": {
      "col": 17,
      "line": 24
    },
    "endLoc": {
      "col": 42,
      "line": 24
    },
    "startBody": {
      "col": 17,
      "line": 24
    },
    "endBody": {
      "col": 42,
      "line": 24
    }
  }
};
/* eslint-disable */
// @ts-nocheck
// @ts-ignore

var __STORY__ = "import React from 'react';\r\nimport H5 from './h5';\r\n\r\nexport default {\r\n   title: 'Atoms/Headings',\r\n   component: H5,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading5',\r\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <H5 {...args}/>;\r\n\r\nexport const heading5 = Template.bind({});\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "heading5": {
    "startLoc": {
      "col": 17,
      "line": 16
    },
    "endLoc": {
      "col": 42,
      "line": 16
    },
    "startBody": {
      "col": 17,
      "line": 16
    },
    "endBody": {
      "col": 42,
      "line": 16
    }
  }
};



/* harmony default export */ __webpack_exports__["default"] = ({
  parameters: {
    "storySource": {
      "source": "import React from 'react';\r\nimport H5 from './h5';\r\n\r\nexport default {\r\n   title: 'Atoms/Headings',\r\n   component: H5,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading5',\r\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <H5 {...args}/>;\r\n\r\nexport const heading5 = Template.bind({});\r\n\r\n",
      "locationsMap": {
        "heading-5": {
          "startLoc": {
            "col": 17,
            "line": 16
          },
          "endLoc": {
            "col": 42,
            "line": 16
          },
          "startBody": {
            "col": 17,
            "line": 16
          },
          "endBody": {
            "col": 42,
            "line": 16
          }
        }
      }
    }
  },
  title: 'Atoms/Headings',
  component: _h5__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  argTypes: {
    content: {
      control: {
        type: 'text'
      },
      name: 'Heading5',
      defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting'
    }
  }
});

var Template = function Template(args) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_h5__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({}, args));
};

Template.displayName = "Template";
var heading5 = Template.bind({});
heading5.parameters = Object.assign({
  storySource: {
    source: "(args) => <H5 {...args}/>"
  }
}, heading5.parameters);

/***/ }),

/***/ "./components/atoms/h5/h5.js":
/*!***********************************!*\
  !*** ./components/atoms/h5/h5.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




var H5 = function H5(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("h5", {
    children: [props.content, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("sup", {
      children: "Lorem"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("sub", {
      children: "ipsum"
    })]
  });
};

H5.displayName = "H5";
H5.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "H5"
};
/* harmony default export */ __webpack_exports__["a"] = (H5);

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["components\\atoms\\h5\\h5.js"] = {
    name: "H5",
    docgenInfo: H5.__docgenInfo,
    path: "components\\atoms\\h5\\h5.js"
  };
}

/***/ }),

/***/ "./components/atoms/h6/H6.stories.js":
/*!*******************************************!*\
  !*** ./components/atoms/h6/H6.stories.js ***!
  \*******************************************/
/*! exports provided: default, heading6 */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heading6", function() { return heading6; });
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _h6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./h6 */ "./components/atoms/h6/h6.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ = "\n    \n    // @ts-nocheck\n    // @ts-ignore\n    var __STORY__ = \"import React from 'react';\\r\\nimport H6 from './h6';\\r\\n\\r\\nexport default {\\r\\n   title: 'Atoms/Headings',\\r\\n   component: H6,\\r\\n   argTypes: {\\r\\n    content: {\\r\\n        control: {type: 'text'},\\r\\n        name: 'Heading6',\\r\\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\\r\\n    },\\r\\n   }\\r\\n};\\r\\n\\r\\nconst Template = (args) => <H6 {...args}/>;\\r\\n\\r\\nexport const heading6 = Template.bind({});\\r\\n\\r\\n\";\n    // @ts-ignore\n    var __LOCATIONS_MAP__ = {\"heading6\":{\"startLoc\":{\"col\":17,\"line\":16},\"endLoc\":{\"col\":42,\"line\":16},\"startBody\":{\"col\":17,\"line\":16},\"endBody\":{\"col\":42,\"line\":16}}};\n    \nimport React from 'react';\r\nimport H6 from './h6';\r\n\r\nexport default {parameters: {\"storySource\":{\"source\":\"import React from 'react';\\r\\nimport H6 from './h6';\\r\\n\\r\\nexport default {\\r\\n   title: 'Atoms/Headings',\\r\\n   component: H6,\\r\\n   argTypes: {\\r\\n    content: {\\r\\n        control: {type: 'text'},\\r\\n        name: 'Heading6',\\r\\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\\r\\n    },\\r\\n   }\\r\\n};\\r\\n\\r\\nconst Template = (args) => <H6 {...args}/>;\\r\\n\\r\\nexport const heading6 = Template.bind({});\\r\\n\\r\\n\",\"locationsMap\":{\"heading-6\":{\"startLoc\":{\"col\":17,\"line\":16},\"endLoc\":{\"col\":42,\"line\":16},\"startBody\":{\"col\":17,\"line\":16},\"endBody\":{\"col\":42,\"line\":16}}}},},\r\n   title: 'Atoms/Headings',\r\n   component: H6,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading6',\r\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <H6 {...args}/>;\r\n\r\nexport const heading6 = Template.bind({});\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "heading6": {
    "startLoc": {
      "col": 17,
      "line": 24
    },
    "endLoc": {
      "col": 42,
      "line": 24
    },
    "startBody": {
      "col": 17,
      "line": 24
    },
    "endBody": {
      "col": 42,
      "line": 24
    }
  }
};
/* eslint-disable */
// @ts-nocheck
// @ts-ignore

var __STORY__ = "import React from 'react';\r\nimport H6 from './h6';\r\n\r\nexport default {\r\n   title: 'Atoms/Headings',\r\n   component: H6,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading6',\r\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <H6 {...args}/>;\r\n\r\nexport const heading6 = Template.bind({});\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "heading6": {
    "startLoc": {
      "col": 17,
      "line": 16
    },
    "endLoc": {
      "col": 42,
      "line": 16
    },
    "startBody": {
      "col": 17,
      "line": 16
    },
    "endBody": {
      "col": 42,
      "line": 16
    }
  }
};



/* harmony default export */ __webpack_exports__["default"] = ({
  parameters: {
    "storySource": {
      "source": "import React from 'react';\r\nimport H6 from './h6';\r\n\r\nexport default {\r\n   title: 'Atoms/Headings',\r\n   component: H6,\r\n   argTypes: {\r\n    content: {\r\n        control: {type: 'text'},\r\n        name: 'Heading6',\r\n        defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting',\r\n    },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <H6 {...args}/>;\r\n\r\nexport const heading6 = Template.bind({});\r\n\r\n",
      "locationsMap": {
        "heading-6": {
          "startLoc": {
            "col": 17,
            "line": 16
          },
          "endLoc": {
            "col": 42,
            "line": 16
          },
          "startBody": {
            "col": 17,
            "line": 16
          },
          "endBody": {
            "col": 42,
            "line": 16
          }
        }
      }
    }
  },
  title: 'Atoms/Headings',
  component: _h6__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  argTypes: {
    content: {
      control: {
        type: 'text'
      },
      name: 'Heading6',
      defaultValue: 'Lorem Ipsum is simply dummy text of the printing and typesetting'
    }
  }
});

var Template = function Template(args) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_h6__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({}, args));
};

Template.displayName = "Template";
var heading6 = Template.bind({});
heading6.parameters = Object.assign({
  storySource: {
    source: "(args) => <H6 {...args}/>"
  }
}, heading6.parameters);

/***/ }),

/***/ "./components/atoms/h6/h6.js":
/*!***********************************!*\
  !*** ./components/atoms/h6/h6.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




var H6 = function H6(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("h6", {
    children: [props.content, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("sup", {
      children: "Lorem"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("sub", {
      children: "ipsum"
    })]
  });
};

H6.displayName = "H6";
H6.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "H6"
};
/* harmony default export */ __webpack_exports__["a"] = (H6);

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["components\\atoms\\h6\\h6.js"] = {
    name: "H6",
    docgenInfo: H6.__docgenInfo,
    path: "components\\atoms\\h6\\h6.js"
  };
}

/***/ }),

/***/ "./components/molecules/button-link/1.ButtonLink.stories.js":
/*!******************************************************************!*\
  !*** ./components/molecules/button-link/1.ButtonLink.stories.js ***!
  \******************************************************************/
/*! exports provided: default, Primary, Secondary, Outline */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Primary", function() { return Primary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Secondary", function() { return Secondary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Outline", function() { return Outline; });
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ButtonLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonLink */ "./components/molecules/button-link/ButtonLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ = "\n    \n    // @ts-nocheck\n    // @ts-ignore\n    var __STORY__ = \"import React from \\\"react\\\";\\r\\nimport ButtonLink from \\\"./ButtonLink\\\";\\r\\n\\r\\n// Button Styles\\r\\nconst button_styles_options = {\\r\\n    primary: \\\"primary\\\",\\r\\n    secondary: \\\"secondary\\\",\\r\\n    Link: \\\"link\\\",\\r\\n    danger: \\\"danger\\\",\\r\\n    warning: \\\"warning\\\",\\r\\n    info: \\\"info\\\",\\r\\n    light: \\\"light\\\",\\r\\n    dark: \\\"dark\\\",\\r\\n    white: \\\"white\\\"\\r\\n};\\r\\n\\r\\n//Button Types\\r\\nconst button_type_options = {\\r\\n    default: \\\"\\\",\\r\\n    line: \\\"line\\\"\\r\\n};\\r\\n\\r\\n// Button Width\\r\\nconst button_width_options = {\\r\\n    natural: \\\"\\\",\\r\\n    \\\"Half Width\\\": \\\"w-50\\\",\\r\\n    \\\"Full Width\\\": \\\"w-100\\\",\\r\\n};\\r\\n\\r\\n// buttonlink_target\\r\\nconst buttonlink_target_options = {\\r\\n    self: \\\"_self\\\",\\r\\n    blank: \\\"_blank\\\",\\r\\n};\\r\\n\\r\\n// button text color\\r\\nconst button_text_options = {\\r\\n    \\\"text-white\\\": \\\"text-white\\\",\\r\\n    \\\"text-warning\\\": \\\"text-warning\\\",\\r\\n    \\\"text-info\\\": \\\"text-info\\\",\\r\\n    \\\"text-danger\\\": \\\"text-danger\\\",\\r\\n    \\\"text-light\\\": \\\"text-light\\\",\\r\\n    \\\"text-dark\\\": \\\"text-dark\\\",\\r\\n};\\r\\n\\r\\nexport default {\\r\\n    title: \\\"Molecules/ButtonLink\\\",\\r\\n    component: ButtonLink,\\r\\n    argTypes: {\\r\\n        button_styles: {\\r\\n            name: \\\"Button Styles\\\",\\r\\n            control: { type: \\\"select\\\", options: button_styles_options },\\r\\n        },\\r\\n        button_type: {\\r\\n            name: \\\"Button Type\\\",\\r\\n            control: { type: \\\"select\\\", options: button_type_options },\\r\\n        },\\r\\n        button_textColor: {\\r\\n            name: \\\"Button Text Color\\\",\\r\\n            control: { type: \\\"select\\\", options: button_text_options },\\r\\n        },\\r\\n        button_width: {\\r\\n            name: \\\"Button Width\\\",\\r\\n            defaultValue: \\\"\\\",\\r\\n            control: {\\r\\n                type: \\\"inline-radio\\\",\\r\\n                options: button_width_options,\\r\\n            },\\r\\n        },\\r\\n        buttonlink_href: {\\r\\n            name: \\\"Button href\\\",\\r\\n            defaultValue: \\\"#\\\",\\r\\n            control: {\\r\\n                type: \\\"text\\\",\\r\\n            },\\r\\n        },\\r\\n        buttonlink_target: {\\r\\n            name: \\\"Button Target\\\",\\r\\n            defaultValue: \\\"_self\\\",\\r\\n            control: {\\r\\n                type: \\\"inline-radio\\\",\\r\\n                options: buttonlink_target_options,\\r\\n            },\\r\\n        },\\r\\n        btn_text: {\\r\\n            name: \\\"Button Text\\\",\\r\\n        },\\r\\n        buttonlink_title: {\\r\\n            name: \\\"Button Title\\\",\\r\\n        },\\r\\n    },\\r\\n};\\r\\n\\r\\n// start\\r\\nconst Template = (args) => <ButtonLink {...args} />;\\r\\n\\r\\nexport const Primary = Template.bind({});\\r\\nPrimary.args = {\\r\\n    btn_text: \\\"this is button\\\",\\r\\n    button_styles: \\\"primary\\\",\\r\\n};\\r\\n\\r\\nexport const Secondary = Template.bind({});\\r\\nSecondary.args = {\\r\\n    btn_text: \\\"this is button\\\",\\r\\n    button_styles: \\\"secondary\\\",\\r\\n};\\r\\nexport const Outline = Template.bind({});\\r\\nOutline.args = {\\r\\n    btn_text: \\\"this is button\\\",\\r\\n    button_styles: \\\"outline-primary\\\",\\r\\n};\\r\\n\\r\\n\";\n    // @ts-ignore\n    var __LOCATIONS_MAP__ = {\"Primary\":{\"startLoc\":{\"col\":17,\"line\":95},\"endLoc\":{\"col\":51,\"line\":95},\"startBody\":{\"col\":17,\"line\":95},\"endBody\":{\"col\":51,\"line\":95}},\"Secondary\":{\"startLoc\":{\"col\":17,\"line\":95},\"endLoc\":{\"col\":51,\"line\":95},\"startBody\":{\"col\":17,\"line\":95},\"endBody\":{\"col\":51,\"line\":95}},\"Outline\":{\"startLoc\":{\"col\":17,\"line\":95},\"endLoc\":{\"col\":51,\"line\":95},\"startBody\":{\"col\":17,\"line\":95},\"endBody\":{\"col\":51,\"line\":95}}};\n    \nimport React from \"react\";\r\nimport ButtonLink from \"./ButtonLink\";\r\n\r\n// Button Styles\r\nconst button_styles_options = {\r\n    primary: \"primary\",\r\n    secondary: \"secondary\",\r\n    Link: \"link\",\r\n    danger: \"danger\",\r\n    warning: \"warning\",\r\n    info: \"info\",\r\n    light: \"light\",\r\n    dark: \"dark\",\r\n    white: \"white\"\r\n};\r\n\r\n//Button Types\r\nconst button_type_options = {\r\n    default: \"\",\r\n    line: \"line\"\r\n};\r\n\r\n// Button Width\r\nconst button_width_options = {\r\n    natural: \"\",\r\n    \"Half Width\": \"w-50\",\r\n    \"Full Width\": \"w-100\",\r\n};\r\n\r\n// buttonlink_target\r\nconst buttonlink_target_options = {\r\n    self: \"_self\",\r\n    blank: \"_blank\",\r\n};\r\n\r\n// button text color\r\nconst button_text_options = {\r\n    \"text-white\": \"text-white\",\r\n    \"text-warning\": \"text-warning\",\r\n    \"text-info\": \"text-info\",\r\n    \"text-danger\": \"text-danger\",\r\n    \"text-light\": \"text-light\",\r\n    \"text-dark\": \"text-dark\",\r\n};\r\n\r\nexport default {parameters: {\"storySource\":{\"source\":\"import React from \\\"react\\\";\\r\\nimport ButtonLink from \\\"./ButtonLink\\\";\\r\\n\\r\\n// Button Styles\\r\\nconst button_styles_options = {\\r\\n    primary: \\\"primary\\\",\\r\\n    secondary: \\\"secondary\\\",\\r\\n    Link: \\\"link\\\",\\r\\n    danger: \\\"danger\\\",\\r\\n    warning: \\\"warning\\\",\\r\\n    info: \\\"info\\\",\\r\\n    light: \\\"light\\\",\\r\\n    dark: \\\"dark\\\",\\r\\n    white: \\\"white\\\"\\r\\n};\\r\\n\\r\\n//Button Types\\r\\nconst button_type_options = {\\r\\n    default: \\\"\\\",\\r\\n    line: \\\"line\\\"\\r\\n};\\r\\n\\r\\n// Button Width\\r\\nconst button_width_options = {\\r\\n    natural: \\\"\\\",\\r\\n    \\\"Half Width\\\": \\\"w-50\\\",\\r\\n    \\\"Full Width\\\": \\\"w-100\\\",\\r\\n};\\r\\n\\r\\n// buttonlink_target\\r\\nconst buttonlink_target_options = {\\r\\n    self: \\\"_self\\\",\\r\\n    blank: \\\"_blank\\\",\\r\\n};\\r\\n\\r\\n// button text color\\r\\nconst button_text_options = {\\r\\n    \\\"text-white\\\": \\\"text-white\\\",\\r\\n    \\\"text-warning\\\": \\\"text-warning\\\",\\r\\n    \\\"text-info\\\": \\\"text-info\\\",\\r\\n    \\\"text-danger\\\": \\\"text-danger\\\",\\r\\n    \\\"text-light\\\": \\\"text-light\\\",\\r\\n    \\\"text-dark\\\": \\\"text-dark\\\",\\r\\n};\\r\\n\\r\\nexport default {\\r\\n    title: \\\"Molecules/ButtonLink\\\",\\r\\n    component: ButtonLink,\\r\\n    argTypes: {\\r\\n        button_styles: {\\r\\n            name: \\\"Button Styles\\\",\\r\\n            control: { type: \\\"select\\\", options: button_styles_options },\\r\\n        },\\r\\n        button_type: {\\r\\n            name: \\\"Button Type\\\",\\r\\n            control: { type: \\\"select\\\", options: button_type_options },\\r\\n        },\\r\\n        button_textColor: {\\r\\n            name: \\\"Button Text Color\\\",\\r\\n            control: { type: \\\"select\\\", options: button_text_options },\\r\\n        },\\r\\n        button_width: {\\r\\n            name: \\\"Button Width\\\",\\r\\n            defaultValue: \\\"\\\",\\r\\n            control: {\\r\\n                type: \\\"inline-radio\\\",\\r\\n                options: button_width_options,\\r\\n            },\\r\\n        },\\r\\n        buttonlink_href: {\\r\\n            name: \\\"Button href\\\",\\r\\n            defaultValue: \\\"#\\\",\\r\\n            control: {\\r\\n                type: \\\"text\\\",\\r\\n            },\\r\\n        },\\r\\n        buttonlink_target: {\\r\\n            name: \\\"Button Target\\\",\\r\\n            defaultValue: \\\"_self\\\",\\r\\n            control: {\\r\\n                type: \\\"inline-radio\\\",\\r\\n                options: buttonlink_target_options,\\r\\n            },\\r\\n        },\\r\\n        btn_text: {\\r\\n            name: \\\"Button Text\\\",\\r\\n        },\\r\\n        buttonlink_title: {\\r\\n            name: \\\"Button Title\\\",\\r\\n        },\\r\\n    },\\r\\n};\\r\\n\\r\\n// start\\r\\nconst Template = (args) => <ButtonLink {...args} />;\\r\\n\\r\\nexport const Primary = Template.bind({});\\r\\nPrimary.args = {\\r\\n    btn_text: \\\"this is button\\\",\\r\\n    button_styles: \\\"primary\\\",\\r\\n};\\r\\n\\r\\nexport const Secondary = Template.bind({});\\r\\nSecondary.args = {\\r\\n    btn_text: \\\"this is button\\\",\\r\\n    button_styles: \\\"secondary\\\",\\r\\n};\\r\\nexport const Outline = Template.bind({});\\r\\nOutline.args = {\\r\\n    btn_text: \\\"this is button\\\",\\r\\n    button_styles: \\\"outline-primary\\\",\\r\\n};\\r\\n\\r\\n\",\"locationsMap\":{\"primary\":{\"startLoc\":{\"col\":17,\"line\":95},\"endLoc\":{\"col\":51,\"line\":95},\"startBody\":{\"col\":17,\"line\":95},\"endBody\":{\"col\":51,\"line\":95}},\"secondary\":{\"startLoc\":{\"col\":17,\"line\":95},\"endLoc\":{\"col\":51,\"line\":95},\"startBody\":{\"col\":17,\"line\":95},\"endBody\":{\"col\":51,\"line\":95}},\"outline\":{\"startLoc\":{\"col\":17,\"line\":95},\"endLoc\":{\"col\":51,\"line\":95},\"startBody\":{\"col\":17,\"line\":95},\"endBody\":{\"col\":51,\"line\":95}}}},},\r\n    title: \"Molecules/ButtonLink\",\r\n    component: ButtonLink,\r\n    argTypes: {\r\n        button_styles: {\r\n            name: \"Button Styles\",\r\n            control: { type: \"select\", options: button_styles_options },\r\n        },\r\n        button_type: {\r\n            name: \"Button Type\",\r\n            control: { type: \"select\", options: button_type_options },\r\n        },\r\n        button_textColor: {\r\n            name: \"Button Text Color\",\r\n            control: { type: \"select\", options: button_text_options },\r\n        },\r\n        button_width: {\r\n            name: \"Button Width\",\r\n            defaultValue: \"\",\r\n            control: {\r\n                type: \"inline-radio\",\r\n                options: button_width_options,\r\n            },\r\n        },\r\n        buttonlink_href: {\r\n            name: \"Button href\",\r\n            defaultValue: \"#\",\r\n            control: {\r\n                type: \"text\",\r\n            },\r\n        },\r\n        buttonlink_target: {\r\n            name: \"Button Target\",\r\n            defaultValue: \"_self\",\r\n            control: {\r\n                type: \"inline-radio\",\r\n                options: buttonlink_target_options,\r\n            },\r\n        },\r\n        btn_text: {\r\n            name: \"Button Text\",\r\n        },\r\n        buttonlink_title: {\r\n            name: \"Button Title\",\r\n        },\r\n    },\r\n};\r\n\r\n// start\r\nconst Template = (args) => <ButtonLink {...args} />;\r\n\r\nexport const Primary = Template.bind({});;\r\nPrimary.args = {\r\n    btn_text: \"this is button\",\r\n    button_styles: \"primary\",\r\n};\r\n\r\nexport const Secondary = Template.bind({});;\r\nSecondary.args = {\r\n    btn_text: \"this is button\",\r\n    button_styles: \"secondary\",\r\n};\r\nexport const Outline = Template.bind({});\r\nOutline.args = {\r\n    btn_text: \"this is button\",\r\n    button_styles: \"outline-primary\",\r\n};\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "Primary": {
    "startLoc": {
      "col": 17,
      "line": 103
    },
    "endLoc": {
      "col": 51,
      "line": 103
    },
    "startBody": {
      "col": 17,
      "line": 103
    },
    "endBody": {
      "col": 51,
      "line": 103
    }
  },
  "Secondary": {
    "startLoc": {
      "col": 17,
      "line": 103
    },
    "endLoc": {
      "col": 51,
      "line": 103
    },
    "startBody": {
      "col": 17,
      "line": 103
    },
    "endBody": {
      "col": 51,
      "line": 103
    }
  },
  "Outline": {
    "startLoc": {
      "col": 17,
      "line": 103
    },
    "endLoc": {
      "col": 51,
      "line": 103
    },
    "startBody": {
      "col": 17,
      "line": 103
    },
    "endBody": {
      "col": 51,
      "line": 103
    }
  }
};
/* eslint-disable */
// @ts-nocheck
// @ts-ignore

var __STORY__ = "import React from \"react\";\r\nimport ButtonLink from \"./ButtonLink\";\r\n\r\n// Button Styles\r\nconst button_styles_options = {\r\n    primary: \"primary\",\r\n    secondary: \"secondary\",\r\n    Link: \"link\",\r\n    danger: \"danger\",\r\n    warning: \"warning\",\r\n    info: \"info\",\r\n    light: \"light\",\r\n    dark: \"dark\",\r\n    white: \"white\"\r\n};\r\n\r\n//Button Types\r\nconst button_type_options = {\r\n    default: \"\",\r\n    line: \"line\"\r\n};\r\n\r\n// Button Width\r\nconst button_width_options = {\r\n    natural: \"\",\r\n    \"Half Width\": \"w-50\",\r\n    \"Full Width\": \"w-100\",\r\n};\r\n\r\n// buttonlink_target\r\nconst buttonlink_target_options = {\r\n    self: \"_self\",\r\n    blank: \"_blank\",\r\n};\r\n\r\n// button text color\r\nconst button_text_options = {\r\n    \"text-white\": \"text-white\",\r\n    \"text-warning\": \"text-warning\",\r\n    \"text-info\": \"text-info\",\r\n    \"text-danger\": \"text-danger\",\r\n    \"text-light\": \"text-light\",\r\n    \"text-dark\": \"text-dark\",\r\n};\r\n\r\nexport default {\r\n    title: \"Molecules/ButtonLink\",\r\n    component: ButtonLink,\r\n    argTypes: {\r\n        button_styles: {\r\n            name: \"Button Styles\",\r\n            control: { type: \"select\", options: button_styles_options },\r\n        },\r\n        button_type: {\r\n            name: \"Button Type\",\r\n            control: { type: \"select\", options: button_type_options },\r\n        },\r\n        button_textColor: {\r\n            name: \"Button Text Color\",\r\n            control: { type: \"select\", options: button_text_options },\r\n        },\r\n        button_width: {\r\n            name: \"Button Width\",\r\n            defaultValue: \"\",\r\n            control: {\r\n                type: \"inline-radio\",\r\n                options: button_width_options,\r\n            },\r\n        },\r\n        buttonlink_href: {\r\n            name: \"Button href\",\r\n            defaultValue: \"#\",\r\n            control: {\r\n                type: \"text\",\r\n            },\r\n        },\r\n        buttonlink_target: {\r\n            name: \"Button Target\",\r\n            defaultValue: \"_self\",\r\n            control: {\r\n                type: \"inline-radio\",\r\n                options: buttonlink_target_options,\r\n            },\r\n        },\r\n        btn_text: {\r\n            name: \"Button Text\",\r\n        },\r\n        buttonlink_title: {\r\n            name: \"Button Title\",\r\n        },\r\n    },\r\n};\r\n\r\n// start\r\nconst Template = (args) => <ButtonLink {...args} />;\r\n\r\nexport const Primary = Template.bind({});\r\nPrimary.args = {\r\n    btn_text: \"this is button\",\r\n    button_styles: \"primary\",\r\n};\r\n\r\nexport const Secondary = Template.bind({});\r\nSecondary.args = {\r\n    btn_text: \"this is button\",\r\n    button_styles: \"secondary\",\r\n};\r\nexport const Outline = Template.bind({});\r\nOutline.args = {\r\n    btn_text: \"this is button\",\r\n    button_styles: \"outline-primary\",\r\n};\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "Primary": {
    "startLoc": {
      "col": 17,
      "line": 95
    },
    "endLoc": {
      "col": 51,
      "line": 95
    },
    "startBody": {
      "col": 17,
      "line": 95
    },
    "endBody": {
      "col": 51,
      "line": 95
    }
  },
  "Secondary": {
    "startLoc": {
      "col": 17,
      "line": 95
    },
    "endLoc": {
      "col": 51,
      "line": 95
    },
    "startBody": {
      "col": 17,
      "line": 95
    },
    "endBody": {
      "col": 51,
      "line": 95
    }
  },
  "Outline": {
    "startLoc": {
      "col": 17,
      "line": 95
    },
    "endLoc": {
      "col": 51,
      "line": 95
    },
    "startBody": {
      "col": 17,
      "line": 95
    },
    "endBody": {
      "col": 51,
      "line": 95
    }
  }
};

 // Button Styles


var button_styles_options = {
  primary: "primary",
  secondary: "secondary",
  Link: "link",
  danger: "danger",
  warning: "warning",
  info: "info",
  light: "light",
  dark: "dark",
  white: "white"
}; //Button Types

var button_type_options = {
  default: "",
  line: "line"
}; // Button Width

var button_width_options = {
  natural: "",
  "Half Width": "w-50",
  "Full Width": "w-100"
}; // buttonlink_target

var buttonlink_target_options = {
  self: "_self",
  blank: "_blank"
}; // button text color

var button_text_options = {
  "text-white": "text-white",
  "text-warning": "text-warning",
  "text-info": "text-info",
  "text-danger": "text-danger",
  "text-light": "text-light",
  "text-dark": "text-dark"
};
/* harmony default export */ __webpack_exports__["default"] = ({
  parameters: {
    "storySource": {
      "source": "import React from \"react\";\r\nimport ButtonLink from \"./ButtonLink\";\r\n\r\n// Button Styles\r\nconst button_styles_options = {\r\n    primary: \"primary\",\r\n    secondary: \"secondary\",\r\n    Link: \"link\",\r\n    danger: \"danger\",\r\n    warning: \"warning\",\r\n    info: \"info\",\r\n    light: \"light\",\r\n    dark: \"dark\",\r\n    white: \"white\"\r\n};\r\n\r\n//Button Types\r\nconst button_type_options = {\r\n    default: \"\",\r\n    line: \"line\"\r\n};\r\n\r\n// Button Width\r\nconst button_width_options = {\r\n    natural: \"\",\r\n    \"Half Width\": \"w-50\",\r\n    \"Full Width\": \"w-100\",\r\n};\r\n\r\n// buttonlink_target\r\nconst buttonlink_target_options = {\r\n    self: \"_self\",\r\n    blank: \"_blank\",\r\n};\r\n\r\n// button text color\r\nconst button_text_options = {\r\n    \"text-white\": \"text-white\",\r\n    \"text-warning\": \"text-warning\",\r\n    \"text-info\": \"text-info\",\r\n    \"text-danger\": \"text-danger\",\r\n    \"text-light\": \"text-light\",\r\n    \"text-dark\": \"text-dark\",\r\n};\r\n\r\nexport default {\r\n    title: \"Molecules/ButtonLink\",\r\n    component: ButtonLink,\r\n    argTypes: {\r\n        button_styles: {\r\n            name: \"Button Styles\",\r\n            control: { type: \"select\", options: button_styles_options },\r\n        },\r\n        button_type: {\r\n            name: \"Button Type\",\r\n            control: { type: \"select\", options: button_type_options },\r\n        },\r\n        button_textColor: {\r\n            name: \"Button Text Color\",\r\n            control: { type: \"select\", options: button_text_options },\r\n        },\r\n        button_width: {\r\n            name: \"Button Width\",\r\n            defaultValue: \"\",\r\n            control: {\r\n                type: \"inline-radio\",\r\n                options: button_width_options,\r\n            },\r\n        },\r\n        buttonlink_href: {\r\n            name: \"Button href\",\r\n            defaultValue: \"#\",\r\n            control: {\r\n                type: \"text\",\r\n            },\r\n        },\r\n        buttonlink_target: {\r\n            name: \"Button Target\",\r\n            defaultValue: \"_self\",\r\n            control: {\r\n                type: \"inline-radio\",\r\n                options: buttonlink_target_options,\r\n            },\r\n        },\r\n        btn_text: {\r\n            name: \"Button Text\",\r\n        },\r\n        buttonlink_title: {\r\n            name: \"Button Title\",\r\n        },\r\n    },\r\n};\r\n\r\n// start\r\nconst Template = (args) => <ButtonLink {...args} />;\r\n\r\nexport const Primary = Template.bind({});\r\nPrimary.args = {\r\n    btn_text: \"this is button\",\r\n    button_styles: \"primary\",\r\n};\r\n\r\nexport const Secondary = Template.bind({});\r\nSecondary.args = {\r\n    btn_text: \"this is button\",\r\n    button_styles: \"secondary\",\r\n};\r\nexport const Outline = Template.bind({});\r\nOutline.args = {\r\n    btn_text: \"this is button\",\r\n    button_styles: \"outline-primary\",\r\n};\r\n\r\n",
      "locationsMap": {
        "primary": {
          "startLoc": {
            "col": 17,
            "line": 95
          },
          "endLoc": {
            "col": 51,
            "line": 95
          },
          "startBody": {
            "col": 17,
            "line": 95
          },
          "endBody": {
            "col": 51,
            "line": 95
          }
        },
        "secondary": {
          "startLoc": {
            "col": 17,
            "line": 95
          },
          "endLoc": {
            "col": 51,
            "line": 95
          },
          "startBody": {
            "col": 17,
            "line": 95
          },
          "endBody": {
            "col": 51,
            "line": 95
          }
        },
        "outline": {
          "startLoc": {
            "col": 17,
            "line": 95
          },
          "endLoc": {
            "col": 51,
            "line": 95
          },
          "startBody": {
            "col": 17,
            "line": 95
          },
          "endBody": {
            "col": 51,
            "line": 95
          }
        }
      }
    }
  },
  title: "Molecules/ButtonLink",
  component: _ButtonLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  argTypes: {
    button_styles: {
      name: "Button Styles",
      control: {
        type: "select",
        options: button_styles_options
      }
    },
    button_type: {
      name: "Button Type",
      control: {
        type: "select",
        options: button_type_options
      }
    },
    button_textColor: {
      name: "Button Text Color",
      control: {
        type: "select",
        options: button_text_options
      }
    },
    button_width: {
      name: "Button Width",
      defaultValue: "",
      control: {
        type: "inline-radio",
        options: button_width_options
      }
    },
    buttonlink_href: {
      name: "Button href",
      defaultValue: "#",
      control: {
        type: "text"
      }
    },
    buttonlink_target: {
      name: "Button Target",
      defaultValue: "_self",
      control: {
        type: "inline-radio",
        options: buttonlink_target_options
      }
    },
    btn_text: {
      name: "Button Text"
    },
    buttonlink_title: {
      name: "Button Title"
    }
  }
}); // start

var Template = function Template(args) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_ButtonLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({}, args));
};

Template.displayName = "Template";
var Primary = Template.bind({});
;
;
Primary.args = {
  btn_text: "this is button",
  button_styles: "primary"
};
var Secondary = Template.bind({});
;
;
Secondary.args = {
  btn_text: "this is button",
  button_styles: "secondary"
};
var Outline = Template.bind({});
Outline.args = {
  btn_text: "this is button",
  button_styles: "outline-primary"
};
Primary.parameters = Object.assign({
  storySource: {
    source: "(args) => <ButtonLink {...args} />"
  }
}, Primary.parameters);
Secondary.parameters = Object.assign({
  storySource: {
    source: "(args) => <ButtonLink {...args} />"
  }
}, Secondary.parameters);
Outline.parameters = Object.assign({
  storySource: {
    source: "(args) => <ButtonLink {...args} />"
  }
}, Outline.parameters);

/***/ }),

/***/ "./components/molecules/button-link/ButtonLink.js":
/*!********************************************************!*\
  !*** ./components/molecules/button-link/ButtonLink.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



var ButtonLink = function ButtonLink(props) {
  var modalTarget = props.modalTarget,
      enableModal = props.enableModal,
      buttonlink_target = props.buttonlink_target,
      button_type = props.button_type,
      buttonlink_href = props.buttonlink_href,
      buttonlink_title = props.buttonlink_title,
      button_styles = props.button_styles,
      button_textColor = props.button_textColor,
      button_width = props.button_width;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "button-link section",
    children: // check is not modal enable then return first otherwise second
    !enableModal ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
      className: "btn " + (button_styles ? "btn-" + button_styles : "") + " " + (button_textColor || "") + "  " + (button_width || ""),
      "data-type": button_type || "",
      href: buttonlink_href || "",
      target: buttonlink_target || "",
      title: buttonlink_title || "",
      role: "button",
      children: button_type === "line" ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
        children: props.btn_text || ""
      }) : button_type === "arrowRight" ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
          stroke: "#050D1F",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M.75 12h22.5M12.75 22.5L23.25 12 12.75 1.5"
        })
      }) : button_type === "arrowLeft" ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
          stroke: "#050D1F",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M.75 12h22.5M12.75 22.5L23.25 12 12.75 1.5",
          style: {
            transform: "rotate(180deg)",
            transformOrigin: "unset"
          }
        })
      }) : props.btn_text || ""
    }) :
    /*#__PURE__*/
    // when modal enable just replace target to data-toggle and data-target poperty
    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
      className: "btn " + (button_styles ? "btn-" + button_styles : "") + " " + (button_textColor || "") + "  " + (button_width || ""),
      "data-type": button_type || "",
      href: modalTarget ? "#" + modalTarget : "",
      title: buttonlink_title || "",
      role: "button",
      "data-toggle": "modal",
      "data-target": modalTarget ? "#" + modalTarget : "",
      children: button_type == "line" ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
        children: props.btn_text || ""
      }) : props.btn_text || ""
    })
  });
};

ButtonLink.displayName = "ButtonLink";
ButtonLink.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ButtonLink"
};
/* harmony default export */ __webpack_exports__["a"] = (ButtonLink);

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["components\\molecules\\button-link\\ButtonLink.js"] = {
    name: "ButtonLink",
    docgenInfo: ButtonLink.__docgenInfo,
    path: "components\\molecules\\button-link\\ButtonLink.js"
  };
}

/***/ }),

/***/ "./components/molecules/headline-text/2.HeadlineText.stories.js":
/*!**********************************************************************!*\
  !*** ./components/molecules/headline-text/2.HeadlineText.stories.js ***!
  \**********************************************************************/
/*! exports provided: default, HeadlineWithText, List, HeadlineTextLine */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadlineWithText", function() { return HeadlineWithText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadlineTextLine", function() { return HeadlineTextLine; });
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HeadlineText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeadlineText */ "./components/molecules/headline-text/HeadlineText.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ = "\n    \n    // @ts-nocheck\n    // @ts-ignore\n    var __STORY__ = \"import React from 'react';\\r\\nimport HeadlineText from './HeadlineText';\\r\\n\\r\\n\\r\\nconst gapObject = {\\r\\n    \\\"Default\\\": '',\\r\\n    \\\"No Gap\\\": 'mb-0'\\r\\n}\\r\\n\\r\\nexport default {\\r\\n    title: 'Molecules/Headline Text',\\r\\n    component: HeadlineText,\\r\\n    argTypes: {\\r\\n        orientation: {\\r\\n            control: { type: \\\"inline-check\\\", options: [\\\"orientation-right\\\"] }\\r\\n        },\\r\\n        gap: {\\r\\n            control: { type: \\\"select\\\", options: gapObject }\\r\\n        },\\r\\n    }\\r\\n};\\r\\n\\r\\n// start\\r\\nconst Template = (args) => <HeadlineText {...args} >\\r\\n    <h5>H1:</h5>\\r\\n    <h1> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. <sup>lorem</sup><sub>ipsum</sub></h1>\\r\\n\\r\\n    <h5>H2:</h5>\\r\\n    <h2> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit <sup>lorem</sup><sub>ipsum</sub></h2>\\r\\n\\r\\n    <h5>H3:</h5>\\r\\n    <h3>H3: Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione  <sup>lorem</sup><sub>ipsum</sub></h3>\\r\\n\\r\\n    <h5>H3:</h5>\\r\\n    <h4> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque <sup>lorem</sup><sub>ipsum</sub></h4>\\r\\n\\r\\n    <h5>H5:</h5>\\r\\n    <h5> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\\r\\n        reprehenderit repudiandae vitae. <sup>lorem</sup><sub>ipsum</sub></h5>\\r\\n\\r\\n    <h5>H6:</h5>\\r\\n    <h6> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\\r\\n        reprehenderit repudiandae vitae. <sup>lorem</sup><sub>ipsum</sub></h6>\\r\\n\\r\\n    <h5>p:</h5>\\r\\n    <p> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\\r\\n        reprehenderit repudiandae vitae. <sup>lorem</sup><sub>ipsum</sub></p>\\r\\n\\r\\n    <h5>a:</h5>\\r\\n    <a href='.'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cum eos expedita fugit libero\\r\\n        maiores nam, neque nostrum, pariatur quis sit voluptatem. Accusantium ad dicta est maiores quae.</a>\\r\\n\\r\\n    <h5>Highlight : mark tag</h5>\\r\\n    <p>You can use the mark tag to <mark>highlight</mark> text.</p>\\r\\n\\r\\n    <h5>Deleted part: del tag</h5>\\r\\n    <p><del>This line of text is meant to be treated as deleted text.</del></p>\\r\\n\\r\\n    <h5>Mark up text that is no longer correct: s tag</h5>\\r\\n    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\\r\\n\\r\\n    <h5>A text with  a new, inserted part: ins tag</h5>\\r\\n    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\\r\\n\\r\\n    <h5>Mark up a misspelled word with the u tag:</h5>\\r\\n    <p><u>This line of text will render as underlined</u></p>\\r\\n\\r\\n    <h5>Define a smaller text:</h5>\\r\\n    <p><small>This line of text is meant to be treated as fine print.</small></p>\\r\\n\\r\\n    <h5>Define important text in a document:</h5>\\r\\n    <p><strong>This line rendered as bold text.</strong></p>\\r\\n\\r\\n    <h5>Mark up emphasized text in a document:</h5>\\r\\n    <p><em>This line rendered as italicized text.</em></p>\\r\\n\\r\\n    <h5>Superscript text:</h5>\\r\\n    <p>This text contains <sup>superscript</sup> text.</p>\\r\\n\\r\\n    <h5>Subscript text:</h5>\\r\\n    <p>This text contains <sub>subscript</sub> text.</p>\\r\\n</HeadlineText>;\\r\\n\\r\\nexport const HeadlineWithText = Template.bind({});\\r\\nHeadlineWithText.args = {\\r\\n    customClass: \\\"\\\",\\r\\n}\\r\\n\\r\\n// start\\r\\nconst Template2 = (args) => <HeadlineText {...args} >\\r\\n    <p><b>Unordered List: </b></p>\\r\\n    <ul>\\r\\n        <li>one</li>\\r\\n        <li>two</li>\\r\\n        <li>three\\r\\n            <ul>\\r\\n                <li>four</li>\\r\\n                <li>five</li>\\r\\n                <li>six\\r\\n                    <ul>\\r\\n                        <li>seven</li>\\r\\n                        <li>eight</li>\\r\\n                        <li>nine\\r\\n                            <ul>\\r\\n                                <li>ten</li>\\r\\n                                <li>eleven</li>\\r\\n                                <li>twelve</li>\\r\\n                            </ul>\\r\\n                        </li>\\r\\n                        <li>thirteen</li>\\r\\n                    </ul>\\r\\n                </li>\\r\\n                <li>fourteen</li>\\r\\n            </ul>\\r\\n        </li>\\r\\n        <li>fifteen</li>\\r\\n        <li>sixteen</li>\\r\\n    </ul>\\r\\n\\r\\n    <p><b>Ordered List: </b></p>\\r\\n    <ol>\\r\\n        <li>one</li>\\r\\n        <li>two</li>\\r\\n        <li>three\\r\\n            <ol>\\r\\n                <li>four</li>\\r\\n                <li>five</li>\\r\\n                <li>six\\r\\n                    <ol>\\r\\n                        <li>seven</li>\\r\\n                        <li>eight</li>\\r\\n                        <li>nine\\r\\n                            <ol>\\r\\n                                <li>ten</li>\\r\\n                                <li>eleven</li>\\r\\n                                <li>twelve</li>\\r\\n                            </ol>\\r\\n                        </li>\\r\\n                        <li>thirteen</li>\\r\\n                    </ol>\\r\\n                </li>\\r\\n                <li>fourteen</li>\\r\\n            </ol>\\r\\n        </li>\\r\\n        <li>fifteen</li>\\r\\n        <li>sixteen</li>\\r\\n    </ol>\\r\\n</HeadlineText>;\\r\\n\\r\\nexport const List = Template2.bind({});\\r\\n\\r\\n\\r\\n\\r\\n// Start\\r\\nconst Template4 = (args) => <HeadlineText {...args} >\\r\\n    <blockquote cite=\\\"http://www.worldwildlife.org/who/index.html\\\">\\r\\n        For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.\\r\\n    </blockquote>\\r\\n    <p>Current AEM RTE implementation: <a href=\\\"#\\\"> Lorem ipsum dolor</a></p>\\r\\n    <p><b>I am RTE - Bold</b></p>\\r\\n    <p><i>I am RTE - Italic</i></p>\\r\\n    <p><u>I am RTE - Underline</u></p>\\r\\n    <p style={{ textAlign: \\\"left\\\" }}>I am RTE - Align Text Left <a href=\\\"#\\\"> Lorem ipsum dolor 11111111111111</a></p>\\r\\n    <p style={{ textAlign: \\\"center\\\" }}>I am RTE - Center Text</p>\\r\\n    <p style={{ textAlign: \\\"right\\\" }}>I am RTE - Align Text Right</p>\\r\\n    <p style={{ textAlign: \\\"left\\\" }}><a title=\\\"Alt Text\\\"\\r\\n        href=\\\"http://localhost:4502/editor.html/content/abbvie-haematologie/de/components/atoms/a0110-text.html#\\\">I am RTE - Hyperlink</a></p>\\r\\n    <p style={{ textAlign: \\\"left\\\" }}>I am RTE - Anchor</p>\\r\\n    <p style={{ textAlign: \\\"left\\\" }}>I am RTE<sup>Superscript</sup></p>\\r\\n    <p style={{ textAlign: \\\"left\\\" }}>I am RTE<sub>subscript</sub></p>\\r\\n    <p style={{ textAlign: \\\"left\\\" }}>I am RTE - Paragraph</p>\\r\\n    <h1>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 1<sup>4</sup>  <a href=\\\"#\\\"> Lorem ipsum dolor 11111111111111</a></h1>\\r\\n    <h2>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 2<sup>4</sup></h2>\\r\\n    <h3>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 3<sup>4</sup></h3>\\r\\n    <h4>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 4<sup>4</sup></h4>\\r\\n    <p>RTE List Bullet:</p>\\r\\n    <ul>\\r\\n        <li><span className=\\\"\\\">I am RTE-A</span></li>\\r\\n        <li>I am RTE-B\\r\\n            <ul>\\r\\n                <li>I am RTE-B1 <a href=\\\"#\\\"> Lorem ipsum dolor 11111111111111</a></li>\\r\\n                <li>I am RTE-B2</li>\\r\\n                <li>I am RTE-B3</li>\\r\\n            </ul>\\r\\n        </li>\\r\\n        <li>I am RTE-C</li>\\r\\n    </ul>\\r\\n    <p>RTE List Number:\\r\\n        <br></br>\\r\\n    </p>\\r\\n    <ol>\\r\\n        <li>I am RTE1</li>\\r\\n        <li>I am RTE2\\r\\n            <ol>\\r\\n                <li>I am RTE2.1</li>\\r\\n                <li>I am RTE2.2</li>\\r\\n                <li>I am RTE2.3</li>\\r\\n            </ol>\\r\\n        </li>\\r\\n        <li>I am RTE3</li>\\r\\n    </ol>\\r\\n\\r\\n    <section className='cmp-text section'>\\r\\n        <h1>A0110 / TEXT</h1>\\r\\n        <h1>Überschrift<sup>h1</sup> (h1) <sup>1, 2, 3, 4</sup></h1>\\r\\n        <h2>Überschrift<sup>h2</sup> (h2) <sup>5, 6, 7</sup></h2>\\r\\n        <h3>Überschrift<sup>h3</sup> (h3) <sup>8, 9</sup></h3>\\r\\n        <h4>Überschrift<sup>h4</sup> (h4) <sup>10</sup></h4>\\r\\n        <p>Copytext. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque, excepturi\\r\\n            exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam. Fugit\\r\\n            ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque,\\r\\n            excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam.\\r\\n            Fugit ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque,\\r\\n            excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam.\\r\\n            Fugit ipsam, vel.</p>\\r\\n        <p>A list:</p>\\r\\n        <ul>\\r\\n            <li>one</li>\\r\\n            <li>two</li>\\r\\n            <li>three\\r\\n                <ul>\\r\\n                    <li>four</li>\\r\\n                    <li>five</li>\\r\\n                    <li>six\\r\\n                        <ul>\\r\\n                            <li>seven</li>\\r\\n                            <li>eight</li>\\r\\n                            <li>nine\\r\\n                                <ul>\\r\\n                                    <li>ten</li>\\r\\n                                    <li>eleven</li>\\r\\n                                    <li>twelve</li>\\r\\n                                </ul>\\r\\n                            </li>\\r\\n                            <li>thirteen</li>\\r\\n                        </ul>\\r\\n                    </li>\\r\\n                    <li>fourteen</li>\\r\\n                </ul>\\r\\n            </li>\\r\\n            <li>fifteen</li>\\r\\n            <li>sixteen</li>\\r\\n        </ul>\\r\\n        <p>An enumeration:</p>\\r\\n        <ol>\\r\\n            <li>one</li>\\r\\n            <li>two</li>\\r\\n            <li>three\\r\\n                <ol>\\r\\n                    <li>four</li>\\r\\n                    <li>five</li>\\r\\n                    <li>six\\r\\n                        <ol>\\r\\n                            <li>seven</li>\\r\\n                            <li>eight</li>\\r\\n                            <li>nine\\r\\n                                <ol>\\r\\n                                    <li>ten</li>\\r\\n                                    <li>eleven</li>\\r\\n                                    <li>twelve</li>\\r\\n                                </ol>\\r\\n                            </li>\\r\\n                            <li>thirteen</li>\\r\\n                        </ol>\\r\\n                    </li>\\r\\n                    <li>fourteen</li>\\r\\n                </ol>\\r\\n            </li>\\r\\n            <li>fifteen</li>\\r\\n            <li>sixteen</li>\\r\\n        </ol>\\r\\n        <p>Checklist</p>\\r\\n        <ul className='checklist'>\\r\\n            <li className='checked'>Checked Lsit Item</li>\\r\\n            <li className='unchecked'>unchecked Lsit Item</li>\\r\\n        </ul>\\r\\n        <h3>h3</h3>\\r\\n        <ul>\\r\\n            <li><a href=\\\"#\\\">Link 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore\\r\\n                doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque\\r\\n                quibusdam totam. Fugit ipsam, vel.</a></li>\\r\\n            <li><a href=\\\"#\\\">Link 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore\\r\\n                doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis.</a></li>\\r\\n            <li><a href=\\\"#\\\">Link 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore\\r\\n                doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque\\r\\n                quibusdam totam. Fugit ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis\\r\\n                dolore doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque\\r\\n                eaque quibusdam totam. Fugit ipsam, vel.</a></li>\\r\\n            <li><a href=\\\"#\\\">Link 4</a></li>\\r\\n            <li><a href=\\\"#\\\">...</a></li>\\r\\n        </ul>\\r\\n        <h2>h2</h2>\\r\\n        <p>Copytext. Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href=\\\"#\\\">Commodi, eligendi error\\r\\n            incidunt ipsam nam natus</a> repellat veritatis voluptate voluptates. Aperiam consequuntur dolores doloribus\\r\\n            ducimus iure, perspiciatis qui ratione repudiandae rerum!</p>\\r\\n        <ul>\\r\\n            <li><i>Lorem ipsum dolor sit amet</i>: consectetur adipisicing elit. Aliquam, aspernatur autem blanditiis enim\\r\\n                eos esse eveniet exercitationem facilis fugit id minus neque optio quam quis quos rerum sunt temporibus totam.\\r\\n            </li>\\r\\n            <li><i>Lorem ipsum dolor sit amet</i>: consectetur adipisicing elit. Amet doloremque eum expedita id nemo omnis\\r\\n                recusandae tempora tempore veniam vitae! Ab deleniti maiores natus non odit reiciendis sint tenetur voluptate.\\r\\n            </li>\\r\\n            <li><i>Lorem ipsum</i>: Dolor sit amet, consectetur adipisicing elit. Amet consectetur consequatur ea earum eius\\r\\n                eveniet laborum laudantium nam, nemo nisi nostrum numquam odit perferendis perspiciatis quo repellat\\r\\n                repudiandae sequi. Nisi?</li>\\r\\n        </ul>\\r\\n        <h2>Kontaktdaten und Richtlinienaktualisierungen</h2>\\r\\n        <h3>Wie kann ich zu AbbVie Kontakt aufnehmen?</h3>\\r\\n        <p>Wenn Sie Fragen zur Nutzung, Änderung oder Löschung der an uns bereitgestellten personenbezogenen Daten haben\\r\\n            oder zukünftige Mitteilungen von AbbVie oder eines bestimmten AbbVie-Programms ablehnen möchten, kontaktieren\\r\\n            Sie uns, indem Sie einen „Kontakt“-Link auf der besuchten Webseite anklicken, oder senden Sie eine E-Mail an <a\\r\\n                href=\\\"mailto:info.de@abbvie.com\\\">info.de(at)abbvie(dot)com</a>. Bezüglich der Verarbeitung Ihrer\\r\\n            personenbezogenen Daten können Sie sich auch direkt mit dem Datenschutzbeauftragten unter <a\\r\\n                href=\\\"mailto:datenschutz.de@abbvie.com\\\">datenschutz.de(at)abbvie(dot)com</a> in Verbindung setzen. Sie können\\r\\n            auch ein Schreiben an folgende Adresse richten oder sich telefonisch mit uns in Verbindung setzen:</p>\\r\\n        <p>\\r\\n            AbbVie Deutschland GmbH & Co. KG<br></br>\\r\\n            Mainzer Straße 81<br></br>\\r\\n            65189 Wiesbaden<br></br>\\r\\n            eMail: <a href=\\\"mailto:info.de@abbvie.com\\\">info.de(at)abbvie(dot)com</a><br></br>\\r\\n            Tel.: +49 (0)611 1720 - 0<br></br>\\r\\n            Fax.: +49 (0)611 1720 1244\\r\\n        </p>\\r\\n        <p>Geben Sie bitte in Ihren Mitteilungen an uns die für die Registrierung verwendete E-Mail-Adresse (sofern\\r\\n            zutreffend), die URL der Webseite oder das AbbVie-Programm, für das Sie personenbezogene Daten eingegeben haben\\r\\n            (z. B. www.AbbVie.de usw.) sowie eine detaillierte Beschreibung Ihres Anliegens an.</p>\\r\\n        <h3>Wie erfahre ich, ob AbbVie diese Datenschutzrichtlinie aktualisiert hat?</h3>\\r\\n        <p>Unbeschadet Ihrer Rechte nach geltendem Gesetz behält sich AbbVie vor, diese Datenschutzrichtlinie zu ändern\\r\\n            und zu versionieren, um technischen Weiterentwicklungen, Gesetzesänderungen und Vorschriften und guten\\r\\n            Geschäftspraktiken zu genügen.</p>\\r\\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem ipsum iste laboriosam qui, quia\\r\\n            repellendus vel! A at ducimus esse illo incidunt nostrum optio quas repudiandae rerum, velit. Tempora.</p>\\r\\n        <h1>h1 Strukturnachbildung</h1>\\r\\n        <h2>h2 Unterüberschrift</h2>\\r\\n        <h3>1. h3</h3>\\r\\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\\r\\n            reprehenderit repudiandae vitae. Aperiam blanditiis distinctio earum ex impedit iure labore natus, nihil\\r\\n            similique ut voluptas.</p>\\r\\n        <h3>2. h3</h3>\\r\\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores cumque deleniti dolorum eveniet\\r\\n            fugiat iure iusto laboriosam magni nam nemo nulla optio provident quasi rem rerum temporibus, velit veritatis.\\r\\n        </p>\\r\\n        <h3>3. h3</h3>\\r\\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cum eos expedita fugit libero\\r\\n            maiores nam, neque nostrum, pariatur quis sit voluptatem. Accusantium ad dicta est maiores quae.</p>\\r\\n        <p>usw.</p>\\r\\n        <h1>Listen</h1>\\r\\n        <h2>ul</h2>\\r\\n        <ul>\\r\\n            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quaerat, repudiandae. Ad in perspiciatis\\r\\n                tempore? Aliquam aliquid consequatur consequuntur est ex, inventore itaque maxime numquam, possimus\\r\\n                praesentium reiciendis, sequi vero.</li>\\r\\n            <li>Aspernatur deleniti, distinctio doloribus eum ex iusto nemo nesciunt quasi qui quisquam repudiandae saepe\\r\\n                voluptatibus. Dignissimos enim, et exercitationem fugit harum molestias necessitatibus nesciunt omnis quo\\r\\n                recusandae sint tenetur totam.</li>\\r\\n            <li>Excepturi ipsum minus odit officia reiciendis, rerum! Architecto deserunt dicta esse ex excepturi fugiat id\\r\\n                magni, nostrum odio optio quaerat recusandae repellat saepe sequi suscipit tempore ut veniam veritatis\\r\\n                voluptas.</li>\\r\\n        </ul>\\r\\n        <h2>ol</h2>\\r\\n        <ol>\\r\\n            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias dignissimos doloremque eius enim esse\\r\\n                illo incidunt, laborum neque nisi, nulla obcaecati officiis pariatur possimus quia quisquam, vitae. Hic,\\r\\n                sapiente?</li>\\r\\n            <li>Aperiam atque, et ex laboriosam praesentium soluta? Ad architecto assumenda consectetur deserunt dolorem\\r\\n                ducimus ea enim excepturi ipsa, minima mollitia neque, officiis quo quod recusandae, repellat tempora? Aperiam\\r\\n                eos, inventore.</li>\\r\\n            <li>Aperiam culpa cum eius neque soluta! Alias aliquam aliquid, architecto culpa doloribus ea eligendi eveniet\\r\\n                excepturi iusto magni maiores pariatur quam quas repellat repellendus saepe tenetur totam ut, veritatis\\r\\n                voluptatem?</li>\\r\\n        </ol>\\r\\n        <br></br>\\r\\n        <h2>Inline Text Elements</h2>\\r\\n        <p>You can use the mark tag to <mark>highlight</mark> text.</p>\\r\\n        <p><del>This line of text is meant to be treated as deleted text.</del></p>\\r\\n        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\\r\\n        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\\r\\n        <p><u>This line of text will render as underlined</u></p>\\r\\n        <p><small>This line of text is meant to be treated as fine print.</small></p>\\r\\n        <p><strong>This line rendered as bold text.</strong></p>\\r\\n        <p><em>This line rendered as italicized text.</em></p>\\r\\n        <br></br>\\r\\n        <h2>Copytext Test</h2>\\r\\n        <p>Copytext. Lorem Impsum. Das ist ein <a href=\\\"#\\\" title=\\\"TITLE\\\">Link im Fließtext</a>. Dieses Wort ist\\r\\n            <em>betont</em> (em). Dieses Wort ist <i>kursiv</i> (i). Dieses Wort ist <strong>stark betont</strong> (strong).\\r\\n            Dieses Wort ist <b>fett</b> (b). Dieses Wort ist <sup>hochgestellt</sup> (sup). Dieses Wort ist\\r\\n            <sub>tiefgestellt</sub> (sub).</p>\\r\\n        <br></br>\\r\\n        <h2>Special Chars Test</h2>\\r\\n        <p><a\\r\\n            href=\\\"http://de.wikipedia.org/wiki/L%C3%B6wen-essender_Dichter_in_der_Steinh%C3%B6hle\\\">http://de.wikipedia.org/wiki/L%C3%B6wen-essender_Dichter_in_der_Steinh%C3%B6hle</a>\\r\\n        </p>\\r\\n        <p>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz, 0123456789<br></br>\\r\\n            1234567890„\\\"@!\\\"\\\"§$ %{\\\"&\\\"}/()=?{[]} \\\\*+~'#{'>'}{\\\"<\\\"}-,;.:éè-äöu »«ß<br></br>\\r\\n            öäüÖÄÜ!\\\"§$%{\\\"&\\\"}/()=?@€,;.:-_+*~#'²³{[]}<br></br>\\r\\n            ®™</p>\\r\\n        <br></br>\\r\\n        <h2>Footnotes (simulation)</h2>\\r\\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dicta eveniet ipsam labore laborum maiores,\\r\\n            nihil officia quisquam quo repellat sit suscipit ullam unde ut veritatis vero. Consequatur,\\r\\n            exercitationem?<sup>42</sup></p>\\r\\n        <p>Nachweis der 17p-Deletion mittels Vysis CLL FISH Sonden Kit.<sup>1,2</sup></p>\\r\\n        <p>† Die mediane Zeit unter Therapie zum Zeitpunkt der Beurteilung betrug 12 Monate (Spannweite: 0 – 22\\r\\n            Monate).<sup>1,2</sup></p>\\r\\n        <p>‡ Die Wirksamkeitsbeurteilung durch den Prüfer wird für 158 Patienten (Expansionskohorte zum Thema Sicherheit)\\r\\n            gezeigt. Die mediane Behandlungsdauer für diese 158 Patienten betrug 17 Monate (Spannweite: 0 – 34\\r\\n            Monate).<sup>1</sup></p>\\r\\n        <p>†, ‡, ♥, ♠, ♣, ♦</p>\\r\\n    </section>\\r\\n</HeadlineText>;\\r\\n\\r\\nexport const HeadlineTextLine = Template4.bind({});\\r\\n\\r\\n\";\n    // @ts-ignore\n    var __LOCATIONS_MAP__ = {\"HeadlineWithText\":{\"startLoc\":{\"col\":17,\"line\":24},\"endLoc\":{\"col\":15,\"line\":82},\"startBody\":{\"col\":17,\"line\":24},\"endBody\":{\"col\":15,\"line\":82}},\"List\":{\"startLoc\":{\"col\":18,\"line\":90},\"endLoc\":{\"col\":15,\"line\":148},\"startBody\":{\"col\":18,\"line\":90},\"endBody\":{\"col\":15,\"line\":148}},\"HeadlineTextLine\":{\"startLoc\":{\"col\":18,\"line\":155},\"endLoc\":{\"col\":15,\"line\":410},\"startBody\":{\"col\":18,\"line\":155},\"endBody\":{\"col\":15,\"line\":410}}};\n    \nimport React from 'react';\r\nimport HeadlineText from './HeadlineText';\r\n\r\n\r\nconst gapObject = {\r\n    \"Default\": '',\r\n    \"No Gap\": 'mb-0'\r\n}\r\n\r\nexport default {parameters: {\"storySource\":{\"source\":\"import React from 'react';\\r\\nimport HeadlineText from './HeadlineText';\\r\\n\\r\\n\\r\\nconst gapObject = {\\r\\n    \\\"Default\\\": '',\\r\\n    \\\"No Gap\\\": 'mb-0'\\r\\n}\\r\\n\\r\\nexport default {\\r\\n    title: 'Molecules/Headline Text',\\r\\n    component: HeadlineText,\\r\\n    argTypes: {\\r\\n        orientation: {\\r\\n            control: { type: \\\"inline-check\\\", options: [\\\"orientation-right\\\"] }\\r\\n        },\\r\\n        gap: {\\r\\n            control: { type: \\\"select\\\", options: gapObject }\\r\\n        },\\r\\n    }\\r\\n};\\r\\n\\r\\n// start\\r\\nconst Template = (args) => <HeadlineText {...args} >\\r\\n    <h5>H1:</h5>\\r\\n    <h1> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. <sup>lorem</sup><sub>ipsum</sub></h1>\\r\\n\\r\\n    <h5>H2:</h5>\\r\\n    <h2> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit <sup>lorem</sup><sub>ipsum</sub></h2>\\r\\n\\r\\n    <h5>H3:</h5>\\r\\n    <h3>H3: Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione  <sup>lorem</sup><sub>ipsum</sub></h3>\\r\\n\\r\\n    <h5>H3:</h5>\\r\\n    <h4> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque <sup>lorem</sup><sub>ipsum</sub></h4>\\r\\n\\r\\n    <h5>H5:</h5>\\r\\n    <h5> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\\r\\n        reprehenderit repudiandae vitae. <sup>lorem</sup><sub>ipsum</sub></h5>\\r\\n\\r\\n    <h5>H6:</h5>\\r\\n    <h6> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\\r\\n        reprehenderit repudiandae vitae. <sup>lorem</sup><sub>ipsum</sub></h6>\\r\\n\\r\\n    <h5>p:</h5>\\r\\n    <p> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\\r\\n        reprehenderit repudiandae vitae. <sup>lorem</sup><sub>ipsum</sub></p>\\r\\n\\r\\n    <h5>a:</h5>\\r\\n    <a href='.'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cum eos expedita fugit libero\\r\\n        maiores nam, neque nostrum, pariatur quis sit voluptatem. Accusantium ad dicta est maiores quae.</a>\\r\\n\\r\\n    <h5>Highlight : mark tag</h5>\\r\\n    <p>You can use the mark tag to <mark>highlight</mark> text.</p>\\r\\n\\r\\n    <h5>Deleted part: del tag</h5>\\r\\n    <p><del>This line of text is meant to be treated as deleted text.</del></p>\\r\\n\\r\\n    <h5>Mark up text that is no longer correct: s tag</h5>\\r\\n    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\\r\\n\\r\\n    <h5>A text with  a new, inserted part: ins tag</h5>\\r\\n    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\\r\\n\\r\\n    <h5>Mark up a misspelled word with the u tag:</h5>\\r\\n    <p><u>This line of text will render as underlined</u></p>\\r\\n\\r\\n    <h5>Define a smaller text:</h5>\\r\\n    <p><small>This line of text is meant to be treated as fine print.</small></p>\\r\\n\\r\\n    <h5>Define important text in a document:</h5>\\r\\n    <p><strong>This line rendered as bold text.</strong></p>\\r\\n\\r\\n    <h5>Mark up emphasized text in a document:</h5>\\r\\n    <p><em>This line rendered as italicized text.</em></p>\\r\\n\\r\\n    <h5>Superscript text:</h5>\\r\\n    <p>This text contains <sup>superscript</sup> text.</p>\\r\\n\\r\\n    <h5>Subscript text:</h5>\\r\\n    <p>This text contains <sub>subscript</sub> text.</p>\\r\\n</HeadlineText>;\\r\\n\\r\\nexport const HeadlineWithText = Template.bind({});\\r\\nHeadlineWithText.args = {\\r\\n    customClass: \\\"\\\",\\r\\n}\\r\\n\\r\\n// start\\r\\nconst Template2 = (args) => <HeadlineText {...args} >\\r\\n    <p><b>Unordered List: </b></p>\\r\\n    <ul>\\r\\n        <li>one</li>\\r\\n        <li>two</li>\\r\\n        <li>three\\r\\n            <ul>\\r\\n                <li>four</li>\\r\\n                <li>five</li>\\r\\n                <li>six\\r\\n                    <ul>\\r\\n                        <li>seven</li>\\r\\n                        <li>eight</li>\\r\\n                        <li>nine\\r\\n                            <ul>\\r\\n                                <li>ten</li>\\r\\n                                <li>eleven</li>\\r\\n                                <li>twelve</li>\\r\\n                            </ul>\\r\\n                        </li>\\r\\n                        <li>thirteen</li>\\r\\n                    </ul>\\r\\n                </li>\\r\\n                <li>fourteen</li>\\r\\n            </ul>\\r\\n        </li>\\r\\n        <li>fifteen</li>\\r\\n        <li>sixteen</li>\\r\\n    </ul>\\r\\n\\r\\n    <p><b>Ordered List: </b></p>\\r\\n    <ol>\\r\\n        <li>one</li>\\r\\n        <li>two</li>\\r\\n        <li>three\\r\\n            <ol>\\r\\n                <li>four</li>\\r\\n                <li>five</li>\\r\\n                <li>six\\r\\n                    <ol>\\r\\n                        <li>seven</li>\\r\\n                        <li>eight</li>\\r\\n                        <li>nine\\r\\n                            <ol>\\r\\n                                <li>ten</li>\\r\\n                                <li>eleven</li>\\r\\n                                <li>twelve</li>\\r\\n                            </ol>\\r\\n                        </li>\\r\\n                        <li>thirteen</li>\\r\\n                    </ol>\\r\\n                </li>\\r\\n                <li>fourteen</li>\\r\\n            </ol>\\r\\n        </li>\\r\\n        <li>fifteen</li>\\r\\n        <li>sixteen</li>\\r\\n    </ol>\\r\\n</HeadlineText>;\\r\\n\\r\\nexport const List = Template2.bind({});\\r\\n\\r\\n\\r\\n\\r\\n// Start\\r\\nconst Template4 = (args) => <HeadlineText {...args} >\\r\\n    <blockquote cite=\\\"http://www.worldwildlife.org/who/index.html\\\">\\r\\n        For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.\\r\\n    </blockquote>\\r\\n    <p>Current AEM RTE implementation: <a href=\\\"#\\\"> Lorem ipsum dolor</a></p>\\r\\n    <p><b>I am RTE - Bold</b></p>\\r\\n    <p><i>I am RTE - Italic</i></p>\\r\\n    <p><u>I am RTE - Underline</u></p>\\r\\n    <p style={{ textAlign: \\\"left\\\" }}>I am RTE - Align Text Left <a href=\\\"#\\\"> Lorem ipsum dolor 11111111111111</a></p>\\r\\n    <p style={{ textAlign: \\\"center\\\" }}>I am RTE - Center Text</p>\\r\\n    <p style={{ textAlign: \\\"right\\\" }}>I am RTE - Align Text Right</p>\\r\\n    <p style={{ textAlign: \\\"left\\\" }}><a title=\\\"Alt Text\\\"\\r\\n        href=\\\"http://localhost:4502/editor.html/content/abbvie-haematologie/de/components/atoms/a0110-text.html#\\\">I am RTE - Hyperlink</a></p>\\r\\n    <p style={{ textAlign: \\\"left\\\" }}>I am RTE - Anchor</p>\\r\\n    <p style={{ textAlign: \\\"left\\\" }}>I am RTE<sup>Superscript</sup></p>\\r\\n    <p style={{ textAlign: \\\"left\\\" }}>I am RTE<sub>subscript</sub></p>\\r\\n    <p style={{ textAlign: \\\"left\\\" }}>I am RTE - Paragraph</p>\\r\\n    <h1>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 1<sup>4</sup>  <a href=\\\"#\\\"> Lorem ipsum dolor 11111111111111</a></h1>\\r\\n    <h2>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 2<sup>4</sup></h2>\\r\\n    <h3>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 3<sup>4</sup></h3>\\r\\n    <h4>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 4<sup>4</sup></h4>\\r\\n    <p>RTE List Bullet:</p>\\r\\n    <ul>\\r\\n        <li><span className=\\\"\\\">I am RTE-A</span></li>\\r\\n        <li>I am RTE-B\\r\\n            <ul>\\r\\n                <li>I am RTE-B1 <a href=\\\"#\\\"> Lorem ipsum dolor 11111111111111</a></li>\\r\\n                <li>I am RTE-B2</li>\\r\\n                <li>I am RTE-B3</li>\\r\\n            </ul>\\r\\n        </li>\\r\\n        <li>I am RTE-C</li>\\r\\n    </ul>\\r\\n    <p>RTE List Number:\\r\\n        <br></br>\\r\\n    </p>\\r\\n    <ol>\\r\\n        <li>I am RTE1</li>\\r\\n        <li>I am RTE2\\r\\n            <ol>\\r\\n                <li>I am RTE2.1</li>\\r\\n                <li>I am RTE2.2</li>\\r\\n                <li>I am RTE2.3</li>\\r\\n            </ol>\\r\\n        </li>\\r\\n        <li>I am RTE3</li>\\r\\n    </ol>\\r\\n\\r\\n    <section className='cmp-text section'>\\r\\n        <h1>A0110 / TEXT</h1>\\r\\n        <h1>Überschrift<sup>h1</sup> (h1) <sup>1, 2, 3, 4</sup></h1>\\r\\n        <h2>Überschrift<sup>h2</sup> (h2) <sup>5, 6, 7</sup></h2>\\r\\n        <h3>Überschrift<sup>h3</sup> (h3) <sup>8, 9</sup></h3>\\r\\n        <h4>Überschrift<sup>h4</sup> (h4) <sup>10</sup></h4>\\r\\n        <p>Copytext. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque, excepturi\\r\\n            exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam. Fugit\\r\\n            ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque,\\r\\n            excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam.\\r\\n            Fugit ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque,\\r\\n            excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam.\\r\\n            Fugit ipsam, vel.</p>\\r\\n        <p>A list:</p>\\r\\n        <ul>\\r\\n            <li>one</li>\\r\\n            <li>two</li>\\r\\n            <li>three\\r\\n                <ul>\\r\\n                    <li>four</li>\\r\\n                    <li>five</li>\\r\\n                    <li>six\\r\\n                        <ul>\\r\\n                            <li>seven</li>\\r\\n                            <li>eight</li>\\r\\n                            <li>nine\\r\\n                                <ul>\\r\\n                                    <li>ten</li>\\r\\n                                    <li>eleven</li>\\r\\n                                    <li>twelve</li>\\r\\n                                </ul>\\r\\n                            </li>\\r\\n                            <li>thirteen</li>\\r\\n                        </ul>\\r\\n                    </li>\\r\\n                    <li>fourteen</li>\\r\\n                </ul>\\r\\n            </li>\\r\\n            <li>fifteen</li>\\r\\n            <li>sixteen</li>\\r\\n        </ul>\\r\\n        <p>An enumeration:</p>\\r\\n        <ol>\\r\\n            <li>one</li>\\r\\n            <li>two</li>\\r\\n            <li>three\\r\\n                <ol>\\r\\n                    <li>four</li>\\r\\n                    <li>five</li>\\r\\n                    <li>six\\r\\n                        <ol>\\r\\n                            <li>seven</li>\\r\\n                            <li>eight</li>\\r\\n                            <li>nine\\r\\n                                <ol>\\r\\n                                    <li>ten</li>\\r\\n                                    <li>eleven</li>\\r\\n                                    <li>twelve</li>\\r\\n                                </ol>\\r\\n                            </li>\\r\\n                            <li>thirteen</li>\\r\\n                        </ol>\\r\\n                    </li>\\r\\n                    <li>fourteen</li>\\r\\n                </ol>\\r\\n            </li>\\r\\n            <li>fifteen</li>\\r\\n            <li>sixteen</li>\\r\\n        </ol>\\r\\n        <p>Checklist</p>\\r\\n        <ul className='checklist'>\\r\\n            <li className='checked'>Checked Lsit Item</li>\\r\\n            <li className='unchecked'>unchecked Lsit Item</li>\\r\\n        </ul>\\r\\n        <h3>h3</h3>\\r\\n        <ul>\\r\\n            <li><a href=\\\"#\\\">Link 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore\\r\\n                doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque\\r\\n                quibusdam totam. Fugit ipsam, vel.</a></li>\\r\\n            <li><a href=\\\"#\\\">Link 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore\\r\\n                doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis.</a></li>\\r\\n            <li><a href=\\\"#\\\">Link 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore\\r\\n                doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque\\r\\n                quibusdam totam. Fugit ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis\\r\\n                dolore doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque\\r\\n                eaque quibusdam totam. Fugit ipsam, vel.</a></li>\\r\\n            <li><a href=\\\"#\\\">Link 4</a></li>\\r\\n            <li><a href=\\\"#\\\">...</a></li>\\r\\n        </ul>\\r\\n        <h2>h2</h2>\\r\\n        <p>Copytext. Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href=\\\"#\\\">Commodi, eligendi error\\r\\n            incidunt ipsam nam natus</a> repellat veritatis voluptate voluptates. Aperiam consequuntur dolores doloribus\\r\\n            ducimus iure, perspiciatis qui ratione repudiandae rerum!</p>\\r\\n        <ul>\\r\\n            <li><i>Lorem ipsum dolor sit amet</i>: consectetur adipisicing elit. Aliquam, aspernatur autem blanditiis enim\\r\\n                eos esse eveniet exercitationem facilis fugit id minus neque optio quam quis quos rerum sunt temporibus totam.\\r\\n            </li>\\r\\n            <li><i>Lorem ipsum dolor sit amet</i>: consectetur adipisicing elit. Amet doloremque eum expedita id nemo omnis\\r\\n                recusandae tempora tempore veniam vitae! Ab deleniti maiores natus non odit reiciendis sint tenetur voluptate.\\r\\n            </li>\\r\\n            <li><i>Lorem ipsum</i>: Dolor sit amet, consectetur adipisicing elit. Amet consectetur consequatur ea earum eius\\r\\n                eveniet laborum laudantium nam, nemo nisi nostrum numquam odit perferendis perspiciatis quo repellat\\r\\n                repudiandae sequi. Nisi?</li>\\r\\n        </ul>\\r\\n        <h2>Kontaktdaten und Richtlinienaktualisierungen</h2>\\r\\n        <h3>Wie kann ich zu AbbVie Kontakt aufnehmen?</h3>\\r\\n        <p>Wenn Sie Fragen zur Nutzung, Änderung oder Löschung der an uns bereitgestellten personenbezogenen Daten haben\\r\\n            oder zukünftige Mitteilungen von AbbVie oder eines bestimmten AbbVie-Programms ablehnen möchten, kontaktieren\\r\\n            Sie uns, indem Sie einen „Kontakt“-Link auf der besuchten Webseite anklicken, oder senden Sie eine E-Mail an <a\\r\\n                href=\\\"mailto:info.de@abbvie.com\\\">info.de(at)abbvie(dot)com</a>. Bezüglich der Verarbeitung Ihrer\\r\\n            personenbezogenen Daten können Sie sich auch direkt mit dem Datenschutzbeauftragten unter <a\\r\\n                href=\\\"mailto:datenschutz.de@abbvie.com\\\">datenschutz.de(at)abbvie(dot)com</a> in Verbindung setzen. Sie können\\r\\n            auch ein Schreiben an folgende Adresse richten oder sich telefonisch mit uns in Verbindung setzen:</p>\\r\\n        <p>\\r\\n            AbbVie Deutschland GmbH & Co. KG<br></br>\\r\\n            Mainzer Straße 81<br></br>\\r\\n            65189 Wiesbaden<br></br>\\r\\n            eMail: <a href=\\\"mailto:info.de@abbvie.com\\\">info.de(at)abbvie(dot)com</a><br></br>\\r\\n            Tel.: +49 (0)611 1720 - 0<br></br>\\r\\n            Fax.: +49 (0)611 1720 1244\\r\\n        </p>\\r\\n        <p>Geben Sie bitte in Ihren Mitteilungen an uns die für die Registrierung verwendete E-Mail-Adresse (sofern\\r\\n            zutreffend), die URL der Webseite oder das AbbVie-Programm, für das Sie personenbezogene Daten eingegeben haben\\r\\n            (z. B. www.AbbVie.de usw.) sowie eine detaillierte Beschreibung Ihres Anliegens an.</p>\\r\\n        <h3>Wie erfahre ich, ob AbbVie diese Datenschutzrichtlinie aktualisiert hat?</h3>\\r\\n        <p>Unbeschadet Ihrer Rechte nach geltendem Gesetz behält sich AbbVie vor, diese Datenschutzrichtlinie zu ändern\\r\\n            und zu versionieren, um technischen Weiterentwicklungen, Gesetzesänderungen und Vorschriften und guten\\r\\n            Geschäftspraktiken zu genügen.</p>\\r\\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem ipsum iste laboriosam qui, quia\\r\\n            repellendus vel! A at ducimus esse illo incidunt nostrum optio quas repudiandae rerum, velit. Tempora.</p>\\r\\n        <h1>h1 Strukturnachbildung</h1>\\r\\n        <h2>h2 Unterüberschrift</h2>\\r\\n        <h3>1. h3</h3>\\r\\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\\r\\n            reprehenderit repudiandae vitae. Aperiam blanditiis distinctio earum ex impedit iure labore natus, nihil\\r\\n            similique ut voluptas.</p>\\r\\n        <h3>2. h3</h3>\\r\\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores cumque deleniti dolorum eveniet\\r\\n            fugiat iure iusto laboriosam magni nam nemo nulla optio provident quasi rem rerum temporibus, velit veritatis.\\r\\n        </p>\\r\\n        <h3>3. h3</h3>\\r\\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cum eos expedita fugit libero\\r\\n            maiores nam, neque nostrum, pariatur quis sit voluptatem. Accusantium ad dicta est maiores quae.</p>\\r\\n        <p>usw.</p>\\r\\n        <h1>Listen</h1>\\r\\n        <h2>ul</h2>\\r\\n        <ul>\\r\\n            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quaerat, repudiandae. Ad in perspiciatis\\r\\n                tempore? Aliquam aliquid consequatur consequuntur est ex, inventore itaque maxime numquam, possimus\\r\\n                praesentium reiciendis, sequi vero.</li>\\r\\n            <li>Aspernatur deleniti, distinctio doloribus eum ex iusto nemo nesciunt quasi qui quisquam repudiandae saepe\\r\\n                voluptatibus. Dignissimos enim, et exercitationem fugit harum molestias necessitatibus nesciunt omnis quo\\r\\n                recusandae sint tenetur totam.</li>\\r\\n            <li>Excepturi ipsum minus odit officia reiciendis, rerum! Architecto deserunt dicta esse ex excepturi fugiat id\\r\\n                magni, nostrum odio optio quaerat recusandae repellat saepe sequi suscipit tempore ut veniam veritatis\\r\\n                voluptas.</li>\\r\\n        </ul>\\r\\n        <h2>ol</h2>\\r\\n        <ol>\\r\\n            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias dignissimos doloremque eius enim esse\\r\\n                illo incidunt, laborum neque nisi, nulla obcaecati officiis pariatur possimus quia quisquam, vitae. Hic,\\r\\n                sapiente?</li>\\r\\n            <li>Aperiam atque, et ex laboriosam praesentium soluta? Ad architecto assumenda consectetur deserunt dolorem\\r\\n                ducimus ea enim excepturi ipsa, minima mollitia neque, officiis quo quod recusandae, repellat tempora? Aperiam\\r\\n                eos, inventore.</li>\\r\\n            <li>Aperiam culpa cum eius neque soluta! Alias aliquam aliquid, architecto culpa doloribus ea eligendi eveniet\\r\\n                excepturi iusto magni maiores pariatur quam quas repellat repellendus saepe tenetur totam ut, veritatis\\r\\n                voluptatem?</li>\\r\\n        </ol>\\r\\n        <br></br>\\r\\n        <h2>Inline Text Elements</h2>\\r\\n        <p>You can use the mark tag to <mark>highlight</mark> text.</p>\\r\\n        <p><del>This line of text is meant to be treated as deleted text.</del></p>\\r\\n        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\\r\\n        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\\r\\n        <p><u>This line of text will render as underlined</u></p>\\r\\n        <p><small>This line of text is meant to be treated as fine print.</small></p>\\r\\n        <p><strong>This line rendered as bold text.</strong></p>\\r\\n        <p><em>This line rendered as italicized text.</em></p>\\r\\n        <br></br>\\r\\n        <h2>Copytext Test</h2>\\r\\n        <p>Copytext. Lorem Impsum. Das ist ein <a href=\\\"#\\\" title=\\\"TITLE\\\">Link im Fließtext</a>. Dieses Wort ist\\r\\n            <em>betont</em> (em). Dieses Wort ist <i>kursiv</i> (i). Dieses Wort ist <strong>stark betont</strong> (strong).\\r\\n            Dieses Wort ist <b>fett</b> (b). Dieses Wort ist <sup>hochgestellt</sup> (sup). Dieses Wort ist\\r\\n            <sub>tiefgestellt</sub> (sub).</p>\\r\\n        <br></br>\\r\\n        <h2>Special Chars Test</h2>\\r\\n        <p><a\\r\\n            href=\\\"http://de.wikipedia.org/wiki/L%C3%B6wen-essender_Dichter_in_der_Steinh%C3%B6hle\\\">http://de.wikipedia.org/wiki/L%C3%B6wen-essender_Dichter_in_der_Steinh%C3%B6hle</a>\\r\\n        </p>\\r\\n        <p>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz, 0123456789<br></br>\\r\\n            1234567890„\\\"@!\\\"\\\"§$ %{\\\"&\\\"}/()=?{[]} \\\\*+~'#{'>'}{\\\"<\\\"}-,;.:éè-äöu »«ß<br></br>\\r\\n            öäüÖÄÜ!\\\"§$%{\\\"&\\\"}/()=?@€,;.:-_+*~#'²³{[]}<br></br>\\r\\n            ®™</p>\\r\\n        <br></br>\\r\\n        <h2>Footnotes (simulation)</h2>\\r\\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dicta eveniet ipsam labore laborum maiores,\\r\\n            nihil officia quisquam quo repellat sit suscipit ullam unde ut veritatis vero. Consequatur,\\r\\n            exercitationem?<sup>42</sup></p>\\r\\n        <p>Nachweis der 17p-Deletion mittels Vysis CLL FISH Sonden Kit.<sup>1,2</sup></p>\\r\\n        <p>† Die mediane Zeit unter Therapie zum Zeitpunkt der Beurteilung betrug 12 Monate (Spannweite: 0 – 22\\r\\n            Monate).<sup>1,2</sup></p>\\r\\n        <p>‡ Die Wirksamkeitsbeurteilung durch den Prüfer wird für 158 Patienten (Expansionskohorte zum Thema Sicherheit)\\r\\n            gezeigt. Die mediane Behandlungsdauer für diese 158 Patienten betrug 17 Monate (Spannweite: 0 – 34\\r\\n            Monate).<sup>1</sup></p>\\r\\n        <p>†, ‡, ♥, ♠, ♣, ♦</p>\\r\\n    </section>\\r\\n</HeadlineText>;\\r\\n\\r\\nexport const HeadlineTextLine = Template4.bind({});\\r\\n\\r\\n\",\"locationsMap\":{\"headline-with-text\":{\"startLoc\":{\"col\":17,\"line\":24},\"endLoc\":{\"col\":15,\"line\":82},\"startBody\":{\"col\":17,\"line\":24},\"endBody\":{\"col\":15,\"line\":82}},\"list\":{\"startLoc\":{\"col\":18,\"line\":90},\"endLoc\":{\"col\":15,\"line\":148},\"startBody\":{\"col\":18,\"line\":90},\"endBody\":{\"col\":15,\"line\":148}},\"headline-text-line\":{\"startLoc\":{\"col\":18,\"line\":155},\"endLoc\":{\"col\":15,\"line\":410},\"startBody\":{\"col\":18,\"line\":155},\"endBody\":{\"col\":15,\"line\":410}}}},},\r\n    title: 'Molecules/Headline Text',\r\n    component: HeadlineText,\r\n    argTypes: {\r\n        orientation: {\r\n            control: { type: \"inline-check\", options: [\"orientation-right\"] }\r\n        },\r\n        gap: {\r\n            control: { type: \"select\", options: gapObject }\r\n        },\r\n    }\r\n};\r\n\r\n// start\r\nconst Template = (args) => <HeadlineText {...args} >\r\n    <h5>H1:</h5>\r\n    <h1> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. <sup>lorem</sup><sub>ipsum</sub></h1>\r\n\r\n    <h5>H2:</h5>\r\n    <h2> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit <sup>lorem</sup><sub>ipsum</sub></h2>\r\n\r\n    <h5>H3:</h5>\r\n    <h3>H3: Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione  <sup>lorem</sup><sub>ipsum</sub></h3>\r\n\r\n    <h5>H3:</h5>\r\n    <h4> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque <sup>lorem</sup><sub>ipsum</sub></h4>\r\n\r\n    <h5>H5:</h5>\r\n    <h5> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\r\n        reprehenderit repudiandae vitae. <sup>lorem</sup><sub>ipsum</sub></h5>\r\n\r\n    <h5>H6:</h5>\r\n    <h6> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\r\n        reprehenderit repudiandae vitae. <sup>lorem</sup><sub>ipsum</sub></h6>\r\n\r\n    <h5>p:</h5>\r\n    <p> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\r\n        reprehenderit repudiandae vitae. <sup>lorem</sup><sub>ipsum</sub></p>\r\n\r\n    <h5>a:</h5>\r\n    <a href='.'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cum eos expedita fugit libero\r\n        maiores nam, neque nostrum, pariatur quis sit voluptatem. Accusantium ad dicta est maiores quae.</a>\r\n\r\n    <h5>Highlight : mark tag</h5>\r\n    <p>You can use the mark tag to <mark>highlight</mark> text.</p>\r\n\r\n    <h5>Deleted part: del tag</h5>\r\n    <p><del>This line of text is meant to be treated as deleted text.</del></p>\r\n\r\n    <h5>Mark up text that is no longer correct: s tag</h5>\r\n    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\r\n\r\n    <h5>A text with  a new, inserted part: ins tag</h5>\r\n    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\r\n\r\n    <h5>Mark up a misspelled word with the u tag:</h5>\r\n    <p><u>This line of text will render as underlined</u></p>\r\n\r\n    <h5>Define a smaller text:</h5>\r\n    <p><small>This line of text is meant to be treated as fine print.</small></p>\r\n\r\n    <h5>Define important text in a document:</h5>\r\n    <p><strong>This line rendered as bold text.</strong></p>\r\n\r\n    <h5>Mark up emphasized text in a document:</h5>\r\n    <p><em>This line rendered as italicized text.</em></p>\r\n\r\n    <h5>Superscript text:</h5>\r\n    <p>This text contains <sup>superscript</sup> text.</p>\r\n\r\n    <h5>Subscript text:</h5>\r\n    <p>This text contains <sub>subscript</sub> text.</p>\r\n</HeadlineText>;\r\n\r\nexport const HeadlineWithText = Template.bind({});;\r\nHeadlineWithText.args = {\r\n    customClass: \"\",\r\n}\r\n\r\n// start\r\nconst Template2 = (args) => <HeadlineText {...args} >\r\n    <p><b>Unordered List: </b></p>\r\n    <ul>\r\n        <li>one</li>\r\n        <li>two</li>\r\n        <li>three\r\n            <ul>\r\n                <li>four</li>\r\n                <li>five</li>\r\n                <li>six\r\n                    <ul>\r\n                        <li>seven</li>\r\n                        <li>eight</li>\r\n                        <li>nine\r\n                            <ul>\r\n                                <li>ten</li>\r\n                                <li>eleven</li>\r\n                                <li>twelve</li>\r\n                            </ul>\r\n                        </li>\r\n                        <li>thirteen</li>\r\n                    </ul>\r\n                </li>\r\n                <li>fourteen</li>\r\n            </ul>\r\n        </li>\r\n        <li>fifteen</li>\r\n        <li>sixteen</li>\r\n    </ul>\r\n\r\n    <p><b>Ordered List: </b></p>\r\n    <ol>\r\n        <li>one</li>\r\n        <li>two</li>\r\n        <li>three\r\n            <ol>\r\n                <li>four</li>\r\n                <li>five</li>\r\n                <li>six\r\n                    <ol>\r\n                        <li>seven</li>\r\n                        <li>eight</li>\r\n                        <li>nine\r\n                            <ol>\r\n                                <li>ten</li>\r\n                                <li>eleven</li>\r\n                                <li>twelve</li>\r\n                            </ol>\r\n                        </li>\r\n                        <li>thirteen</li>\r\n                    </ol>\r\n                </li>\r\n                <li>fourteen</li>\r\n            </ol>\r\n        </li>\r\n        <li>fifteen</li>\r\n        <li>sixteen</li>\r\n    </ol>\r\n</HeadlineText>;\r\n\r\nexport const List = Template2.bind({});;\r\n\r\n\r\n\r\n// Start\r\nconst Template4 = (args) => <HeadlineText {...args} >\r\n    <blockquote cite=\"http://www.worldwildlife.org/who/index.html\">\r\n        For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.\r\n    </blockquote>\r\n    <p>Current AEM RTE implementation: <a href=\"#\"> Lorem ipsum dolor</a></p>\r\n    <p><b>I am RTE - Bold</b></p>\r\n    <p><i>I am RTE - Italic</i></p>\r\n    <p><u>I am RTE - Underline</u></p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE - Align Text Left <a href=\"#\"> Lorem ipsum dolor 11111111111111</a></p>\r\n    <p style={{ textAlign: \"center\" }}>I am RTE - Center Text</p>\r\n    <p style={{ textAlign: \"right\" }}>I am RTE - Align Text Right</p>\r\n    <p style={{ textAlign: \"left\" }}><a title=\"Alt Text\"\r\n        href=\"http://localhost:4502/editor.html/content/abbvie-haematologie/de/components/atoms/a0110-text.html#\">I am RTE - Hyperlink</a></p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE - Anchor</p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE<sup>Superscript</sup></p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE<sub>subscript</sub></p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE - Paragraph</p>\r\n    <h1>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 1<sup>4</sup>  <a href=\"#\"> Lorem ipsum dolor 11111111111111</a></h1>\r\n    <h2>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 2<sup>4</sup></h2>\r\n    <h3>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 3<sup>4</sup></h3>\r\n    <h4>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 4<sup>4</sup></h4>\r\n    <p>RTE List Bullet:</p>\r\n    <ul>\r\n        <li><span className=\"\">I am RTE-A</span></li>\r\n        <li>I am RTE-B\r\n            <ul>\r\n                <li>I am RTE-B1 <a href=\"#\"> Lorem ipsum dolor 11111111111111</a></li>\r\n                <li>I am RTE-B2</li>\r\n                <li>I am RTE-B3</li>\r\n            </ul>\r\n        </li>\r\n        <li>I am RTE-C</li>\r\n    </ul>\r\n    <p>RTE List Number:\r\n        <br></br>\r\n    </p>\r\n    <ol>\r\n        <li>I am RTE1</li>\r\n        <li>I am RTE2\r\n            <ol>\r\n                <li>I am RTE2.1</li>\r\n                <li>I am RTE2.2</li>\r\n                <li>I am RTE2.3</li>\r\n            </ol>\r\n        </li>\r\n        <li>I am RTE3</li>\r\n    </ol>\r\n\r\n    <section className='cmp-text section'>\r\n        <h1>A0110 / TEXT</h1>\r\n        <h1>Überschrift<sup>h1</sup> (h1) <sup>1, 2, 3, 4</sup></h1>\r\n        <h2>Überschrift<sup>h2</sup> (h2) <sup>5, 6, 7</sup></h2>\r\n        <h3>Überschrift<sup>h3</sup> (h3) <sup>8, 9</sup></h3>\r\n        <h4>Überschrift<sup>h4</sup> (h4) <sup>10</sup></h4>\r\n        <p>Copytext. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque, excepturi\r\n            exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam. Fugit\r\n            ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque,\r\n            excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam.\r\n            Fugit ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque,\r\n            excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam.\r\n            Fugit ipsam, vel.</p>\r\n        <p>A list:</p>\r\n        <ul>\r\n            <li>one</li>\r\n            <li>two</li>\r\n            <li>three\r\n                <ul>\r\n                    <li>four</li>\r\n                    <li>five</li>\r\n                    <li>six\r\n                        <ul>\r\n                            <li>seven</li>\r\n                            <li>eight</li>\r\n                            <li>nine\r\n                                <ul>\r\n                                    <li>ten</li>\r\n                                    <li>eleven</li>\r\n                                    <li>twelve</li>\r\n                                </ul>\r\n                            </li>\r\n                            <li>thirteen</li>\r\n                        </ul>\r\n                    </li>\r\n                    <li>fourteen</li>\r\n                </ul>\r\n            </li>\r\n            <li>fifteen</li>\r\n            <li>sixteen</li>\r\n        </ul>\r\n        <p>An enumeration:</p>\r\n        <ol>\r\n            <li>one</li>\r\n            <li>two</li>\r\n            <li>three\r\n                <ol>\r\n                    <li>four</li>\r\n                    <li>five</li>\r\n                    <li>six\r\n                        <ol>\r\n                            <li>seven</li>\r\n                            <li>eight</li>\r\n                            <li>nine\r\n                                <ol>\r\n                                    <li>ten</li>\r\n                                    <li>eleven</li>\r\n                                    <li>twelve</li>\r\n                                </ol>\r\n                            </li>\r\n                            <li>thirteen</li>\r\n                        </ol>\r\n                    </li>\r\n                    <li>fourteen</li>\r\n                </ol>\r\n            </li>\r\n            <li>fifteen</li>\r\n            <li>sixteen</li>\r\n        </ol>\r\n        <p>Checklist</p>\r\n        <ul className='checklist'>\r\n            <li className='checked'>Checked Lsit Item</li>\r\n            <li className='unchecked'>unchecked Lsit Item</li>\r\n        </ul>\r\n        <h3>h3</h3>\r\n        <ul>\r\n            <li><a href=\"#\">Link 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore\r\n                doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque\r\n                quibusdam totam. Fugit ipsam, vel.</a></li>\r\n            <li><a href=\"#\">Link 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore\r\n                doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis.</a></li>\r\n            <li><a href=\"#\">Link 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore\r\n                doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque\r\n                quibusdam totam. Fugit ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis\r\n                dolore doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque\r\n                eaque quibusdam totam. Fugit ipsam, vel.</a></li>\r\n            <li><a href=\"#\">Link 4</a></li>\r\n            <li><a href=\"#\">...</a></li>\r\n        </ul>\r\n        <h2>h2</h2>\r\n        <p>Copytext. Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href=\"#\">Commodi, eligendi error\r\n            incidunt ipsam nam natus</a> repellat veritatis voluptate voluptates. Aperiam consequuntur dolores doloribus\r\n            ducimus iure, perspiciatis qui ratione repudiandae rerum!</p>\r\n        <ul>\r\n            <li><i>Lorem ipsum dolor sit amet</i>: consectetur adipisicing elit. Aliquam, aspernatur autem blanditiis enim\r\n                eos esse eveniet exercitationem facilis fugit id minus neque optio quam quis quos rerum sunt temporibus totam.\r\n            </li>\r\n            <li><i>Lorem ipsum dolor sit amet</i>: consectetur adipisicing elit. Amet doloremque eum expedita id nemo omnis\r\n                recusandae tempora tempore veniam vitae! Ab deleniti maiores natus non odit reiciendis sint tenetur voluptate.\r\n            </li>\r\n            <li><i>Lorem ipsum</i>: Dolor sit amet, consectetur adipisicing elit. Amet consectetur consequatur ea earum eius\r\n                eveniet laborum laudantium nam, nemo nisi nostrum numquam odit perferendis perspiciatis quo repellat\r\n                repudiandae sequi. Nisi?</li>\r\n        </ul>\r\n        <h2>Kontaktdaten und Richtlinienaktualisierungen</h2>\r\n        <h3>Wie kann ich zu AbbVie Kontakt aufnehmen?</h3>\r\n        <p>Wenn Sie Fragen zur Nutzung, Änderung oder Löschung der an uns bereitgestellten personenbezogenen Daten haben\r\n            oder zukünftige Mitteilungen von AbbVie oder eines bestimmten AbbVie-Programms ablehnen möchten, kontaktieren\r\n            Sie uns, indem Sie einen „Kontakt“-Link auf der besuchten Webseite anklicken, oder senden Sie eine E-Mail an <a\r\n                href=\"mailto:info.de@abbvie.com\">info.de(at)abbvie(dot)com</a>. Bezüglich der Verarbeitung Ihrer\r\n            personenbezogenen Daten können Sie sich auch direkt mit dem Datenschutzbeauftragten unter <a\r\n                href=\"mailto:datenschutz.de@abbvie.com\">datenschutz.de(at)abbvie(dot)com</a> in Verbindung setzen. Sie können\r\n            auch ein Schreiben an folgende Adresse richten oder sich telefonisch mit uns in Verbindung setzen:</p>\r\n        <p>\r\n            AbbVie Deutschland GmbH & Co. KG<br></br>\r\n            Mainzer Straße 81<br></br>\r\n            65189 Wiesbaden<br></br>\r\n            eMail: <a href=\"mailto:info.de@abbvie.com\">info.de(at)abbvie(dot)com</a><br></br>\r\n            Tel.: +49 (0)611 1720 - 0<br></br>\r\n            Fax.: +49 (0)611 1720 1244\r\n        </p>\r\n        <p>Geben Sie bitte in Ihren Mitteilungen an uns die für die Registrierung verwendete E-Mail-Adresse (sofern\r\n            zutreffend), die URL der Webseite oder das AbbVie-Programm, für das Sie personenbezogene Daten eingegeben haben\r\n            (z. B. www.AbbVie.de usw.) sowie eine detaillierte Beschreibung Ihres Anliegens an.</p>\r\n        <h3>Wie erfahre ich, ob AbbVie diese Datenschutzrichtlinie aktualisiert hat?</h3>\r\n        <p>Unbeschadet Ihrer Rechte nach geltendem Gesetz behält sich AbbVie vor, diese Datenschutzrichtlinie zu ändern\r\n            und zu versionieren, um technischen Weiterentwicklungen, Gesetzesänderungen und Vorschriften und guten\r\n            Geschäftspraktiken zu genügen.</p>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem ipsum iste laboriosam qui, quia\r\n            repellendus vel! A at ducimus esse illo incidunt nostrum optio quas repudiandae rerum, velit. Tempora.</p>\r\n        <h1>h1 Strukturnachbildung</h1>\r\n        <h2>h2 Unterüberschrift</h2>\r\n        <h3>1. h3</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\r\n            reprehenderit repudiandae vitae. Aperiam blanditiis distinctio earum ex impedit iure labore natus, nihil\r\n            similique ut voluptas.</p>\r\n        <h3>2. h3</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores cumque deleniti dolorum eveniet\r\n            fugiat iure iusto laboriosam magni nam nemo nulla optio provident quasi rem rerum temporibus, velit veritatis.\r\n        </p>\r\n        <h3>3. h3</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cum eos expedita fugit libero\r\n            maiores nam, neque nostrum, pariatur quis sit voluptatem. Accusantium ad dicta est maiores quae.</p>\r\n        <p>usw.</p>\r\n        <h1>Listen</h1>\r\n        <h2>ul</h2>\r\n        <ul>\r\n            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quaerat, repudiandae. Ad in perspiciatis\r\n                tempore? Aliquam aliquid consequatur consequuntur est ex, inventore itaque maxime numquam, possimus\r\n                praesentium reiciendis, sequi vero.</li>\r\n            <li>Aspernatur deleniti, distinctio doloribus eum ex iusto nemo nesciunt quasi qui quisquam repudiandae saepe\r\n                voluptatibus. Dignissimos enim, et exercitationem fugit harum molestias necessitatibus nesciunt omnis quo\r\n                recusandae sint tenetur totam.</li>\r\n            <li>Excepturi ipsum minus odit officia reiciendis, rerum! Architecto deserunt dicta esse ex excepturi fugiat id\r\n                magni, nostrum odio optio quaerat recusandae repellat saepe sequi suscipit tempore ut veniam veritatis\r\n                voluptas.</li>\r\n        </ul>\r\n        <h2>ol</h2>\r\n        <ol>\r\n            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias dignissimos doloremque eius enim esse\r\n                illo incidunt, laborum neque nisi, nulla obcaecati officiis pariatur possimus quia quisquam, vitae. Hic,\r\n                sapiente?</li>\r\n            <li>Aperiam atque, et ex laboriosam praesentium soluta? Ad architecto assumenda consectetur deserunt dolorem\r\n                ducimus ea enim excepturi ipsa, minima mollitia neque, officiis quo quod recusandae, repellat tempora? Aperiam\r\n                eos, inventore.</li>\r\n            <li>Aperiam culpa cum eius neque soluta! Alias aliquam aliquid, architecto culpa doloribus ea eligendi eveniet\r\n                excepturi iusto magni maiores pariatur quam quas repellat repellendus saepe tenetur totam ut, veritatis\r\n                voluptatem?</li>\r\n        </ol>\r\n        <br></br>\r\n        <h2>Inline Text Elements</h2>\r\n        <p>You can use the mark tag to <mark>highlight</mark> text.</p>\r\n        <p><del>This line of text is meant to be treated as deleted text.</del></p>\r\n        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\r\n        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\r\n        <p><u>This line of text will render as underlined</u></p>\r\n        <p><small>This line of text is meant to be treated as fine print.</small></p>\r\n        <p><strong>This line rendered as bold text.</strong></p>\r\n        <p><em>This line rendered as italicized text.</em></p>\r\n        <br></br>\r\n        <h2>Copytext Test</h2>\r\n        <p>Copytext. Lorem Impsum. Das ist ein <a href=\"#\" title=\"TITLE\">Link im Fließtext</a>. Dieses Wort ist\r\n            <em>betont</em> (em). Dieses Wort ist <i>kursiv</i> (i). Dieses Wort ist <strong>stark betont</strong> (strong).\r\n            Dieses Wort ist <b>fett</b> (b). Dieses Wort ist <sup>hochgestellt</sup> (sup). Dieses Wort ist\r\n            <sub>tiefgestellt</sub> (sub).</p>\r\n        <br></br>\r\n        <h2>Special Chars Test</h2>\r\n        <p><a\r\n            href=\"http://de.wikipedia.org/wiki/L%C3%B6wen-essender_Dichter_in_der_Steinh%C3%B6hle\">http://de.wikipedia.org/wiki/L%C3%B6wen-essender_Dichter_in_der_Steinh%C3%B6hle</a>\r\n        </p>\r\n        <p>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz, 0123456789<br></br>\r\n            1234567890„\"@!\"\"§$ %{\"&\"}/()=?{[]} \\*+~'#{'>'}{\"<\"}-,;.:éè-äöu »«ß<br></br>\r\n            öäüÖÄÜ!\"§$%{\"&\"}/()=?@€,;.:-_+*~#'²³{[]}<br></br>\r\n            ®™</p>\r\n        <br></br>\r\n        <h2>Footnotes (simulation)</h2>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dicta eveniet ipsam labore laborum maiores,\r\n            nihil officia quisquam quo repellat sit suscipit ullam unde ut veritatis vero. Consequatur,\r\n            exercitationem?<sup>42</sup></p>\r\n        <p>Nachweis der 17p-Deletion mittels Vysis CLL FISH Sonden Kit.<sup>1,2</sup></p>\r\n        <p>† Die mediane Zeit unter Therapie zum Zeitpunkt der Beurteilung betrug 12 Monate (Spannweite: 0 – 22\r\n            Monate).<sup>1,2</sup></p>\r\n        <p>‡ Die Wirksamkeitsbeurteilung durch den Prüfer wird für 158 Patienten (Expansionskohorte zum Thema Sicherheit)\r\n            gezeigt. Die mediane Behandlungsdauer für diese 158 Patienten betrug 17 Monate (Spannweite: 0 – 34\r\n            Monate).<sup>1</sup></p>\r\n        <p>†, ‡, ♥, ♠, ♣, ♦</p>\r\n    </section>\r\n</HeadlineText>;\r\n\r\nexport const HeadlineTextLine = Template4.bind({});\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "HeadlineWithText": {
    "startLoc": {
      "col": 17,
      "line": 32
    },
    "endLoc": {
      "col": 15,
      "line": 90
    },
    "startBody": {
      "col": 17,
      "line": 32
    },
    "endBody": {
      "col": 15,
      "line": 90
    }
  },
  "List": {
    "startLoc": {
      "col": 18,
      "line": 98
    },
    "endLoc": {
      "col": 15,
      "line": 156
    },
    "startBody": {
      "col": 18,
      "line": 98
    },
    "endBody": {
      "col": 15,
      "line": 156
    }
  },
  "HeadlineTextLine": {
    "startLoc": {
      "col": 18,
      "line": 163
    },
    "endLoc": {
      "col": 15,
      "line": 418
    },
    "startBody": {
      "col": 18,
      "line": 163
    },
    "endBody": {
      "col": 15,
      "line": 418
    }
  }
};
/* eslint-disable */
// @ts-nocheck
// @ts-ignore

var __STORY__ = "import React from 'react';\r\nimport HeadlineText from './HeadlineText';\r\n\r\n\r\nconst gapObject = {\r\n    \"Default\": '',\r\n    \"No Gap\": 'mb-0'\r\n}\r\n\r\nexport default {\r\n    title: 'Molecules/Headline Text',\r\n    component: HeadlineText,\r\n    argTypes: {\r\n        orientation: {\r\n            control: { type: \"inline-check\", options: [\"orientation-right\"] }\r\n        },\r\n        gap: {\r\n            control: { type: \"select\", options: gapObject }\r\n        },\r\n    }\r\n};\r\n\r\n// start\r\nconst Template = (args) => <HeadlineText {...args} >\r\n    <h5>H1:</h5>\r\n    <h1> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. <sup>lorem</sup><sub>ipsum</sub></h1>\r\n\r\n    <h5>H2:</h5>\r\n    <h2> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit <sup>lorem</sup><sub>ipsum</sub></h2>\r\n\r\n    <h5>H3:</h5>\r\n    <h3>H3: Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione  <sup>lorem</sup><sub>ipsum</sub></h3>\r\n\r\n    <h5>H3:</h5>\r\n    <h4> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque <sup>lorem</sup><sub>ipsum</sub></h4>\r\n\r\n    <h5>H5:</h5>\r\n    <h5> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\r\n        reprehenderit repudiandae vitae. <sup>lorem</sup><sub>ipsum</sub></h5>\r\n\r\n    <h5>H6:</h5>\r\n    <h6> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\r\n        reprehenderit repudiandae vitae. <sup>lorem</sup><sub>ipsum</sub></h6>\r\n\r\n    <h5>p:</h5>\r\n    <p> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\r\n        reprehenderit repudiandae vitae. <sup>lorem</sup><sub>ipsum</sub></p>\r\n\r\n    <h5>a:</h5>\r\n    <a href='.'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cum eos expedita fugit libero\r\n        maiores nam, neque nostrum, pariatur quis sit voluptatem. Accusantium ad dicta est maiores quae.</a>\r\n\r\n    <h5>Highlight : mark tag</h5>\r\n    <p>You can use the mark tag to <mark>highlight</mark> text.</p>\r\n\r\n    <h5>Deleted part: del tag</h5>\r\n    <p><del>This line of text is meant to be treated as deleted text.</del></p>\r\n\r\n    <h5>Mark up text that is no longer correct: s tag</h5>\r\n    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\r\n\r\n    <h5>A text with  a new, inserted part: ins tag</h5>\r\n    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\r\n\r\n    <h5>Mark up a misspelled word with the u tag:</h5>\r\n    <p><u>This line of text will render as underlined</u></p>\r\n\r\n    <h5>Define a smaller text:</h5>\r\n    <p><small>This line of text is meant to be treated as fine print.</small></p>\r\n\r\n    <h5>Define important text in a document:</h5>\r\n    <p><strong>This line rendered as bold text.</strong></p>\r\n\r\n    <h5>Mark up emphasized text in a document:</h5>\r\n    <p><em>This line rendered as italicized text.</em></p>\r\n\r\n    <h5>Superscript text:</h5>\r\n    <p>This text contains <sup>superscript</sup> text.</p>\r\n\r\n    <h5>Subscript text:</h5>\r\n    <p>This text contains <sub>subscript</sub> text.</p>\r\n</HeadlineText>;\r\n\r\nexport const HeadlineWithText = Template.bind({});\r\nHeadlineWithText.args = {\r\n    customClass: \"\",\r\n}\r\n\r\n// start\r\nconst Template2 = (args) => <HeadlineText {...args} >\r\n    <p><b>Unordered List: </b></p>\r\n    <ul>\r\n        <li>one</li>\r\n        <li>two</li>\r\n        <li>three\r\n            <ul>\r\n                <li>four</li>\r\n                <li>five</li>\r\n                <li>six\r\n                    <ul>\r\n                        <li>seven</li>\r\n                        <li>eight</li>\r\n                        <li>nine\r\n                            <ul>\r\n                                <li>ten</li>\r\n                                <li>eleven</li>\r\n                                <li>twelve</li>\r\n                            </ul>\r\n                        </li>\r\n                        <li>thirteen</li>\r\n                    </ul>\r\n                </li>\r\n                <li>fourteen</li>\r\n            </ul>\r\n        </li>\r\n        <li>fifteen</li>\r\n        <li>sixteen</li>\r\n    </ul>\r\n\r\n    <p><b>Ordered List: </b></p>\r\n    <ol>\r\n        <li>one</li>\r\n        <li>two</li>\r\n        <li>three\r\n            <ol>\r\n                <li>four</li>\r\n                <li>five</li>\r\n                <li>six\r\n                    <ol>\r\n                        <li>seven</li>\r\n                        <li>eight</li>\r\n                        <li>nine\r\n                            <ol>\r\n                                <li>ten</li>\r\n                                <li>eleven</li>\r\n                                <li>twelve</li>\r\n                            </ol>\r\n                        </li>\r\n                        <li>thirteen</li>\r\n                    </ol>\r\n                </li>\r\n                <li>fourteen</li>\r\n            </ol>\r\n        </li>\r\n        <li>fifteen</li>\r\n        <li>sixteen</li>\r\n    </ol>\r\n</HeadlineText>;\r\n\r\nexport const List = Template2.bind({});\r\n\r\n\r\n\r\n// Start\r\nconst Template4 = (args) => <HeadlineText {...args} >\r\n    <blockquote cite=\"http://www.worldwildlife.org/who/index.html\">\r\n        For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.\r\n    </blockquote>\r\n    <p>Current AEM RTE implementation: <a href=\"#\"> Lorem ipsum dolor</a></p>\r\n    <p><b>I am RTE - Bold</b></p>\r\n    <p><i>I am RTE - Italic</i></p>\r\n    <p><u>I am RTE - Underline</u></p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE - Align Text Left <a href=\"#\"> Lorem ipsum dolor 11111111111111</a></p>\r\n    <p style={{ textAlign: \"center\" }}>I am RTE - Center Text</p>\r\n    <p style={{ textAlign: \"right\" }}>I am RTE - Align Text Right</p>\r\n    <p style={{ textAlign: \"left\" }}><a title=\"Alt Text\"\r\n        href=\"http://localhost:4502/editor.html/content/abbvie-haematologie/de/components/atoms/a0110-text.html#\">I am RTE - Hyperlink</a></p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE - Anchor</p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE<sup>Superscript</sup></p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE<sub>subscript</sub></p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE - Paragraph</p>\r\n    <h1>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 1<sup>4</sup>  <a href=\"#\"> Lorem ipsum dolor 11111111111111</a></h1>\r\n    <h2>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 2<sup>4</sup></h2>\r\n    <h3>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 3<sup>4</sup></h3>\r\n    <h4>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 4<sup>4</sup></h4>\r\n    <p>RTE List Bullet:</p>\r\n    <ul>\r\n        <li><span className=\"\">I am RTE-A</span></li>\r\n        <li>I am RTE-B\r\n            <ul>\r\n                <li>I am RTE-B1 <a href=\"#\"> Lorem ipsum dolor 11111111111111</a></li>\r\n                <li>I am RTE-B2</li>\r\n                <li>I am RTE-B3</li>\r\n            </ul>\r\n        </li>\r\n        <li>I am RTE-C</li>\r\n    </ul>\r\n    <p>RTE List Number:\r\n        <br></br>\r\n    </p>\r\n    <ol>\r\n        <li>I am RTE1</li>\r\n        <li>I am RTE2\r\n            <ol>\r\n                <li>I am RTE2.1</li>\r\n                <li>I am RTE2.2</li>\r\n                <li>I am RTE2.3</li>\r\n            </ol>\r\n        </li>\r\n        <li>I am RTE3</li>\r\n    </ol>\r\n\r\n    <section className='cmp-text section'>\r\n        <h1>A0110 / TEXT</h1>\r\n        <h1>Überschrift<sup>h1</sup> (h1) <sup>1, 2, 3, 4</sup></h1>\r\n        <h2>Überschrift<sup>h2</sup> (h2) <sup>5, 6, 7</sup></h2>\r\n        <h3>Überschrift<sup>h3</sup> (h3) <sup>8, 9</sup></h3>\r\n        <h4>Überschrift<sup>h4</sup> (h4) <sup>10</sup></h4>\r\n        <p>Copytext. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque, excepturi\r\n            exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam. Fugit\r\n            ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque,\r\n            excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam.\r\n            Fugit ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque,\r\n            excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam.\r\n            Fugit ipsam, vel.</p>\r\n        <p>A list:</p>\r\n        <ul>\r\n            <li>one</li>\r\n            <li>two</li>\r\n            <li>three\r\n                <ul>\r\n                    <li>four</li>\r\n                    <li>five</li>\r\n                    <li>six\r\n                        <ul>\r\n                            <li>seven</li>\r\n                            <li>eight</li>\r\n                            <li>nine\r\n                                <ul>\r\n                                    <li>ten</li>\r\n                                    <li>eleven</li>\r\n                                    <li>twelve</li>\r\n                                </ul>\r\n                            </li>\r\n                            <li>thirteen</li>\r\n                        </ul>\r\n                    </li>\r\n                    <li>fourteen</li>\r\n                </ul>\r\n            </li>\r\n            <li>fifteen</li>\r\n            <li>sixteen</li>\r\n        </ul>\r\n        <p>An enumeration:</p>\r\n        <ol>\r\n            <li>one</li>\r\n            <li>two</li>\r\n            <li>three\r\n                <ol>\r\n                    <li>four</li>\r\n                    <li>five</li>\r\n                    <li>six\r\n                        <ol>\r\n                            <li>seven</li>\r\n                            <li>eight</li>\r\n                            <li>nine\r\n                                <ol>\r\n                                    <li>ten</li>\r\n                                    <li>eleven</li>\r\n                                    <li>twelve</li>\r\n                                </ol>\r\n                            </li>\r\n                            <li>thirteen</li>\r\n                        </ol>\r\n                    </li>\r\n                    <li>fourteen</li>\r\n                </ol>\r\n            </li>\r\n            <li>fifteen</li>\r\n            <li>sixteen</li>\r\n        </ol>\r\n        <p>Checklist</p>\r\n        <ul className='checklist'>\r\n            <li className='checked'>Checked Lsit Item</li>\r\n            <li className='unchecked'>unchecked Lsit Item</li>\r\n        </ul>\r\n        <h3>h3</h3>\r\n        <ul>\r\n            <li><a href=\"#\">Link 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore\r\n                doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque\r\n                quibusdam totam. Fugit ipsam, vel.</a></li>\r\n            <li><a href=\"#\">Link 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore\r\n                doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis.</a></li>\r\n            <li><a href=\"#\">Link 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore\r\n                doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque\r\n                quibusdam totam. Fugit ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis\r\n                dolore doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque\r\n                eaque quibusdam totam. Fugit ipsam, vel.</a></li>\r\n            <li><a href=\"#\">Link 4</a></li>\r\n            <li><a href=\"#\">...</a></li>\r\n        </ul>\r\n        <h2>h2</h2>\r\n        <p>Copytext. Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href=\"#\">Commodi, eligendi error\r\n            incidunt ipsam nam natus</a> repellat veritatis voluptate voluptates. Aperiam consequuntur dolores doloribus\r\n            ducimus iure, perspiciatis qui ratione repudiandae rerum!</p>\r\n        <ul>\r\n            <li><i>Lorem ipsum dolor sit amet</i>: consectetur adipisicing elit. Aliquam, aspernatur autem blanditiis enim\r\n                eos esse eveniet exercitationem facilis fugit id minus neque optio quam quis quos rerum sunt temporibus totam.\r\n            </li>\r\n            <li><i>Lorem ipsum dolor sit amet</i>: consectetur adipisicing elit. Amet doloremque eum expedita id nemo omnis\r\n                recusandae tempora tempore veniam vitae! Ab deleniti maiores natus non odit reiciendis sint tenetur voluptate.\r\n            </li>\r\n            <li><i>Lorem ipsum</i>: Dolor sit amet, consectetur adipisicing elit. Amet consectetur consequatur ea earum eius\r\n                eveniet laborum laudantium nam, nemo nisi nostrum numquam odit perferendis perspiciatis quo repellat\r\n                repudiandae sequi. Nisi?</li>\r\n        </ul>\r\n        <h2>Kontaktdaten und Richtlinienaktualisierungen</h2>\r\n        <h3>Wie kann ich zu AbbVie Kontakt aufnehmen?</h3>\r\n        <p>Wenn Sie Fragen zur Nutzung, Änderung oder Löschung der an uns bereitgestellten personenbezogenen Daten haben\r\n            oder zukünftige Mitteilungen von AbbVie oder eines bestimmten AbbVie-Programms ablehnen möchten, kontaktieren\r\n            Sie uns, indem Sie einen „Kontakt“-Link auf der besuchten Webseite anklicken, oder senden Sie eine E-Mail an <a\r\n                href=\"mailto:info.de@abbvie.com\">info.de(at)abbvie(dot)com</a>. Bezüglich der Verarbeitung Ihrer\r\n            personenbezogenen Daten können Sie sich auch direkt mit dem Datenschutzbeauftragten unter <a\r\n                href=\"mailto:datenschutz.de@abbvie.com\">datenschutz.de(at)abbvie(dot)com</a> in Verbindung setzen. Sie können\r\n            auch ein Schreiben an folgende Adresse richten oder sich telefonisch mit uns in Verbindung setzen:</p>\r\n        <p>\r\n            AbbVie Deutschland GmbH & Co. KG<br></br>\r\n            Mainzer Straße 81<br></br>\r\n            65189 Wiesbaden<br></br>\r\n            eMail: <a href=\"mailto:info.de@abbvie.com\">info.de(at)abbvie(dot)com</a><br></br>\r\n            Tel.: +49 (0)611 1720 - 0<br></br>\r\n            Fax.: +49 (0)611 1720 1244\r\n        </p>\r\n        <p>Geben Sie bitte in Ihren Mitteilungen an uns die für die Registrierung verwendete E-Mail-Adresse (sofern\r\n            zutreffend), die URL der Webseite oder das AbbVie-Programm, für das Sie personenbezogene Daten eingegeben haben\r\n            (z. B. www.AbbVie.de usw.) sowie eine detaillierte Beschreibung Ihres Anliegens an.</p>\r\n        <h3>Wie erfahre ich, ob AbbVie diese Datenschutzrichtlinie aktualisiert hat?</h3>\r\n        <p>Unbeschadet Ihrer Rechte nach geltendem Gesetz behält sich AbbVie vor, diese Datenschutzrichtlinie zu ändern\r\n            und zu versionieren, um technischen Weiterentwicklungen, Gesetzesänderungen und Vorschriften und guten\r\n            Geschäftspraktiken zu genügen.</p>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem ipsum iste laboriosam qui, quia\r\n            repellendus vel! A at ducimus esse illo incidunt nostrum optio quas repudiandae rerum, velit. Tempora.</p>\r\n        <h1>h1 Strukturnachbildung</h1>\r\n        <h2>h2 Unterüberschrift</h2>\r\n        <h3>1. h3</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\r\n            reprehenderit repudiandae vitae. Aperiam blanditiis distinctio earum ex impedit iure labore natus, nihil\r\n            similique ut voluptas.</p>\r\n        <h3>2. h3</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores cumque deleniti dolorum eveniet\r\n            fugiat iure iusto laboriosam magni nam nemo nulla optio provident quasi rem rerum temporibus, velit veritatis.\r\n        </p>\r\n        <h3>3. h3</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cum eos expedita fugit libero\r\n            maiores nam, neque nostrum, pariatur quis sit voluptatem. Accusantium ad dicta est maiores quae.</p>\r\n        <p>usw.</p>\r\n        <h1>Listen</h1>\r\n        <h2>ul</h2>\r\n        <ul>\r\n            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quaerat, repudiandae. Ad in perspiciatis\r\n                tempore? Aliquam aliquid consequatur consequuntur est ex, inventore itaque maxime numquam, possimus\r\n                praesentium reiciendis, sequi vero.</li>\r\n            <li>Aspernatur deleniti, distinctio doloribus eum ex iusto nemo nesciunt quasi qui quisquam repudiandae saepe\r\n                voluptatibus. Dignissimos enim, et exercitationem fugit harum molestias necessitatibus nesciunt omnis quo\r\n                recusandae sint tenetur totam.</li>\r\n            <li>Excepturi ipsum minus odit officia reiciendis, rerum! Architecto deserunt dicta esse ex excepturi fugiat id\r\n                magni, nostrum odio optio quaerat recusandae repellat saepe sequi suscipit tempore ut veniam veritatis\r\n                voluptas.</li>\r\n        </ul>\r\n        <h2>ol</h2>\r\n        <ol>\r\n            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias dignissimos doloremque eius enim esse\r\n                illo incidunt, laborum neque nisi, nulla obcaecati officiis pariatur possimus quia quisquam, vitae. Hic,\r\n                sapiente?</li>\r\n            <li>Aperiam atque, et ex laboriosam praesentium soluta? Ad architecto assumenda consectetur deserunt dolorem\r\n                ducimus ea enim excepturi ipsa, minima mollitia neque, officiis quo quod recusandae, repellat tempora? Aperiam\r\n                eos, inventore.</li>\r\n            <li>Aperiam culpa cum eius neque soluta! Alias aliquam aliquid, architecto culpa doloribus ea eligendi eveniet\r\n                excepturi iusto magni maiores pariatur quam quas repellat repellendus saepe tenetur totam ut, veritatis\r\n                voluptatem?</li>\r\n        </ol>\r\n        <br></br>\r\n        <h2>Inline Text Elements</h2>\r\n        <p>You can use the mark tag to <mark>highlight</mark> text.</p>\r\n        <p><del>This line of text is meant to be treated as deleted text.</del></p>\r\n        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\r\n        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\r\n        <p><u>This line of text will render as underlined</u></p>\r\n        <p><small>This line of text is meant to be treated as fine print.</small></p>\r\n        <p><strong>This line rendered as bold text.</strong></p>\r\n        <p><em>This line rendered as italicized text.</em></p>\r\n        <br></br>\r\n        <h2>Copytext Test</h2>\r\n        <p>Copytext. Lorem Impsum. Das ist ein <a href=\"#\" title=\"TITLE\">Link im Fließtext</a>. Dieses Wort ist\r\n            <em>betont</em> (em). Dieses Wort ist <i>kursiv</i> (i). Dieses Wort ist <strong>stark betont</strong> (strong).\r\n            Dieses Wort ist <b>fett</b> (b). Dieses Wort ist <sup>hochgestellt</sup> (sup). Dieses Wort ist\r\n            <sub>tiefgestellt</sub> (sub).</p>\r\n        <br></br>\r\n        <h2>Special Chars Test</h2>\r\n        <p><a\r\n            href=\"http://de.wikipedia.org/wiki/L%C3%B6wen-essender_Dichter_in_der_Steinh%C3%B6hle\">http://de.wikipedia.org/wiki/L%C3%B6wen-essender_Dichter_in_der_Steinh%C3%B6hle</a>\r\n        </p>\r\n        <p>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz, 0123456789<br></br>\r\n            1234567890„\"@!\"\"§$ %{\"&\"}/()=?{[]} \\*+~'#{'>'}{\"<\"}-,;.:éè-äöu »«ß<br></br>\r\n            öäüÖÄÜ!\"§$%{\"&\"}/()=?@€,;.:-_+*~#'²³{[]}<br></br>\r\n            ®™</p>\r\n        <br></br>\r\n        <h2>Footnotes (simulation)</h2>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dicta eveniet ipsam labore laborum maiores,\r\n            nihil officia quisquam quo repellat sit suscipit ullam unde ut veritatis vero. Consequatur,\r\n            exercitationem?<sup>42</sup></p>\r\n        <p>Nachweis der 17p-Deletion mittels Vysis CLL FISH Sonden Kit.<sup>1,2</sup></p>\r\n        <p>† Die mediane Zeit unter Therapie zum Zeitpunkt der Beurteilung betrug 12 Monate (Spannweite: 0 – 22\r\n            Monate).<sup>1,2</sup></p>\r\n        <p>‡ Die Wirksamkeitsbeurteilung durch den Prüfer wird für 158 Patienten (Expansionskohorte zum Thema Sicherheit)\r\n            gezeigt. Die mediane Behandlungsdauer für diese 158 Patienten betrug 17 Monate (Spannweite: 0 – 34\r\n            Monate).<sup>1</sup></p>\r\n        <p>†, ‡, ♥, ♠, ♣, ♦</p>\r\n    </section>\r\n</HeadlineText>;\r\n\r\nexport const HeadlineTextLine = Template4.bind({});\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "HeadlineWithText": {
    "startLoc": {
      "col": 17,
      "line": 24
    },
    "endLoc": {
      "col": 15,
      "line": 82
    },
    "startBody": {
      "col": 17,
      "line": 24
    },
    "endBody": {
      "col": 15,
      "line": 82
    }
  },
  "List": {
    "startLoc": {
      "col": 18,
      "line": 90
    },
    "endLoc": {
      "col": 15,
      "line": 148
    },
    "startBody": {
      "col": 18,
      "line": 90
    },
    "endBody": {
      "col": 15,
      "line": 148
    }
  },
  "HeadlineTextLine": {
    "startLoc": {
      "col": 18,
      "line": 155
    },
    "endLoc": {
      "col": 15,
      "line": 410
    },
    "startBody": {
      "col": 18,
      "line": 155
    },
    "endBody": {
      "col": 15,
      "line": 410
    }
  }
};




var gapObject = {
  "Default": '',
  "No Gap": 'mb-0'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  parameters: {
    "storySource": {
      "source": "import React from 'react';\r\nimport HeadlineText from './HeadlineText';\r\n\r\n\r\nconst gapObject = {\r\n    \"Default\": '',\r\n    \"No Gap\": 'mb-0'\r\n}\r\n\r\nexport default {\r\n    title: 'Molecules/Headline Text',\r\n    component: HeadlineText,\r\n    argTypes: {\r\n        orientation: {\r\n            control: { type: \"inline-check\", options: [\"orientation-right\"] }\r\n        },\r\n        gap: {\r\n            control: { type: \"select\", options: gapObject }\r\n        },\r\n    }\r\n};\r\n\r\n// start\r\nconst Template = (args) => <HeadlineText {...args} >\r\n    <h5>H1:</h5>\r\n    <h1> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. <sup>lorem</sup><sub>ipsum</sub></h1>\r\n\r\n    <h5>H2:</h5>\r\n    <h2> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit <sup>lorem</sup><sub>ipsum</sub></h2>\r\n\r\n    <h5>H3:</h5>\r\n    <h3>H3: Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione  <sup>lorem</sup><sub>ipsum</sub></h3>\r\n\r\n    <h5>H3:</h5>\r\n    <h4> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque <sup>lorem</sup><sub>ipsum</sub></h4>\r\n\r\n    <h5>H5:</h5>\r\n    <h5> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\r\n        reprehenderit repudiandae vitae. <sup>lorem</sup><sub>ipsum</sub></h5>\r\n\r\n    <h5>H6:</h5>\r\n    <h6> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\r\n        reprehenderit repudiandae vitae. <sup>lorem</sup><sub>ipsum</sub></h6>\r\n\r\n    <h5>p:</h5>\r\n    <p> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\r\n        reprehenderit repudiandae vitae. <sup>lorem</sup><sub>ipsum</sub></p>\r\n\r\n    <h5>a:</h5>\r\n    <a href='.'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cum eos expedita fugit libero\r\n        maiores nam, neque nostrum, pariatur quis sit voluptatem. Accusantium ad dicta est maiores quae.</a>\r\n\r\n    <h5>Highlight : mark tag</h5>\r\n    <p>You can use the mark tag to <mark>highlight</mark> text.</p>\r\n\r\n    <h5>Deleted part: del tag</h5>\r\n    <p><del>This line of text is meant to be treated as deleted text.</del></p>\r\n\r\n    <h5>Mark up text that is no longer correct: s tag</h5>\r\n    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\r\n\r\n    <h5>A text with  a new, inserted part: ins tag</h5>\r\n    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\r\n\r\n    <h5>Mark up a misspelled word with the u tag:</h5>\r\n    <p><u>This line of text will render as underlined</u></p>\r\n\r\n    <h5>Define a smaller text:</h5>\r\n    <p><small>This line of text is meant to be treated as fine print.</small></p>\r\n\r\n    <h5>Define important text in a document:</h5>\r\n    <p><strong>This line rendered as bold text.</strong></p>\r\n\r\n    <h5>Mark up emphasized text in a document:</h5>\r\n    <p><em>This line rendered as italicized text.</em></p>\r\n\r\n    <h5>Superscript text:</h5>\r\n    <p>This text contains <sup>superscript</sup> text.</p>\r\n\r\n    <h5>Subscript text:</h5>\r\n    <p>This text contains <sub>subscript</sub> text.</p>\r\n</HeadlineText>;\r\n\r\nexport const HeadlineWithText = Template.bind({});\r\nHeadlineWithText.args = {\r\n    customClass: \"\",\r\n}\r\n\r\n// start\r\nconst Template2 = (args) => <HeadlineText {...args} >\r\n    <p><b>Unordered List: </b></p>\r\n    <ul>\r\n        <li>one</li>\r\n        <li>two</li>\r\n        <li>three\r\n            <ul>\r\n                <li>four</li>\r\n                <li>five</li>\r\n                <li>six\r\n                    <ul>\r\n                        <li>seven</li>\r\n                        <li>eight</li>\r\n                        <li>nine\r\n                            <ul>\r\n                                <li>ten</li>\r\n                                <li>eleven</li>\r\n                                <li>twelve</li>\r\n                            </ul>\r\n                        </li>\r\n                        <li>thirteen</li>\r\n                    </ul>\r\n                </li>\r\n                <li>fourteen</li>\r\n            </ul>\r\n        </li>\r\n        <li>fifteen</li>\r\n        <li>sixteen</li>\r\n    </ul>\r\n\r\n    <p><b>Ordered List: </b></p>\r\n    <ol>\r\n        <li>one</li>\r\n        <li>two</li>\r\n        <li>three\r\n            <ol>\r\n                <li>four</li>\r\n                <li>five</li>\r\n                <li>six\r\n                    <ol>\r\n                        <li>seven</li>\r\n                        <li>eight</li>\r\n                        <li>nine\r\n                            <ol>\r\n                                <li>ten</li>\r\n                                <li>eleven</li>\r\n                                <li>twelve</li>\r\n                            </ol>\r\n                        </li>\r\n                        <li>thirteen</li>\r\n                    </ol>\r\n                </li>\r\n                <li>fourteen</li>\r\n            </ol>\r\n        </li>\r\n        <li>fifteen</li>\r\n        <li>sixteen</li>\r\n    </ol>\r\n</HeadlineText>;\r\n\r\nexport const List = Template2.bind({});\r\n\r\n\r\n\r\n// Start\r\nconst Template4 = (args) => <HeadlineText {...args} >\r\n    <blockquote cite=\"http://www.worldwildlife.org/who/index.html\">\r\n        For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.\r\n    </blockquote>\r\n    <p>Current AEM RTE implementation: <a href=\"#\"> Lorem ipsum dolor</a></p>\r\n    <p><b>I am RTE - Bold</b></p>\r\n    <p><i>I am RTE - Italic</i></p>\r\n    <p><u>I am RTE - Underline</u></p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE - Align Text Left <a href=\"#\"> Lorem ipsum dolor 11111111111111</a></p>\r\n    <p style={{ textAlign: \"center\" }}>I am RTE - Center Text</p>\r\n    <p style={{ textAlign: \"right\" }}>I am RTE - Align Text Right</p>\r\n    <p style={{ textAlign: \"left\" }}><a title=\"Alt Text\"\r\n        href=\"http://localhost:4502/editor.html/content/abbvie-haematologie/de/components/atoms/a0110-text.html#\">I am RTE - Hyperlink</a></p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE - Anchor</p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE<sup>Superscript</sup></p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE<sub>subscript</sub></p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE - Paragraph</p>\r\n    <h1>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 1<sup>4</sup>  <a href=\"#\"> Lorem ipsum dolor 11111111111111</a></h1>\r\n    <h2>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 2<sup>4</sup></h2>\r\n    <h3>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 3<sup>4</sup></h3>\r\n    <h4>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 4<sup>4</sup></h4>\r\n    <p>RTE List Bullet:</p>\r\n    <ul>\r\n        <li><span className=\"\">I am RTE-A</span></li>\r\n        <li>I am RTE-B\r\n            <ul>\r\n                <li>I am RTE-B1 <a href=\"#\"> Lorem ipsum dolor 11111111111111</a></li>\r\n                <li>I am RTE-B2</li>\r\n                <li>I am RTE-B3</li>\r\n            </ul>\r\n        </li>\r\n        <li>I am RTE-C</li>\r\n    </ul>\r\n    <p>RTE List Number:\r\n        <br></br>\r\n    </p>\r\n    <ol>\r\n        <li>I am RTE1</li>\r\n        <li>I am RTE2\r\n            <ol>\r\n                <li>I am RTE2.1</li>\r\n                <li>I am RTE2.2</li>\r\n                <li>I am RTE2.3</li>\r\n            </ol>\r\n        </li>\r\n        <li>I am RTE3</li>\r\n    </ol>\r\n\r\n    <section className='cmp-text section'>\r\n        <h1>A0110 / TEXT</h1>\r\n        <h1>Überschrift<sup>h1</sup> (h1) <sup>1, 2, 3, 4</sup></h1>\r\n        <h2>Überschrift<sup>h2</sup> (h2) <sup>5, 6, 7</sup></h2>\r\n        <h3>Überschrift<sup>h3</sup> (h3) <sup>8, 9</sup></h3>\r\n        <h4>Überschrift<sup>h4</sup> (h4) <sup>10</sup></h4>\r\n        <p>Copytext. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque, excepturi\r\n            exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam. Fugit\r\n            ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque,\r\n            excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam.\r\n            Fugit ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque,\r\n            excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam.\r\n            Fugit ipsam, vel.</p>\r\n        <p>A list:</p>\r\n        <ul>\r\n            <li>one</li>\r\n            <li>two</li>\r\n            <li>three\r\n                <ul>\r\n                    <li>four</li>\r\n                    <li>five</li>\r\n                    <li>six\r\n                        <ul>\r\n                            <li>seven</li>\r\n                            <li>eight</li>\r\n                            <li>nine\r\n                                <ul>\r\n                                    <li>ten</li>\r\n                                    <li>eleven</li>\r\n                                    <li>twelve</li>\r\n                                </ul>\r\n                            </li>\r\n                            <li>thirteen</li>\r\n                        </ul>\r\n                    </li>\r\n                    <li>fourteen</li>\r\n                </ul>\r\n            </li>\r\n            <li>fifteen</li>\r\n            <li>sixteen</li>\r\n        </ul>\r\n        <p>An enumeration:</p>\r\n        <ol>\r\n            <li>one</li>\r\n            <li>two</li>\r\n            <li>three\r\n                <ol>\r\n                    <li>four</li>\r\n                    <li>five</li>\r\n                    <li>six\r\n                        <ol>\r\n                            <li>seven</li>\r\n                            <li>eight</li>\r\n                            <li>nine\r\n                                <ol>\r\n                                    <li>ten</li>\r\n                                    <li>eleven</li>\r\n                                    <li>twelve</li>\r\n                                </ol>\r\n                            </li>\r\n                            <li>thirteen</li>\r\n                        </ol>\r\n                    </li>\r\n                    <li>fourteen</li>\r\n                </ol>\r\n            </li>\r\n            <li>fifteen</li>\r\n            <li>sixteen</li>\r\n        </ol>\r\n        <p>Checklist</p>\r\n        <ul className='checklist'>\r\n            <li className='checked'>Checked Lsit Item</li>\r\n            <li className='unchecked'>unchecked Lsit Item</li>\r\n        </ul>\r\n        <h3>h3</h3>\r\n        <ul>\r\n            <li><a href=\"#\">Link 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore\r\n                doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque\r\n                quibusdam totam. Fugit ipsam, vel.</a></li>\r\n            <li><a href=\"#\">Link 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore\r\n                doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis.</a></li>\r\n            <li><a href=\"#\">Link 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore\r\n                doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque\r\n                quibusdam totam. Fugit ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis\r\n                dolore doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque\r\n                eaque quibusdam totam. Fugit ipsam, vel.</a></li>\r\n            <li><a href=\"#\">Link 4</a></li>\r\n            <li><a href=\"#\">...</a></li>\r\n        </ul>\r\n        <h2>h2</h2>\r\n        <p>Copytext. Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href=\"#\">Commodi, eligendi error\r\n            incidunt ipsam nam natus</a> repellat veritatis voluptate voluptates. Aperiam consequuntur dolores doloribus\r\n            ducimus iure, perspiciatis qui ratione repudiandae rerum!</p>\r\n        <ul>\r\n            <li><i>Lorem ipsum dolor sit amet</i>: consectetur adipisicing elit. Aliquam, aspernatur autem blanditiis enim\r\n                eos esse eveniet exercitationem facilis fugit id minus neque optio quam quis quos rerum sunt temporibus totam.\r\n            </li>\r\n            <li><i>Lorem ipsum dolor sit amet</i>: consectetur adipisicing elit. Amet doloremque eum expedita id nemo omnis\r\n                recusandae tempora tempore veniam vitae! Ab deleniti maiores natus non odit reiciendis sint tenetur voluptate.\r\n            </li>\r\n            <li><i>Lorem ipsum</i>: Dolor sit amet, consectetur adipisicing elit. Amet consectetur consequatur ea earum eius\r\n                eveniet laborum laudantium nam, nemo nisi nostrum numquam odit perferendis perspiciatis quo repellat\r\n                repudiandae sequi. Nisi?</li>\r\n        </ul>\r\n        <h2>Kontaktdaten und Richtlinienaktualisierungen</h2>\r\n        <h3>Wie kann ich zu AbbVie Kontakt aufnehmen?</h3>\r\n        <p>Wenn Sie Fragen zur Nutzung, Änderung oder Löschung der an uns bereitgestellten personenbezogenen Daten haben\r\n            oder zukünftige Mitteilungen von AbbVie oder eines bestimmten AbbVie-Programms ablehnen möchten, kontaktieren\r\n            Sie uns, indem Sie einen „Kontakt“-Link auf der besuchten Webseite anklicken, oder senden Sie eine E-Mail an <a\r\n                href=\"mailto:info.de@abbvie.com\">info.de(at)abbvie(dot)com</a>. Bezüglich der Verarbeitung Ihrer\r\n            personenbezogenen Daten können Sie sich auch direkt mit dem Datenschutzbeauftragten unter <a\r\n                href=\"mailto:datenschutz.de@abbvie.com\">datenschutz.de(at)abbvie(dot)com</a> in Verbindung setzen. Sie können\r\n            auch ein Schreiben an folgende Adresse richten oder sich telefonisch mit uns in Verbindung setzen:</p>\r\n        <p>\r\n            AbbVie Deutschland GmbH & Co. KG<br></br>\r\n            Mainzer Straße 81<br></br>\r\n            65189 Wiesbaden<br></br>\r\n            eMail: <a href=\"mailto:info.de@abbvie.com\">info.de(at)abbvie(dot)com</a><br></br>\r\n            Tel.: +49 (0)611 1720 - 0<br></br>\r\n            Fax.: +49 (0)611 1720 1244\r\n        </p>\r\n        <p>Geben Sie bitte in Ihren Mitteilungen an uns die für die Registrierung verwendete E-Mail-Adresse (sofern\r\n            zutreffend), die URL der Webseite oder das AbbVie-Programm, für das Sie personenbezogene Daten eingegeben haben\r\n            (z. B. www.AbbVie.de usw.) sowie eine detaillierte Beschreibung Ihres Anliegens an.</p>\r\n        <h3>Wie erfahre ich, ob AbbVie diese Datenschutzrichtlinie aktualisiert hat?</h3>\r\n        <p>Unbeschadet Ihrer Rechte nach geltendem Gesetz behält sich AbbVie vor, diese Datenschutzrichtlinie zu ändern\r\n            und zu versionieren, um technischen Weiterentwicklungen, Gesetzesänderungen und Vorschriften und guten\r\n            Geschäftspraktiken zu genügen.</p>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem ipsum iste laboriosam qui, quia\r\n            repellendus vel! A at ducimus esse illo incidunt nostrum optio quas repudiandae rerum, velit. Tempora.</p>\r\n        <h1>h1 Strukturnachbildung</h1>\r\n        <h2>h2 Unterüberschrift</h2>\r\n        <h3>1. h3</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\r\n            reprehenderit repudiandae vitae. Aperiam blanditiis distinctio earum ex impedit iure labore natus, nihil\r\n            similique ut voluptas.</p>\r\n        <h3>2. h3</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores cumque deleniti dolorum eveniet\r\n            fugiat iure iusto laboriosam magni nam nemo nulla optio provident quasi rem rerum temporibus, velit veritatis.\r\n        </p>\r\n        <h3>3. h3</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cum eos expedita fugit libero\r\n            maiores nam, neque nostrum, pariatur quis sit voluptatem. Accusantium ad dicta est maiores quae.</p>\r\n        <p>usw.</p>\r\n        <h1>Listen</h1>\r\n        <h2>ul</h2>\r\n        <ul>\r\n            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quaerat, repudiandae. Ad in perspiciatis\r\n                tempore? Aliquam aliquid consequatur consequuntur est ex, inventore itaque maxime numquam, possimus\r\n                praesentium reiciendis, sequi vero.</li>\r\n            <li>Aspernatur deleniti, distinctio doloribus eum ex iusto nemo nesciunt quasi qui quisquam repudiandae saepe\r\n                voluptatibus. Dignissimos enim, et exercitationem fugit harum molestias necessitatibus nesciunt omnis quo\r\n                recusandae sint tenetur totam.</li>\r\n            <li>Excepturi ipsum minus odit officia reiciendis, rerum! Architecto deserunt dicta esse ex excepturi fugiat id\r\n                magni, nostrum odio optio quaerat recusandae repellat saepe sequi suscipit tempore ut veniam veritatis\r\n                voluptas.</li>\r\n        </ul>\r\n        <h2>ol</h2>\r\n        <ol>\r\n            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias dignissimos doloremque eius enim esse\r\n                illo incidunt, laborum neque nisi, nulla obcaecati officiis pariatur possimus quia quisquam, vitae. Hic,\r\n                sapiente?</li>\r\n            <li>Aperiam atque, et ex laboriosam praesentium soluta? Ad architecto assumenda consectetur deserunt dolorem\r\n                ducimus ea enim excepturi ipsa, minima mollitia neque, officiis quo quod recusandae, repellat tempora? Aperiam\r\n                eos, inventore.</li>\r\n            <li>Aperiam culpa cum eius neque soluta! Alias aliquam aliquid, architecto culpa doloribus ea eligendi eveniet\r\n                excepturi iusto magni maiores pariatur quam quas repellat repellendus saepe tenetur totam ut, veritatis\r\n                voluptatem?</li>\r\n        </ol>\r\n        <br></br>\r\n        <h2>Inline Text Elements</h2>\r\n        <p>You can use the mark tag to <mark>highlight</mark> text.</p>\r\n        <p><del>This line of text is meant to be treated as deleted text.</del></p>\r\n        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\r\n        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\r\n        <p><u>This line of text will render as underlined</u></p>\r\n        <p><small>This line of text is meant to be treated as fine print.</small></p>\r\n        <p><strong>This line rendered as bold text.</strong></p>\r\n        <p><em>This line rendered as italicized text.</em></p>\r\n        <br></br>\r\n        <h2>Copytext Test</h2>\r\n        <p>Copytext. Lorem Impsum. Das ist ein <a href=\"#\" title=\"TITLE\">Link im Fließtext</a>. Dieses Wort ist\r\n            <em>betont</em> (em). Dieses Wort ist <i>kursiv</i> (i). Dieses Wort ist <strong>stark betont</strong> (strong).\r\n            Dieses Wort ist <b>fett</b> (b). Dieses Wort ist <sup>hochgestellt</sup> (sup). Dieses Wort ist\r\n            <sub>tiefgestellt</sub> (sub).</p>\r\n        <br></br>\r\n        <h2>Special Chars Test</h2>\r\n        <p><a\r\n            href=\"http://de.wikipedia.org/wiki/L%C3%B6wen-essender_Dichter_in_der_Steinh%C3%B6hle\">http://de.wikipedia.org/wiki/L%C3%B6wen-essender_Dichter_in_der_Steinh%C3%B6hle</a>\r\n        </p>\r\n        <p>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz, 0123456789<br></br>\r\n            1234567890„\"@!\"\"§$ %{\"&\"}/()=?{[]} \\*+~'#{'>'}{\"<\"}-,;.:éè-äöu »«ß<br></br>\r\n            öäüÖÄÜ!\"§$%{\"&\"}/()=?@€,;.:-_+*~#'²³{[]}<br></br>\r\n            ®™</p>\r\n        <br></br>\r\n        <h2>Footnotes (simulation)</h2>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dicta eveniet ipsam labore laborum maiores,\r\n            nihil officia quisquam quo repellat sit suscipit ullam unde ut veritatis vero. Consequatur,\r\n            exercitationem?<sup>42</sup></p>\r\n        <p>Nachweis der 17p-Deletion mittels Vysis CLL FISH Sonden Kit.<sup>1,2</sup></p>\r\n        <p>† Die mediane Zeit unter Therapie zum Zeitpunkt der Beurteilung betrug 12 Monate (Spannweite: 0 – 22\r\n            Monate).<sup>1,2</sup></p>\r\n        <p>‡ Die Wirksamkeitsbeurteilung durch den Prüfer wird für 158 Patienten (Expansionskohorte zum Thema Sicherheit)\r\n            gezeigt. Die mediane Behandlungsdauer für diese 158 Patienten betrug 17 Monate (Spannweite: 0 – 34\r\n            Monate).<sup>1</sup></p>\r\n        <p>†, ‡, ♥, ♠, ♣, ♦</p>\r\n    </section>\r\n</HeadlineText>;\r\n\r\nexport const HeadlineTextLine = Template4.bind({});\r\n\r\n",
      "locationsMap": {
        "headline-with-text": {
          "startLoc": {
            "col": 17,
            "line": 24
          },
          "endLoc": {
            "col": 15,
            "line": 82
          },
          "startBody": {
            "col": 17,
            "line": 24
          },
          "endBody": {
            "col": 15,
            "line": 82
          }
        },
        "list": {
          "startLoc": {
            "col": 18,
            "line": 90
          },
          "endLoc": {
            "col": 15,
            "line": 148
          },
          "startBody": {
            "col": 18,
            "line": 90
          },
          "endBody": {
            "col": 15,
            "line": 148
          }
        },
        "headline-text-line": {
          "startLoc": {
            "col": 18,
            "line": 155
          },
          "endLoc": {
            "col": 15,
            "line": 410
          },
          "startBody": {
            "col": 18,
            "line": 155
          },
          "endBody": {
            "col": 15,
            "line": 410
          }
        }
      }
    }
  },
  title: 'Molecules/Headline Text',
  component: _HeadlineText__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  argTypes: {
    orientation: {
      control: {
        type: "inline-check",
        options: ["orientation-right"]
      }
    },
    gap: {
      control: {
        type: "select",
        options: gapObject
      }
    }
  }
}); // start

var Template = function Template(args) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_HeadlineText__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({}, args, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h5", {
      children: "H1:"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("h1", {
      children: [" Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "lorem"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sub", {
        children: "ipsum"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h5", {
      children: "H2:"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("h2", {
      children: [" Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "lorem"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sub", {
        children: "ipsum"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h5", {
      children: "H3:"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("h3", {
      children: ["H3: Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione  ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "lorem"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sub", {
        children: "ipsum"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h5", {
      children: "H3:"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("h4", {
      children: [" Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "lorem"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sub", {
        children: "ipsum"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h5", {
      children: "H5:"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("h5", {
      children: [" Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat reprehenderit repudiandae vitae. ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "lorem"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sub", {
        children: "ipsum"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h5", {
      children: "H6:"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("h6", {
      children: [" Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat reprehenderit repudiandae vitae. ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "lorem"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sub", {
        children: "ipsum"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h5", {
      children: "p:"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
      children: [" Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat reprehenderit repudiandae vitae. ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "lorem"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sub", {
        children: "ipsum"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h5", {
      children: "a:"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
      href: ".",
      children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cum eos expedita fugit libero maiores nam, neque nostrum, pariatur quis sit voluptatem. Accusantium ad dicta est maiores quae."
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h5", {
      children: "Highlight : mark tag"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
      children: ["You can use the mark tag to ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("mark", {
        children: "highlight"
      }), " text."]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h5", {
      children: "Deleted part: del tag"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("del", {
        children: "This line of text is meant to be treated as deleted text."
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h5", {
      children: "Mark up text that is no longer correct: s tag"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("s", {
        children: "This line of text is meant to be treated as no longer accurate."
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h5", {
      children: "A text with  a new, inserted part: ins tag"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ins", {
        children: "This line of text is meant to be treated as an addition to the document."
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h5", {
      children: "Mark up a misspelled word with the u tag:"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("u", {
        children: "This line of text will render as underlined"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h5", {
      children: "Define a smaller text:"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("small", {
        children: "This line of text is meant to be treated as fine print."
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h5", {
      children: "Define important text in a document:"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("strong", {
        children: "This line rendered as bold text."
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h5", {
      children: "Mark up emphasized text in a document:"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("em", {
        children: "This line rendered as italicized text."
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h5", {
      children: "Superscript text:"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
      children: ["This text contains ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "superscript"
      }), " text."]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h5", {
      children: "Subscript text:"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
      children: ["This text contains ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sub", {
        children: "subscript"
      }), " text."]
    })]
  }));
};

Template.displayName = "Template";
var HeadlineWithText = Template.bind({});
;
;
HeadlineWithText.args = {
  customClass: ""
}; // start

var Template2 = function Template2(args) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_HeadlineText__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({}, args, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("b", {
        children: "Unordered List: "
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ul", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
        children: "one"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
        children: "two"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
        children: ["three", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ul", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
            children: "four"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
            children: "five"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
            children: ["six", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                children: "seven"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                children: "eight"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
                children: ["nine", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ul", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                    children: "ten"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                    children: "eleven"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                    children: "twelve"
                  })]
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                children: "thirteen"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
            children: "fourteen"
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
        children: "fifteen"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
        children: "sixteen"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("b", {
        children: "Ordered List: "
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ol", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
        children: "one"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
        children: "two"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
        children: ["three", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ol", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
            children: "four"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
            children: "five"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
            children: ["six", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ol", {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                children: "seven"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                children: "eight"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
                children: ["nine", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ol", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                    children: "ten"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                    children: "eleven"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                    children: "twelve"
                  })]
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                children: "thirteen"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
            children: "fourteen"
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
        children: "fifteen"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
        children: "sixteen"
      })]
    })]
  }));
};

Template2.displayName = "Template2";
var List = Template2.bind({});
;
; // Start

var Template4 = function Template4(args) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_HeadlineText__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({}, args, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("blockquote", {
      cite: "http://www.worldwildlife.org/who/index.html",
      children: "For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally."
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
      children: ["Current AEM RTE implementation: ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
        href: "#",
        children: " Lorem ipsum dolor"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("b", {
        children: "I am RTE - Bold"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("i", {
        children: "I am RTE - Italic"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("u", {
        children: "I am RTE - Underline"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
      style: {
        textAlign: "left"
      },
      children: ["I am RTE - Align Text Left ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
        href: "#",
        children: " Lorem ipsum dolor 11111111111111"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      style: {
        textAlign: "center"
      },
      children: "I am RTE - Center Text"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      style: {
        textAlign: "right"
      },
      children: "I am RTE - Align Text Right"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      style: {
        textAlign: "left"
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
        title: "Alt Text",
        href: "http://localhost:4502/editor.html/content/abbvie-haematologie/de/components/atoms/a0110-text.html#",
        children: "I am RTE - Hyperlink"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      style: {
        textAlign: "left"
      },
      children: "I am RTE - Anchor"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
      style: {
        textAlign: "left"
      },
      children: ["I am RTE", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "Superscript"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
      style: {
        textAlign: "left"
      },
      children: ["I am RTE", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sub", {
        children: "subscript"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      style: {
        textAlign: "left"
      },
      children: "I am RTE - Paragraph"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("h1", {
      children: ["I", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "1"
      }), " am", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "2"
      }), " RTE", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "3"
      }), " - Headline 1", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "4"
      }), "  ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
        href: "#",
        children: " Lorem ipsum dolor 11111111111111"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("h2", {
      children: ["I", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "1"
      }), " am", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "2"
      }), " RTE", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "3"
      }), " - Headline 2", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "4"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("h3", {
      children: ["I", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "1"
      }), " am", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "2"
      }), " RTE", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "3"
      }), " - Headline 3", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "4"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("h4", {
      children: ["I", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "1"
      }), " am", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "2"
      }), " RTE", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "3"
      }), " - Headline 4", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
        children: "4"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      children: "RTE List Bullet:"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ul", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", {
          className: "",
          children: "I am RTE-A"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
        children: ["I am RTE-B", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ul", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
            children: ["I am RTE-B1 ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
              href: "#",
              children: " Lorem ipsum dolor 11111111111111"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
            children: "I am RTE-B2"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
            children: "I am RTE-B3"
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
        children: "I am RTE-C"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
      children: ["RTE List Number:", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", {})]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ol", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
        children: "I am RTE1"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
        children: ["I am RTE2", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ol", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
            children: "I am RTE2.1"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
            children: "I am RTE2.2"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
            children: "I am RTE2.3"
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
        children: "I am RTE3"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("section", {
      className: "cmp-text section",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h1", {
        children: "A0110 / TEXT"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("h1", {
        children: ["\xDCberschrift", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
          children: "h1"
        }), " (h1) ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
          children: "1, 2, 3, 4"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("h2", {
        children: ["\xDCberschrift", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
          children: "h2"
        }), " (h2) ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
          children: "5, 6, 7"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("h3", {
        children: ["\xDCberschrift", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
          children: "h3"
        }), " (h3) ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
          children: "8, 9"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("h4", {
        children: ["\xDCberschrift", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
          children: "h4"
        }), " (h4) ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
          children: "10"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: "Copytext. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam. Fugit ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam. Fugit ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam. Fugit ipsam, vel."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: "A list:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: "one"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: "two"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
          children: ["three", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
              children: "four"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
              children: "five"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
              children: ["six", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                  children: "seven"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                  children: "eight"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
                  children: ["nine", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ul", {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                      children: "ten"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                      children: "eleven"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                      children: "twelve"
                    })]
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                  children: "thirteen"
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
              children: "fourteen"
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: "fifteen"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: "sixteen"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: "An enumeration:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ol", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: "one"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: "two"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
          children: ["three", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ol", {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
              children: "four"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
              children: "five"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
              children: ["six", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ol", {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                  children: "seven"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                  children: "eight"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
                  children: ["nine", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ol", {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                      children: "ten"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                      children: "eleven"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                      children: "twelve"
                    })]
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
                  children: "thirteen"
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
              children: "fourteen"
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: "fifteen"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: "sixteen"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: "Checklist"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ul", {
        className: "checklist",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          className: "checked",
          children: "Checked Lsit Item"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          className: "unchecked",
          children: "unchecked Lsit Item"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h3", {
        children: "h3"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
            href: "#",
            children: "Link 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam. Fugit ipsam, vel."
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
            href: "#",
            children: "Link 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis."
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
            href: "#",
            children: "Link 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam. Fugit ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam. Fugit ipsam, vel."
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
            href: "#",
            children: "Link 4"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
            href: "#",
            children: "..."
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h2", {
        children: "h2"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
        children: ["Copytext. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
          href: "#",
          children: "Commodi, eligendi error incidunt ipsam nam natus"
        }), " repellat veritatis voluptate voluptates. Aperiam consequuntur dolores doloribus ducimus iure, perspiciatis qui ratione repudiandae rerum!"]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("i", {
            children: "Lorem ipsum dolor sit amet"
          }), ": consectetur adipisicing elit. Aliquam, aspernatur autem blanditiis enim eos esse eveniet exercitationem facilis fugit id minus neque optio quam quis quos rerum sunt temporibus totam."]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("i", {
            children: "Lorem ipsum dolor sit amet"
          }), ": consectetur adipisicing elit. Amet doloremque eum expedita id nemo omnis recusandae tempora tempore veniam vitae! Ab deleniti maiores natus non odit reiciendis sint tenetur voluptate."]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("i", {
            children: "Lorem ipsum"
          }), ": Dolor sit amet, consectetur adipisicing elit. Amet consectetur consequatur ea earum eius eveniet laborum laudantium nam, nemo nisi nostrum numquam odit perferendis perspiciatis quo repellat repudiandae sequi. Nisi?"]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h2", {
        children: "Kontaktdaten und Richtlinienaktualisierungen"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h3", {
        children: "Wie kann ich zu AbbVie Kontakt aufnehmen?"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
        children: ["Wenn Sie Fragen zur Nutzung, \xC4nderung oder L\xF6schung der an uns bereitgestellten personenbezogenen Daten haben oder zuk\xFCnftige Mitteilungen von AbbVie oder eines bestimmten AbbVie-Programms ablehnen m\xF6chten, kontaktieren Sie uns, indem Sie einen \u201EKontakt\u201C-Link auf der besuchten Webseite anklicken, oder senden Sie eine E-Mail an ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
          href: "mailto:info.de@abbvie.com",
          children: "info.de(at)abbvie(dot)com"
        }), ". Bez\xFCglich der Verarbeitung Ihrer personenbezogenen Daten k\xF6nnen Sie sich auch direkt mit dem Datenschutzbeauftragten unter ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
          href: "mailto:datenschutz.de@abbvie.com",
          children: "datenschutz.de(at)abbvie(dot)com"
        }), " in Verbindung setzen. Sie k\xF6nnen auch ein Schreiben an folgende Adresse richten oder sich telefonisch mit uns in Verbindung setzen:"]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
        children: ["AbbVie Deutschland GmbH & Co. KG", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", {}), "Mainzer Stra\xDFe 81", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", {}), "65189 Wiesbaden", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", {}), "eMail: ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
          href: "mailto:info.de@abbvie.com",
          children: "info.de(at)abbvie(dot)com"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", {}), "Tel.: +49 (0)611 1720 - 0", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", {}), "Fax.: +49 (0)611 1720 1244"]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: "Geben Sie bitte in Ihren Mitteilungen an uns die f\xFCr die Registrierung verwendete E-Mail-Adresse (sofern zutreffend), die URL der Webseite oder das AbbVie-Programm, f\xFCr das Sie personenbezogene Daten eingegeben haben (z. B. www.AbbVie.de usw.) sowie eine detaillierte Beschreibung Ihres Anliegens an."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h3", {
        children: "Wie erfahre ich, ob AbbVie diese Datenschutzrichtlinie aktualisiert hat?"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: "Unbeschadet Ihrer Rechte nach geltendem Gesetz beh\xE4lt sich AbbVie vor, diese Datenschutzrichtlinie zu \xE4ndern und zu versionieren, um technischen Weiterentwicklungen, Gesetzes\xE4nderungen und Vorschriften und guten Gesch\xE4ftspraktiken zu gen\xFCgen."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem ipsum iste laboriosam qui, quia repellendus vel! A at ducimus esse illo incidunt nostrum optio quas repudiandae rerum, velit. Tempora."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h1", {
        children: "h1 Strukturnachbildung"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h2", {
        children: "h2 Unter\xFCberschrift"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h3", {
        children: "1. h3"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat reprehenderit repudiandae vitae. Aperiam blanditiis distinctio earum ex impedit iure labore natus, nihil similique ut voluptas."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h3", {
        children: "2. h3"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores cumque deleniti dolorum eveniet fugiat iure iusto laboriosam magni nam nemo nulla optio provident quasi rem rerum temporibus, velit veritatis."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h3", {
        children: "3. h3"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cum eos expedita fugit libero maiores nam, neque nostrum, pariatur quis sit voluptatem. Accusantium ad dicta est maiores quae."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: "usw."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h1", {
        children: "Listen"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h2", {
        children: "ul"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quaerat, repudiandae. Ad in perspiciatis tempore? Aliquam aliquid consequatur consequuntur est ex, inventore itaque maxime numquam, possimus praesentium reiciendis, sequi vero."
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: "Aspernatur deleniti, distinctio doloribus eum ex iusto nemo nesciunt quasi qui quisquam repudiandae saepe voluptatibus. Dignissimos enim, et exercitationem fugit harum molestias necessitatibus nesciunt omnis quo recusandae sint tenetur totam."
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: "Excepturi ipsum minus odit officia reiciendis, rerum! Architecto deserunt dicta esse ex excepturi fugiat id magni, nostrum odio optio quaerat recusandae repellat saepe sequi suscipit tempore ut veniam veritatis voluptas."
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h2", {
        children: "ol"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("ol", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias dignissimos doloremque eius enim esse illo incidunt, laborum neque nisi, nulla obcaecati officiis pariatur possimus quia quisquam, vitae. Hic, sapiente?"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: "Aperiam atque, et ex laboriosam praesentium soluta? Ad architecto assumenda consectetur deserunt dolorem ducimus ea enim excepturi ipsa, minima mollitia neque, officiis quo quod recusandae, repellat tempora? Aperiam eos, inventore."
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
          children: "Aperiam culpa cum eius neque soluta! Alias aliquam aliquid, architecto culpa doloribus ea eligendi eveniet excepturi iusto magni maiores pariatur quam quas repellat repellendus saepe tenetur totam ut, veritatis voluptatem?"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h2", {
        children: "Inline Text Elements"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
        children: ["You can use the mark tag to ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("mark", {
          children: "highlight"
        }), " text."]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("del", {
          children: "This line of text is meant to be treated as deleted text."
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("s", {
          children: "This line of text is meant to be treated as no longer accurate."
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ins", {
          children: "This line of text is meant to be treated as an addition to the document."
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("u", {
          children: "This line of text will render as underlined"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("small", {
          children: "This line of text is meant to be treated as fine print."
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("strong", {
          children: "This line rendered as bold text."
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("em", {
          children: "This line rendered as italicized text."
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h2", {
        children: "Copytext Test"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
        children: ["Copytext. Lorem Impsum. Das ist ein ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
          href: "#",
          title: "TITLE",
          children: "Link im Flie\xDFtext"
        }), ". Dieses Wort ist", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("em", {
          children: "betont"
        }), " (em). Dieses Wort ist ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("i", {
          children: "kursiv"
        }), " (i). Dieses Wort ist ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("strong", {
          children: "stark betont"
        }), " (strong). Dieses Wort ist ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("b", {
          children: "fett"
        }), " (b). Dieses Wort ist ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
          children: "hochgestellt"
        }), " (sup). Dieses Wort ist", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sub", {
          children: "tiefgestellt"
        }), " (sub)."]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h2", {
        children: "Special Chars Test"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
          href: "http://de.wikipedia.org/wiki/L%C3%B6wen-essender_Dichter_in_der_Steinh%C3%B6hle",
          children: "http://de.wikipedia.org/wiki/L%C3%B6wen-essender_Dichter_in_der_Steinh%C3%B6hle"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
        children: ["AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz, 0123456789", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", {}), "1234567890\u201E\"@!\"\"\xA7$ %", "&", "/()=?", [], " \\*+~'#", '>', "<", "-,;.:\xE9\xE8-\xE4\xF6u \xBB\xAB\xDF", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", {}), "\xF6\xE4\xFC\xD6\xC4\xDC!\"\xA7$%", "&", "/()=?@\u20AC,;.:-_+*~#'\xB2\xB3", [], /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", {}), "\xAE\u2122"]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h2", {
        children: "Footnotes (simulation)"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
        children: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dicta eveniet ipsam labore laborum maiores, nihil officia quisquam quo repellat sit suscipit ullam unde ut veritatis vero. Consequatur, exercitationem?", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
          children: "42"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
        children: ["Nachweis der 17p-Deletion mittels Vysis CLL FISH Sonden Kit.", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
          children: "1,2"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
        children: ["\u2020 Die mediane Zeit unter Therapie zum Zeitpunkt der Beurteilung betrug 12 Monate (Spannweite: 0 \u2013 22 Monate).", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
          children: "1,2"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
        children: ["\u2021 Die Wirksamkeitsbeurteilung durch den Pr\xFCfer wird f\xFCr 158 Patienten (Expansionskohorte zum Thema Sicherheit) gezeigt. Die mediane Behandlungsdauer f\xFCr diese 158 Patienten betrug 17 Monate (Spannweite: 0 \u2013 34 Monate).", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("sup", {
          children: "1"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
        children: "\u2020, \u2021, \u2665, \u2660, \u2663, \u2666"
      })]
    })]
  }));
};

Template4.displayName = "Template4";
var HeadlineTextLine = Template4.bind({});
HeadlineWithText.parameters = Object.assign({
  storySource: {
    source: "(args) => <HeadlineText {...args} >\r\n    <h5>H1:</h5>\r\n    <h1> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. <sup>lorem</sup><sub>ipsum</sub></h1>\r\n\r\n    <h5>H2:</h5>\r\n    <h2> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit <sup>lorem</sup><sub>ipsum</sub></h2>\r\n\r\n    <h5>H3:</h5>\r\n    <h3>H3: Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione  <sup>lorem</sup><sub>ipsum</sub></h3>\r\n\r\n    <h5>H3:</h5>\r\n    <h4> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque <sup>lorem</sup><sub>ipsum</sub></h4>\r\n\r\n    <h5>H5:</h5>\r\n    <h5> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\r\n        reprehenderit repudiandae vitae. <sup>lorem</sup><sub>ipsum</sub></h5>\r\n\r\n    <h5>H6:</h5>\r\n    <h6> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\r\n        reprehenderit repudiandae vitae. <sup>lorem</sup><sub>ipsum</sub></h6>\r\n\r\n    <h5>p:</h5>\r\n    <p> Lorem 123 ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\r\n        reprehenderit repudiandae vitae. <sup>lorem</sup><sub>ipsum</sub></p>\r\n\r\n    <h5>a:</h5>\r\n    <a href='.'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cum eos expedita fugit libero\r\n        maiores nam, neque nostrum, pariatur quis sit voluptatem. Accusantium ad dicta est maiores quae.</a>\r\n\r\n    <h5>Highlight : mark tag</h5>\r\n    <p>You can use the mark tag to <mark>highlight</mark> text.</p>\r\n\r\n    <h5>Deleted part: del tag</h5>\r\n    <p><del>This line of text is meant to be treated as deleted text.</del></p>\r\n\r\n    <h5>Mark up text that is no longer correct: s tag</h5>\r\n    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\r\n\r\n    <h5>A text with  a new, inserted part: ins tag</h5>\r\n    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\r\n\r\n    <h5>Mark up a misspelled word with the u tag:</h5>\r\n    <p><u>This line of text will render as underlined</u></p>\r\n\r\n    <h5>Define a smaller text:</h5>\r\n    <p><small>This line of text is meant to be treated as fine print.</small></p>\r\n\r\n    <h5>Define important text in a document:</h5>\r\n    <p><strong>This line rendered as bold text.</strong></p>\r\n\r\n    <h5>Mark up emphasized text in a document:</h5>\r\n    <p><em>This line rendered as italicized text.</em></p>\r\n\r\n    <h5>Superscript text:</h5>\r\n    <p>This text contains <sup>superscript</sup> text.</p>\r\n\r\n    <h5>Subscript text:</h5>\r\n    <p>This text contains <sub>subscript</sub> text.</p>\r\n</HeadlineText>"
  }
}, HeadlineWithText.parameters);
List.parameters = Object.assign({
  storySource: {
    source: "(args) => <HeadlineText {...args} >\r\n    <p><b>Unordered List: </b></p>\r\n    <ul>\r\n        <li>one</li>\r\n        <li>two</li>\r\n        <li>three\r\n            <ul>\r\n                <li>four</li>\r\n                <li>five</li>\r\n                <li>six\r\n                    <ul>\r\n                        <li>seven</li>\r\n                        <li>eight</li>\r\n                        <li>nine\r\n                            <ul>\r\n                                <li>ten</li>\r\n                                <li>eleven</li>\r\n                                <li>twelve</li>\r\n                            </ul>\r\n                        </li>\r\n                        <li>thirteen</li>\r\n                    </ul>\r\n                </li>\r\n                <li>fourteen</li>\r\n            </ul>\r\n        </li>\r\n        <li>fifteen</li>\r\n        <li>sixteen</li>\r\n    </ul>\r\n\r\n    <p><b>Ordered List: </b></p>\r\n    <ol>\r\n        <li>one</li>\r\n        <li>two</li>\r\n        <li>three\r\n            <ol>\r\n                <li>four</li>\r\n                <li>five</li>\r\n                <li>six\r\n                    <ol>\r\n                        <li>seven</li>\r\n                        <li>eight</li>\r\n                        <li>nine\r\n                            <ol>\r\n                                <li>ten</li>\r\n                                <li>eleven</li>\r\n                                <li>twelve</li>\r\n                            </ol>\r\n                        </li>\r\n                        <li>thirteen</li>\r\n                    </ol>\r\n                </li>\r\n                <li>fourteen</li>\r\n            </ol>\r\n        </li>\r\n        <li>fifteen</li>\r\n        <li>sixteen</li>\r\n    </ol>\r\n</HeadlineText>"
  }
}, List.parameters);
HeadlineTextLine.parameters = Object.assign({
  storySource: {
    source: "(args) => <HeadlineText {...args} >\r\n    <blockquote cite=\"http://www.worldwildlife.org/who/index.html\">\r\n        For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.\r\n    </blockquote>\r\n    <p>Current AEM RTE implementation: <a href=\"#\"> Lorem ipsum dolor</a></p>\r\n    <p><b>I am RTE - Bold</b></p>\r\n    <p><i>I am RTE - Italic</i></p>\r\n    <p><u>I am RTE - Underline</u></p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE - Align Text Left <a href=\"#\"> Lorem ipsum dolor 11111111111111</a></p>\r\n    <p style={{ textAlign: \"center\" }}>I am RTE - Center Text</p>\r\n    <p style={{ textAlign: \"right\" }}>I am RTE - Align Text Right</p>\r\n    <p style={{ textAlign: \"left\" }}><a title=\"Alt Text\"\r\n        href=\"http://localhost:4502/editor.html/content/abbvie-haematologie/de/components/atoms/a0110-text.html#\">I am RTE - Hyperlink</a></p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE - Anchor</p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE<sup>Superscript</sup></p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE<sub>subscript</sub></p>\r\n    <p style={{ textAlign: \"left\" }}>I am RTE - Paragraph</p>\r\n    <h1>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 1<sup>4</sup>  <a href=\"#\"> Lorem ipsum dolor 11111111111111</a></h1>\r\n    <h2>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 2<sup>4</sup></h2>\r\n    <h3>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 3<sup>4</sup></h3>\r\n    <h4>I<sup>1</sup> am<sup>2</sup> RTE<sup>3</sup> - Headline 4<sup>4</sup></h4>\r\n    <p>RTE List Bullet:</p>\r\n    <ul>\r\n        <li><span className=\"\">I am RTE-A</span></li>\r\n        <li>I am RTE-B\r\n            <ul>\r\n                <li>I am RTE-B1 <a href=\"#\"> Lorem ipsum dolor 11111111111111</a></li>\r\n                <li>I am RTE-B2</li>\r\n                <li>I am RTE-B3</li>\r\n            </ul>\r\n        </li>\r\n        <li>I am RTE-C</li>\r\n    </ul>\r\n    <p>RTE List Number:\r\n        <br></br>\r\n    </p>\r\n    <ol>\r\n        <li>I am RTE1</li>\r\n        <li>I am RTE2\r\n            <ol>\r\n                <li>I am RTE2.1</li>\r\n                <li>I am RTE2.2</li>\r\n                <li>I am RTE2.3</li>\r\n            </ol>\r\n        </li>\r\n        <li>I am RTE3</li>\r\n    </ol>\r\n\r\n    <section className='cmp-text section'>\r\n        <h1>A0110 / TEXT</h1>\r\n        <h1>Überschrift<sup>h1</sup> (h1) <sup>1, 2, 3, 4</sup></h1>\r\n        <h2>Überschrift<sup>h2</sup> (h2) <sup>5, 6, 7</sup></h2>\r\n        <h3>Überschrift<sup>h3</sup> (h3) <sup>8, 9</sup></h3>\r\n        <h4>Überschrift<sup>h4</sup> (h4) <sup>10</sup></h4>\r\n        <p>Copytext. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque, excepturi\r\n            exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam. Fugit\r\n            ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque,\r\n            excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam.\r\n            Fugit ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore doloremque,\r\n            excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque quibusdam totam.\r\n            Fugit ipsam, vel.</p>\r\n        <p>A list:</p>\r\n        <ul>\r\n            <li>one</li>\r\n            <li>two</li>\r\n            <li>three\r\n                <ul>\r\n                    <li>four</li>\r\n                    <li>five</li>\r\n                    <li>six\r\n                        <ul>\r\n                            <li>seven</li>\r\n                            <li>eight</li>\r\n                            <li>nine\r\n                                <ul>\r\n                                    <li>ten</li>\r\n                                    <li>eleven</li>\r\n                                    <li>twelve</li>\r\n                                </ul>\r\n                            </li>\r\n                            <li>thirteen</li>\r\n                        </ul>\r\n                    </li>\r\n                    <li>fourteen</li>\r\n                </ul>\r\n            </li>\r\n            <li>fifteen</li>\r\n            <li>sixteen</li>\r\n        </ul>\r\n        <p>An enumeration:</p>\r\n        <ol>\r\n            <li>one</li>\r\n            <li>two</li>\r\n            <li>three\r\n                <ol>\r\n                    <li>four</li>\r\n                    <li>five</li>\r\n                    <li>six\r\n                        <ol>\r\n                            <li>seven</li>\r\n                            <li>eight</li>\r\n                            <li>nine\r\n                                <ol>\r\n                                    <li>ten</li>\r\n                                    <li>eleven</li>\r\n                                    <li>twelve</li>\r\n                                </ol>\r\n                            </li>\r\n                            <li>thirteen</li>\r\n                        </ol>\r\n                    </li>\r\n                    <li>fourteen</li>\r\n                </ol>\r\n            </li>\r\n            <li>fifteen</li>\r\n            <li>sixteen</li>\r\n        </ol>\r\n        <p>Checklist</p>\r\n        <ul className='checklist'>\r\n            <li className='checked'>Checked Lsit Item</li>\r\n            <li className='unchecked'>unchecked Lsit Item</li>\r\n        </ul>\r\n        <h3>h3</h3>\r\n        <ul>\r\n            <li><a href=\"#\">Link 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore\r\n                doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque\r\n                quibusdam totam. Fugit ipsam, vel.</a></li>\r\n            <li><a href=\"#\">Link 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore\r\n                doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis.</a></li>\r\n            <li><a href=\"#\">Link 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis dolore\r\n                doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque eaque\r\n                quibusdam totam. Fugit ipsam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis\r\n                dolore doloremque, excepturi exercitationem fugiat libero magnam modi quisquam unde veritatis. Culpa cumque\r\n                eaque quibusdam totam. Fugit ipsam, vel.</a></li>\r\n            <li><a href=\"#\">Link 4</a></li>\r\n            <li><a href=\"#\">...</a></li>\r\n        </ul>\r\n        <h2>h2</h2>\r\n        <p>Copytext. Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href=\"#\">Commodi, eligendi error\r\n            incidunt ipsam nam natus</a> repellat veritatis voluptate voluptates. Aperiam consequuntur dolores doloribus\r\n            ducimus iure, perspiciatis qui ratione repudiandae rerum!</p>\r\n        <ul>\r\n            <li><i>Lorem ipsum dolor sit amet</i>: consectetur adipisicing elit. Aliquam, aspernatur autem blanditiis enim\r\n                eos esse eveniet exercitationem facilis fugit id minus neque optio quam quis quos rerum sunt temporibus totam.\r\n            </li>\r\n            <li><i>Lorem ipsum dolor sit amet</i>: consectetur adipisicing elit. Amet doloremque eum expedita id nemo omnis\r\n                recusandae tempora tempore veniam vitae! Ab deleniti maiores natus non odit reiciendis sint tenetur voluptate.\r\n            </li>\r\n            <li><i>Lorem ipsum</i>: Dolor sit amet, consectetur adipisicing elit. Amet consectetur consequatur ea earum eius\r\n                eveniet laborum laudantium nam, nemo nisi nostrum numquam odit perferendis perspiciatis quo repellat\r\n                repudiandae sequi. Nisi?</li>\r\n        </ul>\r\n        <h2>Kontaktdaten und Richtlinienaktualisierungen</h2>\r\n        <h3>Wie kann ich zu AbbVie Kontakt aufnehmen?</h3>\r\n        <p>Wenn Sie Fragen zur Nutzung, Änderung oder Löschung der an uns bereitgestellten personenbezogenen Daten haben\r\n            oder zukünftige Mitteilungen von AbbVie oder eines bestimmten AbbVie-Programms ablehnen möchten, kontaktieren\r\n            Sie uns, indem Sie einen „Kontakt“-Link auf der besuchten Webseite anklicken, oder senden Sie eine E-Mail an <a\r\n                href=\"mailto:info.de@abbvie.com\">info.de(at)abbvie(dot)com</a>. Bezüglich der Verarbeitung Ihrer\r\n            personenbezogenen Daten können Sie sich auch direkt mit dem Datenschutzbeauftragten unter <a\r\n                href=\"mailto:datenschutz.de@abbvie.com\">datenschutz.de(at)abbvie(dot)com</a> in Verbindung setzen. Sie können\r\n            auch ein Schreiben an folgende Adresse richten oder sich telefonisch mit uns in Verbindung setzen:</p>\r\n        <p>\r\n            AbbVie Deutschland GmbH & Co. KG<br></br>\r\n            Mainzer Straße 81<br></br>\r\n            65189 Wiesbaden<br></br>\r\n            eMail: <a href=\"mailto:info.de@abbvie.com\">info.de(at)abbvie(dot)com</a><br></br>\r\n            Tel.: +49 (0)611 1720 - 0<br></br>\r\n            Fax.: +49 (0)611 1720 1244\r\n        </p>\r\n        <p>Geben Sie bitte in Ihren Mitteilungen an uns die für die Registrierung verwendete E-Mail-Adresse (sofern\r\n            zutreffend), die URL der Webseite oder das AbbVie-Programm, für das Sie personenbezogene Daten eingegeben haben\r\n            (z. B. www.AbbVie.de usw.) sowie eine detaillierte Beschreibung Ihres Anliegens an.</p>\r\n        <h3>Wie erfahre ich, ob AbbVie diese Datenschutzrichtlinie aktualisiert hat?</h3>\r\n        <p>Unbeschadet Ihrer Rechte nach geltendem Gesetz behält sich AbbVie vor, diese Datenschutzrichtlinie zu ändern\r\n            und zu versionieren, um technischen Weiterentwicklungen, Gesetzesänderungen und Vorschriften und guten\r\n            Geschäftspraktiken zu genügen.</p>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem ipsum iste laboriosam qui, quia\r\n            repellendus vel! A at ducimus esse illo incidunt nostrum optio quas repudiandae rerum, velit. Tempora.</p>\r\n        <h1>h1 Strukturnachbildung</h1>\r\n        <h2>h2 Unterüberschrift</h2>\r\n        <h3>1. h3</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque, labore nobis ratione repellat\r\n            reprehenderit repudiandae vitae. Aperiam blanditiis distinctio earum ex impedit iure labore natus, nihil\r\n            similique ut voluptas.</p>\r\n        <h3>2. h3</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores cumque deleniti dolorum eveniet\r\n            fugiat iure iusto laboriosam magni nam nemo nulla optio provident quasi rem rerum temporibus, velit veritatis.\r\n        </p>\r\n        <h3>3. h3</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet architecto cum eos expedita fugit libero\r\n            maiores nam, neque nostrum, pariatur quis sit voluptatem. Accusantium ad dicta est maiores quae.</p>\r\n        <p>usw.</p>\r\n        <h1>Listen</h1>\r\n        <h2>ul</h2>\r\n        <ul>\r\n            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, quaerat, repudiandae. Ad in perspiciatis\r\n                tempore? Aliquam aliquid consequatur consequuntur est ex, inventore itaque maxime numquam, possimus\r\n                praesentium reiciendis, sequi vero.</li>\r\n            <li>Aspernatur deleniti, distinctio doloribus eum ex iusto nemo nesciunt quasi qui quisquam repudiandae saepe\r\n                voluptatibus. Dignissimos enim, et exercitationem fugit harum molestias necessitatibus nesciunt omnis quo\r\n                recusandae sint tenetur totam.</li>\r\n            <li>Excepturi ipsum minus odit officia reiciendis, rerum! Architecto deserunt dicta esse ex excepturi fugiat id\r\n                magni, nostrum odio optio quaerat recusandae repellat saepe sequi suscipit tempore ut veniam veritatis\r\n                voluptas.</li>\r\n        </ul>\r\n        <h2>ol</h2>\r\n        <ol>\r\n            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias dignissimos doloremque eius enim esse\r\n                illo incidunt, laborum neque nisi, nulla obcaecati officiis pariatur possimus quia quisquam, vitae. Hic,\r\n                sapiente?</li>\r\n            <li>Aperiam atque, et ex laboriosam praesentium soluta? Ad architecto assumenda consectetur deserunt dolorem\r\n                ducimus ea enim excepturi ipsa, minima mollitia neque, officiis quo quod recusandae, repellat tempora? Aperiam\r\n                eos, inventore.</li>\r\n            <li>Aperiam culpa cum eius neque soluta! Alias aliquam aliquid, architecto culpa doloribus ea eligendi eveniet\r\n                excepturi iusto magni maiores pariatur quam quas repellat repellendus saepe tenetur totam ut, veritatis\r\n                voluptatem?</li>\r\n        </ol>\r\n        <br></br>\r\n        <h2>Inline Text Elements</h2>\r\n        <p>You can use the mark tag to <mark>highlight</mark> text.</p>\r\n        <p><del>This line of text is meant to be treated as deleted text.</del></p>\r\n        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\r\n        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\r\n        <p><u>This line of text will render as underlined</u></p>\r\n        <p><small>This line of text is meant to be treated as fine print.</small></p>\r\n        <p><strong>This line rendered as bold text.</strong></p>\r\n        <p><em>This line rendered as italicized text.</em></p>\r\n        <br></br>\r\n        <h2>Copytext Test</h2>\r\n        <p>Copytext. Lorem Impsum. Das ist ein <a href=\"#\" title=\"TITLE\">Link im Fließtext</a>. Dieses Wort ist\r\n            <em>betont</em> (em). Dieses Wort ist <i>kursiv</i> (i). Dieses Wort ist <strong>stark betont</strong> (strong).\r\n            Dieses Wort ist <b>fett</b> (b). Dieses Wort ist <sup>hochgestellt</sup> (sup). Dieses Wort ist\r\n            <sub>tiefgestellt</sub> (sub).</p>\r\n        <br></br>\r\n        <h2>Special Chars Test</h2>\r\n        <p><a\r\n            href=\"http://de.wikipedia.org/wiki/L%C3%B6wen-essender_Dichter_in_der_Steinh%C3%B6hle\">http://de.wikipedia.org/wiki/L%C3%B6wen-essender_Dichter_in_der_Steinh%C3%B6hle</a>\r\n        </p>\r\n        <p>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz, 0123456789<br></br>\r\n            1234567890„\"@!\"\"§$ %{\"&\"}/()=?{[]} \\*+~'#{'>'}{\"<\"}-,;.:éè-äöu »«ß<br></br>\r\n            öäüÖÄÜ!\"§$%{\"&\"}/()=?@€,;.:-_+*~#'²³{[]}<br></br>\r\n            ®™</p>\r\n        <br></br>\r\n        <h2>Footnotes (simulation)</h2>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dicta eveniet ipsam labore laborum maiores,\r\n            nihil officia quisquam quo repellat sit suscipit ullam unde ut veritatis vero. Consequatur,\r\n            exercitationem?<sup>42</sup></p>\r\n        <p>Nachweis der 17p-Deletion mittels Vysis CLL FISH Sonden Kit.<sup>1,2</sup></p>\r\n        <p>† Die mediane Zeit unter Therapie zum Zeitpunkt der Beurteilung betrug 12 Monate (Spannweite: 0 – 22\r\n            Monate).<sup>1,2</sup></p>\r\n        <p>‡ Die Wirksamkeitsbeurteilung durch den Prüfer wird für 158 Patienten (Expansionskohorte zum Thema Sicherheit)\r\n            gezeigt. Die mediane Behandlungsdauer für diese 158 Patienten betrug 17 Monate (Spannweite: 0 – 34\r\n            Monate).<sup>1</sup></p>\r\n        <p>†, ‡, ♥, ♠, ♣, ♦</p>\r\n    </section>\r\n</HeadlineText>"
  }
}, HeadlineTextLine.parameters);

/***/ }),

/***/ "./components/molecules/headline-text/HeadlineText.js":
/*!************************************************************!*\
  !*** ./components/molecules/headline-text/HeadlineText.js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



var HeadlineText = function HeadlineText(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: props.orientation || '',
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "headline-text cmp",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
        className: props.gap || '',
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
          className: "cmp-text " + props.customClass + " ",
          children: props.children
        })
      })
    })
  });
};

HeadlineText.displayName = "HeadlineText";
HeadlineText.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HeadlineText"
};
/* harmony default export */ __webpack_exports__["a"] = (HeadlineText);

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["components\\molecules\\headline-text\\HeadlineText.js"] = {
    name: "HeadlineText",
    docgenInfo: HeadlineText.__docgenInfo,
    path: "components\\molecules\\headline-text\\HeadlineText.js"
  };
}

/***/ }),

/***/ "./components/molecules/image-extension/3.ImageExtension.stories.js":
/*!**************************************************************************!*\
  !*** ./components/molecules/image-extension/3.ImageExtension.stories.js ***!
  \**************************************************************************/
/*! exports provided: default, Image_Extension */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image_Extension", function() { return Image_Extension; });
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_BS691_Desktop_StorybookCommons_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageExtension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageExtension */ "./components/molecules/image-extension/ImageExtension.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ = "\n    \n    // @ts-nocheck\n    // @ts-ignore\n    var __STORY__ = \"import React from 'react';\\r\\nimport ImageExtension from './ImageExtension';\\r\\n\\r\\nconst image_size = {\\r\\n   \\\"width 25\\\": 'w-25',\\r\\n   \\\"Half width\\\": 'w-50',\\r\\n   \\\"Width 75\\\": 'w-75',\\r\\n   \\\"Full Width\\\": 'w-100'\\r\\n}\\r\\n\\r\\nconst bottom_gap={\\r\\n   \\\"normal\\\": '',\\r\\n   \\\"No Gap\\\": 'no-bgap',\\r\\n}\\r\\n\\r\\nconst image_position={\\r\\n   \\\"Start\\\": 'justify-content-start',\\r\\n   \\\"Center\\\": 'justify-content-center',\\r\\n   \\\"End\\\": 'justify-content-end'\\r\\n}\\r\\n\\r\\nexport default {\\r\\n   title: 'Molecules/ImageExtension',\\r\\n   component: ImageExtension,\\r\\n   argTypes: {\\r\\n       image_size: {\\r\\n         control: { type: \\\"select\\\", options: image_size }\\r\\n     },\\r\\n       bottom_gap: {\\r\\n         control: { type: \\\"select\\\", options: bottom_gap }\\r\\n     },\\r\\n      image_position: {\\r\\n         control: { type: \\\"select\\\", options: image_position }\\r\\n     },\\r\\n   }\\r\\n};\\r\\n\\r\\nconst Template = (args) => <ImageExtension {...args}/>;\\r\\n\\r\\nexport const Image_Extension = Template.bind({});\\r\\nImage_Extension.args = {\\r\\n   image_src : \\\"storybook-images/test-img/desktop-1080.jpg\\\" ,\\r\\n}\\r\\n\\r\\n\";\n    // @ts-ignore\n    var __LOCATIONS_MAP__ = {\"Image_Extension\":{\"startLoc\":{\"col\":17,\"line\":38},\"endLoc\":{\"col\":54,\"line\":38},\"startBody\":{\"col\":17,\"line\":38},\"endBody\":{\"col\":54,\"line\":38}}};\n    \nimport React from 'react';\r\nimport ImageExtension from './ImageExtension';\r\n\r\nconst image_size = {\r\n   \"width 25\": 'w-25',\r\n   \"Half width\": 'w-50',\r\n   \"Width 75\": 'w-75',\r\n   \"Full Width\": 'w-100'\r\n}\r\n\r\nconst bottom_gap={\r\n   \"normal\": '',\r\n   \"No Gap\": 'no-bgap',\r\n}\r\n\r\nconst image_position={\r\n   \"Start\": 'justify-content-start',\r\n   \"Center\": 'justify-content-center',\r\n   \"End\": 'justify-content-end'\r\n}\r\n\r\nexport default {parameters: {\"storySource\":{\"source\":\"import React from 'react';\\r\\nimport ImageExtension from './ImageExtension';\\r\\n\\r\\nconst image_size = {\\r\\n   \\\"width 25\\\": 'w-25',\\r\\n   \\\"Half width\\\": 'w-50',\\r\\n   \\\"Width 75\\\": 'w-75',\\r\\n   \\\"Full Width\\\": 'w-100'\\r\\n}\\r\\n\\r\\nconst bottom_gap={\\r\\n   \\\"normal\\\": '',\\r\\n   \\\"No Gap\\\": 'no-bgap',\\r\\n}\\r\\n\\r\\nconst image_position={\\r\\n   \\\"Start\\\": 'justify-content-start',\\r\\n   \\\"Center\\\": 'justify-content-center',\\r\\n   \\\"End\\\": 'justify-content-end'\\r\\n}\\r\\n\\r\\nexport default {\\r\\n   title: 'Molecules/ImageExtension',\\r\\n   component: ImageExtension,\\r\\n   argTypes: {\\r\\n       image_size: {\\r\\n         control: { type: \\\"select\\\", options: image_size }\\r\\n     },\\r\\n       bottom_gap: {\\r\\n         control: { type: \\\"select\\\", options: bottom_gap }\\r\\n     },\\r\\n      image_position: {\\r\\n         control: { type: \\\"select\\\", options: image_position }\\r\\n     },\\r\\n   }\\r\\n};\\r\\n\\r\\nconst Template = (args) => <ImageExtension {...args}/>;\\r\\n\\r\\nexport const Image_Extension = Template.bind({});\\r\\nImage_Extension.args = {\\r\\n   image_src : \\\"storybook-images/test-img/desktop-1080.jpg\\\" ,\\r\\n}\\r\\n\\r\\n\",\"locationsMap\":{\"image-extension\":{\"startLoc\":{\"col\":17,\"line\":38},\"endLoc\":{\"col\":54,\"line\":38},\"startBody\":{\"col\":17,\"line\":38},\"endBody\":{\"col\":54,\"line\":38}}}},},\r\n   title: 'Molecules/ImageExtension',\r\n   component: ImageExtension,\r\n   argTypes: {\r\n       image_size: {\r\n         control: { type: \"select\", options: image_size }\r\n     },\r\n       bottom_gap: {\r\n         control: { type: \"select\", options: bottom_gap }\r\n     },\r\n      image_position: {\r\n         control: { type: \"select\", options: image_position }\r\n     },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <ImageExtension {...args}/>;\r\n\r\nexport const Image_Extension = Template.bind({});\r\nImage_Extension.args = {\r\n   image_src : \"storybook-images/test-img/desktop-1080.jpg\" ,\r\n}\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "Image_Extension": {
    "startLoc": {
      "col": 17,
      "line": 46
    },
    "endLoc": {
      "col": 54,
      "line": 46
    },
    "startBody": {
      "col": 17,
      "line": 46
    },
    "endBody": {
      "col": 54,
      "line": 46
    }
  }
};
/* eslint-disable */
// @ts-nocheck
// @ts-ignore

var __STORY__ = "import React from 'react';\r\nimport ImageExtension from './ImageExtension';\r\n\r\nconst image_size = {\r\n   \"width 25\": 'w-25',\r\n   \"Half width\": 'w-50',\r\n   \"Width 75\": 'w-75',\r\n   \"Full Width\": 'w-100'\r\n}\r\n\r\nconst bottom_gap={\r\n   \"normal\": '',\r\n   \"No Gap\": 'no-bgap',\r\n}\r\n\r\nconst image_position={\r\n   \"Start\": 'justify-content-start',\r\n   \"Center\": 'justify-content-center',\r\n   \"End\": 'justify-content-end'\r\n}\r\n\r\nexport default {\r\n   title: 'Molecules/ImageExtension',\r\n   component: ImageExtension,\r\n   argTypes: {\r\n       image_size: {\r\n         control: { type: \"select\", options: image_size }\r\n     },\r\n       bottom_gap: {\r\n         control: { type: \"select\", options: bottom_gap }\r\n     },\r\n      image_position: {\r\n         control: { type: \"select\", options: image_position }\r\n     },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <ImageExtension {...args}/>;\r\n\r\nexport const Image_Extension = Template.bind({});\r\nImage_Extension.args = {\r\n   image_src : \"storybook-images/test-img/desktop-1080.jpg\" ,\r\n}\r\n\r\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "Image_Extension": {
    "startLoc": {
      "col": 17,
      "line": 38
    },
    "endLoc": {
      "col": 54,
      "line": 38
    },
    "startBody": {
      "col": 17,
      "line": 38
    },
    "endBody": {
      "col": 54,
      "line": 38
    }
  }
};



var image_size = {
  "width 25": 'w-25',
  "Half width": 'w-50',
  "Width 75": 'w-75',
  "Full Width": 'w-100'
};
var bottom_gap = {
  "normal": '',
  "No Gap": 'no-bgap'
};
var image_position = {
  "Start": 'justify-content-start',
  "Center": 'justify-content-center',
  "End": 'justify-content-end'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  parameters: {
    "storySource": {
      "source": "import React from 'react';\r\nimport ImageExtension from './ImageExtension';\r\n\r\nconst image_size = {\r\n   \"width 25\": 'w-25',\r\n   \"Half width\": 'w-50',\r\n   \"Width 75\": 'w-75',\r\n   \"Full Width\": 'w-100'\r\n}\r\n\r\nconst bottom_gap={\r\n   \"normal\": '',\r\n   \"No Gap\": 'no-bgap',\r\n}\r\n\r\nconst image_position={\r\n   \"Start\": 'justify-content-start',\r\n   \"Center\": 'justify-content-center',\r\n   \"End\": 'justify-content-end'\r\n}\r\n\r\nexport default {\r\n   title: 'Molecules/ImageExtension',\r\n   component: ImageExtension,\r\n   argTypes: {\r\n       image_size: {\r\n         control: { type: \"select\", options: image_size }\r\n     },\r\n       bottom_gap: {\r\n         control: { type: \"select\", options: bottom_gap }\r\n     },\r\n      image_position: {\r\n         control: { type: \"select\", options: image_position }\r\n     },\r\n   }\r\n};\r\n\r\nconst Template = (args) => <ImageExtension {...args}/>;\r\n\r\nexport const Image_Extension = Template.bind({});\r\nImage_Extension.args = {\r\n   image_src : \"storybook-images/test-img/desktop-1080.jpg\" ,\r\n}\r\n\r\n",
      "locationsMap": {
        "image-extension": {
          "startLoc": {
            "col": 17,
            "line": 38
          },
          "endLoc": {
            "col": 54,
            "line": 38
          },
          "startBody": {
            "col": 17,
            "line": 38
          },
          "endBody": {
            "col": 54,
            "line": 38
          }
        }
      }
    }
  },
  title: 'Molecules/ImageExtension',
  component: _ImageExtension__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  argTypes: {
    image_size: {
      control: {
        type: "select",
        options: image_size
      }
    },
    bottom_gap: {
      control: {
        type: "select",
        options: bottom_gap
      }
    },
    image_position: {
      control: {
        type: "select",
        options: image_position
      }
    }
  }
});

var Template = function Template(args) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_ImageExtension__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({}, args));
};

Template.displayName = "Template";
var Image_Extension = Template.bind({});
Image_Extension.args = {
  image_src: "storybook-images/test-img/desktop-1080.jpg"
};
Image_Extension.parameters = Object.assign({
  storySource: {
    source: "(args) => <ImageExtension {...args}/>"
  }
}, Image_Extension.parameters);

/***/ }),

/***/ "./components/molecules/image-extension/ImageExtension.js":
/*!****************************************************************!*\
  !*** ./components/molecules/image-extension/ImageExtension.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




var ImageExtension = function ImageExtension(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "image-extension section",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: (props.image_position || '') + " image-container",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("a", {
        href: props.image_href,
        className: props.image_size,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
          className: props.bottom_gap + " d-none d-lg-block img-fluid",
          src: props.image_src,
          srcSet: props.image_src + " 1920w, " + props.image_src + " 1440w, " + props.image_src + " 1080w",
          alt: "Desktop Img"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
          className: props.bottom_gap + " d-none d-md-block d-lg-none img-fluid",
          src: props.image_src,
          srcSet: props.image_src + " 1920w, " + props.image_src + " 1440w, " + props.image_src + " 1080w",
          alt: "Tablet Img"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
          className: props.bottom_gap + " d-md-none img-fluid",
          src: props.image_src,
          srcSet: props.image_src + " 1300w, " + props.image_src + " 975w, " + props.image_src + " 730w",
          alt: "Mobile Img"
        })]
      })
    })
  });
};

ImageExtension.displayName = "ImageExtension";
ImageExtension.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ImageExtension"
};
/* harmony default export */ __webpack_exports__["a"] = (ImageExtension);

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["components\\molecules\\image-extension\\ImageExtension.js"] = {
    name: "ImageExtension",
    docgenInfo: ImageExtension.__docgenInfo,
    path: "components\\molecules\\image-extension\\ImageExtension.js"
  };
}

/***/ }),

/***/ "./components/pages/home/311p.homepage.stories.js":
/*!********************************************************!*\
  !*** ./components/pages/home/311p.homepage.stories.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// import React from 'react';
// import HomePage from '../../components/pages/homepage';
// export default {
//     title: 'Pages/HomePage',
//     component: HomePage,
// };
// const Template = (args) => <HomePage></HomePage>;
// export const Home_Page = Template.bind({});

/***/ }),

/***/ "./generated-stories-entry.js":
/*!************************************!*\
  !*** ./generated-stories-entry.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _frameworkImportPath = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/esm/client/index.js");
/* eslint-disable import/no-unresolved */


(0, _frameworkImportPath.configure)([__webpack_require__("./components sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"), __webpack_require__("./components sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$"), __webpack_require__("./components sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.js)$")], module, false);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js */ "./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/sass-loader/dist/cjs.js!./styles/glpg-111/storybook.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/sass-loader/dist/cjs.js!./styles/glpg-111/storybook.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"URW-din\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local(\"URW din\"), local(\"URW-din\"), url(./fonts/URW_Din/URWDIN-Regular.ttf) format(\"truetype\");\n}\n:root {\n  --bs-blue: #0d6efd;\n  --bs-indigo: #6610f2;\n  --bs-purple: #6f42c1;\n  --bs-pink: #d63384;\n  --bs-red: #dc3545;\n  --bs-orange: #fd7e14;\n  --bs-yellow: #ffc107;\n  --bs-green: #198754;\n  --bs-teal: #20c997;\n  --bs-cyan: #0dcaf0;\n  --bs-black: #000;\n  --bs-white: #fff;\n  --bs-gray: #6c757d;\n  --bs-gray-dark: #343a40;\n  --bs-gray-100: #f8f9fa;\n  --bs-gray-200: #e9ecef;\n  --bs-gray-300: #dee2e6;\n  --bs-gray-400: #ced4da;\n  --bs-gray-500: #adb5bd;\n  --bs-gray-600: #6c757d;\n  --bs-gray-700: #495057;\n  --bs-gray-800: #343a40;\n  --bs-gray-900: #212529;\n  --bs-primary: #0d6efd;\n  --bs-secondary: #6c757d;\n  --bs-success: #198754;\n  --bs-info: #0dcaf0;\n  --bs-warning: #ffc107;\n  --bs-danger: #dc3545;\n  --bs-light: #f8f9fa;\n  --bs-dark: #212529;\n  --bs-primary-rgb: 13, 110, 253;\n  --bs-secondary-rgb: 108, 117, 125;\n  --bs-success-rgb: 25, 135, 84;\n  --bs-info-rgb: 13, 202, 240;\n  --bs-warning-rgb: 255, 193, 7;\n  --bs-danger-rgb: 220, 53, 69;\n  --bs-light-rgb: 248, 249, 250;\n  --bs-dark-rgb: 33, 37, 41;\n  --bs-white-rgb: 255, 255, 255;\n  --bs-black-rgb: 0, 0, 0;\n  --bs-body-color-rgb: 33, 37, 41;\n  --bs-body-bg-rgb: 255, 255, 255;\n  --bs-font-sans-serif: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));\n  --bs-body-font-family: var(--bs-font-sans-serif);\n  --bs-body-font-size: 1rem;\n  --bs-body-font-weight: 400;\n  --bs-body-line-height: 1.5;\n  --bs-body-color: #212529;\n  --bs-body-bg: #fff;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  :root {\n    scroll-behavior: smooth;\n  }\n}\n\nbody {\n  margin: 0;\n  font-family: var(--bs-body-font-family);\n  font-size: var(--bs-body-font-size);\n  font-weight: var(--bs-body-font-weight);\n  line-height: var(--bs-body-line-height);\n  color: var(--bs-body-color);\n  text-align: var(--bs-body-text-align);\n  background-color: var(--bs-body-bg);\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\nhr {\n  margin: 1rem 0;\n  color: inherit;\n  background-color: currentColor;\n  border: 0;\n  opacity: 0.25;\n}\n\nhr:not([size]) {\n  height: 1px;\n}\n\nh6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1, .h1 {\n  font-size: calc(1.375rem + 1.5vw);\n}\n@media (min-width: 1200px) {\n  h1, .h1 {\n    font-size: 2.5rem;\n  }\n}\n\nh2, .h2 {\n  font-size: calc(1.325rem + 0.9vw);\n}\n@media (min-width: 1200px) {\n  h2, .h2 {\n    font-size: 2rem;\n  }\n}\n\nh3, .h3 {\n  font-size: calc(1.3rem + 0.6vw);\n}\n@media (min-width: 1200px) {\n  h3, .h3 {\n    font-size: 1.75rem;\n  }\n}\n\nh4, .h4 {\n  font-size: calc(1.275rem + 0.3vw);\n}\n@media (min-width: 1200px) {\n  h4, .h4 {\n    font-size: 1.5rem;\n  }\n}\n\nh5, .h5 {\n  font-size: 1.25rem;\n}\n\nh6, .h6 {\n  font-size: 1rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title],\nabbr[data-bs-original-title] {\n  text-decoration: underline dotted;\n  cursor: help;\n  text-decoration-skip-ink: none;\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul {\n  padding-left: 2rem;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: 700;\n}\n\ndd {\n  margin-bottom: 0.5rem;\n  margin-left: 0;\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\nsmall, .small {\n  font-size: 0.875em;\n}\n\nmark, .mark {\n  padding: 0.1875em;\n  background-color: #fff3cd;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 0.75em;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\na {\n  color: #0d6efd;\n  text-decoration: underline;\n}\na:hover {\n  color: #0a58ca;\n}\n\na:not([href]):not([class]), a:not([href]):not([class]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: var(--bs-font-monospace);\n  font-size: 1em;\n  direction: ltr /* rtl:ignore */;\n  unicode-bidi: bidi-override;\n}\n\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  font-size: 0.875em;\n}\npre code {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n\ncode {\n  font-size: 0.875em;\n  color: #d63384;\n  word-wrap: break-word;\n}\na > code {\n  color: inherit;\n}\n\nkbd {\n  padding: 0.1875rem 0.375rem;\n  font-size: 0.875em;\n  color: var(--bs-body-bg);\n  background-color: var(--bs-body-color);\n  border-radius: 0.25rem;\n}\nkbd kbd {\n  padding: 0;\n  font-size: 1em;\n  font-weight: 700;\n}\n\nfigure {\n  margin: 0 0 1rem;\n}\n\nimg,\nsvg {\n  vertical-align: middle;\n}\n\ntable {\n  caption-side: bottom;\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: #6c757d;\n  text-align: left;\n}\n\nth {\n  text-align: inherit;\n  text-align: -webkit-match-parent;\n}\n\nthead,\ntbody,\ntfoot,\ntr,\ntd,\nth {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\n\nlabel {\n  display: inline-block;\n}\n\nbutton {\n  border-radius: 0;\n}\n\nbutton:focus:not(:focus-visible) {\n  outline: 0;\n}\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n[role=button] {\n  cursor: pointer;\n}\n\nselect {\n  word-wrap: normal;\n}\nselect:disabled {\n  opacity: 1;\n}\n\n[list]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\nbutton:not(:disabled),\n[type=button]:not(:disabled),\n[type=reset]:not(:disabled),\n[type=submit]:not(:disabled) {\n  cursor: pointer;\n}\n\n::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend {\n  float: left;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: calc(1.275rem + 0.3vw);\n  line-height: inherit;\n}\n@media (min-width: 1200px) {\n  legend {\n    font-size: 1.5rem;\n  }\n}\nlegend + * {\n  clear: left;\n}\n\n::-webkit-datetime-edit-fields-wrapper,\n::-webkit-datetime-edit-text,\n::-webkit-datetime-edit-minute,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-year-field {\n  padding: 0;\n}\n\n::-webkit-inner-spin-button {\n  height: auto;\n}\n\n[type=search] {\n  outline-offset: -2px;\n  -webkit-appearance: textfield;\n}\n\n/* rtl:raw:\n[type=\"tel\"],\n[type=\"url\"],\n[type=\"email\"],\n[type=\"number\"] {\n  direction: ltr;\n}\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n\n::file-selector-button {\n  font: inherit;\n}\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput {\n  display: inline-block;\n}\n\niframe {\n  border: 0;\n}\n\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n\n.display-1 {\n  font-size: calc(1.625rem + 4.5vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-1 {\n    font-size: 5rem;\n  }\n}\n\n.display-2 {\n  font-size: calc(1.575rem + 3.9vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-2 {\n    font-size: 4.5rem;\n  }\n}\n\n.display-3 {\n  font-size: calc(1.525rem + 3.3vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-3 {\n    font-size: 4rem;\n  }\n}\n\n.display-4 {\n  font-size: calc(1.475rem + 2.7vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-4 {\n    font-size: 3.5rem;\n  }\n}\n\n.display-5 {\n  font-size: calc(1.425rem + 2.1vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-5 {\n    font-size: 3rem;\n  }\n}\n\n.display-6 {\n  font-size: calc(1.375rem + 1.5vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-6 {\n    font-size: 2.5rem;\n  }\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline-item {\n  display: inline-block;\n}\n.list-inline-item:not(:last-child) {\n  margin-right: 0.5rem;\n}\n\n.initialism {\n  font-size: 0.875em;\n  text-transform: uppercase;\n}\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n.blockquote > :last-child {\n  margin-bottom: 0;\n}\n\n.blockquote-footer {\n  margin-top: -1rem;\n  margin-bottom: 1rem;\n  font-size: 0.875em;\n  color: #6c757d;\n}\n.blockquote-footer::before {\n  content: \"— \";\n}\n\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid var(--bs-border-color);\n  border-radius: 0.375rem;\n  max-width: 100%;\n  height: auto;\n}\n\n.figure {\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.figure-caption {\n  font-size: 0.875em;\n  color: #6c757d;\n}\n\n.row {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(-1 * var(--bs-gutter-y));\n  margin-right: calc(-0.5 * var(--bs-gutter-x));\n  margin-left: calc(-0.5 * var(--bs-gutter-x));\n}\n.row > * {\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-top: var(--bs-gutter-y);\n}\n\n.col {\n  flex: 1 0 0%;\n}\n\n.row-cols-auto > * {\n  flex: 0 0 auto;\n  width: auto;\n}\n\n.row-cols-1 > * {\n  flex: 0 0 auto;\n  width: 100%;\n}\n\n.row-cols-2 > * {\n  flex: 0 0 auto;\n  width: 50%;\n}\n\n.row-cols-3 > * {\n  flex: 0 0 auto;\n  width: 33.3333333333%;\n}\n\n.row-cols-4 > * {\n  flex: 0 0 auto;\n  width: 25%;\n}\n\n.row-cols-5 > * {\n  flex: 0 0 auto;\n  width: 20%;\n}\n\n.row-cols-6 > * {\n  flex: 0 0 auto;\n  width: 16.6666666667%;\n}\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n}\n\n.col-1 {\n  flex: 0 0 auto;\n  width: 8.33333333%;\n}\n\n.col-2 {\n  flex: 0 0 auto;\n  width: 16.66666667%;\n}\n\n.col-3 {\n  flex: 0 0 auto;\n  width: 25%;\n}\n\n.col-4 {\n  flex: 0 0 auto;\n  width: 33.33333333%;\n}\n\n.col-5 {\n  flex: 0 0 auto;\n  width: 41.66666667%;\n}\n\n.col-6 {\n  flex: 0 0 auto;\n  width: 50%;\n}\n\n.col-7 {\n  flex: 0 0 auto;\n  width: 58.33333333%;\n}\n\n.col-8 {\n  flex: 0 0 auto;\n  width: 66.66666667%;\n}\n\n.col-9 {\n  flex: 0 0 auto;\n  width: 75%;\n}\n\n.col-10 {\n  flex: 0 0 auto;\n  width: 83.33333333%;\n}\n\n.col-11 {\n  flex: 0 0 auto;\n  width: 91.66666667%;\n}\n\n.col-12 {\n  flex: 0 0 auto;\n  width: 100%;\n}\n\n.offset-1 {\n  margin-left: 8.33333333%;\n}\n\n.offset-2 {\n  margin-left: 16.66666667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.33333333%;\n}\n\n.offset-5 {\n  margin-left: 41.66666667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.33333333%;\n}\n\n.offset-8 {\n  margin-left: 66.66666667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.33333333%;\n}\n\n.offset-11 {\n  margin-left: 91.66666667%;\n}\n\n.g-0,\n.gx-0 {\n  --bs-gutter-x: 0;\n}\n\n.g-0,\n.gy-0 {\n  --bs-gutter-y: 0;\n}\n\n.g-1,\n.gx-1 {\n  --bs-gutter-x: 0.25rem;\n}\n\n.g-1,\n.gy-1 {\n  --bs-gutter-y: 0.25rem;\n}\n\n.g-2,\n.gx-2 {\n  --bs-gutter-x: 0.5rem;\n}\n\n.g-2,\n.gy-2 {\n  --bs-gutter-y: 0.5rem;\n}\n\n.g-3,\n.gx-3 {\n  --bs-gutter-x: 1rem;\n}\n\n.g-3,\n.gy-3 {\n  --bs-gutter-y: 1rem;\n}\n\n.g-4,\n.gx-4 {\n  --bs-gutter-x: 1.5rem;\n}\n\n.g-4,\n.gy-4 {\n  --bs-gutter-y: 1.5rem;\n}\n\n.g-5,\n.gx-5 {\n  --bs-gutter-x: 3rem;\n}\n\n.g-5,\n.gy-5 {\n  --bs-gutter-y: 3rem;\n}\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex: 1 0 0%;\n  }\n  .row-cols-sm-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-sm-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-sm-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-sm-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-sm-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-sm-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-sm-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-sm-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-sm-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-sm-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-sm-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-sm-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-sm-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-sm-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-sm-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-sm-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-sm-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-sm-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-sm-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n  .offset-sm-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-sm-0,\n.gx-sm-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-sm-0,\n.gy-sm-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-sm-1,\n.gx-sm-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-sm-1,\n.gy-sm-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-sm-2,\n.gx-sm-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-sm-2,\n.gy-sm-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-sm-3,\n.gx-sm-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-sm-3,\n.gy-sm-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-sm-4,\n.gx-sm-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-sm-4,\n.gy-sm-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-sm-5,\n.gx-sm-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-sm-5,\n.gy-sm-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 768px) {\n  .col-md {\n    flex: 1 0 0%;\n  }\n  .row-cols-md-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-md-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-md-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-md-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-md-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-md-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-md-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-md-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-md-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-md-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-md-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-md-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-md-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-md-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-md-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-md-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-md-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-md-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-md-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-md-0 {\n    margin-left: 0;\n  }\n  .offset-md-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-md-0,\n.gx-md-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-md-0,\n.gy-md-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-md-1,\n.gx-md-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-md-1,\n.gy-md-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-md-2,\n.gx-md-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-md-2,\n.gy-md-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-md-3,\n.gx-md-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-md-3,\n.gy-md-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-md-4,\n.gx-md-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-md-4,\n.gy-md-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-md-5,\n.gx-md-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-md-5,\n.gy-md-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg {\n    flex: 1 0 0%;\n  }\n  .row-cols-lg-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-lg-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-lg-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-lg-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-lg-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-lg-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-lg-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-lg-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-lg-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-lg-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-lg-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-lg-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-lg-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-lg-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-lg-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-lg-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-lg-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-lg-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-lg-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n  .offset-lg-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-lg-0,\n.gx-lg-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-lg-0,\n.gy-lg-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-lg-1,\n.gx-lg-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-lg-1,\n.gy-lg-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-lg-2,\n.gx-lg-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-lg-2,\n.gy-lg-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-lg-3,\n.gx-lg-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-lg-3,\n.gy-lg-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-lg-4,\n.gx-lg-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-lg-4,\n.gy-lg-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-lg-5,\n.gx-lg-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-lg-5,\n.gy-lg-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1200px) {\n  .col-xl {\n    flex: 1 0 0%;\n  }\n  .row-cols-xl-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-xl-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-xl-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-xl-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-xl-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-xl-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-xl-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-xl-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-xl-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-xl-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-xl-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-xl-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-xl-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-xl-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-xl-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-xl-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-xl-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-xl-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-xl-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n  .offset-xl-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-xl-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n  .offset-xl-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-xl-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n  .offset-xl-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-xl-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n  .offset-xl-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-xl-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-xl-0,\n.gx-xl-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-xl-0,\n.gy-xl-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-xl-1,\n.gx-xl-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-xl-1,\n.gy-xl-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-xl-2,\n.gx-xl-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-xl-2,\n.gy-xl-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-xl-3,\n.gx-xl-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-xl-3,\n.gy-xl-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-xl-4,\n.gx-xl-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-xl-4,\n.gy-xl-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-xl-5,\n.gx-xl-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-xl-5,\n.gy-xl-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1400px) {\n  .col-xxl {\n    flex: 1 0 0%;\n  }\n  .row-cols-xxl-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-xxl-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-xxl-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-xxl-3 > * {\n    flex: 0 0 auto;\n    width: 33.3333333333%;\n  }\n  .row-cols-xxl-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-xxl-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-xxl-6 > * {\n    flex: 0 0 auto;\n    width: 16.6666666667%;\n  }\n  .col-xxl-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-xxl-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-xxl-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-xxl-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-xxl-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-xxl-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-xxl-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-xxl-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-xxl-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-xxl-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-xxl-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-xxl-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-xxl-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-xxl-0 {\n    margin-left: 0;\n  }\n  .offset-xxl-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-xxl-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-xxl-3 {\n    margin-left: 25%;\n  }\n  .offset-xxl-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-xxl-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-xxl-6 {\n    margin-left: 50%;\n  }\n  .offset-xxl-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-xxl-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-xxl-9 {\n    margin-left: 75%;\n  }\n  .offset-xxl-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-xxl-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-xxl-0,\n.gx-xxl-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-xxl-0,\n.gy-xxl-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-xxl-1,\n.gx-xxl-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-xxl-1,\n.gy-xxl-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-xxl-2,\n.gx-xxl-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-xxl-2,\n.gy-xxl-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-xxl-3,\n.gx-xxl-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-xxl-3,\n.gy-xxl-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-xxl-4,\n.gx-xxl-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-xxl-4,\n.gy-xxl-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-xxl-5,\n.gx-xxl-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-xxl-5,\n.gy-xxl-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n.container,\n.container-fluid,\n.container-xxl,\n.container-xl,\n.container-lg,\n.container-md,\n.container-sm {\n  width: 100%;\n  padding-right: var(--bs-gutter-x, 1.5rem);\n  padding-left: var(--bs-gutter-x, 1.5rem);\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container-sm, .container {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container-md, .container-sm, .container {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container-lg, .container-md, .container-sm, .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1140px;\n  }\n}\n@media (min-width: 1400px) {\n  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1320px;\n  }\n}\n/*!\n * Bootstrap Utilities v5.1.3 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.link-primary {\n  color: #0d6efd;\n}\n.link-primary:hover, .link-primary:focus {\n  color: #0a58ca;\n}\n\n.link-secondary {\n  color: #6c757d;\n}\n.link-secondary:hover, .link-secondary:focus {\n  color: #565e64;\n}\n\n.link-success {\n  color: #198754;\n}\n.link-success:hover, .link-success:focus {\n  color: #146c43;\n}\n\n.link-info {\n  color: #0dcaf0;\n}\n.link-info:hover, .link-info:focus {\n  color: #3dd5f3;\n}\n\n.link-warning {\n  color: #ffc107;\n}\n.link-warning:hover, .link-warning:focus {\n  color: #ffcd39;\n}\n\n.link-danger {\n  color: #dc3545;\n}\n.link-danger:hover, .link-danger:focus {\n  color: #b02a37;\n}\n\n.link-light {\n  color: #f8f9fa;\n}\n.link-light:hover, .link-light:focus {\n  color: #f9fafb;\n}\n\n.link-dark {\n  color: #212529;\n}\n.link-dark:hover, .link-dark:focus {\n  color: #1a1e21;\n}\n\n.ratio {\n  position: relative;\n  width: 100%;\n}\n.ratio::before {\n  display: block;\n  padding-top: var(--bs-aspect-ratio);\n  content: \"\";\n}\n.ratio > * {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.ratio-1x1 {\n  --bs-aspect-ratio: 100%;\n}\n\n.ratio-4x3 {\n  --bs-aspect-ratio: 75%;\n}\n\n.ratio-16x9 {\n  --bs-aspect-ratio: 56.25%;\n}\n\n.ratio-21x9 {\n  --bs-aspect-ratio: 42.8571428571%;\n}\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.sticky-top {\n  position: sticky;\n  top: 0;\n  z-index: 1020;\n}\n\n@media (min-width: 576px) {\n  .sticky-sm-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 768px) {\n  .sticky-md-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 992px) {\n  .sticky-lg-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 1200px) {\n  .sticky-xl-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 1400px) {\n  .sticky-xxl-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n.hstack {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-self: stretch;\n}\n\n.vstack {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  align-self: stretch;\n}\n\n.visually-hidden,\n.visually-hidden-focusable:not(:focus):not(:focus-within) {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n}\n\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  content: \"\";\n}\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.vr {\n  display: inline-block;\n  align-self: stretch;\n  width: 1px;\n  min-height: 1em;\n  background-color: currentColor;\n  opacity: 0.25;\n}\n\n.align-baseline {\n  vertical-align: baseline !important;\n}\n\n.align-top {\n  vertical-align: top !important;\n}\n\n.align-middle {\n  vertical-align: middle !important;\n}\n\n.align-bottom {\n  vertical-align: bottom !important;\n}\n\n.align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n\n.align-text-top {\n  vertical-align: text-top !important;\n}\n\n.float-start {\n  float: left !important;\n}\n\n.float-end {\n  float: right !important;\n}\n\n.float-none {\n  float: none !important;\n}\n\n.opacity-0 {\n  opacity: 0 !important;\n}\n\n.opacity-25 {\n  opacity: 0.25 !important;\n}\n\n.opacity-50 {\n  opacity: 0.5 !important;\n}\n\n.opacity-75 {\n  opacity: 0.75 !important;\n}\n\n.opacity-100 {\n  opacity: 1 !important;\n}\n\n.overflow-auto {\n  overflow: auto !important;\n}\n\n.overflow-hidden {\n  overflow: hidden !important;\n}\n\n.overflow-visible {\n  overflow: visible !important;\n}\n\n.overflow-scroll {\n  overflow: scroll !important;\n}\n\n.d-inline {\n  display: inline !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-grid {\n  display: grid !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: inline-flex !important;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}\n\n.shadow-none {\n  box-shadow: none !important;\n}\n\n.position-static {\n  position: static !important;\n}\n\n.position-relative {\n  position: relative !important;\n}\n\n.position-absolute {\n  position: absolute !important;\n}\n\n.position-fixed {\n  position: fixed !important;\n}\n\n.position-sticky {\n  position: sticky !important;\n}\n\n.top-0 {\n  top: 0 !important;\n}\n\n.top-50 {\n  top: 50% !important;\n}\n\n.top-100 {\n  top: 100% !important;\n}\n\n.bottom-0 {\n  bottom: 0 !important;\n}\n\n.bottom-50 {\n  bottom: 50% !important;\n}\n\n.bottom-100 {\n  bottom: 100% !important;\n}\n\n.start-0 {\n  left: 0 !important;\n}\n\n.start-50 {\n  left: 50% !important;\n}\n\n.start-100 {\n  left: 100% !important;\n}\n\n.end-0 {\n  right: 0 !important;\n}\n\n.end-50 {\n  right: 50% !important;\n}\n\n.end-100 {\n  right: 100% !important;\n}\n\n.translate-middle {\n  transform: translate(-50%, -50%) !important;\n}\n\n.translate-middle-x {\n  transform: translateX(-50%) !important;\n}\n\n.translate-middle-y {\n  transform: translateY(-50%) !important;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.border-0 {\n  border: 0 !important;\n}\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n\n.border-top-0 {\n  border-top: 0 !important;\n}\n\n.border-end {\n  border-right: 1px solid #dee2e6 !important;\n}\n\n.border-end-0 {\n  border-right: 0 !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n\n.border-bottom-0 {\n  border-bottom: 0 !important;\n}\n\n.border-start {\n  border-left: 1px solid #dee2e6 !important;\n}\n\n.border-start-0 {\n  border-left: 0 !important;\n}\n\n.border-primary {\n  border-color: #0d6efd !important;\n}\n\n.border-secondary {\n  border-color: #6c757d !important;\n}\n\n.border-success {\n  border-color: #198754 !important;\n}\n\n.border-info {\n  border-color: #0dcaf0 !important;\n}\n\n.border-warning {\n  border-color: #ffc107 !important;\n}\n\n.border-danger {\n  border-color: #dc3545 !important;\n}\n\n.border-light {\n  border-color: #f8f9fa !important;\n}\n\n.border-dark {\n  border-color: #212529 !important;\n}\n\n.border-white {\n  border-color: #fff !important;\n}\n\n.border-1 {\n  border-width: 1px !important;\n}\n\n.border-2 {\n  border-width: 2px !important;\n}\n\n.border-3 {\n  border-width: 3px !important;\n}\n\n.border-4 {\n  border-width: 4px !important;\n}\n\n.border-5 {\n  border-width: 5px !important;\n}\n\n.w-25 {\n  width: 25% !important;\n}\n\n.w-50 {\n  width: 50% !important;\n}\n\n.w-75 {\n  width: 75% !important;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.w-auto {\n  width: auto !important;\n}\n\n.mw-100 {\n  max-width: 100% !important;\n}\n\n.vw-100 {\n  width: 100vw !important;\n}\n\n.min-vw-100 {\n  min-width: 100vw !important;\n}\n\n.h-25 {\n  height: 25% !important;\n}\n\n.h-50 {\n  height: 50% !important;\n}\n\n.h-75 {\n  height: 75% !important;\n}\n\n.h-100 {\n  height: 100% !important;\n}\n\n.h-auto {\n  height: auto !important;\n}\n\n.mh-100 {\n  max-height: 100% !important;\n}\n\n.vh-100 {\n  height: 100vh !important;\n}\n\n.min-vh-100 {\n  min-height: 100vh !important;\n}\n\n.flex-fill {\n  flex: 1 1 auto !important;\n}\n\n.flex-row {\n  flex-direction: row !important;\n}\n\n.flex-column {\n  flex-direction: column !important;\n}\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important;\n}\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important;\n}\n\n.flex-grow-0 {\n  flex-grow: 0 !important;\n}\n\n.flex-grow-1 {\n  flex-grow: 1 !important;\n}\n\n.flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n\n.flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n\n.flex-wrap {\n  flex-wrap: wrap !important;\n}\n\n.flex-nowrap {\n  flex-wrap: nowrap !important;\n}\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n\n.gap-0 {\n  gap: 0 !important;\n}\n\n.gap-1 {\n  gap: 0.25rem !important;\n}\n\n.gap-2 {\n  gap: 0.5rem !important;\n}\n\n.gap-3 {\n  gap: 1rem !important;\n}\n\n.gap-4 {\n  gap: 1.5rem !important;\n}\n\n.gap-5 {\n  gap: 3rem !important;\n}\n\n.justify-content-start {\n  justify-content: flex-start !important;\n}\n\n.justify-content-end {\n  justify-content: flex-end !important;\n}\n\n.justify-content-center {\n  justify-content: center !important;\n}\n\n.justify-content-between {\n  justify-content: space-between !important;\n}\n\n.justify-content-around {\n  justify-content: space-around !important;\n}\n\n.justify-content-evenly {\n  justify-content: space-evenly !important;\n}\n\n.align-items-start {\n  align-items: flex-start !important;\n}\n\n.align-items-end {\n  align-items: flex-end !important;\n}\n\n.align-items-center {\n  align-items: center !important;\n}\n\n.align-items-baseline {\n  align-items: baseline !important;\n}\n\n.align-items-stretch {\n  align-items: stretch !important;\n}\n\n.align-content-start {\n  align-content: flex-start !important;\n}\n\n.align-content-end {\n  align-content: flex-end !important;\n}\n\n.align-content-center {\n  align-content: center !important;\n}\n\n.align-content-between {\n  align-content: space-between !important;\n}\n\n.align-content-around {\n  align-content: space-around !important;\n}\n\n.align-content-stretch {\n  align-content: stretch !important;\n}\n\n.align-self-auto {\n  align-self: auto !important;\n}\n\n.align-self-start {\n  align-self: flex-start !important;\n}\n\n.align-self-end {\n  align-self: flex-end !important;\n}\n\n.align-self-center {\n  align-self: center !important;\n}\n\n.align-self-baseline {\n  align-self: baseline !important;\n}\n\n.align-self-stretch {\n  align-self: stretch !important;\n}\n\n.order-first {\n  order: -1 !important;\n}\n\n.order-0 {\n  order: 0 !important;\n}\n\n.order-1 {\n  order: 1 !important;\n}\n\n.order-2 {\n  order: 2 !important;\n}\n\n.order-3 {\n  order: 3 !important;\n}\n\n.order-4 {\n  order: 4 !important;\n}\n\n.order-5 {\n  order: 5 !important;\n}\n\n.order-last {\n  order: 6 !important;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mx-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n\n.mx-1 {\n  margin-right: 0.25rem !important;\n  margin-left: 0.25rem !important;\n}\n\n.mx-2 {\n  margin-right: 0.5rem !important;\n  margin-left: 0.5rem !important;\n}\n\n.mx-3 {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important;\n}\n\n.mx-4 {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important;\n}\n\n.mx-5 {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.my-3 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.my-4 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n\n.my-5 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n\n.my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n\n.mt-0 {\n  margin-top: 0 !important;\n}\n\n.mt-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mt-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mt-3 {\n  margin-top: 1rem !important;\n}\n\n.mt-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mt-5 {\n  margin-top: 3rem !important;\n}\n\n.mt-auto {\n  margin-top: auto !important;\n}\n\n.me-0 {\n  margin-right: 0 !important;\n}\n\n.me-1 {\n  margin-right: 0.25rem !important;\n}\n\n.me-2 {\n  margin-right: 0.5rem !important;\n}\n\n.me-3 {\n  margin-right: 1rem !important;\n}\n\n.me-4 {\n  margin-right: 1.5rem !important;\n}\n\n.me-5 {\n  margin-right: 3rem !important;\n}\n\n.me-auto {\n  margin-right: auto !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.mb-3 {\n  margin-bottom: 1rem !important;\n}\n\n.mb-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.mb-5 {\n  margin-bottom: 3rem !important;\n}\n\n.mb-auto {\n  margin-bottom: auto !important;\n}\n\n.ms-0 {\n  margin-left: 0 !important;\n}\n\n.ms-1 {\n  margin-left: 0.25rem !important;\n}\n\n.ms-2 {\n  margin-left: 0.5rem !important;\n}\n\n.ms-3 {\n  margin-left: 1rem !important;\n}\n\n.ms-4 {\n  margin-left: 1.5rem !important;\n}\n\n.ms-5 {\n  margin-left: 3rem !important;\n}\n\n.ms-auto {\n  margin-left: auto !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.px-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n\n.px-1 {\n  padding-right: 0.25rem !important;\n  padding-left: 0.25rem !important;\n}\n\n.px-2 {\n  padding-right: 0.5rem !important;\n  padding-left: 0.5rem !important;\n}\n\n.px-3 {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important;\n}\n\n.px-4 {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important;\n}\n\n.px-5 {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important;\n}\n\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n}\n\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n\n.py-3 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.py-4 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\n.py-5 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.pt-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pt-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pt-3 {\n  padding-top: 1rem !important;\n}\n\n.pt-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pt-5 {\n  padding-top: 3rem !important;\n}\n\n.pe-0 {\n  padding-right: 0 !important;\n}\n\n.pe-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pe-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pe-3 {\n  padding-right: 1rem !important;\n}\n\n.pe-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pe-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pb-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pb-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pb-5 {\n  padding-bottom: 3rem !important;\n}\n\n.ps-0 {\n  padding-left: 0 !important;\n}\n\n.ps-1 {\n  padding-left: 0.25rem !important;\n}\n\n.ps-2 {\n  padding-left: 0.5rem !important;\n}\n\n.ps-3 {\n  padding-left: 1rem !important;\n}\n\n.ps-4 {\n  padding-left: 1.5rem !important;\n}\n\n.ps-5 {\n  padding-left: 3rem !important;\n}\n\n.font-monospace {\n  font-family: var(--bs-font-monospace) !important;\n}\n\n.fs-1 {\n  font-size: calc(1.375rem + 1.5vw) !important;\n}\n\n.fs-2 {\n  font-size: calc(1.325rem + 0.9vw) !important;\n}\n\n.fs-3 {\n  font-size: calc(1.3rem + 0.6vw) !important;\n}\n\n.fs-4 {\n  font-size: calc(1.275rem + 0.3vw) !important;\n}\n\n.fs-5 {\n  font-size: 1.25rem !important;\n}\n\n.fs-6 {\n  font-size: 1rem !important;\n}\n\n.fst-italic {\n  font-style: italic !important;\n}\n\n.fst-normal {\n  font-style: normal !important;\n}\n\n.fw-light {\n  font-weight: 300 !important;\n}\n\n.fw-lighter {\n  font-weight: lighter !important;\n}\n\n.fw-normal {\n  font-weight: 400 !important;\n}\n\n.fw-bold {\n  font-weight: 700 !important;\n}\n\n.fw-bolder {\n  font-weight: bolder !important;\n}\n\n.lh-1 {\n  line-height: 1 !important;\n}\n\n.lh-sm {\n  line-height: 1.25 !important;\n}\n\n.lh-base {\n  line-height: 1.5 !important;\n}\n\n.lh-lg {\n  line-height: 2 !important;\n}\n\n.text-start {\n  text-align: left !important;\n}\n\n.text-end {\n  text-align: right !important;\n}\n\n.text-center {\n  text-align: center !important;\n}\n\n.text-decoration-none {\n  text-decoration: none !important;\n}\n\n.text-decoration-underline {\n  text-decoration: underline !important;\n}\n\n.text-decoration-line-through {\n  text-decoration: line-through !important;\n}\n\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n\n.text-wrap {\n  white-space: normal !important;\n}\n\n.text-nowrap {\n  white-space: nowrap !important;\n}\n\n/* rtl:begin:remove */\n.text-break {\n  word-wrap: break-word !important;\n  word-break: break-word !important;\n}\n\n/* rtl:end:remove */\n.text-primary {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-secondary {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-success {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-info {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-warning {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-danger {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-light {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-dark {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-black {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-white {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-body {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-muted {\n  --bs-text-opacity: 1;\n  color: #6c757d !important;\n}\n\n.text-black-50 {\n  --bs-text-opacity: 1;\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.text-white-50 {\n  --bs-text-opacity: 1;\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.text-reset {\n  --bs-text-opacity: 1;\n  color: inherit !important;\n}\n\n.text-opacity-25 {\n  --bs-text-opacity: 0.25;\n}\n\n.text-opacity-50 {\n  --bs-text-opacity: 0.5;\n}\n\n.text-opacity-75 {\n  --bs-text-opacity: 0.75;\n}\n\n.text-opacity-100 {\n  --bs-text-opacity: 1;\n}\n\n.bg-primary {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-secondary {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-success {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-info {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-warning {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-danger {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-light {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-dark {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-black {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-white {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-body {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-transparent {\n  --bs-bg-opacity: 1;\n  background-color: transparent !important;\n}\n\n.bg-opacity-10 {\n  --bs-bg-opacity: 0.1;\n}\n\n.bg-opacity-25 {\n  --bs-bg-opacity: 0.25;\n}\n\n.bg-opacity-50 {\n  --bs-bg-opacity: 0.5;\n}\n\n.bg-opacity-75 {\n  --bs-bg-opacity: 0.75;\n}\n\n.bg-opacity-100 {\n  --bs-bg-opacity: 1;\n}\n\n.bg-gradient {\n  background-image: var(--bs-gradient) !important;\n}\n\n.user-select-all {\n  user-select: all !important;\n}\n\n.user-select-auto {\n  user-select: auto !important;\n}\n\n.user-select-none {\n  user-select: none !important;\n}\n\n.pe-none {\n  pointer-events: none !important;\n}\n\n.pe-auto {\n  pointer-events: auto !important;\n}\n\n.rounded {\n  border-radius: 0.375rem !important;\n}\n\n.rounded-0 {\n  border-radius: 0 !important;\n}\n\n.rounded-1 {\n  border-radius: 0.25rem !important;\n}\n\n.rounded-2 {\n  border-radius: 0.375rem !important;\n}\n\n.rounded-3 {\n  border-radius: 0.5rem !important;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.rounded-pill {\n  border-radius: 50rem !important;\n}\n\n.rounded-top {\n  border-top-left-radius: 0.375rem !important;\n  border-top-right-radius: 0.375rem !important;\n}\n\n.rounded-end {\n  border-top-right-radius: 0.375rem !important;\n  border-bottom-right-radius: 0.375rem !important;\n}\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.375rem !important;\n  border-bottom-left-radius: 0.375rem !important;\n}\n\n.rounded-start {\n  border-bottom-left-radius: 0.375rem !important;\n  border-top-left-radius: 0.375rem !important;\n}\n\n.visible {\n  visibility: visible !important;\n}\n\n.invisible {\n  visibility: hidden !important;\n}\n\n@media (min-width: 576px) {\n  .float-sm-start {\n    float: left !important;\n  }\n  .float-sm-end {\n    float: right !important;\n  }\n  .float-sm-none {\n    float: none !important;\n  }\n  .d-sm-inline {\n    display: inline !important;\n  }\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n  .d-sm-block {\n    display: block !important;\n  }\n  .d-sm-grid {\n    display: grid !important;\n  }\n  .d-sm-table {\n    display: table !important;\n  }\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n  .d-sm-flex {\n    display: flex !important;\n  }\n  .d-sm-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-sm-none {\n    display: none !important;\n  }\n  .flex-sm-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-sm-row {\n    flex-direction: row !important;\n  }\n  .flex-sm-column {\n    flex-direction: column !important;\n  }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .gap-sm-0 {\n    gap: 0 !important;\n  }\n  .gap-sm-1 {\n    gap: 0.25rem !important;\n  }\n  .gap-sm-2 {\n    gap: 0.5rem !important;\n  }\n  .gap-sm-3 {\n    gap: 1rem !important;\n  }\n  .gap-sm-4 {\n    gap: 1.5rem !important;\n  }\n  .gap-sm-5 {\n    gap: 3rem !important;\n  }\n  .justify-content-sm-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-sm-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-sm-center {\n    justify-content: center !important;\n  }\n  .justify-content-sm-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-sm-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-sm-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-sm-start {\n    align-items: flex-start !important;\n  }\n  .align-items-sm-end {\n    align-items: flex-end !important;\n  }\n  .align-items-sm-center {\n    align-items: center !important;\n  }\n  .align-items-sm-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-sm-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-sm-start {\n    align-content: flex-start !important;\n  }\n  .align-content-sm-end {\n    align-content: flex-end !important;\n  }\n  .align-content-sm-center {\n    align-content: center !important;\n  }\n  .align-content-sm-between {\n    align-content: space-between !important;\n  }\n  .align-content-sm-around {\n    align-content: space-around !important;\n  }\n  .align-content-sm-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-sm-auto {\n    align-self: auto !important;\n  }\n  .align-self-sm-start {\n    align-self: flex-start !important;\n  }\n  .align-self-sm-end {\n    align-self: flex-end !important;\n  }\n  .align-self-sm-center {\n    align-self: center !important;\n  }\n  .align-self-sm-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-sm-stretch {\n    align-self: stretch !important;\n  }\n  .order-sm-first {\n    order: -1 !important;\n  }\n  .order-sm-0 {\n    order: 0 !important;\n  }\n  .order-sm-1 {\n    order: 1 !important;\n  }\n  .order-sm-2 {\n    order: 2 !important;\n  }\n  .order-sm-3 {\n    order: 3 !important;\n  }\n  .order-sm-4 {\n    order: 4 !important;\n  }\n  .order-sm-5 {\n    order: 5 !important;\n  }\n  .order-sm-last {\n    order: 6 !important;\n  }\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n  .m-sm-auto {\n    margin: auto !important;\n  }\n  .mx-sm-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-sm-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-sm-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-sm-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-sm-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-sm-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-sm-0 {\n    margin-top: 0 !important;\n  }\n  .mt-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-sm-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-sm-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-sm-auto {\n    margin-top: auto !important;\n  }\n  .me-sm-0 {\n    margin-right: 0 !important;\n  }\n  .me-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-sm-3 {\n    margin-right: 1rem !important;\n  }\n  .me-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-sm-5 {\n    margin-right: 3rem !important;\n  }\n  .me-sm-auto {\n    margin-right: auto !important;\n  }\n  .mb-sm-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-sm-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-sm-0 {\n    margin-left: 0 !important;\n  }\n  .ms-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-sm-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-sm-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-sm-auto {\n    margin-left: auto !important;\n  }\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n  .px-sm-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-sm-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-sm-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-sm-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-sm-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-sm-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-sm-0 {\n    padding-top: 0 !important;\n  }\n  .pt-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-sm-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-sm-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-sm-0 {\n    padding-right: 0 !important;\n  }\n  .pe-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-sm-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-sm-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-sm-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-sm-0 {\n    padding-left: 0 !important;\n  }\n  .ps-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-sm-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-sm-5 {\n    padding-left: 3rem !important;\n  }\n  .text-sm-start {\n    text-align: left !important;\n  }\n  .text-sm-end {\n    text-align: right !important;\n  }\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 768px) {\n  .float-md-start {\n    float: left !important;\n  }\n  .float-md-end {\n    float: right !important;\n  }\n  .float-md-none {\n    float: none !important;\n  }\n  .d-md-inline {\n    display: inline !important;\n  }\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n  .d-md-block {\n    display: block !important;\n  }\n  .d-md-grid {\n    display: grid !important;\n  }\n  .d-md-table {\n    display: table !important;\n  }\n  .d-md-table-row {\n    display: table-row !important;\n  }\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n  .d-md-flex {\n    display: flex !important;\n  }\n  .d-md-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-md-none {\n    display: none !important;\n  }\n  .flex-md-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-md-row {\n    flex-direction: row !important;\n  }\n  .flex-md-column {\n    flex-direction: column !important;\n  }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-md-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-md-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-md-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .gap-md-0 {\n    gap: 0 !important;\n  }\n  .gap-md-1 {\n    gap: 0.25rem !important;\n  }\n  .gap-md-2 {\n    gap: 0.5rem !important;\n  }\n  .gap-md-3 {\n    gap: 1rem !important;\n  }\n  .gap-md-4 {\n    gap: 1.5rem !important;\n  }\n  .gap-md-5 {\n    gap: 3rem !important;\n  }\n  .justify-content-md-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-md-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-md-center {\n    justify-content: center !important;\n  }\n  .justify-content-md-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-md-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-md-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-md-start {\n    align-items: flex-start !important;\n  }\n  .align-items-md-end {\n    align-items: flex-end !important;\n  }\n  .align-items-md-center {\n    align-items: center !important;\n  }\n  .align-items-md-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-md-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-md-start {\n    align-content: flex-start !important;\n  }\n  .align-content-md-end {\n    align-content: flex-end !important;\n  }\n  .align-content-md-center {\n    align-content: center !important;\n  }\n  .align-content-md-between {\n    align-content: space-between !important;\n  }\n  .align-content-md-around {\n    align-content: space-around !important;\n  }\n  .align-content-md-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-md-auto {\n    align-self: auto !important;\n  }\n  .align-self-md-start {\n    align-self: flex-start !important;\n  }\n  .align-self-md-end {\n    align-self: flex-end !important;\n  }\n  .align-self-md-center {\n    align-self: center !important;\n  }\n  .align-self-md-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-md-stretch {\n    align-self: stretch !important;\n  }\n  .order-md-first {\n    order: -1 !important;\n  }\n  .order-md-0 {\n    order: 0 !important;\n  }\n  .order-md-1 {\n    order: 1 !important;\n  }\n  .order-md-2 {\n    order: 2 !important;\n  }\n  .order-md-3 {\n    order: 3 !important;\n  }\n  .order-md-4 {\n    order: 4 !important;\n  }\n  .order-md-5 {\n    order: 5 !important;\n  }\n  .order-md-last {\n    order: 6 !important;\n  }\n  .m-md-0 {\n    margin: 0 !important;\n  }\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n  .m-md-auto {\n    margin: auto !important;\n  }\n  .mx-md-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-md-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-md-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-md-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-md-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-md-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-md-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-md-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-md-0 {\n    margin-top: 0 !important;\n  }\n  .mt-md-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-md-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-md-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-md-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-md-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-md-auto {\n    margin-top: auto !important;\n  }\n  .me-md-0 {\n    margin-right: 0 !important;\n  }\n  .me-md-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-md-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-md-3 {\n    margin-right: 1rem !important;\n  }\n  .me-md-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-md-5 {\n    margin-right: 3rem !important;\n  }\n  .me-md-auto {\n    margin-right: auto !important;\n  }\n  .mb-md-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-md-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-md-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-md-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-md-0 {\n    margin-left: 0 !important;\n  }\n  .ms-md-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-md-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-md-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-md-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-md-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-md-auto {\n    margin-left: auto !important;\n  }\n  .p-md-0 {\n    padding: 0 !important;\n  }\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n  .px-md-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-md-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-md-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-md-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-md-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-md-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-md-0 {\n    padding-top: 0 !important;\n  }\n  .pt-md-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-md-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-md-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-md-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-md-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-md-0 {\n    padding-right: 0 !important;\n  }\n  .pe-md-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-md-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-md-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-md-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-md-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-md-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-md-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-md-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-md-0 {\n    padding-left: 0 !important;\n  }\n  .ps-md-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-md-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-md-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-md-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-md-5 {\n    padding-left: 3rem !important;\n  }\n  .text-md-start {\n    text-align: left !important;\n  }\n  .text-md-end {\n    text-align: right !important;\n  }\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 992px) {\n  .float-lg-start {\n    float: left !important;\n  }\n  .float-lg-end {\n    float: right !important;\n  }\n  .float-lg-none {\n    float: none !important;\n  }\n  .d-lg-inline {\n    display: inline !important;\n  }\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n  .d-lg-block {\n    display: block !important;\n  }\n  .d-lg-grid {\n    display: grid !important;\n  }\n  .d-lg-table {\n    display: table !important;\n  }\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n  .d-lg-flex {\n    display: flex !important;\n  }\n  .d-lg-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-lg-none {\n    display: none !important;\n  }\n  .flex-lg-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-lg-row {\n    flex-direction: row !important;\n  }\n  .flex-lg-column {\n    flex-direction: column !important;\n  }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .gap-lg-0 {\n    gap: 0 !important;\n  }\n  .gap-lg-1 {\n    gap: 0.25rem !important;\n  }\n  .gap-lg-2 {\n    gap: 0.5rem !important;\n  }\n  .gap-lg-3 {\n    gap: 1rem !important;\n  }\n  .gap-lg-4 {\n    gap: 1.5rem !important;\n  }\n  .gap-lg-5 {\n    gap: 3rem !important;\n  }\n  .justify-content-lg-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-lg-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-lg-center {\n    justify-content: center !important;\n  }\n  .justify-content-lg-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-lg-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-lg-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-lg-start {\n    align-items: flex-start !important;\n  }\n  .align-items-lg-end {\n    align-items: flex-end !important;\n  }\n  .align-items-lg-center {\n    align-items: center !important;\n  }\n  .align-items-lg-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-lg-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-lg-start {\n    align-content: flex-start !important;\n  }\n  .align-content-lg-end {\n    align-content: flex-end !important;\n  }\n  .align-content-lg-center {\n    align-content: center !important;\n  }\n  .align-content-lg-between {\n    align-content: space-between !important;\n  }\n  .align-content-lg-around {\n    align-content: space-around !important;\n  }\n  .align-content-lg-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-lg-auto {\n    align-self: auto !important;\n  }\n  .align-self-lg-start {\n    align-self: flex-start !important;\n  }\n  .align-self-lg-end {\n    align-self: flex-end !important;\n  }\n  .align-self-lg-center {\n    align-self: center !important;\n  }\n  .align-self-lg-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-lg-stretch {\n    align-self: stretch !important;\n  }\n  .order-lg-first {\n    order: -1 !important;\n  }\n  .order-lg-0 {\n    order: 0 !important;\n  }\n  .order-lg-1 {\n    order: 1 !important;\n  }\n  .order-lg-2 {\n    order: 2 !important;\n  }\n  .order-lg-3 {\n    order: 3 !important;\n  }\n  .order-lg-4 {\n    order: 4 !important;\n  }\n  .order-lg-5 {\n    order: 5 !important;\n  }\n  .order-lg-last {\n    order: 6 !important;\n  }\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n  .m-lg-auto {\n    margin: auto !important;\n  }\n  .mx-lg-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-lg-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-lg-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-lg-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-lg-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-lg-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-lg-0 {\n    margin-top: 0 !important;\n  }\n  .mt-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-lg-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-lg-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-lg-auto {\n    margin-top: auto !important;\n  }\n  .me-lg-0 {\n    margin-right: 0 !important;\n  }\n  .me-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-lg-3 {\n    margin-right: 1rem !important;\n  }\n  .me-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-lg-5 {\n    margin-right: 3rem !important;\n  }\n  .me-lg-auto {\n    margin-right: auto !important;\n  }\n  .mb-lg-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-lg-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-lg-0 {\n    margin-left: 0 !important;\n  }\n  .ms-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-lg-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-lg-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-lg-auto {\n    margin-left: auto !important;\n  }\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n  .px-lg-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-lg-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-lg-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-lg-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-lg-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-lg-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-lg-0 {\n    padding-top: 0 !important;\n  }\n  .pt-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-lg-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-lg-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-lg-0 {\n    padding-right: 0 !important;\n  }\n  .pe-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-lg-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-lg-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-lg-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-lg-0 {\n    padding-left: 0 !important;\n  }\n  .ps-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-lg-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-lg-5 {\n    padding-left: 3rem !important;\n  }\n  .text-lg-start {\n    text-align: left !important;\n  }\n  .text-lg-end {\n    text-align: right !important;\n  }\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1200px) {\n  .float-xl-start {\n    float: left !important;\n  }\n  .float-xl-end {\n    float: right !important;\n  }\n  .float-xl-none {\n    float: none !important;\n  }\n  .d-xl-inline {\n    display: inline !important;\n  }\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n  .d-xl-block {\n    display: block !important;\n  }\n  .d-xl-grid {\n    display: grid !important;\n  }\n  .d-xl-table {\n    display: table !important;\n  }\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n  .d-xl-flex {\n    display: flex !important;\n  }\n  .d-xl-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-xl-none {\n    display: none !important;\n  }\n  .flex-xl-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-xl-row {\n    flex-direction: row !important;\n  }\n  .flex-xl-column {\n    flex-direction: column !important;\n  }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .gap-xl-0 {\n    gap: 0 !important;\n  }\n  .gap-xl-1 {\n    gap: 0.25rem !important;\n  }\n  .gap-xl-2 {\n    gap: 0.5rem !important;\n  }\n  .gap-xl-3 {\n    gap: 1rem !important;\n  }\n  .gap-xl-4 {\n    gap: 1.5rem !important;\n  }\n  .gap-xl-5 {\n    gap: 3rem !important;\n  }\n  .justify-content-xl-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-xl-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-xl-center {\n    justify-content: center !important;\n  }\n  .justify-content-xl-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-xl-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-xl-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-xl-start {\n    align-items: flex-start !important;\n  }\n  .align-items-xl-end {\n    align-items: flex-end !important;\n  }\n  .align-items-xl-center {\n    align-items: center !important;\n  }\n  .align-items-xl-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-xl-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-xl-start {\n    align-content: flex-start !important;\n  }\n  .align-content-xl-end {\n    align-content: flex-end !important;\n  }\n  .align-content-xl-center {\n    align-content: center !important;\n  }\n  .align-content-xl-between {\n    align-content: space-between !important;\n  }\n  .align-content-xl-around {\n    align-content: space-around !important;\n  }\n  .align-content-xl-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-xl-auto {\n    align-self: auto !important;\n  }\n  .align-self-xl-start {\n    align-self: flex-start !important;\n  }\n  .align-self-xl-end {\n    align-self: flex-end !important;\n  }\n  .align-self-xl-center {\n    align-self: center !important;\n  }\n  .align-self-xl-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-xl-stretch {\n    align-self: stretch !important;\n  }\n  .order-xl-first {\n    order: -1 !important;\n  }\n  .order-xl-0 {\n    order: 0 !important;\n  }\n  .order-xl-1 {\n    order: 1 !important;\n  }\n  .order-xl-2 {\n    order: 2 !important;\n  }\n  .order-xl-3 {\n    order: 3 !important;\n  }\n  .order-xl-4 {\n    order: 4 !important;\n  }\n  .order-xl-5 {\n    order: 5 !important;\n  }\n  .order-xl-last {\n    order: 6 !important;\n  }\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n  .m-xl-auto {\n    margin: auto !important;\n  }\n  .mx-xl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-xl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-xl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-xl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-xl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-xl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-xl-0 {\n    margin-top: 0 !important;\n  }\n  .mt-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-xl-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-xl-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-xl-auto {\n    margin-top: auto !important;\n  }\n  .me-xl-0 {\n    margin-right: 0 !important;\n  }\n  .me-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-xl-3 {\n    margin-right: 1rem !important;\n  }\n  .me-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-xl-5 {\n    margin-right: 3rem !important;\n  }\n  .me-xl-auto {\n    margin-right: auto !important;\n  }\n  .mb-xl-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-xl-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-xl-0 {\n    margin-left: 0 !important;\n  }\n  .ms-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-xl-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-xl-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-xl-auto {\n    margin-left: auto !important;\n  }\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n  .px-xl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-xl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-xl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-xl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-xl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-xl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-xl-0 {\n    padding-top: 0 !important;\n  }\n  .pt-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-xl-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-xl-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-xl-0 {\n    padding-right: 0 !important;\n  }\n  .pe-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-xl-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-xl-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-xl-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-xl-0 {\n    padding-left: 0 !important;\n  }\n  .ps-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-xl-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-xl-5 {\n    padding-left: 3rem !important;\n  }\n  .text-xl-start {\n    text-align: left !important;\n  }\n  .text-xl-end {\n    text-align: right !important;\n  }\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1400px) {\n  .float-xxl-start {\n    float: left !important;\n  }\n  .float-xxl-end {\n    float: right !important;\n  }\n  .float-xxl-none {\n    float: none !important;\n  }\n  .d-xxl-inline {\n    display: inline !important;\n  }\n  .d-xxl-inline-block {\n    display: inline-block !important;\n  }\n  .d-xxl-block {\n    display: block !important;\n  }\n  .d-xxl-grid {\n    display: grid !important;\n  }\n  .d-xxl-table {\n    display: table !important;\n  }\n  .d-xxl-table-row {\n    display: table-row !important;\n  }\n  .d-xxl-table-cell {\n    display: table-cell !important;\n  }\n  .d-xxl-flex {\n    display: flex !important;\n  }\n  .d-xxl-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-xxl-none {\n    display: none !important;\n  }\n  .flex-xxl-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-xxl-row {\n    flex-direction: row !important;\n  }\n  .flex-xxl-column {\n    flex-direction: column !important;\n  }\n  .flex-xxl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-xxl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-xxl-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-xxl-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-xxl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-xxl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-xxl-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-xxl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-xxl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .gap-xxl-0 {\n    gap: 0 !important;\n  }\n  .gap-xxl-1 {\n    gap: 0.25rem !important;\n  }\n  .gap-xxl-2 {\n    gap: 0.5rem !important;\n  }\n  .gap-xxl-3 {\n    gap: 1rem !important;\n  }\n  .gap-xxl-4 {\n    gap: 1.5rem !important;\n  }\n  .gap-xxl-5 {\n    gap: 3rem !important;\n  }\n  .justify-content-xxl-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-xxl-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-xxl-center {\n    justify-content: center !important;\n  }\n  .justify-content-xxl-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-xxl-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-xxl-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-xxl-start {\n    align-items: flex-start !important;\n  }\n  .align-items-xxl-end {\n    align-items: flex-end !important;\n  }\n  .align-items-xxl-center {\n    align-items: center !important;\n  }\n  .align-items-xxl-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-xxl-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-xxl-start {\n    align-content: flex-start !important;\n  }\n  .align-content-xxl-end {\n    align-content: flex-end !important;\n  }\n  .align-content-xxl-center {\n    align-content: center !important;\n  }\n  .align-content-xxl-between {\n    align-content: space-between !important;\n  }\n  .align-content-xxl-around {\n    align-content: space-around !important;\n  }\n  .align-content-xxl-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-xxl-auto {\n    align-self: auto !important;\n  }\n  .align-self-xxl-start {\n    align-self: flex-start !important;\n  }\n  .align-self-xxl-end {\n    align-self: flex-end !important;\n  }\n  .align-self-xxl-center {\n    align-self: center !important;\n  }\n  .align-self-xxl-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-xxl-stretch {\n    align-self: stretch !important;\n  }\n  .order-xxl-first {\n    order: -1 !important;\n  }\n  .order-xxl-0 {\n    order: 0 !important;\n  }\n  .order-xxl-1 {\n    order: 1 !important;\n  }\n  .order-xxl-2 {\n    order: 2 !important;\n  }\n  .order-xxl-3 {\n    order: 3 !important;\n  }\n  .order-xxl-4 {\n    order: 4 !important;\n  }\n  .order-xxl-5 {\n    order: 5 !important;\n  }\n  .order-xxl-last {\n    order: 6 !important;\n  }\n  .m-xxl-0 {\n    margin: 0 !important;\n  }\n  .m-xxl-1 {\n    margin: 0.25rem !important;\n  }\n  .m-xxl-2 {\n    margin: 0.5rem !important;\n  }\n  .m-xxl-3 {\n    margin: 1rem !important;\n  }\n  .m-xxl-4 {\n    margin: 1.5rem !important;\n  }\n  .m-xxl-5 {\n    margin: 3rem !important;\n  }\n  .m-xxl-auto {\n    margin: auto !important;\n  }\n  .mx-xxl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-xxl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-xxl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-xxl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-xxl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-xxl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-xxl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-xxl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-xxl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-xxl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-xxl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-xxl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-xxl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-xxl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-xxl-0 {\n    margin-top: 0 !important;\n  }\n  .mt-xxl-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-xxl-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-xxl-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-xxl-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-xxl-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-xxl-auto {\n    margin-top: auto !important;\n  }\n  .me-xxl-0 {\n    margin-right: 0 !important;\n  }\n  .me-xxl-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-xxl-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-xxl-3 {\n    margin-right: 1rem !important;\n  }\n  .me-xxl-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-xxl-5 {\n    margin-right: 3rem !important;\n  }\n  .me-xxl-auto {\n    margin-right: auto !important;\n  }\n  .mb-xxl-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-xxl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-xxl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-xxl-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-xxl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-xxl-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-xxl-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-xxl-0 {\n    margin-left: 0 !important;\n  }\n  .ms-xxl-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-xxl-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-xxl-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-xxl-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-xxl-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-xxl-auto {\n    margin-left: auto !important;\n  }\n  .p-xxl-0 {\n    padding: 0 !important;\n  }\n  .p-xxl-1 {\n    padding: 0.25rem !important;\n  }\n  .p-xxl-2 {\n    padding: 0.5rem !important;\n  }\n  .p-xxl-3 {\n    padding: 1rem !important;\n  }\n  .p-xxl-4 {\n    padding: 1.5rem !important;\n  }\n  .p-xxl-5 {\n    padding: 3rem !important;\n  }\n  .px-xxl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-xxl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-xxl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-xxl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-xxl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-xxl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-xxl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-xxl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-xxl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-xxl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-xxl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-xxl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-xxl-0 {\n    padding-top: 0 !important;\n  }\n  .pt-xxl-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-xxl-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-xxl-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-xxl-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-xxl-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-xxl-0 {\n    padding-right: 0 !important;\n  }\n  .pe-xxl-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-xxl-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-xxl-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-xxl-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-xxl-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-xxl-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-xxl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-xxl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-xxl-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-xxl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-xxl-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-xxl-0 {\n    padding-left: 0 !important;\n  }\n  .ps-xxl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-xxl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-xxl-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-xxl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-xxl-5 {\n    padding-left: 3rem !important;\n  }\n  .text-xxl-start {\n    text-align: left !important;\n  }\n  .text-xxl-end {\n    text-align: right !important;\n  }\n  .text-xxl-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1200px) {\n  .fs-1 {\n    font-size: 2.5rem !important;\n  }\n  .fs-2 {\n    font-size: 2rem !important;\n  }\n  .fs-3 {\n    font-size: 1.75rem !important;\n  }\n  .fs-4 {\n    font-size: 1.5rem !important;\n  }\n}\n@media print {\n  .d-print-inline {\n    display: inline !important;\n  }\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n  .d-print-block {\n    display: block !important;\n  }\n  .d-print-grid {\n    display: grid !important;\n  }\n  .d-print-table {\n    display: table !important;\n  }\n  .d-print-table-row {\n    display: table-row !important;\n  }\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n  .d-print-flex {\n    display: flex !important;\n  }\n  .d-print-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-print-none {\n    display: none !important;\n  }\n}\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  border-radius: 0.375rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .btn {\n    transition: none;\n  }\n}\n.btn:hover {\n  color: #212529;\n}\n.btn-check:focus + .btn, .btn:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.btn:disabled, .btn.disabled, fieldset:disabled .btn {\n  pointer-events: none;\n  opacity: 0.65;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: #0b5ed7;\n  border-color: #0a58ca;\n}\n.btn-check:focus + .btn-primary, .btn-primary:focus {\n  color: #fff;\n  background-color: #0b5ed7;\n  border-color: #0a58ca;\n  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);\n}\n.btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #0a58ca;\n  border-color: #0a53be;\n}\n.btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);\n}\n.btn-primary:disabled, .btn-primary.disabled {\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n\n.btn-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-secondary:hover {\n  color: #fff;\n  background-color: #5c636a;\n  border-color: #565e64;\n}\n.btn-check:focus + .btn-secondary, .btn-secondary:focus {\n  color: #fff;\n  background-color: #5c636a;\n  border-color: #565e64;\n  box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);\n}\n.btn-check:checked + .btn-secondary, .btn-check:active + .btn-secondary, .btn-secondary:active, .btn-secondary.active, .show > .btn-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #565e64;\n  border-color: #51585e;\n}\n.btn-check:checked + .btn-secondary:focus, .btn-check:active + .btn-secondary:focus, .btn-secondary:active:focus, .btn-secondary.active:focus, .show > .btn-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);\n}\n.btn-secondary:disabled, .btn-secondary.disabled {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #198754;\n  border-color: #198754;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #157347;\n  border-color: #146c43;\n}\n.btn-check:focus + .btn-success, .btn-success:focus {\n  color: #fff;\n  background-color: #157347;\n  border-color: #146c43;\n  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);\n}\n.btn-check:checked + .btn-success, .btn-check:active + .btn-success, .btn-success:active, .btn-success.active, .show > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #146c43;\n  border-color: #13653f;\n}\n.btn-check:checked + .btn-success:focus, .btn-check:active + .btn-success:focus, .btn-success:active:focus, .btn-success.active:focus, .show > .btn-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);\n}\n.btn-success:disabled, .btn-success.disabled {\n  color: #fff;\n  background-color: #198754;\n  border-color: #198754;\n}\n\n.btn-info {\n  color: #000;\n  background-color: #0dcaf0;\n  border-color: #0dcaf0;\n}\n.btn-info:hover {\n  color: #000;\n  background-color: #31d2f2;\n  border-color: #25cff2;\n}\n.btn-check:focus + .btn-info, .btn-info:focus {\n  color: #000;\n  background-color: #31d2f2;\n  border-color: #25cff2;\n  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);\n}\n.btn-check:checked + .btn-info, .btn-check:active + .btn-info, .btn-info:active, .btn-info.active, .show > .btn-info.dropdown-toggle {\n  color: #000;\n  background-color: #3dd5f3;\n  border-color: #25cff2;\n}\n.btn-check:checked + .btn-info:focus, .btn-check:active + .btn-info:focus, .btn-info:active:focus, .btn-info.active:focus, .show > .btn-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);\n}\n.btn-info:disabled, .btn-info.disabled {\n  color: #000;\n  background-color: #0dcaf0;\n  border-color: #0dcaf0;\n}\n\n.btn-warning {\n  color: #000;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-warning:hover {\n  color: #000;\n  background-color: #ffca2c;\n  border-color: #ffc720;\n}\n.btn-check:focus + .btn-warning, .btn-warning:focus {\n  color: #000;\n  background-color: #ffca2c;\n  border-color: #ffc720;\n  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);\n}\n.btn-check:checked + .btn-warning, .btn-check:active + .btn-warning, .btn-warning:active, .btn-warning.active, .show > .btn-warning.dropdown-toggle {\n  color: #000;\n  background-color: #ffcd39;\n  border-color: #ffc720;\n}\n.btn-check:checked + .btn-warning:focus, .btn-check:active + .btn-warning:focus, .btn-warning:active:focus, .btn-warning.active:focus, .show > .btn-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);\n}\n.btn-warning:disabled, .btn-warning.disabled {\n  color: #000;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #bb2d3b;\n  border-color: #b02a37;\n}\n.btn-check:focus + .btn-danger, .btn-danger:focus {\n  color: #fff;\n  background-color: #bb2d3b;\n  border-color: #b02a37;\n  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);\n}\n.btn-check:checked + .btn-danger, .btn-check:active + .btn-danger, .btn-danger:active, .btn-danger.active, .show > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #b02a37;\n  border-color: #a52834;\n}\n.btn-check:checked + .btn-danger:focus, .btn-check:active + .btn-danger:focus, .btn-danger:active:focus, .btn-danger.active:focus, .show > .btn-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);\n}\n.btn-danger:disabled, .btn-danger.disabled {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-light {\n  color: #000;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-light:hover {\n  color: #000;\n  background-color: #f9fafb;\n  border-color: #f9fafb;\n}\n.btn-check:focus + .btn-light, .btn-light:focus {\n  color: #000;\n  background-color: #f9fafb;\n  border-color: #f9fafb;\n  box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);\n}\n.btn-check:checked + .btn-light, .btn-check:active + .btn-light, .btn-light:active, .btn-light.active, .show > .btn-light.dropdown-toggle {\n  color: #000;\n  background-color: #f9fafb;\n  border-color: #f9fafb;\n}\n.btn-check:checked + .btn-light:focus, .btn-check:active + .btn-light:focus, .btn-light:active:focus, .btn-light.active:focus, .show > .btn-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);\n}\n.btn-light:disabled, .btn-light.disabled {\n  color: #000;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-dark {\n  color: #fff;\n  background-color: #212529;\n  border-color: #212529;\n}\n.btn-dark:hover {\n  color: #fff;\n  background-color: #1c1f23;\n  border-color: #1a1e21;\n}\n.btn-check:focus + .btn-dark, .btn-dark:focus {\n  color: #fff;\n  background-color: #1c1f23;\n  border-color: #1a1e21;\n  box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);\n}\n.btn-check:checked + .btn-dark, .btn-check:active + .btn-dark, .btn-dark:active, .btn-dark.active, .show > .btn-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #1a1e21;\n  border-color: #191c1f;\n}\n.btn-check:checked + .btn-dark:focus, .btn-check:active + .btn-dark:focus, .btn-dark:active:focus, .btn-dark.active:focus, .show > .btn-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);\n}\n.btn-dark:disabled, .btn-dark.disabled {\n  color: #fff;\n  background-color: #212529;\n  border-color: #212529;\n}\n\n.btn-outline-primary {\n  color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn-outline-primary:hover {\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);\n}\n.btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {\n  color: #fff;\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn-check:checked + .btn-outline-primary:focus, .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus {\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);\n}\n.btn-outline-primary:disabled, .btn-outline-primary.disabled {\n  color: #0d6efd;\n  background-color: transparent;\n}\n\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:hover {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-check:focus + .btn-outline-secondary, .btn-outline-secondary:focus {\n  box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);\n}\n.btn-check:checked + .btn-outline-secondary, .btn-check:active + .btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-check:checked + .btn-outline-secondary:focus, .btn-check:active + .btn-outline-secondary:focus, .btn-outline-secondary:active:focus, .btn-outline-secondary.active:focus, .btn-outline-secondary.dropdown-toggle.show:focus {\n  box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);\n}\n.btn-outline-secondary:disabled, .btn-outline-secondary.disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n\n.btn-outline-success {\n  color: #198754;\n  border-color: #198754;\n}\n.btn-outline-success:hover {\n  color: #fff;\n  background-color: #198754;\n  border-color: #198754;\n}\n.btn-check:focus + .btn-outline-success, .btn-outline-success:focus {\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);\n}\n.btn-check:checked + .btn-outline-success, .btn-check:active + .btn-outline-success, .btn-outline-success:active, .btn-outline-success.active, .btn-outline-success.dropdown-toggle.show {\n  color: #fff;\n  background-color: #198754;\n  border-color: #198754;\n}\n.btn-check:checked + .btn-outline-success:focus, .btn-check:active + .btn-outline-success:focus, .btn-outline-success:active:focus, .btn-outline-success.active:focus, .btn-outline-success.dropdown-toggle.show:focus {\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);\n}\n.btn-outline-success:disabled, .btn-outline-success.disabled {\n  color: #198754;\n  background-color: transparent;\n}\n\n.btn-outline-info {\n  color: #0dcaf0;\n  border-color: #0dcaf0;\n}\n.btn-outline-info:hover {\n  color: #000;\n  background-color: #0dcaf0;\n  border-color: #0dcaf0;\n}\n.btn-check:focus + .btn-outline-info, .btn-outline-info:focus {\n  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);\n}\n.btn-check:checked + .btn-outline-info, .btn-check:active + .btn-outline-info, .btn-outline-info:active, .btn-outline-info.active, .btn-outline-info.dropdown-toggle.show {\n  color: #000;\n  background-color: #0dcaf0;\n  border-color: #0dcaf0;\n}\n.btn-check:checked + .btn-outline-info:focus, .btn-check:active + .btn-outline-info:focus, .btn-outline-info:active:focus, .btn-outline-info.active:focus, .btn-outline-info.dropdown-toggle.show:focus {\n  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);\n}\n.btn-outline-info:disabled, .btn-outline-info.disabled {\n  color: #0dcaf0;\n  background-color: transparent;\n}\n\n.btn-outline-warning {\n  color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-outline-warning:hover {\n  color: #000;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-check:focus + .btn-outline-warning, .btn-outline-warning:focus {\n  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);\n}\n.btn-check:checked + .btn-outline-warning, .btn-check:active + .btn-outline-warning, .btn-outline-warning:active, .btn-outline-warning.active, .btn-outline-warning.dropdown-toggle.show {\n  color: #000;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-check:checked + .btn-outline-warning:focus, .btn-check:active + .btn-outline-warning:focus, .btn-outline-warning:active:focus, .btn-outline-warning.active:focus, .btn-outline-warning.dropdown-toggle.show:focus {\n  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);\n}\n.btn-outline-warning:disabled, .btn-outline-warning.disabled {\n  color: #ffc107;\n  background-color: transparent;\n}\n\n.btn-outline-danger {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-check:focus + .btn-outline-danger, .btn-outline-danger:focus {\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);\n}\n.btn-check:checked + .btn-outline-danger, .btn-check:active + .btn-outline-danger, .btn-outline-danger:active, .btn-outline-danger.active, .btn-outline-danger.dropdown-toggle.show {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-check:checked + .btn-outline-danger:focus, .btn-check:active + .btn-outline-danger:focus, .btn-outline-danger:active:focus, .btn-outline-danger.active:focus, .btn-outline-danger.dropdown-toggle.show:focus {\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);\n}\n.btn-outline-danger:disabled, .btn-outline-danger.disabled {\n  color: #dc3545;\n  background-color: transparent;\n}\n\n.btn-outline-light {\n  color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-outline-light:hover {\n  color: #000;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-check:focus + .btn-outline-light, .btn-outline-light:focus {\n  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);\n}\n.btn-check:checked + .btn-outline-light, .btn-check:active + .btn-outline-light, .btn-outline-light:active, .btn-outline-light.active, .btn-outline-light.dropdown-toggle.show {\n  color: #000;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-check:checked + .btn-outline-light:focus, .btn-check:active + .btn-outline-light:focus, .btn-outline-light:active:focus, .btn-outline-light.active:focus, .btn-outline-light.dropdown-toggle.show:focus {\n  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);\n}\n.btn-outline-light:disabled, .btn-outline-light.disabled {\n  color: #f8f9fa;\n  background-color: transparent;\n}\n\n.btn-outline-dark {\n  color: #212529;\n  border-color: #212529;\n}\n.btn-outline-dark:hover {\n  color: #fff;\n  background-color: #212529;\n  border-color: #212529;\n}\n.btn-check:focus + .btn-outline-dark, .btn-outline-dark:focus {\n  box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);\n}\n.btn-check:checked + .btn-outline-dark, .btn-check:active + .btn-outline-dark, .btn-outline-dark:active, .btn-outline-dark.active, .btn-outline-dark.dropdown-toggle.show {\n  color: #fff;\n  background-color: #212529;\n  border-color: #212529;\n}\n.btn-check:checked + .btn-outline-dark:focus, .btn-check:active + .btn-outline-dark:focus, .btn-outline-dark:active:focus, .btn-outline-dark.active:focus, .btn-outline-dark.dropdown-toggle.show:focus {\n  box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);\n}\n.btn-outline-dark:disabled, .btn-outline-dark.disabled {\n  color: #212529;\n  background-color: transparent;\n}\n\n.btn-link {\n  font-weight: 400;\n  color: var(--bs-link-color);\n  text-decoration: underline;\n}\n.btn-link:hover {\n  color: var(--bs-link-hover-color);\n}\n.btn-link:disabled, .btn-link.disabled {\n  color: #6c757d;\n}\n\n.btn-lg {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.5rem;\n}\n\n.btn-sm {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.25rem;\n}\n\n.form-label {\n  margin-bottom: 0.5rem;\n}\n\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n}\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n}\n\n.form-text {\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #6c757d;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  appearance: none;\n  border-radius: 0.375rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control {\n    transition: none;\n  }\n}\n.form-control[type=file] {\n  overflow: hidden;\n}\n.form-control[type=file]:not(:disabled):not([readonly]) {\n  cursor: pointer;\n}\n.form-control:focus {\n  color: #212529;\n  background-color: #fff;\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-control::-webkit-date-and-time-value {\n  height: 1.5em;\n}\n.form-control::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control:disabled, .form-control[readonly] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n.form-control::file-selector-button {\n  padding: 0.375rem 0.75rem;\n  margin: -0.375rem -0.75rem;\n  margin-inline-end: 0.75rem;\n  color: #212529;\n  background-color: #e9ecef;\n  pointer-events: none;\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-inline-end-width: 1px;\n  border-radius: 0;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control::file-selector-button {\n    transition: none;\n  }\n}\n.form-control:hover:not(:disabled):not([readonly])::file-selector-button {\n  background-color: #dde0e3;\n}\n.form-control::-webkit-file-upload-button {\n  padding: 0.375rem 0.75rem;\n  margin: -0.375rem -0.75rem;\n  margin-inline-end: 0.75rem;\n  color: #212529;\n  background-color: #e9ecef;\n  pointer-events: none;\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-inline-end-width: 1px;\n  border-radius: 0;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control::-webkit-file-upload-button {\n    transition: none;\n  }\n}\n.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {\n  background-color: #dde0e3;\n}\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.form-control-sm {\n  min-height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.25rem;\n}\n.form-control-sm::file-selector-button {\n  padding: 0.25rem 0.5rem;\n  margin: -0.25rem -0.5rem;\n  margin-inline-end: 0.5rem;\n}\n.form-control-sm::-webkit-file-upload-button {\n  padding: 0.25rem 0.5rem;\n  margin: -0.25rem -0.5rem;\n  margin-inline-end: 0.5rem;\n}\n\n.form-control-lg {\n  min-height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.5rem;\n}\n.form-control-lg::file-selector-button {\n  padding: 0.5rem 1rem;\n  margin: -0.5rem -1rem;\n  margin-inline-end: 1rem;\n}\n.form-control-lg::-webkit-file-upload-button {\n  padding: 0.5rem 1rem;\n  margin: -0.5rem -1rem;\n  margin-inline-end: 1rem;\n}\n\ntextarea.form-control {\n  min-height: calc(1.5em + 0.75rem + 2px);\n}\ntextarea.form-control-sm {\n  min-height: calc(1.5em + 0.5rem + 2px);\n}\ntextarea.form-control-lg {\n  min-height: calc(1.5em + 1rem + 2px);\n}\n\n.form-control-color {\n  width: 3rem;\n  height: auto;\n  padding: 0.375rem;\n}\n.form-control-color:not(:disabled):not([readonly]) {\n  cursor: pointer;\n}\n.form-control-color::-moz-color-swatch {\n  height: 1.5em;\n  border-radius: 0.375rem;\n}\n.form-control-color::-webkit-color-swatch {\n  height: 1.5em;\n  border-radius: 0.375rem;\n}\n\n.form-select {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 2.25rem 0.375rem 0.75rem;\n  -moz-padding-start: calc(0.75rem - 3px);\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-select {\n    transition: none;\n  }\n}\n.form-select:focus {\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-select[multiple], .form-select[size]:not([size=\"1\"]) {\n  padding-right: 0.75rem;\n  background-image: none;\n}\n.form-select:disabled {\n  background-color: #e9ecef;\n}\n.form-select:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #212529;\n}\n\n.form-select-sm {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.25rem;\n}\n\n.form-select-lg {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.5rem;\n}\n\n.form-check {\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5em;\n  margin-bottom: 0.125rem;\n}\n.form-check .form-check-input {\n  float: left;\n  margin-left: -1.5em;\n}\n\n.form-check-input {\n  width: 1em;\n  height: 1em;\n  margin-top: 0.25em;\n  vertical-align: top;\n  background-color: #fff;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  appearance: none;\n  color-adjust: exact;\n}\n.form-check-input[type=checkbox] {\n  border-radius: 0.25em;\n}\n.form-check-input[type=radio] {\n  border-radius: 50%;\n}\n.form-check-input:active {\n  filter: brightness(90%);\n}\n.form-check-input:focus {\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-check-input:checked {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.form-check-input:checked[type=checkbox] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");\n}\n.form-check-input:checked[type=radio] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\");\n}\n.form-check-input[type=checkbox]:indeterminate {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\");\n}\n.form-check-input:disabled {\n  pointer-events: none;\n  filter: none;\n  opacity: 0.5;\n}\n.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {\n  opacity: 0.5;\n}\n\n.form-switch {\n  padding-left: 2.5em;\n}\n.form-switch .form-check-input {\n  width: 2em;\n  margin-left: -2.5em;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");\n  background-position: left center;\n  border-radius: 2em;\n  transition: background-position 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-switch .form-check-input {\n    transition: none;\n  }\n}\n.form-switch .form-check-input:focus {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\");\n}\n.form-switch .form-check-input:checked {\n  background-position: right center;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\n}\n\n.form-check-inline {\n  display: inline-block;\n  margin-right: 1rem;\n}\n\n.btn-check {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.btn-check[disabled] + .btn, .btn-check:disabled + .btn {\n  pointer-events: none;\n  filter: none;\n  opacity: 0.65;\n}\n\n.form-range {\n  width: 100%;\n  height: 1.5rem;\n  padding: 0;\n  background-color: transparent;\n  appearance: none;\n}\n.form-range:focus {\n  outline: 0;\n}\n.form-range:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-range:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-range::-moz-focus-outer {\n  border: 0;\n}\n.form-range::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  background-color: #0d6efd;\n  border: 0;\n  border-radius: 1rem;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-range::-webkit-slider-thumb {\n    transition: none;\n  }\n}\n.form-range::-webkit-slider-thumb:active {\n  background-color: #b6d4fe;\n}\n.form-range::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.form-range::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  background-color: #0d6efd;\n  border: 0;\n  border-radius: 1rem;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-range::-moz-range-thumb {\n    transition: none;\n  }\n}\n.form-range::-moz-range-thumb:active {\n  background-color: #b6d4fe;\n}\n.form-range::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.form-range:disabled {\n  pointer-events: none;\n}\n.form-range:disabled::-webkit-slider-thumb {\n  background-color: #adb5bd;\n}\n.form-range:disabled::-moz-range-thumb {\n  background-color: #adb5bd;\n}\n\n.form-floating {\n  position: relative;\n}\n.form-floating > .form-control,\n.form-floating > .form-select {\n  height: calc(3.5rem + 2px);\n  line-height: 1.25;\n}\n.form-floating > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  padding: 1rem 0.75rem;\n  pointer-events: none;\n  border: 1px solid transparent;\n  transform-origin: 0 0;\n  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-floating > label {\n    transition: none;\n  }\n}\n.form-floating > .form-control {\n  padding: 1rem 0.75rem;\n}\n.form-floating > .form-control::placeholder {\n  color: transparent;\n}\n.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:-webkit-autofill {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-select {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:focus ~ label,\n.form-floating > .form-control:not(:placeholder-shown) ~ label,\n.form-floating > .form-select ~ label {\n  opacity: 0.65;\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control:-webkit-autofill ~ label {\n  opacity: 0.65;\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n.input-group > .form-control,\n.input-group > .form-select {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  min-width: 0;\n}\n.input-group > .form-control:focus,\n.input-group > .form-select:focus {\n  z-index: 3;\n}\n.input-group .btn {\n  position: relative;\n  z-index: 2;\n}\n.input-group .btn:focus {\n  z-index: 3;\n}\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n}\n\n.input-group-lg > .form-control,\n.input-group-lg > .form-select,\n.input-group-lg > .input-group-text,\n.input-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.5rem;\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .form-select,\n.input-group-sm > .input-group-text,\n.input-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.25rem;\n}\n\n.input-group-lg > .form-select,\n.input-group-sm > .form-select {\n  padding-right: 3rem;\n}\n\n.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),\n.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),\n.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {\n  margin-left: -1px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #198754;\n}\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: rgba(25, 135, 84, 0.9);\n  border-radius: 0.375rem;\n}\n\n.was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip,\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #198754;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n  border-color: #198754;\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n}\n\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n\n.was-validated .form-select:valid, .form-select.is-valid {\n  border-color: #198754;\n}\n.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size=\"1\"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size=\"1\"] {\n  padding-right: 4.125rem;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-position: right 0.75rem center, center right 2.25rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-select:valid:focus, .form-select.is-valid:focus {\n  border-color: #198754;\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n}\n\n.was-validated .form-check-input:valid, .form-check-input.is-valid {\n  border-color: #198754;\n}\n.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {\n  background-color: #198754;\n}\n.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n}\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #198754;\n}\n\n.form-check-inline .form-check-input ~ .valid-feedback {\n  margin-left: 0.5em;\n}\n\n.was-validated .input-group .form-control:valid, .input-group .form-control.is-valid,\n.was-validated .input-group .form-select:valid,\n.input-group .form-select.is-valid {\n  z-index: 1;\n}\n.was-validated .input-group .form-control:valid:focus, .input-group .form-control.is-valid:focus,\n.was-validated .input-group .form-select:valid:focus,\n.input-group .form-select.is-valid:focus {\n  z-index: 3;\n}\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #dc3545;\n}\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.375rem;\n}\n\n.was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip,\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n\n.was-validated .form-select:invalid, .form-select.is-invalid {\n  border-color: #dc3545;\n}\n.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size=\"1\"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size=\"1\"] {\n  padding-right: 4.125rem;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-position: right 0.75rem center, center right 2.25rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated .form-check-input:invalid, .form-check-input.is-invalid {\n  border-color: #dc3545;\n}\n.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {\n  background-color: #dc3545;\n}\n.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n}\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545;\n}\n\n.form-check-inline .form-check-input ~ .invalid-feedback {\n  margin-left: 0.5em;\n}\n\n.was-validated .input-group .form-control:invalid, .input-group .form-control.is-invalid,\n.was-validated .input-group .form-select:invalid,\n.input-group .form-select.is-invalid {\n  z-index: 2;\n}\n.was-validated .input-group .form-control:invalid:focus, .input-group .form-control.is-invalid:focus,\n.was-validated .input-group .form-select:invalid:focus,\n.input-group .form-select.is-invalid:focus {\n  z-index: 3;\n}\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n  color: var(--bs-link-color);\n  text-decoration: none;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .nav-link {\n    transition: none;\n  }\n}\n.nav-link:hover, .nav-link:focus {\n  color: var(--bs-link-hover-color);\n}\n.nav-link.disabled {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: default;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6;\n}\n.nav-tabs .nav-link {\n  margin-bottom: -1px;\n  background: none;\n  border: 1px solid transparent;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n}\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n  border-color: #e9ecef #e9ecef #dee2e6;\n  isolation: isolate;\n}\n.nav-tabs .nav-link.disabled {\n  color: #6c757d;\n  background-color: transparent;\n  border-color: transparent;\n}\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link {\n  color: #495057;\n  background-color: #fff;\n  border-color: #dee2e6 #dee2e6 #fff;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.nav-pills .nav-link {\n  background: none;\n  border: 0;\n  border-radius: 0.375rem;\n}\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #0d6efd;\n}\n\n.nav-fill > .nav-link,\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.nav-justified > .nav-link,\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center;\n}\n\n.nav-fill .nav-item .nav-link,\n.nav-justified .nav-item .nav-link {\n  width: 100%;\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n\n.dropup,\n.dropend,\n.dropdown,\n.dropstart {\n  position: relative;\n}\n\n.dropdown-toggle {\n  white-space: nowrap;\n}\n.dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n.dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropdown-menu {\n  position: absolute;\n  z-index: 1000;\n  display: none;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid var(--bs-border-color-translucent);\n  border-radius: 0.375rem;\n}\n.dropdown-menu[data-bs-popper] {\n  top: 100%;\n  left: 0;\n  margin-top: 0.125rem;\n}\n\n.dropdown-menu-start {\n  --bs-position: start;\n}\n.dropdown-menu-start[data-bs-popper] {\n  right: auto;\n  left: 0;\n}\n\n.dropdown-menu-end {\n  --bs-position: end;\n}\n.dropdown-menu-end[data-bs-popper] {\n  right: 0;\n  left: auto;\n}\n\n@media (min-width: 576px) {\n  .dropdown-menu-sm-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-sm-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-sm-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-sm-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 768px) {\n  .dropdown-menu-md-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-md-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-md-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-md-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 992px) {\n  .dropdown-menu-lg-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-lg-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-lg-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-lg-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-xl-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-xl-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-xl-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 1400px) {\n  .dropdown-menu-xxl-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-xxl-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-xxl-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-xxl-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n.dropup .dropdown-menu[data-bs-popper] {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropend .dropdown-menu[data-bs-popper] {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem;\n}\n.dropend .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n.dropend .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropend .dropdown-toggle::after {\n  vertical-align: 0;\n}\n\n.dropstart .dropdown-menu[data-bs-popper] {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem;\n}\n.dropstart .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n}\n.dropstart .dropdown-toggle::after {\n  display: none;\n}\n.dropstart .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n.dropstart .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropstart .dropdown-toggle::before {\n  vertical-align: 0;\n}\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid var(--bs-border-color-translucent);\n}\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.dropdown-item:hover, .dropdown-item:focus {\n  color: #1e2125;\n  background-color: #e9ecef;\n}\n.dropdown-item.active, .dropdown-item:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #0d6efd;\n}\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color: #adb5bd;\n  pointer-events: none;\n  background-color: transparent;\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap;\n}\n\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1rem;\n  color: #212529;\n}\n\n.dropdown-menu-dark {\n  color: #dee2e6;\n  background-color: #343a40;\n  border-color: var(--bs-border-color-translucent);\n}\n.dropdown-menu-dark .dropdown-item {\n  color: #dee2e6;\n}\n.dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item:focus {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.15);\n}\n.dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {\n  color: #fff;\n  background-color: #0d6efd;\n}\n.dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled {\n  color: #adb5bd;\n}\n.dropdown-menu-dark .dropdown-divider {\n  border-color: var(--bs-border-color-translucent);\n}\n.dropdown-menu-dark .dropdown-item-text {\n  color: #dee2e6;\n}\n.dropdown-menu-dark .dropdown-header {\n  color: #adb5bd;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1055;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  outline: 0;\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none;\n}\n.modal.fade .modal-dialog {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n@media (prefers-reduced-motion: reduce) {\n  .modal.fade .modal-dialog {\n    transition: none;\n  }\n}\n.modal.show .modal-dialog {\n  transform: none;\n}\n.modal.modal-static .modal-dialog {\n  transform: scale(1.02);\n}\n\n.modal-dialog-scrollable {\n  height: calc(100% - 1rem);\n}\n.modal-dialog-scrollable .modal-content {\n  max-height: 100%;\n  overflow: hidden;\n}\n.modal-dialog-scrollable .modal-body {\n  overflow-y: auto;\n}\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - 1rem);\n}\n\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid var(--bs-border-color-translucent);\n  border-radius: 0.5rem;\n  outline: 0;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  opacity: 0;\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n\n.modal-header {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid var(--bs-border-color);\n  border-top-left-radius: calc(0.5rem - 1px);\n  border-top-right-radius: calc(0.5rem - 1px);\n}\n.modal-header .btn-close {\n  padding: 0.5rem 0.5rem;\n  margin: -0.5rem -0.5rem -0.5rem auto;\n}\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1rem;\n}\n\n.modal-footer {\n  display: flex;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0.75rem;\n  border-top: 1px solid var(--bs-border-color);\n  border-bottom-right-radius: calc(0.5rem - 1px);\n  border-bottom-left-radius: calc(0.5rem - 1px);\n}\n.modal-footer > * {\n  margin: 0.25rem;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto;\n  }\n  .modal-dialog-scrollable {\n    height: calc(100% - 3.5rem);\n  }\n  .modal-dialog-centered {\n    min-height: calc(100% - 3.5rem);\n  }\n  .modal-sm {\n    max-width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg,\n.modal-xl {\n    max-width: 800px;\n  }\n}\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1140px;\n  }\n}\n.modal-fullscreen {\n  width: 100vw;\n  max-width: none;\n  height: 100%;\n  margin: 0;\n}\n.modal-fullscreen .modal-content {\n  height: 100%;\n  border: 0;\n  border-radius: 0;\n}\n.modal-fullscreen .modal-header {\n  border-radius: 0;\n}\n.modal-fullscreen .modal-body {\n  overflow-y: auto;\n}\n.modal-fullscreen .modal-footer {\n  border-radius: 0;\n}\n\n@media (max-width: 575.98px) {\n  .modal-fullscreen-sm-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-sm-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-sm-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-sm-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-sm-down .modal-footer {\n    border-radius: 0;\n  }\n}\n@media (max-width: 767.98px) {\n  .modal-fullscreen-md-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-md-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-md-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-md-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-md-down .modal-footer {\n    border-radius: 0;\n  }\n}\n@media (max-width: 991.98px) {\n  .modal-fullscreen-lg-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-lg-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-lg-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-lg-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-lg-down .modal-footer {\n    border-radius: 0;\n  }\n}\n@media (max-width: 1199.98px) {\n  .modal-fullscreen-xl-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-xl-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-xl-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-xl-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-xl-down .modal-footer {\n    border-radius: 0;\n  }\n}\n@media (max-width: 1399.98px) {\n  .modal-fullscreen-xxl-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-xxl-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-xxl-down .modal-header {\n    border-radius: 0;\n  }\n  .modal-fullscreen-xxl-down .modal-body {\n    overflow-y: auto;\n  }\n  .modal-fullscreen-xxl-down .modal-footer {\n    border-radius: 0;\n  }\n}\n.fade {\n  transition: opacity 0.15s linear;\n}\n@media (prefers-reduced-motion: reduce) {\n  .fade {\n    transition: none;\n  }\n}\n.fade:not(.show) {\n  opacity: 0;\n}\n\n.collapse:not(.show) {\n  display: none;\n}\n\n.collapsing {\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .collapsing {\n    transition: none;\n  }\n}\n.collapsing.collapse-horizontal {\n  width: 0;\n  height: auto;\n  transition: width 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .collapsing.collapse-horizontal {\n    transition: none;\n  }\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-item {\n    transition: none;\n  }\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n/* rtl:begin:ignore */\n.carousel-item-next:not(.carousel-item-start),\n.active.carousel-item-end {\n  transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-end),\n.active.carousel-item-start {\n  transform: translateX(-100%);\n}\n\n/* rtl:end:ignore */\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  transform: none;\n}\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-start,\n.carousel-fade .carousel-item-prev.carousel-item-end {\n  z-index: 1;\n  opacity: 1;\n}\n.carousel-fade .active.carousel-item-start,\n.carousel-fade .active.carousel-item-end {\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0s 0.6s;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-fade .active.carousel-item-start,\n.carousel-fade .active.carousel-item-end {\n    transition: none;\n  }\n}\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  padding: 0;\n  color: #fff;\n  text-align: center;\n  background: none;\n  border: 0;\n  opacity: 0.5;\n  transition: opacity 0.15s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-control-prev,\n.carousel-control-next {\n    transition: none;\n  }\n}\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n\n.carousel-control-prev {\n  left: 0;\n}\n\n.carousel-control-next {\n  right: 0;\n}\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100% 100%;\n}\n\n/* rtl:options: {\n  \"autoRename\": true,\n  \"stringMap\":[ {\n    \"name\"    : \"prev-next\",\n    \"search\"  : \"prev\",\n    \"replace\" : \"next\"\n  } ]\n} */\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\");\n}\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n}\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin-right: 15%;\n  margin-bottom: 1rem;\n  margin-left: 15%;\n  list-style: none;\n}\n.carousel-indicators [data-bs-target] {\n  box-sizing: content-box;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  padding: 0;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 0;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: 0.5;\n  transition: opacity 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-indicators [data-bs-target] {\n    transition: none;\n  }\n}\n.carousel-indicators .active {\n  opacity: 1;\n}\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 1.25rem;\n  left: 15%;\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  color: #fff;\n  text-align: center;\n}\n\n.carousel-dark .carousel-control-prev-icon,\n.carousel-dark .carousel-control-next-icon {\n  filter: invert(1) grayscale(100);\n}\n.carousel-dark .carousel-indicators [data-bs-target] {\n  background-color: #000;\n}\n.carousel-dark .carousel-caption {\n  color: #000;\n}\n\n@font-face {\n  font-family: \"URW-din\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: local(\"URW din\"), local(\"URW-din\"), url(./fonts/URW_Din/URWDIN-Regular.ttf) format(\"truetype\");\n}\n[data-site-id=glpg-111] .h1, [data-site-id=glpg-111] h1 {\n  font-size: 3.75rem;\n}\n@media (max-width: 575.98px) {\n  [data-site-id=glpg-111] .h1, [data-site-id=glpg-111] h1 {\n    font-size: 1.875rem;\n    line-height: 2rem;\n  }\n}\n[data-site-id=glpg-111] .h2, [data-site-id=glpg-111] h2 {\n  font-size: 2.5rem;\n}\n@media (max-width: 575.98px) {\n  [data-site-id=glpg-111] .h2, [data-site-id=glpg-111] h2 {\n    font-size: 1.875rem;\n    line-height: 2rem;\n  }\n}\n[data-site-id=glpg-111] .h3, [data-site-id=glpg-111] h3 {\n  font-size: 2.25rem;\n}\n@media (max-width: 575.98px) {\n  [data-site-id=glpg-111] .h3, [data-site-id=glpg-111] h3 {\n    font-size: 1.5rem;\n    line-height: 1.625rem;\n  }\n}\n[data-site-id=glpg-111] .h4, [data-site-id=glpg-111] h4 {\n  font-size: 1.875rem;\n}\n@media (max-width: 575.98px) {\n  [data-site-id=glpg-111] .h4, [data-site-id=glpg-111] h4 {\n    font-size: 1.25rem;\n    line-height: 1.5rem;\n  }\n}\n[data-site-id=glpg-111] .h5, [data-site-id=glpg-111] h5 {\n  font-size: 1.625rem;\n}\n@media (max-width: 575.98px) {\n  [data-site-id=glpg-111] .h5, [data-site-id=glpg-111] h5 {\n    font-size: 1.125rem;\n    line-height: 1.25rem;\n  }\n}\n[data-site-id=glpg-111] .h6, [data-site-id=glpg-111] h6 {\n  font-size: 1.1875rem;\n}\n@media (max-width: 575.98px) {\n  [data-site-id=glpg-111] .h6, [data-site-id=glpg-111] h6 {\n    font-size: 1.125rem;\n    line-height: 1.25rem;\n  }\n}\n[data-site-id=glpg-111] .headline-text > div:not(.mb-0):not(.m-0) {\n  margin-bottom: 20px;\n}\n[data-site-id=glpg-111] .headline-text .cmp-text p {\n  font-size: 1rem;\n  line-height: 2rem;\n}\n[data-site-id=glpg-111] .headline-text .cmp-text p.small {\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n}\n[data-site-id=glpg-111] .headline-text .cmp-text p.xsmall {\n  font-size: 0.8125rem;\n  line-height: 1.5rem;\n}\n[data-site-id=glpg-111] .headline-text .cmp-text p:last-child {\n  margin-bottom: 0;\n}\n[data-site-id=glpg-111] .headline-text .cmp-text sub,\n[data-site-id=glpg-111] .headline-text .cmp-text sup {\n  font-size: 75%;\n}\n[data-site-id=glpg-111] .headline-text .cmp-text sup {\n  top: -0.5em;\n}\n[data-site-id=glpg-111] .headline-text .cmp-text sub {\n  top: 0.5em;\n}\n[data-site-id=glpg-111] .headline-text .cmp-text blockquote,\n[data-site-id=glpg-111] .headline-text .cmp-text q {\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 2.25rem;\n}\n[data-site-id=glpg-111] .headline-text .cmp-text ul {\n  list-style-type: none;\n  padding-left: 0px;\n}\n[data-site-id=glpg-111] .headline-text .cmp-text ul li {\n  position: relative;\n  padding-left: 0.9375rem;\n}\n[data-site-id=glpg-111] .headline-text .cmp-text ul li + li {\n  margin-top: 0.625rem;\n}\n[data-site-id=glpg-111] .headline-text .cmp-text ul li::before {\n  top: 0;\n  left: 0;\n  content: \"\";\n  width: 0.375rem;\n  height: 0.375rem;\n  margin: auto;\n  display: block;\n  border-radius: 0.375rem;\n  position: absolute;\n  bottom: calc(100% - 1.5em);\n  background-color: #D21147;\n}\n[data-site-id=glpg-111] .headline-text .cmp-text ul li.no-before:before {\n  display: none;\n}\n[data-site-id=glpg-111] .image-extension img:not(.no-bgap) {\n  margin-bottom: 20px;\n}\n[data-site-id=glpg-111] .image-extension .image-container {\n  display: flex;\n}\n[data-site-id=glpg-111] .image-extension .image-container a img {\n  width: 100%;\n}\n[data-site-id=glpg-111] img:not([src]) {\n  visibility: hidden;\n}\n@-moz-document url-prefix() {\n  [data-site-id=glpg-111] img:-moz-loading {\n    visibility: hidden;\n  }\n}\n[data-site-id=glpg-111] .button-link {\n  position: relative;\n  margin-bottom: 20px;\n}\n[data-site-id=glpg-111] .button-link .btn-link {\n  font-weight: 400;\n  font-size: 1rem;\n}\n[data-site-id=glpg-111] .button-link .btn-link:hover {\n  text-decoration: underline;\n}\n[data-site-id=glpg-111] .button-link .btn-link:focus {\n  box-shadow: none;\n}\n[data-site-id=glpg-111] .button-link .btn {\n  border-width: 0.125rem;\n}\n[data-site-id=glpg-111] .button-link .btn[data-type=line] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  border: none;\n  outline: 0;\n  box-shadow: none;\n  z-index: 2;\n  padding: 0;\n}\n[data-site-id=glpg-111] .button-link .btn[data-type=line] span {\n  display: block;\n  background: inherit;\n  position: relative;\n  z-index: 2;\n  padding: 0.375rem 0.75rem;\n  border-radius: inherit;\n}\n[data-site-id=glpg-111] .button-link .btn[data-type=line]:before, [data-site-id=glpg-111] .button-link .btn[data-type=line]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  top: calc(50% + 1.5px);\n  width: 50%;\n  height: 1px;\n  z-index: 0;\n  pointer-events: none;\n  background-color: #e5e5e5;\n}\n[data-site-id=glpg-111] .button-link .btn[data-type=line]:before {\n  right: 50%;\n}\n[data-site-id=glpg-111] .button-link .btn[data-type=line]:after {\n  left: 50%;\n}\n[data-site-id=glpg-111] .button-link .btn[data-type=round] {\n  font-size: 0.8125rem;\n  line-height: 1.5rem;\n  border: 1px solid #e5e5e5;\n  background-color: #fff;\n  color: #000;\n  font-weight: 700;\n  padding: 0.1875rem 0.75rem;\n  border-radius: 1.25rem;\n  cursor: pointer;\n  text-transform: uppercase;\n  margin-right: 10px;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n}\n[data-site-id=glpg-111] .button-link .btn.btn-link[data-type=line] {\n  color: #e5e5e5;\n  background-color: #fff;\n  min-width: 10.375rem;\n  padding: 0;\n}\n[data-site-id=glpg-111] .button-link .btn.btn-link[data-type=line]:before, [data-site-id=glpg-111] .button-link .btn.btn-link[data-type=line]:after {\n  background-color: currentColor;\n}\n[data-site-id=glpg-111] .button-link .btn:focus {\n  box-shadow: none;\n}\n[data-site-id=glpg-111] .button-link .btn-white {\n  background-color: #fff !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./storybook-init-framework-entry.js":
/*!*******************************************!*\
  !*** ./storybook-init-framework-entry.js ***!
  \*******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/esm/client/index.js");


/***/ }),

/***/ "./styles/glpg-111/storybook.scss":
/*!****************************************!*\
  !*** ./styles/glpg-111/storybook.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js?url=false!../../node_modules/sass-loader/dist/cjs.js!./storybook.scss */ "./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/sass-loader/dist/cjs.js!./styles/glpg-111/storybook.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js ./node_modules/@storybook/core-client/dist/esm/globals/globals.js ./storybook-init-framework-entry.js ./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js ./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js ./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js ./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js ./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js ./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js ./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js ./node_modules/@whitespace/storybook-addon-html/out/preset/addDecorators.js-generated-config-entry.js ./node_modules/storybook-addon-code-preview/dist/preset/preview.js-generated-config-entry.js ./.storybook/preview.js-generated-config-entry.js ./generated-stories-entry.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\BS691\Desktop\StorybookCommons\node_modules\@storybook\core-client\dist\esm\globals\polyfills.js */"./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js");
__webpack_require__(/*! C:\Users\BS691\Desktop\StorybookCommons\node_modules\@storybook\core-client\dist\esm\globals\globals.js */"./node_modules/@storybook/core-client/dist/esm/globals/globals.js");
__webpack_require__(/*! C:\Users\BS691\Desktop\StorybookCommons\storybook-init-framework-entry.js */"./storybook-init-framework-entry.js");
__webpack_require__(/*! C:\Users\BS691\Desktop\StorybookCommons\node_modules\@storybook\react\dist\esm\client\docs\config-generated-config-entry.js */"./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js");
__webpack_require__(/*! C:\Users\BS691\Desktop\StorybookCommons\node_modules\@storybook\react\dist\esm\client\preview\config-generated-config-entry.js */"./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js");
__webpack_require__(/*! C:\Users\BS691\Desktop\StorybookCommons\node_modules\@storybook\addon-docs\preview.js-generated-config-entry.js */"./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js");
__webpack_require__(/*! C:\Users\BS691\Desktop\StorybookCommons\node_modules\@storybook\addon-actions\preview.js-generated-config-entry.js */"./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js");
__webpack_require__(/*! C:\Users\BS691\Desktop\StorybookCommons\node_modules\@storybook\addon-backgrounds\preview.js-generated-config-entry.js */"./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js");
__webpack_require__(/*! C:\Users\BS691\Desktop\StorybookCommons\node_modules\@storybook\addon-measure\preview.js-generated-config-entry.js */"./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js");
__webpack_require__(/*! C:\Users\BS691\Desktop\StorybookCommons\node_modules\@storybook\addon-outline\preview.js-generated-config-entry.js */"./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js");
__webpack_require__(/*! C:\Users\BS691\Desktop\StorybookCommons\node_modules\@whitespace\storybook-addon-html\out\preset\addDecorators.js-generated-config-entry.js */"./node_modules/@whitespace/storybook-addon-html/out/preset/addDecorators.js-generated-config-entry.js");
__webpack_require__(/*! C:\Users\BS691\Desktop\StorybookCommons\node_modules\storybook-addon-code-preview\dist\preset\preview.js-generated-config-entry.js */"./node_modules/storybook-addon-code-preview/dist/preset/preview.js-generated-config-entry.js");
__webpack_require__(/*! C:\Users\BS691\Desktop\StorybookCommons\.storybook\preview.js-generated-config-entry.js */"./.storybook/preview.js-generated-config-entry.js");
module.exports = __webpack_require__(/*! C:\Users\BS691\Desktop\StorybookCommons\generated-stories-entry.js */"./generated-stories-entry.js");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main","vendors~main"]]]);
//# sourceMappingURL=main.c191c43a.iframe.bundle.js.map