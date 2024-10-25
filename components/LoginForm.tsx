import { DomainDropdown } from "./DomainDropdown";

export const LoginForm = ({ onLogIn }: { onLogIn: () => void }) => {
  return (
    <div className="flex flex-col gap-2 border rounded-xl p-4">
      <DomainDropdown />
      <div className="divider"></div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={onLogIn}>
          Login with platform
        </button>
      </div>
    </div>
  );
};
