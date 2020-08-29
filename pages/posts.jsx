import { MainLayouts } from "../Components/Layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { showPosts, watchUser } from "../Components/Redux/action";
import { Card, Sector } from "../Components/Styled/styled";

export default function Posts() {
  const dispatch = useDispatch();
  // const [search, setSearch] = useState('')
  const posts = useSelector((state) => state.fetch.posts);
  const users = useSelector((state) => state.fetch.users);

  useEffect(() => {
    dispatch(showPosts());
    dispatch(watchUser());
  }, [dispatch]);

  return (
    <MainLayouts>
      <input type="text" style={{width:'200px', height:'50px', marginTop: '5em', background: '#43aa8b'}}/>
      <Sector>
        {posts &&
          users &&
          posts.map((post) => (
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
