import { useRef } from 'react'

const FormSection = ({ nameSection, setDataForm }) => {
    const myRef = useRef()

    const setData = async () => {
        await setDataForm(nameSection, myRef.current.value)
    }


    return (
        <div className='section-form'>
            <p>{nameSection}</p>
            <input type='text' ref={myRef} onChange={setData} placeholder={`Escribe tu ${nameSection}`} />
        </div>
    )
}

export default FormSection