import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  ReCAPTCHADiv,
} from "./ContactUsElements";
import logo from "../logo.svg";
import { useHistory, useParams } from "react-router-dom";
import { Navigation } from "../components/Navigation";

// import "../critical.css";
// import "../nonCritical.css";
import { useToken } from "../auth/useToken";
import { useUser } from "../auth/useUser";
import { useQueryParams } from "../util/useQueryParams";
import { gapi } from "gapi-script";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    console.log("You are testing.");
    history.push("/");
  });

  return (
    <div className="content-container w-full md:w-7/12">
      <img
        width="200"
        height="200"
        src={logo}
        className="App-logo"
        alt="logo"
      />
      <Navigation />
      <div className="H1andMainTextDiv bg-white p-10">
        <h1 className="heading my-5 font-Le-Havre text-3xl">
          Welcome to My Full Stack React Demo
        </h1>
        <p className="aboutText text-left font-Raleway">
          This web application's target audience is a potential employer. The
          emphasis here is on functionality. It demonstrates a full stack React
          login authentication flow, using Google OAuth, SendGrid, and JSON Web
          tokens. <br />
          <br />
          It allows a user to sign up to the site, by entering an email and
          password, which is hashed, and persisted in a MongoDb database. From
          there, the user can login, where they are then directed to a user
          profile page, where they may enter some basic information. The user
          may save data, but only when the user confirms the email they used to
          register themselves with, that the application sends out via SendGrid.
          The application uses a JSON web token, signed by my Node server, to
          keep the user logged in. The user may of course logout and if the user
          forgets their password, they are able to have an email sent to their
          account with a password reset link.
          <br />
          <br />
          The user is also allowed to signup using their Google accounts. Basic
          information that Google’s API provides, is loaded and persisted, in
          the MongoDb database. Users login using their Google accounts, and an
          account, is created. Once logged in the user is directed to a profile
          page, where they may enter some basic information. The user may save
          data, but only when the user confirms the email they used to register
          themselves with, that the application sends out via SendGrid. The
          application uses a JSON web token, signed by my Node server, to keep
          the user logged in.
          <br />
          <br />
        </p>
      </div>
      {/*end H1andMainTextDiv*/}
      {/* <div className="underline" id="loginLink" onClick={() => window.location.href = "/login"}>Login</div> */}
    </div>
  );
};

export const AboutPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const login = "cmazzochi81";

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;
  return (
    <div className="content-container w-full md:w-7/12 bg-black ">
      <img
        width="200"
        height="200"
        src={logo}
        className="App-logo"
        alt="logo"
      />
      <Navigation />

      <div className="H1andMainTextDiv p-5 bg-white">
        <h1 className="heading font-Le-Havre text-4xl">{data.name}</h1>

        <div className="imageDiv flex justify-between max-h-80  ">
          <img
            id="aboutImg"
            className="flex float-none"
            width="300"
            src={data.avatar_url}
            alt={data.login}
          />
          <p className="flex text-left bg-white border-blue aboutText p-4 font-Raleway w-full md:w-1/2">
            I am a perfect cross or hybrid of design and developer. My favorite
            framework is the React/NodeJS ecosystem. <br />
            <br />
            My skill and proficiency is the result of a combination of formal
            education, self-education, experience, excellent mentors, and more
            self-education. <br />
          </p>
        </div>
        {/*end imageDiv */}
      </div>
    </div> //end content-container
  );
};

export function PortfolioPage() {
  return (
    <div className="content-container w-screen md:w-7/12">
      <img
        width="200"
        height="200"
        src={logo}
        className="App-logo"
        alt="logo"
      />
      <Navigation />
      <h1 className="heading my-5 text-4xl font-Le-Havre">Portfolio</h1>
      <p className="font-Raleway text-sm text-center md:text-left">
        The following represent some of the work I have completed for clients,
        as well as for personal demonstration, of the use of a particular
        programming language, and or framework.
      </p>

      <div id="portfolio" className="">
        <div className="portfolioItem p-5 border-2 border-gray-200 my-5">
          <h2 className="text-xl my-1 font-Le-Havre">
            <a
              rel="noreferrer noopener"
              href="https://panamasovereign.com/"
              target="_blank"
            >
              Panama Sovereign Realty
            </a>
          </h2>
          <div className="imageDiv flex-wrap md:flex-nowrap">
            <img
              className="border-2 p-1 mr-2 border-gray-500 md:float-left"
              width="300"
              src="https://mazzo-django-blog-files.s3.us-west-2.amazonaws.com/app_screenshots/pan-sov-home-page-1024x516.png"
              alt=""
            />
            <p className="aboutText text-sm my-0 font-Raleway">
              Created a child theme based on a real estate theme the client had
              selected. Used CSS and JavaScript to customize the layout and
              functionality of the site.
            </p>
          </div>
        </div>

        <div className="portfolioItem p-5 border-2 border-gray-200 my-5">
          <h2 className="text-xl my-1 font-Le-Havre">
            <a
              rel="noreferrer noopener"
              href="https://www.soccercasa.com/"
              target="_blank"
            >
              Colorado Amateur Soccer Association
            </a>
          </h2>
          <div className="imageDiv flex-wrap:wrap md:flex-nowrap">
            <img
              className="border-2 p-1 mr-2 border-gray-500 md:float-left"
              width="300"
              src="https://mazzo-django-blog-files.s3.us-west-2.amazonaws.com/app_screenshots/casa.png"
              alt=""
            />
            <p className="aboutText text-sm my-0 font-Raleway">
              Migrated a standalone php application that registers soccer
              players and processes payment for the Colorado Amateur Soccer
              League, into the WordPress environment. Customized a child theme
              and created custom pages.
            </p>
          </div>
        </div>

        <div className="portfolioItem p-5 border-2 border-gray-200 my-5">
          <h2 className="text-xl my-1 font-Le-Havre">
            <a
              rel="noreferrer noopener"
              href="http://www.shopmazzo.com/"
              target="_blank"
            >
              Magento e-Commerce
            </a>
          </h2>
          <div className="imageDiv flex-wrap:wrap md:flex-nowrap">
            <img
              id="shopMazzoImg"
              className="border-2 p-1 mr-2 border-gray-500 md:float-left"
              width="300"
              src="https://mazzo-django-blog-files.s3.us-west-2.amazonaws.com/app_screenshots/magento-home-page-1024x516.png"
              alt=""
            />
            <p className="aboutText text-sm my-0 font-Raleway">
              If I were to sell my artwork which is in the form of paintings and
              digital creations, I would do so using some e-commerce platform.
              In evaluating what was the best ecommerce platform to use, I
              focused on choosing a platform focused on usability,
              customizability, and security.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactPage() {
  const history = useHistory();
  const formId = "U1gyO50K";
  const formSparkUrl = `https://submit-form.com/${formId}`;
  const recaptchaKey = "6Lfw2KUgAAAAABxiNpFlk9Vz3-nKRonFuqH2lJ1n";
  const recaptchaRef = useRef();

  const [submitting, setSubmitting] = useState(false);

  const serviceMessage = {
    className: "",
    text: "",
  };

  const [message, setMessage] = useState(serviceMessage);
  const [recaptchaToken, setRecaptchaToken] = useState();

  const initialFormState = {
    email: "",
    name: "",
    message: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      ...formState,
      "g-recaptcha-response": recaptchaToken,
    };

    try {
      const result = await axios
        .post(formSparkUrl, payload)
        .then(function (response) {
          console.log(response);
        });

      console.log(result);
      setMessage({
        className: "bg-green-500",
        text: "Thanks, someone will be in touch shortly.",
      });
      setFormState(initialFormState);
      recaptchaRef.current.reset();
    } catch (error) {
      console.log(error);
      setMessage({
        className: "bg-green-red",
        text: "Sorry, there was a problem.  Please try again.",
      });
    }
  };

  // eslint-disable-next-line no-restricted-globals
  const updateFormControl = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    const formKey = id;
    const updateFormState = { ...formState };
    updateFormState[formKey] = value;
    setFormState(updateFormState);
  };

  const updateRecaptchaToken = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <>
      {/* <Container> */}
      {/* <FormWrap> */}
      {/* <FormContent> */}

      <Form>
        <FormH1>Contact Me</FormH1>

        <img
          width="200"
          heiht="200"
          src={logo}
          className="App-logo"
          alt="logo"
        />
        {message && (
          <div
            className={`postSubmitMessageDiv my-1 w-full p-1 ${message.className}`}
          >
            {message.text}
          </div>
        )}

        <FormLabel htmlFor="name">Name</FormLabel>

        <FormInput
          onChange={updateFormControl}
          type="text"
          id="name"
          value={formState.name}
          required
        />

        <FormLabel htmlFor="email">E-mail</FormLabel>
        <FormInput
          onChange={updateFormControl}
          type="email"
          id="email"
          value={formState.email}
          required
        />

        <FormLabel htmlFor="message">Message</FormLabel>
        <FormInput
          onChange={updateFormControl}
          type="text"
          id="message"
          value={formState.message}
        />

        <FormButton disabled={submitting} type="button" onClick={submitForm}>
          {submitting ? "Submitting..." : "Submit"}
        </FormButton>

        <ReCAPTCHADiv>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
            id="recaptcha"
          />
        </ReCAPTCHADiv>

        <button
          className="back-home-button font-Raleway text-white"
          onClick={() => history.push("/")}
        >
          Home
        </button>
      </Form>

      {/* </FormContent> */}
      {/* </FormWrap> */}
      {/* </Container> */}
    </>
  );
}

export const LogInPage = () => {
  function onSuccess(googleUser) {
    console.log("Logged in as: " + googleUser.getBasicProfile().getName());
  }

  function onFailure(error) {
    console.log(error);
  }

  gapi.load("auth2", function () {
    /* Ready. Make a call to gapi.auth2.init or some other API */

    gapi.auth2.init({
      client_id:
        "997265959245-ge8fkun5p6ra82arodllg59kgqhnm572.apps.googleusercontent.com",
    }); //end gapi.auth2.init

    gapi.load("signin2", () => {
      const params = {
        scope: "profile email",
        longtitle: true,
        theme: "dark",
        onsuccess: onSuccess,
        onfailure: onFailure,
      };
      gapi.signin2.render("loginButton", params);
    }); //end gapi load signin2
  }); //end gapi.load auth2

  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useToken();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [googleOAuthUrl, setGoogleOAuthUrl] = useState("");
  const { token: oAuthToken } = useQueryParams();
  const history = useHistory();

  useEffect(() => {
    if (oAuthToken) {
      setToken(oAuthToken);
      history.push("/");
    }
  }, [oAuthToken, setToken, history]);

  useEffect(() => {
    const loadOAuthUrl = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/auth/google/url"
        );
        const { url } = response.data;
        setGoogleOAuthUrl(url);
      } catch (e) {
        console.log(e);
      }
    };
    loadOAuthUrl();
  }, []);

  const onLogInClicked = async () => {
    console.log("Testing login button");

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email: emailValue,
        password: passwordValue,
      });
      const { token } = response.data;
      console.log(token);
      setToken(token);
      history.push("/user-profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content-container bg-black w-screen p-10 md:w-7/12">
      <div id="login-container " className="bg-white p-1 w-4/5">
        <img
          width="200"
          height="200"
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <h1 className="heading font-Le-Havre text-3xl">Log In</h1>

        {errorMessage && <div className="fail">{errorMessage}</div>}
        <input
          className="login-input focus:ring-8  text-center font-Raleway "
          value={emailValue}
          type="text"
          //binding state to input
          onChange={(e) => setEmailValue(e.target.value)}
          placeholder="youremail@mail.coms"
        />

        <input
          className="login-input  focus:ring-8 text-center font-Raleway"
          value={passwordValue}
          type="text"
          //binding state to input
          onChange={(e) => setPasswordValue(e.target.value)}
          placeholder="yourpassword"
        />

        <button
          className="login-button focus:ring-8 font-Raleway"
          disabled={!emailValue || !passwordValue}
          onClick={onLogInClicked}
        >
          Log In
        </button>

        <button
          className="font-Raleway focus:ring-8"
          onClick={() => history.push("/forgot-password")}
        >
          Forgot your password?
        </button>

        <button
          className="font-Raleway focus:ring-8"
          data-onsuccess="onSignIn"
          id="loginButton"
          disabled={!googleOAuthUrl}
          // onLoad={renderButton}
          onClick={() => {
            window.location.href = googleOAuthUrl;
          }}
        >
          Log in with Google
        </button>

        <button
          className="font-Raleway focus:ring-8"
          onClick={() => history.push("/signup-page")}
        >
          Don't have an account? Sign Up
        </button>

        {/* <div class="g-signin2"></div> */}

        <button
          className="back-home-button font-Raleway focus:ring-8"
          onClick={() => history.push("/")}
        >
          Home
        </button>
      </div>
    </div>
  );
}; //end LoginPage

export const SignUpPage = () => {
  const [token, setToken] = useToken();
  const [errorMessage, setErrorMessage] = useState("");

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const history = useHistory();

  const onSignUpClicked = async () => {
    //alert('Sign up not implemented yet');
    const response = await axios.post("http://localhost:8080/api/signup/", {
      email: emailValue,
      password: passwordValue,
    });
    const { token } = response.data;
    setToken(token);
    history.push("/please-verify");
  };

  return (
    <div className="content-container w-full md:w-7/12">
      <div
        id="login-container "
        className="rounded p-2 bg-white w-full md:w-6/12"
      >
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="heading  font-Le-Havre text-3xl">Sign Up</h1>

        {errorMessage && <div className="fail">{errorMessage}</div>}
        <input
          className="font-Raleway text-center"
          value={emailValue}
          type="text"
          //binding state to input
          onChange={(e) => setEmailValue(e.target.value)}
          placeholder="youremail@gmail.com"
        />

        <input
          className="font-Raleway text-center"
          value={passwordValue}
          type="text"
          //binding state to input
          onChange={(e) => setPasswordValue(e.target.value)}
          placeholder="password"
        />

        <input
          className="font-Raleway text-center"
          value={confirmPasswordValue}
          //binding state to input
          type="text"
          onChange={(e) => setConfirmPasswordValue(e.target.value)}
          placeholder="confirm password"
        />

        <button
          className="font-Raleway signup-button"
          disabled={
            !emailValue ||
            !passwordValue ||
            passwordValue !== confirmPasswordValue
          }
          onClick={onSignUpClicked}
        >
          Sign Up
        </button>

        <button
          className="font-Raleway focus:ring-8 "
          onClick={() => history.push("/login")}
        >
          Already have an account? Login
        </button>
        <button
          className="back-home-button text-white font-Raleway"
          onClick={() => history.push("/")}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export const PleaseVerifyEmailPage = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 3000);
  }, [history]);

  return (
    <div className="content-container">
      <h1 className="heading my-5 text-3xl font-Le-Havre">
        Thanks for Signing Up!
      </h1>
      <p className="font-Raleway">
        A verification email has been sent to the address provided. Please
        verify email to unlock full site features.
      </p>
    </div>
  );
};

export const EmailVerificationLandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const { verificationString } = useParams();
  const [, setToken] = useToken();
  useEffect(() => {
    const loadVerification = async () => {
      try {
        const response = await axios.put(
          "http://localhost:8080/api/verify-email",
          {
            verificationString,
          }
        );
        const { token } = response.data;
        setToken(token);
        setIsSuccess(true);
        setIsLoading(false);
      } catch (e) {
        setIsSuccess(false);
        setIsLoading(false);
        console.log(e);
      }
    };
    loadVerification();
  }, [setToken, verificationString]);
  if (isLoading) return <p>Loading...</p>;
  if (!isSuccess) return <EmailVerificationFail />;
  return <EmailVerificationSuccess />;
};

export const EmailVerificationSuccess = () => {
  const history = useHistory();

  return (
    <div className="content-container">
      <h1 className="heading my-5 font-Le-Havre text-3xl">Success!</h1>
      <p className="font-Raleway">
        Thanks for verifying your email, now you can use it all.
      </p>

      <button onClick={() => history.push("/")}>Go To Home Page</button>
    </div>
  );
};

export const EmailVerificationFail = () => {
  const history = useHistory();

  return (
    <div className="content-container">
      <h1 className="heading my-5 font-Le-Havre text-3xl">
        Email Verification Failure
      </h1>
      <p className="font-Raleway">
        Unfortunately we could not verify your email. Try again.
      </p>

      <button onClick={() => history.push("signup")}>Sign Up</button>
    </div>
  );
};

export const UserInfoPage = () => {
  const user = useUser();
  const [token, setToken] = useToken();
  const { id, email, isVerified, info } = user;

  // We'll use the history to navigate the user
  // programmatically later on (we're not using it yet)
  const history = useHistory();

  // These states are bound to the values of the text inputs
  // on the page (see JSX below).
  const [favoriteFood, setFavoriteFood] = useState(info.favoriteFood || "");
  const [hairColor, setHairColor] = useState(info.hairColor || "");
  const [bio, setBio] = useState(info.bio || "");

  // These state variables control whether or not we show
  // the success and error message sections after making
  // a network request (see JSX below).
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  gapi.load("auth2", function () {
    /* Ready. Make a call to gapi.auth2.init or some other API */

    gapi.auth2.init({
      client_id:
        "997265959245-ge8fkun5p6ra82arodllg59kgqhnm572.apps.googleusercontent.com",
    }); //end gapi.auth2.init
  }); //end gapi.load auth2

  // This useEffect hook automatically hides the
  // success and error messages after 3 seconds when they're shown.
  // Just a little user interface improvement.
  useEffect(() => {
    if (showSuccessMessage || showErrorMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false);
        setShowErrorMessage(false);
      }, 3000);
    }
  }, [showSuccessMessage, showErrorMessage]);

  const saveChanges = async () => {
    // Send a request to the server to
    // update the user's info with any changes we've
    // made to the text input values
    //alert('Save functionality not implemented yet');
    try {
      const response = await axios.put(
        `http://localhost:8080/api/users/${id}`,
        {
          favoriteFood,
          hairColor,
          bio,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const { token: newToken } = response.data;
      setToken(newToken);
      setShowSuccessMessage(true);
    } catch (error) {
      setShowErrorMessage(true);
      console.log(error);
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");

    //LOG USER OUT OF GOOGLE ACCOUNT AS WELL
    gapi.auth2.getAuthInstance().signOut();

    //window.location.href = "/"
    history.push("/login");
  };

  const resetValues = () => {
    // Reset the text input values to
    // their starting values (the data we loaded from the server)
    //alert('Reset functionality not implemented yet');

    setFavoriteFood(info.favoriteFood);
    setHairColor(info.hairColor);
    setBio(info.bio);
  };

  // And here we have the JSX for our component. It's pretty straightforward
  return (
    <div className="content-container">
      <Navigation />
      <h1 className="heading my-10 font-Le-Havretext-3xl">Info for {email}</h1>
      {!isVerified && (
        <div className="font-Raleway" className="fail">
          You won't be able to make any changes until you verify your email
        </div>
      )}
      {showSuccessMessage && (
        <div className="font-Raleway" className="success">
          Successfully saved user data!
        </div>
      )}
      {showErrorMessage && (
        <div className="font-Raleway" className="fail">
          Uh oh... something went wrong and we couldn't save changes
        </div>
      )}
      <label className="font-Raleway">
        Favorite Food:
        <input
          className="font-Raleway"
          onChange={(e) => setFavoriteFood(e.target.value)}
          value={favoriteFood}
        />
      </label>
      <label className="font-Raleway">
        Hair Color:
        <input
          className="font-Raleway"
          onChange={(e) => setHairColor(e.target.value)}
          value={hairColor}
        />
      </label>
      <label className="font-Raleway">
        Bio:
        <input
          className="font-Raleway"
          onChange={(e) => setBio(e.target.value)}
          value={bio}
        />
      </label>
      <hr />
      <button className="font-Raleway" onClick={saveChanges}>
        Save Changes
      </button>
      <button className="font-Raleway" onClick={resetValues}>
        Reset Values
      </button>
      <button className="font-Raleway" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
};

export const ForgotPasswordPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const history = useHistory();

  const onSubmitClicked = async () => {
    try {
      await axios.put(
        `http://localhost:8080/api/forgot-password/${emailValue}`
      );
      setSuccess(true);
      setTimeout(() => {
        history.push("/login");
      }, 3000);
    } catch (e) {
      setErrorMessage(e.message);
      console.log(e);
    }
  };

  return success ? (
    <>
      <h1 className="heading my-5 font-Le-Havre text-3xl">Success!</h1>
      <p className="font-Raleway">Please check your email for a reset link.</p>
    </>
  ) : (
    // <div className="content-container w-screen md:w-7/12">
    <>
      <h1 className="heading my-5 font-Le-Havre text-3xl">Forgot Password?</h1>
      <p className="font-Raleway">
        No worries! Just enter your email address and you'll automatically
        receive a reset link.
      </p>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        className="font-Raleway text-center"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        placeholder="youremail@mail.com"
      />
      <button
        className="font-Raleway"
        disabled={!emailValue}
        onClick={onSubmitClicked}
      >
        Send Reset Link
      </button>

      <button className="font-Raleway" onClick={() => history.push("/")}>
        Home
      </button>
      <img src={logo} className="App-logo" alt="logo" />
    </>
    // </div>
  );
};

export const PasswordResetLandingPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const { passwordResetCode } = useParams();

  const onResetClicked = async () => {
    try {
      await axios.put(
        `http://localhost:8080/api/users/${passwordResetCode}/reset-password`,
        {
          newPassword: passwordValue,
        }
      );
      setIsSuccess(true);
    } catch (e) {
      console.log(e);
      setIsFailure(true);
    }
  };

  if (isFailure) return <PasswordResetFailure />;
  if (isSuccess) return <PasswordResetSuccess />;

  return (
    <div className="content-container">
      <h1 className="heading my-5 font-Le-Havre text-3xl">Reset Password</h1>
      <p className="font-Raleway">Please enter a new password</p>
      <input
        className="font-Raleway"
        type="password"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        placeholder="Password"
      />
      <input
        className="font-Raleway"
        type="password"
        value={confirmPasswordValue}
        onChange={(e) => setConfirmPasswordValue(e.target.value)}
        placeholder=" Confirm Password"
      />

      <button
        className="font-Raleway"
        disabled={
          !passwordValue ||
          !confirmPasswordValue ||
          passwordValue !== confirmPasswordValue
        }
        onClick={onResetClicked}
      >
        Reset Password
      </button>
    </div>
  );
};

export const PasswordResetSuccess = () => {
  const history = useHistory();

  return (
    <div className="content-container">
      <h1 className="heading my-5 font-Le-Havre text-3xl">Success!</h1>
      <p className="font-Raleway">
        Your password has been reset. Now please login.
      </p>
      <button onClick={() => history.push("/login")}>Log In</button>
    </div>
  );
};

export const PasswordResetFailure = () => {
  const history = useHistory();

  return (
    <div className="content-container">
      <h1 className="heading my-5 font-Le-Havre text-3xl">
        Password Reset Failure
      </h1>
      <p className="Raleway">We weren't able to reset your password.</p>
      <button onClick={() => history.push("/login")}></button>
    </div>
  );
};
