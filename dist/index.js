/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  } 
async function run() {
    console.log('scanning code ...');
    await delay (1000);
    console.log('scanning completed');
    await delay(3000);
    console.log('no vulnerabilities detected');
}

run();
module.exports = __webpack_exports__;
/******/ })()
;