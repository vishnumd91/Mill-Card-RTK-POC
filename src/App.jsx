import { useSelector } from "react-redux";
import MillCard from "./components/mill-card";
import OrderPopup from "./components/order-popup";

const App = () => {
  const isOpen = useSelector((state) => state.orderPopupReducer.open);

  return (
    <>
      <MillCard />
      {/* Dialog */}
      {isOpen && <OrderPopup />}
    </>
  );
};

export default App;
