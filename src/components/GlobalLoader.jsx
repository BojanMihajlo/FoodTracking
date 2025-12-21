import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import { useEffect, useState } from "react";

const emojis = ["🍔", "🍕", "🍪", "🍓", "🍣", "🍇", "🥐"];
const shuffled = [...emojis].sort(() => Math.random() - 0.5);

/* Animations */
const rotateUp = keyframes`
  0% { transform: rotate(270deg); }
  50% { transform: rotate(360deg); }
  100% { transform: rotate(270deg); }
`;

const rotateDown = keyframes`
  0% { transform: rotate(90deg); }
  50% { transform: rotate(0deg); }
  100% { transform: rotate(90deg); }
`;

const moveBall = keyframes`
  0% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(-140px); opacity: 1; }
`;

const GlobalLoader = () => {
  const [show, setShow] = useState(false);

  // show only after 400ms
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 400);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 1300,
        bgcolor: "#EAFAC0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 2, md: 4 },
      }}
    >
      {/* PACMAN CONTAINER */}
      <Box
        sx={{
          position: "relative",
          width: 220,
          height: 100,
        }}
      >
        {/* UPPER JAW */}
        <Box
          sx={{
            position: "absolute",
            width: 0,
            height: 0,
            border: "40px solid #1B5E20",
            borderRightColor: "transparent",
            borderRadius: "50%",
            left: 0,
            top: 10,
            animation: `${rotateUp} 0.5s infinite`,
          }}
        />

        {/* LOWER JAW */}
        <Box
          sx={{
            position: "absolute",
            width: 0,
            height: 0,
            border: "40px solid #1B5E20",
            borderRightColor: "transparent",
            borderRadius: "50%",
            left: 0,
            top: 10,
            animation: `${rotateDown} 0.5s infinite`,
          }}
        />

        {/* EMOJI BALLS */}
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              left: 140 + i * 30,
              top: 45,
              fontSize: 22,
              animation: `${moveBall} 1s linear infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            {shuffled[i]}
          </Box>
        ))}
      </Box>

      {/* TEXT */}
      <Typography
        sx={{
          fontFamily: "Salsa, cursive",
          fontSize: { xs: 18, md: 26 },
          color: "#1B5E20",
        }}
      >
        Loading meals...
      </Typography>

    </Box>
  );
};

export default GlobalLoader;
