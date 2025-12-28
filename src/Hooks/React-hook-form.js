import { Form, useForm } from 'react-hook-form';
//import { Form, useForm } from "react-hook-form";

export default function HookForm() {
    // const {
    //     register,
    //     formState: { errors },
    //     handleSubmit,
    // } = useForm();

    const { register, control } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <label>First Name: </label>
        //     <input {...register("firstName", { required: true })}
        //         aria-invalid={errors.firstName ? "true" : "false"}
        //     />
        //     {errors.firstName?.type === "required" && (
        //         <p role="alert">First name is required</p>
        //     )}
        //     <br></br>
        //     <br></br>

        //     <label>Last Name: </label>
        //     <input {...register("lastName")} />
        //     <br></br>
        //     <br></br>
        //     <label>Email: </label>
        //     <input
        //         {...register("mail", { required: "Email Address is required" })}
        //         aria-invalid={errors.mail ? "true" : "false"}
        //     />
        //     {errors.mail && <p role="alert">{errors.mail.message}</p>}
        //     <br></br>
        //     <br></br>
        //     <label>Gender: </label>
        //     <select {...register("gender")}>
        //         <option value="female">female</option>
        //         <option value="male">male</option>
        //         <option value="other">other</option>
        //     </select>
        //     <br></br>
        //     <br></br>
        //     <label>Age: </label>
        //     <input type="number" {...register("age", { min: 18, max: 99 })} />
        //     <br></br>
        //     <br></br>
        //     <input type="submit" />
        // </form>
        <Form action="/api/save"
            onSuccess={() => { alert("Your applicaiton is updated") }}
            onError={() => { alert("There is some error") }}
            control={control}
        >
            <label>First Name: </label>
            <input {...register("firstName", { required: true })} />
            <br></br>
            <br></br>
            <label>Last Name: </label>
            <input {...register("lastName")} />
            <br></br>
            <br></br>
            <label>Email: </label>
            <input
                {...register("mail", { required: "Email Address is required" })}
            />
            <br></br>
            <br></br>
            <label>Gender: </label>
            <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <br></br>
            <br></br>
            <button>Submit</button>

        </Form>
    )
}