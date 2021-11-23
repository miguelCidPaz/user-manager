import FormSection from './FormSection'
import { useState } from 'react'

const Form = ({ props }) => {
    const [nombre, setNombre] = useState()
    const [apellido, setApellido] = useState()
    const [correo, setCorreo] = useState()
    const [users, setUsers] = useState()

    const setDataForm = (nameSection, value) => {
        switch (nameSection) {
            case 'nombre':
                return setNombre(value)
            case 'apellido':
                return setApellido(value)
            case 'correo':
                return setCorreo(value)
            default:
                return ''
        }
    }

    const submit = () => {
        console.log('nombre ' + nombre)
        console.log('apellido ' + apellido)
        console.log('correo ' + correo)
        const user = [nombre, apellido, correo]
        setUsers(prevState => ({
            users: prevState, users
        }))
        console.log(users)
    }

    const arr = []
    props.form.map((section, index) => {
        return arr.push(<FormSection key={index} nameSection={section} setDataForm={setDataForm} />)
    })

    return (
        <div className='form'>
            <h1> Formulario </h1>
            <div className='form-camps'>
                {arr}
            </div>
            <button onClick={submit}>Enviar</button>
        </div>
    )
}

export default Form