const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { type: 'Business',value:'Business', amount: 0, color: incomeColors[0] },
  { type: 'Investments',value:'Investments', amount: 0, color: incomeColors[1] },
  { type: 'Extra income',value:'ExtraIncome', amount: 0, color: incomeColors[2] },
  { type: 'Deposits',value:'Deposits', amount: 0, color: incomeColors[3] },
  { type: 'Lottery',value:'Lottery', amount: 0, color: incomeColors[4] },
  { type: 'Gifts',value:'Gifts', amount: 0, color: incomeColors[5] },
  { type: 'Salary',value:'Salary', amount: 0, color: incomeColors[6] },
  { type: 'Savings',value:'Savings', amount: 0, color: incomeColors[7] },
  { type: 'Rental income',value:'RentalIncome', amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: 'Bills',value:'Bills', amount: 0, color: expenseColors[0] },
  { type: 'Car',value:'Car', amount: 0, color: expenseColors[1] },
  { type: 'Clothes',value:'Clothes', amount: 0, color: expenseColors[2] },
  { type: 'Travel',value:'Travel', amount: 0, color: expenseColors[3] },
  { type: 'Food',value:'Food', amount: 0, color: expenseColors[4] },
  { type: 'Shopping',value:'Shopping', amount: 0, color: expenseColors[5] },
  { type: 'House',value:'House', amount: 0, color: expenseColors[6] },
  { type: 'Entertainment',value:'Entertainment', amount: 0, color: expenseColors[7] },
  { type: 'Phone',value:'Phone', amount: 0, color: expenseColors[8] },
  { type: 'Pets',value:'Pets', amount: 0, color: expenseColors[9] },
  { type: 'Other',value:'Other', amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};