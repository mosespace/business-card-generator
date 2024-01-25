"use client";
export default function TextareaInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className='block text-sm font-medium leading-6 dark:text-orange-500 text-gray-900 mb-2 '
      >
        {label}
      </label>
      <div className='mt-2'>
        <textarea
          {...register(`${name}`, { required: isRequired })}
          name={name}
          id={name}
          rows={3}
          className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500'
          placeholder={`Type the ${label.toLowerCase()}`}
          defaultValue={""}
        />
        {errors[`${name}`] && (
          <span className='text-sm text-red-600 '>{label} is required</span>
        )}
      </div>
    </div>
  );
}
