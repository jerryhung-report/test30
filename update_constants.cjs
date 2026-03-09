const fs = require('fs');

const csv = `口袋柴,核心,PGIM保德信貨幣市場基金,97978047,TW000T0805Y9
口袋柴,核心,PGIM美國公司債基金T美元累積,C0109004,IE00BDZVHR40
口袋柴,核心,元大得利貨幣市場基金,92017204,TW000T0569Y1
口袋柴,衛星,PGIM保德信美國投資級企業債,98639616,TW000T0842A2
口袋柴,衛星,華南永昌全球投資等級債券,98641524,TW000T1286A1
口袋柴,衛星,法盛盧米斯賽勒斯投資級債,C0054057,LU0411266801
口袋柴,ETF,元大台灣高息低波,00713,TW0000071303
口袋阿金,核心,PGIM保德信多元收益組合基金,98638122,TW000T0837B0
口袋阿金,核心,中國信託策略優利多重資產,98642423,TW000T2629B9
口袋阿金,核心,PGIM保德信全球生態友善ESG,98641177,TW000T0848B7
口袋阿金,衛星,元大亞太優質高股息100指數,98638532,TW000T05A7B4
口袋阿金,衛星,台新北美收益資產證券化基金,98637275,TW000T4717B0
口袋阿金,衛星,中國信託亞太實質收息多重,98639936,TW000T2683B6
口袋阿金,ETF,元大S&P500,00646,TW0000064605
口袋拉拉,核心,PGIM保德信高成長基金,01032183,TW000T0802Y6
口袋拉拉,核心,PGIM JENNISON全球股票機會,C0109006,IE00BGJVXP15
口袋拉拉,核心,元大台灣卓越50ETF連結基金,98639403,TW000T05B2A6
口袋拉拉,衛星,中國信託美國聚焦成長基金,98642116,TW000T2628A3
口袋拉拉,衛星,統一全天候基金-A類型,01031699,TW000T0902Y4
口袋拉拉,衛星,中國信託成長轉機多重資產,98641594,TW000T2625A9
口袋拉拉,ETF,保德信市值動能50,009803,TW0000098033
口袋土狗,核心,PGIM保德信科技島基金,73990649,TW000T0808Y3
口袋土狗,核心,PGIM Jennison美國成長基金,C0109015,IE00BYWYQY37
口袋土狗,核心,元大高科技基金,81584335,TW000T0508Y9
口袋土狗,衛星,台新美日台半導體基金,98642010,TW000T4775A0
口袋土狗,衛星,法盛AI及機器人基金,C0115024,LU1923623000
口袋土狗,衛星,統一全球新科技基金,98638079,TW000T0933A9
口袋土狗,ETF,元大台灣50,0050,TW0000050000
口袋濟斯,核心,PGIM全球生態友善ESG多重,98641176,TW000T0848A9
口袋濟斯,核心,元大臺灣ESG永續ETF連結,98641767,TW000T05C3A3
口袋濟斯,核心,中國信託ESG金融收益多重,98641425,TW000T2623A4
口袋濟斯,衛星,台新ESG環保愛地球成長基金,98640652,TW000T4769A3
口袋濟斯,衛星,法盛Mirova全球永續股票,C0115029,LU1623119135
口袋濟斯,衛星,中國信託ESG碳商機多重,98641053,TW000T2622A6
口袋濟斯,ETF,元大臺灣ESG永續,00850,TW0000085006
口袋獒,核心,PGIM美元非投資等級債券,98640605,TW000T0845C1
口袋獒,核心,PGIM美國全方位非投等債,C0109011,IE00BN47NK81
口袋獒,核心,台新優先順位資產抵押非投等,98639310,TW000T4761B8
口袋獒,衛星,PGIM保德信印度機會債券基金,98639036,TW000T0841B2
口袋獒,衛星,統一亞洲非投資等級債券基金,98637868,TW000T0932B9
口袋獒,衛星,台新美國策略時機非投等債,98641204,TW000T4772B5
口袋獒,ETF,元大高股息,0056,TW0000056007
口袋西施,核心,PGIM保德信大中華基金,73998065,TW000T0809Y1
口袋西施,核心,PGIM保德信中國品牌基金,98637127,TW000T0832Y3
口袋西施,核心,統一大龍騰中國基金,98637551,TW000T0931Y3
口袋西施,衛星,PGIM保德信中國中小基金,98637537,TW000T0836Y4
口袋西施,衛星,統一大中華中小基金,98637078,TW000T0924Y8
口袋西施,衛星,台新中國精選中小基金,98637071,TW000T4711Y5
口袋西施,ETF,元大寶滬深,0061,TW0000061007
口袋邊牧,核心,法盛漢瑞斯全球股票基金,C0054008,LU0130103400
口袋邊牧,核心,PGIM保德信亞太基金,92029139,TW000T0804Y2
口袋邊牧,核心,元大全球優質龍頭平衡基金,98641172,TW000T05B6A7
口袋邊牧,衛星,中國信託越南機會基金,98640076,TW000T2691A1
口袋邊牧,衛星,PGIM保德信拉丁美洲基金,986371051,TW000T0830Y7
口袋邊牧,衛星,元大日本龍頭企業基金,98641587,TW000T05C1A7
口袋邊牧,ETF,保德信全球跨國藍籌100,009810,TW0000098108
口袋貴賓,核心,PGIM保德信中小型股基金,83866508,TW000T0810Y9
口袋貴賓,核心,PGIM保德信店頭市場基金,97988636,TW000T0806Y7
口袋貴賓,核心,統一中小基金,97977878,TW000T0906Y5
口袋貴賓,衛星,PGIM保德信全球中小基金,98636611,TW000T0817Y4
口袋貴賓,衛星,統一大滿貫基金-A類型,17605622,TW000T0911Y5
口袋貴賓,衛星,法盛-盧米斯賽勒斯債券基金,C0054121,IE000D6HVBY0
口袋貴賓,ETF,元大富櫃50,006201,TW0000062013
口袋吉,核心,PGIM保德信策略成長ETF組合,98638350,TW000T0839A8
口袋吉,核心,元大全球ETF穩健組合基金,98636726,TW000T0575Y8
口袋吉,核心,台新全球多元資產組合基金,98638113,TW000T4753A7
口袋吉,衛星,PGIM保德信全球新供應鏈基金,98641041,TW000T0847A1
口袋吉,衛星,元大全球地產建設入息基金,98636878,TW000T0542A8
口袋吉,衛星,華南永昌ShillerUSCAPEETF,98638435,TW000T1259A8
口袋吉,ETF,第一金太空衛星,00910,`;

const lines = csv.split("\n").filter(l => l.trim().length > 0);
const mapping = {};
const funds = [];
const etfLinks = {};
const seenFunds = new Set();

for (const line of lines) {
  let [persona, type, name, code, isin] = line.split(",");
  if (persona === "口袋吉") persona = "口袋吉娃";
  
  if (!mapping[persona]) {
    mapping[persona] = { core: [], sat: [], etf: "" };
  }
  
  if (type === "核心") {
    mapping[persona].core.push(code);
  } else if (type === "衛星") {
    mapping[persona].sat.push(code);
  } else if (type === "ETF") {
    mapping[persona].etf = code;
    etfLinks[code] = "https://www.pocket.tw/etf/tw/" + code;
  }
  
  if (type !== "ETF" && !seenFunds.has(code)) {
    seenFunds.add(code);
    funds.push({
      code,
      name,
      isin: isin || "",
      currency: name.includes("美元") ? "USD" : "TWD",
      risk: 4,
      type: type === "核心" ? "Core" : "Satellite",
      desc: "優質基金標的，提供穩健的投資選擇。",
      perf: "+10.5%",
      perf2y: "+20.1%",
      perf3y: "+35.2%"
    });
  } else if (type === "ETF" && !seenFunds.has(code)) {
    seenFunds.add(code);
    funds.push({
      code,
      name,
      isin: isin || "",
      currency: "TWD",
      risk: 4,
      type: "Satellite",
      desc: "精選ETF標的，追蹤指數表現。",
      perf: "+15.2%",
      perf2y: "+30.5%",
      perf3y: "+45.8%"
    });
  }
}

const content = fs.readFileSync('utils/constants.ts', 'utf8');

const newFundsStr = "export const MOCK_FUNDS: Fund[] = " + JSON.stringify(funds, null, 2) + ";";
const newMappingStr = "export const FUND_MAPPING: Record<string, {core: string[], sat: string[], etf: string}> = " + JSON.stringify(mapping, null, 2) + ";";
const newEtfLinksStr = "export const ETF_LINKS: Record<string, string> = " + JSON.stringify(etfLinks, null, 2) + ";";

const updatedContent = content
  .replace(/export const MOCK_FUNDS: Fund\[\] = \[[\s\S]*?\];/, newFundsStr)
  .replace(/export const FUND_MAPPING: Record<string, \{core: string\[\], sat: string\[\], etf: string\}> = \{[\s\S]*?\};/, newMappingStr)
  .replace(/export const ETF_LINKS: Record<string, string> = \{[\s\S]*?\};/, newEtfLinksStr);

fs.writeFileSync('utils/constants.ts', updatedContent);
