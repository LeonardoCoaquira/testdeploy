import { useDispatch } from "react-redux";
import styles from "./CheckOut.module.css";
import { uiActions } from "../../../store/ui-slice";

const CheckOut = () => {
  const dispatch = useDispatch();

  const checkOutHandler = () => {
    dispatch(uiActions.formToggle());
  };

  return (
    <div className={styles.btnContainer}>
      <button onClick={checkOutHandler} className={styles.checkOutBtn}>
        Check Out
      </button>
    </div>
  );
};

export default CheckOut;
