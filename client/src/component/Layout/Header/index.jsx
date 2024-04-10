import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import Search from "../../../components/Search";
import calendar from "../../../assets/svg/Calendar.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Headers = () => {
  const currentDate = new Date().toUTCString().split(" ").slice(0, 4).join(" ");
  return (
    <Stack
      height={"90px"}
      sx={{ bgcolor: "white", m: 0, p: 0 }}
      justifyContent={"center"}
    >
      <Stack  direction={"row"} width={"100%"}justifyContent={"space-between"} >
        <Stack>
          <Search />
        </Stack>
        <Stack
          direction={"row"}
    
          width={"40%"}
          justifyContent={"space-around"}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
          >
            <img src={calendar} style={{ width: "16px", height: "16px" }}></img>
            <Typography fontWeight={600} sx={{ ml: 1 }}>
              {currentDate}
            </Typography>
            <Typography fontWeight={600} sx={{ ml: 1 }}>
              {}
            </Typography>
            <NotificationsIcon sx={{ ml: 2 }} />
          </Stack>

          <Stack direction={"row"}>
            <Stack>
              <Typography fontSize={"15px"} fontWeight={"600"}>
                Mark Collins
              </Typography>
              <Typography fontSize={"10px"} color={"gray"}>
                {" "}
                Business Man
              </Typography>
            </Stack>
            <Avatar sx={{ml:2}} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Headers;