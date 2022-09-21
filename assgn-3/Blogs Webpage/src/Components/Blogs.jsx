import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearFilter,
  filterByCategory,
  searchBlog,
} from '../redux/filters/actions';
import BlogCard from './BlogCard';
import Hero from './Hero';

const Blogs = () => {
  const blogs = useSelector((state) => state.blogs);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  console.log('blogs', blogs);
  const resetFilters = () => {
    dispatch(clearFilter());
  };

  const filterByCategory = (blog) => {
    const { category } = filters;
    if (category.length === 0) {
      return true;
    }
    if (blog.categories.includes(category)) {
      return blog;
    }
  };

  const filterByAuthor = (blog) => {
    const { author } = filters;
    if (author.length === 0) {
      return true;
    }
    if (blog.author === author) {
      return blog;
    }
  };

  const searchBlog = (blog) => {
    const { searchKeyword } = filters;
    if (searchKeyword.length === 0) {
      return true;
    }
    if (blog.title.toLowerCase().includes(searchKeyword.toLowerCase())) {
      return blog;
    }
  };
  return (
    <section className='relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8'>
      <div className='relative max-w-7xl mx-auto'>
        <button className='m-2 border-zinc-900' onClick={resetFilters}>
          Reset
        </button>
        <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
          {blogs
            .filter(filterByCategory)
            .filter(filterByAuthor)
            .filter(searchBlog)
            .map((blog) => {
              return <BlogCard key={blog.id} blog={blog} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
