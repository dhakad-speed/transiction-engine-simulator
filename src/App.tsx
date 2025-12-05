import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { Toaster } from "react-hot-toast";
// import Navbar from "./pages/Navbar";
function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#000",
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#000",
            },
          },
        }}
      />
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
