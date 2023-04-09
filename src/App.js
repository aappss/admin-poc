import React,{ useEffect, useState } from "react";
import { getUser } from './redux/feature/authSlice';
import { useDispatch } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import Layout from "./layouts/Layout";
import { useRoutes, useLocation, useMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Image, Heading, Button, Flex } from "theme-ui";
import ErrorImage from "./asset/icons/404.svg";
import Error500 from "./pages/Error500";
import Error401 from "./pages/Error401";
import Error404 from "./pages/Error404";
// react-toastify
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader/Loader";
import Dashboard from './pages/Dashboard';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  },[]);

  let element = useRoutes(
    [
      {
        path: "/500",
        element: <Error500 />,
      },
      {
        path: "/401",
        element: <Error401 />,
      },
      {
        path:"/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          
          {
            path: "*",
            element: <Error404 />,
          },
        ],
      },
    ],
    
  );

  
  function ErrorFallback({ error, resetErrorBoundary }) {
    const location = useLocation();
    console.log(error.toString());
    console.log(location);
    const err = { text: `${error.toString()} at  ${location.pathname}` };
    // console.log(err);
    // fetch(
    //   "https://hooks.slack.com/services/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",
    //   {
    //     method: "POST", // *GET, POST, PUT, DELETE, etc.
    //     body: JSON.stringify(err), // body data type must match "Content-Type" header
    //   }
    // );
    return (
      <Flex
        variant="appContent"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "110px",
        }}
      >
        <Image src={ErrorImage} alt="Error"></Image>
        <Heading as="h5">{error.message}</Heading>
        <Button sx={{ marginTop: "25px" }} as={Link} to="/">
          Return to Dashboard
        </Button>
      </Flex>
    );
  }

  return (
    <>
      {/* <AuthIsLoaded> */}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <>
            <>{element} </>
           
          </>
        </ErrorBoundary>
        {/* <ToastContainer /> */}
      {/* </AuthIsLoaded> */}
    </>
  );
}

export default App;
