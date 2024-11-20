"use client"; // This makes it a Client Component to use client-side features

import { useParams } from 'next/navigation';

const BlogDetailPage = () => {
  const params = useParams();
  const { id } = params;

  // Sample data (In a real application, you would fetch this data from an API or database)
  const blog = {
    id: id,
    title: `Blog Article ${id}`,
    content: `This is the content of blog article ${id}. Here you can add more detailed information.`,
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-gray-700 mt-4">{blog.content}</p>
    </div>
  );
};

export default BlogDetailPage;
