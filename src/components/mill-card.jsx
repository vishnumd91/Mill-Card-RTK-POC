import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import MillCardList from "./mill-card-list";

const MillCard = () => {
  const millData = useSelector((state) => state.millCardReducerForReview);
  console.log("mdata", millData);

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
        {millData && millData.millCards.length ? (
          millData.millCards.map((mill) => {
            return (
              <Box
                key={mill.id}
                sx={{
                  mt: "10em",
                }}
              >
                <MillCardList millData={mill} />
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
