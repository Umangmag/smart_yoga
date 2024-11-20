import Link from 'next/link';

const products = [
  { id: 1, name: 'Smart Yoga Mat', price: '$99', description: 'A yoga mat with sensors to track your movements.' },
  { id: 2, name: 'Yoga Tracker Bracelet', price: '$49', description: 'A smart bracelet that monitors your yoga sessions.' },
  { id: 3, name: 'Posture Corrector Device', price: '$79', description: 'A device to help you maintain correct posture during yoga.' },
];

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="font-bold mt-2">{product.price}</p>
            <Link href={`/products/${product.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
