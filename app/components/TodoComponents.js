// TodoComponents.js

import React from 'react';

export const InputField = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="What do you need to do?"
      value={value}
      onChange={onChange}
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
    />
  );
};

export const AddButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
    >
      Add
    </button>
  );
};

export const DeleteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1 rounded-lg shadow transition"
      title="Delete"
    >
      ✕
    </button>
  );
};

