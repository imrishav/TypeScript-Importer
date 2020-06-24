"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinAnalysis_1 = require("./analyzers/WinAnalysis");
var HtmlReport_1 = require("./report/HtmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winAnaylisiWithHtmlReport = function (team) {
        return new Summary(new WinAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    Summary.prototype.buildAndPrint = function (matches) {
        var otput = this.analyzer.run(matches);
        this.outputTarget.print(otput);
    };
    return Summary;
}());
exports.Summary = Summary;
