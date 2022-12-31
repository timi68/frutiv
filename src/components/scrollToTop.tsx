import React from "react";
import { Icon } from "@iconify/react";
import { Box, Fab, Stack, useTheme, Zoom } from "@mui/material";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = React.useState(false);
  const theme = useTheme();

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Box>
      <Stack
        direction={"column"}
        gap={3}
        sx={{
          position: "fixed",
          bottom: 10,
          right: 10,
          justifyContent: "center",
        }}
      >
        <Zoom
          key={1}
          in={true}
          timeout={transitionDuration}
          style={{
            transitionDelay: `100ms`,
          }}
          unmountOnExit
        >
          <a
            href="https://wa.me/+2347085830807?text=I want to get quote of your services"
            target={"_blank"}
            rel="noreferrer"
          >
            <Fab size={"medium"} color="inherit">
              <Icon icon="logos:whatsapp-icon" height="50" />
            </Fab>
          </a>
        </Zoom>
        <Zoom
          key={2}
          in={showTopBtn}
          timeout={transitionDuration}
          style={{
            transitionDelay: `100ms`,
          }}
          unmountOnExit
        >
          <Fab
            size={"medium"}
            color="secondary"
            aria-label="add"
            onClick={goToTop}
          >
            <Icon
              icon="bytesize:chevron-top"
              color="#fff"
              width={24}
              height="24"
            />
          </Fab>
        </Zoom>
      </Stack>
    </Box>
  );
};
export default ScrollToTop;
