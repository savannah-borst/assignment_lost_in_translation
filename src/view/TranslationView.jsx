import Translate from '../components/Translation/Translate';
import Header from '../components/Header/Header'

function TranslationView() {
    return(
        <main className="TranslationView">
            <Header/>
            <Translate />
        </main>
    )
}

export default TranslationView;