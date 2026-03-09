const fs = require('fs');

try {
    const content = fs.readFileSync('utils/constants.ts', 'utf-8');

    // Extract MOCK_FUNDS
    const fundsMatch = content.match(/export const MOCK_FUNDS: Fund\[\] = (\[[\s\S]*?\]);/);
    const funds = eval(fundsMatch[1]);

    // Extract FUND_MAPPING
    const mappingMatch = content.match(/export const FUND_MAPPING: Record<string, \{core: string\[\], sat: string\[\], etf: string\}> = (\{[\s\S]*?\});/);
    const mapping = eval(`(${mappingMatch[1]})`);

    let mdContent = '';

    let i = 1;
    for (const [persona, config] of Object.entries(mapping)) {
        mdContent += `### ${i}. ${persona}\n`;
        
        mdContent += `*   **核心配置**\n`;
        for (const code of config.core) {
            const fund = funds.find(f => f.code === code) || {};
            mdContent += `    *   ${fund.name || code} / ${fund.desc || ''}\n`;
        }
        
        mdContent += `*   **衛星配置**\n`;
        for (const code of config.sat) {
            const fund = funds.find(f => f.code === code) || {};
            mdContent += `    *   ${fund.name || code} / ${fund.desc || ''}\n`;
        }
        
        mdContent += `*   **ETF**\n`;
        const etfFund = funds.find(f => f.code === config.etf) || {};
        mdContent += `    *   ${etfFund.name || config.etf} / ${etfFund.desc || ''}\n\n`;
        
        i++;
    }

    console.log(mdContent);
} catch (error) {
    console.error('Error:', error);
}
