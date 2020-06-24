import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinAnalysis';
import { HtmlReport } from './report/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winAnaylisiWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrint(matches: MatchData[]): void {
    const otput = this.analyzer.run(matches);
    this.outputTarget.print(otput);
  }
}
