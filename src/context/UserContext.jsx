import { createContext, useContext, useState, useEffect } from "react"; 
 
const UserContext = createContext(); 

export function UserProvider({ children }) { 
  const [users, setUsers] = useState([]); 
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    const savedUsers = localStorage.getItem("users"); 
    if (savedUsers) setUsers(JSON.parse(savedUsers)); 

    const savedCurrent = localStorage.getItem("currentUser"); 
    if (savedCurrent) setCurrentUser(JSON.parse(savedCurrent)); 
  }, []);


  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);


  useEffect(() => {
    if (currentUser) { 
      localStorage.setItem("currentUser", JSON.stringify(currentUser)); 
    } else { 
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  function signUp(newUserData) { 
    const userExists = users.find(u => u.email === newUserData.email); 
    if (userExists) {
      return { success: false, message: "User already exists" }; 
    }

    const newUser = { 
        id: Date.now(), 
        ...newUserData
    };

    setUsers([...users, newUser]); 
    return { success: true, message: "Sign up successful" };
  }

  function signIn(email, password) {
    const user = users.find(u => u.email === email && u.password === password); 
    if (!user) {
      return { success: false, message: "Invalid credentials. Please sign up" };
    }
    setCurrentUser(user);
    return { success: true, message: `Welcome ${user.firstName}` };
  }

  function logout() { 
    setCurrentUser(null); 
  }

  const value = { users, currentUser, signUp, signIn, logout }; 

  return ( 
    <UserContext.Provider value={value}> 
      {children} 
    </UserContext.Provider>
  );
}

export function useUser() { 
  return useContext(UserContext);
}