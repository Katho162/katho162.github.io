import React, {Component} from 'react';
import './Languages.css';
import Language from './Language';
import brazilFlag from '../../../assets/flags/brazil.png';
import usaFlag from '../../../assets/flags/united-states.png';
import ukFlag from '../../../assets/flags/united-kingdom.png';
import norwayFlag from '../../../assets/flags/norway.png';
import germanyFlag from '../../../assets/flags/germany.png';
import franceFlag from '../../../assets/flags/france.png';
import israelFlag from '../../../assets/flags/israel.png';
import lithuaniaFlag from '../../../assets/flags/lithuania.png';
import chinaFlag from '../../../assets/flags/china.png';
import japanFlag from '../../../assets/flags/japan.png';
import finlandFlag from '../../../assets/flags/finland.png';
import italyFlag from '../../../assets/flags/italy.png';
import russiaFlag from '../../../assets/flags/russia.png';
import czechFlag from '../../../assets/flags/czech-republic.png';

class LanguagesSection extends Component {
    render() {
        return(
            <section className="languages__section">
                <h2>Languages</h2>
                <Language  languageImage={franceFlag} languageName="Français" languageText="J’ai appris le français car je compte faire ma vie à Paris. De plus, je trouve que c’est une très belle langue et surtout d’une élégance inégalable ! Après tout, nous ne l’appelons pas la « langue de l’amour » pour rien."/>
                <Language  languageImage={brazilFlag} languageName="Português" languageText="Nasci e vivo no Brasil, pois então assim português é meu idioma nativo!"/>
                <Language  languageImage={germanyFlag} languageName="Deutsch" languageText="Ich glaube, das die Deutsche Sprache mein lieblings Sprache ist. und eines Tages, ich im Deutschland leben möchten"/>
                <Language  languageImage={russiaFlag} languageName="Русский" languageText="Я учу русский язык в настоящее время, потому что Россия кажется самым крутым местом в мире! (это сообщение было сгенерировано автоматическим переводчиком)"/>
                <Language  languageImage={ukFlag} languageName="English" languageText="English is the language in which I excel the most, its importance in our current society is obvious. It is particularly important for communicating with people from all over the world."/>
                <Language  languageImage={norwayFlag} languageName="Norsk Bokmål" languageText="Norsk er så god og jeg trør det Norge er så kult, men min Norsk er ikke god derimot er vil forbrede det en dag. Og kan være det jeg skal går å Norge en dag."/>
                <Language  languageImage={japanFlag} languageName="日本人" languageText="私は日本語の学習プロセスをまだ始めていませんが、それはリストの次のものの1つです。 （このメッセージは自動翻訳者が生成したものです）" disabled/>
                <Language  languageImage={chinaFlag} languageName="普通话" languageText="我只懂中文的基礎知識，但肯定會是我的下一個語言！ （此消息由自動翻譯生成）"disabled/>
                <Language  languageImage={italyFlag} languageName="Italiano" languageText="Non ho ancora iniziato a imparare l'italiano, ma un giorno mi interesserò alla fonetica della lingua italiana e della cultura italiana in generale (questo messaggio è stato generato da un traduttore automatico)" disabled/>
                <Language  languageImage={lithuaniaFlag} languageName="Lietuviškai" languageText="Lietuviškai skamba tikrai įdomi kalba, nes pradžioje galvojau apie kai kurias Baltijos šalių kalbas ir dabar nusprendžiau išmokti lietuvių kalbą (šį pranešimą sukūrė automatinis vertėjas)" disabled/>
                <Language  languageImage={israelFlag} languageName="עברית" languageText="עברית היא אחת השפה המעניינת והמסתורית ביותר עבורי ויום אחד אני אלמד אותה בוודאות (הודעה זו נוצרה על ידי מתרגם אוטומטי)" disabled/>
                <Language  languageImage={czechFlag} languageName="Česko" languageText="Chci se naučit česky, protože je to pro mě nejpříjemnější jazyk slovanské značky po ruštině. a já opravdu chci jednou navštívit Prahu. (tento text byl vytvořen pro automatického překladatele)" disabled/>
            </section>
        );
    }
}

export default LanguagesSection;