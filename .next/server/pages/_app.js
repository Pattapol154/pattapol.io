module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/core"
var core_ = __webpack_require__("WKWs");

// EXTERNAL MODULE: external "@emotion/core"
var external_emotion_core_ = __webpack_require__("3vLF");

// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__("efsx");

// CONCATENATED MODULE: ./next-seo.config.js
const title = "pattapol | portfolio – Student";
const description = "My Website 🚀.";
const SEO = {
  title,
  description,
  canonical: "https://pattapol.io",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://pattapol.io",
    title,
    description,
    images: [{
      url: "https://pattapol.io/static/images/og.jpg",
      alt: title,
      width: 1280,
      height: 720
    }]
  }
};
/* harmony default export */ var next_seo_config = (SEO);
// CONCATENATED MODULE: ./styles/prism.js


const prismBaseTheme = external_emotion_core_["css"]`
  code[class*="language-"],
  pre[class*="language-"] {
    color: ${core_["theme"].colors.gray[800]};
    background: none;
    font-family: ${core_["theme"].fonts.mono};
    font-size: ${core_["theme"].fontSizes[2]};
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: ${core_["theme"].lineHeights[2]};
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    width: 100%;
  }
  /* Code blocks */
  pre[class*="language-"] {
    padding-top: ${core_["theme"].space[4]};
    padding-bottom: ${core_["theme"].space[4]};
    padding-left: ${core_["theme"].space[4]};
    padding-right: ${core_["theme"].space[4]};
    margin: ${core_["theme"].space[6]} 0;
    overflow: auto;
    min-width: 100%;
    font-size: 0.9rem;
  }
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: ${core_["theme"].colors.gray[50]};
    border: 1px solid ${core_["theme"].colors.gray[200]};
    border-radius: ${core_["theme"].radii.lg};
  }
  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }
  .token.punctuation {
    color: #999;
  }
  .token.namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #905;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9a6e3a;
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }
  .token.function,
  .token.class-name {
    color: #dd4a68;
  }
  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }

  .mdx-marker {
    display: block;
    margin-left: -${core_["theme"].space[4]};
    margin-right: -${core_["theme"].space[4]};
    padding-left: ${core_["theme"].space[4]};
    padding-right: ${core_["theme"].space[4]};
    background-color: ${core_["theme"].colors.gray[200]};
    box-shadow: inset 3px 0px 0 0px ${core_["theme"].colors.blue[600]};
    min-width: fit-content;
  }

  .remark-code-title {
    padding: ${core_["theme"].space[2]} ${core_["theme"].space[4]};
    font-family: ${core_["theme"].fonts.mono};
    background: ${core_["theme"].colors.gray[200]};
    color: ${core_["theme"].colors.gray[800]};
    border: 1px solid ${core_["theme"].colors.gray[200]};
    border-top-left-radius: ${core_["theme"].radii.lg};
    border-top-right-radius: ${core_["theme"].radii.lg};
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0;
    width: 100%;

    + pre {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-top: 0;
    }
  }
`;
const prismLightTheme = external_emotion_core_["css"]`
  ${prismBaseTheme};

  code[class*="language-"],
  pre[class*="language-"] {
    color: ${core_["theme"].colors.gray[800]};
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: ${core_["theme"].colors.gray[50]};
    border: 1px solid ${core_["theme"].colors.gray[200]};
  }

  .mdx-marker {
    background-color: hsla(204, 45%, 96%, 1);
  }
`;
const prismDarkTheme = external_emotion_core_["css"]`
  ${prismBaseTheme};

  :not(pre) > code[class*="language-"] {
    background: #011627;
  }

  .token.attr-name {
    color: rgb(173, 219, 103);
    font-style: italic;
  }

  .token.comment {
    color: rgb(128, 147, 147);
  }

  .token.string,
  .token.url {
    color: rgb(173, 219, 103);
  }

  .token.variable {
    color: rgb(214, 222, 235);
  }

  .token.number {
    color: rgb(247, 140, 108);
  }

  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    color: rgb(130, 170, 255);
  }

  .token.punctuation {
    color: rgb(199, 146, 234);
  }

  .token.selector,
  .token.doctype {
    color: rgb(199, 146, 234);
    font-style: "italic";
  }

  .token.class-name {
    color: rgb(255, 203, 139);
  }

  .token.tag,
  .token.operator,
  .token.keyword {
    color: #ffa7c4;
  }

  .token.boolean {
    color: rgb(255, 88, 116);
  }

  .token.property {
    color: rgb(128, 203, 196);
  }

  .token.namespace {
    color: rgb(178, 204, 214);
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: ${core_["theme"].colors.gray[50]};
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: ${core_["theme"].colors.gray[800]};
    border: 1px solid ${core_["theme"].colors.gray[700]};
  }

  .mdx-marker {
    background-color: ${core_["theme"].colors.gray[700]};
  }

  .remark-code-title {
    background: ${core_["theme"].colors.gray[700]};
    color: ${core_["theme"].colors.gray[100]};
    border: 1px solid ${core_["theme"].colors.gray[700]};
  }
`;
// CONCATENATED MODULE: ./styles/theme.js
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const theme = _objectSpread(_objectSpread({}, core_["theme"]), {}, {
  fonts: {
    body: "Lexend Deca, sans-serif",
    heading: "Lexend Deca, sans-serif"
  },
  fontWeights: {
    light: 200,
    normal: 400,
    medium: 600,
    bold: 700
  },
  breakpoints: ["400px", "620px", "62em", "80em"],
  icons: _objectSpread(_objectSpread({}, core_["theme"].icons), {}, {
    dwolla: {
      path: __jsx("g", {
        fill: "url(#a)"
      }, __jsx("linearGradient", {
        id: "a",
        gradientUnits: "userSpaceOnUse",
        x1: "6.16",
        y1: "21.56",
        x2: "18",
        y2: "2.172"
      }, __jsx("stop", {
        offset: "0"
      }), __jsx("stop", {
        offset: "1"
      })), __jsx("path", {
        d: "M21.9 5.5L12.7.2c-.4-.2-1-.2-1.4 0L2.1 5.5c-.4.2-.7.7-.7 1.2v10.6c0 .5.3 1 .7 1.2l9.2 5.3c.4.3 1 .3 1.4 0l9.2-5.3c.4-.2.7-.7.7-1.2V6.7c0-.5-.3-1-.7-1.2zM6 9.4v6.1l-3.2 1.8V6.7L12 1.4v3.7l-5.3 3c-.4.3-.7.8-.7 1.3zm5.3 1.4c-.4.3-.7.7-.7 1.2v6.1l-3.2 1.8V9.4l9.2-5.3v3.7l-5.3 3zm9.9 6.5L12 22.6V12l9.2-5.3v10.6z"
      }))
    },
    corteva: {
      path: __jsx("g", {
        fill: "#0072CE"
      }, __jsx("path", {
        d: "M.05,11.35,11.32,0A12,12,0,0,0,.05,11.35M23.92,12v-.16H14.31l-2.17-2.2H23.72a12.06,12.06,0,0,0-1-3.08H12.36l2.17-2.19h6.69a11.77,11.77,0,0,0-3.69-3s-.06,0-.08,0A11.82,11.82,0,0,0,14.35.2L.25,14.4a10.8,10.8,0,0,0,.47,1.66A10,10,0,0,0,1.4,17.6,12,12,0,0,0,11.15,24l-8-8.12,1.64-1.66,9.51,9.57a11.5,11.5,0,0,0,3.2-1.12L6.89,12l1.64-1.66,10.9,11a11.39,11.39,0,0,0,2.11-2.22l-4.22-4.26h6.21A9.87,9.87,0,0,0,23.92,12"
      }))
    },
    github: {
      path: __jsx("g", {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, __jsx("path", {
        d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
      }))
    },
    dribbble: {
      path: __jsx("g", {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, __jsx("path", {
        d: "M22.3,12c0,5.6-4.5,10.2-10.2,10.2S2,17.6,2,12S6.5,1.8,12.2,1.8S22.3,6.4,22.3,12z M16.5,21.2 c0,0-1.6-11-8.3-18.5 M22.3,12.5c0,0-11.3-3.1-17.3,6.7 M2.1,10.8c13.4,0.3,17.1-6.1,17.1-6.1"
      }))
    },
    linkedin: {
      path: __jsx("g", {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, __jsx("path", {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      }), __jsx("rect", {
        x: "2",
        y: "9",
        width: "4",
        height: "12"
      }), __jsx("circle", {
        cx: "4",
        cy: "4",
        r: "2"
      }))
    },
    mail: {
      path: __jsx("g", {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, __jsx("path", {
        d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      }), __jsx("polyline", {
        points: "22,6 12,13 2,6"
      }))
    }
  })
});

/* harmony default export */ var styles_theme = (theme);
// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;








const GlobalStyle = ({
  children
}) => {
  const {
    colorMode
  } = Object(core_["useColorMode"])();
  return _app_jsx(external_react_default.a.Fragment, null, _app_jsx(core_["CSSReset"], null), _app_jsx(external_emotion_core_["Global"], {
    styles: external_emotion_core_["css"]`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};

          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }

          html {
            min-width: 360px;
            height: -webkit-fill-available;
            scroll-behavior: smooth;
          }

          ::-webkit-scrollbar {
            height: 0px;
            width: 0px;
            background: transparent;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "#ffffff" : "#171923"};
          }
        `
  }), children);
};

const App = ({
  Component,
  pageProps
}) => {
  return _app_jsx(core_["ThemeProvider"], {
    theme: styles_theme
  }, _app_jsx(core_["ColorModeProvider"], {
    value: "light"
  }, _app_jsx(GlobalStyle, null, _app_jsx(external_next_seo_["DefaultSeo"], next_seo_config), _app_jsx(Component, pageProps))));
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "3vLF":
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "WKWs":
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/core");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ })

/******/ });