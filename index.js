import dotenv from 'dotenv';
import { ReplexicaEngine } from "@replexica/sdk";

dotenv.config();

const engine = new ReplexicaEngine({
  apiKey: process.env.RELEXICA_API_KEY,
});

const htmlExample = `
  <html>
    <body>
      <h1>Hello, world!</h1>
    </body>
  </html>
`;

// Regular
console.log('Regular localization, please wait...');
console.time('localization');
const regularStartTime = Date.now();
const regularLocalizedHtml = await engine.localizeHtml(htmlExample, {
  sourceLocale: 'en',
  targetLocale: 'es',
});
const regularEndTime = Date.now();
console.log(regularLocalizedHtml);
console.timeEnd('localization');
const regularLatency = regularEndTime - regularStartTime;
console.log(`Latency: ${regularLatency} ms`);

// Fast
console.log('Fast localization, please wait...');
console.time('fast');
const fastStartTime = Date.now();
const fastLocalizedHtml = await engine.localizeHtml(htmlExample, {
  sourceLocale: 'en',
  targetLocale: 'es',
  fast: true,
});
const fastEndTime = Date.now();
console.log(fastLocalizedHtml);
console.timeEnd('fast');
const fastLatency = fastEndTime - fastStartTime;
console.log(`Latency: ${fastLatency} ms`);
