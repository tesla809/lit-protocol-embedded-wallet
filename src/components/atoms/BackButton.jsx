import { Link } from "react-router-dom";

export default function RegisterPassKey({ header, prompt }) {
  return (
    <Link to="/">
      <a
        type="submit"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Back
      </a>
    </Link>
  );
}
