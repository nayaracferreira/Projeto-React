import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostListWrapper, UserBio } from "../molecules";
import { Loading } from "../organisms";
import Default from "../templates/Default";

export default function UserBlog() {
  const { userId } = useParams();

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://62c4e487abea8c085a7e022a.mockapi.io/users/${userId}/posts`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        //Iremos pegar a primeira ocorrência que é a 0
        setUser(data[0].userData);
        setIsLoading(false);
      });
  });

  return isLoading ? (
    <Loading />
  ) : (
    <Default>
      <div className="user-blog">
        <UserBio
          name={`${user.fn} ${user.ln}`}
          bio={user.bio}
          src={user.avatar}
        />
        <PostListWrapper posts={posts} />
      </div>
    </Default>
  );
}
