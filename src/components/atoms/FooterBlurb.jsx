import { Link } from "react-router-dom";

export default function FooterBlurb({ prompt, signPrompt, link }) {
  return (
    <div className="sign-up">
      <br />
      <p className="text-sm font-light text-gray-500 dark:text-gray-300">
        {prompt}{" "}
        <Link to={link}>
          <a
            href="#"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            {signPrompt}
          </a>
        </Link>
        .
      </p>
    </div>
  );
}
