import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Container,
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

export const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    console.log("You are testing.");
    history.push("/");
  });

  return (
    <div className="content-container w-screen md:w-7/12  ">
      <img width="200" heiht="200" src={logo} className="App-logo" alt="logo" />
      <Navigation />
      <h1 className="heading my-5 font-Le-Havre text-4xl">
        Chris Mazzochi, React Developer
      </h1>
      <div className="imageDiv flex-wrap-nowrap ">
        <p className="aboutText font-Raleway">
          This web application demonstrates a full stack React login
          authentication flow, using Google OAuth, SendGrid, and JSON Web
          tokens. It uses fourteen components, and allows a user to sign up to
          the site, by entering an email and password which is hashed, and
          persisted in a MongoDb database. The user is also allowed to signup
          using their Google accounts. Basic information Google’s API provides
          is loaded and persisted in the MongoDb. Users can then continue to
          login using their Google accounts. Once logged in the user is directed
          to a profile page where they may enter some basic information. The
          user may save data, but only when the user confirms the email they
          used to register themselves with, that the application sends out via
          SendGrid. The application uses a JSON web token, signed by my Node
          server, to keep the user logged in. Finally, the application uses the
          Tailwinds CSS framework, for the layout and styling and preprocessing.
        </p>
      </div>

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
    <div className="content-container w-screen md:w-7/12">
      <img
        width="200"
        height="200"
        src={logo}
        className="App-logo"
        alt="logo"
      />
      <Navigation />

      <h1 className="heading my-5 font-Le-Havre text-4xl">{data.name}</h1>
      <div className="imageDiv flex-wrap ">
        <img
          id="aboutImg"
          className=""
          width="300"
          src={data.avatar_url}
          alt={data.login}
        />
        <p className="aboutText font-Raleway">
          I am a perfect cross or hybrid of design and developer. I began my ten
          year journey to development mastery, on the front end. Drawn by the
          design possibilities, I very quickly became interested in what was
          receiving requests from the front end, and where data was going to, or
          coming from. In love with JavaScript because of the programmatic
          nature of it, it was about this time I was hearing that I could now
          use it on the front end, and back end, and began working with NodeJS.
          Then frontend frameworks like Angular and React were introduced, and I
          began working with them. My knowledge, ability and proficiency as a
          developer is the result of a combination of formal education,
          self-education, experience and excellent mentors.{" "}
        </p>
      </div>
    </div>
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
      <Container>
        <FormWrap>
          {/* <Icon to="/">BWM</Icon> */}
          <FormContent>
            <Form>
              <FormH1>Contact Us</FormH1>
              {message && (
                <div
                  className={`postSubmitMessageDiv my-4 w-full p-4 ${message.className}`}
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
              <ReCAPTCHADiv>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={recaptchaKey}
                  onChange={updateRecaptchaToken}
                  id="recaptcha"
                />
              </ReCAPTCHADiv>
              <FormButton
                disabled={submitting}
                type="button"
                onClick={submitForm}
              >
                {submitting ? "Submitting..." : "Submit"}
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export const LogInPage = () => {
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

  // useEffect(() => {
  //   const loadGoogleButton = async (e) => {
  //     try {
  //       e.preventDefault();
  //       console.log("Testing loadGoogleButton function");
  //       window.location.href = "/login";
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   loadGoogleButton();
  // }, []);

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
    <div className="content-container w-screen md:w-7/12">
      <div id="login-container " className="bg-white w-4/5 md:w-5/12">
        <h1 className="heading my-5 font-Le-Havre text-3xl">Log In</h1>

        {errorMessage && <div className="fail">{errorMessage}</div>}
        <input
          className="text-center font-Raleway"
          value={emailValue}
          //binding state to input
          onChange={(e) => setEmailValue(e.target.value)}
          placeholder="youremail@mail.com"
        />

        <input
          className="text-center font-Raleway"
          value={passwordValue}
          //binding state to input
          onChange={(e) => setPasswordValue(e.target.value)}
          placeholder="yourpassword"
        />

        <button
          className="focus:ring-8 font-Raleway"
          disabled={!emailValue || !passwordValue}
          onClick={onLogInClicked}
        >
          Log In
        </button>

        <button
          className="font-Raleway"
          onClick={() => history.push("/forgot-password")}
        >
          Forgot your password?
        </button>
        <button
          className="font-Raleway"
          onClick={() => history.push("/signup-page")}
        >
          Don't have an account? Sign Up
        </button>

        {/* <div
          id="g_id_onload"
          data-client_id="997265959245-ge8fkun5p6ra82arodllg59kgqhnm572.apps.googleusercontent.com"
          data-login_uri="http:localhost:3000/api/googlelogin"
          data-auto_prompt="false"
        ></div>
        <div
          class="g_id_signin"
          data-type="standard"
          data-size="large"
          data-theme="outline"
          data-text="sign_in_with"
          data-shape="rectangular"
          data-logo_alignment="left"
        ></div> */}

        {/* <button
          className="font-Raleway"
          data-onsuccess="onSignIn"
          id="google-sign-in"
          disabled={!googleOAuthUrl}
          onClick={() => {
            window.location.href = googleOAuthUrl;
          }}
        >
          Log in with Google
        </button> */}

        {/* <div
          className="font-Raleway"
          id="google-sign-in"
          onClick={() => {
            window.location.href = googleOAuthUrl;
          }}
        ></div> */}
        <div id="my-signin2"></div>
        <button className="font-Raleway" onClick={() => history.push("/")}>
          Back Home
        </button>
        <img
          width="200"
          height="200"
          src={logo}
          className="App-logo"
          alt="logo"
        />
      </div>
    </div>
  );
};

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
    <div className="content-container w-screen md:w-7/12">
      <div id="login-container " className="bg-white w-4/5 md:w-5/12">
        <h1 className="heading my-10 font-Le-Havre text-3xl">Sign Up</h1>

        {errorMessage && <div className="fail">{errorMessage}</div>}
        <input
          className="font-Raleway"
          value={emailValue}
          //binding state to input
          onChange={(e) => setEmailValue(e.target.value)}
          placeholder="youremail@gmail.com"
        />

        <input
          className="font-Raleway"
          value={passwordValue}
          //binding state to input
          onChange={(e) => setPasswordValue(e.target.value)}
          placeholder="password"
        />

        <input
          className="font-Raleway"
          value={confirmPasswordValue}
          //binding state to input
          onChange={(e) => setConfirmPasswordValue(e.target.value)}
          placeholder="confirm password"
        />

        <button
          className="font-Raleway"
          disabled={
            !emailValue ||
            !passwordValue ||
            passwordValue !== confirmPasswordValue
          }
          onClick={onSignUpClicked}
        >
          Sign Up
        </button>

        <button className="font-Raleway" onClick={() => history.push("/login")}>
          Already have an account? Login
        </button>
        <button className="font-Raleway" onClick={() => history.push("/")}>
          Back Home
        </button>
        <img src={logo} className="App-logo" alt="logo" />
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
    });
  });

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
    <div className="content-container">
      <h1 className="heading my-5 font-Le-Havre text-3xl">Success</h1>
      <p className="font-Raleway">Check your email for a reset link</p>
    </div>
  ) : (
    <div className="content-container w-screen md:w-7/12">
      <h1 className="heading my-5 font-Le-Havre text-3xl">Forgot Password</h1>
      <p className="font-Raleway">
        Enter your email and we'll send you a reset link
      </p>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        className="font-Raleway"
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
        Back Home
      </button>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
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
