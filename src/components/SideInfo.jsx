import React from 'react';

const SideInfo = ({ spentTime, bookmarked }) => {
  return (
    <div className='w-2/5'>
      <div className='bg-slate-100 text-center mb-5'>
        <h1 className='font-bold text-xl text-title-blue p-5'>Spent time on read : {spentTime} min</h1>
      </div>
      <div className='bg-slate-100 px-7'>
        <h1 className='font-bold text-xl pb-4 pt-7'>Bookmarked Blogs : {bookmarked.length}</h1>
        {
          bookmarked.map(bookMark => {
            return (
              <>
                <p className='bg-white p-4 font-semibold text-lg'>{bookMark}</p>
                <p className='bg-slate-100 p-3'></p>
              </>
            )
          })
        }
      </div>
    </div>
  );
};

export default SideInfo;