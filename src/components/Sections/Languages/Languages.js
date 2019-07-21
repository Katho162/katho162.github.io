import React, {Component} from 'react';
import './Languages.css';
import Language from './Language';
import brazilFlag from '../../../assets/flags/brazil.png';
import ukFlag from '../../../assets/flags/united-kingdom.png';
import norwayFlag from '../../../assets/flags/norway.png';
import germanyFlag from '../../../assets/flags/germany.png';
import franceFlag from '../../../assets/flags/france.png';
import israelFlag from '../../../assets/flags/israel.png';
import chinaFlag from '../../../assets/flags/china.png';
import japanFlag from '../../../assets/flags/japan.png';
import italyFlag from '../../../assets/flags/italy.png';
import russiaFlag from '../../../assets/flags/russia.png';
import czechFlag from '../../../assets/flags/czech-republic.png';
import polandFlag from '../../../assets/flags/poland.png';

class LanguagesSection extends Component {
    render() {
        return(
            <section className="languages__section">
                <h2>Languages</h2>
                <h3>Over the years i discovered that learn new languages is a fun and great thing to do in life and since then learn new langauges is one of the greatest passions in my life.</h3>
                <Language languageImage={franceFlag} languageName="Français" languageText="J’ai appris le français car je compte faire ma vie à Paris. De plus, je trouve que c’est une très belle langue et surtout d’une élégance inégalable ! Après tout, nous ne l’appelons pas la « langue de l’amour » pour rien."/>
                <Language languageImage={brazilFlag} languageName="Português" languageText="Nasci e vivo no Brasil, pois então assim português é meu idioma nativo!"/>
                <Language languageImage={germanyFlag} languageName="Deutsch" languageText="Ich glaube, das die Deutsche Sprache mein lieblings Sprache ist. aber, ich hab' kein viele Zeug über Deutsch sprechen, weil es ist ein fantatische Sprache das jeder über weißen, und Deutschland ist ein Land, das kann von selbst sprechen"/>
                <Language languageImage={russiaFlag} languageName="Русский" languageText="Я учу русский прямо сейчас, потому чё я думал, чё это отличный язык для изучения. Россия очень интересная и большая страна с многа вещы, и я был бы очень рад узнать о ней больше и важнее всего, другой вещи обо мне и русский у меня есть русская/французская жена"/>
                <Language languageImage={ukFlag} languageName="English" languageText="English is the language in which I excel the most, its importance in our current society is obvious. It is particularly important for communicating with people from all over the world."/>
                <Language languageImage={norwayFlag} languageName="Norsk" languageText="Jeg har ikke så mye å snakke som norsk, men jeg trør at det norsk og Norge er så kult, til og med min norsk er ikke god vil jeg forbrede det en dag. Og kan være det skal jeg går til Norge en dag."/>
            </section>
        );
    }
}

export default LanguagesSection;