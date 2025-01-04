import styles from "./SidebarSearch.module.css";
import { IoIosSearch } from "react-icons/io";
import { useContext } from "react";
import { PostContext } from "../../PostContext.jsx";
import { useState } from "react";

function SidebarSearch() {
  const [inputValue, setInputValue] = useState("");
  const { setCity } = useContext(PostContext);

  const handleSearch = () => {
    setCity(inputValue);
  };

  return (
    <div className={styles.sidebarSearch}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Search location"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <IoIosSearch className={styles.icon} />
      </div>
      <button onClick={handleSearch} disabled={!inputValue.trim()}>
        Search
      </button>
    </div>
  );
}

export default SidebarSearch;
