"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var globals_1 = require("@jest/globals");
var crawl_1 = require("./crawl");
(0, globals_1.test)('normalizeURL protocol', function () {
    var input = 'https://blog.boot.dev/path';
    var actual = (0, crawl_1.normalizeURL)(input);
    var expected = 'blog.boot.dev/path';
    (0, globals_1.expect)(actual).toEqual(expected);
});
(0, globals_1.test)('normalizeURL slash', function () {
    var input = 'https://blog.boot.dev/path/';
    var actual = (0, crawl_1.normalizeURL)(input);
    var expected = 'blog.boot.dev/path';
    (0, globals_1.expect)(actual).toEqual(expected);
});
(0, globals_1.test)('normalizeURL capitals', function () {
    var input = 'https://BLOG.boot.dev/path';
    var actual = (0, crawl_1.normalizeURL)(input);
    var expected = 'blog.boot.dev/path';
    (0, globals_1.expect)(actual).toEqual(expected);
});
(0, globals_1.test)('normalizeURL http', function () {
    var input = 'http://BLOG.boot.dev/path';
    var actual = (0, crawl_1.normalizeURL)(input);
    var expected = 'blog.boot.dev/path';
    (0, globals_1.expect)(actual).toEqual(expected);
});
