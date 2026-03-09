const fs = require('fs');

try {
    const content = fs.readFileSync('utils/constants.ts', 'utf-8');

    // Extract MOCK_FUNDS
    const fundsMatch = content.match(/export const MOCK_FUNDS: Fund\[\] = (\[[\s\S]*?\]);/);
    const funds = eval(fundsMatch[1]);

    // Extract FUND_MAPPING
    const mappingMatch = content.match(/export const FUND_MAPPING: Record<string, \{core: string\[\], sat: string\[\], etf: string\}> = (\{[\s\S]*?\});/);
    const mapping = eval(`(${mappingMatch[1]})`);

    let csvContent = '\uFEFF'; // Add BOM for Excel to recognize UTF-8 properly
    csvContent += '人格,配置類型,基金代碼,基金名稱,基金描述\n';

    for (const [persona, config] of Object.entries(mapping)) {
        // Core
        for (const code of config.core) {
            const fund = funds.find(f => f.code === code) || {};
            csvContent += `${persona},核心配置,${code},${fund.name || ''},"${fund.desc || ''}"\n`;
        }
        // Sat
        for (const code of config.sat) {
            const fund = funds.find(f => f.code === code) || {};
            csvContent += `${persona},衛星配置,${code},${fund.name || ''},"${fund.desc || ''}"\n`;
        }
        // ETF
        const etfFund = funds.find(f => f.code === config.etf) || {};
        csvContent += `${persona},ETF,${config.etf},${etfFund.name || ''},"${etfFund.desc || ''}"\n`;
    }

    if (!fs.existsSync('public')) {
        fs.mkdirSync('public');
    }
    fs.writeFileSync('public/fund_mapping.csv', csvContent, 'utf-8');
    console.log('CSV generated successfully at public/fund_mapping.csv');
} catch (error) {
    console.error('Error generating CSV:', error);
}
