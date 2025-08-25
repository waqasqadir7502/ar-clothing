import Grid from "@/src/components/grid";
import ProductItemsGrid from "@/src/components/layout/product-items-grid";
import { defaultSort, sorting } from "@/src/lib/constants";
import { getProducts } from "@/src/lib/shopify";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const sort = params?.sort as string | undefined;
  const searchValue = params?.q as string | undefined;
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? "results" : "result";
 console.log(products)
  return (
    <>
     {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? "There are no products that match"
            : `Showing ${products.length} ${resultsText} for `}
          <span>&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductItemsGrid products={products} />
        </Grid>
      ) : null}
    </>
  );
}
