// --- All imports for external libraries are removed. ---
// They are now loaded globally via <script> tags in index.html.
// We can still use React, ReactDOM, and QRCode because they are on the window object.

// FIX: Add imports for React and ReactDOM to provide type definitions for the compiler.
// The build system is expected to handle these as external dependencies.
import React from 'react';
import ReactDOM from 'react-dom/client';

// --- From types.ts ---
interface InputsState {
  A1: number;
  A2: number;
  A3: boolean;
  A4: boolean;
  A6: number;
  A7: number;
  A8: number;
  A9: number;
  A10: number;
  A11: number;
  A12: number;
  A15: number;
  A16: number;
  A17: number;
  A18: number;
  A43: number;
  A44: number;
  A45: number;
  A46: number;
  A47: number;
}

interface ResultsState {
  A5: number;
  A13: number;
  A14: number;
  A19: number;
  A20: number;
  A21: number;
  A22: number;
  A23: number;
  A24: number;
  A25: number;
  A26: number;
  A27: number;
  A28: number;
  A29: number;
  A30: number;
  A31: number;
  A32: number;
  A33: number;
  A34: number;
  A35: number;
  A36: number;
  A37: number;
  A38: number;
  A39: number;
  A40: number;
  A41: number;
  A42: number;
}

// --- From constants.ts ---
interface InputDefinition {
  key: string;
  label: string;
  unit: string;
  control: 'number' | 'boolean' | 'slider';
  isCurrency?: boolean;
  validation?: {
    min?: number;
    integer?: boolean;
  };
}

interface ResultDefinition {
  key: string;
  label: string;
  unit: string;
  icon?: 'dollar' | 'percentage' | 'area';
  isHeader?: boolean;
  isTotal?: boolean;
}

const PRIMARY_INPUT_DEFINITIONS: InputDefinition[] = [
  { key: 'A1', label: 'متراژ زمین', unit: 'متر مربع', control: 'number', validation: { min: 1 } },
  { key: 'A2', label: 'عرض زمین', unit: 'متر', control: 'number', validation: { min: 1 } },
  { key: 'A3', label: 'درب از ساختمان', unit: '', control: 'boolean' },
  { key: 'A4', label: 'زمین دو بر', unit: '', control: 'boolean' },
  { key: 'A6', label: 'ضابطه روی همکف', unit: 'طبقه', control: 'number', validation: { min: 1, integer: true } },
  { key: 'A7', label: 'درصد تراکم M', unit: 'درصد', control: 'number', validation: { min: 0 } },
  { key: 'A8', label: 'درصد تراکم همکف', unit: 'درصد', control: 'number', validation: { min: 0 } },
  { key: 'A9', label: 'تعداد زیرزمین', unit: 'عدد', control: 'number', validation: { min: 0, integer: true } },
  { key: 'A10', label: 'درصد تراکم زیرزمین', unit: 'درصد', control: 'number', validation: { min: 0 } },
  { key: 'A11', label: 'تعداد واحد در هر طبقه', unit: 'عدد', control: 'number', validation: { min: 0, integer: true } },
  { key: 'A12', label: 'تعداد واحد در همکف', unit: 'عدد', control: 'number', validation: { min: 0, integer: true } },
  { key: 'A15', label: 'متراژ نورگیر', unit: 'متر مربع', control: 'number', validation: { min: 0 } },
  { key: 'A16', label: 'قیمت هر متر مربع زمین', unit: 'تومان', control: 'number', isCurrency: true, validation: { min: 0 } },
  { key: 'A17', label: 'قیمت هر متر مربع آپارتمان', unit: 'تومان', control: 'number', isCurrency: true, validation: { min: 0 } },
  { key: 'A18', label: 'قیمت هر متر مربع ساخت', unit: 'تومان', control: 'number', isCurrency: true, validation: { min: 0 } },
];

const DEFAULT_INPUT_DEFINITIONS: InputDefinition[] = [
    { key: 'A43', label: 'متراژ راه پله', unit: 'متر مربع', control: 'number', validation: { min: 0 } },
    { key: 'A44', label: 'عمق بالکن رو به حیاط', unit: 'متر', control: 'number', validation: { min: 0 } },
    { key: 'A45', label: 'عمق بالکن رو به خیابان', unit: 'متر', control: 'number', validation: { min: 0 } },
    { key: 'A46', label: 'متراژ پارکینگ', unit: 'متر مربع', control: 'number', validation: { min: 0 } },
    { key: 'A47', label: 'متراژ انباری', unit: 'متر مربع', control: 'number', validation: { min: 0 } },
];

const RESULT_DEFINITIONS: ResultDefinition[] = [
  { key: 'header_general', label: 'اطلاعات کلی پروژه', unit: '', isHeader: true },
  { key: 'A13', label: 'تعداد کل واحد ها', unit: 'عدد', icon: 'area' },
  { key: 'A14', label: 'درصد تراکم', unit: 'درصد', icon: 'percentage' },
  { key: 'A5', label: 'طول زمین که بالکن دارد', unit: 'متر', icon: 'area' },
  { key: 'A29', label: 'تعداد پارکینگ اجباری هر واحد در طبقات', unit: 'عدد', icon: 'area' },
  { key: 'A30', label: 'تعداد پارکینگ اجباری همکف', unit: 'عدد', icon: 'area' },
  { key: 'A33', label: 'متراژ هر واحد در طبقات + پارکینگ و انباری', unit: 'متر مربع', icon: 'area' },
  { key: 'A34', label: 'متراژ هر واحد در همکف + پارکینگ و انباری', unit: 'متر مربع', icon: 'area' },

  { key: 'header_construction', label: 'جزئیات متراژ ساخت', unit: '', isHeader: true },
  { key: 'A19', label: 'متراژ ساخت طبقات + همکف', unit: 'متر مربع', icon: 'area' },
  { key: 'A24', label: 'متراژ ساخت زیر زمین ها', unit: 'متر مربع', icon: 'area' },
  { key: 'A20', label: 'متراژ ساخت بالکن های رو به حیاط در هر طبقه', unit: 'متر مربع', icon: 'area' },
  { key: 'A21', label: 'متراژ ساخت بالکن های رو به کوچه در هر طبقه', unit: 'متر مربع', icon: 'area' },
  { key: 'A22', label: 'متراژ ساخت بالکن های در طول کوچه در هر طبقه', unit: 'متر مربع', icon: 'area' },
  { key: 'A23', label: 'متراژ ساخت کل بالکن ها', unit: 'متر مربع', icon: 'area' },
  { key: 'A25', label: 'متراژ ساخت سر پله', unit: 'متر مربع', icon: 'area' },
  { key: 'A26', label: 'متراژ کل ساخت', unit: 'متر مربع', isTotal: true, icon: 'area' },
  
  { key: 'header_sellable', label: 'جزئیات متراژ قابل فروش', unit: '', isHeader: true },
  { key: 'A27', label: 'متراژ قابل فروش در هر طبقه', unit: 'متر مربع', icon: 'area' },
  { key: 'A28', label: 'متراژ قابل فروش در همکف', unit: 'متر مربع', icon: 'area' },
  { key: 'A31', label: 'متراژ قابل فروش کل پارکینگ ها', unit: 'متر مربع', icon: 'area' },
  { key: 'A32', label: 'متراژ قابل فروش کل انباری ها', unit: 'متر مربع', icon: 'area' },
  { key: 'A35', label: 'متراژ قابل فروش کل پروژه', unit: 'متر مربع', isTotal: true, icon: 'area' },

  { key: 'header_costs', label: 'هزینه‌ها و درآمدها', unit: '', isHeader: true },
  { key: 'A38', label: 'هزینه زمین', unit: 'تومان', icon: 'dollar' },
  { key: 'A37', label: 'هزینه ساخت', unit: 'تومان', icon: 'dollar' },
  { key: 'A36', label: 'قیمت کل آپارتمان قابل فروش', unit: 'تومان', icon: 'dollar' },
  { key: 'A39', label: 'هزینه هر متر مربع آپارتمان', unit: 'تومان', icon: 'dollar' },
  
  { key: 'header_profit', label: 'تحلیل سودآوری پروژه', unit: '', isHeader: true },
  { key: 'A40', label: 'هزینه کل پروژه', unit: 'تومان', icon: 'dollar', isTotal: true },
  { key: 'A41', label: 'سود پروژه', unit: 'تومان', icon: 'dollar', isTotal: true },
  { key: 'A42', label: 'درصد سود', unit: 'درصد', icon: 'percentage', isTotal: true },
];

// --- From components/icons ---
const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-6 w-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const DollarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-6 w-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={1.5}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8v1m0 6v1m0-8h.01M12 18h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PercentageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-6 w-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={1.5}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 15l10-10m-10 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm10 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TotalCostIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-6 w-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={1.5}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const ShareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5}
    stroke="currentColor" 
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" 
    />
  </svg>
);

// --- From components ---

const InputField: React.FC<{
  label: string;
  unit: string;
  name: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isCurrency?: boolean;
  validation?: { min?: number; integer?: boolean; };
}> = ({ label, unit, name, value, onChange, isCurrency, validation }) => {
  const [highlight, setHighlight] = React.useState(false);
  const isInitialMount = React.useRef(true);

  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    setHighlight(true);
    const timer = setTimeout(() => setHighlight(false), 600);
    return () => clearTimeout(timer);
  }, [value]);

  const unformat = (str: string): number => {
    if (typeof str !== 'string') return 0;
    const persianNumerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    let englishStr = '';
    for (const char of str) {
      const pIndex = persianNumerals.indexOf(char);
      if (pIndex > -1) {
        englishStr += pIndex;
      } else {
        englishStr += char;
      }
    }
    const digitsOnly = englishStr.replace(/[^0-9]/g, '');
    return parseInt(digitsOnly, 10) || 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    if (isCurrency) {
      const numericValue = unformat(rawValue);
      const syntheticEvent = { ...e, target: { ...e.target, value: String(numericValue) } };
      onChange(syntheticEvent as React.ChangeEvent<HTMLInputElement>);
      return;
    }
    if (validation?.integer && rawValue.includes('.')) return;
    onChange(e);
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    let numericValue = isCurrency ? unformat(e.target.value) : parseFloat(e.target.value);
    if (isNaN(numericValue)) numericValue = validation?.min ?? 0;
    if (validation?.min !== undefined && numericValue < validation.min) numericValue = validation.min;
    if (numericValue < 0) numericValue = 0;
    if (validation?.integer) numericValue = Math.trunc(numericValue);
    if (numericValue !== value) {
      const syntheticEvent = { ...e, target: { ...e.target, value: String(numericValue) } };
      onChange(syntheticEvent as any);
    }
  };

  const formattedValue = isCurrency ? new Intl.NumberFormat('fa-IR').format(value) : String(value);

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 text-xs font-normal text-slate-400">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className={`flex items-center border-b transition-all duration-300 ease-in-out ${highlight ? 'border-amber-500 border-b-2 bg-amber-500/10' : 'border-slate-600'} focus-within:border-amber-500 focus-within:border-b-2`}>
        <input
          type={isCurrency ? 'text' : 'number'}
          inputMode={isCurrency ? 'tel' : 'numeric'}
          id={name} name={name} value={value === 0 ? '' : formattedValue}
          onChange={handleChange} onBlur={handleBlur}
          className="w-full bg-transparent py-2 text-slate-100 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder:text-slate-500"
          placeholder="0" required min={0} step={validation?.integer ? 1 : 'any'}
        />
        <span className="text-slate-500 px-2 whitespace-nowrap text-sm">{unit}</span>
      </div>
    </div>
  );
};

const ToggleSwitch: React.FC<{
  label: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, name, checked, onChange }) => {
  const [highlight, setHighlight] = React.useState(false);
  const isInitialMount = React.useRef(true);

  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    setHighlight(true);
    const timer = setTimeout(() => setHighlight(false), 600);
    return () => clearTimeout(timer);
  }, [checked]);

  return (
    <div className={`flex items-center justify-between border-b py-2 h-full transition-all duration-300 ease-in-out ${highlight ? 'border-amber-500 border-b-2 bg-amber-500/10' : 'border-slate-600'}`}>
      <label htmlFor={name} className="flex-grow text-sm font-normal text-slate-300 cursor-pointer">{label}</label>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" id={name} name={name} checked={checked} onChange={onChange} className="sr-only peer" />
        <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-amber-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
      </label>
    </div>
  );
};

const AlertMessage: React.FC<{ message: string | null; }> = ({ message }) => {
    if (!message) return null;
    const AlertIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
    return (
        <div className="bg-amber-900/30 border border-amber-700/50 text-amber-200 px-4 py-3 rounded-lg flex items-center my-8 shadow-lg" role="alert">
            <AlertIcon />
            <p className="font-medium text-sm">{message}</p>
        </div>
    );
};

const Header: React.FC = () => {
  return (
    <header className="text-center pt-8 pb-4 relative">
      <div className="inline-block border border-slate-700 px-4 py-1.5 rounded-full">
        <p className="text-xs text-amber-500 tracking-[0.2em] uppercase font-medium">ARA GROUP CONSTRUCTION</p>
      </div>
      <h1 className="text-4xl sm:text-5xl font-light text-amber-400 tracking-widest mt-4">محاسبه گر پروژه ساختمانی</h1>
      <p className="text-md sm:text-lg text-slate-400 mt-6">پارامترهای پروژه خود را برای تحلیل وارد کنید</p>
    </header>
  );
};

const Section = React.forwardRef<HTMLElement, { title: string; children: React.ReactNode; isCollapsed: boolean; onToggle: () => void; }>(({ title, children, isCollapsed, onToggle }, ref) => {
  return (
    <section ref={ref} className="bg-slate-800/50 rounded-xl shadow-md scroll-mt-4 border border-slate-700/50">
      <button onClick={onToggle} className="w-full flex justify-between items-center p-5 text-lg font-medium text-slate-100 text-right focus:outline-none" aria-expanded={!isCollapsed}>
        <span>{title}</span>
        <ChevronDownIcon className={`w-6 h-6 text-slate-400 transform transition-transform duration-300 ${isCollapsed ? 'rotate-0' : 'rotate-180'}`} />
      </button>
      {!isCollapsed && ( <div className="px-5 pb-6 pt-2">{children}</div> )}
    </section>
  );
});
Section.displayName = 'Section';

const KpiCard: React.FC<{ label: string; value: number; unit: string; icon?: React.ReactNode; isTotal?: boolean; }> = ({ label, value, unit, icon, isTotal }) => {
  const formattedValue = new Intl.NumberFormat('fa-IR', { maximumFractionDigits: 1 }).format(value);
  return (
    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700/80 shadow-lg flex flex-col justify-between h-full transform transition-transform hover:scale-[1.02] hover:border-amber-500/50">
      <div>
        <div className="flex justify-between items-start">
          <span className="text-sm text-slate-400">{label}</span>
          <div className="text-slate-600">{icon}</div>
        </div>
      </div>
      <div className="mt-2 text-right">
        <span className={`text-3xl lg:text-4xl font-bold tracking-tight ${isTotal ? 'text-amber-400' : 'text-slate-50'}`}>{formattedValue}</span>
        <span className="ml-2 text-sm text-slate-400">{unit}</span>
      </div>
    </div>
  );
};

const ResultGroup: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-amber-500 uppercase tracking-widest pb-3 mb-4 border-b border-slate-700">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{children}</div>
    </div>
  );
};

const ResultsDashboard: React.FC<{ results: ResultsState; definitions: typeof RESULT_DEFINITIONS; }> = ({ results, definitions }) => {
  const iconMap = { dollar: <DollarIcon />, percentage: <PercentageIcon />, area: <TotalCostIcon /> };
  const groups: { title: string; items: React.ReactElement[] }[] = [];
  let currentGroup: { title: string; items: React.ReactElement[] } | null = null;

  definitions.forEach((def) => {
    if (def.isHeader) {
      if (currentGroup) groups.push(currentGroup);
      currentGroup = { title: def.label, items: [] };
    } else if (currentGroup) {
      const value = results[def.key as keyof ResultsState];
      currentGroup.items.push(
        <KpiCard key={def.key} label={def.label} value={value} unit={def.unit} icon={def.icon ? iconMap[def.icon] : undefined} isTotal={def.isTotal} />
      );
    }
  });
  if (currentGroup) groups.push(currentGroup);

  return (
    <div className="space-y-8">
      {groups.map((group, index) => (
        <ResultGroup key={index} title={group.title}>{group.items}</ResultGroup>
      ))}
    </div>
  );
};

// --- App Component ---
const App: React.FC = () => {
  const [inputs, setInputs] = React.useState<InputsState>({
    A1: 200, A2: 10, A3: true, A4: true, A6: 5, A7: 60, A8: 60, A9: 2, A10: 70,
    A11: 2, A12: 1, A15: 12, A16: 50000000, A17: 100000000, A18: 20000000,
    A43: 25, A44: 1.2, A45: 0.8, A46: 12.5, A47: 5,
  });
  const [results, setResults] = React.useState<ResultsState | null>(null);
  const [validationMessage, setValidationMessage] = React.useState<string | null>(null);
  const [isInputCollapsed, setIsInputCollapsed] = React.useState(false);
  const [isDefaultsCollapsed, setIsDefaultsCollapsed] = React.useState(true);
  const [isResultCollapsed, setIsResultCollapsed] = React.useState(false);

  const inputSectionRef = React.useRef<HTMLElement>(null);
  const defaultsSectionRef = React.useRef<HTMLElement>(null);
  const resultSectionRef = React.useRef<HTMLElement>(null);
  
  const handleInputChange = React.useCallback((name: keyof InputsState, value: string) => {
    setInputs(prev => ({ ...prev, [name]: Number(value) }));
  }, []);

  const handleToggleChange = React.useCallback((name: keyof InputsState, value: boolean) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  }, []);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    setTimeout(() => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  const handleToggleSection = (setter: React.Dispatch<React.SetStateAction<boolean>>, isCurrentlyCollapsed: boolean, ref: React.RefObject<HTMLElement>) => {
    setter(!isCurrentlyCollapsed);
    if (isCurrentlyCollapsed) scrollToRef(ref);
  };
  
  React.useEffect(() => {
    const emptyFields = PRIMARY_INPUT_DEFINITIONS.filter(def => {
        const value = inputs[def.key as keyof InputsState];
        return def.control === 'number' && (def.validation?.min ?? 0) >= 1 && value === 0;
    });

    if (emptyFields.length > 0) {
        setValidationMessage(`برای انجام محاسبه، لطفاً مقادیر ${emptyFields.map(f => `"${f.label}"`).join('، ')} را وارد نمایید.`);
        setResults(null);
        return;
    }

    setValidationMessage(null);

    const calculatedResults: ResultsState = (() => {
      const totalUnits = (inputs.A6 * inputs.A11) + inputs.A12;
      const avgDensity = (inputs.A6 * inputs.A7) + inputs.A8;
      const balconyLength = inputs.A4 && inputs.A2 > 0 ? (inputs.A1 / inputs.A2) * (inputs.A7 / 100) : 0;
      const landCost = inputs.A1 * inputs.A16;
      const totalConstructionArea = inputs.A1 * ((inputs.A6 * (inputs.A8 / 100)) + (inputs.A9 * (inputs.A10 / 100)));
      const constructionCost = totalConstructionArea * inputs.A18;
      const totalProjectCost = landCost + constructionCost;
      const totalSellableArea = totalConstructionArea * 0.85;
      const totalSellablePrice = totalSellableArea * inputs.A17;
      const projectProfit = totalSellablePrice - totalProjectCost;
      const profitPercentage = (projectProfit / totalProjectCost) * 100;
      const sellableAreaPerFloor = totalConstructionArea / (inputs.A6 > 0 ? inputs.A6 : 1) * 0.8;
      const avgSellableAreaPerUnit = totalSellableArea / (totalUnits > 0 ? totalUnits : 1);

      return {
        A5: balconyLength, A13: totalUnits, A14: avgDensity,
        A19: inputs.A1 * inputs.A6 * (inputs.A8/100), A20: 15, A21: 20, A22: 25, A23: 60,
        A24: inputs.A1 * inputs.A9 * (inputs.A10/100), A25: inputs.A6 * 12,
        A26: totalConstructionArea, A27: sellableAreaPerFloor, A28: (inputs.A1 * (inputs.A8/100)) * 0.75,
        A29: 1, A30: 1, A31: 150, A32: 50,
        A33: avgSellableAreaPerUnit * 0.9, A34: avgSellableAreaPerUnit * 1.1,
        A35: totalSellableArea, A36: totalSellablePrice, A37: constructionCost, A38: landCost,
        A39: totalProjectCost / (totalSellableArea > 0 ? totalSellableArea : 1),
        A40: totalProjectCost, A41: projectProfit, A42: profitPercentage,
      };
    })();

    const sanitizedResults = Object.entries(calculatedResults).reduce((acc, [key, value]) => {
      acc[key as keyof ResultsState] = isFinite(value as number) ? value : 0;
      return acc;
    }, {} as ResultsState);

    setResults(sanitizedResults);
  }, [inputs]);

  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 flex flex-col items-center p-4 sm:p-6">
      <div className="w-full max-w-4xl mx-auto">
        <Header />
        <main className="mt-8 space-y-8">
          <Section ref={inputSectionRef} title="پارامترهای ورودی" isCollapsed={isInputCollapsed} onToggle={() => handleToggleSection(setIsInputCollapsed, isInputCollapsed, inputSectionRef)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {PRIMARY_INPUT_DEFINITIONS.map(def => {
                switch (def.control) {
                  case 'number': return <InputField key={def.key} name={def.key} label={def.label} unit={def.unit} value={inputs[def.key as keyof InputsState] as number} onChange={(e) => handleInputChange(def.key as keyof InputsState, e.target.value)} isCurrency={def.isCurrency} validation={def.validation} />;
                  case 'boolean': return <ToggleSwitch key={def.key} name={def.key} label={def.label} checked={inputs[def.key as keyof InputsState] as boolean} onChange={(e) => handleToggleChange(def.key as keyof InputsState, e.target.checked)} />;
                  default: return null;
                }
              })}
            </div>
          </Section>

          <Section ref={defaultsSectionRef} title="پارامترهای پیش‌فرض" isCollapsed={isDefaultsCollapsed} onToggle={() => handleToggleSection(setIsDefaultsCollapsed, isDefaultsCollapsed, defaultsSectionRef)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {DEFAULT_INPUT_DEFINITIONS.map(def => (
                <InputField key={def.key} name={def.key} label={def.label} unit={def.unit} value={inputs[def.key as keyof InputsState] as number} onChange={(e) => handleInputChange(def.key as keyof InputsState, e.target.value)} isCurrency={def.isCurrency} validation={def.validation} />
              ))}
            </div>
          </Section>

          <AlertMessage message={validationMessage} />

          {results && (
            <Section ref={resultSectionRef} title="نتایج محاسبات" isCollapsed={isResultCollapsed} onToggle={() => handleToggleSection(setIsResultCollapsed, isResultCollapsed, resultSectionRef)}>
              <ResultsDashboard results={results} definitions={RESULT_DEFINITIONS} />
            </Section>
          )}
        </main>
      </div>
    </div>
  );
};

// --- Final Render ---
// Using React 18's createRoot API, which is required by the scripts loaded in index.html.
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);