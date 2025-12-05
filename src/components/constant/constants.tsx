import { Box, Button, InputBase, Grid, InputLabel } from "@mui/material";
import "./constant.scss";
import { onAuthStateChanged } from "firebase/auth";
import type { TDiagonalDivProps } from "../../types/type";
import Text from "../common/Text";
import WestIcon from "@mui/icons-material/West";
import "./../styles/popover.scss";

import * as yup from "yup";
import { useFireBase } from "../../context/fireContext";
import toast from "react-hot-toast";

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

type RegisterFormProps = {
  open: boolean;
  close: () => void;
};
export const DiagonalDiv = ({
  children,
  mainDivsx,
  previewColor = "",
}: TDiagonalDivProps) => {
  return (
    <>
      <Box
        className="vector-diagonal-div"
        sx={{
          ...mainDivsx,
        }}
      />
      <Box
        className="vector-diagonal-sub-div"
        sx={{
          backgroundColor: previewColor && `${previewColor} !important`,
        }}
      />
      <Box className="overlay-container">{children}</Box>
    </>
  );
};

export const RegisterForm = ({ open, close }: RegisterFormProps) => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
  const { RegisterWithEmailPassword, auth } = useFireBase()!;
  const initialValues = {
    email: "",
    password: "",
  };
  const validateRegisterForm = yup.object({
    email: yup.string().email().required("email is required"),
    password: yup.string().required("password is required"),
  });
  const navigate = useNavigate();
  const { handleBlur, values, handleChange, handleReset, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: validateRegisterForm,
      onSubmit: (values) => {
        try {
          // console.log({ values });
          const { email, password } = values;
          RegisterWithEmailPassword(email, password).then((value) => {
            console.log(value);
            toast.success(`${email} registered successfully`);
          });
          setTimeout(() => {
            onAuthStateChanged(auth, (user) => {
              if (user) navigate("/login");
            });
          }, 1000);
        } catch (error) {
          console.log(error);
        }
      },
    });
  return (
    open && (
      <Grid>
        <Box display={"flex"}>
          <Button
            onClick={() => close()}
            disableTouchRipple
            disableElevation
            disableFocusRipple
            disableRipple
            sx={{
              textTransform: "none",
              color: "#2a67ff",
              display: "flex",
              gap: "10px",
            }}
          >
            <WestIcon /> <Text>Back</Text>
          </Button>
        </Box>
        <Box display={"flex"} justifySelf={"center"}>
          <Text variant="h4">Welcome</Text>
        </Box>
        <Grid className="signup-form">
          <Box className="signup">
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={2}
              component={"form"}
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
            >
              <Box className="input-email ">
                <InputLabel>Email Address</InputLabel>
                <InputBase
                  className="input"
                  onChange={handleChange}
                  onReset={handleReset}
                  onBlur={handleBlur}
                  value={values.email}
                  name="email"
                  id="email"
                  placeholder="Enter email"
                />
              </Box>
              <Box className="input-password ">
                <InputLabel>Password</InputLabel>
                <InputBase
                  onChange={handleChange}
                  className="input"
                  onReset={handleReset}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                />
              </Box>
              <Button
                type="submit"
                sx={{
                  background: "#d8dce1",
                  color: "white",
                  padding: "8px 12px",
                  height: "54px",
                }}
              >
                Sign up
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    )
  );
};
