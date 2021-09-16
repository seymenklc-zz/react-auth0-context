import PostsContextProvider from "./context/posts";

// Components
import Navbar from "./components/Nav/Navbar";
import Posts from "./components/Posts/Posts";

const App = () => {
  return (
    <>
      <Navbar />
      <PostsContextProvider>
        <Posts />
      </PostsContextProvider>
    </>
  );
};

export default App;