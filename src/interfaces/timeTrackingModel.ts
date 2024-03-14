export interface DailyReport {
  weeks: Week[];
  currencies: Currency[];
  totalTime: number;
  totalPayment: TotalPayment[];
  beginDateStr: string;
  endDateStr: string;
}

export interface Week {
  year: number;
  onum: number;
  tasksInfo: never[]; // Empty array, needs more information to define properly
  days: Day[];
  totalTime: number;
  totalTimeRatio: number | null;
  totalPaymentByCurrencies: TotalPayment[];
  totalPaymentByCurrenciesRatio: never[]; // Empty array, needs more information to define properly
}

export interface Day {
  inPeriod: boolean;
  tasksInfo: TaskInfo[];
  totalTime: number;
  totalTimeRatio: number;
  totalPaymentByCurrencies: TotalPayment[];
  totalPaymentByCurrenciesRatio: TotalPayment[];
  dateStr: string;
}

export interface TaskInfo {
  task: Task;
  totalTime: number;
  totalTimeRatio: number;
  totalPaymentByCurrencies: TotalPayment[];
  totalPaymentByCurrenciesRatio: TotalPayment[];
  totalPayment: number;
  totalPaymentRatio: number;
}

export interface Task {
  id: number;
  name: string;
  description: string | null;
  icon: string;
  color: string;
  ownerId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  hourlyRate: number;
  currencyId: number;
  extId: string;
  pomodoroTime: number;
  sideIndex: number;
  tag: string | null;
  highPriority: boolean;
  pomodoro: boolean;
  billable: boolean;
}

export interface TotalPayment {
  currencyId: number;
  value: number;
}

export interface Currency {
  id: number;
  symbol: string;
  key: string;
}
