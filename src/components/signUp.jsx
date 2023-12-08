import WelcomeHeader from "./welcomeHeader.jsx";
import Overview from "./overview.jsx";
import ThirdPartyAuth from "./thirdPartyAuth.jsx";
import SignIn from "./signInBlurb.jsx";

export default function SignUp() {
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
            <WelcomeHeader />
            <Overview />
            <ThirdPartyAuth />
            <SignIn />
          </div>
        </div>
      </div>
    </section>
  );
}
