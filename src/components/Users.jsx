import Link from "next/link";
import React from "react";

function Users({ users }) {
  return (
    <div>
      {users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <ul>
            <li className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between items-center gap-4">
              <div>
                <h5 className="font-bold">
                  {user.id}. {user.first_name} {user.last_name}
                </h5>
                <p className="text-slate-600">{user.email}</p>
              </div>
              <img src={user.avatar} className="rounded-full w-20" />
            </li>
          </ul>
        </Link>
      ))}
    </div>
  );
}

export default Users;
