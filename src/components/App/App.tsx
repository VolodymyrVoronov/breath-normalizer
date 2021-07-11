import { Switch, Route } from "react-router-dom";

import StartPage from "./../StartPage/StartPage";
import Normalizer from "./../Normalizer/Normalizer";

const App = (): React.ReactElement => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route exact path="/normalizer">
          <Normalizer />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
