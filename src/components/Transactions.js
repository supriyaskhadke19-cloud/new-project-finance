import { useState } from "react";
import { transactions } from "../data/mockData";

function Transactions({ role }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredData = transactions
    .filter((t) =>
      t.category.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) =>
      filter === "all" ? true : t.type === filter
    );

  return (
    <div>
      <h3>Transactions</h3>
      <p>Role:{role}</p>
    {role === "admin"&&(
        <button style={{margin:"10px"}}>
            Add Transactions
            </button>
    )}
      
      <input
        type="text"
        placeholder="Search category..."
        onChange={(e) => setSearch(e.target.value)}
      />

      
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      
      {filteredData.map((t) => (
        <div key={t.id} style={{ border: "1px solid gray", margin: "5px", padding: "10px" }}>
          <p>{t.date}</p>
          <p>₹{t.amount}</p>
          <p>{t.category}</p>
          <p>{t.type}</p>
        </div>
      ))}
    </div>
  );
}

export default Transactions;