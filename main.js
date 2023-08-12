/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/Bank-of-England.ttf */ "./src/assets/Bank-of-England.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/Black-Bamboo-Regular.otf */ "./src/assets/Black-Bamboo-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'Bank of England';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
@font-face {
  font-family: 'Black Bamboo';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
@property --gradient-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Helsinki', sans-serif;
  text-decoration: none;
  list-style: none;
  scroll-behavior: smooth;
}

:root {
  --text-color: #ffffff;
  --second-color: #8ec5fc;
  --big-font: 5.5rem;
  --p-font: 1.5rem;
  --section-height: 88vh;
  --effect-clr-1: #2af598;
  --effect-clr-2: #fbab7e;
  --effect-clr-3: #8bc6ec;
  --effect-clr-4: #ff6a88;
  --effect-clr-5: rgb(37, 37, 37);
}

body {
  background-color: var(--second-color);
  background-image: linear-gradient(
    180deg,
    #8ec5fc 0%,
    #e0c3fc 61%,
    #9459ea 97%
  );
}

header {
  position: sticky;
  top: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 9%;
  /* font-size: 30px; */
  transition: all ease 0.55s;
  background-color: #0f0f0f;
}

.logo {
  font-family: 'Bank of England';
  color: var(--text-color);
  font-size: 40px;
  font-weight: bold;
  /* vertical-align: middle; */
}

.logo i {
  vertical-align: middle;
  /* color: var(--text-color); */
  color: var(--second-color);
  font-size: 38px;
  margin-right: 5px;
}

.navlist {
  display: flex;
}

.navlist a {
  font-size: var(--p-font);
  font-family: 'Kanit';
  color: var(--text-color);
  font-weight: 600;
  margin: 0 35px;
  transition: all ease 0.55s;
}
.navlist li {
  transition: all ease 0.55s;
}

.navlist a:hover {
  color: var(--second-color);
}
.navlist li:hover {
  color: var(--second-color);
  transform: translateY(-5px);
}
#menu-icon {
  font-size: 40px;
  color: var(--text-color);
  z-index: 10001;
  cursor: pointer;
  margin: 15px;
  display: none;
}

section {
  padding: 0 12%;
  scroll-snap-type: mandatory;
  scroll-snap-align: start;
  scroll-padding-bottom: 300px;
}
.hero {
  position: relative;
  width: 100%;
  height: var(--section-height);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 3rem;
}
.left-hero {
  max-width: 600px;
  max-height: 500px;
}
.social-icons {
  font-size: 30px;
  font-weight: 600;
  display: flex;
  justify-content: space-around;
  /* gap: 20px; */
  margin: 1rem 35px;
}
.social-icons a {
  transition: all ease 0.55s;
}
.social-icons a:hover {
  transform: translateY(-5px);
}
.right-hero {
  max-height: 500px;
  max-width: 600px;
}
.right-hero img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all ease-in-out 0.5s;
}

.right-hero img:hover {
  transform: translateY(-5px);
}

.song-title {
  font-family: 'Bank of England';
  font-size: var(--big-font);
  line-height: 1.3;
  font-weight: 800;
}

.song-phonetic {
  margin: 5px 0 20px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 22px;
  font-weight: 400;
}
.song-card {
  background-color: #0f0f0f;
  border-radius: 18px;
  opacity: 0.9;
  padding: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.song-desc-large {
  font-family: 'Dancing Script', cursive;
  font-size: 40px;
  color: var(--second-color);
  float: left;
  margin-bottom: 0.1rem;
  margin-right: 0.5rem;
  padding-top: 10px;
}
.song-desc {
  color: white;
  font-family: 'Kanit';
  /* font-size: 30px; */
  font-size: var(--p-font);
  font-weight: 300;
  line-height: 26px;
  /* max-width: 550px; */
  margin-bottom: 1rem;
  opacity: none;
}
.spotify {
  transition: all ease-in-out 0.5s;
}
.spotify:hover {
  transform: translateY(-5px);
}
.video {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: var(--section-height);
  padding: 150px;
}
.film {
  max-height: 100px;
  max-width: 100px;
  position: absolute;
  z-index: 2;
}
.video-box {
  margin: 40px;
  height: 70vh;
  width: 70vw;
  background-color: #8ec5fc;
  background-image: linear-gradient(
    62deg,
    #8ec5fc 0%,
    #e0c3fc 50%,
    #000000 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
/* .video-box iframe {
  width: 80%;
  height: auto;
  aspect-ratio: 16/9;
} */

.video-box::before,
.video-box::after {
  content: '';
  position: absolute;
  inset: -0.5rem;
  z-index: -1;
  background: conic-gradient(
    from var(--gradient-angle),
    var(--effect-clr-1),
    var(--effect-clr-2),
    var(--effect-clr-3),
    var(--effect-clr-4),
    var(--effect-clr-3),
    var(--effect-clr-2),
    var(--effect-clr-1)
  );
  border-radius: inherit;
  animation: rotation 20s linear infinite;
}
.video-box::after {
  filter: blur(3.5rem);
}
.behind-scene {
  position: relative;
  min-height: var(--section-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px;
}
.bts-title {
  display: flex;
  align-self: center;
  justify-content: center;
  font-family: 'Bank of England';
  letter-spacing: 16px;
  font-size: var(--big-font);
  line-height: 1.3;
  font-weight: 800;
  padding-top: 30px;

  /* margin: auto; */
  /* z-index: 10002; */
}
.bts-title span {
  font-size: var(--big-font);
  line-height: 1.3;
  font-weight: 800;
  padding-top: 30px;
}
.bts-box {
  /* margin: 40px; */
  height: 50vh;
  width: 50vw;
  background-color: #8ec5fc;
  background-image: linear-gradient(
    62deg,
    #8ec5fc 0%,
    #e0c3fc 50%,
    #000000 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* border-radius: 15px; */
}
.media-scroller {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 67%;

  /* padding: 0 1rem 1rem; */

  overflow-x: auto;
  overscroll-behavior-inline: contain;

  scroll-snap-type: inline mandatory;
  /* scroll-padding-inline: 1rem; */
}
.media-element {
  padding: 2rem;
  scroll-snap-align: center;
}
.media-element img {
  inline-size: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: all ease-in-out 0.5s;
  cursor: pointer;
}

.media-element img:hover {
  transform: scale(1.1);
}
.popup-bts {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  height: 100%;
  width: 100%;
  z-index: 10003;
  display: none;
}
.popup-bts span {
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 20px;
  font-size: 60px;
  font-weight: bolder;
  color: white;
  cursor: pointer;
  z-index: 10003;
}

.popup-bts img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid white;
  width: 750px;
  object-fit: cover;
}
.wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.wave svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 140px;
}

.wave .shape-fill {
  fill: #ffdee9;
}
/* .swiffy-slider {
  height: 50vh;
  width: 70vw;
} */

.about {
  position: relative;
  width: 100%;
  height: var(--section-height);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 3rem;
}
.about h2 {
  font-family: 'Bank of England';
  font-size: var(--big-font);
  line-height: 1.3;
  font-weight: 800;
}
.left-about-card {
  background-color: #00000052;
  border-radius: 18px;
  opacity: 0.9;
  padding: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.about p {
  color: white;
  font-family: 'Kanit';
  /* font-size: 30px; */
  font-size: var(--p-font);
  font-weight: 300;
  line-height: 26px;
  /* max-width: 550px; */
  margin-bottom: 1rem;
  opacity: none;
}
.right-about {
  max-height: 500px;
  max-width: 600px;
}
.main-form {
  /* height: 60vh;
  width: 60vw; */
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 50%);
  position: relative;
  padding: 20px;
  border-radius: 15px;
}
.main-form ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
input {
  width: 300px;
  height: 40px;
  background-color: #0f0f0f;
  color: white;
  border-radius: 15px;
  text-align: center;
  font: var(--p-font);
}
textarea {
  width: 300px;
  background-color: #0f0f0f;
  color: white;
  border-radius: 15px;
  text-align: center;
  font: var(--p-font);
}
button {
  color: #fff;
  padding: 20px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 30px;
  display: inline-block;
  border: none;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(
    90deg,
    hsla(257, 75%, 71%, 1),
    hsla(357, 75%, 71%, 1)
  );
  background-size: 600%;
  cursor: pointer;
  transition: all ease-in-out 0.5s;
}
button:hover {
  transform: translateY(5px) scale(0.9);
}

@keyframes rotation {
  0% {
    --gradient-angle: 0deg;
  }
  100% {
    --gradient-angle: 360deg;
  }
}
@media (max-width: 1600px) {
  header {
    padding: 13px 3%;
  }
  section {
    padding: 0 5%;
  }
}
@media (max-width: 1400px) {
  :root {
    --big-font: 4rem;
    --p-font: 18px;
  }
}
@media (max-width: 1230px) {
  .hero {
    grid-template-columns: 1fr;
    /* grid-template-rows: repeat(2, 600px); */
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .right-hero {
    order: 2;
    margin: auto;
    height: auto;
    width: auto;
  }
  .right-hero img {
    width: 100%;
    height: auto;
  }
  .left-hero {
    margin: auto;
    margin-top: 10px;
    height: auto;
    width: auto;
    max-width: 500px;
  }
  section {
    padding: 50px 5%;
  }
  .video-box iframe {
    width: 640px;
    height: 385px;
    /* aspect-ratio: 16/9; */
  }
  .about {
    grid-template-columns: 1fr;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .left-about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .right-about {
    order: 2;
  }
}
@media (max-width: 1070px) {
  header {
    padding: 10px 3%;
  }
  #menu-icon {
    display: initial;
  }
  .logo {
    padding-top: 10px;
  }
  .navlist {
    position: absolute;
    top: -700px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    background: #000;
    transition: all ease-in-out 0.5s;
    /* text-align: left; */
  }
  .navlist a {
    display: block;
    font-size: 23px;
    font-weight: 400;
    margin: 0.8rem 1.8rem;
  }
  .navlist.open {
    top: 100%;
  }
  .video-box iframe {
    width: 560px;
    height: 340px;
    /* width: 90%;
    height: auto;
    aspect-ratio: 16/9; */
  }
}
@media (max-width: 768px) {
  .popup-bts img {
    width: 95%;
  }
  .about p {
    font-size: 12px;
  }
  input,
  textarea {
    width: auto;
  }
}
@media (max-width: 600px) {
  :root {
    --big-font: 3rem;
    --p-font: 14px;
  }
  .logo {
    font-size: 32px;
  }
  /* .left-hero {
    height: 100vh;
  } */
}
@media (max-height: 600px) {
  .logo {
    font-size: 28px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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IACZ,mBAAmB;IACnB,uBAAuB;EACzB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;EACrB;EACA;IACE,QAAQ;EACV;AACF;AACA;EACE;IACE,gBAAgB;EAClB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,kBAAkB;IAClB,WAAW;IACX,OAAO;IACP,QAAQ;IACR,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,gCAAgC;IAChC,sBAAsB;EACxB;EACA;IACE,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,qBAAqB;EACvB;EACA;IACE,SAAS;EACX;EACA;IACE,YAAY;IACZ,aAAa;IACb;;yBAEqB;EACvB;AACF;AACA;EACE;IACE,UAAU;EACZ;EACA;IACE,eAAe;EACjB;EACA;;IAEE,WAAW;EACb;AACF;AACA;EACE;IACE,gBAAgB;IAChB,cAAc;EAChB;EACA;IACE,eAAe;EACjB;EACA;;KAEG;AACL;AACA;EACE;IACE,eAAe;EACjB;AACF","sourcesContent":["@font-face {\n  font-family: 'Bank of England';\n  src: url(/src/assets/Bank-of-England.ttf);\n}\n@font-face {\n  font-family: 'Black Bamboo';\n  src: url(/src/assets/Black-Bamboo-Regular.otf);\n}\n@property --gradient-angle {\n  syntax: '<angle>';\n  initial-value: 0deg;\n  inherits: false;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Helsinki', sans-serif;\n  text-decoration: none;\n  list-style: none;\n  scroll-behavior: smooth;\n}\n\n:root {\n  --text-color: #ffffff;\n  --second-color: #8ec5fc;\n  --big-font: 5.5rem;\n  --p-font: 1.5rem;\n  --section-height: 88vh;\n  --effect-clr-1: #2af598;\n  --effect-clr-2: #fbab7e;\n  --effect-clr-3: #8bc6ec;\n  --effect-clr-4: #ff6a88;\n  --effect-clr-5: rgb(37, 37, 37);\n}\n\nbody {\n  background-color: var(--second-color);\n  background-image: linear-gradient(\n    180deg,\n    #8ec5fc 0%,\n    #e0c3fc 61%,\n    #9459ea 97%\n  );\n}\n\nheader {\n  position: sticky;\n  top: 0;\n  right: 0;\n  z-index: 1000;\n  width: 100%;\n  height: 12vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 9%;\n  /* font-size: 30px; */\n  transition: all ease 0.55s;\n  background-color: #0f0f0f;\n}\n\n.logo {\n  font-family: 'Bank of England';\n  color: var(--text-color);\n  font-size: 40px;\n  font-weight: bold;\n  /* vertical-align: middle; */\n}\n\n.logo i {\n  vertical-align: middle;\n  /* color: var(--text-color); */\n  color: var(--second-color);\n  font-size: 38px;\n  margin-right: 5px;\n}\n\n.navlist {\n  display: flex;\n}\n\n.navlist a {\n  font-size: var(--p-font);\n  font-family: 'Kanit';\n  color: var(--text-color);\n  font-weight: 600;\n  margin: 0 35px;\n  transition: all ease 0.55s;\n}\n.navlist li {\n  transition: all ease 0.55s;\n}\n\n.navlist a:hover {\n  color: var(--second-color);\n}\n.navlist li:hover {\n  color: var(--second-color);\n  transform: translateY(-5px);\n}\n#menu-icon {\n  font-size: 40px;\n  color: var(--text-color);\n  z-index: 10001;\n  cursor: pointer;\n  margin: 15px;\n  display: none;\n}\n\nsection {\n  padding: 0 12%;\n  scroll-snap-type: mandatory;\n  scroll-snap-align: start;\n  scroll-padding-bottom: 300px;\n}\n.hero {\n  position: relative;\n  width: 100%;\n  height: var(--section-height);\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  gap: 3rem;\n}\n.left-hero {\n  max-width: 600px;\n  max-height: 500px;\n}\n.social-icons {\n  font-size: 30px;\n  font-weight: 600;\n  display: flex;\n  justify-content: space-around;\n  /* gap: 20px; */\n  margin: 1rem 35px;\n}\n.social-icons a {\n  transition: all ease 0.55s;\n}\n.social-icons a:hover {\n  transform: translateY(-5px);\n}\n.right-hero {\n  max-height: 500px;\n  max-width: 600px;\n}\n.right-hero img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  transition: all ease-in-out 0.5s;\n}\n\n.right-hero img:hover {\n  transform: translateY(-5px);\n}\n\n.song-title {\n  font-family: 'Bank of England';\n  font-size: var(--big-font);\n  line-height: 1.3;\n  font-weight: 800;\n}\n\n.song-phonetic {\n  margin: 5px 0 20px;\n  color: black;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  font-size: 22px;\n  font-weight: 400;\n}\n.song-card {\n  background-color: #0f0f0f;\n  border-radius: 18px;\n  opacity: 0.9;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.song-desc-large {\n  font-family: 'Dancing Script', cursive;\n  font-size: 40px;\n  color: var(--second-color);\n  float: left;\n  margin-bottom: 0.1rem;\n  margin-right: 0.5rem;\n  padding-top: 10px;\n}\n.song-desc {\n  color: white;\n  font-family: 'Kanit';\n  /* font-size: 30px; */\n  font-size: var(--p-font);\n  font-weight: 300;\n  line-height: 26px;\n  /* max-width: 550px; */\n  margin-bottom: 1rem;\n  opacity: none;\n}\n.spotify {\n  transition: all ease-in-out 0.5s;\n}\n.spotify:hover {\n  transform: translateY(-5px);\n}\n.video {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: var(--section-height);\n  padding: 150px;\n}\n.film {\n  max-height: 100px;\n  max-width: 100px;\n  position: absolute;\n  z-index: 2;\n}\n.video-box {\n  margin: 40px;\n  height: 70vh;\n  width: 70vw;\n  background-color: #8ec5fc;\n  background-image: linear-gradient(\n    62deg,\n    #8ec5fc 0%,\n    #e0c3fc 50%,\n    #000000 100%\n  );\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n/* .video-box iframe {\n  width: 80%;\n  height: auto;\n  aspect-ratio: 16/9;\n} */\n\n.video-box::before,\n.video-box::after {\n  content: '';\n  position: absolute;\n  inset: -0.5rem;\n  z-index: -1;\n  background: conic-gradient(\n    from var(--gradient-angle),\n    var(--effect-clr-1),\n    var(--effect-clr-2),\n    var(--effect-clr-3),\n    var(--effect-clr-4),\n    var(--effect-clr-3),\n    var(--effect-clr-2),\n    var(--effect-clr-1)\n  );\n  border-radius: inherit;\n  animation: rotation 20s linear infinite;\n}\n.video-box::after {\n  filter: blur(3.5rem);\n}\n.behind-scene {\n  position: relative;\n  min-height: var(--section-height);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 120px;\n}\n.bts-title {\n  display: flex;\n  align-self: center;\n  justify-content: center;\n  font-family: 'Bank of England';\n  letter-spacing: 16px;\n  font-size: var(--big-font);\n  line-height: 1.3;\n  font-weight: 800;\n  padding-top: 30px;\n\n  /* margin: auto; */\n  /* z-index: 10002; */\n}\n.bts-title span {\n  font-size: var(--big-font);\n  line-height: 1.3;\n  font-weight: 800;\n  padding-top: 30px;\n}\n.bts-box {\n  /* margin: 40px; */\n  height: 50vh;\n  width: 50vw;\n  background-color: #8ec5fc;\n  background-image: linear-gradient(\n    62deg,\n    #8ec5fc 0%,\n    #e0c3fc 50%,\n    #000000 100%\n  );\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  /* border-radius: 15px; */\n}\n.media-scroller {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 67%;\n\n  /* padding: 0 1rem 1rem; */\n\n  overflow-x: auto;\n  overscroll-behavior-inline: contain;\n\n  scroll-snap-type: inline mandatory;\n  /* scroll-padding-inline: 1rem; */\n}\n.media-element {\n  padding: 2rem;\n  scroll-snap-align: center;\n}\n.media-element img {\n  inline-size: 100%;\n  aspect-ratio: 16/9;\n  object-fit: cover;\n  transition: all ease-in-out 0.5s;\n  cursor: pointer;\n}\n\n.media-element img:hover {\n  transform: scale(1.1);\n}\n.popup-bts {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.9);\n  height: 100%;\n  width: 100%;\n  z-index: 10003;\n  display: none;\n}\n.popup-bts span {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-right: 20px;\n  font-size: 60px;\n  font-weight: bolder;\n  color: white;\n  cursor: pointer;\n  z-index: 10003;\n}\n\n.popup-bts img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 5px solid white;\n  width: 750px;\n  object-fit: cover;\n}\n.wave {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  line-height: 0;\n}\n\n.wave svg {\n  position: relative;\n  display: block;\n  width: calc(100% + 1.3px);\n  height: 140px;\n}\n\n.wave .shape-fill {\n  fill: #ffdee9;\n}\n/* .swiffy-slider {\n  height: 50vh;\n  width: 70vw;\n} */\n\n.about {\n  position: relative;\n  width: 100%;\n  height: var(--section-height);\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  gap: 3rem;\n}\n.about h2 {\n  font-family: 'Bank of England';\n  font-size: var(--big-font);\n  line-height: 1.3;\n  font-weight: 800;\n}\n.left-about-card {\n  background-color: #00000052;\n  border-radius: 18px;\n  opacity: 0.9;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.about p {\n  color: white;\n  font-family: 'Kanit';\n  /* font-size: 30px; */\n  font-size: var(--p-font);\n  font-weight: 300;\n  line-height: 26px;\n  /* max-width: 550px; */\n  margin-bottom: 1rem;\n  opacity: none;\n}\n.right-about {\n  max-height: 500px;\n  max-width: 600px;\n}\n.main-form {\n  /* height: 60vh;\n  width: 60vw; */\n  background-color: #8ec5fc;\n  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 50%);\n  position: relative;\n  padding: 20px;\n  border-radius: 15px;\n}\n.main-form ul {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\ninput {\n  width: 300px;\n  height: 40px;\n  background-color: #0f0f0f;\n  color: white;\n  border-radius: 15px;\n  text-align: center;\n  font: var(--p-font);\n}\ntextarea {\n  width: 300px;\n  background-color: #0f0f0f;\n  color: white;\n  border-radius: 15px;\n  text-align: center;\n  font: var(--p-font);\n}\nbutton {\n  color: #fff;\n  padding: 20px;\n  padding-left: 30px;\n  padding-right: 30px;\n  border-radius: 30px;\n  display: inline-block;\n  border: none;\n  font-family: 'Inter', sans-serif;\n  background: linear-gradient(\n    90deg,\n    hsla(257, 75%, 71%, 1),\n    hsla(357, 75%, 71%, 1)\n  );\n  background-size: 600%;\n  cursor: pointer;\n  transition: all ease-in-out 0.5s;\n}\nbutton:hover {\n  transform: translateY(5px) scale(0.9);\n}\n\n@keyframes rotation {\n  0% {\n    --gradient-angle: 0deg;\n  }\n  100% {\n    --gradient-angle: 360deg;\n  }\n}\n@media (max-width: 1600px) {\n  header {\n    padding: 13px 3%;\n  }\n  section {\n    padding: 0 5%;\n  }\n}\n@media (max-width: 1400px) {\n  :root {\n    --big-font: 4rem;\n    --p-font: 18px;\n  }\n}\n@media (max-width: 1230px) {\n  .hero {\n    grid-template-columns: 1fr;\n    /* grid-template-rows: repeat(2, 600px); */\n    height: auto;\n    align-items: center;\n    justify-content: center;\n  }\n  .right-hero {\n    order: 2;\n    margin: auto;\n    height: auto;\n    width: auto;\n  }\n  .right-hero img {\n    width: 100%;\n    height: auto;\n  }\n  .left-hero {\n    margin: auto;\n    margin-top: 10px;\n    height: auto;\n    width: auto;\n    max-width: 500px;\n  }\n  section {\n    padding: 50px 5%;\n  }\n  .video-box iframe {\n    width: 640px;\n    height: 385px;\n    /* aspect-ratio: 16/9; */\n  }\n  .about {\n    grid-template-columns: 1fr;\n    height: auto;\n    align-items: center;\n    justify-content: center;\n  }\n  .left-about {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .right-about {\n    order: 2;\n  }\n}\n@media (max-width: 1070px) {\n  header {\n    padding: 10px 3%;\n  }\n  #menu-icon {\n    display: initial;\n  }\n  .logo {\n    padding-top: 10px;\n  }\n  .navlist {\n    position: absolute;\n    top: -700px;\n    left: 0;\n    right: 0;\n    display: flex;\n    flex-direction: column;\n    background: #000;\n    transition: all ease-in-out 0.5s;\n    /* text-align: left; */\n  }\n  .navlist a {\n    display: block;\n    font-size: 23px;\n    font-weight: 400;\n    margin: 0.8rem 1.8rem;\n  }\n  .navlist.open {\n    top: 100%;\n  }\n  .video-box iframe {\n    width: 560px;\n    height: 340px;\n    /* width: 90%;\n    height: auto;\n    aspect-ratio: 16/9; */\n  }\n}\n@media (max-width: 768px) {\n  .popup-bts img {\n    width: 95%;\n  }\n  .about p {\n    font-size: 12px;\n  }\n  input,\n  textarea {\n    width: auto;\n  }\n}\n@media (max-width: 600px) {\n  :root {\n    --big-font: 3rem;\n    --p-font: 14px;\n  }\n  .logo {\n    font-size: 32px;\n  }\n  /* .left-hero {\n    height: 100vh;\n  } */\n}\n@media (max-height: 600px) {\n  .logo {\n    font-size: 28px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js":
/*!*******************************************************************!*\
  !*** ./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var is_dom_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-dom-node */ "./node_modules/is-dom-node/dist/is-dom-node.es.js");
/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/


function isDomNodeList(x) {
	var prototypeToString = Object.prototype.toString.call(x);
	var regex = /^\[object (HTMLCollection|NodeList|Object)\]$/;

	return typeof window.NodeList === 'object'
		? x instanceof window.NodeList
		: x !== null &&
				typeof x === 'object' &&
				typeof x.length === 'number' &&
				regex.test(prototypeToString) &&
				(x.length === 0 || (0,is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"])(x[0]))
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDomNodeList);


/***/ }),

/***/ "./node_modules/is-dom-node/dist/is-dom-node.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/is-dom-node/dist/is-dom-node.es.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
function isDomNode(x) {
	return typeof window.Node === 'object'
		? x instanceof window.Node
		: x !== null &&
				typeof x === 'object' &&
				typeof x.nodeType === 'number' &&
				typeof x.nodeName === 'string'
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDomNode);


/***/ }),

/***/ "./node_modules/miniraf/dist/miniraf.es.js":
/*!*************************************************!*\
  !*** ./node_modules/miniraf/dist/miniraf.es.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
var polyfill = (function () {
	var clock = Date.now();

	return function (callback) {
		var currentTime = Date.now();
		if (currentTime - clock > 16) {
			clock = currentTime;
			callback(currentTime);
		} else {
			setTimeout(function () { return polyfill(callback); }, 0);
		}
	}
})();

var index = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	polyfill;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/rematrix/dist/rematrix.es.js":
/*!***************************************************!*\
  !*** ./node_modules/rematrix/dist/rematrix.es.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   inverse: () => (/* binding */ inverse),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   scaleX: () => (/* binding */ scaleX),
/* harmony export */   scaleY: () => (/* binding */ scaleY),
/* harmony export */   scaleZ: () => (/* binding */ scaleZ),
/* harmony export */   skew: () => (/* binding */ skew),
/* harmony export */   skewX: () => (/* binding */ skewX),
/* harmony export */   skewY: () => (/* binding */ skewY),
/* harmony export */   toString: () => (/* binding */ toString),
/* harmony export */   translate: () => (/* binding */ translate),
/* harmony export */   translateX: () => (/* binding */ translateX),
/* harmony export */   translateY: () => (/* binding */ translateY),
/* harmony export */   translateZ: () => (/* binding */ translateZ)
/* harmony export */ });
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/
/**
 * @module Rematrix
 */

/**
 * Transformation matrices in the browser come in two flavors:
 *
 *  - `matrix` using 6 values (short)
 *  - `matrix3d` using 16 values (long)
 *
 * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
 * to expand short form matrices to their equivalent long form.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */
function format(source) {
	if (source.constructor !== Array) {
		throw new TypeError('Expected array.')
	}
	if (source.length === 16) {
		return source
	}
	if (source.length === 6) {
		var matrix = identity();
		matrix[0] = source[0];
		matrix[1] = source[1];
		matrix[4] = source[2];
		matrix[5] = source[3];
		matrix[12] = source[4];
		matrix[13] = source[5];
		return matrix
	}
	throw new RangeError('Expected array with either 6 or 16 values.')
}

/**
 * Returns a matrix representing no transformation. The product of any matrix
 * multiplied by the identity matrix will be the original matrix.
 *
 * > **Tip:** Similar to how `5 * 1 === 5`, where `1` is the identity.
 *
 * @return {array}
 */
function identity() {
	var matrix = [];
	for (var i = 0; i < 16; i++) {
		i % 5 == 0 ? matrix.push(1) : matrix.push(0);
	}
	return matrix
}

/**
 * Returns a matrix describing the inverse transformation of the source
 * matrix. The product of any matrix multiplied by its inverse will be the
 * identity matrix.
 *
 * > **Tip:** Similar to how `5 * (1/5) === 1`, where `1/5` is the inverse.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */
function inverse(source) {
	var m = format(source);

	var s0 = m[0] * m[5] - m[4] * m[1];
	var s1 = m[0] * m[6] - m[4] * m[2];
	var s2 = m[0] * m[7] - m[4] * m[3];
	var s3 = m[1] * m[6] - m[5] * m[2];
	var s4 = m[1] * m[7] - m[5] * m[3];
	var s5 = m[2] * m[7] - m[6] * m[3];

	var c5 = m[10] * m[15] - m[14] * m[11];
	var c4 = m[9] * m[15] - m[13] * m[11];
	var c3 = m[9] * m[14] - m[13] * m[10];
	var c2 = m[8] * m[15] - m[12] * m[11];
	var c1 = m[8] * m[14] - m[12] * m[10];
	var c0 = m[8] * m[13] - m[12] * m[9];

	var determinant = 1 / (s0 * c5 - s1 * c4 + s2 * c3 + s3 * c2 - s4 * c1 + s5 * c0);

	if (isNaN(determinant) || determinant === Infinity) {
		throw new Error('Inverse determinant attempted to divide by zero.')
	}

	return [
		(m[5] * c5 - m[6] * c4 + m[7] * c3) * determinant,
		(-m[1] * c5 + m[2] * c4 - m[3] * c3) * determinant,
		(m[13] * s5 - m[14] * s4 + m[15] * s3) * determinant,
		(-m[9] * s5 + m[10] * s4 - m[11] * s3) * determinant,

		(-m[4] * c5 + m[6] * c2 - m[7] * c1) * determinant,
		(m[0] * c5 - m[2] * c2 + m[3] * c1) * determinant,
		(-m[12] * s5 + m[14] * s2 - m[15] * s1) * determinant,
		(m[8] * s5 - m[10] * s2 + m[11] * s1) * determinant,

		(m[4] * c4 - m[5] * c2 + m[7] * c0) * determinant,
		(-m[0] * c4 + m[1] * c2 - m[3] * c0) * determinant,
		(m[12] * s4 - m[13] * s2 + m[15] * s0) * determinant,
		(-m[8] * s4 + m[9] * s2 - m[11] * s0) * determinant,

		(-m[4] * c3 + m[5] * c1 - m[6] * c0) * determinant,
		(m[0] * c3 - m[1] * c1 + m[2] * c0) * determinant,
		(-m[12] * s3 + m[13] * s1 - m[14] * s0) * determinant,
		(m[8] * s3 - m[9] * s1 + m[10] * s0) * determinant
	]
}

/**
 * Returns a 4x4 matrix describing the combined transformations
 * of both arguments.
 *
 * > **Note:** Order is very important. For example, rotating 45°
 * along the Z-axis, followed by translating 500 pixels along the
 * Y-axis... is not the same as translating 500 pixels along the
 * Y-axis, followed by rotating 45° along on the Z-axis.
 *
 * @param  {array} m - Accepts both short and long form matrices.
 * @param  {array} x - Accepts both short and long form matrices.
 * @return {array}
 */
function multiply(m, x) {
	var fm = format(m);
	var fx = format(x);
	var product = [];

	for (var i = 0; i < 4; i++) {
		var row = [fm[i], fm[i + 4], fm[i + 8], fm[i + 12]];
		for (var j = 0; j < 4; j++) {
			var k = j * 4;
			var col = [fx[k], fx[k + 1], fx[k + 2], fx[k + 3]];
			var result =
				row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];

			product[i + k] = result;
		}
	}

	return product
}

/**
 * Attempts to return a 4x4 matrix describing the CSS transform
 * matrix passed in, but will return the identity matrix as a
 * fallback.
 *
 * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
 * `string` from computed styles) to its equivalent array format.
 *
 * @param  {string} source - `matrix` or `matrix3d` CSS Transform value.
 * @return {array}
 */
function parse(source) {
	if (typeof source === 'string') {
		var match = source.match(/matrix(3d)?\(([^)]+)\)/);
		if (match) {
			var raw = match[2].split(', ').map(parseFloat);
			return format(raw)
		}
	}
	return identity()
}

/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * > **Tip:** This is just an alias for `Rematrix.rotateZ` for parity with CSS
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotate(angle) {
	return rotateZ(angle)
}

/**
 * Returns a 4x4 matrix describing X-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateX(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[5] = matrix[10] = Math.cos(theta);
	matrix[6] = matrix[9] = Math.sin(theta);
	matrix[9] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateY(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[0] = matrix[10] = Math.cos(theta);
	matrix[2] = matrix[8] = Math.sin(theta);
	matrix[2] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateZ(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[0] = matrix[5] = Math.cos(theta);
	matrix[1] = matrix[4] = Math.sin(theta);
	matrix[4] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing 2D scaling. The first argument
 * is used for both X and Y-axis scaling, unless an optional
 * second argument is provided to explicitly define Y-axis scaling.
 *
 * @param  {number} scalar    - Decimal multiplier.
 * @param  {number} [scalarY] - Decimal multiplier.
 * @return {array}
 */
function scale(scalar, scalarY) {
	var matrix = identity();

	matrix[0] = scalar;
	matrix[5] = typeof scalarY === 'number' ? scalarY : scalar;

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleX(scalar) {
	var matrix = identity();
	matrix[0] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleY(scalar) {
	var matrix = identity();
	matrix[5] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleZ(scalar) {
	var matrix = identity();
	matrix[10] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing shear. The first argument
 * defines X-axis shearing, and an optional second argument
 * defines Y-axis shearing.
 *
 * @param  {number} angleX   - Measured in degrees.
 * @param  {number} [angleY] - Measured in degrees.
 * @return {array}
 */
function skew(angleX, angleY) {
	var thetaX = Math.PI / 180 * angleX;
	var matrix = identity();

	matrix[4] = Math.tan(thetaX);

	if (angleY) {
		var thetaY = Math.PI / 180 * angleY;
		matrix[1] = Math.tan(thetaY);
	}

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis shear.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function skewX(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[4] = Math.tan(theta);

	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis shear.
 *
 * @param  {number} angle - Measured in degrees
 * @return {array}
 */
function skewY(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[1] = Math.tan(theta);

	return matrix
}

/**
 * Returns a CSS Transform property value equivalent to the source matrix.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {string}
 */
function toString(source) {
	return ("matrix3d(" + (format(source).join(', ')) + ")")
}

/**
 * Returns a 4x4 matrix describing 2D translation. The first
 * argument defines X-axis translation, and an optional second
 * argument defines Y-axis translation.
 *
 * @param  {number} distanceX   - Measured in pixels.
 * @param  {number} [distanceY] - Measured in pixels.
 * @return {array}
 */
function translate(distanceX, distanceY) {
	var matrix = identity();
	matrix[12] = distanceX;

	if (distanceY) {
		matrix[13] = distanceY;
	}

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateX(distance) {
	var matrix = identity();
	matrix[12] = distance;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateY(distance) {
	var matrix = identity();
	matrix[13] = distance;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateZ(distance) {
	var matrix = identity();
	matrix[14] = distance;
	return matrix
}




/***/ }),

/***/ "./node_modules/scrollreveal/dist/scrollreveal.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/scrollreveal/dist/scrollreveal.es.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tealight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tealight */ "./node_modules/tealight/dist/tealight.es.js");
/* harmony import */ var rematrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rematrix */ "./node_modules/rematrix/dist/rematrix.es.js");
/* harmony import */ var miniraf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! miniraf */ "./node_modules/miniraf/dist/miniraf.es.js");
/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/




var defaults = {
	delay: 0,
	distance: '0',
	duration: 600,
	easing: 'cubic-bezier(0.5, 0, 0, 1)',
	interval: 0,
	opacity: 0,
	origin: 'bottom',
	rotate: {
		x: 0,
		y: 0,
		z: 0
	},
	scale: 1,
	cleanup: false,
	container: document.documentElement,
	desktop: true,
	mobile: true,
	reset: false,
	useDelay: 'always',
	viewFactor: 0.0,
	viewOffset: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	},
	afterReset: function afterReset() {},
	afterReveal: function afterReveal() {},
	beforeReset: function beforeReset() {},
	beforeReveal: function beforeReveal() {}
};

function failure() {
	document.documentElement.classList.remove('sr');

	return {
		clean: function clean() {},
		destroy: function destroy() {},
		reveal: function reveal() {},
		sync: function sync() {},
		get noop() {
			return true
		}
	}
}

function success() {
	document.documentElement.classList.add('sr');

	if (document.body) {
		document.body.style.height = '100%';
	} else {
		document.addEventListener('DOMContentLoaded', function () {
			document.body.style.height = '100%';
		});
	}
}

var mount = { success: success, failure: failure };

function isObject(x) {
	return (
		x !== null &&
		x instanceof Object &&
		(x.constructor === Object ||
			Object.prototype.toString.call(x) === '[object Object]')
	)
}

function each(collection, callback) {
	if (isObject(collection)) {
		var keys = Object.keys(collection);
		return keys.forEach(function (key) { return callback(collection[key], key, collection); })
	}
	if (collection instanceof Array) {
		return collection.forEach(function (item, i) { return callback(item, i, collection); })
	}
	throw new TypeError('Expected either an array or object literal.')
}

function logger(message) {
	var details = [], len = arguments.length - 1;
	while ( len-- > 0 ) details[ len ] = arguments[ len + 1 ];

	if (this.constructor.debug && console) {
		var report = "%cScrollReveal: " + message;
		details.forEach(function (detail) { return (report += "\n — " + detail); });
		console.log(report, 'color: #ea654b;'); // eslint-disable-line no-console
	}
}

function rinse() {
	var this$1 = this;

	var struct = function () { return ({
		active: [],
		stale: []
	}); };

	var elementIds = struct();
	var sequenceIds = struct();
	var containerIds = struct();

	/**
	 * Take stock of active element IDs.
	 */
	try {
		each((0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-sr-id]'), function (node) {
			var id = parseInt(node.getAttribute('data-sr-id'));
			elementIds.active.push(id);
		});
	} catch (e) {
		throw e
	}
	/**
	 * Destroy stale elements.
	 */
	each(this.store.elements, function (element) {
		if (elementIds.active.indexOf(element.id) === -1) {
			elementIds.stale.push(element.id);
		}
	});

	each(elementIds.stale, function (staleId) { return delete this$1.store.elements[staleId]; });

	/**
	 * Take stock of active container and sequence IDs.
	 */
	each(this.store.elements, function (element) {
		if (containerIds.active.indexOf(element.containerId) === -1) {
			containerIds.active.push(element.containerId);
		}
		if (element.hasOwnProperty('sequence')) {
			if (sequenceIds.active.indexOf(element.sequence.id) === -1) {
				sequenceIds.active.push(element.sequence.id);
			}
		}
	});

	/**
	 * Destroy stale containers.
	 */
	each(this.store.containers, function (container) {
		if (containerIds.active.indexOf(container.id) === -1) {
			containerIds.stale.push(container.id);
		}
	});

	each(containerIds.stale, function (staleId) {
		var stale = this$1.store.containers[staleId].node;
		stale.removeEventListener('scroll', this$1.delegate);
		stale.removeEventListener('resize', this$1.delegate);
		delete this$1.store.containers[staleId];
	});

	/**
	 * Destroy stale sequences.
	 */
	each(this.store.sequences, function (sequence) {
		if (sequenceIds.active.indexOf(sequence.id) === -1) {
			sequenceIds.stale.push(sequence.id);
		}
	});

	each(sequenceIds.stale, function (staleId) { return delete this$1.store.sequences[staleId]; });
}

var getPrefixedCssProp = (function () {
	var properties = {};
	var style = document.documentElement.style;

	function getPrefixedCssProperty(name, source) {
		if ( source === void 0 ) source = style;

		if (name && typeof name === 'string') {
			if (properties[name]) {
				return properties[name]
			}
			if (typeof source[name] === 'string') {
				return (properties[name] = name)
			}
			if (typeof source[("-webkit-" + name)] === 'string') {
				return (properties[name] = "-webkit-" + name)
			}
			throw new RangeError(("Unable to find \"" + name + "\" style property."))
		}
		throw new TypeError('Expected a string.')
	}

	getPrefixedCssProperty.clearCache = function () { return (properties = {}); };

	return getPrefixedCssProperty
})();

function style(element) {
	var computed = window.getComputedStyle(element.node);
	var position = computed.position;
	var config = element.config;

	/**
	 * Generate inline styles
	 */
	var inline = {};
	var inlineStyle = element.node.getAttribute('style') || '';
	var inlineMatch = inlineStyle.match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];

	inline.computed = inlineMatch ? inlineMatch.map(function (m) { return m.trim(); }).join('; ') + ';' : '';

	inline.generated = inlineMatch.some(function (m) { return m.match(/visibility\s?:\s?visible/i); })
		? inline.computed
		: inlineMatch.concat( ['visibility: visible']).map(function (m) { return m.trim(); }).join('; ') + ';';

	/**
	 * Generate opacity styles
	 */
	var computedOpacity = parseFloat(computed.opacity);
	var configOpacity = !isNaN(parseFloat(config.opacity))
		? parseFloat(config.opacity)
		: parseFloat(computed.opacity);

	var opacity = {
		computed: computedOpacity !== configOpacity ? ("opacity: " + computedOpacity + ";") : '',
		generated: computedOpacity !== configOpacity ? ("opacity: " + configOpacity + ";") : ''
	};

	/**
	 * Generate transformation styles
	 */
	var transformations = [];

	if (parseFloat(config.distance)) {
		var axis = config.origin === 'top' || config.origin === 'bottom' ? 'Y' : 'X';

		/**
		 * Let’s make sure our our pixel distances are negative for top and left.
		 * e.g. { origin: 'top', distance: '25px' } starts at `top: -25px` in CSS.
		 */
		var distance = config.distance;
		if (config.origin === 'top' || config.origin === 'left') {
			distance = /^-/.test(distance) ? distance.substr(1) : ("-" + distance);
		}

		var ref = distance.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g);
		var value = ref[0];
		var unit = ref[1];

		switch (unit) {
			case 'em':
				distance = parseInt(computed.fontSize) * value;
				break
			case 'px':
				distance = value;
				break
			case '%':
				/**
				 * Here we use `getBoundingClientRect` instead of
				 * the existing data attached to `element.geometry`
				 * because only the former includes any transformations
				 * current applied to the element.
				 *
				 * If that behavior ends up being unintuitive, this
				 * logic could instead utilize `element.geometry.height`
				 * and `element.geoemetry.width` for the distance calculation
				 */
				distance =
					axis === 'Y'
						? (element.node.getBoundingClientRect().height * value) / 100
						: (element.node.getBoundingClientRect().width * value) / 100;
				break
			default:
				throw new RangeError('Unrecognized or missing distance unit.')
		}

		if (axis === 'Y') {
			transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.translateY)(distance));
		} else {
			transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.translateX)(distance));
		}
	}

	if (config.rotate.x) { transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.rotateX)(config.rotate.x)); }
	if (config.rotate.y) { transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.rotateY)(config.rotate.y)); }
	if (config.rotate.z) { transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.rotateZ)(config.rotate.z)); }
	if (config.scale !== 1) {
		if (config.scale === 0) {
			/**
			 * The CSS Transforms matrix interpolation specification
			 * basically disallows transitions of non-invertible
			 * matrixes, which means browsers won't transition
			 * elements with zero scale.
			 *
			 * That’s inconvenient for the API and developer
			 * experience, so we simply nudge their value
			 * slightly above zero; this allows browsers
			 * to transition our element as expected.
			 *
			 * `0.0002` was the smallest number
			 * that performed across browsers.
			 */
			transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.scale)(0.0002));
		} else {
			transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.scale)(config.scale));
		}
	}

	var transform = {};
	if (transformations.length) {
		transform.property = getPrefixedCssProp('transform');
		/**
		 * The default computed transform value should be one of:
		 * undefined || 'none' || 'matrix()' || 'matrix3d()'
		 */
		transform.computed = {
			raw: computed[transform.property],
			matrix: (0,rematrix__WEBPACK_IMPORTED_MODULE_1__.parse)(computed[transform.property])
		};

		transformations.unshift(transform.computed.matrix);
		var product = transformations.reduce(rematrix__WEBPACK_IMPORTED_MODULE_1__.multiply);

		transform.generated = {
			initial: ((transform.property) + ": matrix3d(" + (product.join(', ')) + ");"),
			final: ((transform.property) + ": matrix3d(" + (transform.computed.matrix.join(', ')) + ");")
		};
	} else {
		transform.generated = {
			initial: '',
			final: ''
		};
	}

	/**
	 * Generate transition styles
	 */
	var transition = {};
	if (opacity.generated || transform.generated.initial) {
		transition.property = getPrefixedCssProp('transition');
		transition.computed = computed[transition.property];
		transition.fragments = [];

		var delay = config.delay;
		var duration = config.duration;
		var easing = config.easing;

		if (opacity.generated) {
			transition.fragments.push({
				delayed: ("opacity " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
				instant: ("opacity " + (duration / 1000) + "s " + easing + " 0s")
			});
		}

		if (transform.generated.initial) {
			transition.fragments.push({
				delayed: ((transform.property) + " " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
				instant: ((transform.property) + " " + (duration / 1000) + "s " + easing + " 0s")
			});
		}

		/**
		 * The default computed transition property should be undefined, or one of:
		 * '' || 'none 0s ease 0s' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
		 */
		var hasCustomTransition =
			transition.computed && !transition.computed.match(/all 0s|none 0s/);

		if (hasCustomTransition) {
			transition.fragments.unshift({
				delayed: transition.computed,
				instant: transition.computed
			});
		}

		var composed = transition.fragments.reduce(
			function (composition, fragment, i) {
				composition.delayed += i === 0 ? fragment.delayed : (", " + (fragment.delayed));
				composition.instant += i === 0 ? fragment.instant : (", " + (fragment.instant));
				return composition
			},
			{
				delayed: '',
				instant: ''
			}
		);

		transition.generated = {
			delayed: ((transition.property) + ": " + (composed.delayed) + ";"),
			instant: ((transition.property) + ": " + (composed.instant) + ";")
		};
	} else {
		transition.generated = {
			delayed: '',
			instant: ''
		};
	}

	return {
		inline: inline,
		opacity: opacity,
		position: position,
		transform: transform,
		transition: transition
	}
}

/**
 * apply a CSS string to an element using the CSSOM (element.style) rather
 * than setAttribute, which may violate the content security policy.
 *
 * @param {Node}   [el]  Element to receive styles.
 * @param {string} [declaration] Styles to apply.
 */
function applyStyle (el, declaration) {
	declaration.split(';').forEach(function (pair) {
		var ref = pair.split(':');
		var property = ref[0];
		var value = ref.slice(1);
		if (property && value) {
			el.style[property.trim()] = value.join(':');
		}
	});
}

function clean(target) {
	var this$1 = this;

	var dirty;
	try {
		each((0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(target), function (node) {
			var id = node.getAttribute('data-sr-id');
			if (id !== null) {
				dirty = true;
				var element = this$1.store.elements[id];
				if (element.callbackTimer) {
					window.clearTimeout(element.callbackTimer.clock);
				}
				applyStyle(element.node, element.styles.inline.generated);
				node.removeAttribute('data-sr-id');
				delete this$1.store.elements[id];
			}
		});
	} catch (e) {
		return logger.call(this, 'Clean failed.', e.message)
	}

	if (dirty) {
		try {
			rinse.call(this);
		} catch (e) {
			return logger.call(this, 'Clean failed.', e.message)
		}
	}
}

function destroy() {
	var this$1 = this;

	/**
	 * Remove all generated styles and element ids
	 */
	each(this.store.elements, function (element) {
		applyStyle(element.node, element.styles.inline.generated);
		element.node.removeAttribute('data-sr-id');
	});

	/**
	 * Remove all event listeners.
	 */
	each(this.store.containers, function (container) {
		var target =
			container.node === document.documentElement ? window : container.node;
		target.removeEventListener('scroll', this$1.delegate);
		target.removeEventListener('resize', this$1.delegate);
	});

	/**
	 * Clear all data from the store
	 */
	this.store = {
		containers: {},
		elements: {},
		history: [],
		sequences: {}
	};
}

function deepAssign(target) {
	var sources = [], len = arguments.length - 1;
	while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

	if (isObject(target)) {
		each(sources, function (source) {
			each(source, function (data, key) {
				if (isObject(data)) {
					if (!target[key] || !isObject(target[key])) {
						target[key] = {};
					}
					deepAssign(target[key], data);
				} else {
					target[key] = data;
				}
			});
		});
		return target
	} else {
		throw new TypeError('Target must be an object literal.')
	}
}

function isMobile(agent) {
	if ( agent === void 0 ) agent = navigator.userAgent;

	return /Android|iPhone|iPad|iPod/i.test(agent)
}

var nextUniqueId = (function () {
	var uid = 0;
	return function () { return uid++; }
})();

function initialize() {
	var this$1 = this;

	rinse.call(this);

	each(this.store.elements, function (element) {
		var styles = [element.styles.inline.generated];

		if (element.visible) {
			styles.push(element.styles.opacity.computed);
			styles.push(element.styles.transform.generated.final);
			element.revealed = true;
		} else {
			styles.push(element.styles.opacity.generated);
			styles.push(element.styles.transform.generated.initial);
			element.revealed = false;
		}

		applyStyle(element.node, styles.filter(function (s) { return s !== ''; }).join(' '));
	});

	each(this.store.containers, function (container) {
		var target =
			container.node === document.documentElement ? window : container.node;
		target.addEventListener('scroll', this$1.delegate);
		target.addEventListener('resize', this$1.delegate);
	});

	/**
	 * Manually invoke delegate once to capture
	 * element and container dimensions, container
	 * scroll position, and trigger any valid reveals
	 */
	this.delegate();

	/**
	 * Wipe any existing `setTimeout` now
	 * that initialization has completed.
	 */
	this.initTimeout = null;
}

function animate(element, force) {
	if ( force === void 0 ) force = {};

	var pristine = force.pristine || this.pristine;
	var delayed =
		element.config.useDelay === 'always' ||
		(element.config.useDelay === 'onload' && pristine) ||
		(element.config.useDelay === 'once' && !element.seen);

	var shouldReveal = element.visible && !element.revealed;
	var shouldReset = !element.visible && element.revealed && element.config.reset;

	if (force.reveal || shouldReveal) {
		return triggerReveal.call(this, element, delayed)
	}

	if (force.reset || shouldReset) {
		return triggerReset.call(this, element)
	}
}

function triggerReveal(element, delayed) {
	var styles = [
		element.styles.inline.generated,
		element.styles.opacity.computed,
		element.styles.transform.generated.final
	];
	if (delayed) {
		styles.push(element.styles.transition.generated.delayed);
	} else {
		styles.push(element.styles.transition.generated.instant);
	}
	element.revealed = element.seen = true;
	applyStyle(element.node, styles.filter(function (s) { return s !== ''; }).join(' '));
	registerCallbacks.call(this, element, delayed);
}

function triggerReset(element) {
	var styles = [
		element.styles.inline.generated,
		element.styles.opacity.generated,
		element.styles.transform.generated.initial,
		element.styles.transition.generated.instant
	];
	element.revealed = false;
	applyStyle(element.node, styles.filter(function (s) { return s !== ''; }).join(' '));
	registerCallbacks.call(this, element);
}

function registerCallbacks(element, isDelayed) {
	var this$1 = this;

	var duration = isDelayed
		? element.config.duration + element.config.delay
		: element.config.duration;

	var beforeCallback = element.revealed
		? element.config.beforeReveal
		: element.config.beforeReset;

	var afterCallback = element.revealed
		? element.config.afterReveal
		: element.config.afterReset;

	var elapsed = 0;
	if (element.callbackTimer) {
		elapsed = Date.now() - element.callbackTimer.start;
		window.clearTimeout(element.callbackTimer.clock);
	}

	beforeCallback(element.node);

	element.callbackTimer = {
		start: Date.now(),
		clock: window.setTimeout(function () {
			afterCallback(element.node);
			element.callbackTimer = null;
			if (element.revealed && !element.config.reset && element.config.cleanup) {
				clean.call(this$1, element.node);
			}
		}, duration - elapsed)
	};
}

function sequence(element, pristine) {
	if ( pristine === void 0 ) pristine = this.pristine;

	/**
	 * We first check if the element should reset.
	 */
	if (!element.visible && element.revealed && element.config.reset) {
		return animate.call(this, element, { reset: true })
	}

	var seq = this.store.sequences[element.sequence.id];
	var i = element.sequence.index;

	if (seq) {
		var visible = new SequenceModel(seq, 'visible', this.store);
		var revealed = new SequenceModel(seq, 'revealed', this.store);

		seq.models = { visible: visible, revealed: revealed };

		/**
		 * If the sequence has no revealed members,
		 * then we reveal the first visible element
		 * within that sequence.
		 *
		 * The sequence then cues a recursive call
		 * in both directions.
		 */
		if (!revealed.body.length) {
			var nextId = seq.members[visible.body[0]];
			var nextElement = this.store.elements[nextId];

			if (nextElement) {
				cue.call(this, seq, visible.body[0], -1, pristine);
				cue.call(this, seq, visible.body[0], +1, pristine);
				return animate.call(this, nextElement, { reveal: true, pristine: pristine })
			}
		}

		/**
		 * If our element isn’t resetting, we check the
		 * element sequence index against the head, and
		 * then the foot of the sequence.
		 */
		if (
			!seq.blocked.head &&
			i === [].concat( revealed.head ).pop() &&
			i >= [].concat( visible.body ).shift()
		) {
			cue.call(this, seq, i, -1, pristine);
			return animate.call(this, element, { reveal: true, pristine: pristine })
		}

		if (
			!seq.blocked.foot &&
			i === [].concat( revealed.foot ).shift() &&
			i <= [].concat( visible.body ).pop()
		) {
			cue.call(this, seq, i, +1, pristine);
			return animate.call(this, element, { reveal: true, pristine: pristine })
		}
	}
}

function Sequence(interval) {
	var i = Math.abs(interval);
	if (!isNaN(i)) {
		this.id = nextUniqueId();
		this.interval = Math.max(i, 16);
		this.members = [];
		this.models = {};
		this.blocked = {
			head: false,
			foot: false
		};
	} else {
		throw new RangeError('Invalid sequence interval.')
	}
}

function SequenceModel(seq, prop, store) {
	var this$1 = this;

	this.head = [];
	this.body = [];
	this.foot = [];

	each(seq.members, function (id, index) {
		var element = store.elements[id];
		if (element && element[prop]) {
			this$1.body.push(index);
		}
	});

	if (this.body.length) {
		each(seq.members, function (id, index) {
			var element = store.elements[id];
			if (element && !element[prop]) {
				if (index < this$1.body[0]) {
					this$1.head.push(index);
				} else {
					this$1.foot.push(index);
				}
			}
		});
	}
}

function cue(seq, i, direction, pristine) {
	var this$1 = this;

	var blocked = ['head', null, 'foot'][1 + direction];
	var nextId = seq.members[i + direction];
	var nextElement = this.store.elements[nextId];

	seq.blocked[blocked] = true;

	setTimeout(function () {
		seq.blocked[blocked] = false;
		if (nextElement) {
			sequence.call(this$1, nextElement, pristine);
		}
	}, seq.interval);
}

function reveal(target, options, syncing) {
	var this$1 = this;
	if ( options === void 0 ) options = {};
	if ( syncing === void 0 ) syncing = false;

	var containerBuffer = [];
	var sequence$$1;
	var interval = options.interval || defaults.interval;

	try {
		if (interval) {
			sequence$$1 = new Sequence(interval);
		}

		var nodes = (0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(target);
		if (!nodes.length) {
			throw new Error('Invalid reveal target.')
		}

		var elements = nodes.reduce(function (elementBuffer, elementNode) {
			var element = {};
			var existingId = elementNode.getAttribute('data-sr-id');

			if (existingId) {
				deepAssign(element, this$1.store.elements[existingId]);

				/**
				 * In order to prevent previously generated styles
				 * from throwing off the new styles, the style tag
				 * has to be reverted to its pre-reveal state.
				 */
				applyStyle(element.node, element.styles.inline.computed);
			} else {
				element.id = nextUniqueId();
				element.node = elementNode;
				element.seen = false;
				element.revealed = false;
				element.visible = false;
			}

			var config = deepAssign({}, element.config || this$1.defaults, options);

			if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
				if (existingId) {
					clean.call(this$1, element);
				}
				return elementBuffer // skip elements that are disabled
			}

			var containerNode = (0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(config.container)[0];
			if (!containerNode) {
				throw new Error('Invalid container.')
			}
			if (!containerNode.contains(elementNode)) {
				return elementBuffer // skip elements found outside the container
			}

			var containerId;
			{
				containerId = getContainerId(
					containerNode,
					containerBuffer,
					this$1.store.containers
				);
				if (containerId === null) {
					containerId = nextUniqueId();
					containerBuffer.push({ id: containerId, node: containerNode });
				}
			}

			element.config = config;
			element.containerId = containerId;
			element.styles = style(element);

			if (sequence$$1) {
				element.sequence = {
					id: sequence$$1.id,
					index: sequence$$1.members.length
				};
				sequence$$1.members.push(element.id);
			}

			elementBuffer.push(element);
			return elementBuffer
		}, []);

		/**
		 * Modifying the DOM via setAttribute needs to be handled
		 * separately from reading computed styles in the map above
		 * for the browser to batch DOM changes (limiting reflows)
		 */
		each(elements, function (element) {
			this$1.store.elements[element.id] = element;
			element.node.setAttribute('data-sr-id', element.id);
		});
	} catch (e) {
		return logger.call(this, 'Reveal failed.', e.message)
	}

	/**
	 * Now that element set-up is complete...
	 * Let’s commit any container and sequence data we have to the store.
	 */
	each(containerBuffer, function (container) {
		this$1.store.containers[container.id] = {
			id: container.id,
			node: container.node
		};
	});
	if (sequence$$1) {
		this.store.sequences[sequence$$1.id] = sequence$$1;
	}

	/**
	 * If reveal wasn't invoked by sync, we want to
	 * make sure to add this call to the history.
	 */
	if (syncing !== true) {
		this.store.history.push({ target: target, options: options });

		/**
		 * Push initialization to the event queue, giving
		 * multiple reveal calls time to be interpreted.
		 */
		if (this.initTimeout) {
			window.clearTimeout(this.initTimeout);
		}
		this.initTimeout = window.setTimeout(initialize.bind(this), 0);
	}
}

function getContainerId(node) {
	var collections = [], len = arguments.length - 1;
	while ( len-- > 0 ) collections[ len ] = arguments[ len + 1 ];

	var id = null;
	each(collections, function (collection) {
		each(collection, function (container) {
			if (id === null && container.node === node) {
				id = container.id;
			}
		});
	});
	return id
}

/**
 * Re-runs the reveal method for each record stored in history,
 * for capturing new content asynchronously loaded into the DOM.
 */
function sync() {
	var this$1 = this;

	each(this.store.history, function (record) {
		reveal.call(this$1, record.target, record.options, true);
	});

	initialize.call(this);
}

var polyfill = function (x) { return (x > 0) - (x < 0) || +x; };
var mathSign = Math.sign || polyfill;

function getGeometry(target, isContainer) {
	/**
	 * We want to ignore padding and scrollbars for container elements.
	 * More information here: https://goo.gl/vOZpbz
	 */
	var height = isContainer ? target.node.clientHeight : target.node.offsetHeight;
	var width = isContainer ? target.node.clientWidth : target.node.offsetWidth;

	var offsetTop = 0;
	var offsetLeft = 0;
	var node = target.node;

	do {
		if (!isNaN(node.offsetTop)) {
			offsetTop += node.offsetTop;
		}
		if (!isNaN(node.offsetLeft)) {
			offsetLeft += node.offsetLeft;
		}
		node = node.offsetParent;
	} while (node)

	return {
		bounds: {
			top: offsetTop,
			right: offsetLeft + width,
			bottom: offsetTop + height,
			left: offsetLeft
		},
		height: height,
		width: width
	}
}

function getScrolled(container) {
	var top, left;
	if (container.node === document.documentElement) {
		top = window.pageYOffset;
		left = window.pageXOffset;
	} else {
		top = container.node.scrollTop;
		left = container.node.scrollLeft;
	}
	return { top: top, left: left }
}

function isElementVisible(element) {
	if ( element === void 0 ) element = {};

	var container = this.store.containers[element.containerId];
	if (!container) { return }

	var viewFactor = Math.max(0, Math.min(1, element.config.viewFactor));
	var viewOffset = element.config.viewOffset;

	var elementBounds = {
		top: element.geometry.bounds.top + element.geometry.height * viewFactor,
		right: element.geometry.bounds.right - element.geometry.width * viewFactor,
		bottom: element.geometry.bounds.bottom - element.geometry.height * viewFactor,
		left: element.geometry.bounds.left + element.geometry.width * viewFactor
	};

	var containerBounds = {
		top: container.geometry.bounds.top + container.scroll.top + viewOffset.top,
		right: container.geometry.bounds.right + container.scroll.left - viewOffset.right,
		bottom:
			container.geometry.bounds.bottom + container.scroll.top - viewOffset.bottom,
		left: container.geometry.bounds.left + container.scroll.left + viewOffset.left
	};

	return (
		(elementBounds.top < containerBounds.bottom &&
			elementBounds.right > containerBounds.left &&
			elementBounds.bottom > containerBounds.top &&
			elementBounds.left < containerBounds.right) ||
		element.styles.position === 'fixed'
	)
}

function delegate(
	event,
	elements
) {
	var this$1 = this;
	if ( event === void 0 ) event = { type: 'init' };
	if ( elements === void 0 ) elements = this.store.elements;

	(0,miniraf__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
		var stale = event.type === 'init' || event.type === 'resize';

		each(this$1.store.containers, function (container) {
			if (stale) {
				container.geometry = getGeometry.call(this$1, container, true);
			}
			var scroll = getScrolled.call(this$1, container);
			if (container.scroll) {
				container.direction = {
					x: mathSign(scroll.left - container.scroll.left),
					y: mathSign(scroll.top - container.scroll.top)
				};
			}
			container.scroll = scroll;
		});

		/**
		 * Due to how the sequencer is implemented, it’s
		 * important that we update the state of all
		 * elements, before any animation logic is
		 * evaluated (in the second loop below).
		 */
		each(elements, function (element) {
			if (stale || element.geometry === undefined) {
				element.geometry = getGeometry.call(this$1, element);
			}
			element.visible = isElementVisible.call(this$1, element);
		});

		each(elements, function (element) {
			if (element.sequence) {
				sequence.call(this$1, element);
			} else {
				animate.call(this$1, element);
			}
		});

		this$1.pristine = false;
	});
}

function isTransformSupported() {
	var style = document.documentElement.style;
	return 'transform' in style || 'WebkitTransform' in style
}

function isTransitionSupported() {
	var style = document.documentElement.style;
	return 'transition' in style || 'WebkitTransition' in style
}

var version = "4.0.9";

var boundDelegate;
var boundDestroy;
var boundReveal;
var boundClean;
var boundSync;
var config;
var debug;
var instance;

function ScrollReveal(options) {
	if ( options === void 0 ) options = {};

	var invokedWithoutNew =
		typeof this === 'undefined' ||
		Object.getPrototypeOf(this) !== ScrollReveal.prototype;

	if (invokedWithoutNew) {
		return new ScrollReveal(options)
	}

	if (!ScrollReveal.isSupported()) {
		logger.call(this, 'Instantiation failed.', 'This browser is not supported.');
		return mount.failure()
	}

	var buffer;
	try {
		buffer = config
			? deepAssign({}, config, options)
			: deepAssign({}, defaults, options);
	} catch (e) {
		logger.call(this, 'Invalid configuration.', e.message);
		return mount.failure()
	}

	try {
		var container = (0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(buffer.container)[0];
		if (!container) {
			throw new Error('Invalid container.')
		}
	} catch (e) {
		logger.call(this, e.message);
		return mount.failure()
	}

	config = buffer;

	if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
		logger.call(
			this,
			'This device is disabled.',
			("desktop: " + (config.desktop)),
			("mobile: " + (config.mobile))
		);
		return mount.failure()
	}

	mount.success();

	this.store = {
		containers: {},
		elements: {},
		history: [],
		sequences: {}
	};

	this.pristine = true;

	boundDelegate = boundDelegate || delegate.bind(this);
	boundDestroy = boundDestroy || destroy.bind(this);
	boundReveal = boundReveal || reveal.bind(this);
	boundClean = boundClean || clean.bind(this);
	boundSync = boundSync || sync.bind(this);

	Object.defineProperty(this, 'delegate', { get: function () { return boundDelegate; } });
	Object.defineProperty(this, 'destroy', { get: function () { return boundDestroy; } });
	Object.defineProperty(this, 'reveal', { get: function () { return boundReveal; } });
	Object.defineProperty(this, 'clean', { get: function () { return boundClean; } });
	Object.defineProperty(this, 'sync', { get: function () { return boundSync; } });

	Object.defineProperty(this, 'defaults', { get: function () { return config; } });
	Object.defineProperty(this, 'version', { get: function () { return version; } });
	Object.defineProperty(this, 'noop', { get: function () { return false; } });

	return instance ? instance : (instance = this)
}

ScrollReveal.isSupported = function () { return isTransformSupported() && isTransitionSupported(); };

Object.defineProperty(ScrollReveal, 'debug', {
	get: function () { return debug || false; },
	set: function (value) { return (debug = typeof value === 'boolean' ? value : debug); }
});

ScrollReveal();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollReveal);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/tealight/dist/tealight.es.js":
/*!***************************************************!*\
  !*** ./node_modules/tealight/dist/tealight.es.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var is_dom_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-dom-node */ "./node_modules/is-dom-node/dist/is-dom-node.es.js");
/* harmony import */ var is_dom_node_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-dom-node-list */ "./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js");
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/



function tealight(target, context) {
  if ( context === void 0 ) context = document;

  if (target instanceof Array) { return target.filter(is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"]); }
  if ((0,is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"])(target)) { return [target]; }
  if ((0,is_dom_node_list__WEBPACK_IMPORTED_MODULE_1__["default"])(target)) { return Array.prototype.slice.call(target); }
  if (typeof target === "string") {
    try {
      var query = context.querySelectorAll(target);
      return Array.prototype.slice.call(query);
    } catch (err) {
      return [];
    }
  }
  return [];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tealight);


/***/ }),

/***/ "./src/assets/Bank-of-England.ttf":
/*!****************************************!*\
  !*** ./src/assets/Bank-of-England.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "78d9c46a01b4666743e8.ttf";

/***/ }),

/***/ "./src/assets/Black-Bamboo-Regular.otf":
/*!*********************************************!*\
  !*** ./src/assets/Black-Bamboo-Regular.otf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d58ec567c1c682439b5.otf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var scrollreveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scrollreveal */ "./node_modules/scrollreveal/dist/scrollreveal.es.js");

 // eslint-disable-line import/no-extraneous-dependencies
// import shyEmbrace from './assets/shy-embrace.JPG';

const menu = document.getElementById('menu-icon');
const navlist = document.querySelector('.navlist');

const sr = (0,scrollreveal__WEBPACK_IMPORTED_MODULE_1__["default"])({
  distance: '70px',
  duration: 2700,
  reset: true,
});

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

sr.reveal('.left-hero', { delay: 200, origin: 'bottom' });
sr.reveal('.right-hero', { delay: 350, origin: 'top' });

document.querySelectorAll('.media-element img').forEach((pic) => {
  pic.onclick = () => {
    document.querySelector('.popup-bts').style.display = 'block';
    document.querySelector('.popup-bts img').src = pic.getAttribute('src');
  };
});

document.querySelector('.popup-bts span').onclick = () => {
  document.querySelector('.popup-bts').style.display = 'none';
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1KQUFrRDtBQUM5Riw0Q0FBNEMsNkpBQXVEO0FBQ25HLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLFFBQVEsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsYUFBYSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLGNBQWMsYUFBYSxjQUFjLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFNBQVMsS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxxQ0FBcUMs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Q0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQixZQUFZO0FBQ1o7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Q0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDbUIsQ0FBQztBQUN6Qzs7QUFFQTtBQUNBOztBQUVBLFdBQVcsd0RBQVk7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsOEJBQThCO0FBQ3hELDJCQUEyQiwyQkFBMkI7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3BvbnNpdmUtYXJ0aXN0LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3BvbnNpdmUtYXJ0aXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3BvbnNpdmUtYXJ0aXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3BvbnNpdmUtYXJ0aXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXNwb25zaXZlLWFydGlzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL2lzLWRvbS1ub2RlLWxpc3QvZGlzdC9pcy1kb20tbm9kZS1saXN0LmVzLmpzIiwid2VicGFjazovL3Jlc3BvbnNpdmUtYXJ0aXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvaXMtZG9tLW5vZGUvZGlzdC9pcy1kb20tbm9kZS5lcy5qcyIsIndlYnBhY2s6Ly9yZXNwb25zaXZlLWFydGlzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL21pbmlyYWYvZGlzdC9taW5pcmFmLmVzLmpzIiwid2VicGFjazovL3Jlc3BvbnNpdmUtYXJ0aXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvcmVtYXRyaXgvZGlzdC9yZW1hdHJpeC5lcy5qcyIsIndlYnBhY2s6Ly9yZXNwb25zaXZlLWFydGlzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL3Njcm9sbHJldmVhbC9kaXN0L3Njcm9sbHJldmVhbC5lcy5qcyIsIndlYnBhY2s6Ly9yZXNwb25zaXZlLWFydGlzdC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3BvbnNpdmUtYXJ0aXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzcG9uc2l2ZS1hcnRpc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzcG9uc2l2ZS1hcnRpc3QtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXNwb25zaXZlLWFydGlzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3BvbnNpdmUtYXJ0aXN0LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXNwb25zaXZlLWFydGlzdC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzcG9uc2l2ZS1hcnRpc3QtcGFnZS8uL25vZGVfbW9kdWxlcy90ZWFsaWdodC9kaXN0L3RlYWxpZ2h0LmVzLmpzIiwid2VicGFjazovL3Jlc3BvbnNpdmUtYXJ0aXN0LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzcG9uc2l2ZS1hcnRpc3QtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXNwb25zaXZlLWFydGlzdC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXNwb25zaXZlLWFydGlzdC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzcG9uc2l2ZS1hcnRpc3QtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3BvbnNpdmUtYXJ0aXN0LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXNwb25zaXZlLWFydGlzdC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3BvbnNpdmUtYXJ0aXN0LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzcG9uc2l2ZS1hcnRpc3QtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzcG9uc2l2ZS1hcnRpc3QtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvQmFuay1vZi1FbmdsYW5kLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL0JsYWNrLUJhbWJvby1SZWd1bGFyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0Jhbmsgb2YgRW5nbGFuZCc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQmxhY2sgQmFtYm9vJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5AcHJvcGVydHkgLS1ncmFkaWVudC1hbmdsZSB7XG4gIHN5bnRheDogJzxhbmdsZT4nO1xuICBpbml0aWFsLXZhbHVlOiAwZGVnO1xuICBpbmhlcml0czogZmFsc2U7XG59XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogJ0hlbHNpbmtpJywgc2Fucy1zZXJpZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuOnJvb3Qge1xuICAtLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0tc2Vjb25kLWNvbG9yOiAjOGVjNWZjO1xuICAtLWJpZy1mb250OiA1LjVyZW07XG4gIC0tcC1mb250OiAxLjVyZW07XG4gIC0tc2VjdGlvbi1oZWlnaHQ6IDg4dmg7XG4gIC0tZWZmZWN0LWNsci0xOiAjMmFmNTk4O1xuICAtLWVmZmVjdC1jbHItMjogI2ZiYWI3ZTtcbiAgLS1lZmZlY3QtY2xyLTM6ICM4YmM2ZWM7XG4gIC0tZWZmZWN0LWNsci00OiAjZmY2YTg4O1xuICAtLWVmZmVjdC1jbHItNTogcmdiKDM3LCAzNywgMzcpO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIDE4MGRlZyxcbiAgICAjOGVjNWZjIDAlLFxuICAgICNlMGMzZmMgNjElLFxuICAgICM5NDU5ZWEgOTclXG4gICk7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEydmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMzBweCA5JTtcbiAgLyogZm9udC1zaXplOiAzMHB4OyAqL1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjU1cztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMGYwZjtcbn1cblxuLmxvZ28ge1xuICBmb250LWZhbWlseTogJ0Jhbmsgb2YgRW5nbGFuZCc7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLyogdmVydGljYWwtYWxpZ246IG1pZGRsZTsgKi9cbn1cblxuLmxvZ28gaSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC8qIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTsgKi9cbiAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5uYXZsaXN0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm5hdmxpc3QgYSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tcC1mb250KTtcbiAgZm9udC1mYW1pbHk6ICdLYW5pdCc7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwIDM1cHg7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNTVzO1xufVxuLm5hdmxpc3QgbGkge1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjU1cztcbn1cblxuLm5hdmxpc3QgYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xufVxuLm5hdmxpc3QgbGk6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuI21lbnUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICB6LWluZGV4OiAxMDAwMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDE1cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiAwIDEyJTtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogbWFuZGF0b3J5O1xuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG4gIHNjcm9sbC1wYWRkaW5nLWJvdHRvbTogMzAwcHg7XG59XG4uaGVybyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogdmFyKC0tc2VjdGlvbi1oZWlnaHQpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDNyZW07XG59XG4ubGVmdC1oZXJvIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59XG4uc29jaWFsLWljb25zIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgLyogZ2FwOiAyMHB4OyAqL1xuICBtYXJnaW46IDFyZW0gMzVweDtcbn1cbi5zb2NpYWwtaWNvbnMgYSB7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNTVzO1xufVxuLnNvY2lhbC1pY29ucyBhOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuLnJpZ2h0LWhlcm8ge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cbi5yaWdodC1oZXJvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xufVxuXG4ucmlnaHQtaGVybyBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG59XG5cbi5zb25nLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdCYW5rIG9mIEVuZ2xhbmQnO1xuICBmb250LXNpemU6IHZhcigtLWJpZy1mb250KTtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnNvbmctcGhvbmV0aWMge1xuICBtYXJnaW46IDVweCAwIDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnNvbmctY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjBmMGY7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIG9wYWNpdHk6IDAuOTtcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnNvbmctZGVzYy1sYXJnZSB7XG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uc29uZy1kZXNjIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJ0thbml0JztcbiAgLyogZm9udC1zaXplOiAzMHB4OyAqL1xuICBmb250LXNpemU6IHZhcigtLXAtZm9udCk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAvKiBtYXgtd2lkdGg6IDU1MHB4OyAqL1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBvcGFjaXR5OiBub25lO1xufVxuLnNwb3RpZnkge1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbn1cbi5zcG90aWZ5OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuLnZpZGVvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogdmFyKC0tc2VjdGlvbi1oZWlnaHQpO1xuICBwYWRkaW5nOiAxNTBweDtcbn1cbi5maWxtIHtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbn1cbi52aWRlby1ib3gge1xuICBtYXJnaW46IDQwcHg7XG4gIGhlaWdodDogNzB2aDtcbiAgd2lkdGg6IDcwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZWM1ZmM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICA2MmRlZyxcbiAgICAjOGVjNWZjIDAlLFxuICAgICNlMGMzZmMgNTAlLFxuICAgICMwMDAwMDAgMTAwJVxuICApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLyogLnZpZGVvLWJveCBpZnJhbWUge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGFzcGVjdC1yYXRpbzogMTYvOTtcbn0gKi9cblxuLnZpZGVvLWJveDo6YmVmb3JlLFxuLnZpZGVvLWJveDo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogLTAuNXJlbTtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQ6IGNvbmljLWdyYWRpZW50KFxuICAgIGZyb20gdmFyKC0tZ3JhZGllbnQtYW5nbGUpLFxuICAgIHZhcigtLWVmZmVjdC1jbHItMSksXG4gICAgdmFyKC0tZWZmZWN0LWNsci0yKSxcbiAgICB2YXIoLS1lZmZlY3QtY2xyLTMpLFxuICAgIHZhcigtLWVmZmVjdC1jbHItNCksXG4gICAgdmFyKC0tZWZmZWN0LWNsci0zKSxcbiAgICB2YXIoLS1lZmZlY3QtY2xyLTIpLFxuICAgIHZhcigtLWVmZmVjdC1jbHItMSlcbiAgKTtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgYW5pbWF0aW9uOiByb3RhdGlvbiAyMHMgbGluZWFyIGluZmluaXRlO1xufVxuLnZpZGVvLWJveDo6YWZ0ZXIge1xuICBmaWx0ZXI6IGJsdXIoMy41cmVtKTtcbn1cbi5iZWhpbmQtc2NlbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IHZhcigtLXNlY3Rpb24taGVpZ2h0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEyMHB4O1xufVxuLmJ0cy10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnQmFuayBvZiBFbmdsYW5kJztcbiAgbGV0dGVyLXNwYWNpbmc6IDE2cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tYmlnLWZvbnQpO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcblxuICAvKiBtYXJnaW46IGF1dG87ICovXG4gIC8qIHotaW5kZXg6IDEwMDAyOyAqL1xufVxuLmJ0cy10aXRsZSBzcGFuIHtcbiAgZm9udC1zaXplOiB2YXIoLS1iaWctZm9udCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLmJ0cy1ib3gge1xuICAvKiBtYXJnaW46IDQwcHg7ICovXG4gIGhlaWdodDogNTB2aDtcbiAgd2lkdGg6IDUwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZWM1ZmM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICA2MmRlZyxcbiAgICAjOGVjNWZjIDAlLFxuICAgICNlMGMzZmMgNTAlLFxuICAgICMwMDAwMDAgMTAwJVxuICApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBib3JkZXItcmFkaXVzOiAxNXB4OyAqL1xufVxuLm1lZGlhLXNjcm9sbGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDY3JTtcblxuICAvKiBwYWRkaW5nOiAwIDFyZW0gMXJlbTsgKi9cblxuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLWlubGluZTogY29udGFpbjtcblxuICBzY3JvbGwtc25hcC10eXBlOiBpbmxpbmUgbWFuZGF0b3J5O1xuICAvKiBzY3JvbGwtcGFkZGluZy1pbmxpbmU6IDFyZW07ICovXG59XG4ubWVkaWEtZWxlbWVudCB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXI7XG59XG4ubWVkaWEtZWxlbWVudCBpbWcge1xuICBpbmxpbmUtc2l6ZTogMTAwJTtcbiAgYXNwZWN0LXJhdGlvOiAxNi85O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lZGlhLWVsZW1lbnQgaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLnBvcHVwLWJ0cyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDAzO1xuICBkaXNwbGF5OiBub25lO1xufVxuLnBvcHVwLWJ0cyBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMDAzO1xufVxuXG4ucG9wdXAtYnRzIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xuICB3aWR0aDogNzUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLndhdmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxpbmUtaGVpZ2h0OiAwO1xufVxuXG4ud2F2ZSBzdmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlICsgMS4zcHgpO1xuICBoZWlnaHQ6IDE0MHB4O1xufVxuXG4ud2F2ZSAuc2hhcGUtZmlsbCB7XG4gIGZpbGw6ICNmZmRlZTk7XG59XG4vKiAuc3dpZmZ5LXNsaWRlciB7XG4gIGhlaWdodDogNTB2aDtcbiAgd2lkdGg6IDcwdnc7XG59ICovXG5cbi5hYm91dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogdmFyKC0tc2VjdGlvbi1oZWlnaHQpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDNyZW07XG59XG4uYWJvdXQgaDIge1xuICBmb250LWZhbWlseTogJ0Jhbmsgb2YgRW5nbGFuZCc7XG4gIGZvbnQtc2l6ZTogdmFyKC0tYmlnLWZvbnQpO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBmb250LXdlaWdodDogODAwO1xufVxuLmxlZnQtYWJvdXQtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA1MjtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgb3BhY2l0eTogMC45O1xuICBwYWRkaW5nOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmFib3V0IHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnS2FuaXQnO1xuICAvKiBmb250LXNpemU6IDMwcHg7ICovXG4gIGZvbnQtc2l6ZTogdmFyKC0tcC1mb250KTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIC8qIG1heC13aWR0aDogNTUwcHg7ICovXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG9wYWNpdHk6IG5vbmU7XG59XG4ucmlnaHQtYWJvdXQge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cbi5tYWluLWZvcm0ge1xuICAvKiBoZWlnaHQ6IDYwdmg7XG4gIHdpZHRoOiA2MHZ3OyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGVjNWZjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNjJkZWcsICM4ZWM1ZmMgMCUsICNlMGMzZmMgNTAlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLm1haW4tZm9ybSB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5pbnB1dCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwZjBmO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udDogdmFyKC0tcC1mb250KTtcbn1cbnRleHRhcmVhIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwZjBmO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udDogdmFyKC0tcC1mb250KTtcbn1cbmJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDkwZGVnLFxuICAgIGhzbGEoMjU3LCA3NSUsIDcxJSwgMSksXG4gICAgaHNsYSgzNTcsIDc1JSwgNzElLCAxKVxuICApO1xuICBiYWNrZ3JvdW5kLXNpemU6IDYwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG59XG5idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KSBzY2FsZSgwLjkpO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgMCUge1xuICAgIC0tZ3JhZGllbnQtYW5nbGU6IDBkZWc7XG4gIH1cbiAgMTAwJSB7XG4gICAgLS1ncmFkaWVudC1hbmdsZTogMzYwZGVnO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIGhlYWRlciB7XG4gICAgcGFkZGluZzogMTNweCAzJTtcbiAgfVxuICBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAwIDUlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLWJpZy1mb250OiA0cmVtO1xuICAgIC0tcC1mb250OiAxOHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIzMHB4KSB7XG4gIC5oZXJvIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA2MDBweCk7ICovXG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLnJpZ2h0LWhlcm8ge1xuICAgIG9yZGVyOiAyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgLnJpZ2h0LWhlcm8gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmxlZnQtaGVybyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gIH1cbiAgc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNTBweCA1JTtcbiAgfVxuICAudmlkZW8tYm94IGlmcmFtZSB7XG4gICAgd2lkdGg6IDY0MHB4O1xuICAgIGhlaWdodDogMzg1cHg7XG4gICAgLyogYXNwZWN0LXJhdGlvOiAxNi85OyAqL1xuICB9XG4gIC5hYm91dCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmxlZnQtYWJvdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5yaWdodC1hYm91dCB7XG4gICAgb3JkZXI6IDI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDcwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDMlO1xuICB9XG4gICNtZW51LWljb24ge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cbiAgLmxvZ28ge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG4gIC5uYXZsaXN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNzAwcHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xuICB9XG4gIC5uYXZsaXN0IGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbjogMC44cmVtIDEuOHJlbTtcbiAgfVxuICAubmF2bGlzdC5vcGVuIHtcbiAgICB0b3A6IDEwMCU7XG4gIH1cbiAgLnZpZGVvLWJveCBpZnJhbWUge1xuICAgIHdpZHRoOiA1NjBweDtcbiAgICBoZWlnaHQ6IDM0MHB4O1xuICAgIC8qIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGFzcGVjdC1yYXRpbzogMTYvOTsgKi9cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wb3B1cC1idHMgaW1nIHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG4gIC5hYm91dCBwIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgaW5wdXQsXG4gIHRleHRhcmVhIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLWJpZy1mb250OiAzcmVtO1xuICAgIC0tcC1mb250OiAxNHB4O1xuICB9XG4gIC5sb2dvIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbiAgLyogLmxlZnQtaGVybyB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfSAqL1xufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2MDBweCkge1xuICAubG9nbyB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsNENBQXlDO0FBQzNDO0FBQ0E7RUFDRSwyQkFBMkI7RUFD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bWlseTogJ0Jhbmsgb2YgRW5nbGFuZCc7XFxuICBzcmM6IHVybCgvc3JjL2Fzc2V0cy9CYW5rLW9mLUVuZ2xhbmQudHRmKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0JsYWNrIEJhbWJvbyc7XFxuICBzcmM6IHVybCgvc3JjL2Fzc2V0cy9CbGFjay1CYW1ib28tUmVndWxhci5vdGYpO1xcbn1cXG5AcHJvcGVydHkgLS1ncmFkaWVudC1hbmdsZSB7XFxuICBzeW50YXg6ICc8YW5nbGU+JztcXG4gIGluaXRpYWwtdmFsdWU6IDBkZWc7XFxuICBpbmhlcml0czogZmFsc2U7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ0hlbHNpbmtpJywgc2Fucy1zZXJpZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS10ZXh0LWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1zZWNvbmQtY29sb3I6ICM4ZWM1ZmM7XFxuICAtLWJpZy1mb250OiA1LjVyZW07XFxuICAtLXAtZm9udDogMS41cmVtO1xcbiAgLS1zZWN0aW9uLWhlaWdodDogODh2aDtcXG4gIC0tZWZmZWN0LWNsci0xOiAjMmFmNTk4O1xcbiAgLS1lZmZlY3QtY2xyLTI6ICNmYmFiN2U7XFxuICAtLWVmZmVjdC1jbHItMzogIzhiYzZlYztcXG4gIC0tZWZmZWN0LWNsci00OiAjZmY2YTg4O1xcbiAgLS1lZmZlY3QtY2xyLTU6IHJnYigzNywgMzcsIDM3KTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAxODBkZWcsXFxuICAgICM4ZWM1ZmMgMCUsXFxuICAgICNlMGMzZmMgNjElLFxcbiAgICAjOTQ1OWVhIDk3JVxcbiAgKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTJ2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMzBweCA5JTtcXG4gIC8qIGZvbnQtc2l6ZTogMzBweDsgKi9cXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNTVzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMGYwZjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZm9udC1mYW1pbHk6ICdCYW5rIG9mIEVuZ2xhbmQnO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xcbn1cXG5cXG4ubG9nbyBpIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAvKiBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7ICovXFxuICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMzhweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4ubmF2bGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubmF2bGlzdCBhIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tcC1mb250KTtcXG4gIGZvbnQtZmFtaWx5OiAnS2FuaXQnO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbjogMCAzNXB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC41NXM7XFxufVxcbi5uYXZsaXN0IGxpIHtcXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNTVzO1xcbn1cXG5cXG4ubmF2bGlzdCBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbn1cXG4ubmF2bGlzdCBsaTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG59XFxuI21lbnUtaWNvbiB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICB6LWluZGV4OiAxMDAwMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMTVweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgcGFkZGluZzogMCAxMiU7XFxuICBzY3JvbGwtc25hcC10eXBlOiBtYW5kYXRvcnk7XFxuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XFxuICBzY3JvbGwtcGFkZGluZy1ib3R0b206IDMwMHB4O1xcbn1cXG4uaGVybyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogdmFyKC0tc2VjdGlvbi1oZWlnaHQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG4ubGVmdC1oZXJvIHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG59XFxuLnNvY2lhbC1pY29ucyB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgLyogZ2FwOiAyMHB4OyAqL1xcbiAgbWFyZ2luOiAxcmVtIDM1cHg7XFxufVxcbi5zb2NpYWwtaWNvbnMgYSB7XFxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjU1cztcXG59XFxuLnNvY2lhbC1pY29ucyBhOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG59XFxuLnJpZ2h0LWhlcm8ge1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG4ucmlnaHQtaGVybyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XFxufVxcblxcbi5yaWdodC1oZXJvIGltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcblxcbi5zb25nLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQmFuayBvZiBFbmdsYW5kJztcXG4gIGZvbnQtc2l6ZTogdmFyKC0tYmlnLWZvbnQpO1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5zb25nLXBob25ldGljIHtcXG4gIG1hcmdpbjogNXB4IDAgMjBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLnNvbmctY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwZjBmO1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5zb25nLWRlc2MtbGFyZ2Uge1xcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuLnNvbmctZGVzYyB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ0thbml0JztcXG4gIC8qIGZvbnQtc2l6ZTogMzBweDsgKi9cXG4gIGZvbnQtc2l6ZTogdmFyKC0tcC1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsaW5lLWhlaWdodDogMjZweDtcXG4gIC8qIG1heC13aWR0aDogNTUwcHg7ICovXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgb3BhY2l0eTogbm9uZTtcXG59XFxuLnNwb3RpZnkge1xcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XFxufVxcbi5zcG90aWZ5OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG59XFxuLnZpZGVvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IHZhcigtLXNlY3Rpb24taGVpZ2h0KTtcXG4gIHBhZGRpbmc6IDE1MHB4O1xcbn1cXG4uZmlsbSB7XFxuICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gIG1heC13aWR0aDogMTAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG4udmlkZW8tYm94IHtcXG4gIG1hcmdpbjogNDBweDtcXG4gIGhlaWdodDogNzB2aDtcXG4gIHdpZHRoOiA3MHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhlYzVmYztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgNjJkZWcsXFxuICAgICM4ZWM1ZmMgMCUsXFxuICAgICNlMGMzZmMgNTAlLFxcbiAgICAjMDAwMDAwIDEwMCVcXG4gICk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4vKiAudmlkZW8tYm94IGlmcmFtZSB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYXNwZWN0LXJhdGlvOiAxNi85O1xcbn0gKi9cXG5cXG4udmlkZW8tYm94OjpiZWZvcmUsXFxuLnZpZGVvLWJveDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBpbnNldDogLTAuNXJlbTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoXFxuICAgIGZyb20gdmFyKC0tZ3JhZGllbnQtYW5nbGUpLFxcbiAgICB2YXIoLS1lZmZlY3QtY2xyLTEpLFxcbiAgICB2YXIoLS1lZmZlY3QtY2xyLTIpLFxcbiAgICB2YXIoLS1lZmZlY3QtY2xyLTMpLFxcbiAgICB2YXIoLS1lZmZlY3QtY2xyLTQpLFxcbiAgICB2YXIoLS1lZmZlY3QtY2xyLTMpLFxcbiAgICB2YXIoLS1lZmZlY3QtY2xyLTIpLFxcbiAgICB2YXIoLS1lZmZlY3QtY2xyLTEpXFxuICApO1xcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gIGFuaW1hdGlvbjogcm90YXRpb24gMjBzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLnZpZGVvLWJveDo6YWZ0ZXIge1xcbiAgZmlsdGVyOiBibHVyKDMuNXJlbSk7XFxufVxcbi5iZWhpbmQtc2NlbmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogdmFyKC0tc2VjdGlvbi1oZWlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMjBweDtcXG59XFxuLmJ0cy10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0Jhbmsgb2YgRW5nbGFuZCc7XFxuICBsZXR0ZXItc3BhY2luZzogMTZweDtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tYmlnLWZvbnQpO1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG5cXG4gIC8qIG1hcmdpbjogYXV0bzsgKi9cXG4gIC8qIHotaW5kZXg6IDEwMDAyOyAqL1xcbn1cXG4uYnRzLXRpdGxlIHNwYW4ge1xcbiAgZm9udC1zaXplOiB2YXIoLS1iaWctZm9udCk7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG4uYnRzLWJveCB7XFxuICAvKiBtYXJnaW46IDQwcHg7ICovXFxuICBoZWlnaHQ6IDUwdmg7XFxuICB3aWR0aDogNTB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZWM1ZmM7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDYyZGVnLFxcbiAgICAjOGVjNWZjIDAlLFxcbiAgICAjZTBjM2ZjIDUwJSxcXG4gICAgIzAwMDAwMCAxMDAlXFxuICApO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qIGJvcmRlci1yYWRpdXM6IDE1cHg7ICovXFxufVxcbi5tZWRpYS1zY3JvbGxlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiA2NyU7XFxuXFxuICAvKiBwYWRkaW5nOiAwIDFyZW0gMXJlbTsgKi9cXG5cXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLWlubGluZTogY29udGFpbjtcXG5cXG4gIHNjcm9sbC1zbmFwLXR5cGU6IGlubGluZSBtYW5kYXRvcnk7XFxuICAvKiBzY3JvbGwtcGFkZGluZy1pbmxpbmU6IDFyZW07ICovXFxufVxcbi5tZWRpYS1lbGVtZW50IHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubWVkaWEtZWxlbWVudCBpbWcge1xcbiAgaW5saW5lLXNpemU6IDEwMCU7XFxuICBhc3BlY3QtcmF0aW86IDE2Lzk7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVkaWEtZWxlbWVudCBpbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4ucG9wdXAtYnRzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDAzO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnBvcHVwLWJ0cyBzcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDEwMDAzO1xcbn1cXG5cXG4ucG9wdXAtYnRzIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XFxuICB3aWR0aDogNzUwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLndhdmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbn1cXG5cXG4ud2F2ZSBzdmcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogY2FsYygxMDAlICsgMS4zcHgpO1xcbiAgaGVpZ2h0OiAxNDBweDtcXG59XFxuXFxuLndhdmUgLnNoYXBlLWZpbGwge1xcbiAgZmlsbDogI2ZmZGVlOTtcXG59XFxuLyogLnN3aWZmeS1zbGlkZXIge1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgd2lkdGg6IDcwdnc7XFxufSAqL1xcblxcbi5hYm91dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogdmFyKC0tc2VjdGlvbi1oZWlnaHQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG4uYWJvdXQgaDIge1xcbiAgZm9udC1mYW1pbHk6ICdCYW5rIG9mIEVuZ2xhbmQnO1xcbiAgZm9udC1zaXplOiB2YXIoLS1iaWctZm9udCk7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuLmxlZnQtYWJvdXQtY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTI7XFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcbiAgb3BhY2l0eTogMC45O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuLmFib3V0IHAge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdLYW5pdCc7XFxuICAvKiBmb250LXNpemU6IDMwcHg7ICovXFxuICBmb250LXNpemU6IHZhcigtLXAtZm9udCk7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICAvKiBtYXgtd2lkdGg6IDU1MHB4OyAqL1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIG9wYWNpdHk6IG5vbmU7XFxufVxcbi5yaWdodC1hYm91dCB7XFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxufVxcbi5tYWluLWZvcm0ge1xcbiAgLyogaGVpZ2h0OiA2MHZoO1xcbiAgd2lkdGg6IDYwdnc7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGVjNWZjO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDYyZGVnLCAjOGVjNWZjIDAlLCAjZTBjM2ZjIDUwJSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuLm1haW4tZm9ybSB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuaW5wdXQge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMGYwZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250OiB2YXIoLS1wLWZvbnQpO1xcbn1cXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYwZjBmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQ6IHZhcigtLXAtZm9udCk7XFxufVxcbmJ1dHRvbiB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICA5MGRlZyxcXG4gICAgaHNsYSgyNTcsIDc1JSwgNzElLCAxKSxcXG4gICAgaHNsYSgzNTcsIDc1JSwgNzElLCAxKVxcbiAgKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNjAwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCkgc2NhbGUoMC45KTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGlvbiB7XFxuICAwJSB7XFxuICAgIC0tZ3JhZGllbnQtYW5nbGU6IDBkZWc7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLS1ncmFkaWVudC1hbmdsZTogMzYwZGVnO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAxM3B4IDMlO1xcbiAgfVxcbiAgc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDAgNSU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcXG4gIDpyb290IHtcXG4gICAgLS1iaWctZm9udDogNHJlbTtcXG4gICAgLS1wLWZvbnQ6IDE4cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjMwcHgpIHtcXG4gIC5oZXJvIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDYwMHB4KTsgKi9cXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIC5yaWdodC1oZXJvIHtcXG4gICAgb3JkZXI6IDI7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG4gIC5yaWdodC1oZXJvIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuICAubGVmdC1oZXJvIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgfVxcbiAgc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDUwcHggNSU7XFxuICB9XFxuICAudmlkZW8tYm94IGlmcmFtZSB7XFxuICAgIHdpZHRoOiA2NDBweDtcXG4gICAgaGVpZ2h0OiAzODVweDtcXG4gICAgLyogYXNwZWN0LXJhdGlvOiAxNi85OyAqL1xcbiAgfVxcbiAgLmFib3V0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAubGVmdC1hYm91dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLnJpZ2h0LWFib3V0IHtcXG4gICAgb3JkZXI6IDI7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDcwcHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDEwcHggMyU7XFxuICB9XFxuICAjbWVudS1pY29uIHtcXG4gICAgZGlzcGxheTogaW5pdGlhbDtcXG4gIH1cXG4gIC5sb2dvIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB9XFxuICAubmF2bGlzdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNzAwcHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcXG4gICAgLyogdGV4dC1hbGlnbjogbGVmdDsgKi9cXG4gIH1cXG4gIC5uYXZsaXN0IGEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBtYXJnaW46IDAuOHJlbSAxLjhyZW07XFxuICB9XFxuICAubmF2bGlzdC5vcGVuIHtcXG4gICAgdG9wOiAxMDAlO1xcbiAgfVxcbiAgLnZpZGVvLWJveCBpZnJhbWUge1xcbiAgICB3aWR0aDogNTYwcHg7XFxuICAgIGhlaWdodDogMzQwcHg7XFxuICAgIC8qIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYXNwZWN0LXJhdGlvOiAxNi85OyAqL1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5wb3B1cC1idHMgaW1nIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG4gIC5hYm91dCBwIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcbiAgaW5wdXQsXFxuICB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIDpyb290IHtcXG4gICAgLS1iaWctZm9udDogM3JlbTtcXG4gICAgLS1wLWZvbnQ6IDE0cHg7XFxuICB9XFxuICAubG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gIH1cXG4gIC8qIC5sZWZ0LWhlcm8ge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgfSAqL1xcbn1cXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDYwMHB4KSB7XFxuICAubG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyohIEBsaWNlbnNlIGlzLWRvbS1ub2RlLWxpc3QgdjEuMi4xXG5cblx0Q29weXJpZ2h0IDIwMTggRmlzc3Npb24gTExDLlxuXG5cdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0U09GVFdBUkUuXG5cbiovXG5pbXBvcnQgaXNEb21Ob2RlIGZyb20gJ2lzLWRvbS1ub2RlJztcblxuZnVuY3Rpb24gaXNEb21Ob2RlTGlzdCh4KSB7XG5cdHZhciBwcm90b3R5cGVUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KTtcblx0dmFyIHJlZ2V4ID0gL15cXFtvYmplY3QgKEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fE9iamVjdClcXF0kLztcblxuXHRyZXR1cm4gdHlwZW9mIHdpbmRvdy5Ob2RlTGlzdCA9PT0gJ29iamVjdCdcblx0XHQ/IHggaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3Rcblx0XHQ6IHggIT09IG51bGwgJiZcblx0XHRcdFx0dHlwZW9mIHggPT09ICdvYmplY3QnICYmXG5cdFx0XHRcdHR5cGVvZiB4Lmxlbmd0aCA9PT0gJ251bWJlcicgJiZcblx0XHRcdFx0cmVnZXgudGVzdChwcm90b3R5cGVUb1N0cmluZykgJiZcblx0XHRcdFx0KHgubGVuZ3RoID09PSAwIHx8IGlzRG9tTm9kZSh4WzBdKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNEb21Ob2RlTGlzdDtcbiIsIi8qISBAbGljZW5zZSBpcy1kb20tbm9kZSB2MS4wLjRcblxuXHRDb3B5cmlnaHQgMjAxOCBGaXNzc2lvbiBMTEMuXG5cblx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRTT0ZUV0FSRS5cblxuKi9cbmZ1bmN0aW9uIGlzRG9tTm9kZSh4KSB7XG5cdHJldHVybiB0eXBlb2Ygd2luZG93Lk5vZGUgPT09ICdvYmplY3QnXG5cdFx0PyB4IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVcblx0XHQ6IHggIT09IG51bGwgJiZcblx0XHRcdFx0dHlwZW9mIHggPT09ICdvYmplY3QnICYmXG5cdFx0XHRcdHR5cGVvZiB4Lm5vZGVUeXBlID09PSAnbnVtYmVyJyAmJlxuXHRcdFx0XHR0eXBlb2YgeC5ub2RlTmFtZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNEb21Ob2RlO1xuIiwiLyohIEBsaWNlbnNlIG1pbmlyYWYgdjEuMC4wXG5cblx0Q29weXJpZ2h0IDIwMTggRmlzc3Npb24gTExDLlxuXG5cdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0U09GVFdBUkUuXG5cbiovXG52YXIgcG9seWZpbGwgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgY2xvY2sgPSBEYXRlLm5vdygpO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHR2YXIgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdGlmIChjdXJyZW50VGltZSAtIGNsb2NrID4gMTYpIHtcblx0XHRcdGNsb2NrID0gY3VycmVudFRpbWU7XG5cdFx0XHRjYWxsYmFjayhjdXJyZW50VGltZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcG9seWZpbGwoY2FsbGJhY2spOyB9LCAwKTtcblx0XHR9XG5cdH1cbn0pKCk7XG5cbnZhciBpbmRleCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHR3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdHBvbHlmaWxsO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsIi8qISBAbGljZW5zZSBSZW1hdHJpeCB2MC4zLjBcblxuXHRDb3B5cmlnaHQgMjAxOCBKdWxpYW4gTGxveWQuXG5cblx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuXHRhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5cdFRIRSBTT0ZUV0FSRS5cbiovXG4vKipcbiAqIEBtb2R1bGUgUmVtYXRyaXhcbiAqL1xuXG4vKipcbiAqIFRyYW5zZm9ybWF0aW9uIG1hdHJpY2VzIGluIHRoZSBicm93c2VyIGNvbWUgaW4gdHdvIGZsYXZvcnM6XG4gKlxuICogIC0gYG1hdHJpeGAgdXNpbmcgNiB2YWx1ZXMgKHNob3J0KVxuICogIC0gYG1hdHJpeDNkYCB1c2luZyAxNiB2YWx1ZXMgKGxvbmcpXG4gKlxuICogVGhpcyB1dGlsaXR5IGZvbGxvd3MgdGhpcyBbY29udmVyc2lvbiBndWlkZV0oaHR0cHM6Ly9nb28uZ2wvRUpsVVExKVxuICogdG8gZXhwYW5kIHNob3J0IGZvcm0gbWF0cmljZXMgdG8gdGhlaXIgZXF1aXZhbGVudCBsb25nIGZvcm0uXG4gKlxuICogQHBhcmFtICB7YXJyYXl9IHNvdXJjZSAtIEFjY2VwdHMgYm90aCBzaG9ydCBhbmQgbG9uZyBmb3JtIG1hdHJpY2VzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGZvcm1hdChzb3VyY2UpIHtcblx0aWYgKHNvdXJjZS5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhcnJheS4nKVxuXHR9XG5cdGlmIChzb3VyY2UubGVuZ3RoID09PSAxNikge1xuXHRcdHJldHVybiBzb3VyY2Vcblx0fVxuXHRpZiAoc291cmNlLmxlbmd0aCA9PT0gNikge1xuXHRcdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXHRcdG1hdHJpeFswXSA9IHNvdXJjZVswXTtcblx0XHRtYXRyaXhbMV0gPSBzb3VyY2VbMV07XG5cdFx0bWF0cml4WzRdID0gc291cmNlWzJdO1xuXHRcdG1hdHJpeFs1XSA9IHNvdXJjZVszXTtcblx0XHRtYXRyaXhbMTJdID0gc291cmNlWzRdO1xuXHRcdG1hdHJpeFsxM10gPSBzb3VyY2VbNV07XG5cdFx0cmV0dXJuIG1hdHJpeFxuXHR9XG5cdHRocm93IG5ldyBSYW5nZUVycm9yKCdFeHBlY3RlZCBhcnJheSB3aXRoIGVpdGhlciA2IG9yIDE2IHZhbHVlcy4nKVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBtYXRyaXggcmVwcmVzZW50aW5nIG5vIHRyYW5zZm9ybWF0aW9uLiBUaGUgcHJvZHVjdCBvZiBhbnkgbWF0cml4XG4gKiBtdWx0aXBsaWVkIGJ5IHRoZSBpZGVudGl0eSBtYXRyaXggd2lsbCBiZSB0aGUgb3JpZ2luYWwgbWF0cml4LlxuICpcbiAqID4gKipUaXA6KiogU2ltaWxhciB0byBob3cgYDUgKiAxID09PSA1YCwgd2hlcmUgYDFgIGlzIHRoZSBpZGVudGl0eS5cbiAqXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkoKSB7XG5cdHZhciBtYXRyaXggPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG5cdFx0aSAlIDUgPT0gMCA/IG1hdHJpeC5wdXNoKDEpIDogbWF0cml4LnB1c2goMCk7XG5cdH1cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSBtYXRyaXggZGVzY3JpYmluZyB0aGUgaW52ZXJzZSB0cmFuc2Zvcm1hdGlvbiBvZiB0aGUgc291cmNlXG4gKiBtYXRyaXguIFRoZSBwcm9kdWN0IG9mIGFueSBtYXRyaXggbXVsdGlwbGllZCBieSBpdHMgaW52ZXJzZSB3aWxsIGJlIHRoZVxuICogaWRlbnRpdHkgbWF0cml4LlxuICpcbiAqID4gKipUaXA6KiogU2ltaWxhciB0byBob3cgYDUgKiAoMS81KSA9PT0gMWAsIHdoZXJlIGAxLzVgIGlzIHRoZSBpbnZlcnNlLlxuICpcbiAqIEBwYXJhbSAge2FycmF5fSBzb3VyY2UgLSBBY2NlcHRzIGJvdGggc2hvcnQgYW5kIGxvbmcgZm9ybSBtYXRyaWNlcy5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBpbnZlcnNlKHNvdXJjZSkge1xuXHR2YXIgbSA9IGZvcm1hdChzb3VyY2UpO1xuXG5cdHZhciBzMCA9IG1bMF0gKiBtWzVdIC0gbVs0XSAqIG1bMV07XG5cdHZhciBzMSA9IG1bMF0gKiBtWzZdIC0gbVs0XSAqIG1bMl07XG5cdHZhciBzMiA9IG1bMF0gKiBtWzddIC0gbVs0XSAqIG1bM107XG5cdHZhciBzMyA9IG1bMV0gKiBtWzZdIC0gbVs1XSAqIG1bMl07XG5cdHZhciBzNCA9IG1bMV0gKiBtWzddIC0gbVs1XSAqIG1bM107XG5cdHZhciBzNSA9IG1bMl0gKiBtWzddIC0gbVs2XSAqIG1bM107XG5cblx0dmFyIGM1ID0gbVsxMF0gKiBtWzE1XSAtIG1bMTRdICogbVsxMV07XG5cdHZhciBjNCA9IG1bOV0gKiBtWzE1XSAtIG1bMTNdICogbVsxMV07XG5cdHZhciBjMyA9IG1bOV0gKiBtWzE0XSAtIG1bMTNdICogbVsxMF07XG5cdHZhciBjMiA9IG1bOF0gKiBtWzE1XSAtIG1bMTJdICogbVsxMV07XG5cdHZhciBjMSA9IG1bOF0gKiBtWzE0XSAtIG1bMTJdICogbVsxMF07XG5cdHZhciBjMCA9IG1bOF0gKiBtWzEzXSAtIG1bMTJdICogbVs5XTtcblxuXHR2YXIgZGV0ZXJtaW5hbnQgPSAxIC8gKHMwICogYzUgLSBzMSAqIGM0ICsgczIgKiBjMyArIHMzICogYzIgLSBzNCAqIGMxICsgczUgKiBjMCk7XG5cblx0aWYgKGlzTmFOKGRldGVybWluYW50KSB8fCBkZXRlcm1pbmFudCA9PT0gSW5maW5pdHkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmVyc2UgZGV0ZXJtaW5hbnQgYXR0ZW1wdGVkIHRvIGRpdmlkZSBieSB6ZXJvLicpXG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdChtWzVdICogYzUgLSBtWzZdICogYzQgKyBtWzddICogYzMpICogZGV0ZXJtaW5hbnQsXG5cdFx0KC1tWzFdICogYzUgKyBtWzJdICogYzQgLSBtWzNdICogYzMpICogZGV0ZXJtaW5hbnQsXG5cdFx0KG1bMTNdICogczUgLSBtWzE0XSAqIHM0ICsgbVsxNV0gKiBzMykgKiBkZXRlcm1pbmFudCxcblx0XHQoLW1bOV0gKiBzNSArIG1bMTBdICogczQgLSBtWzExXSAqIHMzKSAqIGRldGVybWluYW50LFxuXG5cdFx0KC1tWzRdICogYzUgKyBtWzZdICogYzIgLSBtWzddICogYzEpICogZGV0ZXJtaW5hbnQsXG5cdFx0KG1bMF0gKiBjNSAtIG1bMl0gKiBjMiArIG1bM10gKiBjMSkgKiBkZXRlcm1pbmFudCxcblx0XHQoLW1bMTJdICogczUgKyBtWzE0XSAqIHMyIC0gbVsxNV0gKiBzMSkgKiBkZXRlcm1pbmFudCxcblx0XHQobVs4XSAqIHM1IC0gbVsxMF0gKiBzMiArIG1bMTFdICogczEpICogZGV0ZXJtaW5hbnQsXG5cblx0XHQobVs0XSAqIGM0IC0gbVs1XSAqIGMyICsgbVs3XSAqIGMwKSAqIGRldGVybWluYW50LFxuXHRcdCgtbVswXSAqIGM0ICsgbVsxXSAqIGMyIC0gbVszXSAqIGMwKSAqIGRldGVybWluYW50LFxuXHRcdChtWzEyXSAqIHM0IC0gbVsxM10gKiBzMiArIG1bMTVdICogczApICogZGV0ZXJtaW5hbnQsXG5cdFx0KC1tWzhdICogczQgKyBtWzldICogczIgLSBtWzExXSAqIHMwKSAqIGRldGVybWluYW50LFxuXG5cdFx0KC1tWzRdICogYzMgKyBtWzVdICogYzEgLSBtWzZdICogYzApICogZGV0ZXJtaW5hbnQsXG5cdFx0KG1bMF0gKiBjMyAtIG1bMV0gKiBjMSArIG1bMl0gKiBjMCkgKiBkZXRlcm1pbmFudCxcblx0XHQoLW1bMTJdICogczMgKyBtWzEzXSAqIHMxIC0gbVsxNF0gKiBzMCkgKiBkZXRlcm1pbmFudCxcblx0XHQobVs4XSAqIHMzIC0gbVs5XSAqIHMxICsgbVsxMF0gKiBzMCkgKiBkZXRlcm1pbmFudFxuXHRdXG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyB0aGUgY29tYmluZWQgdHJhbnNmb3JtYXRpb25zXG4gKiBvZiBib3RoIGFyZ3VtZW50cy5cbiAqXG4gKiA+ICoqTm90ZToqKiBPcmRlciBpcyB2ZXJ5IGltcG9ydGFudC4gRm9yIGV4YW1wbGUsIHJvdGF0aW5nIDQ1wrBcbiAqIGFsb25nIHRoZSBaLWF4aXMsIGZvbGxvd2VkIGJ5IHRyYW5zbGF0aW5nIDUwMCBwaXhlbHMgYWxvbmcgdGhlXG4gKiBZLWF4aXMuLi4gaXMgbm90IHRoZSBzYW1lIGFzIHRyYW5zbGF0aW5nIDUwMCBwaXhlbHMgYWxvbmcgdGhlXG4gKiBZLWF4aXMsIGZvbGxvd2VkIGJ5IHJvdGF0aW5nIDQ1wrAgYWxvbmcgb24gdGhlIFotYXhpcy5cbiAqXG4gKiBAcGFyYW0gIHthcnJheX0gbSAtIEFjY2VwdHMgYm90aCBzaG9ydCBhbmQgbG9uZyBmb3JtIG1hdHJpY2VzLlxuICogQHBhcmFtICB7YXJyYXl9IHggLSBBY2NlcHRzIGJvdGggc2hvcnQgYW5kIGxvbmcgZm9ybSBtYXRyaWNlcy5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBtdWx0aXBseShtLCB4KSB7XG5cdHZhciBmbSA9IGZvcm1hdChtKTtcblx0dmFyIGZ4ID0gZm9ybWF0KHgpO1xuXHR2YXIgcHJvZHVjdCA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0dmFyIHJvdyA9IFtmbVtpXSwgZm1baSArIDRdLCBmbVtpICsgOF0sIGZtW2kgKyAxMl1dO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKSB7XG5cdFx0XHR2YXIgayA9IGogKiA0O1xuXHRcdFx0dmFyIGNvbCA9IFtmeFtrXSwgZnhbayArIDFdLCBmeFtrICsgMl0sIGZ4W2sgKyAzXV07XG5cdFx0XHR2YXIgcmVzdWx0ID1cblx0XHRcdFx0cm93WzBdICogY29sWzBdICsgcm93WzFdICogY29sWzFdICsgcm93WzJdICogY29sWzJdICsgcm93WzNdICogY29sWzNdO1xuXG5cdFx0XHRwcm9kdWN0W2kgKyBrXSA9IHJlc3VsdDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcHJvZHVjdFxufVxuXG4vKipcbiAqIEF0dGVtcHRzIHRvIHJldHVybiBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyB0aGUgQ1NTIHRyYW5zZm9ybVxuICogbWF0cml4IHBhc3NlZCBpbiwgYnV0IHdpbGwgcmV0dXJuIHRoZSBpZGVudGl0eSBtYXRyaXggYXMgYVxuICogZmFsbGJhY2suXG4gKlxuICogPiAqKlRpcDoqKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGNvbnZlcnQgYSBDU1MgbWF0cml4IChyZXRyaWV2ZWQgYXMgYVxuICogYHN0cmluZ2AgZnJvbSBjb21wdXRlZCBzdHlsZXMpIHRvIGl0cyBlcXVpdmFsZW50IGFycmF5IGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHNvdXJjZSAtIGBtYXRyaXhgIG9yIGBtYXRyaXgzZGAgQ1NTIFRyYW5zZm9ybSB2YWx1ZS5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBwYXJzZShzb3VyY2UpIHtcblx0aWYgKHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnKSB7XG5cdFx0dmFyIG1hdGNoID0gc291cmNlLm1hdGNoKC9tYXRyaXgoM2QpP1xcKChbXildKylcXCkvKTtcblx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdHZhciByYXcgPSBtYXRjaFsyXS5zcGxpdCgnLCAnKS5tYXAocGFyc2VGbG9hdCk7XG5cdFx0XHRyZXR1cm4gZm9ybWF0KHJhdylcblx0XHR9XG5cdH1cblx0cmV0dXJuIGlkZW50aXR5KClcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFotYXhpcyByb3RhdGlvbi5cbiAqXG4gKiA+ICoqVGlwOioqIFRoaXMgaXMganVzdCBhbiBhbGlhcyBmb3IgYFJlbWF0cml4LnJvdGF0ZVpgIGZvciBwYXJpdHkgd2l0aCBDU1NcbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGFuZ2xlIC0gTWVhc3VyZWQgaW4gZGVncmVlcy5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiByb3RhdGUoYW5nbGUpIHtcblx0cmV0dXJuIHJvdGF0ZVooYW5nbGUpXG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBYLWF4aXMgcm90YXRpb24uXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBhbmdsZSAtIE1lYXN1cmVkIGluIGRlZ3JlZXMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gcm90YXRlWChhbmdsZSkge1xuXHR2YXIgdGhldGEgPSBNYXRoLlBJIC8gMTgwICogYW5nbGU7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXG5cdG1hdHJpeFs1XSA9IG1hdHJpeFsxMF0gPSBNYXRoLmNvcyh0aGV0YSk7XG5cdG1hdHJpeFs2XSA9IG1hdHJpeFs5XSA9IE1hdGguc2luKHRoZXRhKTtcblx0bWF0cml4WzldICo9IC0xO1xuXG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFktYXhpcyByb3RhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGFuZ2xlIC0gTWVhc3VyZWQgaW4gZGVncmVlcy5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiByb3RhdGVZKGFuZ2xlKSB7XG5cdHZhciB0aGV0YSA9IE1hdGguUEkgLyAxODAgKiBhbmdsZTtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cblx0bWF0cml4WzBdID0gbWF0cml4WzEwXSA9IE1hdGguY29zKHRoZXRhKTtcblx0bWF0cml4WzJdID0gbWF0cml4WzhdID0gTWF0aC5zaW4odGhldGEpO1xuXHRtYXRyaXhbMl0gKj0gLTE7XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWi1heGlzIHJvdGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gYW5nbGUgLSBNZWFzdXJlZCBpbiBkZWdyZWVzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVooYW5nbGUpIHtcblx0dmFyIHRoZXRhID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlO1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblxuXHRtYXRyaXhbMF0gPSBtYXRyaXhbNV0gPSBNYXRoLmNvcyh0aGV0YSk7XG5cdG1hdHJpeFsxXSA9IG1hdHJpeFs0XSA9IE1hdGguc2luKHRoZXRhKTtcblx0bWF0cml4WzRdICo9IC0xO1xuXG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIDJEIHNjYWxpbmcuIFRoZSBmaXJzdCBhcmd1bWVudFxuICogaXMgdXNlZCBmb3IgYm90aCBYIGFuZCBZLWF4aXMgc2NhbGluZywgdW5sZXNzIGFuIG9wdGlvbmFsXG4gKiBzZWNvbmQgYXJndW1lbnQgaXMgcHJvdmlkZWQgdG8gZXhwbGljaXRseSBkZWZpbmUgWS1heGlzIHNjYWxpbmcuXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBzY2FsYXIgICAgLSBEZWNpbWFsIG11bHRpcGxpZXIuXG4gKiBAcGFyYW0gIHtudW1iZXJ9IFtzY2FsYXJZXSAtIERlY2ltYWwgbXVsdGlwbGllci5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBzY2FsZShzY2FsYXIsIHNjYWxhclkpIHtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cblx0bWF0cml4WzBdID0gc2NhbGFyO1xuXHRtYXRyaXhbNV0gPSB0eXBlb2Ygc2NhbGFyWSA9PT0gJ251bWJlcicgPyBzY2FsYXJZIDogc2NhbGFyO1xuXG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFgtYXhpcyBzY2FsaW5nLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gc2NhbGFyIC0gRGVjaW1hbCBtdWx0aXBsaWVyLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNjYWxlWChzY2FsYXIpIHtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cdG1hdHJpeFswXSA9IHNjYWxhcjtcblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWS1heGlzIHNjYWxpbmcuXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBzY2FsYXIgLSBEZWNpbWFsIG11bHRpcGxpZXIuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gc2NhbGVZKHNjYWxhcikge1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblx0bWF0cml4WzVdID0gc2NhbGFyO1xuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBaLWF4aXMgc2NhbGluZy5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNjYWxhciAtIERlY2ltYWwgbXVsdGlwbGllci5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBzY2FsZVooc2NhbGFyKSB7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXHRtYXRyaXhbMTBdID0gc2NhbGFyO1xuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBzaGVhci4gVGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBkZWZpbmVzIFgtYXhpcyBzaGVhcmluZywgYW5kIGFuIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudFxuICogZGVmaW5lcyBZLWF4aXMgc2hlYXJpbmcuXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBhbmdsZVggICAtIE1lYXN1cmVkIGluIGRlZ3JlZXMuXG4gKiBAcGFyYW0gIHtudW1iZXJ9IFthbmdsZVldIC0gTWVhc3VyZWQgaW4gZGVncmVlcy5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBza2V3KGFuZ2xlWCwgYW5nbGVZKSB7XG5cdHZhciB0aGV0YVggPSBNYXRoLlBJIC8gMTgwICogYW5nbGVYO1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblxuXHRtYXRyaXhbNF0gPSBNYXRoLnRhbih0aGV0YVgpO1xuXG5cdGlmIChhbmdsZVkpIHtcblx0XHR2YXIgdGhldGFZID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlWTtcblx0XHRtYXRyaXhbMV0gPSBNYXRoLnRhbih0aGV0YVkpO1xuXHR9XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWC1heGlzIHNoZWFyLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gYW5nbGUgLSBNZWFzdXJlZCBpbiBkZWdyZWVzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNrZXdYKGFuZ2xlKSB7XG5cdHZhciB0aGV0YSA9IE1hdGguUEkgLyAxODAgKiBhbmdsZTtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cblx0bWF0cml4WzRdID0gTWF0aC50YW4odGhldGEpO1xuXG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFktYXhpcyBzaGVhci5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGFuZ2xlIC0gTWVhc3VyZWQgaW4gZGVncmVlc1xuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNrZXdZKGFuZ2xlKSB7XG5cdHZhciB0aGV0YSA9IE1hdGguUEkgLyAxODAgKiBhbmdsZTtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cblx0bWF0cml4WzFdID0gTWF0aC50YW4odGhldGEpO1xuXG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgQ1NTIFRyYW5zZm9ybSBwcm9wZXJ0eSB2YWx1ZSBlcXVpdmFsZW50IHRvIHRoZSBzb3VyY2UgbWF0cml4LlxuICpcbiAqIEBwYXJhbSAge2FycmF5fSBzb3VyY2UgLSBBY2NlcHRzIGJvdGggc2hvcnQgYW5kIGxvbmcgZm9ybSBtYXRyaWNlcy5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcoc291cmNlKSB7XG5cdHJldHVybiAoXCJtYXRyaXgzZChcIiArIChmb3JtYXQoc291cmNlKS5qb2luKCcsICcpKSArIFwiKVwiKVxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgMkQgdHJhbnNsYXRpb24uIFRoZSBmaXJzdFxuICogYXJndW1lbnQgZGVmaW5lcyBYLWF4aXMgdHJhbnNsYXRpb24sIGFuZCBhbiBvcHRpb25hbCBzZWNvbmRcbiAqIGFyZ3VtZW50IGRlZmluZXMgWS1heGlzIHRyYW5zbGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gZGlzdGFuY2VYICAgLSBNZWFzdXJlZCBpbiBwaXhlbHMuXG4gKiBAcGFyYW0gIHtudW1iZXJ9IFtkaXN0YW5jZVldIC0gTWVhc3VyZWQgaW4gcGl4ZWxzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZShkaXN0YW5jZVgsIGRpc3RhbmNlWSkge1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblx0bWF0cml4WzEyXSA9IGRpc3RhbmNlWDtcblxuXHRpZiAoZGlzdGFuY2VZKSB7XG5cdFx0bWF0cml4WzEzXSA9IGRpc3RhbmNlWTtcblx0fVxuXG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFgtYXhpcyB0cmFuc2xhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGRpc3RhbmNlIC0gTWVhc3VyZWQgaW4gcGl4ZWxzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZVgoZGlzdGFuY2UpIHtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cdG1hdHJpeFsxMl0gPSBkaXN0YW5jZTtcblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWS1heGlzIHRyYW5zbGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gZGlzdGFuY2UgLSBNZWFzdXJlZCBpbiBwaXhlbHMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gdHJhbnNsYXRlWShkaXN0YW5jZSkge1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblx0bWF0cml4WzEzXSA9IGRpc3RhbmNlO1xuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBaLWF4aXMgdHJhbnNsYXRpb24uXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBkaXN0YW5jZSAtIE1lYXN1cmVkIGluIHBpeGVscy5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiB0cmFuc2xhdGVaKGRpc3RhbmNlKSB7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXHRtYXRyaXhbMTRdID0gZGlzdGFuY2U7XG5cdHJldHVybiBtYXRyaXhcbn1cblxuZXhwb3J0IHsgZm9ybWF0LCBpZGVudGl0eSwgaW52ZXJzZSwgbXVsdGlwbHksIHBhcnNlLCByb3RhdGUsIHJvdGF0ZVgsIHJvdGF0ZVksIHJvdGF0ZVosIHNjYWxlLCBzY2FsZVgsIHNjYWxlWSwgc2NhbGVaLCBza2V3LCBza2V3WCwgc2tld1ksIHRvU3RyaW5nLCB0cmFuc2xhdGUsIHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHRyYW5zbGF0ZVogfTtcbiIsIi8qISBAbGljZW5zZSBTY3JvbGxSZXZlYWwgdjQuMC45XG5cblx0Q29weXJpZ2h0IDIwMjEgRmlzc3Npb24gTExDLlxuXG5cdExpY2Vuc2VkIHVuZGVyIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSAzLjAgZm9yXG5cdGNvbXBhdGlibGUgb3BlbiBzb3VyY2UgcHJvamVjdHMgYW5kIG5vbi1jb21tZXJjaWFsIHVzZS5cblxuXHRGb3IgY29tbWVyY2lhbCBzaXRlcywgdGhlbWVzLCBwcm9qZWN0cywgYW5kIGFwcGxpY2F0aW9ucyxcblx0a2VlcCB5b3VyIHNvdXJjZSBjb2RlIHByaXZhdGUvcHJvcHJpZXRhcnkgYnkgcHVyY2hhc2luZ1xuXHRhIGNvbW1lcmNpYWwgbGljZW5zZSBmcm9tIGh0dHBzOi8vc2Nyb2xscmV2ZWFsanMub3JnL1xuKi9cbmltcG9ydCAkIGZyb20gJ3RlYWxpZ2h0JztcbmltcG9ydCB7IHRyYW5zbGF0ZVksIHRyYW5zbGF0ZVgsIHJvdGF0ZVgsIHJvdGF0ZVksIHJvdGF0ZVosIHNjYWxlLCBwYXJzZSwgbXVsdGlwbHkgfSBmcm9tICdyZW1hdHJpeCc7XG5pbXBvcnQgcmFmIGZyb20gJ21pbmlyYWYnO1xuXG52YXIgZGVmYXVsdHMgPSB7XG5cdGRlbGF5OiAwLFxuXHRkaXN0YW5jZTogJzAnLFxuXHRkdXJhdGlvbjogNjAwLFxuXHRlYXNpbmc6ICdjdWJpYy1iZXppZXIoMC41LCAwLCAwLCAxKScsXG5cdGludGVydmFsOiAwLFxuXHRvcGFjaXR5OiAwLFxuXHRvcmlnaW46ICdib3R0b20nLFxuXHRyb3RhdGU6IHtcblx0XHR4OiAwLFxuXHRcdHk6IDAsXG5cdFx0ejogMFxuXHR9LFxuXHRzY2FsZTogMSxcblx0Y2xlYW51cDogZmFsc2UsXG5cdGNvbnRhaW5lcjogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuXHRkZXNrdG9wOiB0cnVlLFxuXHRtb2JpbGU6IHRydWUsXG5cdHJlc2V0OiBmYWxzZSxcblx0dXNlRGVsYXk6ICdhbHdheXMnLFxuXHR2aWV3RmFjdG9yOiAwLjAsXG5cdHZpZXdPZmZzZXQ6IHtcblx0XHR0b3A6IDAsXG5cdFx0cmlnaHQ6IDAsXG5cdFx0Ym90dG9tOiAwLFxuXHRcdGxlZnQ6IDBcblx0fSxcblx0YWZ0ZXJSZXNldDogZnVuY3Rpb24gYWZ0ZXJSZXNldCgpIHt9LFxuXHRhZnRlclJldmVhbDogZnVuY3Rpb24gYWZ0ZXJSZXZlYWwoKSB7fSxcblx0YmVmb3JlUmVzZXQ6IGZ1bmN0aW9uIGJlZm9yZVJlc2V0KCkge30sXG5cdGJlZm9yZVJldmVhbDogZnVuY3Rpb24gYmVmb3JlUmV2ZWFsKCkge31cbn07XG5cbmZ1bmN0aW9uIGZhaWx1cmUoKSB7XG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzcicpO1xuXG5cdHJldHVybiB7XG5cdFx0Y2xlYW46IGZ1bmN0aW9uIGNsZWFuKCkge30sXG5cdFx0ZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHt9LFxuXHRcdHJldmVhbDogZnVuY3Rpb24gcmV2ZWFsKCkge30sXG5cdFx0c3luYzogZnVuY3Rpb24gc3luYygpIHt9LFxuXHRcdGdldCBub29wKCkge1xuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gc3VjY2VzcygpIHtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NyJyk7XG5cblx0aWYgKGRvY3VtZW50LmJvZHkpIHtcblx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcblx0fSBlbHNlIHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG5cdFx0fSk7XG5cdH1cbn1cblxudmFyIG1vdW50ID0geyBzdWNjZXNzOiBzdWNjZXNzLCBmYWlsdXJlOiBmYWlsdXJlIH07XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcblx0cmV0dXJuIChcblx0XHR4ICE9PSBudWxsICYmXG5cdFx0eCBpbnN0YW5jZW9mIE9iamVjdCAmJlxuXHRcdCh4LmNvbnN0cnVjdG9yID09PSBPYmplY3QgfHxcblx0XHRcdE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpXG5cdClcbn1cblxuZnVuY3Rpb24gZWFjaChjb2xsZWN0aW9uLCBjYWxsYmFjaykge1xuXHRpZiAoaXNPYmplY3QoY29sbGVjdGlvbikpIHtcblx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pO1xuXHRcdHJldHVybiBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gY2FsbGJhY2soY29sbGVjdGlvbltrZXldLCBrZXksIGNvbGxlY3Rpb24pOyB9KVxuXHR9XG5cdGlmIChjb2xsZWN0aW9uIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7IHJldHVybiBjYWxsYmFjayhpdGVtLCBpLCBjb2xsZWN0aW9uKTsgfSlcblx0fVxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBlaXRoZXIgYW4gYXJyYXkgb3Igb2JqZWN0IGxpdGVyYWwuJylcbn1cblxuZnVuY3Rpb24gbG9nZ2VyKG1lc3NhZ2UpIHtcblx0dmFyIGRldGFpbHMgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG5cdHdoaWxlICggbGVuLS0gPiAwICkgZGV0YWlsc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuXHRpZiAodGhpcy5jb25zdHJ1Y3Rvci5kZWJ1ZyAmJiBjb25zb2xlKSB7XG5cdFx0dmFyIHJlcG9ydCA9IFwiJWNTY3JvbGxSZXZlYWw6IFwiICsgbWVzc2FnZTtcblx0XHRkZXRhaWxzLmZvckVhY2goZnVuY3Rpb24gKGRldGFpbCkgeyByZXR1cm4gKHJlcG9ydCArPSBcIlxcbiDigJQgXCIgKyBkZXRhaWwpOyB9KTtcblx0XHRjb25zb2xlLmxvZyhyZXBvcnQsICdjb2xvcjogI2VhNjU0YjsnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cdH1cbn1cblxuZnVuY3Rpb24gcmluc2UoKSB7XG5cdHZhciB0aGlzJDEgPSB0aGlzO1xuXG5cdHZhciBzdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xuXHRcdGFjdGl2ZTogW10sXG5cdFx0c3RhbGU6IFtdXG5cdH0pOyB9O1xuXG5cdHZhciBlbGVtZW50SWRzID0gc3RydWN0KCk7XG5cdHZhciBzZXF1ZW5jZUlkcyA9IHN0cnVjdCgpO1xuXHR2YXIgY29udGFpbmVySWRzID0gc3RydWN0KCk7XG5cblx0LyoqXG5cdCAqIFRha2Ugc3RvY2sgb2YgYWN0aXZlIGVsZW1lbnQgSURzLlxuXHQgKi9cblx0dHJ5IHtcblx0XHRlYWNoKCQoJ1tkYXRhLXNyLWlkXScpLCBmdW5jdGlvbiAobm9kZSkge1xuXHRcdFx0dmFyIGlkID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3ItaWQnKSk7XG5cdFx0XHRlbGVtZW50SWRzLmFjdGl2ZS5wdXNoKGlkKTtcblx0XHR9KTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHRocm93IGVcblx0fVxuXHQvKipcblx0ICogRGVzdHJveSBzdGFsZSBlbGVtZW50cy5cblx0ICovXG5cdGVhY2godGhpcy5zdG9yZS5lbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRpZiAoZWxlbWVudElkcy5hY3RpdmUuaW5kZXhPZihlbGVtZW50LmlkKSA9PT0gLTEpIHtcblx0XHRcdGVsZW1lbnRJZHMuc3RhbGUucHVzaChlbGVtZW50LmlkKTtcblx0XHR9XG5cdH0pO1xuXG5cdGVhY2goZWxlbWVudElkcy5zdGFsZSwgZnVuY3Rpb24gKHN0YWxlSWQpIHsgcmV0dXJuIGRlbGV0ZSB0aGlzJDEuc3RvcmUuZWxlbWVudHNbc3RhbGVJZF07IH0pO1xuXG5cdC8qKlxuXHQgKiBUYWtlIHN0b2NrIG9mIGFjdGl2ZSBjb250YWluZXIgYW5kIHNlcXVlbmNlIElEcy5cblx0ICovXG5cdGVhY2godGhpcy5zdG9yZS5lbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRpZiAoY29udGFpbmVySWRzLmFjdGl2ZS5pbmRleE9mKGVsZW1lbnQuY29udGFpbmVySWQpID09PSAtMSkge1xuXHRcdFx0Y29udGFpbmVySWRzLmFjdGl2ZS5wdXNoKGVsZW1lbnQuY29udGFpbmVySWQpO1xuXHRcdH1cblx0XHRpZiAoZWxlbWVudC5oYXNPd25Qcm9wZXJ0eSgnc2VxdWVuY2UnKSkge1xuXHRcdFx0aWYgKHNlcXVlbmNlSWRzLmFjdGl2ZS5pbmRleE9mKGVsZW1lbnQuc2VxdWVuY2UuaWQpID09PSAtMSkge1xuXHRcdFx0XHRzZXF1ZW5jZUlkcy5hY3RpdmUucHVzaChlbGVtZW50LnNlcXVlbmNlLmlkKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95IHN0YWxlIGNvbnRhaW5lcnMuXG5cdCAqL1xuXHRlYWNoKHRoaXMuc3RvcmUuY29udGFpbmVycywgZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuXHRcdGlmIChjb250YWluZXJJZHMuYWN0aXZlLmluZGV4T2YoY29udGFpbmVyLmlkKSA9PT0gLTEpIHtcblx0XHRcdGNvbnRhaW5lcklkcy5zdGFsZS5wdXNoKGNvbnRhaW5lci5pZCk7XG5cdFx0fVxuXHR9KTtcblxuXHRlYWNoKGNvbnRhaW5lcklkcy5zdGFsZSwgZnVuY3Rpb24gKHN0YWxlSWQpIHtcblx0XHR2YXIgc3RhbGUgPSB0aGlzJDEuc3RvcmUuY29udGFpbmVyc1tzdGFsZUlkXS5ub2RlO1xuXHRcdHN0YWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMkMS5kZWxlZ2F0ZSk7XG5cdFx0c3RhbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcyQxLmRlbGVnYXRlKTtcblx0XHRkZWxldGUgdGhpcyQxLnN0b3JlLmNvbnRhaW5lcnNbc3RhbGVJZF07XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95IHN0YWxlIHNlcXVlbmNlcy5cblx0ICovXG5cdGVhY2godGhpcy5zdG9yZS5zZXF1ZW5jZXMsIGZ1bmN0aW9uIChzZXF1ZW5jZSkge1xuXHRcdGlmIChzZXF1ZW5jZUlkcy5hY3RpdmUuaW5kZXhPZihzZXF1ZW5jZS5pZCkgPT09IC0xKSB7XG5cdFx0XHRzZXF1ZW5jZUlkcy5zdGFsZS5wdXNoKHNlcXVlbmNlLmlkKTtcblx0XHR9XG5cdH0pO1xuXG5cdGVhY2goc2VxdWVuY2VJZHMuc3RhbGUsIGZ1bmN0aW9uIChzdGFsZUlkKSB7IHJldHVybiBkZWxldGUgdGhpcyQxLnN0b3JlLnNlcXVlbmNlc1tzdGFsZUlkXTsgfSk7XG59XG5cbnZhciBnZXRQcmVmaXhlZENzc1Byb3AgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgcHJvcGVydGllcyA9IHt9O1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cblx0ZnVuY3Rpb24gZ2V0UHJlZml4ZWRDc3NQcm9wZXJ0eShuYW1lLCBzb3VyY2UpIHtcblx0XHRpZiAoIHNvdXJjZSA9PT0gdm9pZCAwICkgc291cmNlID0gc3R5bGU7XG5cblx0XHRpZiAobmFtZSAmJiB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGlmIChwcm9wZXJ0aWVzW25hbWVdKSB7XG5cdFx0XHRcdHJldHVybiBwcm9wZXJ0aWVzW25hbWVdXG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHNvdXJjZVtuYW1lXSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0cmV0dXJuIChwcm9wZXJ0aWVzW25hbWVdID0gbmFtZSlcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2Ygc291cmNlWyhcIi13ZWJraXQtXCIgKyBuYW1lKV0gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHJldHVybiAocHJvcGVydGllc1tuYW1lXSA9IFwiLXdlYmtpdC1cIiArIG5hbWUpXG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcigoXCJVbmFibGUgdG8gZmluZCBcXFwiXCIgKyBuYW1lICsgXCJcXFwiIHN0eWxlIHByb3BlcnR5LlwiKSlcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcuJylcblx0fVxuXG5cdGdldFByZWZpeGVkQ3NzUHJvcGVydHkuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIChwcm9wZXJ0aWVzID0ge30pOyB9O1xuXG5cdHJldHVybiBnZXRQcmVmaXhlZENzc1Byb3BlcnR5XG59KSgpO1xuXG5mdW5jdGlvbiBzdHlsZShlbGVtZW50KSB7XG5cdHZhciBjb21wdXRlZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQubm9kZSk7XG5cdHZhciBwb3NpdGlvbiA9IGNvbXB1dGVkLnBvc2l0aW9uO1xuXHR2YXIgY29uZmlnID0gZWxlbWVudC5jb25maWc7XG5cblx0LyoqXG5cdCAqIEdlbmVyYXRlIGlubGluZSBzdHlsZXNcblx0ICovXG5cdHZhciBpbmxpbmUgPSB7fTtcblx0dmFyIGlubGluZVN0eWxlID0gZWxlbWVudC5ub2RlLmdldEF0dHJpYnV0ZSgnc3R5bGUnKSB8fCAnJztcblx0dmFyIGlubGluZU1hdGNoID0gaW5saW5lU3R5bGUubWF0Y2goL1tcXHctXStcXHMqOlxccypbXjtdK1xccyovZ2kpIHx8IFtdO1xuXG5cdGlubGluZS5jb21wdXRlZCA9IGlubGluZU1hdGNoID8gaW5saW5lTWF0Y2gubWFwKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLnRyaW0oKTsgfSkuam9pbignOyAnKSArICc7JyA6ICcnO1xuXG5cdGlubGluZS5nZW5lcmF0ZWQgPSBpbmxpbmVNYXRjaC5zb21lKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLm1hdGNoKC92aXNpYmlsaXR5XFxzPzpcXHM/dmlzaWJsZS9pKTsgfSlcblx0XHQ/IGlubGluZS5jb21wdXRlZFxuXHRcdDogaW5saW5lTWF0Y2guY29uY2F0KCBbJ3Zpc2liaWxpdHk6IHZpc2libGUnXSkubWFwKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLnRyaW0oKTsgfSkuam9pbignOyAnKSArICc7JztcblxuXHQvKipcblx0ICogR2VuZXJhdGUgb3BhY2l0eSBzdHlsZXNcblx0ICovXG5cdHZhciBjb21wdXRlZE9wYWNpdHkgPSBwYXJzZUZsb2F0KGNvbXB1dGVkLm9wYWNpdHkpO1xuXHR2YXIgY29uZmlnT3BhY2l0eSA9ICFpc05hTihwYXJzZUZsb2F0KGNvbmZpZy5vcGFjaXR5KSlcblx0XHQ/IHBhcnNlRmxvYXQoY29uZmlnLm9wYWNpdHkpXG5cdFx0OiBwYXJzZUZsb2F0KGNvbXB1dGVkLm9wYWNpdHkpO1xuXG5cdHZhciBvcGFjaXR5ID0ge1xuXHRcdGNvbXB1dGVkOiBjb21wdXRlZE9wYWNpdHkgIT09IGNvbmZpZ09wYWNpdHkgPyAoXCJvcGFjaXR5OiBcIiArIGNvbXB1dGVkT3BhY2l0eSArIFwiO1wiKSA6ICcnLFxuXHRcdGdlbmVyYXRlZDogY29tcHV0ZWRPcGFjaXR5ICE9PSBjb25maWdPcGFjaXR5ID8gKFwib3BhY2l0eTogXCIgKyBjb25maWdPcGFjaXR5ICsgXCI7XCIpIDogJydcblx0fTtcblxuXHQvKipcblx0ICogR2VuZXJhdGUgdHJhbnNmb3JtYXRpb24gc3R5bGVzXG5cdCAqL1xuXHR2YXIgdHJhbnNmb3JtYXRpb25zID0gW107XG5cblx0aWYgKHBhcnNlRmxvYXQoY29uZmlnLmRpc3RhbmNlKSkge1xuXHRcdHZhciBheGlzID0gY29uZmlnLm9yaWdpbiA9PT0gJ3RvcCcgfHwgY29uZmlnLm9yaWdpbiA9PT0gJ2JvdHRvbScgPyAnWScgOiAnWCc7XG5cblx0XHQvKipcblx0XHQgKiBMZXTigJlzIG1ha2Ugc3VyZSBvdXIgb3VyIHBpeGVsIGRpc3RhbmNlcyBhcmUgbmVnYXRpdmUgZm9yIHRvcCBhbmQgbGVmdC5cblx0XHQgKiBlLmcuIHsgb3JpZ2luOiAndG9wJywgZGlzdGFuY2U6ICcyNXB4JyB9IHN0YXJ0cyBhdCBgdG9wOiAtMjVweGAgaW4gQ1NTLlxuXHRcdCAqL1xuXHRcdHZhciBkaXN0YW5jZSA9IGNvbmZpZy5kaXN0YW5jZTtcblx0XHRpZiAoY29uZmlnLm9yaWdpbiA9PT0gJ3RvcCcgfHwgY29uZmlnLm9yaWdpbiA9PT0gJ2xlZnQnKSB7XG5cdFx0XHRkaXN0YW5jZSA9IC9eLS8udGVzdChkaXN0YW5jZSkgPyBkaXN0YW5jZS5zdWJzdHIoMSkgOiAoXCItXCIgKyBkaXN0YW5jZSk7XG5cdFx0fVxuXG5cdFx0dmFyIHJlZiA9IGRpc3RhbmNlLm1hdGNoKC8oXi0/XFxkK1xcLj9cXGQ/KXwoZW0kfHB4JHwlJCkvZyk7XG5cdFx0dmFyIHZhbHVlID0gcmVmWzBdO1xuXHRcdHZhciB1bml0ID0gcmVmWzFdO1xuXG5cdFx0c3dpdGNoICh1bml0KSB7XG5cdFx0XHRjYXNlICdlbSc6XG5cdFx0XHRcdGRpc3RhbmNlID0gcGFyc2VJbnQoY29tcHV0ZWQuZm9udFNpemUpICogdmFsdWU7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdweCc6XG5cdFx0XHRcdGRpc3RhbmNlID0gdmFsdWU7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICclJzpcblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEhlcmUgd2UgdXNlIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIGluc3RlYWQgb2Zcblx0XHRcdFx0ICogdGhlIGV4aXN0aW5nIGRhdGEgYXR0YWNoZWQgdG8gYGVsZW1lbnQuZ2VvbWV0cnlgXG5cdFx0XHRcdCAqIGJlY2F1c2Ugb25seSB0aGUgZm9ybWVyIGluY2x1ZGVzIGFueSB0cmFuc2Zvcm1hdGlvbnNcblx0XHRcdFx0ICogY3VycmVudCBhcHBsaWVkIHRvIHRoZSBlbGVtZW50LlxuXHRcdFx0XHQgKlxuXHRcdFx0XHQgKiBJZiB0aGF0IGJlaGF2aW9yIGVuZHMgdXAgYmVpbmcgdW5pbnR1aXRpdmUsIHRoaXNcblx0XHRcdFx0ICogbG9naWMgY291bGQgaW5zdGVhZCB1dGlsaXplIGBlbGVtZW50Lmdlb21ldHJ5LmhlaWdodGBcblx0XHRcdFx0ICogYW5kIGBlbGVtZW50Lmdlb2VtZXRyeS53aWR0aGAgZm9yIHRoZSBkaXN0YW5jZSBjYWxjdWxhdGlvblxuXHRcdFx0XHQgKi9cblx0XHRcdFx0ZGlzdGFuY2UgPVxuXHRcdFx0XHRcdGF4aXMgPT09ICdZJ1xuXHRcdFx0XHRcdFx0PyAoZWxlbWVudC5ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAqIHZhbHVlKSAvIDEwMFxuXHRcdFx0XHRcdFx0OiAoZWxlbWVudC5ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICogdmFsdWUpIC8gMTAwO1xuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1VucmVjb2duaXplZCBvciBtaXNzaW5nIGRpc3RhbmNlIHVuaXQuJylcblx0XHR9XG5cblx0XHRpZiAoYXhpcyA9PT0gJ1knKSB7XG5cdFx0XHR0cmFuc2Zvcm1hdGlvbnMucHVzaCh0cmFuc2xhdGVZKGRpc3RhbmNlKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRyYW5zZm9ybWF0aW9ucy5wdXNoKHRyYW5zbGF0ZVgoZGlzdGFuY2UpKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoY29uZmlnLnJvdGF0ZS54KSB7IHRyYW5zZm9ybWF0aW9ucy5wdXNoKHJvdGF0ZVgoY29uZmlnLnJvdGF0ZS54KSk7IH1cblx0aWYgKGNvbmZpZy5yb3RhdGUueSkgeyB0cmFuc2Zvcm1hdGlvbnMucHVzaChyb3RhdGVZKGNvbmZpZy5yb3RhdGUueSkpOyB9XG5cdGlmIChjb25maWcucm90YXRlLnopIHsgdHJhbnNmb3JtYXRpb25zLnB1c2gocm90YXRlWihjb25maWcucm90YXRlLnopKTsgfVxuXHRpZiAoY29uZmlnLnNjYWxlICE9PSAxKSB7XG5cdFx0aWYgKGNvbmZpZy5zY2FsZSA9PT0gMCkge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBUaGUgQ1NTIFRyYW5zZm9ybXMgbWF0cml4IGludGVycG9sYXRpb24gc3BlY2lmaWNhdGlvblxuXHRcdFx0ICogYmFzaWNhbGx5IGRpc2FsbG93cyB0cmFuc2l0aW9ucyBvZiBub24taW52ZXJ0aWJsZVxuXHRcdFx0ICogbWF0cml4ZXMsIHdoaWNoIG1lYW5zIGJyb3dzZXJzIHdvbid0IHRyYW5zaXRpb25cblx0XHRcdCAqIGVsZW1lbnRzIHdpdGggemVybyBzY2FsZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBUaGF04oCZcyBpbmNvbnZlbmllbnQgZm9yIHRoZSBBUEkgYW5kIGRldmVsb3BlclxuXHRcdFx0ICogZXhwZXJpZW5jZSwgc28gd2Ugc2ltcGx5IG51ZGdlIHRoZWlyIHZhbHVlXG5cdFx0XHQgKiBzbGlnaHRseSBhYm92ZSB6ZXJvOyB0aGlzIGFsbG93cyBicm93c2Vyc1xuXHRcdFx0ICogdG8gdHJhbnNpdGlvbiBvdXIgZWxlbWVudCBhcyBleHBlY3RlZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBgMC4wMDAyYCB3YXMgdGhlIHNtYWxsZXN0IG51bWJlclxuXHRcdFx0ICogdGhhdCBwZXJmb3JtZWQgYWNyb3NzIGJyb3dzZXJzLlxuXHRcdFx0ICovXG5cdFx0XHR0cmFuc2Zvcm1hdGlvbnMucHVzaChzY2FsZSgwLjAwMDIpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHJhbnNmb3JtYXRpb25zLnB1c2goc2NhbGUoY29uZmlnLnNjYWxlKSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIHRyYW5zZm9ybSA9IHt9O1xuXHRpZiAodHJhbnNmb3JtYXRpb25zLmxlbmd0aCkge1xuXHRcdHRyYW5zZm9ybS5wcm9wZXJ0eSA9IGdldFByZWZpeGVkQ3NzUHJvcCgndHJhbnNmb3JtJyk7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGRlZmF1bHQgY29tcHV0ZWQgdHJhbnNmb3JtIHZhbHVlIHNob3VsZCBiZSBvbmUgb2Y6XG5cdFx0ICogdW5kZWZpbmVkIHx8ICdub25lJyB8fCAnbWF0cml4KCknIHx8ICdtYXRyaXgzZCgpJ1xuXHRcdCAqL1xuXHRcdHRyYW5zZm9ybS5jb21wdXRlZCA9IHtcblx0XHRcdHJhdzogY29tcHV0ZWRbdHJhbnNmb3JtLnByb3BlcnR5XSxcblx0XHRcdG1hdHJpeDogcGFyc2UoY29tcHV0ZWRbdHJhbnNmb3JtLnByb3BlcnR5XSlcblx0XHR9O1xuXG5cdFx0dHJhbnNmb3JtYXRpb25zLnVuc2hpZnQodHJhbnNmb3JtLmNvbXB1dGVkLm1hdHJpeCk7XG5cdFx0dmFyIHByb2R1Y3QgPSB0cmFuc2Zvcm1hdGlvbnMucmVkdWNlKG11bHRpcGx5KTtcblxuXHRcdHRyYW5zZm9ybS5nZW5lcmF0ZWQgPSB7XG5cdFx0XHRpbml0aWFsOiAoKHRyYW5zZm9ybS5wcm9wZXJ0eSkgKyBcIjogbWF0cml4M2QoXCIgKyAocHJvZHVjdC5qb2luKCcsICcpKSArIFwiKTtcIiksXG5cdFx0XHRmaW5hbDogKCh0cmFuc2Zvcm0ucHJvcGVydHkpICsgXCI6IG1hdHJpeDNkKFwiICsgKHRyYW5zZm9ybS5jb21wdXRlZC5tYXRyaXguam9pbignLCAnKSkgKyBcIik7XCIpXG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHR0cmFuc2Zvcm0uZ2VuZXJhdGVkID0ge1xuXHRcdFx0aW5pdGlhbDogJycsXG5cdFx0XHRmaW5hbDogJydcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEdlbmVyYXRlIHRyYW5zaXRpb24gc3R5bGVzXG5cdCAqL1xuXHR2YXIgdHJhbnNpdGlvbiA9IHt9O1xuXHRpZiAob3BhY2l0eS5nZW5lcmF0ZWQgfHwgdHJhbnNmb3JtLmdlbmVyYXRlZC5pbml0aWFsKSB7XG5cdFx0dHJhbnNpdGlvbi5wcm9wZXJ0eSA9IGdldFByZWZpeGVkQ3NzUHJvcCgndHJhbnNpdGlvbicpO1xuXHRcdHRyYW5zaXRpb24uY29tcHV0ZWQgPSBjb21wdXRlZFt0cmFuc2l0aW9uLnByb3BlcnR5XTtcblx0XHR0cmFuc2l0aW9uLmZyYWdtZW50cyA9IFtdO1xuXG5cdFx0dmFyIGRlbGF5ID0gY29uZmlnLmRlbGF5O1xuXHRcdHZhciBkdXJhdGlvbiA9IGNvbmZpZy5kdXJhdGlvbjtcblx0XHR2YXIgZWFzaW5nID0gY29uZmlnLmVhc2luZztcblxuXHRcdGlmIChvcGFjaXR5LmdlbmVyYXRlZCkge1xuXHRcdFx0dHJhbnNpdGlvbi5mcmFnbWVudHMucHVzaCh7XG5cdFx0XHRcdGRlbGF5ZWQ6IChcIm9wYWNpdHkgXCIgKyAoZHVyYXRpb24gLyAxMDAwKSArIFwicyBcIiArIGVhc2luZyArIFwiIFwiICsgKGRlbGF5IC8gMTAwMCkgKyBcInNcIiksXG5cdFx0XHRcdGluc3RhbnQ6IChcIm9wYWNpdHkgXCIgKyAoZHVyYXRpb24gLyAxMDAwKSArIFwicyBcIiArIGVhc2luZyArIFwiIDBzXCIpXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAodHJhbnNmb3JtLmdlbmVyYXRlZC5pbml0aWFsKSB7XG5cdFx0XHR0cmFuc2l0aW9uLmZyYWdtZW50cy5wdXNoKHtcblx0XHRcdFx0ZGVsYXllZDogKCh0cmFuc2Zvcm0ucHJvcGVydHkpICsgXCIgXCIgKyAoZHVyYXRpb24gLyAxMDAwKSArIFwicyBcIiArIGVhc2luZyArIFwiIFwiICsgKGRlbGF5IC8gMTAwMCkgKyBcInNcIiksXG5cdFx0XHRcdGluc3RhbnQ6ICgodHJhbnNmb3JtLnByb3BlcnR5KSArIFwiIFwiICsgKGR1cmF0aW9uIC8gMTAwMCkgKyBcInMgXCIgKyBlYXNpbmcgKyBcIiAwc1wiKVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGRlZmF1bHQgY29tcHV0ZWQgdHJhbnNpdGlvbiBwcm9wZXJ0eSBzaG91bGQgYmUgdW5kZWZpbmVkLCBvciBvbmUgb2Y6XG5cdFx0ICogJycgfHwgJ25vbmUgMHMgZWFzZSAwcycgfHwgJ2FsbCAwcyBlYXNlIDBzJyB8fCAnYWxsIDBzIDBzIGN1YmljLWJlemllcigpJ1xuXHRcdCAqL1xuXHRcdHZhciBoYXNDdXN0b21UcmFuc2l0aW9uID1cblx0XHRcdHRyYW5zaXRpb24uY29tcHV0ZWQgJiYgIXRyYW5zaXRpb24uY29tcHV0ZWQubWF0Y2goL2FsbCAwc3xub25lIDBzLyk7XG5cblx0XHRpZiAoaGFzQ3VzdG9tVHJhbnNpdGlvbikge1xuXHRcdFx0dHJhbnNpdGlvbi5mcmFnbWVudHMudW5zaGlmdCh7XG5cdFx0XHRcdGRlbGF5ZWQ6IHRyYW5zaXRpb24uY29tcHV0ZWQsXG5cdFx0XHRcdGluc3RhbnQ6IHRyYW5zaXRpb24uY29tcHV0ZWRcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHZhciBjb21wb3NlZCA9IHRyYW5zaXRpb24uZnJhZ21lbnRzLnJlZHVjZShcblx0XHRcdGZ1bmN0aW9uIChjb21wb3NpdGlvbiwgZnJhZ21lbnQsIGkpIHtcblx0XHRcdFx0Y29tcG9zaXRpb24uZGVsYXllZCArPSBpID09PSAwID8gZnJhZ21lbnQuZGVsYXllZCA6IChcIiwgXCIgKyAoZnJhZ21lbnQuZGVsYXllZCkpO1xuXHRcdFx0XHRjb21wb3NpdGlvbi5pbnN0YW50ICs9IGkgPT09IDAgPyBmcmFnbWVudC5pbnN0YW50IDogKFwiLCBcIiArIChmcmFnbWVudC5pbnN0YW50KSk7XG5cdFx0XHRcdHJldHVybiBjb21wb3NpdGlvblxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZGVsYXllZDogJycsXG5cdFx0XHRcdGluc3RhbnQ6ICcnXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRyYW5zaXRpb24uZ2VuZXJhdGVkID0ge1xuXHRcdFx0ZGVsYXllZDogKCh0cmFuc2l0aW9uLnByb3BlcnR5KSArIFwiOiBcIiArIChjb21wb3NlZC5kZWxheWVkKSArIFwiO1wiKSxcblx0XHRcdGluc3RhbnQ6ICgodHJhbnNpdGlvbi5wcm9wZXJ0eSkgKyBcIjogXCIgKyAoY29tcG9zZWQuaW5zdGFudCkgKyBcIjtcIilcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHRyYW5zaXRpb24uZ2VuZXJhdGVkID0ge1xuXHRcdFx0ZGVsYXllZDogJycsXG5cdFx0XHRpbnN0YW50OiAnJ1xuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGlubGluZTogaW5saW5lLFxuXHRcdG9wYWNpdHk6IG9wYWNpdHksXG5cdFx0cG9zaXRpb246IHBvc2l0aW9uLFxuXHRcdHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuXHRcdHRyYW5zaXRpb246IHRyYW5zaXRpb25cblx0fVxufVxuXG4vKipcbiAqIGFwcGx5IGEgQ1NTIHN0cmluZyB0byBhbiBlbGVtZW50IHVzaW5nIHRoZSBDU1NPTSAoZWxlbWVudC5zdHlsZSkgcmF0aGVyXG4gKiB0aGFuIHNldEF0dHJpYnV0ZSwgd2hpY2ggbWF5IHZpb2xhdGUgdGhlIGNvbnRlbnQgc2VjdXJpdHkgcG9saWN5LlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gICBbZWxdICBFbGVtZW50IHRvIHJlY2VpdmUgc3R5bGVzLlxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWNsYXJhdGlvbl0gU3R5bGVzIHRvIGFwcGx5LlxuICovXG5mdW5jdGlvbiBhcHBseVN0eWxlIChlbCwgZGVjbGFyYXRpb24pIHtcblx0ZGVjbGFyYXRpb24uc3BsaXQoJzsnKS5mb3JFYWNoKGZ1bmN0aW9uIChwYWlyKSB7XG5cdFx0dmFyIHJlZiA9IHBhaXIuc3BsaXQoJzonKTtcblx0XHR2YXIgcHJvcGVydHkgPSByZWZbMF07XG5cdFx0dmFyIHZhbHVlID0gcmVmLnNsaWNlKDEpO1xuXHRcdGlmIChwcm9wZXJ0eSAmJiB2YWx1ZSkge1xuXHRcdFx0ZWwuc3R5bGVbcHJvcGVydHkudHJpbSgpXSA9IHZhbHVlLmpvaW4oJzonKTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhbih0YXJnZXQpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cblx0dmFyIGRpcnR5O1xuXHR0cnkge1xuXHRcdGVhY2goJCh0YXJnZXQpLCBmdW5jdGlvbiAobm9kZSkge1xuXHRcdFx0dmFyIGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3ItaWQnKTtcblx0XHRcdGlmIChpZCAhPT0gbnVsbCkge1xuXHRcdFx0XHRkaXJ0eSA9IHRydWU7XG5cdFx0XHRcdHZhciBlbGVtZW50ID0gdGhpcyQxLnN0b3JlLmVsZW1lbnRzW2lkXTtcblx0XHRcdFx0aWYgKGVsZW1lbnQuY2FsbGJhY2tUaW1lcikge1xuXHRcdFx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoZWxlbWVudC5jYWxsYmFja1RpbWVyLmNsb2NrKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRhcHBseVN0eWxlKGVsZW1lbnQubm9kZSwgZWxlbWVudC5zdHlsZXMuaW5saW5lLmdlbmVyYXRlZCk7XG5cdFx0XHRcdG5vZGUucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyLWlkJyk7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzJDEuc3RvcmUuZWxlbWVudHNbaWRdO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGxvZ2dlci5jYWxsKHRoaXMsICdDbGVhbiBmYWlsZWQuJywgZS5tZXNzYWdlKVxuXHR9XG5cblx0aWYgKGRpcnR5KSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJpbnNlLmNhbGwodGhpcyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGxvZ2dlci5jYWxsKHRoaXMsICdDbGVhbiBmYWlsZWQuJywgZS5tZXNzYWdlKVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBkZXN0cm95KCkge1xuXHR2YXIgdGhpcyQxID0gdGhpcztcblxuXHQvKipcblx0ICogUmVtb3ZlIGFsbCBnZW5lcmF0ZWQgc3R5bGVzIGFuZCBlbGVtZW50IGlkc1xuXHQgKi9cblx0ZWFjaCh0aGlzLnN0b3JlLmVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGFwcGx5U3R5bGUoZWxlbWVudC5ub2RlLCBlbGVtZW50LnN0eWxlcy5pbmxpbmUuZ2VuZXJhdGVkKTtcblx0XHRlbGVtZW50Lm5vZGUucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyLWlkJyk7XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBSZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVycy5cblx0ICovXG5cdGVhY2godGhpcy5zdG9yZS5jb250YWluZXJzLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cdFx0dmFyIHRhcmdldCA9XG5cdFx0XHRjb250YWluZXIubm9kZSA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gd2luZG93IDogY29udGFpbmVyLm5vZGU7XG5cdFx0dGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMkMS5kZWxlZ2F0ZSk7XG5cdFx0dGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMkMS5kZWxlZ2F0ZSk7XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBDbGVhciBhbGwgZGF0YSBmcm9tIHRoZSBzdG9yZVxuXHQgKi9cblx0dGhpcy5zdG9yZSA9IHtcblx0XHRjb250YWluZXJzOiB7fSxcblx0XHRlbGVtZW50czoge30sXG5cdFx0aGlzdG9yeTogW10sXG5cdFx0c2VxdWVuY2VzOiB7fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBkZWVwQXNzaWduKHRhcmdldCkge1xuXHR2YXIgc291cmNlcyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcblx0d2hpbGUgKCBsZW4tLSA+IDAgKSBzb3VyY2VzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG5cdGlmIChpc09iamVjdCh0YXJnZXQpKSB7XG5cdFx0ZWFjaChzb3VyY2VzLCBmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRlYWNoKHNvdXJjZSwgZnVuY3Rpb24gKGRhdGEsIGtleSkge1xuXHRcdFx0XHRpZiAoaXNPYmplY3QoZGF0YSkpIHtcblx0XHRcdFx0XHRpZiAoIXRhcmdldFtrZXldIHx8ICFpc09iamVjdCh0YXJnZXRba2V5XSkpIHtcblx0XHRcdFx0XHRcdHRhcmdldFtrZXldID0ge307XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRlZXBBc3NpZ24odGFyZ2V0W2tleV0sIGRhdGEpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRhcmdldFtrZXldID0gZGF0YTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRhcmdldFxuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1RhcmdldCBtdXN0IGJlIGFuIG9iamVjdCBsaXRlcmFsLicpXG5cdH1cbn1cblxuZnVuY3Rpb24gaXNNb2JpbGUoYWdlbnQpIHtcblx0aWYgKCBhZ2VudCA9PT0gdm9pZCAwICkgYWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG5cdHJldHVybiAvQW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kL2kudGVzdChhZ2VudClcbn1cblxudmFyIG5leHRVbmlxdWVJZCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB1aWQgPSAwO1xuXHRyZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gdWlkKys7IH1cbn0pKCk7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG5cdHZhciB0aGlzJDEgPSB0aGlzO1xuXG5cdHJpbnNlLmNhbGwodGhpcyk7XG5cblx0ZWFjaCh0aGlzLnN0b3JlLmVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdHZhciBzdHlsZXMgPSBbZWxlbWVudC5zdHlsZXMuaW5saW5lLmdlbmVyYXRlZF07XG5cblx0XHRpZiAoZWxlbWVudC52aXNpYmxlKSB7XG5cdFx0XHRzdHlsZXMucHVzaChlbGVtZW50LnN0eWxlcy5vcGFjaXR5LmNvbXB1dGVkKTtcblx0XHRcdHN0eWxlcy5wdXNoKGVsZW1lbnQuc3R5bGVzLnRyYW5zZm9ybS5nZW5lcmF0ZWQuZmluYWwpO1xuXHRcdFx0ZWxlbWVudC5yZXZlYWxlZCA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlcy5wdXNoKGVsZW1lbnQuc3R5bGVzLm9wYWNpdHkuZ2VuZXJhdGVkKTtcblx0XHRcdHN0eWxlcy5wdXNoKGVsZW1lbnQuc3R5bGVzLnRyYW5zZm9ybS5nZW5lcmF0ZWQuaW5pdGlhbCk7XG5cdFx0XHRlbGVtZW50LnJldmVhbGVkID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0YXBwbHlTdHlsZShlbGVtZW50Lm5vZGUsIHN0eWxlcy5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMgIT09ICcnOyB9KS5qb2luKCcgJykpO1xuXHR9KTtcblxuXHRlYWNoKHRoaXMuc3RvcmUuY29udGFpbmVycywgZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuXHRcdHZhciB0YXJnZXQgPVxuXHRcdFx0Y29udGFpbmVyLm5vZGUgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IHdpbmRvdyA6IGNvbnRhaW5lci5ub2RlO1xuXHRcdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzJDEuZGVsZWdhdGUpO1xuXHRcdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzJDEuZGVsZWdhdGUpO1xuXHR9KTtcblxuXHQvKipcblx0ICogTWFudWFsbHkgaW52b2tlIGRlbGVnYXRlIG9uY2UgdG8gY2FwdHVyZVxuXHQgKiBlbGVtZW50IGFuZCBjb250YWluZXIgZGltZW5zaW9ucywgY29udGFpbmVyXG5cdCAqIHNjcm9sbCBwb3NpdGlvbiwgYW5kIHRyaWdnZXIgYW55IHZhbGlkIHJldmVhbHNcblx0ICovXG5cdHRoaXMuZGVsZWdhdGUoKTtcblxuXHQvKipcblx0ICogV2lwZSBhbnkgZXhpc3RpbmcgYHNldFRpbWVvdXRgIG5vd1xuXHQgKiB0aGF0IGluaXRpYWxpemF0aW9uIGhhcyBjb21wbGV0ZWQuXG5cdCAqL1xuXHR0aGlzLmluaXRUaW1lb3V0ID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZShlbGVtZW50LCBmb3JjZSkge1xuXHRpZiAoIGZvcmNlID09PSB2b2lkIDAgKSBmb3JjZSA9IHt9O1xuXG5cdHZhciBwcmlzdGluZSA9IGZvcmNlLnByaXN0aW5lIHx8IHRoaXMucHJpc3RpbmU7XG5cdHZhciBkZWxheWVkID1cblx0XHRlbGVtZW50LmNvbmZpZy51c2VEZWxheSA9PT0gJ2Fsd2F5cycgfHxcblx0XHQoZWxlbWVudC5jb25maWcudXNlRGVsYXkgPT09ICdvbmxvYWQnICYmIHByaXN0aW5lKSB8fFxuXHRcdChlbGVtZW50LmNvbmZpZy51c2VEZWxheSA9PT0gJ29uY2UnICYmICFlbGVtZW50LnNlZW4pO1xuXG5cdHZhciBzaG91bGRSZXZlYWwgPSBlbGVtZW50LnZpc2libGUgJiYgIWVsZW1lbnQucmV2ZWFsZWQ7XG5cdHZhciBzaG91bGRSZXNldCA9ICFlbGVtZW50LnZpc2libGUgJiYgZWxlbWVudC5yZXZlYWxlZCAmJiBlbGVtZW50LmNvbmZpZy5yZXNldDtcblxuXHRpZiAoZm9yY2UucmV2ZWFsIHx8IHNob3VsZFJldmVhbCkge1xuXHRcdHJldHVybiB0cmlnZ2VyUmV2ZWFsLmNhbGwodGhpcywgZWxlbWVudCwgZGVsYXllZClcblx0fVxuXG5cdGlmIChmb3JjZS5yZXNldCB8fCBzaG91bGRSZXNldCkge1xuXHRcdHJldHVybiB0cmlnZ2VyUmVzZXQuY2FsbCh0aGlzLCBlbGVtZW50KVxuXHR9XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXJSZXZlYWwoZWxlbWVudCwgZGVsYXllZCkge1xuXHR2YXIgc3R5bGVzID0gW1xuXHRcdGVsZW1lbnQuc3R5bGVzLmlubGluZS5nZW5lcmF0ZWQsXG5cdFx0ZWxlbWVudC5zdHlsZXMub3BhY2l0eS5jb21wdXRlZCxcblx0XHRlbGVtZW50LnN0eWxlcy50cmFuc2Zvcm0uZ2VuZXJhdGVkLmZpbmFsXG5cdF07XG5cdGlmIChkZWxheWVkKSB7XG5cdFx0c3R5bGVzLnB1c2goZWxlbWVudC5zdHlsZXMudHJhbnNpdGlvbi5nZW5lcmF0ZWQuZGVsYXllZCk7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVzLnB1c2goZWxlbWVudC5zdHlsZXMudHJhbnNpdGlvbi5nZW5lcmF0ZWQuaW5zdGFudCk7XG5cdH1cblx0ZWxlbWVudC5yZXZlYWxlZCA9IGVsZW1lbnQuc2VlbiA9IHRydWU7XG5cdGFwcGx5U3R5bGUoZWxlbWVudC5ub2RlLCBzdHlsZXMuZmlsdGVyKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzICE9PSAnJzsgfSkuam9pbignICcpKTtcblx0cmVnaXN0ZXJDYWxsYmFja3MuY2FsbCh0aGlzLCBlbGVtZW50LCBkZWxheWVkKTtcbn1cblxuZnVuY3Rpb24gdHJpZ2dlclJlc2V0KGVsZW1lbnQpIHtcblx0dmFyIHN0eWxlcyA9IFtcblx0XHRlbGVtZW50LnN0eWxlcy5pbmxpbmUuZ2VuZXJhdGVkLFxuXHRcdGVsZW1lbnQuc3R5bGVzLm9wYWNpdHkuZ2VuZXJhdGVkLFxuXHRcdGVsZW1lbnQuc3R5bGVzLnRyYW5zZm9ybS5nZW5lcmF0ZWQuaW5pdGlhbCxcblx0XHRlbGVtZW50LnN0eWxlcy50cmFuc2l0aW9uLmdlbmVyYXRlZC5pbnN0YW50XG5cdF07XG5cdGVsZW1lbnQucmV2ZWFsZWQgPSBmYWxzZTtcblx0YXBwbHlTdHlsZShlbGVtZW50Lm5vZGUsIHN0eWxlcy5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMgIT09ICcnOyB9KS5qb2luKCcgJykpO1xuXHRyZWdpc3RlckNhbGxiYWNrcy5jYWxsKHRoaXMsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckNhbGxiYWNrcyhlbGVtZW50LCBpc0RlbGF5ZWQpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cblx0dmFyIGR1cmF0aW9uID0gaXNEZWxheWVkXG5cdFx0PyBlbGVtZW50LmNvbmZpZy5kdXJhdGlvbiArIGVsZW1lbnQuY29uZmlnLmRlbGF5XG5cdFx0OiBlbGVtZW50LmNvbmZpZy5kdXJhdGlvbjtcblxuXHR2YXIgYmVmb3JlQ2FsbGJhY2sgPSBlbGVtZW50LnJldmVhbGVkXG5cdFx0PyBlbGVtZW50LmNvbmZpZy5iZWZvcmVSZXZlYWxcblx0XHQ6IGVsZW1lbnQuY29uZmlnLmJlZm9yZVJlc2V0O1xuXG5cdHZhciBhZnRlckNhbGxiYWNrID0gZWxlbWVudC5yZXZlYWxlZFxuXHRcdD8gZWxlbWVudC5jb25maWcuYWZ0ZXJSZXZlYWxcblx0XHQ6IGVsZW1lbnQuY29uZmlnLmFmdGVyUmVzZXQ7XG5cblx0dmFyIGVsYXBzZWQgPSAwO1xuXHRpZiAoZWxlbWVudC5jYWxsYmFja1RpbWVyKSB7XG5cdFx0ZWxhcHNlZCA9IERhdGUubm93KCkgLSBlbGVtZW50LmNhbGxiYWNrVGltZXIuc3RhcnQ7XG5cdFx0d2luZG93LmNsZWFyVGltZW91dChlbGVtZW50LmNhbGxiYWNrVGltZXIuY2xvY2spO1xuXHR9XG5cblx0YmVmb3JlQ2FsbGJhY2soZWxlbWVudC5ub2RlKTtcblxuXHRlbGVtZW50LmNhbGxiYWNrVGltZXIgPSB7XG5cdFx0c3RhcnQ6IERhdGUubm93KCksXG5cdFx0Y2xvY2s6IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdGFmdGVyQ2FsbGJhY2soZWxlbWVudC5ub2RlKTtcblx0XHRcdGVsZW1lbnQuY2FsbGJhY2tUaW1lciA9IG51bGw7XG5cdFx0XHRpZiAoZWxlbWVudC5yZXZlYWxlZCAmJiAhZWxlbWVudC5jb25maWcucmVzZXQgJiYgZWxlbWVudC5jb25maWcuY2xlYW51cCkge1xuXHRcdFx0XHRjbGVhbi5jYWxsKHRoaXMkMSwgZWxlbWVudC5ub2RlKTtcblx0XHRcdH1cblx0XHR9LCBkdXJhdGlvbiAtIGVsYXBzZWQpXG5cdH07XG59XG5cbmZ1bmN0aW9uIHNlcXVlbmNlKGVsZW1lbnQsIHByaXN0aW5lKSB7XG5cdGlmICggcHJpc3RpbmUgPT09IHZvaWQgMCApIHByaXN0aW5lID0gdGhpcy5wcmlzdGluZTtcblxuXHQvKipcblx0ICogV2UgZmlyc3QgY2hlY2sgaWYgdGhlIGVsZW1lbnQgc2hvdWxkIHJlc2V0LlxuXHQgKi9cblx0aWYgKCFlbGVtZW50LnZpc2libGUgJiYgZWxlbWVudC5yZXZlYWxlZCAmJiBlbGVtZW50LmNvbmZpZy5yZXNldCkge1xuXHRcdHJldHVybiBhbmltYXRlLmNhbGwodGhpcywgZWxlbWVudCwgeyByZXNldDogdHJ1ZSB9KVxuXHR9XG5cblx0dmFyIHNlcSA9IHRoaXMuc3RvcmUuc2VxdWVuY2VzW2VsZW1lbnQuc2VxdWVuY2UuaWRdO1xuXHR2YXIgaSA9IGVsZW1lbnQuc2VxdWVuY2UuaW5kZXg7XG5cblx0aWYgKHNlcSkge1xuXHRcdHZhciB2aXNpYmxlID0gbmV3IFNlcXVlbmNlTW9kZWwoc2VxLCAndmlzaWJsZScsIHRoaXMuc3RvcmUpO1xuXHRcdHZhciByZXZlYWxlZCA9IG5ldyBTZXF1ZW5jZU1vZGVsKHNlcSwgJ3JldmVhbGVkJywgdGhpcy5zdG9yZSk7XG5cblx0XHRzZXEubW9kZWxzID0geyB2aXNpYmxlOiB2aXNpYmxlLCByZXZlYWxlZDogcmV2ZWFsZWQgfTtcblxuXHRcdC8qKlxuXHRcdCAqIElmIHRoZSBzZXF1ZW5jZSBoYXMgbm8gcmV2ZWFsZWQgbWVtYmVycyxcblx0XHQgKiB0aGVuIHdlIHJldmVhbCB0aGUgZmlyc3QgdmlzaWJsZSBlbGVtZW50XG5cdFx0ICogd2l0aGluIHRoYXQgc2VxdWVuY2UuXG5cdFx0ICpcblx0XHQgKiBUaGUgc2VxdWVuY2UgdGhlbiBjdWVzIGEgcmVjdXJzaXZlIGNhbGxcblx0XHQgKiBpbiBib3RoIGRpcmVjdGlvbnMuXG5cdFx0ICovXG5cdFx0aWYgKCFyZXZlYWxlZC5ib2R5Lmxlbmd0aCkge1xuXHRcdFx0dmFyIG5leHRJZCA9IHNlcS5tZW1iZXJzW3Zpc2libGUuYm9keVswXV07XG5cdFx0XHR2YXIgbmV4dEVsZW1lbnQgPSB0aGlzLnN0b3JlLmVsZW1lbnRzW25leHRJZF07XG5cblx0XHRcdGlmIChuZXh0RWxlbWVudCkge1xuXHRcdFx0XHRjdWUuY2FsbCh0aGlzLCBzZXEsIHZpc2libGUuYm9keVswXSwgLTEsIHByaXN0aW5lKTtcblx0XHRcdFx0Y3VlLmNhbGwodGhpcywgc2VxLCB2aXNpYmxlLmJvZHlbMF0sICsxLCBwcmlzdGluZSk7XG5cdFx0XHRcdHJldHVybiBhbmltYXRlLmNhbGwodGhpcywgbmV4dEVsZW1lbnQsIHsgcmV2ZWFsOiB0cnVlLCBwcmlzdGluZTogcHJpc3RpbmUgfSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBJZiBvdXIgZWxlbWVudCBpc27igJl0IHJlc2V0dGluZywgd2UgY2hlY2sgdGhlXG5cdFx0ICogZWxlbWVudCBzZXF1ZW5jZSBpbmRleCBhZ2FpbnN0IHRoZSBoZWFkLCBhbmRcblx0XHQgKiB0aGVuIHRoZSBmb290IG9mIHRoZSBzZXF1ZW5jZS5cblx0XHQgKi9cblx0XHRpZiAoXG5cdFx0XHQhc2VxLmJsb2NrZWQuaGVhZCAmJlxuXHRcdFx0aSA9PT0gW10uY29uY2F0KCByZXZlYWxlZC5oZWFkICkucG9wKCkgJiZcblx0XHRcdGkgPj0gW10uY29uY2F0KCB2aXNpYmxlLmJvZHkgKS5zaGlmdCgpXG5cdFx0KSB7XG5cdFx0XHRjdWUuY2FsbCh0aGlzLCBzZXEsIGksIC0xLCBwcmlzdGluZSk7XG5cdFx0XHRyZXR1cm4gYW5pbWF0ZS5jYWxsKHRoaXMsIGVsZW1lbnQsIHsgcmV2ZWFsOiB0cnVlLCBwcmlzdGluZTogcHJpc3RpbmUgfSlcblx0XHR9XG5cblx0XHRpZiAoXG5cdFx0XHQhc2VxLmJsb2NrZWQuZm9vdCAmJlxuXHRcdFx0aSA9PT0gW10uY29uY2F0KCByZXZlYWxlZC5mb290ICkuc2hpZnQoKSAmJlxuXHRcdFx0aSA8PSBbXS5jb25jYXQoIHZpc2libGUuYm9keSApLnBvcCgpXG5cdFx0KSB7XG5cdFx0XHRjdWUuY2FsbCh0aGlzLCBzZXEsIGksICsxLCBwcmlzdGluZSk7XG5cdFx0XHRyZXR1cm4gYW5pbWF0ZS5jYWxsKHRoaXMsIGVsZW1lbnQsIHsgcmV2ZWFsOiB0cnVlLCBwcmlzdGluZTogcHJpc3RpbmUgfSlcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gU2VxdWVuY2UoaW50ZXJ2YWwpIHtcblx0dmFyIGkgPSBNYXRoLmFicyhpbnRlcnZhbCk7XG5cdGlmICghaXNOYU4oaSkpIHtcblx0XHR0aGlzLmlkID0gbmV4dFVuaXF1ZUlkKCk7XG5cdFx0dGhpcy5pbnRlcnZhbCA9IE1hdGgubWF4KGksIDE2KTtcblx0XHR0aGlzLm1lbWJlcnMgPSBbXTtcblx0XHR0aGlzLm1vZGVscyA9IHt9O1xuXHRcdHRoaXMuYmxvY2tlZCA9IHtcblx0XHRcdGhlYWQ6IGZhbHNlLFxuXHRcdFx0Zm9vdDogZmFsc2Vcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHNlcXVlbmNlIGludGVydmFsLicpXG5cdH1cbn1cblxuZnVuY3Rpb24gU2VxdWVuY2VNb2RlbChzZXEsIHByb3AsIHN0b3JlKSB7XG5cdHZhciB0aGlzJDEgPSB0aGlzO1xuXG5cdHRoaXMuaGVhZCA9IFtdO1xuXHR0aGlzLmJvZHkgPSBbXTtcblx0dGhpcy5mb290ID0gW107XG5cblx0ZWFjaChzZXEubWVtYmVycywgZnVuY3Rpb24gKGlkLCBpbmRleCkge1xuXHRcdHZhciBlbGVtZW50ID0gc3RvcmUuZWxlbWVudHNbaWRdO1xuXHRcdGlmIChlbGVtZW50ICYmIGVsZW1lbnRbcHJvcF0pIHtcblx0XHRcdHRoaXMkMS5ib2R5LnB1c2goaW5kZXgpO1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKHRoaXMuYm9keS5sZW5ndGgpIHtcblx0XHRlYWNoKHNlcS5tZW1iZXJzLCBmdW5jdGlvbiAoaWQsIGluZGV4KSB7XG5cdFx0XHR2YXIgZWxlbWVudCA9IHN0b3JlLmVsZW1lbnRzW2lkXTtcblx0XHRcdGlmIChlbGVtZW50ICYmICFlbGVtZW50W3Byb3BdKSB7XG5cdFx0XHRcdGlmIChpbmRleCA8IHRoaXMkMS5ib2R5WzBdKSB7XG5cdFx0XHRcdFx0dGhpcyQxLmhlYWQucHVzaChpbmRleCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcyQxLmZvb3QucHVzaChpbmRleCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjdWUoc2VxLCBpLCBkaXJlY3Rpb24sIHByaXN0aW5lKSB7XG5cdHZhciB0aGlzJDEgPSB0aGlzO1xuXG5cdHZhciBibG9ja2VkID0gWydoZWFkJywgbnVsbCwgJ2Zvb3QnXVsxICsgZGlyZWN0aW9uXTtcblx0dmFyIG5leHRJZCA9IHNlcS5tZW1iZXJzW2kgKyBkaXJlY3Rpb25dO1xuXHR2YXIgbmV4dEVsZW1lbnQgPSB0aGlzLnN0b3JlLmVsZW1lbnRzW25leHRJZF07XG5cblx0c2VxLmJsb2NrZWRbYmxvY2tlZF0gPSB0cnVlO1xuXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdHNlcS5ibG9ja2VkW2Jsb2NrZWRdID0gZmFsc2U7XG5cdFx0aWYgKG5leHRFbGVtZW50KSB7XG5cdFx0XHRzZXF1ZW5jZS5jYWxsKHRoaXMkMSwgbmV4dEVsZW1lbnQsIHByaXN0aW5lKTtcblx0XHR9XG5cdH0sIHNlcS5pbnRlcnZhbCk7XG59XG5cbmZ1bmN0aW9uIHJldmVhbCh0YXJnZXQsIG9wdGlvbnMsIHN5bmNpbmcpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cdGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXHRpZiAoIHN5bmNpbmcgPT09IHZvaWQgMCApIHN5bmNpbmcgPSBmYWxzZTtcblxuXHR2YXIgY29udGFpbmVyQnVmZmVyID0gW107XG5cdHZhciBzZXF1ZW5jZSQkMTtcblx0dmFyIGludGVydmFsID0gb3B0aW9ucy5pbnRlcnZhbCB8fCBkZWZhdWx0cy5pbnRlcnZhbDtcblxuXHR0cnkge1xuXHRcdGlmIChpbnRlcnZhbCkge1xuXHRcdFx0c2VxdWVuY2UkJDEgPSBuZXcgU2VxdWVuY2UoaW50ZXJ2YWwpO1xuXHRcdH1cblxuXHRcdHZhciBub2RlcyA9ICQodGFyZ2V0KTtcblx0XHRpZiAoIW5vZGVzLmxlbmd0aCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJldmVhbCB0YXJnZXQuJylcblx0XHR9XG5cblx0XHR2YXIgZWxlbWVudHMgPSBub2Rlcy5yZWR1Y2UoZnVuY3Rpb24gKGVsZW1lbnRCdWZmZXIsIGVsZW1lbnROb2RlKSB7XG5cdFx0XHR2YXIgZWxlbWVudCA9IHt9O1xuXHRcdFx0dmFyIGV4aXN0aW5nSWQgPSBlbGVtZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3ItaWQnKTtcblxuXHRcdFx0aWYgKGV4aXN0aW5nSWQpIHtcblx0XHRcdFx0ZGVlcEFzc2lnbihlbGVtZW50LCB0aGlzJDEuc3RvcmUuZWxlbWVudHNbZXhpc3RpbmdJZF0pO1xuXG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBJbiBvcmRlciB0byBwcmV2ZW50IHByZXZpb3VzbHkgZ2VuZXJhdGVkIHN0eWxlc1xuXHRcdFx0XHQgKiBmcm9tIHRocm93aW5nIG9mZiB0aGUgbmV3IHN0eWxlcywgdGhlIHN0eWxlIHRhZ1xuXHRcdFx0XHQgKiBoYXMgdG8gYmUgcmV2ZXJ0ZWQgdG8gaXRzIHByZS1yZXZlYWwgc3RhdGUuXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRhcHBseVN0eWxlKGVsZW1lbnQubm9kZSwgZWxlbWVudC5zdHlsZXMuaW5saW5lLmNvbXB1dGVkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQuaWQgPSBuZXh0VW5pcXVlSWQoKTtcblx0XHRcdFx0ZWxlbWVudC5ub2RlID0gZWxlbWVudE5vZGU7XG5cdFx0XHRcdGVsZW1lbnQuc2VlbiA9IGZhbHNlO1xuXHRcdFx0XHRlbGVtZW50LnJldmVhbGVkID0gZmFsc2U7XG5cdFx0XHRcdGVsZW1lbnQudmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgY29uZmlnID0gZGVlcEFzc2lnbih7fSwgZWxlbWVudC5jb25maWcgfHwgdGhpcyQxLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuXHRcdFx0aWYgKCghY29uZmlnLm1vYmlsZSAmJiBpc01vYmlsZSgpKSB8fCAoIWNvbmZpZy5kZXNrdG9wICYmICFpc01vYmlsZSgpKSkge1xuXHRcdFx0XHRpZiAoZXhpc3RpbmdJZCkge1xuXHRcdFx0XHRcdGNsZWFuLmNhbGwodGhpcyQxLCBlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZWxlbWVudEJ1ZmZlciAvLyBza2lwIGVsZW1lbnRzIHRoYXQgYXJlIGRpc2FibGVkXG5cdFx0XHR9XG5cblx0XHRcdHZhciBjb250YWluZXJOb2RlID0gJChjb25maWcuY29udGFpbmVyKVswXTtcblx0XHRcdGlmICghY29udGFpbmVyTm9kZSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29udGFpbmVyLicpXG5cdFx0XHR9XG5cdFx0XHRpZiAoIWNvbnRhaW5lck5vZGUuY29udGFpbnMoZWxlbWVudE5vZGUpKSB7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50QnVmZmVyIC8vIHNraXAgZWxlbWVudHMgZm91bmQgb3V0c2lkZSB0aGUgY29udGFpbmVyXG5cdFx0XHR9XG5cblx0XHRcdHZhciBjb250YWluZXJJZDtcblx0XHRcdHtcblx0XHRcdFx0Y29udGFpbmVySWQgPSBnZXRDb250YWluZXJJZChcblx0XHRcdFx0XHRjb250YWluZXJOb2RlLFxuXHRcdFx0XHRcdGNvbnRhaW5lckJ1ZmZlcixcblx0XHRcdFx0XHR0aGlzJDEuc3RvcmUuY29udGFpbmVyc1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoY29udGFpbmVySWQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRjb250YWluZXJJZCA9IG5leHRVbmlxdWVJZCgpO1xuXHRcdFx0XHRcdGNvbnRhaW5lckJ1ZmZlci5wdXNoKHsgaWQ6IGNvbnRhaW5lcklkLCBub2RlOiBjb250YWluZXJOb2RlIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnQuY29uZmlnID0gY29uZmlnO1xuXHRcdFx0ZWxlbWVudC5jb250YWluZXJJZCA9IGNvbnRhaW5lcklkO1xuXHRcdFx0ZWxlbWVudC5zdHlsZXMgPSBzdHlsZShlbGVtZW50KTtcblxuXHRcdFx0aWYgKHNlcXVlbmNlJCQxKSB7XG5cdFx0XHRcdGVsZW1lbnQuc2VxdWVuY2UgPSB7XG5cdFx0XHRcdFx0aWQ6IHNlcXVlbmNlJCQxLmlkLFxuXHRcdFx0XHRcdGluZGV4OiBzZXF1ZW5jZSQkMS5tZW1iZXJzLmxlbmd0aFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRzZXF1ZW5jZSQkMS5tZW1iZXJzLnB1c2goZWxlbWVudC5pZCk7XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnRCdWZmZXIucHVzaChlbGVtZW50KTtcblx0XHRcdHJldHVybiBlbGVtZW50QnVmZmVyXG5cdFx0fSwgW10pO1xuXG5cdFx0LyoqXG5cdFx0ICogTW9kaWZ5aW5nIHRoZSBET00gdmlhIHNldEF0dHJpYnV0ZSBuZWVkcyB0byBiZSBoYW5kbGVkXG5cdFx0ICogc2VwYXJhdGVseSBmcm9tIHJlYWRpbmcgY29tcHV0ZWQgc3R5bGVzIGluIHRoZSBtYXAgYWJvdmVcblx0XHQgKiBmb3IgdGhlIGJyb3dzZXIgdG8gYmF0Y2ggRE9NIGNoYW5nZXMgKGxpbWl0aW5nIHJlZmxvd3MpXG5cdFx0ICovXG5cdFx0ZWFjaChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdHRoaXMkMS5zdG9yZS5lbGVtZW50c1tlbGVtZW50LmlkXSA9IGVsZW1lbnQ7XG5cdFx0XHRlbGVtZW50Lm5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXNyLWlkJywgZWxlbWVudC5pZCk7XG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gbG9nZ2VyLmNhbGwodGhpcywgJ1JldmVhbCBmYWlsZWQuJywgZS5tZXNzYWdlKVxuXHR9XG5cblx0LyoqXG5cdCAqIE5vdyB0aGF0IGVsZW1lbnQgc2V0LXVwIGlzIGNvbXBsZXRlLi4uXG5cdCAqIExldOKAmXMgY29tbWl0IGFueSBjb250YWluZXIgYW5kIHNlcXVlbmNlIGRhdGEgd2UgaGF2ZSB0byB0aGUgc3RvcmUuXG5cdCAqL1xuXHRlYWNoKGNvbnRhaW5lckJ1ZmZlciwgZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuXHRcdHRoaXMkMS5zdG9yZS5jb250YWluZXJzW2NvbnRhaW5lci5pZF0gPSB7XG5cdFx0XHRpZDogY29udGFpbmVyLmlkLFxuXHRcdFx0bm9kZTogY29udGFpbmVyLm5vZGVcblx0XHR9O1xuXHR9KTtcblx0aWYgKHNlcXVlbmNlJCQxKSB7XG5cdFx0dGhpcy5zdG9yZS5zZXF1ZW5jZXNbc2VxdWVuY2UkJDEuaWRdID0gc2VxdWVuY2UkJDE7XG5cdH1cblxuXHQvKipcblx0ICogSWYgcmV2ZWFsIHdhc24ndCBpbnZva2VkIGJ5IHN5bmMsIHdlIHdhbnQgdG9cblx0ICogbWFrZSBzdXJlIHRvIGFkZCB0aGlzIGNhbGwgdG8gdGhlIGhpc3RvcnkuXG5cdCAqL1xuXHRpZiAoc3luY2luZyAhPT0gdHJ1ZSkge1xuXHRcdHRoaXMuc3RvcmUuaGlzdG9yeS5wdXNoKHsgdGFyZ2V0OiB0YXJnZXQsIG9wdGlvbnM6IG9wdGlvbnMgfSk7XG5cblx0XHQvKipcblx0XHQgKiBQdXNoIGluaXRpYWxpemF0aW9uIHRvIHRoZSBldmVudCBxdWV1ZSwgZ2l2aW5nXG5cdFx0ICogbXVsdGlwbGUgcmV2ZWFsIGNhbGxzIHRpbWUgdG8gYmUgaW50ZXJwcmV0ZWQuXG5cdFx0ICovXG5cdFx0aWYgKHRoaXMuaW5pdFRpbWVvdXQpIHtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5pbml0VGltZW91dCk7XG5cdFx0fVxuXHRcdHRoaXMuaW5pdFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChpbml0aWFsaXplLmJpbmQodGhpcyksIDApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldENvbnRhaW5lcklkKG5vZGUpIHtcblx0dmFyIGNvbGxlY3Rpb25zID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuXHR3aGlsZSAoIGxlbi0tID4gMCApIGNvbGxlY3Rpb25zWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG5cdHZhciBpZCA9IG51bGw7XG5cdGVhY2goY29sbGVjdGlvbnMsIGZ1bmN0aW9uIChjb2xsZWN0aW9uKSB7XG5cdFx0ZWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cdFx0XHRpZiAoaWQgPT09IG51bGwgJiYgY29udGFpbmVyLm5vZGUgPT09IG5vZGUpIHtcblx0XHRcdFx0aWQgPSBjb250YWluZXIuaWQ7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXHRyZXR1cm4gaWRcbn1cblxuLyoqXG4gKiBSZS1ydW5zIHRoZSByZXZlYWwgbWV0aG9kIGZvciBlYWNoIHJlY29yZCBzdG9yZWQgaW4gaGlzdG9yeSxcbiAqIGZvciBjYXB0dXJpbmcgbmV3IGNvbnRlbnQgYXN5bmNocm9ub3VzbHkgbG9hZGVkIGludG8gdGhlIERPTS5cbiAqL1xuZnVuY3Rpb24gc3luYygpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cblx0ZWFjaCh0aGlzLnN0b3JlLmhpc3RvcnksIGZ1bmN0aW9uIChyZWNvcmQpIHtcblx0XHRyZXZlYWwuY2FsbCh0aGlzJDEsIHJlY29yZC50YXJnZXQsIHJlY29yZC5vcHRpb25zLCB0cnVlKTtcblx0fSk7XG5cblx0aW5pdGlhbGl6ZS5jYWxsKHRoaXMpO1xufVxuXG52YXIgcG9seWZpbGwgPSBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKHggPiAwKSAtICh4IDwgMCkgfHwgK3g7IH07XG52YXIgbWF0aFNpZ24gPSBNYXRoLnNpZ24gfHwgcG9seWZpbGw7XG5cbmZ1bmN0aW9uIGdldEdlb21ldHJ5KHRhcmdldCwgaXNDb250YWluZXIpIHtcblx0LyoqXG5cdCAqIFdlIHdhbnQgdG8gaWdub3JlIHBhZGRpbmcgYW5kIHNjcm9sbGJhcnMgZm9yIGNvbnRhaW5lciBlbGVtZW50cy5cblx0ICogTW9yZSBpbmZvcm1hdGlvbiBoZXJlOiBodHRwczovL2dvby5nbC92T1pwYnpcblx0ICovXG5cdHZhciBoZWlnaHQgPSBpc0NvbnRhaW5lciA/IHRhcmdldC5ub2RlLmNsaWVudEhlaWdodCA6IHRhcmdldC5ub2RlLm9mZnNldEhlaWdodDtcblx0dmFyIHdpZHRoID0gaXNDb250YWluZXIgPyB0YXJnZXQubm9kZS5jbGllbnRXaWR0aCA6IHRhcmdldC5ub2RlLm9mZnNldFdpZHRoO1xuXG5cdHZhciBvZmZzZXRUb3AgPSAwO1xuXHR2YXIgb2Zmc2V0TGVmdCA9IDA7XG5cdHZhciBub2RlID0gdGFyZ2V0Lm5vZGU7XG5cblx0ZG8ge1xuXHRcdGlmICghaXNOYU4obm9kZS5vZmZzZXRUb3ApKSB7XG5cdFx0XHRvZmZzZXRUb3AgKz0gbm9kZS5vZmZzZXRUb3A7XG5cdFx0fVxuXHRcdGlmICghaXNOYU4obm9kZS5vZmZzZXRMZWZ0KSkge1xuXHRcdFx0b2Zmc2V0TGVmdCArPSBub2RlLm9mZnNldExlZnQ7XG5cdFx0fVxuXHRcdG5vZGUgPSBub2RlLm9mZnNldFBhcmVudDtcblx0fSB3aGlsZSAobm9kZSlcblxuXHRyZXR1cm4ge1xuXHRcdGJvdW5kczoge1xuXHRcdFx0dG9wOiBvZmZzZXRUb3AsXG5cdFx0XHRyaWdodDogb2Zmc2V0TGVmdCArIHdpZHRoLFxuXHRcdFx0Ym90dG9tOiBvZmZzZXRUb3AgKyBoZWlnaHQsXG5cdFx0XHRsZWZ0OiBvZmZzZXRMZWZ0XG5cdFx0fSxcblx0XHRoZWlnaHQ6IGhlaWdodCxcblx0XHR3aWR0aDogd2lkdGhcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxlZChjb250YWluZXIpIHtcblx0dmFyIHRvcCwgbGVmdDtcblx0aWYgKGNvbnRhaW5lci5ub2RlID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcblx0XHR0b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdFx0bGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldDtcblx0fSBlbHNlIHtcblx0XHR0b3AgPSBjb250YWluZXIubm9kZS5zY3JvbGxUb3A7XG5cdFx0bGVmdCA9IGNvbnRhaW5lci5ub2RlLnNjcm9sbExlZnQ7XG5cdH1cblx0cmV0dXJuIHsgdG9wOiB0b3AsIGxlZnQ6IGxlZnQgfVxufVxuXG5mdW5jdGlvbiBpc0VsZW1lbnRWaXNpYmxlKGVsZW1lbnQpIHtcblx0aWYgKCBlbGVtZW50ID09PSB2b2lkIDAgKSBlbGVtZW50ID0ge307XG5cblx0dmFyIGNvbnRhaW5lciA9IHRoaXMuc3RvcmUuY29udGFpbmVyc1tlbGVtZW50LmNvbnRhaW5lcklkXTtcblx0aWYgKCFjb250YWluZXIpIHsgcmV0dXJuIH1cblxuXHR2YXIgdmlld0ZhY3RvciA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGVsZW1lbnQuY29uZmlnLnZpZXdGYWN0b3IpKTtcblx0dmFyIHZpZXdPZmZzZXQgPSBlbGVtZW50LmNvbmZpZy52aWV3T2Zmc2V0O1xuXG5cdHZhciBlbGVtZW50Qm91bmRzID0ge1xuXHRcdHRvcDogZWxlbWVudC5nZW9tZXRyeS5ib3VuZHMudG9wICsgZWxlbWVudC5nZW9tZXRyeS5oZWlnaHQgKiB2aWV3RmFjdG9yLFxuXHRcdHJpZ2h0OiBlbGVtZW50Lmdlb21ldHJ5LmJvdW5kcy5yaWdodCAtIGVsZW1lbnQuZ2VvbWV0cnkud2lkdGggKiB2aWV3RmFjdG9yLFxuXHRcdGJvdHRvbTogZWxlbWVudC5nZW9tZXRyeS5ib3VuZHMuYm90dG9tIC0gZWxlbWVudC5nZW9tZXRyeS5oZWlnaHQgKiB2aWV3RmFjdG9yLFxuXHRcdGxlZnQ6IGVsZW1lbnQuZ2VvbWV0cnkuYm91bmRzLmxlZnQgKyBlbGVtZW50Lmdlb21ldHJ5LndpZHRoICogdmlld0ZhY3RvclxuXHR9O1xuXG5cdHZhciBjb250YWluZXJCb3VuZHMgPSB7XG5cdFx0dG9wOiBjb250YWluZXIuZ2VvbWV0cnkuYm91bmRzLnRvcCArIGNvbnRhaW5lci5zY3JvbGwudG9wICsgdmlld09mZnNldC50b3AsXG5cdFx0cmlnaHQ6IGNvbnRhaW5lci5nZW9tZXRyeS5ib3VuZHMucmlnaHQgKyBjb250YWluZXIuc2Nyb2xsLmxlZnQgLSB2aWV3T2Zmc2V0LnJpZ2h0LFxuXHRcdGJvdHRvbTpcblx0XHRcdGNvbnRhaW5lci5nZW9tZXRyeS5ib3VuZHMuYm90dG9tICsgY29udGFpbmVyLnNjcm9sbC50b3AgLSB2aWV3T2Zmc2V0LmJvdHRvbSxcblx0XHRsZWZ0OiBjb250YWluZXIuZ2VvbWV0cnkuYm91bmRzLmxlZnQgKyBjb250YWluZXIuc2Nyb2xsLmxlZnQgKyB2aWV3T2Zmc2V0LmxlZnRcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdChlbGVtZW50Qm91bmRzLnRvcCA8IGNvbnRhaW5lckJvdW5kcy5ib3R0b20gJiZcblx0XHRcdGVsZW1lbnRCb3VuZHMucmlnaHQgPiBjb250YWluZXJCb3VuZHMubGVmdCAmJlxuXHRcdFx0ZWxlbWVudEJvdW5kcy5ib3R0b20gPiBjb250YWluZXJCb3VuZHMudG9wICYmXG5cdFx0XHRlbGVtZW50Qm91bmRzLmxlZnQgPCBjb250YWluZXJCb3VuZHMucmlnaHQpIHx8XG5cdFx0ZWxlbWVudC5zdHlsZXMucG9zaXRpb24gPT09ICdmaXhlZCdcblx0KVxufVxuXG5mdW5jdGlvbiBkZWxlZ2F0ZShcblx0ZXZlbnQsXG5cdGVsZW1lbnRzXG4pIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cdGlmICggZXZlbnQgPT09IHZvaWQgMCApIGV2ZW50ID0geyB0eXBlOiAnaW5pdCcgfTtcblx0aWYgKCBlbGVtZW50cyA9PT0gdm9pZCAwICkgZWxlbWVudHMgPSB0aGlzLnN0b3JlLmVsZW1lbnRzO1xuXG5cdHJhZihmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHN0YWxlID0gZXZlbnQudHlwZSA9PT0gJ2luaXQnIHx8IGV2ZW50LnR5cGUgPT09ICdyZXNpemUnO1xuXG5cdFx0ZWFjaCh0aGlzJDEuc3RvcmUuY29udGFpbmVycywgZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuXHRcdFx0aWYgKHN0YWxlKSB7XG5cdFx0XHRcdGNvbnRhaW5lci5nZW9tZXRyeSA9IGdldEdlb21ldHJ5LmNhbGwodGhpcyQxLCBjb250YWluZXIsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHNjcm9sbCA9IGdldFNjcm9sbGVkLmNhbGwodGhpcyQxLCBjb250YWluZXIpO1xuXHRcdFx0aWYgKGNvbnRhaW5lci5zY3JvbGwpIHtcblx0XHRcdFx0Y29udGFpbmVyLmRpcmVjdGlvbiA9IHtcblx0XHRcdFx0XHR4OiBtYXRoU2lnbihzY3JvbGwubGVmdCAtIGNvbnRhaW5lci5zY3JvbGwubGVmdCksXG5cdFx0XHRcdFx0eTogbWF0aFNpZ24oc2Nyb2xsLnRvcCAtIGNvbnRhaW5lci5zY3JvbGwudG9wKVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Y29udGFpbmVyLnNjcm9sbCA9IHNjcm9sbDtcblx0XHR9KTtcblxuXHRcdC8qKlxuXHRcdCAqIER1ZSB0byBob3cgdGhlIHNlcXVlbmNlciBpcyBpbXBsZW1lbnRlZCwgaXTigJlzXG5cdFx0ICogaW1wb3J0YW50IHRoYXQgd2UgdXBkYXRlIHRoZSBzdGF0ZSBvZiBhbGxcblx0XHQgKiBlbGVtZW50cywgYmVmb3JlIGFueSBhbmltYXRpb24gbG9naWMgaXNcblx0XHQgKiBldmFsdWF0ZWQgKGluIHRoZSBzZWNvbmQgbG9vcCBiZWxvdykuXG5cdFx0ICovXG5cdFx0ZWFjaChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdGlmIChzdGFsZSB8fCBlbGVtZW50Lmdlb21ldHJ5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZWxlbWVudC5nZW9tZXRyeSA9IGdldEdlb21ldHJ5LmNhbGwodGhpcyQxLCBlbGVtZW50KTtcblx0XHRcdH1cblx0XHRcdGVsZW1lbnQudmlzaWJsZSA9IGlzRWxlbWVudFZpc2libGUuY2FsbCh0aGlzJDEsIGVsZW1lbnQpO1xuXHRcdH0pO1xuXG5cdFx0ZWFjaChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdGlmIChlbGVtZW50LnNlcXVlbmNlKSB7XG5cdFx0XHRcdHNlcXVlbmNlLmNhbGwodGhpcyQxLCBlbGVtZW50KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFuaW1hdGUuY2FsbCh0aGlzJDEsIGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcyQxLnByaXN0aW5lID0gZmFsc2U7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBpc1RyYW5zZm9ybVN1cHBvcnRlZCgpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXHRyZXR1cm4gJ3RyYW5zZm9ybScgaW4gc3R5bGUgfHwgJ1dlYmtpdFRyYW5zZm9ybScgaW4gc3R5bGVcbn1cblxuZnVuY3Rpb24gaXNUcmFuc2l0aW9uU3VwcG9ydGVkKCkge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cdHJldHVybiAndHJhbnNpdGlvbicgaW4gc3R5bGUgfHwgJ1dlYmtpdFRyYW5zaXRpb24nIGluIHN0eWxlXG59XG5cbnZhciB2ZXJzaW9uID0gXCI0LjAuOVwiO1xuXG52YXIgYm91bmREZWxlZ2F0ZTtcbnZhciBib3VuZERlc3Ryb3k7XG52YXIgYm91bmRSZXZlYWw7XG52YXIgYm91bmRDbGVhbjtcbnZhciBib3VuZFN5bmM7XG52YXIgY29uZmlnO1xudmFyIGRlYnVnO1xudmFyIGluc3RhbmNlO1xuXG5mdW5jdGlvbiBTY3JvbGxSZXZlYWwob3B0aW9ucykge1xuXHRpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuXHR2YXIgaW52b2tlZFdpdGhvdXROZXcgPVxuXHRcdHR5cGVvZiB0aGlzID09PSAndW5kZWZpbmVkJyB8fFxuXHRcdE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSAhPT0gU2Nyb2xsUmV2ZWFsLnByb3RvdHlwZTtcblxuXHRpZiAoaW52b2tlZFdpdGhvdXROZXcpIHtcblx0XHRyZXR1cm4gbmV3IFNjcm9sbFJldmVhbChvcHRpb25zKVxuXHR9XG5cblx0aWYgKCFTY3JvbGxSZXZlYWwuaXNTdXBwb3J0ZWQoKSkge1xuXHRcdGxvZ2dlci5jYWxsKHRoaXMsICdJbnN0YW50aWF0aW9uIGZhaWxlZC4nLCAnVGhpcyBicm93c2VyIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG5cdFx0cmV0dXJuIG1vdW50LmZhaWx1cmUoKVxuXHR9XG5cblx0dmFyIGJ1ZmZlcjtcblx0dHJ5IHtcblx0XHRidWZmZXIgPSBjb25maWdcblx0XHRcdD8gZGVlcEFzc2lnbih7fSwgY29uZmlnLCBvcHRpb25zKVxuXHRcdFx0OiBkZWVwQXNzaWduKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRsb2dnZXIuY2FsbCh0aGlzLCAnSW52YWxpZCBjb25maWd1cmF0aW9uLicsIGUubWVzc2FnZSk7XG5cdFx0cmV0dXJuIG1vdW50LmZhaWx1cmUoKVxuXHR9XG5cblx0dHJ5IHtcblx0XHR2YXIgY29udGFpbmVyID0gJChidWZmZXIuY29udGFpbmVyKVswXTtcblx0XHRpZiAoIWNvbnRhaW5lcikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvbnRhaW5lci4nKVxuXHRcdH1cblx0fSBjYXRjaCAoZSkge1xuXHRcdGxvZ2dlci5jYWxsKHRoaXMsIGUubWVzc2FnZSk7XG5cdFx0cmV0dXJuIG1vdW50LmZhaWx1cmUoKVxuXHR9XG5cblx0Y29uZmlnID0gYnVmZmVyO1xuXG5cdGlmICgoIWNvbmZpZy5tb2JpbGUgJiYgaXNNb2JpbGUoKSkgfHwgKCFjb25maWcuZGVza3RvcCAmJiAhaXNNb2JpbGUoKSkpIHtcblx0XHRsb2dnZXIuY2FsbChcblx0XHRcdHRoaXMsXG5cdFx0XHQnVGhpcyBkZXZpY2UgaXMgZGlzYWJsZWQuJyxcblx0XHRcdChcImRlc2t0b3A6IFwiICsgKGNvbmZpZy5kZXNrdG9wKSksXG5cdFx0XHQoXCJtb2JpbGU6IFwiICsgKGNvbmZpZy5tb2JpbGUpKVxuXHRcdCk7XG5cdFx0cmV0dXJuIG1vdW50LmZhaWx1cmUoKVxuXHR9XG5cblx0bW91bnQuc3VjY2VzcygpO1xuXG5cdHRoaXMuc3RvcmUgPSB7XG5cdFx0Y29udGFpbmVyczoge30sXG5cdFx0ZWxlbWVudHM6IHt9LFxuXHRcdGhpc3Rvcnk6IFtdLFxuXHRcdHNlcXVlbmNlczoge31cblx0fTtcblxuXHR0aGlzLnByaXN0aW5lID0gdHJ1ZTtcblxuXHRib3VuZERlbGVnYXRlID0gYm91bmREZWxlZ2F0ZSB8fCBkZWxlZ2F0ZS5iaW5kKHRoaXMpO1xuXHRib3VuZERlc3Ryb3kgPSBib3VuZERlc3Ryb3kgfHwgZGVzdHJveS5iaW5kKHRoaXMpO1xuXHRib3VuZFJldmVhbCA9IGJvdW5kUmV2ZWFsIHx8IHJldmVhbC5iaW5kKHRoaXMpO1xuXHRib3VuZENsZWFuID0gYm91bmRDbGVhbiB8fCBjbGVhbi5iaW5kKHRoaXMpO1xuXHRib3VuZFN5bmMgPSBib3VuZFN5bmMgfHwgc3luYy5iaW5kKHRoaXMpO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnZGVsZWdhdGUnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm91bmREZWxlZ2F0ZTsgfSB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdkZXN0cm95JywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJvdW5kRGVzdHJveTsgfSB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdyZXZlYWwnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm91bmRSZXZlYWw7IH0gfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnY2xlYW4nLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm91bmRDbGVhbjsgfSB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzeW5jJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJvdW5kU3luYzsgfSB9KTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2RlZmF1bHRzJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbmZpZzsgfSB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd2ZXJzaW9uJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZlcnNpb247IH0gfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbm9vcCcsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSB9KTtcblxuXHRyZXR1cm4gaW5zdGFuY2UgPyBpbnN0YW5jZSA6IChpbnN0YW5jZSA9IHRoaXMpXG59XG5cblNjcm9sbFJldmVhbC5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlzVHJhbnNmb3JtU3VwcG9ydGVkKCkgJiYgaXNUcmFuc2l0aW9uU3VwcG9ydGVkKCk7IH07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY3JvbGxSZXZlYWwsICdkZWJ1ZycsIHtcblx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZWJ1ZyB8fCBmYWxzZTsgfSxcblx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIChkZWJ1ZyA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nID8gdmFsdWUgOiBkZWJ1Zyk7IH1cbn0pO1xuXG5TY3JvbGxSZXZlYWwoKTtcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsUmV2ZWFsO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiEgQGxpY2Vuc2UgVGVhbGlnaHQgdjAuMy42XG5cblx0Q29weXJpZ2h0IDIwMTggRmlzc3Npb24gTExDLlxuXG5cdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0U09GVFdBUkUuXG5cbiovXG5pbXBvcnQgaXNEb21Ob2RlIGZyb20gJ2lzLWRvbS1ub2RlJztcbmltcG9ydCBpc0RvbU5vZGVMaXN0IGZyb20gJ2lzLWRvbS1ub2RlLWxpc3QnO1xuXG5mdW5jdGlvbiB0ZWFsaWdodCh0YXJnZXQsIGNvbnRleHQpIHtcbiAgaWYgKCBjb250ZXh0ID09PSB2b2lkIDAgKSBjb250ZXh0ID0gZG9jdW1lbnQ7XG5cbiAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7IHJldHVybiB0YXJnZXQuZmlsdGVyKGlzRG9tTm9kZSk7IH1cbiAgaWYgKGlzRG9tTm9kZSh0YXJnZXQpKSB7IHJldHVybiBbdGFyZ2V0XTsgfVxuICBpZiAoaXNEb21Ob2RlTGlzdCh0YXJnZXQpKSB7IHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXQpOyB9XG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBxdWVyeSA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXQpO1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHF1ZXJ5KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0ZWFsaWdodDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgU2Nyb2xsUmV2ZWFsIGZyb20gJ3Njcm9sbHJldmVhbCc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG4vLyBpbXBvcnQgc2h5RW1icmFjZSBmcm9tICcuL2Fzc2V0cy9zaHktZW1icmFjZS5KUEcnO1xuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtaWNvbicpO1xuY29uc3QgbmF2bGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZsaXN0Jyk7XG5cbmNvbnN0IHNyID0gU2Nyb2xsUmV2ZWFsKHtcbiAgZGlzdGFuY2U6ICc3MHB4JyxcbiAgZHVyYXRpb246IDI3MDAsXG4gIHJlc2V0OiB0cnVlLFxufSk7XG5cbm1lbnUub25jbGljayA9ICgpID0+IHtcbiAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdieC14Jyk7XG4gIG5hdmxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xufTtcblxuc3IucmV2ZWFsKCcubGVmdC1oZXJvJywgeyBkZWxheTogMjAwLCBvcmlnaW46ICdib3R0b20nIH0pO1xuc3IucmV2ZWFsKCcucmlnaHQtaGVybycsIHsgZGVsYXk6IDM1MCwgb3JpZ2luOiAndG9wJyB9KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lZGlhLWVsZW1lbnQgaW1nJykuZm9yRWFjaCgocGljKSA9PiB7XG4gIHBpYy5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1idHMnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtYnRzIGltZycpLnNyYyA9IHBpYy5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICB9O1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1idHMgc3BhbicpLm9uY2xpY2sgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1idHMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==