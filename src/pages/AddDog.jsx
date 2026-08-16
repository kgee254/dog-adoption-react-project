import { useForm } from "react-hook-form";
import { useContext } from "react";
import { DogContext } from "../context/DogContext";
import { useNavigate } from "react-router-dom";

function AddDog() {
  const { register, handleSubmit, reset } = useForm();
  const { addDog } = useContext(DogContext); // get addDog from context
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    addDog(formData); // send formData to DogContext
    reset(); // clear form
    navigate("/"); // send admin back to dogs page to see Charlie
  };

  return (
    <div>
      <h2>Add New Dog</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Dog Name" {...register("name", { required: true })} />
        <input placeholder="Breed" {...register("breed", { required: true })} />
        <input placeholder="Age" type="number" {...register("age", { required: true })} />
        <input placeholder="Image URL" {...register("image")} />
        <button type="submit">Add Dog</button>
      </form>
    </div>
  );
}

export default AddDog;