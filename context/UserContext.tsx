import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

type UserContextType = {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
};

type UserContextProviderType = {
  children: ReactNode;
};

export const UserContext = createContext<UserContextType>({
  userName: '',
  setUserName: () => {},
});

const UserProvider = ({ children }: UserContextProviderType) => {
  const [userName, setUserName] = useState('');

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
