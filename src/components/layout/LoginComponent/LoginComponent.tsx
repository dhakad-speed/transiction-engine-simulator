import { Box, Container, InputBase, Button } from "@mui/material";
import { VECTOR_IMG } from "../../../common/constant";
import "./Login.scss";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useFireBase } from "../../../context/fireContext";
import { Link } from "react-router-dom";
import { DiagonalDiv } from "../../constant/constants";
import * as yup from "yup";
import { useFormik } from "formik";
import Text from "../../common/Text";
import toast from "react-hot-toast";

function LoginComponent() {
  const { LoginWithEmailPassword, auth } = useFireBase()!;
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const validateLoginForm = yup.object({
    email: yup.string().email().required("email is required"),
    password: yup.string().required("password is required"),
  });
  const { handleBlur, values, handleChange, handleReset, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: validateLoginForm,
      onSubmit: (values) => {
        try {
          const { email, password } = values;
          LoginWithEmailPassword(values.email, values.password).then(() => {
            // console.log(value);
            toast.success(`${email} loggined successfully`);
          });
          setTimeout(() => {
            onAuthStateChanged(auth, (user) => {
              if (user) navigate("/");
            });
          }, 500);
          console.log({ email, password });
        } catch (error) {
          console.log(error);
        }
      },
    });
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
          <Box className="login">
            <Box
              className="auth"
              display={"flex"}
              flexDirection={"column"}
              gap={2}
            >
              <Box
                className="login-headline-element"
                display={"flex"}
                justifyContent={"center"}
              >
                <Text fontSize={30}>Welcome to Crypto</Text>
              </Box>
              <Container
                sx={{
                  padding: "0 !important",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {" "}
                <Box
                  component={"form"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={2}
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit();
                  }}
                >
                  <Box width={"100%"}>
                    <Text sx={{ color: "#666" }}>Email Address</Text>
                    <InputBase
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      onBlur={handleBlur}
                      onReset={handleReset}
                      sx={{
                        border: "1px solid transparent",
                        width: "100%",
                        padding: "8px 12px",
                        boxShadow:
                          "0 4px 4px -2px rgba(11,37,75,.12) , 0 1px 1px 1px rgba(11,37,75,.08)",
                      }}
                      placeholder="Enter your email"
                      className=""
                    />
                  </Box>
                  <Box>
                    <Text sx={{ color: "#666" }}>Password</Text>
                    <InputBase
                      onChange={handleChange}
                      value={values.password}
                      name="password"
                      onBlur={handleBlur}
                      onReset={handleReset}
                      sx={{
                        width: "100%",
                        border: "1px solid transparent",
                        padding: "8px 12px",
                        boxShadow:
                          "0 4px 4px -2px rgba(11,37,75,.12) , 0 1px 1px 1px rgba(11,37,75,.08)",
                      }}
                      placeholder="Enter your password"
                    />
                  </Box>
                  <Button
                    className="btn"
                    sx={{
                      textTransform: "none",
                      color: "white",
                      background: "#d8dce1",
                    }}
                    type="submit"
                  >
                    Sign in
                  </Button>
                </Box>
              </Container>
              <Box
                display={"flex"}
                gap={1}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>Don't have an account</Text>
                <Link
                  to="/register"
                  style={{ color: "#2a67ff", fontSize: "14px" }}
                >
                  sign up
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </DiagonalDiv>
    </Box>
  );
}

export default LoginComponent;
