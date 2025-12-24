import { Link, useLocation } from "react-router-dom";
 
const PostsPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const sort = params.get("sort");
 
  return (
    <section className="card page">
      <h2>Posts Page</h2>
      <p>Current sort type: {sort || "none"}</p>
 
      <ul className="post-list">
        <li>
          <Link to="/posts/1">Post One</Link>
        </li>
        <li>
          <Link to="/posts/2">Post Two</Link>
        </li>
      </ul>
 
      <Link to="/posts?sort=date">Sort by date</Link>
    </section>
  );
};
 
export default PostsPage;