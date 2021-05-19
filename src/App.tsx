import React, { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  useHistory,
  useLocation,
} from "react-router-dom";
import Swal from "sweetalert2";
import Login from "./components/login";
import Sidebar from "./components/layout/sidebar";
import Topbar from "./components/layout/topbar";
import Dashboard from "./components/service/dashboard";
import Landing from "./components/landing";
import Setting from "./components/service/setting";
import Checklist from "./components/service/checklist";
import Scan from "./components/service/scan";
import Asset from "./components/service/asset";
import AssetDetail from "./components/service/asset/detail";
import Signup from "./components/signup";
import ScanDetail from "./components/service/scan/detail";
import Vlun from "./components/service/vulnerability";
import Inspection from "./components/service/inspection";
import Entire from "./components/service/entire";

import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        height:
          window.location.href.split("/")[3] == "" ||
          window.location.href.split("/")[3] == "landing"
            ? "100%"
            : "fit-content",
      }}
    >
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/service" component={Sidebar} />
        <div
          className={`${
            window.location.href.indexOf("service") != -1 && "Content"
          }`}
        >
          <Route path="/service" component={Topbar} />
          <Route exact path="/service" component={Dashboard} />
          <Route exact path="/service/dashboard" component={Dashboard} />
          <Route exact path="/service/asset" component={Asset} />
          <Route path="/service/asset/detail" component={AssetDetail} />
          <Route exact path="/service/setting" component={Setting} />
          <Route exact path="/service/checklist" component={Checklist} />
          <Route exact path="/service/manage" component={Scan} />
          <Route exact path="/service/manage/scan" component={Scan} />
          <Route path="/service/manage/scan/detail" component={ScanDetail} />
          <Route exact path="/service/manage/vlun" component={Vlun} />
          <Route
            exact
            path="/service/manage/inspection"
            component={Inspection}
          />
          <Route exact path="/service/manage/entire" component={Entire} />
        </div>
      </Router>
    </div>
  );
}

export default App;
