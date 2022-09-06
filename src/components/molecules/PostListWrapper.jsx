import React from "react";

import { PostListItem } from "../molecules";

export default function PostListWrapper(props) {
  return (
    <div className="user-blog__posts">
      {/* Aqui irá puxar os outros objetos [] */}
      {props.posts.map((post) => (
        <PostListItem
          Key={post.id}
          postId={post.id}
          title={post.title}
          createdAt={post.createdAt}
          image={post.image}
          userId={post.userId}
        />
      ))}
    </div>
  );
}
