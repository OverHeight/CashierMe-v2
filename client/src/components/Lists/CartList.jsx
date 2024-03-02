export const CartList = () => {
  return (
    <div className="card h-24 border px-2 flex items-center w-full card-side bg-base-100 shadow-xl">
      <div className="container w-20 h-20 rounded-xl bg-secondary"></div>
      <div className="flex w-full px-2 items-center justify-between">
        <div className="flex-col">
          <p>name</p>
          <p>price</p>
        </div>
        <div className="flex">
          <p>Rp 12,000</p>
        </div>
      </div>
    </div>
  );
};
