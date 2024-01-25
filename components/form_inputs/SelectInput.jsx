import React from "react";

export default function SelectInput({
  label,
  name,
  register,
  className = "sm:col-span-2",
  options = [],
  multiple = false,
}) {
  // console.log(options);
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className='block text-sm font-medium leading-6 text-black'
      >
        {label}
      </label>
      <div className='mt-2'>
        <select
          {...register(`${name}`)}
          id={name}
          multiple={multiple}
          name={name}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
        >
          {options.map((option, i) => {
            return (
              <option key={i} value={option.id}>
                {option.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
