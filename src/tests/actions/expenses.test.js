import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


const updates = {
    description: 'coffee',
    amount: 150
}

test('should remove expense work', () => {
    const action = removeExpense({ id: '123'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    })
});

test('should edit expense work', () => {
    const action = editExpense(1, updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 1,
        updates: {
            description: 'coffee',
            amount: 150
        }
    })
})


