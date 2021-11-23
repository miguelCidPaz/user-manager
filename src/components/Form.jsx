import FormSection from './FormSection'
import { useState } from 'react'
import NewUser from './NewUser'

const Form = ({ props }) => {
    const [nombre, setNombre] = useState()
    const [apellido, setApellido] = useState()
    const [correo, setCorreo] = useState()
    const [users, setUsers] = useState([])

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
        setUsers(prevUsers => {
            return [...prevUsers, { id: users.length, nombre: nombre, apellido: apellido, correo: correo }]
        })
    }

    const deleteUser = (id) => {
        const newUsers = users.filter((user) => user.id !== id)
        setUsers(newUsers)
    }

    const arr = []
    props.form.map((section, index) => {
        return arr.push(<FormSection key={index} nameSection={section} setDataForm={setDataForm} />)
    })

    return (
        <>
            <div className='form'>
                <h1> Formulario </h1>
                <div className='form-camps'>
                    {arr}
                </div>
                <button onClick={submit}>Enviar</button>
            </div>
            {users.length >= 1 ?
                <div className="users">
                    {users.map((element, index) => {
                        return <NewUser key={index} user={element} deleteUser={deleteUser} />
                    })}
                </div>
                : null}

        </>
    )
}

export default Form