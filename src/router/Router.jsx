import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/page/Top";
import { Users } from "../components/page/Users";
import { HeaderAndFooter } from "../components/templates/HeaderAndFooter";
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HeaderAndFooter>
            <Top />
          </HeaderAndFooter>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
