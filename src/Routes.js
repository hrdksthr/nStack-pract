import React, { Suspense, lazy } from "react";
import { observer } from "mobx-react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

const Home = lazy(() => import("./Modules/Home"));
const AboutUs = lazy(() => import("./Modules/AboutUs"));
const HelpCenter = lazy(() => import("./Modules/Help Center"));
const Policy = lazy(() => import("./Modules/Policy"));
const Blog = lazy(() => import("./Modules/Blog"));


const Routes = props => {
    return (
        <main className="Grofoo-home">
            <Router>
                <Suspense fallback={<div>...Loading</div>}>
                    <Route
                        path="/home"
                        exact
                        render={() => (
                            <Home {...props} />
                        )}
                    />
                    <Route
                        path="/about-us"
                        exact
                        render={() => (
                            <AboutUs {...props} />
                        )}
                    />
                    <Route
                        path="/help"
                        exact
                        render={() => (
                            <HelpCenter {...props} />
                        )}
                    />
                     <Route
                        path="/policy"
                        exact
                        render={() => (
                            <Policy {...props} />
                        )}
                    />
                    <Route
                        path="/blog"
                        exact
                        render={() => (
                            <Blog {...props} />
                        )}
                    />
                    <Route path="/" exact render={() => <Redirect to={'home'} />} />
                </Suspense>
            </Router>
        </main>
    );
};

export default observer(Routes);
