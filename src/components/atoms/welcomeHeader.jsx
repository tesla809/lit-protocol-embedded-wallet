export default function WelcomeHeader({ prompt }) {
  return (
    <div className="welcome-message">
      <h1 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
        {prompt}
      </h1>
    </div>
  );
}
