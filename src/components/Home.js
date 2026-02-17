import { Box, Button, Stack, useTheme, useMediaQuery } from "@mui/material";

import { Link } from 'react-router-dom';
import { profileImg } from "../data";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
 
  
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row-reverse" },
        gap: { xs: "20px", md: "40px" },
        minHeight: "80vh",
        padding: "20px",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Box
        component="img"
        src={profileImg}
        alt="profilepic"
        sx={{
          width: { xs: "200px", md: "350px" },
          height: { xs: "200px", md: "350px" },
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <Stack 
        spacing={2} 
        alignItems={isMobile ? "center" : "flex-start"}
      >
        <h1
          style={{
            color: "#75B06F",
            fontSize: isMobile ? "2.2rem" : "3.5rem",
            lineHeight: "1.2",
            margin: 0,
          }}
        >
         Hi <br/> I'm Kinjal <br/> Software Developer
        </h1>
        <Button
          variant="contained"
          size={isMobile ? "medium" : "large"}
          component={Link} 
          to={"/Contact"}
          sx={{
            backgroundColor: "#75B06F",
            "&:hover": { backgroundColor: "#5f915a" },
          }}
        >
          Contact Me
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
