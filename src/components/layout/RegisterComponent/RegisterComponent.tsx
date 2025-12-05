import { Box, Button, Container } from "@mui/material";
import "./Register.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DiagonalDiv, RegisterForm } from "../../constant/constants";
import { VECTOR_IMG, GOOGLE_IMG } from "../../../common/constant";
import Text from "../../common/Text";
import EmailIcon from "@mui/icons-material/Email";

const RegisterComponent = () => {
  const [openContinueWithEmail, setContinueWithEmail] = useState(false);
  const handleSignupForm = () => {
    setContinueWithEmail(!openContinueWithEmail);
  };

  return (
    <Box className="main-wrapper-container">
      <DiagonalDiv
        mainDivsx={{
          backgroundImage: `url(${VECTOR_IMG})`,
          width: "100%",
          height: "100vh",
        }}
        previewColor={"#9babfd"}
      >
        <Box className="app-root">
          <Box className="signup-register">
            <Box
              className="auth"
              display={"flex"}
              flexDirection={"column"}
              gap={2}
            >
              {openContinueWithEmail ? (
                <RegisterForm
                  open={openContinueWithEmail}
                  close={handleSignupForm}
                />
              ) : (
                <>
                  {" "}
                  <Box
                    className="signup-headline-element"
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <Text fontSize={30}>Welcome</Text>
                  </Box>
                  <Container
                    sx={{
                      padding: "0 !important",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <>
                      <Button className="continue-button">
                        <Box
                          component={"span"}
                          marginLeft={"-2px"}
                          marginRight={"4px"}
                        >
                          <img src={`${GOOGLE_IMG}`} alt="" />
                        </Box>
                        <Box marginInline={"4px"}>Continue with Google</Box>
                      </Button>
                      <Button
                        className="continue-button"
                        onClick={() => {
                          setContinueWithEmail(true);
                        }}
                      >
                        <Box
                          component={"span"}
                          marginLeft={"-2px"}
                          marginRight={"4px"}
                        >
                          <EmailIcon />
                        </Box>
                        <Box marginInline={"4px"}>Continue with email</Box>
                      </Button>
                    </>
                  </Container>
                  <Box
                    display={"flex"}
                    gap={1}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Text>Already Have an account</Text>
                    <Link
                      to="/login"
                      style={{ color: "#2a67ff", fontSize: "14px" }}
                    >
                      Sign in
                    </Link>
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </DiagonalDiv>
    </Box>
  );
};

export default RegisterComponent;
