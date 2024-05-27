/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { reviewPageMillCardReducer } from "../slices/mill-card.slice";
import { useState } from "react";
import { openDialog } from "../slices/order-popup.slice";
import OrderPopup from "./order-popup";
import { useSelector } from "react-redux";

const MillCardList = ({ millData }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.orderPopupReducer).open;
  const [millPrice, setMillPrice] = useState(millData.deliveredPrice);
  console.log("list", millData);

  const handleChange = (e) => {
    setMillPrice(e.target.value);
  };

  const handleOnClick = (millId) => {
    dispatch(reviewPageMillCardReducer({ millId, millPrice }));
  };

  const handleClickOpen = () => {
    dispatch(openDialog(true));
  };

  return (
    <>
      <Card>
        <CardHeader title="Review Inbound Quote Mill Card" />
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Input Field */}
            <Box>
              <FormControl>
                <InputLabel>Del.Price</InputLabel>
                <Input value={millPrice} onChange={handleChange} />
              </FormControl>
            </Box>
            {/* Output Field */}
            <Box>
              <p>Redux Value: {millData.deliveredPrice}</p>
            </Box>
          </Box>
        </CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CardActions>
            <Button onClick={() => handleOnClick(millData.id)}>
              Change Value
            </Button>
            <Button onClick={handleClickOpen}>Order</Button>
          </CardActions>
        </Box>
      </Card>
      {/* Dialog */}
      {isOpen && <OrderPopup />}
    </>
  );
};

export default MillCardList;
