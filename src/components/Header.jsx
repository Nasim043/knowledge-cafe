import React from 'react';

const Header = () => {
  return (
    <div className="navbar bg-base-100 px-4 mt-8">
      <div className="flex-1">
        <a className="text-4xl font-bold">Knowledge Cafe</a>
      </div>
      <div>
        <img className="w-14 rounded-full" src="https://randomuser.me/api/portraits/women/72.jpg" />
      </div>
    </div>
  );
};

export default Header;