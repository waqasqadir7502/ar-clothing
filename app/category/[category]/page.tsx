import { products } from "../../pages/data/product";
import ProductCard from "../../components/productfilter/product";
import { Metadata } from 'next';

export const dynamicParams = false;

export async function generateStaticParams() {
  const categories = new Set(products.map(product => product.category.toLowerCase()));
  return Array.from(categories).map(category => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  return {
    title: `${params.category.charAt(0).toUpperCase() + params.category.slice(1)} Collection`,
  };
}

interface PageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: PageProps) {
  const { category } = params;

  const filteredProducts = products.filter(
    product => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold capitalize mb-4">
        {category} Collection
      </h1>
      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}