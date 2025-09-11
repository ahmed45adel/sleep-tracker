'use client';

import { useState } from 'react';
import { Record } from '@/types/Record';
import deleteRecord from '@/app/actions/deleteRecord';

const RecordItem = ({ record }: { record: Record }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteRecord = async (recordId: string) => {
    setIsLoading(true);
    await deleteRecord(recordId);
    setIsLoading(false);
  };

  return (
    <li
      className={`flex justify-between items-center bg-background p-4 rounded-lg shadow-md mb-4 border border-border ${
        record?.amount < 7
          ? 'border-l-4 border-red-500'
          : 'border-l-4 border-green-500'
      }`}
    >
      <div className="flex flex-col">
        {/* Date */}
        <span className="text-sm text-muted-foreground">
          {new Date(record?.date).toLocaleDateString()}
        </span>

        {/* Hours slept */}
        <span className="text-lg font-bold text-foreground">
          {record?.amount} hours
        </span>

        {/* Sleep mode text */}
        <span className="text-sm text-muted-foreground">
          Sleep Mode: {record?.text}
        </span>
      </div>

      {/* Delete button */}
      <button
        onClick={() => handleDeleteRecord(record.id)}
        className={`text-white rounded-full w-8 h-8 flex items-center justify-center transition cursor-pointer ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        aria-label="Delete record"
        disabled={isLoading}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        ) : (
          '✖'
        )}
      </button>
    </li>
  );
};

export default RecordItem;