import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // Fetching (requesting) data from Django Rest API
  const { data: blogs, isPending } = useFetch(
    `https://websting.pythonanywhere.com/`
  );

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {/* Passing data(Home parent component) into child componet(BlogList) as a prop */}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};
export default Home;
