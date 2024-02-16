import image from "../avo4-back.jpg";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form, redirect, useSearchParams, useSubmit } from "react-router-dom";

const AuthPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const isLogin =
    !searchParams.get("mode") || searchParams.get("mode") === "login";

  const toggleAuthMode = () => {
    setSearchParams({
      mode: isLogin ? "signup" : "login",
    });
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      paddingTop="8%"
      paddingBottom="12%"
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
        <Box width={{ xs: 200, md: 400 }} borderRadius={5} p={10}>
          <Form method="post">
            <Stack alignItems="center" rowGap={3}>
              <Typography variant="h5" component="div">
                {isLogin ? "Log in" : "Create new user"}
              </Typography>
              <FormControl fullWidth>
                <TextField label="E-Mail" name="email" />
              </FormControl>
              <FormControl fullWidth>
                <TextField label="Password" type="password" name="password" />
              </FormControl>
              <Grid container gap={2} justifyContent="center">
                <Grid item xs={12} md={6} textAlign="center">
                  <FormControl>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ backgroundColor: "green" }}
                    >
                      Go
                    </Button>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} textAlign="center">
                  <FormControl>
                    <Button
                      variant="contained"
                      onClick={toggleAuthMode}
                      sx={{ backgroundColor: "green" }}
                    >
                      {isLogin ? "Create User" : "Log In"}
                    </Button>
                  </FormControl>
                </Grid>
              </Grid>
            </Stack>
          </Form>
        </Box>
      </Paper>
    </Box>
  );
};

export default AuthPage;
