import React from 'react';

import { UserListItem } from './';

export default function UserListWrapper() {
  return (
    <div className="users__list">
           <UserListItem id="1" name="Nayara" src=""/>
           <UserListItem id="2" name="Jô" src=""/>
           <UserListItem id="3" name="Luis" src=""/>
           <UserListItem id="4" name="Rafael" src=""/>
           <UserListItem id="5" name="Loki" src=""/>
      </div>
  )
}
