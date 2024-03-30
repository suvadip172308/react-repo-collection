import { useRef, memo } from "react";
import { ChildOneProps } from "../utils/model/model";


const ChildOne = ({ onInputChange, onBtnClearClick }: ChildOneProps) => {
  console.log('CHILD ONE RENDERING #####');

  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleBtnClick = () => {
    inputRef.current!.value = '';
    onBtnClearClick();
  };

  return(
    <div className="bg-pink-500 py-6 px-4 rounded-lg">
      <h2 className="text-xl font-semibold">Child One</h2>
      <div className="mt-2">
        <input
          ref={inputRef}
          type="text"
          className="p-1 w-[500px] rounded-md"
          onChange={onInputChange}
        />
      </div>
      <div className="flex justify-end">
        <button
          className="px-6 py-2 mt-4 bg-stone-800 text-white rounded-md"
          onClick={handleBtnClick}
        >
          Clear
        </button>
      </div>
    </div>
  )
};

export default memo(ChildOne);