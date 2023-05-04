import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
export default function Home({ products }) {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>
        {/* heading and paragaph end */}

        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {[
            {
              id: 1,
              //slug: "slug",
              attributes: {
                id: 1,

                slug: "nouhack",
                name: "nouh",
                description: "this is the description of the first product",
                price: 10,
                original_price: 39,
                thumbnail: {
                  data: {
                    attributes: {
                      url: "https://images.unsplash.com/photo-1547143379-3374bbefa14a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=397&q=80",
                    },
                  },
                },
              },
            },
            {
              id: 2,
              //slug: "slug",
              attributes: {
                id: 1,
                slug: "test",
                name: "nouhack hat",
                description: "this is the description of the second product",
                price: 10,
                original_price: 39,
                thumbnail: {
                  data: {
                    attributes: {
                      url: "https://images.unsplash.com/photo-1550007127-d953e58dd8c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
                    },
                  },
                },
              },
            },
          ].map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
          {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
        </div>
        {/* products grid end */}
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
    props: { products },
  };
}
