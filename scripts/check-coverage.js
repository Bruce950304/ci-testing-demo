const fs = require('fs');
const MIN = Number(process.env.COVERAGE_MIN || 80);
const summary = JSON.parse(fs.readFileSync('coverage/coverage-summary.json', 'utf8')).total;
const pct = summary.lines.pct;

const msg = `Line coverage: ${pct}% (threshold: ${MIN}%)`;
console.log(msg);
if (process.env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `### Coverage\n${msg}\n`);
}
if (pct < MIN) {
  console.error('❌ Coverage below threshold');
  process.exit(1);
}