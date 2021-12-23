import "./styles.css";
import "./style/profile.css";
import "./style/navBar.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routerDoom } from "./router/routers";
import { Layout } from "./layout/layout";
import { ThemeStore } from "./context/theme";

export default function App() {
  return (
    <ThemeStore>
      <Router>
        <Switch>
          {routerDoom.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={() => (
                  <Layout>
                    <route.main />
                  </Layout>
                )}
              />
            );
          })}
          {/* <Route path="/" >
          <Redirect from="/" to="/portafolio" />
        </Route> */}
        </Switch>
      </Router>
    </ThemeStore>
  );
}
