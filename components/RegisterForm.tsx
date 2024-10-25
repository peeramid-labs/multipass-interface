import { useState } from "react";
import { LookupForm } from "./LookupForm";

export const RegisterForm = () => {
  const [haveReferralCode, setHaveReferralCode] = useState(false);
  const [referralCode, setReferralCode] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <div className="form-control">
        <label className="label cursor-pointer justify-start">
          <input
            type="checkbox"
            className="toggle"
            checked={haveReferralCode}
            onChange={(e) => setHaveReferralCode(e.target.checked)}
          />
          <span className="label-text ml-2">I have referral code</span>
        </label>
      </div>
      {haveReferralCode && <LookupForm onResult={() => setReferralCode("xxxx")} />}
      {referralCode && (
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Referral code</span>
          </div>
          <input type="text" value={referralCode} className="input input-bordered w-full" disabled />
        </label>
      )}
      <div className="mt-10 text-center">
        {referralCode ? (
          <button className="btn btn-primary">Register with referral</button>
        ) : (
          <button className="btn btn-primary">Register without referral</button>
        )}
      </div>
    </div>
  );
};
