export default function CRUDMainLayout({ children }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow">{children}</div>
        </div>
      </div>
    </div>
  );
}
