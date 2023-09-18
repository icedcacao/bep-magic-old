export default function Header({ title }) {
  return (
    <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
      <div className="w-full mb-1">
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      </div>
    </div>
  );
}
