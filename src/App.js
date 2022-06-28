import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as React from "react";
import "./App.css";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const PortfolioPage = React.lazy(() => import("./pages/PortfolioPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const LogInPage = React.lazy(() => import("./pages/LogInPage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const PleaseVerifyEmailPage = React.lazy(() =>
  import("./pages/PleaseVerifyEmailPage")
);
const EmailVerificationLandingPage = React.lazy(() =>
  import("./pages/EmailVerificationLandingPage")
);
const UserInfoPage = React.lazy(() => import("./pages/UserInfoPage"));

export const App = () => {
  return (
    <div className="App">
      <div className="page-container bg-gradient-to-t from-gray-400 to-blue-400">
        <Router>
          <Switch>
            <React.Suspense fallback="Loading...">
              <Route exact path="/">
                <HomePage />
              </Route>

              <Route path="/about">
                <AboutPage />
              </Route>

              <Route path="/login">
                <LogInPage />
              </Route>

              <Route path="/portfolio">
                <PortfolioPage />
              </Route>

              <Route path="/contact">
                <ContactPage />
              </Route>

              <Route path="/signup-page">
                <SignUpPage />
              </Route>

              <Route path="/please-verify">
                <PleaseVerifyEmailPage />
              </Route>

              <Route path="/confirm-email/:verificationString">
                <EmailVerificationLandingPage />
              </Route>

              <Route path="/user-profile">
                <UserInfoPage />
              </Route>
            </React.Suspense>
          </Switch>
        </Router>
      </div>
    </div>
  );
};
