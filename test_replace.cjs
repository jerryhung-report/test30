const fs = require('fs');
let content = fs.readFileSync('utils/constants.ts', 'utf-8');
const code = "97978047";
const desc = "追求基金資產之穩定收益，主要投資於中華民國境內之貨幣市場標的。";
const parts = content.split(`"code": "${code}"`);
if (parts.length > 1) {
    parts[1] = parts[1].replace(/"desc":\s*"[^"]*"/, `"desc": "${desc}"`);
    content = parts.join(`"code": "${code}"`);
    console.log(content.substring(0, 500));
}
