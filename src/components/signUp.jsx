import WelcomeHeader from "./atoms/welcomeHeader.jsx";
import Overview from "./atoms/overview.jsx";
import ThirdPartyAuth from "./atoms/thirdPartyAuth.jsx";
import FooterBlurb from "./atoms/FooterBlurb.jsx";

// sign up
export default function SignUp() {
  const overviewPrompt =
    "Create a wallet that is secured by accounts you already have. With Lit-powered programmable MPC wallets, you won't have to worry about seed phrases.";
  const footerPrompt = "Already have an account?";
  const signPrompt = "Sign in";
  const linkSignIn = "/sign-in"; // redirects to sign-in

  // some stuff
  return (
    // some stuff
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="grid max-w-md px-4 py-8 mx-auto lg:gap-20 lg:py-16 lg:grid-cols-12">
        <div className="w-full place-self-center lg:col-span-6">
          <div className="p-6 mx-auto bg-white rounded-lg shadow dark:bg-gray-800 sm:max-w-xl sm:p-8">
            <a
              href="#"
              className="inline-flex items-center mb-4 text-xl font-normal text-gray-900 dark:text-white"
            ></a>
            <WelcomeHeader prompt="Welcome back" />
            <Overview prompt={overviewPrompt} />
            <ThirdPartyAuth prompt="Sign Up" />
            <FooterBlurb
              prompt={footerPrompt}
              signPrompt={signPrompt}
              link={linkSignIn}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
