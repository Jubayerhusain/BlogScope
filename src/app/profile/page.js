import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

const ProfilePage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="flex flex-col items-center">
          <Image
            src={user.picture || "/default-avatar.png"} // Fallback to a default picture
            alt="User Avatar"
            width={144}
            height={144}
            className="rounded-full w-36 h-36 object-cover border-4 border-blue-500"
          />

          <h1 className="mt-4 text-2xl font-bold text-gray-800">
            {user.given_name} {user.family_name}
          </h1>
          <p className="text-gray-500 text-sm">{user.email}</p>
        </div>
        <div className="mt-6 space-y-4">
          <p className="text-gray-700">
            <span className="font-semibold">Username:</span>{" "}
            {user.given_name || "N/A"}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Phone Number:</span>{" "}
            {user.phone_number || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
