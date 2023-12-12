export default function Overview({ prompt }) {
  return (
    <div className="Overview">
      <h1 className="mb-2 text-m font-regular leading-tight tracking-tight text-gray-900 dark:text-white">
        {prompt}
      </h1>
    </div>
  );
}
