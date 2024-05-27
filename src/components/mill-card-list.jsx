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
import { useSelector } from "react-redux";
import { orderPageMillCardReducer } from "../slices/mill-card-order.slice";
import { useCallback } from "react";

const MillCardList = ({ millData, handleClickOpen }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.orderPopupReducer).open;
  const [millPrice, setMillPrice] = useState(millData.deliveredPrice);

  const handleChange = (e) => {
    setMillPrice(e.target.value);
  };

  const handleOnBlur = useCallback(() => {
    if (isOpen) {
      dispatch(orderPageMillCardReducer({ millId: millData.id, millPrice }));
    } else {
      dispatch(reviewPageMillCardReducer({ millId: millData.id, millPrice }));
    }
  }, [dispatch, isOpen, millData.id, millPrice]);

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
                <Input
                  value={millPrice}
                  onChange={handleChange}
                  onBlur={handleOnBlur}
                />
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
            {!isOpen ? <Button onClick={handleClickOpen}>Order</Button> : null}
          </CardActions>
        </Box>
      </Card>
    </>
  );
};

export default MillCardList;
