import { products } from "../../pages/data/product";
import ProductCard from "../../components/productfilter/product";



export const dynamicParams = false; 
// Generate static paths if using static generation
export async function generateStaticParams() {
  return Object.keys(products.reduce((acc, product) => {
    acc[product.category.toLowerCase()] = true;
    return acc;
  }, {} as Record<string, boolean>)).map((category) => ({
    category,
  }));
}

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
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