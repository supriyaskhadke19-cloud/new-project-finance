import { transactions } from "../data/mockData";
import Card from "./Card"

function Dashboard() {
    const income = transactions
    .filter(t => t.type ==="income")
    .reduce((a,t) => a + t.amount, 0);

     const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, t) => a + t.amount, 0);
     const balance = income - expense;

return(
    <div style={{display: "flex" }}>
        <Card title="Balance" value={balance} />
        <Card title="Income" value={income} />
        <Card title="Expense" value={expense}/>
    </div>
);
    
}  




export default Dashboard;