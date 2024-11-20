import Link from 'next/link';

const blogs = [
  { id: 1, title: 'Benefits of Yoga for Health', snippet: 'Yoga helps with flexibility, strength, and mental clarity...' },
  { id: 2, title: 'Smart Yoga Gadgets You Need', snippet: 'Discover the best tech gadgets to enhance your yoga practice...' },
  { id: 3, title: 'Creating a Daily Yoga Routine', snippet: 'Learn how to build and stick to a yoga routine that suits you...' },
];

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-4 bg-white shadow rounded">
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="text-gray-700">{blog.snippet}</p>
            <Link href={`/blog/${blog.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
