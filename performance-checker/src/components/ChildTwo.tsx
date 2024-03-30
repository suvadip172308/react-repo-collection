import { memo } from "react";
import { ChildTwoProps } from "../utils/model/model"

const ChildTwo = ({ sortedList }: ChildTwoProps) => {
  console.log('CHILD TWO RENDERING....');
  
  return(
    <div className="bg-teal-300 my-4 py-6 px-4 rounded-lg">
      <h3 className="text-2xl font-bold mb-3">Sorted List</h3>
      <ul className="flex">
        {
          sortedList.map((item, index) => {
            return(
              <li
                key={index}
                className="mx-1 text-xl font-semibold"
              >
                {item}
                {index !== (sortedList.length -1) ? ',' : ''}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default memo(ChildTwo);