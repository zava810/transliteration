window.Transliterator = (function (e) {
    var n = {};
    function r(t) {
        if (n[t]) return n[t].exports;
        var u = (n[t] = { i: t, l: !1, exports: {} });
        return e[t].call(u.exports, u, u.exports, r), (u.l = !0), u.exports;
    }
    return (
        (r.m = e),
        (r.c = n),
        (r.d = function (e, n, t) { r.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t }); }),
        (r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, n) {
            if ((1 & n && (e = r(e)), 8 & n)) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if ((r.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e))
                for (var u in e)
                    r.d( t, u, function (n) { return e[n]; }.bind(null, u) );
            return t;
        }),
        (r.n = function (e) {
            var n = e && e.__esModule ? function () { return e.default; } : function () { return e; };
            return r.d(n, "a", n), n;
        }),
        (r.o = function (e, n) { return Object.prototype.hasOwnProperty.call(e, n); }),
        (r.p = ""),
        r((r.s = 0))
    );
})([
    function (e, n, r) { const t = r(1), u = r(2), o = r(3);
        e.exports = class { constructor() {}
            transliterate_ml_en(e) { return t(e); }; transliterate_hi_en(e) { return u(e); }; transliterate_kn_en(e) { return o(e); };
        };
    },
    function (e, n) {
        e.exports = function (e) {
            var n = { അ: "a", ആ: "aa", ഇ: "i", ഈ: "ee", ഉ: "u", ഊ: "oo", ഋ: "ru", എ: "e", ഏ: "e", ഐ: "ai", ഒ: "o", ഓ: "o", ഔ: "au" },
                r = { ക്ക: "kk", ഗ്ഗ: "gg", ങ്ങ: "ng", ക്ക: "kk", ച്ച: "cch", ജ്ജ: "jj", ഞ്ഞ: "nj", ട്ട: "TT", ണ്ണ: "nn", ത്ത: "tth", ദ്ദ: "ddh", ദ്ധ: "ddh", ന്ന: "nn", ന്ത: "nth", ങ്ക: "nk", ണ്ട: "nd", ബ്ബ: "bb", പ്പ: "pp", മ്മ: "mm", യ്യ: "yy", ല്ല: "ll", വ്വ: "vv", ശ്ശ: "sh", സ്സ: "s", ക്സ: "ks", ഞ്ച: "nch", ക്ഷ: "ksh", മ്പ: "mp", റ്റ: "tt", ന്റ: "nt", ന്ത: "nth", ന്ത്യ: "nthy", },
                t = { ക: "k", ഖ: "kh", ഗ: "g", ഘ: "gh", ങ: "ng", ച: "ch", ഛ: "chh", ജ: "j", ഝ: "jh", ഞ: "nj", ട: "t", ഠ: "dt", ഡ: "d", ഢ: "dd", ണ: "n", ത: "th", ഥ: "th", ദ: "d", ധ: "dh", ന: "n", പ: "p", ഫ: "ph", ബ: "b", ഭ: "bh", മ: "m", യ: "y", ര: "r", ല: "l", വ: "v", ശ: "sh", ഷ: "sh", സ: "s", ഹ: "h", ള: "l", ഴ: "zh", റ: "r", },
                u = { ൽ: "l", ൾ: "l", ൺ: "n", ൻ: "n", ർ: "r", ൿ: "k" },
                o = { "ു്": "u", "ാ": "aa", "ി": "i", "ീ": "ee", "ു": "u", "ൂ": "oo", "ൃ": "ru", "െ": "e", "േ": "e", "ൈ": "y", "ൊ": "o", "ോ": "o", "ൌ": "ou", "ൗ": "au", "ഃ": "a" };
            function i(e, n) {
                for (var r = 0, t = new RegExp("(" + a(e).join("|") + ")(" + a(o).join("|") + ")", "g"); null != r; ) (r = t.exec(n)) && (n = n.replace(new RegExp(r[0], "g"), e[r[1]] + o[r[2]]));
                return n;
            }
            function a(e) {
                var n = [];
                for (var r in e) e.hasOwnProperty(r) && n.push(r);
                return n;
            }
            return (function (e) {
                (e = e.replace(/[\u200B-\u200D\uFEFF]/g, "")), (e = i(r, e)), (e = i(n, e)), (e = i(t, e));
                var a = "";
                for (var h in r) r.hasOwnProperty(h) && ((a = r[h]), (e = (e = (e = e.replace(new RegExp(h + "്([\\w])", "g"), a + "$1")).replace(new RegExp(h + "്", "g"), a + "u")).replace(new RegExp(h, "g"), a + "a")));
                for (var h in t) t.hasOwnProperty(h) && ((a = t[h]), (e = e.replace(new RegExp(h + "(?!്)", "g"), a + "a")));
                for (var h in t) t.hasOwnProperty(h) && ((a = t[h]), (e = e.replace(new RegExp(h + "്(?![\\s).;,\"'/\\%!])", "ig"), a)));
                for (var h in t) t.hasOwnProperty(h) && ((a = t[h]), (e = e.replace(new RegExp(h + "്", "g"), a + "u")));
                for (var h in t) t.hasOwnProperty(h) && ((a = t[h]), (e = e.replace(new RegExp(h, "g"), a)));
                for (var h in n) n.hasOwnProperty(h) && ((a = n[h]), (e = e.replace(new RegExp(h, "g"), a)));
                for (var h in u) u.hasOwnProperty(h) && ((a = u[h]), (e = e.replace(new RegExp(h, "g"), a)));
                for (var h in ((e = e.replace(/ം/g, "m")), o)) o.hasOwnProperty(h) && ((a = o[h]), (e = e.replace(new RegExp(h, "g"), a)));
                return e;
            })(e);
        };
    },
    function (e, n) {
        e.exports = function (e) {
            function n(e, n) {
                return Array.isArray(e) || (e = Object.keys(e)), -1 !== e.indexOf(n);
            }
            var r = { अ: "a", आ: "aa", इ: "i", ई: "ee", उ: "u", ऊ: "u", ऋ: "rri", ए: "e", ऐ: "ai", ओ: "o", औ: "au", "ं": "m", "ಃ": "h", क: "k", ख: "kh", ग: "g", घ: "gh", ङ: "ng", च: "ch", छ: "chh", ज: "j", झ: "jhh", ञ: "nj", ट: "T", ठ: "thh", ड: "d", ढ: "dh", ण: "N", त: "th", थ: "Th", द: "D", ध: "Dh", न: "n", प: "p", फ: "ph", ब: "b", भ: "bh", म: "m", य: "y", र: "r", ल: "l", व: "v", ष: "sh", श: "shh", स: "s", ह: "h", ಳ: "L", "ृ": "rri", "ा": "aa", "ि": "i", "ी": "i", "ु": "u", "ू": "oo", "ृ": "rri", "े": "e", "ॆ": "e", "ै": "ai", "ो": "o", "ॊ": "o", "ौ": "au", क्ष: "ksh", त्र: "tr", ज्ञ: "jn", "೧": "१", "२": "2", "३": "3", "೪": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0", ऑ: "O", "।": ".", },
                t = ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ"],
                u = ["ा", "ि", "ी", "ु", "ू", "ृ", "े", "ॆ", "ै", "ो", "ॊ", "ौ", "ं", "ಃ"];
            for (input_length = e.length, index = 0, output = ""; index < input_length; ) {
                var o = e[index],
                    i = e[index + 1];
                o.match(/^[.,:!?]/)
                    ? ((output += o), index++)
                    : "्" !== o
                    ? (n(r, o) ? (output += r[o]) : (output += o),
                      index + 1 < input_length && !n(u, i) && n(r, o) && n(r, i) && !n(t, o) && !n(u, o) && (output += "a"),
                      n(r, o) && (index + 1 == input_length || " " === i) && (index - 1 < 0 || " " === e[index - 1]) && "अ" != o && "आ" != o && (output += "a"),
                      index + 1 < input_length && "ं" == i && !n(u, o) && (output += "a"),
                      index++)
                    : index++;
            }
            return output;
        };
    },
    function (e, n) {
        e.exports = function (e) {
            function n(e, n) {
                return Array.isArray(e) || (e = Object.keys(e)), -1 !== e.indexOf(n);
            }
            var r = { ಅ: "a", ಆ: "aa", ಇ: "i", ಈ: "i", ಉ: "u", ಊ: "u", ಋ: "rri", ಎ: "e", ಏ: "e", ಐ: "ai", ಒ: "o", ಓ: "o", ಔ: "au", "ಂ": "m", "ಃ": "h", ಕ: "k", ಖ: "kh", ಗ: "g", ಘ: "gh", ಙ: "ng", ಚ: "ch", ಛ: "chh", ಜ: "j", ಝ: "jhh", ಞ: "nj", ತ: "th", ಥ: "thh", ದ: "d", ಧ: "dh", ನ: "n", ಟ: "T", ಠ: "Th", ಡ: "D", ಢ: "Dh", ಣ: "N", ಪ: "p", ಫ: "ph", ಬ: "b", ಭ: "bh", ಮ: "m", ಯ: "y", ರ: "r", ಲ: "l", ವ: "v", ಶ: "sh", ಷ: "shh", ಸ: "s", ಹ: "h", ಳ: "L", ಋ: "rri", "್": "", "ಾ": "aa", "ಿ": "i", "ೀ": "i", "ು": "u", "ೂ": "u", "ೃ": "rri", "ೆ": "e", "ೇ": "e", "ೈ": "ai", "ೊ": "o", "ೋ": "o", "ೌ": "au", ಕ್ಷ: "ksh", ತ್ರ: "tr", ಜ್ಞ: "jn", "೧": "1", "೨": "2", "೩": "3", "೪": "4", "೫": "5", "೬": "6", "೭": "7", "೮": "8", "೯": "9", "೦": "0", },
                t = ["ಅ", "ಆ", "ಇ", "ಈ", "ಉ", "ಊ", "ಋ", "ಎ", "ಏ", "ಐ", "ಒ", "ಓ", "ಔ"],
                u = ["್", "ಾ", "ಿ", "ೀ", "ು", "ೂ", "ೃ", "ೆ", "ೇ", "ೈ", "ೊ", "ೋ", "ೌ", "ಂ", "ಃ"];
            for (input_length = e.length, index = 0, output = ""; index < input_length; ) {
                var o = e[index],
                    i = e[index + 1];
                o.match(/^[.,:!?]/)
                    ? ((output += o), index++)
                    : "್" !== o
                    ? (n(r, o) ? (output += r[o]) : (output += o), index + 1 <= input_length && !n(u, i) && n(r, o) && !n(t, o) && !n(u, o) && (output += "a"), index + 1 < input_length && "ಂ" == i && !n(u, o) && (output += "a"), index++)
                    : index++;
            }
            return output;
        };
    },
]);
