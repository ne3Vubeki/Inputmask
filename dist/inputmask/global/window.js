/*!
* global/window.js
* https://github.com/ne3Vubeki/Inputmask
* Copyright (c) 2010 - 2020 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.10-beta.0
*/

if (typeof define === "function" && define.amd) define(function() {
    return typeof window !== "undefined" ? window : new (eval("require('jsdom').JSDOM"))("").window;
}); else if (typeof exports === "object") module.exports = typeof window !== "undefined" ? window : new (eval("require('jsdom').JSDOM"))("").window;