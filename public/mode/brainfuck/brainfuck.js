'use strict';(function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)})(function(a){var d="><+-.,[]".split("");a.defineMode("brainfuck",function(){return{startState:function(){return{commentLine:!1,left:0,right:0,commentLoop:!1}},token:function(a,c){if(a.eatSpace())return null;a.sol()&&(c.commentLine=!1);var b=a.next().toString();if(-1!==d.indexOf(b)){if(!0===c.commentLine)return a.eol()&&
(c.commentLine=!1),"comment";if("]"===b||"["===b)return"["===b?c.left++:c.right++,"bracket";if("+"===b||"-"===b)return"keyword";if("<"===b||">"===b)return"atom";if("."===b||","===b)return"def"}else return c.commentLine=!0,a.eol()&&(c.commentLine=!1),"comment";a.eol()&&(c.commentLine=!1)}}});a.defineMIME("text/x-brainfuck","brainfuck")});
