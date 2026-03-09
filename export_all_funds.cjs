const fs = require('fs');

try {
    const content = fs.readFileSync('utils/constants.ts', 'utf-8');
    
    // Extract MOCK_FUNDS
    const fundsMatch = content.match(/export const MOCK_FUNDS: Fund\[\] = (\[[\s\S]*?\]);/);
    const funds = eval(fundsMatch[1]);

    // Add BOM for Excel UTF-8 compatibility
    let csvContent = '\uFEFF';
    
    // Header
    csvContent += '基金代碼,名稱,ISIN Code,類型(核心/衛星/ETF),風險等級,預設描述,近一年績效(%),近二年績效(%),近三年績效(%)\n';

    // Rows
    for (const fund of funds) {
        const code = fund.code || '';
        const name = `"${(fund.name || '').replace(/"/g, '""')}"`;
        const isin = fund.isin || '';
        const type = fund.type || '';
        const risk = fund.risk || '';
        const desc = `"${(fund.desc || '').replace(/"/g, '""')}"`;
        const perf = fund.perf !== undefined ? fund.perf : '';
        const perf2y = fund.perf2y !== undefined ? fund.perf2y : '';
        const perf3y = fund.perf3y !== undefined ? fund.perf3y : '';

        csvContent += `${code},${name},${isin},${type},${risk},${desc},${perf},${perf2y},${perf3y}\n`;
    }

    fs.writeFileSync('public/funds_export.csv', csvContent, 'utf-8');
    console.log('CSV generated successfully at public/funds_export.csv');
} catch (error) {
    console.error('Error:', error);
}
