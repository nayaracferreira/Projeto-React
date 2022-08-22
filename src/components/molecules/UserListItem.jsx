import React from 'react';

import Avatar from '../atoms/Avatar';


export default function UserListItem() {
  return (
    <a href="#" className="users__list-item">
          <div className="users__list-item-photo">
            <Avatar />         
          </div>
          <div className="users__list-item-name">John Walter</div>
        </a>    
  )
}
