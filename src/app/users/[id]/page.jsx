import React from "react";

async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UserPage({ params }) {
  const user = await getUser(params.id);
  return (
    <div>
      <ul className="bg-green-300 mb-2 p-4 rounded-md text-black">
        <div className="flex justify-between items-center gap-4">
          <h5 className="font-bold">
            {user.id}. {user.first_name} {user.last_name}
          </h5>
          <p className="text-slate-600">{user.email}</p>
          <img src={user.avatar} className="rounded-full w-20" />
        </div>
      </ul>
    </div>
  );
}

export default UserPage;
