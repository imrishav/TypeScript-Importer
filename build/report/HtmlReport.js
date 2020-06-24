"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
var fs_1 = require("fs");
var HtmlReport = /** @class */ (function () {
    function HtmlReport() {
    }
    HtmlReport.prototype.print = function (report) {
        var html = "<div>\n                    <h1>Analysic Output</h1>\n                    <div>" + report + "</div>    \n                  </div>";
        fs_1.writeFileSync('reposrt.html', html);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
