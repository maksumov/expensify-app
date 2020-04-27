export default (expenses) => expenses.map((item) => item.amount).reduce((a, c) => a + c, 0)
