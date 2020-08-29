import { MainLayouts } from "../Components/Layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { showPosts, watchUser } from "../Components/Redux/action.ts";
import { Card, Sector } from "../Components/Styled/styled";
import { PostProps, UserProps } from "../Components/interfaces/project";



export default function Posts() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchPost, setSearchPost] = useState("");
  const posts = useSelector((state) => state.fetch.posts);
  const users = useSelector((state) => state.fetch.users);

  useEffect(() => {
    dispatch(showPosts());
    dispatch(watchUser());
  }, [dispatch]);

  useEffect(() => {
    setSearchPost(
      posts.filter((post) => {
        return post.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, posts]);

  return (
    <MainLayouts>
      <label style={{ marginRight: "2em" }}>Search Post title:</label>
      <input
        onChange={(e) => setSearch(e.target.value)}
        name="seacrh"
        type="text"
        placeholder="Search Post title"
        style={{
          width: "200px",
          height: "50px",
          marginTop: "5em",
          background: "#43aa8b",
          fontSize: "22px",
        }}
      />
      <Sector>
        {searchPost &&
          users &&
          searchPost.map((post) => (
            <Card key={post.id}>
              {post.title}
              {users
                .filter((user) => user.id == post.userId)
                .map((user) => (
                  <>
                    <div>{user.name}</div>
                    <div>{user.username}</div>
                  </>
                ))}
            </Card>
          ))}
      </Sector>
    </MainLayouts>
  );
}
