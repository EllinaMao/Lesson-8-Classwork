

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import LocationLogger from "./components/LocationLogger";
import Breadcrumbs from "./components/Breadcrumbs";
 
const App = () => {
  return (
    <>
      <Header />
      <LocationLogger />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
 
export default App;