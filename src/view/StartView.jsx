import InputUsername from '../components/Start/InputUsername'
import Header from '../components/Header/Header'
import Intro from '../components/Start/Intro'

function StartView() {
    return(
        <main className="StartView">
            <Header/>
            <Intro/>
            <InputUsername />
        </main>
    )
}

export default StartView;