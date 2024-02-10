export default function Input() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-2 mitems-center justify-center">
      <input
        type="text"
        className="p-4 focus:shadow-lg rounded-md border border-slate-500 focus:outline focus:outline-violet-600 w-full md:w-4/5"
        placeholder="Write down your task..."
      />
      <button className="px-6 py-4 rounded-md text-center text-slate-800 font-semibold bg-white hover:bg-slate-50">
        Add Task
      </button>
    </div>
  );
}
