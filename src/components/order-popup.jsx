import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { openDialog } from "../slices/order-popup.slice";
import MillCardList from "./mill-card-list";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const OrderPopup = () => {
  const isOpen = useSelector((state) => state.orderPopupReducer);
  const millData = useSelector((state) => state.millCardForOrderSlice);
  const dispatch = useDispatch();

  console.log("order", millData);

  const handleClose = () => {
    dispatch(openDialog(false));
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
        fullScreen
      >
        {/* Header */}
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
              height: "100vh",
              backgroundColor: "#ADD8E6",
            }}
          >
            {millData && millData.millCards.length ? (
              millData.millCards.map((mill) => {
                return (
                  <Box
                    key={mill.id}
                    sx={{
                      mt: "10em",
                    }}
                  >
                    {/* <MillCardList millData={mill} /> */}
                    <p>{JSON.stringify(mill)}</p>
                  </Box>
                );
              })
            ) : (
              <p>No Data to display</p>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default OrderPopup;
