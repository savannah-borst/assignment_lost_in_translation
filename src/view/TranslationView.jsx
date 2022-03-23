import InputTranslate from '../components/Translation/InputTranslate';
import OutputTranslate from '../components/Translation/OutputTranslate';
import Header from '../components/Header/Header'

function TranslationView() {
    return(
        <main className="TranslationView">
            <Header/>
            <InputTranslate />
            <OutputTranslate />
        </main>
    )
}

export default TranslationView;