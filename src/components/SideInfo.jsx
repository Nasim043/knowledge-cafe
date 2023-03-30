import React from 'react';

const SideInfo = ({spentTime}) => {
  return (
    <div className='w-2/5 bg-amber-300 p-5'>
      <h1 className=''>Spent time on read : {spentTime} min</h1>
    </div>
  );
};

export default SideInfo;