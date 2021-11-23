const NewUser = ({ user, deleteUser }) => {

    const takeUser = () => {
        deleteUser(user.id)
    }

    return (
        <div className='slot-user'>
            <div className='data-user'>
                <p>{user.nombre}</p>
                <p>{user.apellido}</p>
                <p>{user.correo}</p>
            </div>
            <button onClick={takeUser}>x</button>
        </div>
    )
}

export default NewUser