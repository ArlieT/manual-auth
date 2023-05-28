import React from 'react';

interface User {
  email: string;
  image: string;
  name: string;
}

interface MenuItemProps {
  onclick: () => void;
  label: string;
  user:any
}



function MenuItem({ label, user = null, onclick }: MenuItemProps) {
  return (
    <div onClick={onclick} className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
      <p className='inline'>{user?.user.email}</p>
      {label}
    </div>
  );
}

export default MenuItem;
