import React, {
    Suspense,
    Component 
}                       from "react";
import { 
    Route, 
    Switch, 
    withRouter,
}                       from "react-router-dom";
import {
    ROUTE_PATHS
}                       from "../../Constants";
import Home             from "../../../pages/Home";
import Game             from "../../../pages/Game";
import PageNotFound     from "../../../pages/404";
import PageLoader       from "../../Components/PageLoader";

class Routes extends Component {
    render() {
        return (
            <Suspense fallback={<PageLoader />}>
                <Switch>
                    <Route
                        path={ROUTE_PATHS.GAME}
                        exact={true}
                        render={props => (
                            <Game/>
                        )}
                    />

                    <Route
                        path={ROUTE_PATHS.HOME}
                        exact={true}
                        render={props => (
                            <Home/>
                        )}
                    />

                    <Route component={PageNotFound} />
                </Switch>
            </Suspense>
        )
    }
}

export default withRouter(Routes);

