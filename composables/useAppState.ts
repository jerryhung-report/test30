import type { UserFormData, Persona } from '~/types';

export const useAppState = () => {
  const step = useState<"intro" | "form" | "quiz" | "results" | "cart">("app_step", () => "intro");
  const formData = useState<UserFormData>("app_form_data", () => ({ gender: "", age: "", phone: "", email: "", allocation: "" }));
  const persona = useState<Persona>("app_persona", () => PERSONAS[0]!);
  const selectedFunds = useState<string[]>("app_selected_funds", () => []);

  const P1 = 210; // Max score

  const router = useRouter();
  const route = useRoute();

  const init = () => {
    const s = route.query.step as any;
    if (s && ["intro", "form", "quiz", "results", "cart"].includes(s)) {
      step.value = s;
    }
    
    if (import.meta.client) {
      const savedForm = localStorage.getItem('pocket_form');
      if (savedForm) formData.value = JSON.parse(savedForm);
    }
  };

  // Watch step changes
  watch(step, (newStep) => {
    router.replace({ query: { ...route.query, step: newStep } });
    if (import.meta.client) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  const setStep = (s: typeof step.value) => {
    step.value = s;
  };

  const handleFormChange = (d: UserFormData) => {
    formData.value = d;
    if (import.meta.client) {
      localStorage.setItem('pocket_form', JSON.stringify(d));
    }
  };

  const handleQuizComplete = (answers: Record<number, number>) => {
    let total = 0;
    Object.values(answers).forEach(v => total += v);
    const index = Math.min(Math.floor(total / P1 * 10), 9);
    const p = PERSONAS[index];
    if (p) {
      persona.value = p;
      selectedFunds.value = [];
      step.value = "results";
    }
  };

  const toggleFund = (code: string) => {
    if (selectedFunds.value.includes(code)) {
      selectedFunds.value = selectedFunds.value.filter(c => c !== code);
    } else {
      selectedFunds.value.push(code);
    }
  };

  const resetAnalysis = () => {
    selectedFunds.value = [];
    step.value = "quiz";
  };

  return {
    step,
    formData,
    persona,
    selectedFunds,
    init,
    setStep,
    handleFormChange,
    handleQuizComplete,
    toggleFund,
    resetAnalysis
  };
};
