import{ useState} from "react"
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Chart from "./components/Chart";
import Transactions from "./components/Transactions";
function App(){
  const [role,setRole]=useState("viewer");
  return (
    <div>
      <Navbar />
      <select onChange={(e) =>setRole(e.target.value)}>
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
      <Dashboard />
      <Chart />
      <Transactions role={role} />
    </div>
  );
}
export default App;
