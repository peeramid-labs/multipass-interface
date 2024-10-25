export const DomainDropdown = () => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text font-semibold">Domain</span>
      </div>
      <div className="w-full relative">
        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        <select className="select select-bordered absolute top-1/2 -translate-y-1/2 right-2 select-sm outline-none">
          <option>Domain 1</option>
          <option>Domain 2</option>
          <option>Domain 3</option>
        </select>
      </div>
    </label>
  );
};
