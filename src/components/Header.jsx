import React from 'react';

const Header = () => {
  return (
    <div className="navbar bg-base-100 px-4 my-7">
      <div className="flex-1">
        <a className="text-4xl font-bold">Knowledge Cafe</a>
      </div>
      <div className="w-12 rounded-full">
        <img src="https://p.kindpng.com/picc/s/394-3947019_round-profile-picture-png-transparent-png.png" />
      </div>
    </div>
  );
};

export default Header;