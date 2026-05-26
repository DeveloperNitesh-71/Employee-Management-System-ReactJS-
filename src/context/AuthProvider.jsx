import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [employeeData, setEmployeeData] = useState(null);
  const [adminData, setAdminData] = useState(null);
  
  useEffect(() => {
    const data = getLocalStorage();
    setEmployeeData(data.employees);
    setAdminData(data.admin);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{ employeeData, adminData }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
