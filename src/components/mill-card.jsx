import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import MillCardList from "./mill-card-list";
import { useState } from "react";
import { useEffect } from "react";
import { openDialog } from "../slices/order-popup.slice";
import { useDispatch } from "react-redux";
import { setInitalMillCardReducer } from "../slices/mill-card-order.slice";

const MillCard = () => {
  const dispatch = useDispatch();
  const millData = useSelector(
    (state) => state.millCardReducerForReview.millCards
  );
  const [localMillCard, setLocalMillCard] = useState([]);

  useEffect(() => {
    setLocalMillCard(millData);
  }, [millData]);

  const handleClickOpen = () => {
    dispatch(setInitalMillCardReducer(localMillCard));
    dispatch(openDialog(true));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          height: "100vh",
          backgroundColor: "#ADD8E6",
        }}
      >
        {localMillCard && localMillCard.length ? (
          localMillCard.map((mill) => {
            return (
              <Box
                key={mill.id}
                sx={{
                  mt: "10em",
                }}
              >
                <MillCardList
                  millData={mill}
                  handleClickOpen={handleClickOpen}
                />
              </Box>
            );
          })
        ) : (
          <p>No Data to display</p>
        )}
      </Box>
    </>
  );
};

export default MillCard;
