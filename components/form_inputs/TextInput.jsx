"use client";
export default function TextInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  isDisabled = false,
  type = "text",
  className = "sm:col-span-2",
  defaultValue = "",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className='block text-sm font-medium leading-6 dark:text-orange-500 text-gray-900 my-2 '
      >
        {label}
      </label>
      <div className='mt-2'>
        <input
          {...register(`${name}`, { required: isRequired })}
          type={type}
          name={name}
          id={name}
          disabled={isDisabled}
          defaultValue={defaultValue}
          autoComplete={name}
          className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500'
          placeholder={`Type the ${label.toLowerCase()}`}
        />
        {errors[`${name}`] && (
          <span className='text-sm text-red-600 '>{label} is required</span>
        )}
      </div>
    </div>
  );
}
