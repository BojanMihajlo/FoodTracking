import { Grid, Typography, Box } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Footer = () => {
  return (
    <Grid
      container
      direction="row"
      sx={{
        backgroundColor: "#b6e810",
        display: "flex-wrap",
        padding: "5%",
        justifyContent: "space-evenly",
        marginTop: "6%",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
      }}
    >
      <Grid item>
        <Box>
          <Typography
            sx={{ margin: "2% 0 8% 0", fontSize: "20px", fontFamily: " Salsa" }}
          >
            Food Tracking
          </Typography>
          <Typography variant="body2">
            <PhoneIphoneIcon />
            Phone:224789567
          </Typography>
          <Typography variant="body2">
            <EmailIcon />
            Email:foodtracking@yahoo.com
          </Typography>
          <Box sx={{ marginTop: "4%" }}>
            <FacebookIcon sx={{ padding: "2% 2% 2% 0", fontSize: "35px" }} />
            <InstagramIcon sx={{ padding: "2%", fontSize: "35px" }} />
            <TwitterIcon sx={{ padding: "2%", fontSize: "35px" }} />
            <LinkedInIcon sx={{ padding: "2%", fontSize: "35px" }} />
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Box>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adi error!
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adi error!
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adi error!
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box>
          <Typography sx={{ marginBottom: "8%" }}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adi error!
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
