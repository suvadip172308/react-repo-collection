import { useRef } from "react";
import { AddUserProps } from "../models/Product";

const AddUser = ({ onAddProduct }: AddUserProps) => {
  const productTitleRef = useRef<HTMLInputElement>(null!);
  const productDescriptionRef = useRef<HTMLInputElement>(null!);
  const productPriceRef = useRef<HTMLInputElement>(null!);

  const handleRest = () => {
    productTitleRef.current.value = '';
    productDescriptionRef.current.value = '';
    productPriceRef.current.value = '';
  }

  const handleAdd = () => {
    const title = productTitleRef.current.value;
    const description = productDescriptionRef.current.value;
    const price = productPriceRef.current.value;

    onAddProduct({ title, description, price });
  }

  return(
    <div className="flex flex-col items-center">
      <div className="">
        <div>
          <p>Title:</p>
          <input
            className="border-gray-400 border-2 w-[400px] py-2"
            type="text"
            ref={productTitleRef}
          />
        </div>
        <div>
          <p>Description:</p>
          <input
            className="border-gray-400 border-2 w-[400px] py-2"
            type="text"
            ref={productDescriptionRef}
          />
        </div>
        <div>
          <p className="w-[200]">Price:</p>
          <input
            className="border-gray-400 border-2 w-[400px] py-1"
            type="text"
            ref={productPriceRef}
          />
        </div>
      </div>
      <div className="my-2">
        <button className="bg-black text-white p-2 w-20" onClick={handleRest}>Reset</button>
        <button className="bg-indigo-500 w-20 p-2 mx-3" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default AddUser;