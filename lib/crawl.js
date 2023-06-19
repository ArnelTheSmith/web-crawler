"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeURL = void 0;
var normalizeURL = function (url) {
    var myURL = new URL(url);
    var fullPath = "".concat(myURL.host).concat(myURL.pathname);
    if (fullPath.length > 0 && fullPath.slice(-1) === '/') {
        fullPath = fullPath.slice(0, -1);
    }
    return fullPath;
};
exports.normalizeURL = normalizeURL;
module.exports = {
    normalizeURL: exports.normalizeURL
};
