import { useParams, useLocation } from "react-router-dom";
 
const PostDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
 
  return (
    <section className="card page">
      <h2>Post Details</h2>
      <p>Post ID: {id}</p>
      <p>Current path: {location.pathname}</p>
    </section>
  );
};
 
export default PostDetailsPage;