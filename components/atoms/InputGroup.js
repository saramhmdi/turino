function InputGroup({ label, register, name, errors, type = "text" }) {
  return (
    <div className="w-full">
      <input
        type={type}
        {...register(name)}
        placeholder={label}
        className="text-[14px] w-full    border rounded-[5px] p-2  border-[#00000080] "
      />
      <p className="text-red-500 text-sm mt-2 italic">
        {errors[name]?.message}
      </p>
    </div>
  );
}

export default InputGroup;
