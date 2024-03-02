export const CategoryList = () => {
  const list = ["Meal", "Drinks", "Appetizer", "Favorites"];
  const isActive = true;
  return (
    <>
      <ul className="flex gap-4">
        {list.map((el, index) => (
          <li key={index}>
            <button
              className={`btn btn-sm px-6 rounded-full text-sm  ${
                isActive
                  ? "btn-active text-base-100 btn-secondary border border-black"
                  : "bg-base-300 text-black"
              }`}
            >
              {el}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
