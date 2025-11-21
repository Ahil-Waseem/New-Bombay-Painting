import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";

function BlogsDetails() {
    const { slug } = useParams();
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return (
            <div className="text-center text-white py-20 text-2xl">
                Blog Not Found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white pb-20">

            {/* Breadcrumb / Back */}
            <div className="max-w-5xl mx-auto px-5 pt-10">
                <Link
                    to="/blog"
                    className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold"
                >
                    ← Back to Blogs
                </Link>
            </div>

            {/* Banner Image */}
            <div className="max-w-5xl mx-auto px-5 mt-5">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-80 md:h-[450px] object-cover rounded-2xl shadow-lg"
                />
            </div>

            {/* Title Section */}
            <div className="max-w-5xl mx-auto px-5 mt-8">
                <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 leading-tight">
                    {blog.title}
                </h1>
                <p className="text-gray-400 mt-3 text-sm">
                    Published on {blog.date} • By <span className="text-yellow-400">New Bombay Painting</span>
                </p>
            </div>

            {/* Blog Content */}
            <div className="max-w-5xl mx-auto px-5 mt-12">

                <div
                    className="
        prose prose-lg prose-invert 
        prose-headings:text-yellow-400 
        prose-h2:text-3xl prose-h2:font-bold 
        prose-h2:border-l-4 prose-h2:border-yellow-500 prose-h2:pl-4
        prose-h2:mt-12 prose-h2:mb-4

        prose-p:text-gray-300 prose-p:leading-8 prose-p:tracking-wide

        prose-ul:mt-4 prose-li:marker:text-yellow-400
        prose-li:text-gray-300 prose-li:my-1

        prose-strong:text-yellow-400
        prose-a:text-yellow-300 prose-a:underline

        space-y-4
        "
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                ></div>

            </div>


            {/* Bottom CTA */}
            <div className="max-w-5xl mx-auto px-5 mt-16 text-center">
                <h3 className="text-2xl font-bold text-yellow-400">Need Professional Painting Services?</h3>
                <p className="text-gray-400 mt-2">
                    Contact us today for premium-quality home & commercial painting at affordable pricing.
                </p>

                <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 mt-6">

                    <a
                        href="tel:+919819584682"
                        className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
                    >
                        📞 Call Now: 9819584682
                    </a>

                    <a
                        href="https://wa.me/+918736963061?text=Hi,%20I%20need%20professional%20painting%20services"
                        target="_blank"
                        className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-400 transition"
                    >
                        💬 WhatsApp Now
                    </a>

                    <a
                        href="/services"
                        className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition"
                    >
                        🎨 View Services
                    </a>

                    <a
                        href="/projects"
                        className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-400 transition"
                    >
                        📂 View Projects
                    </a>

                    <a
                        href="/"
                        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition"
                    >
                        🏠 Go to Home Page
                    </a>

                </div>
            </div>

        </div>
    );
}

export default BlogsDetails;
