import { useForm } from "../hooks/useForm"

export const UserPage = ({setName})  => {

    const[value,handleForm]=useForm({
        name:''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('name',value.name.trim())

        setName(value.name.trim())
    }

    return (
      <form 
        className="user-form"
        onSubmit={handleSubmit}
    >
        <input 
            className="input-text"
            autoComplete="off"
            placeholder="tu nombre es...?"
            type="text" 
            name="name"
            value={value.name}
            onChange={handleForm}
        />

        <input 
            className="button"
            type="submit" 
        />
      </form>
    )
  }