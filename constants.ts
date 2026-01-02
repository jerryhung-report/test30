
import { Fund, Question } from './types';

export const MOCK_FUNDS: Fund[] = [
  { code: '17605622', name: '統一大滿貫基金-A類型', isin: 'TW000T0911Y5', currency: 'TWD', risk: 3, type: 'Core', desc: '透過由上而下的總體經濟分析，搭配由下而上的選股策略，追求長期資本利得。', perf: '+12.8%', perf2y: '+25.4%', perf3y: '+40.2%' },
  { code: '98638759', name: '統一大中華中小基金(美元)', isin: 'TW000T0924B6', currency: 'USD', risk: 3, type: 'Core', desc: '本基金主要投資於大中華地區之中小型成長股，鎖定高成長潛力之新創產業。', perf: '+14.9%', perf2y: '+28.1%', perf3y: '+45.5%' },
  { code: 'C0109015', name: 'PGIM Jennison美國成長基金A級別', isin: 'IE00BYWYQY37', currency: 'USD', risk: 3, type: 'Core', desc: '深入挖掘美國具備長期結構性成長趨勢的優質公司，聚焦大型成長股。', perf: '+20.1%', perf2y: '+42.3%', perf3y: '+68.7%' },
  { code: 'C0115024', name: '法盛AI及機器人基金-R/A美元級別', isin: 'LU1923623000', currency: 'USD', risk: 3, type: 'Core', desc: '聚焦人工智慧與機器人自動化領域的上下游產業鏈，掌握未來科技趨勢。', perf: '+22.5%', perf2y: '+48.9%', perf3y: '+72.1%' },
  { code: 'C0054008', name: '法盛漢瑞斯全球股票基金-R/A美元級別', isin: 'LU0130103400', currency: 'USD', risk: 3, type: 'Core', desc: '採用價值投資法，在全球範圍內尋找股價被低估的優質企業。', perf: '+10.5%', perf2y: '+18.2%', perf3y: '+31.4%' },
  { code: 'C0054011', name: '法盛漢瑞斯美國股票基金-R/D美元級別', isin: 'LU0130517989', currency: 'USD', risk: 3, type: 'Core', desc: '專注於美國大型價值股，強調安全邊際與長期持有的複利效果。', perf: '+11.2%', perf2y: '+20.5%', perf3y: '+33.8%' },
  { code: '98638826', name: '統一大東協高股息基金(美元)', isin: 'TW000T0935B2', currency: 'USD', risk: 3, type: 'Core', desc: '佈局東協高成長潛力國家，並精選具備高股息優勢之企業。', perf: '+8.5%', perf2y: '+15.1%', perf3y: '+24.9%' },
  { code: 'C0115019', name: '法盛訂閱經濟基金-R/A美元級別', isin: 'LU2092197867', currency: 'USD', risk: 3, type: 'Core', desc: '投資於採用訂閱模式之企業，享有高客戶黏著度與穩定現金流優勢。', perf: '+16.3%', perf2y: '+31.7%', perf3y: '+52.1%' },
  { code: '98641529', name: '野村策略轉機多重資產基金-月配類型', isin: 'TW000T32V5B0', currency: 'TWD', risk: 2, type: 'Satellite', desc: '靈活配置於股票、債券及其他資產，旨在捕捉市場轉機並提供每月穩定配息。', perf: '+5.5%', perf2y: '+10.2%', perf3y: '+18.4%' },
  { code: '98637081', name: '野村新興非投資等級債券組合基金', isin: 'TW000T3252B9', currency: 'TWD', risk: 2, type: 'Satellite', desc: '佈局全球新興市場高收益債券，透過分散投資降低單一國家風險。', perf: '+6.1%', perf2y: '+11.5%', perf3y: '+20.2%' },
  { code: 'C0109017', name: 'PGIM全球精選不動產證券基金A美元', isin: 'IE00BMQ64708', currency: 'USD', risk: 2, type: 'Satellite', desc: '投資於全球REITs與不動產相關證券，提供抗通膨特性與穩定收益來源。', perf: '+4.2%', perf2y: '+8.7%', perf3y: '+15.5%' },
  { code: '98641534', name: '野村策略轉機多重資產基金(美元)', isin: 'TW000T32V5F1', currency: 'USD', risk: 2, type: 'Satellite', desc: '美元計價之多重資產配置，透過股債平衡降低投組波動。', perf: '+5.8%', perf2y: '+10.9%', perf3y: '+19.1%' },
];

export const QUESTIONS: Record<string, Question[]> = {
  type2: [
    { id: 1, text: "一想到火鍋，我就想到減肥。", isAggressive: false },
    { id: 2, text: "一想到品質，我就想到太貴。", isAggressive: false },
    { id: 3, text: "一想到高配息，我就想到我需要。", isAggressive: false },
    { id: 4, text: "一想到暴跌，我就想到加碼。", isAggressive: true },
    { id: 5, text: "一想到借錢投資，我就想到加速破產。", isAggressive: false },
    { id: 6, text: "一想到存股，我就覺得無聊。", isAggressive: true },
    { id: 7, text: "一想到契約，我就感到被限制。", isAggressive: true },
    { id: 8, text: "一想到吃Buffet，我就覺得好空虛。", isAggressive: false },
    { id: 9, text: "一想到小孩教育，我就想到送出國。", isAggressive: true },
    { id: 10, text: "一想到買手機，我就想到指定品牌。", isAggressive: false },
  ],
  type3: [
    { id: 11, q: "比起搖錢樹長大，我更要每月掉金幣直接花。", type: "bool", isAggressive: false },
    { id: 12, q: "是我不急著收成，寧願養分全回流，讓搖錢樹長大。", type: "bool", isAggressive: true },
    { id: 13, q: "是持有「銀河通用幣」（如美元）讓我更有安全感。", type: "bool", isAggressive: false },
    { id: 14, q: "是看到隔壁大豐收我不跟風，只守好熟悉的作物。", type: "bool", isAggressive: false },
    { id: 15, q: "是與其求穩，我更想賭一把未來的「外星變種神木」。", type: "bool", isAggressive: true },
    { id: 16, q: "是交給機器人自動灌溉，比我自己看心情動手更可靠。", type: "bool", isAggressive: true },
    { id: 17, q: "是這棵樹是留給下一代的傳家寶，不是給我用的。", type: "bool", isAggressive: true },
    { id: 18, q: "是追求金幣自由，是為了徹底退休，不用再辛苦耕種。", type: "bool", isAggressive: false },
    { id: 19, q: "來到宇宙樹苗交易所，你只能買一棵樹苗，你會選哪棵?", type: "choice", options: [{val: 7, text: "傑克魔豆樹 (高風險高回報)"}, {val: 1, text: "穩配息蘋果樹 (穩定收益)"}] },
    { id: 20, q: "宇宙農業部開放三個星系讓你去開墾，你想去哪裡?", type: "choice", options: [{val: 1, text: "銀河聯盟 (法規完善)"}, {val: 7, text: "邊境荒野 (無政府高獲利)"}] },
  ],
  type4: [
    { id: 21, text: "我常在事後才發現，自己當下其實是情緒化決定。", isAggressive: true },
    { id: 22, text: "如果沒有人提醒，我很容易忘記長期計畫。", isAggressive: true },
    { id: 23, text: "比起錯過機會，我更怕做錯決定。", isAggressive: false },
    { id: 24, text: "看到別人投資賺錢，我會重新檢討自己的配置。", isAggressive: true },
    { id: 25, text: "看到排隊名店，我也會想去排隊嚐鮮。", isAggressive: true },
    { id: 26, text: "去熟悉的餐廳，我每次都點一樣的餐點。", isAggressive: false },
    { id: 27, text: "買新手機時，我一定會加購意外險。", isAggressive: false },
    { id: 28, text: "參加抽獎活動，比起『50% 機會得大獎』，我寧願選『100% 獲得小獎』。", isAggressive: false },
    { id: 29, text: "比起賺獎金，我更喜歡底薪高一點。", isAggressive: false },
  ]
};
