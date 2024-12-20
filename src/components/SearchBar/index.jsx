import { Button } from "@mui/material";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="search-bar w-[100%] bg-gray-200 p-2 relative rounded-md">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full h-[35px] focus:outline-none bg-inherit text-[15px] p-2"
      />
      <Button className="!absolute top-[8px] right-[5px] z-50 !w-[37px] !min-w-[37px] !h-[37px] !rounded-full !text-black">
        <IoSearch className="text-gray-700 text-[20px]" />
      </Button>
    </div>
  );
};

export default SearchBar;
