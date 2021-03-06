import {BudgetItem} from './budget-item';
import {getRandomId} from '../lib/utils';

export let budgetItems: BudgetItem[] = [
    {
        sum: 900,
        description: 'Salary'
    },
    {
        sum: -150,
        description: 'BB-8 toy'
    },
    {
        sum: -20,
        description: 'Groceries'
    },
    {
        sum: -200,
        description: 'Emergency'
    },
    {
        sum: -50,
        description: 'Superman toy'
    },
    {
        sum: 80,
        description: 'Loan returned'
    }
].map(item => new BudgetItem(getRandomId(), item.sum, item.description));

