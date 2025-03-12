"use strict";
exports.id = 209;
exports.ids = [209];
exports.modules = {

/***/ 5351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2594);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9570);
function Contact(){const{0:name,1:setName}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');const{0:email,1:setEmail}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');const{0:message,1:setMessage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');const handleSubmit=e=>{e.preventDefault();alert('Message sent! We’ll respond soon.');};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"min-h-screen flex flex-col"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"py-16 px-6 max-w-md mx-auto"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",{className:"text-5xl font-bold mb-8 text-center text-gray-800"},"Contact Us"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form",{onSubmit:handleSubmit,className:"space-y-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{htmlFor:"name",className:"block mb-2 text-gray-800 font-semibold"},"Name"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{type:"text",id:"name",value:name,onChange:e=>setName(e.target.value),className:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300",required:true})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{htmlFor:"email",className:"block mb-2 text-gray-800 font-semibold"},"Email"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{type:"email",id:"email",value:email,onChange:e=>setEmail(e.target.value),className:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300",required:true})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{htmlFor:"message",className:"block mb-2 text-gray-800 font-semibold"},"Message"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea",{id:"message",value:message,onChange:e=>setMessage(e.target.value),className:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300",rows:"4",required:true})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{type:"submit",className:"w-full bg-gray-300 text-gray-800 font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-400"},"Send Message"))));}

/***/ }),

/***/ 9570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "C:\\Users\\$RareWaffle\\OneDrive\\Desktop\\one-love-grooming\\node_modules\\react\\index.js"
var external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_ = __webpack_require__(2594);
var external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_);
;// ./src/images/logo4.png
/* harmony default export */ const logo4 = ("/static/logo4-44b12bf2cf38f07f278c072ca663369f.png");
;// ./src/components/Navbar.js
// Adjust path to your logo
function Navbar(){return/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("nav",{className:"bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 py-6 px-6 shadow-md"},/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("div",{className:"max-w-6xl mx-auto flex items-center justify-start"},/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("div",{className:"relative group"},/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("a",{href:"/",title:"Go to Home Page"},/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("img",{src:logo4,alt:"OG Grooming Logo",className:"h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"})),/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("div",{className:"absolute top-full left-0 w-48 hidden group-hover:block bg-white p-4 shadow-lg z-50 border border-gray-300 fade-in"},/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("div",{className:"flex flex-col space-y-3"},/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("a",{href:"/services",className:"block w-full py-2 px-4 bg-gray-100 text-gray-800 rounded-full text-center font-semibold hover:bg-gray-200 transition-colors"},"Services"),/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("a",{href:"/about",className:"block w-full py-2 px-4 bg-gray-100 text-gray-800 rounded-full text-center font-semibold hover:bg-gray-200 transition-colors"},"About"),/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("a",{href:"/contact",className:"block w-full py-2 px-4 bg-gray-100 text-gray-800 rounded-full text-center font-semibold hover:bg-gray-200 transition-colors"},"Contact"),/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("a",{href:"/quote",className:"block w-full py-2 px-4 bg-gray-100 text-gray-800 rounded-full text-center font-semibold hover:bg-gray-200 transition-colors"},"Quote"))))));}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-contact-js.js.map