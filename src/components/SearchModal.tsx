'use client';

import React from 'react';

const SearchModal = () => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = (e.currentTarget.search as HTMLInputElement).value;
    console.log('Searching for:', query);
    // bisa redirect, fetch data, dsb
  };

  return (
    <div className="modal" role="dialog">
      <div className="modal-box bg-white dark:bg-gray-900">
        <h3 className="text-lg font-bold mb-4 text-black dark:text-white">Search Games</h3>

        <form className="flex flex-col gap-4" onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Enter game title..."
            className="input input-bordered w-full bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            required
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>

        <div className="modal-action">
          <label htmlFor="modalSearch" className="btn">Close</label>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
