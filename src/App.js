import Form from './components/Form'
import './CSS/styles.css'

const App = (props) => {
    return (
        < main className='background' >
            <Form props={props} />
        </main >
    )
}

App.defaultProps = {
    form: ['nombre', 'apellido', 'correo'],
}

export default App