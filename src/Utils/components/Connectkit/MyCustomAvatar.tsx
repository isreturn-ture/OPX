import { Types } from "connectkit";

const MyCustomAvatar = ({
  address,
  ensName,
  size,
  radius,
}: Types.CustomAvatarProps) => {
  return (
    <div
      style={{
        overflow: "hidden",
        borderRadius: radius,
        height: size,
        width: size,
        background: address, // your function here
      }}
    >
      <img
        src="/默认头像.png"
        alt={ensName ?? address}
        width="100%"
        height="100%"
      />
      )
    </div>
  );
};

export default MyCustomAvatar;
