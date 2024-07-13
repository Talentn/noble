import { getProducts } from "@/actions/get-products";
import Footer from "@/components/footer";
import { ProductsList } from "@/components/products-list";
import { SearchInput } from "@/components/search-input";
import { db } from "@/lib/db";
import { Categories } from "./_components/categories";
import { Logo } from "./_components/logo";

interface ProductPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  }
};

const ProductPage = async ({
  searchParams
}: ProductPageProps) => {

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc"
    }
  });

  let products = await getProducts(searchParams);

  products = products.filter(product => product.title.toLowerCase().includes("pack"));

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-5 flex items-center justify-between">
        <Logo />
        <div className="flex-grow flex items-center justify-center"> {/* Flex container to center the search input */}
          <SearchInput />
        </div>
      </div>

      <div className="p-6 space-y-4 flex-grow">
        <Categories
          items={categories}
        />
        <ProductsList items={products} />
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default ProductPage;
