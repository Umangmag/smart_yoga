"use client"; // This directive tells Next.js to treat this as a Client Component

import { useParams } from 'next/navigation';

const ProductDetailPage = () => {
  const params = useParams();
  const { id } = params; // Retrieve the dynamic route parameter

  // Sample data (In a real application, you would fetch this data from an API or database)
  const product = {
    id: id,
    name: 'Example Product',
    price: '$99',
    description: 'Detailed description of the product goes here.',
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-700 mt-4">{product.description}</p>
      <p className="font-bold mt-4">{product.price}</p>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => alert('Added to Cart!')}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetailPage;
