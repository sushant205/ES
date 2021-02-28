import React from "react";
import { Route, Switch } from "react-router-dom";
import OrgLogin from "../screens/OrgLogin";
import Landing from "../screens/Landing";
import OrgRegister_1 from "../screens/OrgRegister_1";
import OrgRegister_2 from "../screens/OrgRegister_2";
// import OrgRegister_3 from "../screens/OrgRegistration_edit";
import StdRegister_1 from "../screens/StdRegister_1";
import StdRegister_2 from "../screens/StdRegister_2";
import ProtectedRoute from "./Protectedroute";
import CreateSubject from "../screens/OrgDashboard/CreateSubject";
import Sidebar from "../components/Sidebar/Sidebar";
import Viewsubject from "../screens/OrgDashboard/ViewSubject";
import Questions from "../screens/Questions";
import Viewquestions from "../screens/ViewQuestions";

const AppRouting = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/org_login" component={OrgLogin} />
      <Route path="/org_register_1" component={OrgRegister_1} />
      <Route path="/std_register_1" component={StdRegister_1} />
      <Route path="/sidebar" component={Sidebar} />
      <Route path="/questions" component={Questions} />
      <Route path="/view_questions" component={Viewquestions} />
      <ProtectedRoute path="/std_register_2" component={StdRegister_2} />
      <ProtectedRoute path="/org_register_2" component={OrgRegister_2} />
      <ProtectedRoute path="/create_subject" component={CreateSubject} />
      <ProtectedRoute path="/view_subject" component={Viewsubject} />
    </Switch>
  );
};

export default AppRouting;
