import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByAuthor, filterByCategory } from '../redux/filters/actions';

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();
  const handleFilterByAuthor = (author) => {
    console.log('author', author);
    dispatch(filterByAuthor(author));
  };

  const handleFilterByCategory = (category) => {
    console.log('category', category);
    dispatch(filterByCategory(category));
  };
  const {
    title,
    author,
    authorImage,
    blogImage,
    categories,
    readTime,
    releaseDate,
  } = blog;
  return (
    <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
      <div className='flex-shrink-0'>
        <img className='h-48 w-full object-cover' src={blogImage} alt='' />
      </div>

      <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
        <div className='flex-1'>
          <p className='text-sm font-medium text-indigo-600'>
            {categories.map((category) => {
              return (
                <span
                  className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mx-1 cursor-pointer'
                  onClick={() => handleFilterByCategory(category)}
                >
                  {category}
                </span>
              );
            })}
          </p>
          <a href='#' className='block mt-1'>
            <p className='text-xl font-semibold text-gray-900'>{title}</p>
          </a>
        </div>
        <div className='mt-6 flex items-center'>
          <div className='flex-shrink-0'>
            <img className='h-10 w-10 rounded-full' src={authorImage} alt='' />
          </div>
          <div className='ml-3'>
            <p
              className='text-sm font-medium text-gray-900 hover:underline cursor-pointer'
              onClick={() => handleFilterByAuthor(author)}
            >
              {author}
            </p>
            <div className='flex space-x-1 text-sm text-gray-500'>
              <time dateTime='2020-03-16'>{releaseDate}</time>
              <span aria-hidden='true'>&middot;</span>
              <span> {readTime} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
