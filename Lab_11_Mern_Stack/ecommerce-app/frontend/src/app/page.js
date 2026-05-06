'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Ecommerce Store</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((p, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-600">{p.description}</p>
            <p className="text-green-600 font-bold mt-2">${p.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}