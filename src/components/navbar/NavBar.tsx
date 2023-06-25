"use client";
import { useEffect, useState } from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { useProduct, useSearch } from "@/lib/State";
import { BiSearch } from "react-icons/bi";
import { IProduct, getProducts } from "../../../service/apiRequest";
import { IoIosClose } from "react-icons/io";
function NavBar() {
  const [query, setQuery] = useState("");
  const { setSearch, isOpen } = useSearch();
  const { product, setProduct } = useProduct();

  const filterArray =async (): Promise<IProduct[]>  => {
    if (query === "" || query === null) {
      return await getAllProduct(); // Return all products if query is empty
    }
    const searchQuery = query.toLowerCase();
    return product.filter((e) => {
      const productName = e.name.toLowerCase();
      const productPrice = String(e.price).toLowerCase();
      return productName.includes(searchQuery) || searchQuery === productPrice;
    });
  };
  //get all products when query is null || empty
  async function getAllProduct(){
    try {
      const res = await getProducts();
      if (res.data && res.data.products && res.data.products.length > 0) {
        setProduct([...res.data.products]); // Set the fetched products
        return(res.data.products)
      } else {
        console.log("No products found");
        // You can choose whether to keep the existing products or set an empty array
        // setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("Error fetching products");
    }
  };

  // const handleSubmit = (event: MouseEvent | any) => {
  //   console.log("input", event);
  //   event.preventDefault();
  //   console.log({ query });
  //   console.log("submitted");

  //   const filtered = filterArray();
  //   setProduct(filtered);
  // };

  const handleSubmit = async(event: React.KeyboardEvent<HTMLInputElement> | any)  => {
    console.log(event.target.value)
    setQuery(event.target.value);
    if (event.key === 'Enter') {
      event.preventDefault();
      const filtered = filterArray();
      setProduct(await filtered);
    }else if(query !== ''){
      setProduct([])
      const filtered = filterArray();
      setProduct(await filtered);
    }else{
      const getProducts = getAllProduct();
      setProduct(await getProducts);
    }
  };

  useEffect(() => {
    // console.log(product);
    console.log("letsee ", product);
  }, [product]);

  const handleClose =(e:any)=>{
    e.preventDefault();
    setQuery('')
    handleSubmit(e);
    setSearch(!isOpen)
  }

  return (
    <nav className="sticky z-[999] top-0 w-full h-[80px]  bg-white">
      <div className="w-full h-full py-4  border-b-[1px]">
        <Container>
          {!isOpen ? (
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <Logo />
              <Search />
              <UserMenu />
            </div>
          ) : (
            <form className="w-full flex px-2 py-1  focus-within:ring ring-black border rounded-full">
              <input
               onKeyDown={handleSubmit}
                className="focus:outline-none px-4 py-1.5 w-full rounded-full"
              />
              <button
                type="button"
                // onKeyUp={handleSubmit}
                // onClick={() => }
                onClick={handleClose}
                className="p-2  bg-black rounded-full text-white"
              >
                <IoIosClose size={24} />
              </button>
            </form>
          )}
        </Container>
      </div>
    </nav>
  );
}

export default NavBar;
