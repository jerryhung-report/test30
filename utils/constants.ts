
import type { Fund, Question, Persona } from '~/types';

export const MOCK_FUNDS: Fund[] = [
  {
    "code": "97978047",
    "name": "PGIM保德信貨幣市場基金",
    "isin": "TW000T0805Y9",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0109004",
    "name": "PGIM美國公司債基金T美元累積",
    "isin": "IE00BDZVHR40",
    "currency": "USD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "92017204",
    "name": "元大得利貨幣市場基金",
    "isin": "TW000T0569Y1",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98639616",
    "name": "PGIM保德信美國投資級企業債",
    "isin": "TW000T0842A2",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641524",
    "name": "華南永昌全球投資等級債券",
    "isin": "TW000T1286A1",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0054057",
    "name": "法盛盧米斯賽勒斯投資級債",
    "isin": "LU0411266801",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "00713",
    "name": "元大台灣高息低波",
    "isin": "TW0000071303",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "精選ETF標的，追蹤指數表現。",
    "perf": "+15.2%",
    "perf2y": "+30.5%",
    "perf3y": "+45.8%"
  },
  {
    "code": "98638122",
    "name": "PGIM保德信多元收益組合基金",
    "isin": "TW000T0837B0",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98642423",
    "name": "中國信託策略優利多重資產",
    "isin": "TW000T2629B9",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641177",
    "name": "PGIM保德信全球生態友善ESG",
    "isin": "TW000T0848B7",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98638532",
    "name": "元大亞太優質高股息100指數",
    "isin": "TW000T05A7B4",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98637275",
    "name": "台新北美收益資產證券化基金",
    "isin": "TW000T4717B0",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98639936",
    "name": "中國信託亞太實質收息多重",
    "isin": "TW000T2683B6",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "00646",
    "name": "元大S&P500",
    "isin": "TW0000064605",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "精選ETF標的，追蹤指數表現。",
    "perf": "+15.2%",
    "perf2y": "+30.5%",
    "perf3y": "+45.8%"
  },
  {
    "code": "01032183",
    "name": "PGIM保德信高成長基金",
    "isin": "TW000T0802Y6",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0109006",
    "name": "PGIM JENNISON全球股票機會",
    "isin": "IE00BGJVXP15",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98639403",
    "name": "元大台灣卓越50ETF連結基金",
    "isin": "TW000T05B2A6",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98642116",
    "name": "中國信託美國聚焦成長基金",
    "isin": "TW000T2628A3",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "01031699",
    "name": "統一全天候基金-A類型",
    "isin": "TW000T0902Y4",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641594",
    "name": "中國信託成長轉機多重資產",
    "isin": "TW000T2625A9",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "009803",
    "name": "保德信市值動能50",
    "isin": "TW0000098033",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "精選ETF標的，追蹤指數表現。",
    "perf": "+15.2%",
    "perf2y": "+30.5%",
    "perf3y": "+45.8%"
  },
  {
    "code": "73990649",
    "name": "PGIM保德信科技島基金",
    "isin": "TW000T0808Y3",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0109015",
    "name": "PGIM Jennison美國成長基金",
    "isin": "IE00BYWYQY37",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "81584335",
    "name": "元大高科技基金",
    "isin": "TW000T0508Y9",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98642010",
    "name": "台新美日台半導體基金",
    "isin": "TW000T4775A0",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0115024",
    "name": "法盛AI及機器人基金",
    "isin": "LU1923623000",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98638079",
    "name": "統一全球新科技基金",
    "isin": "TW000T0933A9",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "0050",
    "name": "元大台灣50",
    "isin": "TW0000050000",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "精選ETF標的，追蹤指數表現。",
    "perf": "+15.2%",
    "perf2y": "+30.5%",
    "perf3y": "+45.8%"
  },
  {
    "code": "98641176",
    "name": "PGIM全球生態友善ESG多重",
    "isin": "TW000T0848A9",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641767",
    "name": "元大臺灣ESG永續ETF連結",
    "isin": "TW000T05C3A3",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641425",
    "name": "中國信託ESG金融收益多重",
    "isin": "TW000T2623A4",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98640652",
    "name": "台新ESG環保愛地球成長基金",
    "isin": "TW000T4769A3",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0115029",
    "name": "法盛Mirova全球永續股票",
    "isin": "LU1623119135",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641053",
    "name": "中國信託ESG碳商機多重",
    "isin": "TW000T2622A6",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "00850",
    "name": "元大臺灣ESG永續",
    "isin": "TW0000085006",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "精選ETF標的，追蹤指數表現。",
    "perf": "+15.2%",
    "perf2y": "+30.5%",
    "perf3y": "+45.8%"
  },
  {
    "code": "98640605",
    "name": "PGIM美元非投資等級債券",
    "isin": "TW000T0845C1",
    "currency": "USD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0109011",
    "name": "PGIM美國全方位非投等債",
    "isin": "IE00BN47NK81",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98639310",
    "name": "台新優先順位資產抵押非投等",
    "isin": "TW000T4761B8",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98639036",
    "name": "PGIM保德信印度機會債券基金",
    "isin": "TW000T0841B2",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98637868",
    "name": "統一亞洲非投資等級債券基金",
    "isin": "TW000T0932B9",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641204",
    "name": "台新美國策略時機非投等債",
    "isin": "TW000T4772B5",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "0056",
    "name": "元大高股息",
    "isin": "TW0000056007",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "精選ETF標的，追蹤指數表現。",
    "perf": "+15.2%",
    "perf2y": "+30.5%",
    "perf3y": "+45.8%"
  },
  {
    "code": "73998065",
    "name": "PGIM保德信大中華基金",
    "isin": "TW000T0809Y1",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98637127",
    "name": "PGIM保德信中國品牌基金",
    "isin": "TW000T0832Y3",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98637551",
    "name": "統一大龍騰中國基金",
    "isin": "TW000T0931Y3",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98637537",
    "name": "PGIM保德信中國中小基金",
    "isin": "TW000T0836Y4",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98637078",
    "name": "統一大中華中小基金",
    "isin": "TW000T0924Y8",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98637071",
    "name": "台新中國精選中小基金",
    "isin": "TW000T4711Y5",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "0061",
    "name": "元大寶滬深",
    "isin": "TW0000061007",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "精選ETF標的，追蹤指數表現。",
    "perf": "+15.2%",
    "perf2y": "+30.5%",
    "perf3y": "+45.8%"
  },
  {
    "code": "C0054008",
    "name": "法盛漢瑞斯全球股票基金",
    "isin": "LU0130103400",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "92029139",
    "name": "PGIM保德信亞太基金",
    "isin": "TW000T0804Y2",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641172",
    "name": "元大全球優質龍頭平衡基金",
    "isin": "TW000T05B6A7",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98640076",
    "name": "中國信託越南機會基金",
    "isin": "TW000T2691A1",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "986371051",
    "name": "PGIM保德信拉丁美洲基金",
    "isin": "TW000T0830Y7",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641587",
    "name": "元大日本龍頭企業基金",
    "isin": "TW000T05C1A7",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "009810",
    "name": "保德信全球跨國藍籌100",
    "isin": "TW0000098108",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "精選ETF標的，追蹤指數表現。",
    "perf": "+15.2%",
    "perf2y": "+30.5%",
    "perf3y": "+45.8%"
  },
  {
    "code": "83866508",
    "name": "PGIM保德信中小型股基金",
    "isin": "TW000T0810Y9",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "97988636",
    "name": "PGIM保德信店頭市場基金",
    "isin": "TW000T0806Y7",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "97977878",
    "name": "統一中小基金",
    "isin": "TW000T0906Y5",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98636611",
    "name": "PGIM保德信全球中小基金",
    "isin": "TW000T0817Y4",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "17605622",
    "name": "統一大滿貫基金-A類型",
    "isin": "TW000T0911Y5",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0054121",
    "name": "法盛-盧米斯賽勒斯債券基金",
    "isin": "IE000D6HVBY0",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "006201",
    "name": "元大富櫃50",
    "isin": "TW0000062013",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "精選ETF標的，追蹤指數表現。",
    "perf": "+15.2%",
    "perf2y": "+30.5%",
    "perf3y": "+45.8%"
  },
  {
    "code": "98638350",
    "name": "PGIM保德信策略成長ETF組合",
    "isin": "TW000T0839A8",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98636726",
    "name": "元大全球ETF穩健組合基金",
    "isin": "TW000T0575Y8",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98638113",
    "name": "台新全球多元資產組合基金",
    "isin": "TW000T4753A7",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641041",
    "name": "PGIM保德信全球新供應鏈基金",
    "isin": "TW000T0847A1",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98636878",
    "name": "元大全球地產建設入息基金",
    "isin": "TW000T0542A8",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98638435",
    "name": "華南永昌ShillerUSCAPEETF",
    "isin": "TW000T1259A8",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "優質基金標的，提供穩健的投資選擇。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "00910",
    "name": "第一金太空衛星",
    "isin": "",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "精選ETF標的，追蹤指數表現。",
    "perf": "+15.2%",
    "perf2y": "+30.5%",
    "perf3y": "+45.8%"
  }
];

export const QUESTIONS: Record<string, Question[]> = {
  type2: [
    {id:1,text:"一想到火鍋，我就想到減肥。",type:"range"},
    {id:2,text:"一想到品質，我就想到太貴。",type:"range"},
    {id:3,text:"一想到高配息，我就想到我需要。",type:"range"},
    {id:4,text:"一想到暴跌，我就想到加碼。",type:"range"},
    {id:5,text:"一想到借錢投資，我就想到加速破產。",type:"range"},
    {id:6,text:"一想到存股，我就覺得無聊。",type:"range"},
    {id:7,text:"一想到契約，我就感到被限制。",type:"range"},
    {id:8,text:"一想到吃Buffet，我就覺得好空虛。",type:"range"},
    {id:9,text:"一想到小孩教育，我就想到送出國。",type:"range"},
    {id:10,text:"一想到買手機，我就想到指定品牌。",type:"range"}
  ],
  type3: [
    {id:11,text:"我常在事後才發現，自己當下其實是情緒化決定。",type:"range"},
    {id:12,text:"如果沒有人提醒，我很容易忘記長期計畫。",type:"range"},
    {id:13,text:"我寧可少賺一點，也不想賠錢做錯決定。",type:"range"},
    {id:14,text:"看到別人投資賺錢，我會重新檢討自己的配置。",type:"range"},
    {id:15,text:"看到排隊名店，我也會想去排隊嚐鮮",type:"range"},
    {id:16,text:"去熟悉的餐廳，我每次都點一樣的餐點",type:"range"},
    {id:17,text:"買新手機時，我一定會加購意外險",type:"range"},
    {id:18,text:"參加抽獎活動...我寧願選『100% 獲得小獎』",type:"range"},
    {id:19,text:"比起賺獎金，我更喜歡底薪高一點",type:"range"}
  ],
  type4: [
    {id:20,q:"宇宙農業部開放三個星系，你想去哪裡？",type:"choice",options:[{val:1,text:"銀河聯盟"},{val:4,text:"家鄉基地"},{val:7,text:"蠻荒新星"}]},
    {id:21,q:"來到宇宙樹苗交易所，你會選哪棵?",type:"choice",options:[{val:1,text:"安心麵包樹"},{val:4,text:"全能混種樹"},{val:7,text:"傑克魔豆樹"}]},
    {id:22,q:"持有「銀河通用幣」讓我更有安全感。",type:"bool"},
    {id:23,q:"豐收的金幣是用來買火箭，而非存在銀行。",type:"bool"},
    {id:24,q:"我喜歡多摘果實落袋，不怕搖錢樹傷了根基。",type:"bool"},
    {id:25,q:"看到隔壁大豐收，我不跟風。",type:"bool"},
    {id:26,q:"與其求穩，我更想賭一把未來的。",type:"bool"},
    {id:27,q:"我放心交給機器人自動灌溉。",type:"bool"},
    {id:28,q:"我不急著收成，寧願養分全回流。",type:"bool"},
    {id:29,q:"我想在最短時間內，追求金幣自由。",type:"bool"},
    {id:30,q:"這棵樹是留給下一代的傳家寶。",type:"bool"}
  ]
};

export const PERSONAS: Persona[] = [
  {title:"口袋濟斯",desc:"馬爾濟斯型投資人資金規模不一定大，但對世界充滿好奇。他們偏好低門檻、可探索不同市場的基金配置，在控制風險的前提下，體驗投資帶來的視野擴張。",riskLevel:1,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/545a1226-05a7-43d0-ab65-4f13a847e211"},
  {title:"口袋西施",desc:"西施犬型投資人講究生活品質與節奏，不急著進出市場。穩健、管理風格一致的基金，讓資產在不被打擾的狀態下，優雅累積。",riskLevel:2,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/7e82c005-61b0-4685-80f5-87475fdf9002"},
  {title:"口袋吉娃",desc:"吉娃娃型投資人情緒敏感、反應快速，容易受市場波動影響。透過分散配置與小額定期投入的基金策略，有助於在高壓情緒中維持投資穩定度.",riskLevel:2,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/b296dc65-22be-45a4-921f-1725ccd24149"},
  {title:"口袋柴",desc:"柴犬型投資人個性獨立、自我，不輕易追逐市場風向，常以專注於長期邏輯的視角看待波動。這種傲嬌而固執的氣質，使他們偏好能經得起時間考驗的基金，而非短線熱門題材。",riskLevel:3,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/c66b1ae6-d28b-4407-b515-b89f7367e19e"},
  {title:"口袋貴賓",desc:"貴賓犬型投資人重視差異化與質感，不想與市場雷同。具有特色主題、選股邏輯清楚的基金，能滿足他們對獨特性的期待。",riskLevel:3,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/564cd141-570c-4fe2-b4ef-74c0f44ba6c3"},
  {title:"口袋拉拉",desc:"拉拉型投資人高度重視「有沒有產出」，對現金流與紀律特別敏感。能定期看到成果的配息型基金或穩定投入機制，最能讓他們安心守住投資節奏。",riskLevel:4,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/1f9b5ccb-de9c-4f2c-89b3-44df5ac9b0e0"},
  {title:"口袋土狗",desc:"台灣土狗型投資人擁有極強的環境適應力，不追求華麗報酬，而是能在各種市場條件下活得下來。分散、耐震、長期有效的基金配置，最符合他們的生存智慧。",riskLevel:4,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/9653082c-0970-44c8-b4cb-44a326c7651f"},
  {title:"口袋邊牧",desc:"牧羊犬型投資人理性且高度系統化，相信規則勝過情緒。具備明確策略、可自動執行的基金投資方式，正好符合他們追求最佳化的思維。",riskLevel:5,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/b95041fc-ff84-4cbb-b301-b09896a3663f"},
  {title:"口袋阿金",desc:"阿金型投資人性格溫暖、陽光，理財目的不是擊敗市場，而是讓生活更安心。他們親近長期投資、穩健累積的策略，就像釀酒一樣，時間越久，收穫越醇。",riskLevel:5,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/baeb7998-a658-426d-83e4-71a90b18576b"},
  {title:"口袋獒",desc:"藏獒型投資人重視責任與守護，對風險高度警覺。核心配置、穩定性高的基金，是他們為資產築起防線的首選，寧可慢，也不能失守。",riskLevel:6,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/5fc66b3d-3857-413b-8758-d51cb90adf98"}
];

export const FUND_MAPPING: Record<string, {core: string[], sat: string[], etf: string}> = {
  "口袋柴": {
    "core": [
      "97978047",
      "C0109004",
      "92017204"
    ],
    "sat": [
      "98639616",
      "98641524",
      "C0054057"
    ],
    "etf": "00713"
  },
  "口袋阿金": {
    "core": [
      "98638122",
      "98642423",
      "98641177"
    ],
    "sat": [
      "98638532",
      "98637275",
      "98639936"
    ],
    "etf": "00646"
  },
  "口袋拉拉": {
    "core": [
      "01032183",
      "C0109006",
      "98639403"
    ],
    "sat": [
      "98642116",
      "01031699",
      "98641594"
    ],
    "etf": "009803"
  },
  "口袋土狗": {
    "core": [
      "73990649",
      "C0109015",
      "81584335"
    ],
    "sat": [
      "98642010",
      "C0115024",
      "98638079"
    ],
    "etf": "0050"
  },
  "口袋濟斯": {
    "core": [
      "98641176",
      "98641767",
      "98641425"
    ],
    "sat": [
      "98640652",
      "C0115029",
      "98641053"
    ],
    "etf": "00850"
  },
  "口袋獒": {
    "core": [
      "98640605",
      "C0109011",
      "98639310"
    ],
    "sat": [
      "98639036",
      "98637868",
      "98641204"
    ],
    "etf": "0056"
  },
  "口袋西施": {
    "core": [
      "73998065",
      "98637127",
      "98637551"
    ],
    "sat": [
      "98637537",
      "98637078",
      "98637071"
    ],
    "etf": "0061"
  },
  "口袋邊牧": {
    "core": [
      "C0054008",
      "92029139",
      "98641172"
    ],
    "sat": [
      "98640076",
      "986371051",
      "98641587"
    ],
    "etf": "009810"
  },
  "口袋貴賓": {
    "core": [
      "83866508",
      "97988636",
      "97977878"
    ],
    "sat": [
      "98636611",
      "17605622",
      "C0054121"
    ],
    "etf": "006201"
  },
  "口袋吉娃": {
    "core": [
      "98638350",
      "98636726",
      "98638113"
    ],
    "sat": [
      "98641041",
      "98636878",
      "98638435"
    ],
    "etf": "00910"
  }
};

export const ETF_LINKS: Record<string, string> = {
  "00713": "https://www.pocket.tw/etf/tw/00713",
  "00646": "https://www.pocket.tw/etf/tw/00646",
  "009803": "https://www.pocket.tw/etf/tw/009803",
  "0050": "https://www.pocket.tw/etf/tw/0050",
  "00850": "https://www.pocket.tw/etf/tw/00850",
  "0056": "https://www.pocket.tw/etf/tw/0056",
  "0061": "https://www.pocket.tw/etf/tw/0061",
  "009810": "https://www.pocket.tw/etf/tw/009810",
  "006201": "https://www.pocket.tw/etf/tw/006201",
  "00910": "https://www.pocket.tw/etf/tw/00910"
};
