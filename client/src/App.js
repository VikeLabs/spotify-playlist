import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./components/Content";
import NavBar from "./components/NavBar";
import AuthTokenProvider from "./util/useAuthToken";
import { memo } from "react";
// TODO: will replace window.location with <Navigate/> from react-router-dom

function App() {
  return (
    <div className="App">
      <AuthTokenProvider>
        <NavBar />
        <Content />
      </AuthTokenProvider>
    </div>
  );
}

export default memo(App);
