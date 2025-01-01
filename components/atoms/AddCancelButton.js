function AddCancelButton({ showEdit }) {
  return (
    <div className="flex justify-end gap-5">
      <button
        onClick={() => showEdit(false)}
        className="border border-primary  rounded-[5px] text-primary text-base  py-2 h-fit px-11"
      >
        انصراف
      </button>
      <button
        className="bg-primary rounded-[5px] text-background text-base  py-2 h-fit px-11"
        type="submit"

      >
        تایید
      </button>
    </div>
  );
}

export default AddCancelButton;
