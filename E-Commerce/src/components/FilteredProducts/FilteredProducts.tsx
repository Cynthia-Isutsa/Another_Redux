import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const FilteredProducts = () => {
  const products = useSelector((state: any) => {
    console.log({ state });
    return state?.products.filteredProducts;
  });
  const { type } = useParams();

  console.log({ products, type });
  return (
    <div className="">
      <div className="pt-16">
        {/* <div className="pl-14"> */}
          <h1 className="text-gray-600 text-4xl font-inter font-bold tracking-normal leading-none">
            {type}
          </h1>
        </div>
        <div className="grid grid-cols-4 justify-items-center py-8 gap-12 ">
        {products
              .filter((product: any) => product.type === type)
              .map((product: any, index: any) => {
                return (
                  <div key={index} className="">
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    ></ProductCard>
                  </div>
                );
              })}
        </div>
      </div>
    // </div>
  );
};

export default FilteredProducts;
