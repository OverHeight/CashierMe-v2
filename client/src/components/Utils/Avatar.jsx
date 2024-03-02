import avatar from "../../assets/avatar.png";
export const Avatar = () => {
  return (
    <div className="avatar">
      <div className="w-10 rounded-full">
        <img src={avatar} className="object-cover" />
      </div>
    </div>
  );
};
