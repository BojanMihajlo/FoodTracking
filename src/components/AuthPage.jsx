import image from "../images/avo4-back.jpg";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@emotion/react"; 

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const AuthPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    localStorage.setItem("isEntered", "true");
    navigate("/");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ backgroundColor: "#f1f7d7" }}
    >
      <Paper
        elevation={10}
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          width={{ xs: 240, md: 500 }}
          height={{ md: 300 }}
          borderRadius={5}
          p={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Stack spacing={3}>
            <Typography
              variant="h3"
              sx={{ 
                color: "white", 
                textShadow: "2px 2px 4px rgba(0,0,0,0.6)" 
              }}
            >
              Welcome
            </Typography>
            <Typography
              sx={{
                color: "white",
                textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
                fontSize: { xs: "16px", md: "18px" }
              }}
            >
              You can now explore meals directly. No login needed.
            </Typography>

            <Grid container justifyContent="center">
              <FormControl>
                <Button
                  variant="contained"
                  sx={{ 
                    backgroundColor: "green", 
                    px: 4,
                    mt: 1,
                    animation: `${pulse} 1.5s infinite`,
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#2e7d32",
                    },
                  }}
                  onClick={goToHome}
                >
                  GO
                </Button>
              </FormControl>
            </Grid>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default AuthPage;

