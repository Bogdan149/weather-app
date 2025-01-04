import styles from "./Sidebar.module.css";
import SidebarSearch from "../components/SidebarSearch";
import Today from "../components/Today";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SidebarSearch />
      <Today />
    </div>
  );
}

export default Sidebar;
