import React, { FC, useState } from 'react';
import { Button } from '@/components/Button';

import { FormProps } from '@/components/Form/Form.types';
import Search from 'public/search.svg';

export const Form: FC<FormProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: any) => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    onSubmit(query);

    setQuery('');
  };

  return (
    <div className="mx-auto mb-10 max-w-2xl space-x-6 rounded-xl bg-white p-4 shadow-md">
      <form className="flex w-full items-center gap-2" onSubmit={handleSubmit}>
        <div className="relative flex w-full rounded-lg bg-gray-100">
          <Search className="absolute left-4 h-6 w-6 translate-y-1/2" />

          <input
            className="text-md w-full rounded-lg bg-gray-100 p-3 pl-12 font-medium placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all duration-300"
            type="text"
            value={query}
            placeholder="Enter name of film..."
            onChange={handleChange}
          />
        </div>

        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};
