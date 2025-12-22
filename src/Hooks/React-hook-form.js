import { useForm } from 'react-hook-form';

export default function Form(){
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);

    return(
        <form onSubmit = {handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <br></br>
            <br></br>
            <input {...register("lastName")} />
            <br></br>
            <br></br>
            <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <br></br>
            <br></br>
            <input type="submit" />
        </form>
    )
}