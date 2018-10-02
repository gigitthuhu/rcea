
export default (expenses) => {
    if(!expenses || expenses.length === 0)
    {
        return 0;
    }
    else
    {
        return expenses.reduce((total, expense)=> total + expense.amount, 0);
    }
}