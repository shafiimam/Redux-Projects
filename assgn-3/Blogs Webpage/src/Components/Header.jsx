import React from 'react';
import devLogo from '../assets/cli-logo.png';
import sarchLogo from '../assets/search.svg';
import { useDispatch } from 'react-redux';
import { searchBlog } from '../redux/filters/actions';
const Header = () => {
  const dispatch = useDispatch();
  function debounce(func, wait = 700, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  const handleSearch = debounce((e) => {
    console.log('searching', e.target.value);
    dispatch(searchBlog(e.target.value));
  });
  return (
    <div>
      <nav className='bg-slate-100 shadow-md'>
        <div className='max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center'>
          <a href='index.html'>
            <img className='h-10' src={devLogo} alt='Blogs by Shafi Imam' />
          </a>
          Blogs Webpage by Shafi
        </div>
      </nav>

      <div className='border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200'>
        <input
          className='outline-none border-none bg-gray-50 h-full w-full mr-2'
          type='search'
          name='search'
          placeholder='Search'
          onChange={handleSearch}
        />
        <img
          className='inline h-6 cursor-pointer'
          src={sarchLogo}
          alt='Search'
        />
      </div>
    </div>
  );
};

export default Header;
