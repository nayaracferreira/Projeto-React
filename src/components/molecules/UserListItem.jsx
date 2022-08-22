import React from 'react';

import Avatar from '../atoms/Avatar';


export default function UserListItem(props) {
  return (
    <a href={'/users/${props.id}'}className="users__list-item">
          <div className="users__list-item-photo">
            <Avatar src={props.src} />         
          </div>
          <div className="users__list-item-name">{props.name}</div>
        </a>    
  )
}
