import React, { useState, useEffect } from "react";
import Default from "../templates/Default";

import { UserListWrapper } from "../molecules";
import { Loading } from "../organisms";

//Renderize o componente Default e passe com Children
export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://62c4e487abea8c085a7e022a.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Default>
      {/* Children do Default */}
      <div className="users">
        <h1>Users</h1>
        <UserListWrapper users={users} />
      </div>
    </Default>
  );
}
