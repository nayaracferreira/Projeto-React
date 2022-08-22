import React from 'react'
import Default from '../templates/Default';

import { UserListWrapper } from '../molecules';

//Renderize o componente Default e passe com Children
export default function Users() {
  return <Default>
    {/* Children do Default */}
    <div className="users">
      <h1>Users</h1>
      <UserListWrapper />
    </div>
    </Default>;  
}
