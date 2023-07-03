import React, { createContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  profileImageUrl: string;
}

interface UserContextProps {
  user: User | null;
  updateUser: (newUser: User | null) => void;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  updateUser: () => {},
});

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const updateUser = (newUser: User | null) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};