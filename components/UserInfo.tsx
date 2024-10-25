export const UserInfo = ({ onNewQuery }: { onNewQuery: () => void }) => {
  return (
    <div className="border rounded-xl py-8 px-4">
      <div className="flex items-start justify-center">
        <div className="avatar placeholder mr-8">
          <div className="bg-neutral text-neutral-content w-24 rounded-full">
            <span className="text-3xl">D</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <div className="border p-2 text-sm">Placeholder</div>
          <div className="border p-2 text-sm min-w-[180px]">Placeholder</div>
          <div className="border p-2 text-sm min-w-[180px]">Placeholder</div>
          <div className="border p-2 text-sm min-w-[180px]">Placeholder</div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button className="btn btn-sm btn-primary" onClick={onNewQuery}>
          New query
        </button>
        <button className="btn btn-sm btn-primary">Open in Platform</button>
      </div>
    </div>
  );
};
