import { useUser } from "./shared/context/user.context";


export const UserMenuItem = () => {
  const { login, logout, token, user } = useUser();

  return user ? (
    <>
      <div className="flex-shrink-0">
        <img
          className="h-10 w-10 rounded-full"
          src={user.images?.[0]?.url}
          alt="" />
      </div>
      <div className="ml-3">
        <div className="text-base font-medium text-white">
          {user.display_name}
        </div>
        <div className="text-sm font-medium text-indigo-300">{user.email}</div>
      </div>
    </>
  ) : (
    <div>
      <a onClick={login}>LogIn</a>
    </div>
  );
};
