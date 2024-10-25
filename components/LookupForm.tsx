import { QueryRecord } from "@/types";
import { useState } from "react";
import { UserInfo } from "./UserInfo";
import { DomainDropdown } from "./DomainDropdown";

export const LookupForm = ({ onResult }: { onResult?: () => void }) => {
  const [queryRecord, setQueryRecord] = useState<QueryRecord | null>(null);

  const handleSubmit = () => {
    setQueryRecord({
      wallet: "0x1234567890",
      name: "Alice",
      id: "0x1234567890",
      nonce: 1,
      domainName: "example.com",
      validUntil: 123456789,
    });

    onResult?.();
  };

  if (queryRecord) {
    return <UserInfo onNewQuery={() => setQueryRecord(null)} />;
  }

  return (
    <div className="flex flex-col gap-2 border rounded-xl p-4">
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text font-semibold">Find User</span>
        </div>
        <div className="w-full relative">
          <input type="text" placeholder="Type here" className="input input-bordered w-full text-sm pr-[136px]" />
          <select className="select select-bordered absolute top-1/2 -translate-y-1/2 right-2 select-sm outline-none">
            <option>User ID</option>
            <option>User handle</option>
            <option>Address</option>
          </select>
        </div>
      </label>
      <DomainDropdown />
      <div className="form-control">
        <label className="label cursor-pointer justify-start">
          <input type="checkbox" className="toggle" defaultChecked />
          <span className="label-text ml-2">Cross Domain Lookup</span>
        </label>
      </div>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text font-semibold">Target Domain</span>
        </div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
      </label>
      <div className="mt-4 text-center">
        <button className="btn btn-sm btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
