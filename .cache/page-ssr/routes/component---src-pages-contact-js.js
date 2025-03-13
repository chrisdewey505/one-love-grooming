"use strict";
exports.id = 209;
exports.ids = [209];
exports.modules = {

/***/ 2612:
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
;// ./src/images/instagram.png
/* harmony default export */ const instagram = ("/static/instagram-90511daa00c18028bf2d4f192526127a.png");
// EXTERNAL MODULE: ./src/images/yelp.png
var yelp = __webpack_require__(9064);
;// ./src/components/Navbar.js
// Adjust path to your logo; use as a placeholder
// Instagram icon
// Yelp icon
function Navbar(){return/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("nav",{className:"bg-pastel-lavender max-w-xl mx-auto flex items-center justify-between py-4 px-4 shadow-lg border-b-2 border-white/20 rounded-b-lg"},/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("a",{href:"/",className:"flex items-center space-x-2 mr-8"},/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("img",{src:logo4,alt:"One Love Logo",className:"h-8 w-auto"}),/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("h1",{className:"text-2xl sm:text-3xl font-cursive text-gray-900 hover:text-black transition-colors",style:{textShadow:"1px 1px 2px rgba(0, 0, 0, 0.2)"}},"One",/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("u",null,"L"),"ove")),/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("div",{className:"flex items-center space-x-6"},/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("a",{href:"https://www.instagram.com/onelovegrooming/",target:"_blank",rel:"noopener noreferrer",className:"text-gray-900 hover:text-pastel-lavender transition-colors"},/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("img",{src:instagram,alt:"Instagram",className:"w-10 h-7"})," "),/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("a",{href:"https://www.yelp.com/biz/one-love-mobile-grooming-huntington-beach?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)",target:"_blank",rel:"noopener noreferrer",className:"text-gray-900 hover:text-pastel-lavender transition-colors mr-1"},/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("img",{src:yelp/* default */.A,alt:"Yelp",className:"w-28 h-12"})," "),/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("a",{href:"/services",className:"text-sm sm:text-base text-gray-900 hover:text-pastel-lavender transition-colors"},"Services"),/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("a",{href:"/about",className:"text-sm sm:text-base text-gray-900 hover:text-pastel-lavender transition-colors"},"About"),/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("a",{href:"/contact",className:"text-sm sm:text-base text-gray-900 hover:text-pastel-lavender transition-colors"},"Contact"),/*#__PURE__*/external_C_Users_$RareWaffle_OneDrive_Desktop_one_love_grooming_node_modules_react_index_js_default().createElement("a",{href:"/quote",className:"text-sm sm:text-base text-gray-900 hover:text-pastel-lavender transition-colors"},"Quote")));}

/***/ }),

/***/ 5351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2594);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2612);
function Contact(){const{0:formData,1:setFormData}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({name:"",breed:"",age:"",weight:"",address:"",services:"",availability:""});const handleChange=e=>{const{name,value}=e.target;setFormData(prevData=>({...prevData,[name]:value}));};const handleSubmit=e=>{e.preventDefault();const{name,breed,age,weight,address,services,availability}=formData;const message=`
      New Contact Form Submission:
      Name: ${name}
      Breed: ${breed}
      Age: ${age}
      Estimated Weight: ${weight}
      Address (Local Main Cross Streets): ${address}
      Services Requested: ${services}
      Best Times of Availability: ${availability}
    `.trim();// Use mailto to send the message to the T-Mobile SMS gateway
const smsEmail="5097680499@tmomail.net";// T-Mobile SMS gateway
window.location.href=`mailto:${smsEmail}?subject=Contact%20Form%20Submission&body=${encodeURIComponent(message)}`;};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"min-h-screen flex flex-col bg-pastel-lavender text-white overflow-y-auto"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"py-8 px-4 sm:px-6 max-w-md mx-auto text-pastel-lavender"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",{className:"text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900"},"Contact Us"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form",{onSubmit:handleSubmit,className:"space-y-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{htmlFor:"name",className:"block mb-2 text-gray-900 font-semibold"},"Name"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{type:"text",id:"name",name:"name",value:formData.name,onChange:handleChange,className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white",required:true})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{htmlFor:"breed",className:"block mb-2 text-gray-900 font-semibold"},"Breed"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{type:"text",id:"breed",name:"breed",value:formData.breed,onChange:handleChange,className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white",required:true})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{htmlFor:"age",className:"block mb-2 text-gray-900 font-semibold"},"Age (Years)"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{type:"number",id:"age",name:"age",value:formData.age,onChange:handleChange,className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white",required:true})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{htmlFor:"weight",className:"block mb-2 text-gray-900 font-semibold"},"Estimated Weight (lbs)"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{type:"number",id:"weight",name:"weight",value:formData.weight,onChange:handleChange,className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white",required:true})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{htmlFor:"address",className:"block mb-2 text-gray-900 font-semibold"},"Address (Local Main Cross Streets)"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{type:"text",id:"address",name:"address",value:formData.address,onChange:handleChange,className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white",required:true})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{htmlFor:"services",className:"block mb-2 text-gray-900 font-semibold"},"Services Requested"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea",{id:"services",name:"services",value:formData.services,onChange:handleChange,className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white",rows:"3",required:true})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{htmlFor:"availability",className:"block mb-2 text-gray-900 font-semibold"},"Best Times of Availability (8 AM - 3 PM, Monday-Sunday)"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{type:"text",id:"availability",name:"availability",value:formData.availability,onChange:handleChange,className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-lavender text-gray-900 bg-white",placeholder:"e.g., Monday 10 AM - 12 PM",required:true})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{type:"submit",className:"w-full bg-pastel-lavender text-gray-900 font-semibold py-2 sm:py-3 px-4 rounded-lg shadow-md hover:bg-gray-200 transition"},"Send"))));}

/***/ }),

/***/ 9064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/yelp-7b0e9948cce7fd5f93a5ad5ec1d0e990.png");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-contact-js.js.map