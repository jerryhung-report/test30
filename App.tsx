import React, { useState, useEffect, useCallback } from 'react';
import { 
  User, Target, Zap, Shield, ChevronRight, ShoppingCart, 
  Info, X, ExternalLink, CheckSquare, Square, Leaf, Globe, 
  Satellite, Lock, Database, LayoutGrid, CheckCircle2,
  Trash2, BrainCircuit, AlertCircle, Check, RotateCcw, ChevronLeft
} from 'lucide-react';
import { MOCK_FUNDS, QUESTIONS } from './constants';
import { Fund, UserFormData, Persona, Lead, Question } from './types';

// --- Helper Components ---

const ProgressBar = ({ current, total, subCurrent, subTotal }: { current: number, total: number, subCurrent?: number, subTotal?: number }) => (
  <div className="flex flex-col items-center gap-1 w-full max-w-xs">
    <div className="text-[12px] lg:text-xs font-bold text-slate-500">
      總進度 {current}/{total} {subCurrent !== undefined && `(單元題次: ${subCurrent + 1}/${subTotal})`}
    </div>
    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden shadow-inner border border-slate-300/10">
      <div 
        className="h-full bg-emerald-600 transition-all duration-500 ease-out shadow-[0_0_8px_rgba(16,185,129,0.3)]"
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
  </div>
);

const getPerfColorClass = (perf: string | undefined) => {
  if (!perf) return 'text-slate-400';
  if (perf.startsWith('+')) return 'text-red-600';
  if (perf.startsWith('-')) return 'text-emerald-600';
  return 'text-slate-800';
};

const FundCard = ({ fund, isSelected, onToggle, onClick }: { fund: Fund, isSelected: boolean, onToggle: (code: string) => void, onClick: (fund: Fund) => void, key?: React.Key }) => {
  const isCore = fund.type === 'Core';
  return (
    <div 
      className={`group relative bg-white border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        isSelected ? 'border-emerald-500 ring-1 ring-emerald-500/20 shadow-emerald-50' : 'border-slate-200'
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-1 flex gap-4 items-start">
           <button 
            onClick={(e) => { e.stopPropagation(); onToggle(fund.code); }}
            className={`p-1 mt-1 rounded-lg transition-colors flex-shrink-0 ${isSelected ? 'text-emerald-600' : 'text-slate-300 hover:text-slate-400'}`}
          >
            {isSelected ? <CheckSquare size={28} fill="currentColor" className="text-emerald-100" /> : <Square size={28} />}
          </button>
          
          <div className="cursor-pointer space-y-2 flex-1" onClick={() => onClick(fund)}>
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-mono px-2 py-0.5 bg-slate-100 text-slate-500 rounded uppercase tracking-wider">
                {fund.code}
              </span>
              <span className={`text-[12px] font-bold px-2 py-0.5 rounded ${isCore ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                {fund.currency}
              </span>
              <span className="text-[12px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                RR{fund.risk}
              </span>
            </div>
            <h4 className="font-bold text-lg lg:text-2xl text-slate-800 ladies-tight group-hover:text-emerald-600 transition-colors">
              {fund.name}
            </h4>
            <div className="flex items-center text-[12px] text-slate-400 font-medium pt-1">
              <Info size={12} className="mr-1" /> 查看基金亮點與完整投資報告
            </div>
          </div>
        </div>

        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-10 gap-1">
          <div className="text-slate-400 text-[12px] font-bold uppercase tracking-widest mb-0 md:mb-1">近一年報酬</div>
          <div className={`font-black text-2xl lg:text-4xl tracking-tight ${getPerfColorClass(fund.perf)}`}>{fund.perf}</div>
        </div>
      </div>
    </div>
  );
};

const Intro = ({ onStart }: { onStart: () => void }) => (
  <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12 lg:space-y-16 animate-fadeIn pt-8">
    <div className="relative">
      <div className="absolute inset-0 bg-emerald-200 blur-3xl opacity-20 rounded-full scale-150 animate-pulse" />
      <div className="relative bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-2xl border border-emerald-50">
        <Leaf className="w-16 h-16 lg:w-20 lg:h-20 text-emerald-600 mx-auto" strokeWidth={1.5} />
      </div>
    </div>
    <div className="space-y-4 px-4 overflow-hidden">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 tracking-tight whitespace-nowrap leading-tight">
        找到您的 <span className="text-emerald-600">「基」本人格</span>
      </h1>
      <p className="text-base lg:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
        結合投資心理學與智能推薦引擎，只需3分鐘，為您量身打造專屬的基金投資標的。
      </p>
    </div>
    <button 
      onClick={onStart}
      className="group relative px-10 lg:px-14 py-5 lg:py-6 bg-slate-900 text-white rounded-full font-bold shadow-2xl hover:bg-emerald-700 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden"
    >
      <span className="relative z-10 text-base lg:text-lg">開始智能評測</span>
      <ChevronRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
      <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </button>
  </div>
);

const Step1Form = ({ formData, onChange, onNext }: { formData: UserFormData, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void, onNext: () => void }) => (
  <div className="max-w-2xl mx-auto bg-white p-6 lg:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 animate-fadeIn">
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 lg:mb-12 flex items-center gap-4">
      <User className="text-emerald-600" size={32} /> 基礎背景資料
    </h2>
    <div className="grid grid-cols-1 gap-6 lg:gap-8">
      <div className="space-y-3">
        <label className="text-sm lg:text-base font-bold text-slate-600 ml-1">姓名</label>
        <input name="name" placeholder="請輸入您的真實姓名" className="w-full p-4 lg:p-5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-base" onChange={onChange} value={formData.name} />
      </div>
      <div className="space-y-3">
        <label className="text-sm lg:text-base font-bold text-slate-600 ml-1">聯絡電話</label>
        <input name="phone" type="tel" placeholder="09xx-xxx-xxx" className="w-full p-4 lg:p-5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-base" onChange={onChange} value={formData.phone} />
      </div>
      <div className="space-y-3">
        <label className="text-sm lg:text-base font-bold text-slate-600 ml-1">電子信箱</label>
        <input name="email" type="email" placeholder="example@mail.com" className="w-full p-4 lg:p-5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-base" onChange={onChange} value={formData.email} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="text-sm lg:text-base font-bold text-slate-600 ml-1">年齡區間</label>
          <select name="age" className="w-full p-4 lg:p-5 bg-slate-50 border border-slate-200 rounded-2xl outline-none appearance-none text-base" onChange={onChange} value={formData.age}>
            <option value="">請選擇</option>
            {["20歲以下", "20-30歲", "31-40歲", "41-50歲", "51-60歲", "61歲以上"].map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div className="space-y-3">
          <label className="text-sm lg:text-base font-bold text-slate-600 ml-1">投資經驗</label>
          <select name="experience" className="w-full p-4 lg:p-5 bg-slate-50 border border-slate-200 rounded-2xl outline-none appearance-none text-base" onChange={onChange} value={formData.experience}>
            <option value="">請選擇</option>
            {["無經驗", "1-3年", "3-10年", "10年以上"].map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>
    </div>
    <div className="mt-12 flex justify-end">
      <button onClick={onNext} disabled={!formData.name || !formData.email || !formData.age} className="px-10 py-4 bg-emerald-600 text-white rounded-2xl font-black shadow-xl hover:bg-emerald-700 disabled:opacity-50 transition-all active:scale-95">
        下一步
      </button>
    </div>
  </div>
);

const PagedQuiz = ({ type, title, desc, icon: Icon, answers, onAnswer, onComplete, onBackToPrevStep, globalOffset }: { 
  type: 'type2' | 'type4', title: string, desc: string, icon: any, answers: Record<number, number>, onAnswer: (id: number, val: number) => void, onComplete: () => void, onBackToPrevStep: () => void, globalOffset: number, key?: React.Key 
}) => {
  const questions = QUESTIONS[type];
  const [currentIdx, setCurrentIdx] = useState(0);
  const q = questions[currentIdx];
  const isAnswered = answers[q.id] !== undefined;

  const handleNext = useCallback(() => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onComplete();
    }
  }, [currentIdx, questions.length, onComplete]);

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onBackToPrevStep();
    }
  };

  const handleQuickChoice = (val: number) => {
    onAnswer(q.id, val);
    setTimeout(() => {
      handleNext();
    }, 150);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn min-h-[60vh] flex flex-col justify-center pb-48">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mb-2 shadow-inner">
          <Icon size={32} />
        </div>
        <div className="space-y-1">
          <h2 className="text-2xl lg:text-4xl font-black text-slate-900">{title}</h2>
          <p className="text-sm lg:text-lg text-slate-500 font-medium">{desc}</p>
        </div>
        <div className="w-full flex justify-center py-2">
          <ProgressBar current={globalOffset + currentIdx} total={29} subCurrent={currentIdx} subTotal={questions.length} />
        </div>
      </div>

      <div key={q.id} className="bg-white p-8 lg:p-12 rounded-[2.5rem] border-2 border-slate-100 shadow-2xl relative overflow-hidden transition-all duration-500 animate-slideInRight">
        <div className="absolute top-0 right-0 p-6">
          <div className="bg-slate-100 px-4 py-1.5 rounded-full text-[12px] lg:text-xs font-black text-slate-500 tracking-widest">
            第 {globalOffset + currentIdx + 1} / 29 題
          </div>
        </div>

        <h3 className="font-bold text-xl lg:text-3xl text-slate-800 mb-16 pr-12 leading-snug">
          {q.text}
        </h3>

        <div className="space-y-12 px-2">
          <div className="relative group">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-[14px] z-10">
                {[1, 2, 3, 4, 5, 6, 7].map((s) => (
                    <button 
                      key={s} 
                      onClick={() => handleQuickChoice(s)}
                      className="group/dot flex items-center justify-center w-6 h-6 focus:outline-none"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full transition-all group-hover/dot:scale-150 ${answers[q.id] === s ? 'bg-white' : 'bg-black/10'}`} />
                    </button>
                ))}
            </div>
            <input 
              type="range" min="1" max="7" step="1"
              className={`custom-range w-full h-5 lg:h-6 rounded-full appearance-none cursor-pointer transition-all ${
                isAnswered ? 'bg-emerald-200' : 'bg-slate-200'
              }`}
              value={answers[q.id] || 4}
              onChange={(e) => onAnswer(q.id, parseInt(e.target.value))}
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button onClick={() => handleQuickChoice(1)} className="flex flex-col items-start gap-3 group/opt">
               <span className={`text-[12px] lg:text-sm font-black transition-colors ${isAnswered && answers[q.id] === 1 ? 'text-emerald-700' : 'text-emerald-600'}`}>強烈認同</span>
               <span className="text-4xl lg:text-5xl drop-shadow-sm ml-1 group-hover/opt:scale-110 transition-transform">😊</span>
            </button>
            <button onClick={() => handleQuickChoice(4)} className="flex flex-col items-center gap-3 group/opt">
               <span className={`text-[12px] lg:text-sm font-black transition-colors ${isAnswered && answers[q.id] === 4 ? 'text-emerald-500' : 'text-slate-400'}`}>中立</span>
               <span className="text-4xl lg:text-5xl drop-shadow-sm group-hover/opt:scale-110 transition-transform">😐</span>
            </button>
            <button onClick={() => handleQuickChoice(7)} className="flex flex-col items-end gap-3 group/opt">
               <span className={`text-[12px] lg:text-sm font-black transition-colors ${isAnswered && answers[q.id] === 7 ? 'text-slate-700' : 'text-slate-500'}`}>不認同</span>
               <span className="text-4xl lg:text-5xl drop-shadow-sm mr-1 group-hover/opt:scale-110 transition-transform">🙁</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 pt-6">
        <button onClick={handlePrev} className="flex-1 flex items-center justify-center gap-2 px-6 py-4 lg:py-5 border-2 border-slate-200 text-slate-400 rounded-2xl font-black hover:border-slate-300 hover:text-slate-600 transition-all active:scale-95 text-sm">
          <ChevronLeft size={20} /> 上一步
        </button>
        <button 
          onClick={handleNext} 
          disabled={!isAnswered}
          className={`flex-[2] px-10 py-4 lg:py-5 rounded-2xl font-black shadow-xl transition-all flex items-center justify-center gap-2 text-sm ${
            isAnswered ? 'bg-slate-900 text-white hover:bg-emerald-600 hover:-translate-y-1 active:scale-95' : 'bg-slate-100 text-slate-300 cursor-not-allowed'
          }`}
        >
          {currentIdx === questions.length - 1 ? (type === 'type4' ? '生成分析報告' : '進入下一單元') : '下一題'} 
          <ChevronRight size={20} className={isAnswered ? "animate-pulse" : ""} />
        </button>
      </div>
    </div>
  );
};

const PagedIntuitionQuiz = ({ answers, onAnswer, onComplete, onBackToPrevStep, globalOffset }: { 
  answers: Record<number, number>, onAnswer: (id: number, val: number) => void, onComplete: () => void, onBackToPrevStep: () => void, globalOffset: number, key?: React.Key 
}) => {
  const questions = QUESTIONS.type3;
  const [currentIdx, setCurrentIdx] = useState(0);
  const q = questions[currentIdx];
  const isAnswered = answers[q.id] !== undefined;

  const handleNext = useCallback(() => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onComplete();
    }
  }, [currentIdx, questions.length, onComplete]);

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onBackToPrevStep();
    }
  };

  const handleQuickChoice = (val: number) => {
    onAnswer(q.id, val);
    setTimeout(() => {
      handleNext();
    }, 150);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn min-h-[60vh] flex flex-col justify-center pb-48">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mb-2 shadow-inner">
          <BrainCircuit size={32} />
        </div>
        <div className="space-y-1">
          <h2 className="text-2xl lg:text-4xl font-black text-slate-900">直覺趣味聯想</h2>
          <p className="text-sm lg:text-lg text-slate-500 font-medium">讓我們聽聽您潛意識的聲音</p>
        </div>
        <div className="w-full flex justify-center py-2">
          <ProgressBar current={globalOffset + currentIdx} total={29} subCurrent={currentIdx} subTotal={questions.length} />
        </div>
      </div>

      <div key={q.id} className="bg-white p-8 lg:p-12 rounded-[2.5rem] border-2 border-slate-100 shadow-2xl relative overflow-hidden transition-all duration-500 animate-slideInRight">
         <div className="absolute top-0 right-0 p-6">
          <div className="bg-slate-100 px-4 py-1.5 rounded-full text-[12px] lg:text-xs font-black text-slate-500 tracking-widest">
            第 {globalOffset + currentIdx + 1} / 29 題
          </div>
        </div>
        
        <h3 className="font-bold text-xl lg:text-3xl text-slate-800 mb-10 min-h-[4rem] leading-snug pr-12">
          {q.q}
        </h3>

        <div className="space-y-4">
          {q.type === 'choice' ? (
            q.options?.map((opt) => (
              <button
                key={opt.text}
                onClick={() => handleQuickChoice(opt.val)}
                className={`w-full p-6 text-center rounded-2xl border-2 transition-all duration-300 flex items-center justify-center text-base lg:text-xl group/btn ${
                  answers[q.id] === opt.val 
                  ? 'border-emerald-500 bg-emerald-600 text-white font-black shadow-xl scale-[1.02]' 
                  : 'border-slate-100 hover:border-emerald-200 bg-white text-slate-600 hover:text-emerald-700'
                }`}
              >
                <span className="flex-1 text-[14px] lg:text-lg">{opt.text}</span>
              </button>
            ))
          ) : (
            <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
              <button
                onClick={() => handleQuickChoice(1)}
                className={`py-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center ${
                  answers[q.id] === 1 
                  ? 'border-emerald-500 bg-emerald-600 text-white font-black shadow-lg scale-[1.05]' 
                  : 'border-slate-100 hover:border-emerald-200 bg-white text-slate-500'
                }`}
              >
                <span className="text-xl lg:text-3xl font-bold">是</span>
              </button>
              <button
                onClick={() => handleQuickChoice(7)}
                className={`py-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center ${
                  answers[q.id] === 7 
                  ? 'border-slate-800 bg-slate-800 text-white font-black shadow-lg scale-[1.05]' 
                  : 'border-slate-100 hover:border-slate-200 bg-white text-slate-500'
                }`}
              >
                <span className="text-xl lg:text-3xl font-bold">否</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 pt-6">
        <button onClick={handlePrev} className="flex-1 flex items-center justify-center gap-2 px-6 py-4 lg:py-5 border-2 border-slate-200 text-slate-400 rounded-2xl font-black hover:border-slate-300 hover:text-slate-600 transition-all active:scale-95 text-sm">
          <ChevronLeft size={20} /> 上一步
        </button>
        <button 
          onClick={handleNext} 
          disabled={!isAnswered}
          className={`flex-[2] px-10 py-4 lg:py-5 rounded-2xl font-black shadow-xl transition-all flex items-center justify-center gap-2 text-sm ${
            isAnswered ? 'bg-slate-900 text-white hover:bg-emerald-600 hover:-translate-y-1 active:scale-95' : 'bg-slate-100 text-slate-300 cursor-not-allowed'
          }`}
        >
          {currentIdx === questions.length - 1 ? '進入下一單元' : '下一題'} 
          <ChevronRight size={20} className={isAnswered ? "animate-pulse" : ""} />
        </button>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [view, setView] = useState<'quiz' | 'admin'>('quiz');
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<UserFormData>({
    name: '', phone: '', email: '', age: '', occupation: '', income: '', experience: ''
  });
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);
  const [persona, setPersona] = useState<Persona | null>(null);
  const [cart, setCart] = useState<string[]>([]);
  const [selectedFund, setSelectedFund] = useState<Fund | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const savedLeads = localStorage.getItem('fundai_leads');
    if (savedLeads) {
      try {
        setLeads(JSON.parse(savedLeads));
      } catch (e) {
        console.error("Failed to parse leads", e);
      }
    }
  }, []);

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setScore(0);
    setPersona(null);
    setCart([]);
    setFormData({ name: '', phone: '', email: '', age: '', occupation: '', income: '', experience: '' });
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetest = () => {
    setAnswers({});
    setScore(0);
    setPersona(null);
    setCart([]);
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAnswer = (qId: number, val: number) => {
    setAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const calculateResult = useCallback(async () => {
    let total = 0;
    Object.entries(answers).forEach(([qId, val]) => {
      const id = parseInt(qId);
      let question;
      if (id <= 10) question = QUESTIONS.type2.find(q => q.id === id);
      else if (id <= 20) question = QUESTIONS.type3.find(q => q.id === id);
      else question = QUESTIONS.type4.find(q => q.id === id);

      if (question) {
        const numericVal = val as number;
        if (question.type === 'choice') {
          total += numericVal;
        } else {
          total += question.isAggressive ? (8 - numericVal) : numericVal;
        }
      }
    });

    setScore(total);
    let calculatedPersona: Persona;
    if (total < 90) {
      calculatedPersona = { title: "防禦型守護者", desc: "您極度重視資產的安全與穩定，不願意承受劇烈波動。您的理財目標通常是抗通蓬與資產保值。", riskLevel: 1 };
    } else if (total < 130) {
      calculatedPersona = { title: "平衡型策略家", desc: "您在追求成長與管理風險之間尋找黃金分割點。您能理解波動是回報的代價，但仍需一定的安全邊際。", riskLevel: 2 };
    } else {
      calculatedPersona = { title: "進擊型開拓者", desc: "您對未來充滿信心，願意承擔短期的高度波動以換取長期豐厚的回報，具備敏銳的趨勢洞察力。", riskLevel: 3 };
    }
    
    setPersona(calculatedPersona);
    setStep(5);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [answers]);

  const handleSubmit = async () => {
    const newLead: Lead = {
      ...formData,
      id: Math.random().toString(36).substr(2, 9),
      answers,
      score,
      persona: persona?.title || 'Unknown',
      cart,
      timestamp: new Date().toISOString()
    };
    const updatedLeads = [newLead, ...leads];
    setLeads(updatedLeads);
    localStorage.setItem('fundai_leads', JSON.stringify(updatedLeads));
    alert(`感謝您的參與！您的專屬理財配置已成功儲存。\n我們將有專人與您聯繫。`);
    resetQuiz();
  };

  const coreFunds = MOCK_FUNDS.filter(f => f.type === 'Core').slice(0, 3);
  const satelliteFunds = MOCK_FUNDS.filter(f => f.type === 'Satellite').slice(0, 3);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-[60]">
        <div className="max-w-[1440px] mx-auto h-16 lg:h-20 px-4 lg:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={resetQuiz}>
            <div className="w-9 lg:w-11 h-9 lg:h-11 bg-emerald-600 text-white rounded-xl shadow-lg shadow-emerald-200 flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Leaf size={20} fill="currentColor" />
            </div>
            <span className="text-xl lg:text-2xl font-black text-slate-900 tracking-tight">FundAI</span>
          </div>
          <div className="flex items-center gap-4 lg:gap-8">
            <button onClick={() => setView(view === 'admin' ? 'quiz' : 'admin')} className="p-2 text-slate-300 hover:text-emerald-600 transition-colors">
              {view === 'admin' ? <LayoutGrid size={22} /> : <Lock size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24 lg:pt-36 px-4 lg:px-8">
        {view === 'admin' ? (
          <div className="max-w-[1440px] mx-auto space-y-8 animate-fadeIn pb-24">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">
              <h2 className="text-2xl lg:text-3xl font-black text-slate-900 flex items-center gap-3">
                <Database className="text-emerald-600" /> 後台管理中心
              </h2>
              <div className="flex gap-4">
                 <button onClick={() => { localStorage.removeItem('fundai_leads'); setLeads([]); }} className="px-4 py-2 border border-red-200 text-red-600 rounded-xl hover:bg-red-50 font-bold transition flex items-center gap-2 text-sm">
                  <Trash2 size={18} /> 清空所有資料
                </button>
                <button onClick={() => setView('quiz')} className="px-4 py-2 bg-slate-200 text-slate-700 rounded-xl hover:bg-slate-300 font-bold transition text-sm">
                  返回首頁
                </button>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[960px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 text-[12px] font-bold uppercase tracking-widest">
                      <th className="p-6">提交時間</th>
                      <th className="p-6">客戶姓名</th>
                      <th className="p-6">聯繫方式</th>
                      <th className="p-6">性格畫像</th>
                      <th className="p-6">得分</th>
                      <th className="p-6">選購清單</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {leads.length === 0 ? (
                      <tr><td colSpan={6} className="p-12 text-center text-slate-400 italic">目前尚無評測數據</td></tr>
                    ) : (
                      leads.map(lead => (
                        <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-6 text-xs text-slate-500">{new Date(lead.timestamp).toLocaleString()}</td>
                          <td className="p-6 font-bold text-slate-800">{lead.name}</td>
                          <td className="p-6 text-sm">
                            <div>{lead.phone}</div>
                            <div className="text-slate-400 text-xs">{lead.email}</div>
                          </td>
                          <td className="p-6"><span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs font-bold">{lead.persona}</span></td>
                          <td className="p-6 font-mono text-emerald-600 font-bold">{lead.score}</td>
                          <td className="p-6">
                            <div className="flex flex-wrap gap-1">
                              {lead.cart.map(c => <span key={c} className="text-[10px] bg-slate-100 px-1 rounded text-slate-500 font-mono">{c}</span>)}
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <>
            {step === 0 && <Intro onStart={() => setStep(1)} />}
            {step === 1 && <Step1Form formData={formData} onChange={handleInputChange} onNext={() => setStep(2)} />}
            {step === 2 && (
              <PagedQuiz 
                key="type2" 
                type="type2" 
                title="心理關鍵詞聯想" 
                desc="請選擇您對這些生活敘述的直覺認同感" 
                icon={Zap} 
                answers={answers} 
                onAnswer={handleAnswer} 
                onComplete={() => setStep(3)} 
                onBackToPrevStep={() => setStep(1)} 
                globalOffset={0} 
              />
            )}
            {step === 3 && (
              <PagedIntuitionQuiz 
                key="type3" 
                answers={answers} 
                onAnswer={handleAnswer} 
                onComplete={() => setStep(4)} 
                onBackToPrevStep={() => setStep(2)} 
                globalOffset={10} 
              />
            )}
            {step === 4 && (
              <PagedQuiz 
                key="type4" 
                type="type4" 
                title="行為決策場景" 
                desc="在現實的投資世界裡，您通常如何反應？" 
                icon={Target} 
                answers={answers} 
                onAnswer={handleAnswer} 
                onComplete={calculateResult} 
                onBackToPrevStep={() => setStep(3)} 
                globalOffset={20} 
              />
            )}
            {step === 5 && (
              <div className="max-w-[1440px] mx-auto space-y-12 animate-fadeIn pb-64">
                <div className="bg-slate-900 text-white rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-12 overflow-hidden relative shadow-2xl">
                  <div className="absolute top-0 right-0 p-12 opacity-10 hidden lg:block">
                    <Shield size={300} />
                  </div>
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-[12px] lg:text-xs">
                        <CheckCircle2 size={16} /> 評測完成
                      </div>
                      <button onClick={handleRetest} className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-[12px] font-bold text-white transition-all active:scale-95">
                        <RotateCcw size={14} /> 重新測驗
                      </button>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg lg:text-xl text-slate-400 font-medium">親愛的 {formData.name}，您的財富性格為</h2>
                      <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-white">{persona?.title}</h1>
                    </div>
                    <div className="text-slate-300 text-base lg:text-lg max-w-2xl leading-relaxed">{persona?.desc}</div>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 px-2">
                    <div className="space-y-2">
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">專屬智能配置</h3>
                      <p className="text-sm lg:text-base text-slate-500">基於「核心-衛星」策略為您篩選的優質標的</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-16 lg:gap-20">
                    <div className="space-y-8">
                      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                        <Globe className="text-emerald-600" size={28} />
                        <h4 className="text-xl lg:text-2xl font-black text-slate-800">核心基金組合 (Core)</h4>
                        <span className="ml-auto text-[12px] font-bold text-slate-400 uppercase tracking-widest">主攻長期成長</span>
                      </div>
                      <div className="grid grid-cols-1 gap-6 lg:gap-8">
                        {coreFunds.map(fund => (
                          <FundCard key={fund.code} fund={fund} isSelected={cart.includes(fund.code)} onToggle={(code) => setCart(prev => prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code])} onClick={(f) => setSelectedFund(f)} />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-8">
                      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                        <Satellite className="text-slate-600" size={28} />
                        <h4 className="text-xl lg:text-2xl font-black text-slate-800">衛星策略標的 (Satellite)</h4>
                        <span className="ml-auto text-[12px] font-bold text-slate-400 uppercase tracking-widest">優化資產波動</span>
                      </div>
                      <div className="grid grid-cols-1 gap-6 lg:gap-8 mb-16">
                        {satelliteFunds.map(fund => (
                          <FundCard key={fund.code} fund={fund} isSelected={cart.includes(fund.code)} onToggle={(code) => setCart(prev => prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code])} onClick={(f) => setSelectedFund(f)} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- Bottom Floating Bar --- */}
                <div className="fixed bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[960px] lg:max-w-[1200px] px-4 z-50">
                  <div className="bg-slate-900/95 backdrop-blur-xl rounded-[2rem] p-4 lg:p-6 shadow-2xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4 px-2 w-full lg:w-auto">
                      <div className="relative">
                        <div className="bg-emerald-500/10 p-2 lg:p-3 rounded-2xl border border-emerald-500/20 text-emerald-400">
                          <ShoppingCart size={24} />
                        </div>
                        {cart.length > 0 && <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[12px] font-black rounded-full flex items-center justify-center animate-bounce shadow-lg">{cart.length}</div>}
                      </div>
                      <div>
                        <div className="text-white font-black text-sm lg:text-base">已選取 {cart.length} 檔基金</div>
                        <div className="text-slate-400 text-[12px] tracking-tight">基於智能算法為您優化的配置清單</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 w-full lg:w-auto">
                      <button onClick={handleRetest} className="flex-1 lg:flex-none px-6 py-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-2xl font-bold transition-all text-sm active:scale-95">
                        重新測試
                      </button>
                      <button onClick={handleSubmit} disabled={cart.length === 0} className="flex-[2] lg:flex-none px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-black transition-all disabled:opacity-20 flex items-center justify-center gap-2 text-sm shadow-xl active:scale-95">
                        加入購物車 <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {selectedFund && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10 bg-slate-900/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-[2.5rem] w-full max-w-xl shadow-2xl overflow-hidden animate-slideUp">
            <div className="bg-slate-900 p-8 lg:p-10 text-white relative">
              <button onClick={() => setSelectedFund(null)} className="absolute top-6 right-6 text-slate-500 hover:text-white transition"><X size={28} /></button>
              <div className="text-[12px] font-mono text-emerald-400 mb-3 uppercase tracking-widest">{selectedFund.code}</div>
              <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-6">{selectedFund.name}</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold border border-white/10">{selectedFund.currency}</span>
                <span className="bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold border border-white/10">風險 RR{selectedFund.risk}</span>
                <span className="bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold border border-white/10">{selectedFund.type === 'Core' ? '核心' : '衛星'}</span>
              </div>
            </div>
            <div className="p-8 lg:p-10 space-y-8">
              <div className="space-y-4">
                <h4 className="text-[12px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2"><LayoutGrid size={16} /> 投資組合亮點</h4>
                <div className="text-slate-600 leading-relaxed text-base bg-slate-50 p-6 rounded-3xl border border-slate-100 italic">"{selectedFund.desc}"</div>
              </div>
              <div className="space-y-5">
                <h4 className="text-[12px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2"><ChevronRight size={16} /> 歷史績效數據</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-5 bg-slate-50 rounded-3xl border border-slate-100 text-center shadow-sm">
                    <div className="text-[12px] font-bold text-slate-400 uppercase mb-2">1年</div>
                    <div className={`text-xl font-black ${getPerfColorClass(selectedFund.perf)}`}>{selectedFund.perf}</div>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-3xl border border-slate-100 text-center shadow-sm">
                    <div className="text-[12px] font-bold text-slate-400 uppercase mb-2">2年</div>
                    <div className={`text-xl font-black ${getPerfColorClass(selectedFund.perf2y)}`}>{selectedFund.perf2y || 'N/A'}</div>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-3xl border border-slate-100 text-center shadow-sm">
                    <div className="text-[12px] font-bold text-slate-400 uppercase mb-2">3年</div>
                    <div className={`text-xl font-black ${getPerfColorClass(selectedFund.perf3y)}`}>{selectedFund.perf3y || 'N/A'}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 lg:p-10 bg-slate-50 border-t border-slate-100 flex gap-4">
              <button onClick={() => { const code = selectedFund.code; setCart(prev => prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code]); setSelectedFund(null); }} className={`flex-1 py-5 rounded-2xl font-black transition-all text-base ${cart.includes(selectedFund.code) ? 'bg-slate-200 text-slate-600' : 'bg-emerald-600 text-white shadow-xl hover:bg-emerald-700'}`}>
                {cart.includes(selectedFund.code) ? '從購物車中移除' : '加入購物車'}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fadeIn { animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slideUp { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slideInRight { animation: slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .custom-range {
            background-color: #ecfdf5; /* emerald-50 as rail base */
            background-image: linear-gradient(to right, #10b981 0%, #10b981 100%);
            background-repeat: no-repeat;
            background-size: 0% 100%;
        }
        .custom-range::-webkit-slider-runnable-track {
            height: 20px;
            border-radius: 999px;
            background: transparent;
        }
        .custom-range::-webkit-slider-thumb {
            -webkit-appearance: none; appearance: none;
            width: 40px; height: 40px; border-radius: 50%;
            background: #10b981; cursor: pointer;
            border: 4px solid white; 
            box-shadow: 0 12px 24px -6px rgba(16, 185, 129, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.05);
            transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
            margin-top: -10px; /* Offset to center relative to track */
        }
        .custom-range::-webkit-slider-thumb:hover {
            transform: scale(1.1);
            box-shadow: 0 15px 30px -6px rgba(16, 185, 129, 0.5);
        }
        .custom-range::-moz-range-thumb {
            width: 40px; height: 40px; border-radius: 50%;
            background: #10b981; cursor: pointer;
            border: 4px solid white; 
            box-shadow: 0 12px 24px -6px rgba(16, 185, 129, 0.4);
        }
      `}</style>
    </div>
  );
}
