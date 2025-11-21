import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";

function Blog() {
  return (
    <div className="min-h-screen bg-black text-white pb-20 pt-10">
      <div className="max-w-6xl mx-auto px-5">

        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center">
          Latest Blog Posts
        </h1>
        <p className="text-center text-gray-400 mt-3 mb-12">
          Explore expert tips, wall textures, painting guides and more!
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Blog;
