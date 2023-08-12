import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

const AuthUser = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  //   const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: 'Emanuel',
      email: 'emanuel@example.com',
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};

export default AuthUser;
