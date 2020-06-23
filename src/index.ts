import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();

console.log(reader.data[0][0]);

let manUnwins = 1;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnwins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnwins++;
  }
}

console.log(`Man United won ${manUnwins} games`);
