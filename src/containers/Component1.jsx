import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Component1() {
  const [result, setResult] = useState({});
  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    setResult(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-2">
        <div className="flex flex-col gap-2">
          <label className="font-semibold">First Name: </label>
          <input
            type="text"
            className="border p-1 rounded w-full"
            placeholder="First Name"
            {...register("firstName")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Last Name: </label>
          <input
            type="text"
            className="border p-1 rounded w-full"
            placeholder="Last Name"
            {...register("lastName")}
          />
        </div>

        <button type="submit" className="bg-primary p-2 rounded">
          Submit
        </button>
      </form>

      <div className="text-center text-xl mt-5">
        <p>Result:</p>
        <pre>{JSON.stringify(result, undefined, 2)}</pre>
      </div>
    </>
  );
}
