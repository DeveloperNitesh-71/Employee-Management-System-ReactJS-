import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const AuthData = useContext(AuthContext);
  let loggedInUser = null

  useEffect(() => {
    if (localStorage.getItem("loggedInUser")) {
      loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
      setUser(loggedInUser.role)
    }
    
  }, [AuthData]);
  




  const handleLogin = (email, password) => {
    if (AuthData && AuthData.adminData.find((e) => e.email == email && e.password == password)) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin"}));
    } else if (AuthData) {
      const employee = AuthData.employeeData.find((e) => e.email == email && e.password == password)
      if(employee){
        setUser("employee");
        setLoggedInUserData(employee)        
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", employee: employee }));
      }
    } else {
      alert("chal hat!!");  

    }
  };


  return (
    <div className="">
      {!user ? <Login handleLogin={handleLogin}/> : ""}
      {user == "employee" ? <EmployeeDashboard loggedInUserData={loggedInUserData}/> : ""}
      {user == "admin" ? <AdminDashboard /> : ""}
    </div>
  );
};

export default App;
