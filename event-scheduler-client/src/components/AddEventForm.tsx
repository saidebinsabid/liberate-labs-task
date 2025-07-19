import { useForm } from "react-hook-form";

type EventFormValues = {
  title: string;
  date: string;
  time: string;
  notes?: string;
};

export default function AddEventForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormValues>();

  const onSubmit = (data: EventFormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md grid grid-cols-1 gap-6 sm:grid-cols-2"
    >
      {/* Title */}
      <div className="col-span-1 sm:col-span-2">
        <label className="block font-semibold text-gray-700 mb-1">Title<span className="text-red-500">*</span></label>
        <input
          type="text"
          {...register("title", { required: "Title is required" })}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </div>

      {/* Date */}
      <div>
        <label className="block font-semibold text-gray-700 mb-1">Date<span className="text-red-500">*</span></label>
        <input
          type="date"
          {...register("date", { required: "Date is required" })}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
      </div>

      {/* Time */}
      <div>
        <label className="block font-semibold text-gray-700 mb-1">Time<span className="text-red-500">*</span></label>
        <input
          type="time"
          {...register("time", { required: "Time is required" })}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
      </div>

      {/* Notes */}
      <div className="col-span-1 sm:col-span-2">
        <label className="block font-semibold text-gray-700 mb-1">Notes (optional)</label>
        <textarea
          {...register("notes")}
          rows={4}
          className="w-full border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category */}
      <div className="col-span-1 sm:col-span-2">
        <label className="block font-semibold text-gray-700 mb-1">Category (auto-generated)</label>
        <input
          type="text"
          value="other"
          readOnly
          className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2 text-gray-600"
        />
      </div>

      {/* Submit Button */}
      <div className="col-span-1 sm:col-span-2">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Add Event
        </button>
      </div>
    </form>
  );
}
