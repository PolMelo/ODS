import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface UserData {
  name: string;
  email: string;
  avatarUrl: string;
}

interface UserContextProps {
  user: UserData;
  setUser: React.Dispatch<React.SetStateAction<UserData>>;
}

// ✅ Todo lo “externo” dentro del provider, no fuera
const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData>({
    name: "Invitado",
    email: "inicia.sesion@odsfera.com",
    avatarUrl: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userString = localStorage.getItem("odsferaUser");

    if (token && userString) {
      try {
        const parsed = JSON.parse(userString);
        setUser({
          name: parsed.nom || "Invitado",
          email: parsed.email || "inicia.sesion@odsfera.com",
          avatarUrl: "",
        });
      } catch {
        setUser({
          name: "Invitado",
          email: "inicia.sesion@odsfera.com",
          avatarUrl: "",
        });
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook limpio para consumir el contexto
export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe usarse dentro de UserProvider");
  }
  return context;
};
