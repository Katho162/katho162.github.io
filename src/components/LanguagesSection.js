import React, {Component} from 'react';
import './LanguagesSection.css';
import Language from './Language';
import brazilFlag from '../assets/flags/brazil.png';
import usaFlag from '../assets/flags/united-states.png';
import ukFlag from '../assets/flags/united-kingdom.png';
import norwayFlag from '../assets/flags/norway.png';
import germanyFlag from '../assets/flags/germany.png';
import franceFlag from '../assets/flags/france.png';
import israelFlag from '../assets/flags/israel.png';
import lithuaniaFlag from '../assets/flags/lithuania.png';
import chinaFlag from '../assets/flags/china.png';
import japanFlag from '../assets/flags/japan.png';
import finlandFlag from '../assets/flags/finland.png';
import italyFlag from '../assets/flags/italy.png';
import russiaFlag from '../assets/flags/russia.png';
import czechFlag from '../assets/flags/czech-republic.png';

class LanguagesSection extends Component {
    render() {
        return(
            <section className="languages__section">
                <h2>Languages</h2>
                <Language  languageImage={franceFlag} languageName="Français" languageText="Velit in aliquip esse Lorem. Exercitation nostrud eu incididunt eiusmod reprehenderit. Lorem consequat incididunt ad officia ex eiusmod et exercitation."/>
                <Language  languageImage={brazilFlag} languageName="Português" languageText="Sint tempor eiusmod irure non. Eiusmod irure nisi elit incididunt minim nisi. In officia nulla cupidatat commodo mollit minim aliqua qui. In eu est quis mollit nostrud nulla laborum id minim."/>
                <Language  languageImage={germanyFlag} languageName="Deutsch" languageText="Esse dolor eu dolore proident et exercitation non reprehenderit. Nisi qui nisi amet ex commodo laboris. Labore qui ex ex esse sunt. Eu non nisi voluptate deserunt consequat exercitation do ipsum reprehenderit nostrud. Ut duis consequat consequat enim non Lorem nisi exercitation reprehenderit."/>
                <Language  languageImage={russiaFlag} languageName="Русский" languageText="Consequat ut quis cillum aliquip laborum. Enim velit ex ex et nisi cillum officia consectetur proident labore commodo aliquip ipsum. Incididunt id voluptate excepteur nisi enim sunt aliquip minim eu ad."/>
                <Language  languageImage={ukFlag} languageName="English" languageText="Sunt aliquip cillum veniam mollit esse ad minim Lorem nisi et non. Commodo eu laboris in proident nostrud culpa ex elit ex et aute incididunt est commodo. Id proident est enim ea nostrud fugiat. Sit commodo enim exercitation consequat culpa culpa officia in. Non ut et pariatur commodo magna voluptate."/>
                <Language  languageImage={norwayFlag} languageName="Norsk Bokmål" languageText="Mollit minim consectetur sint dolore Lorem est incididunt magna adipisicing. Enim amet laborum ullamco in commodo qui aute laboris nostrud cillum sunt ea sunt. Enim commodo deserunt irure culpa amet nulla fugiat fugiat enim. In nisi ea sit minim aute. Fugiat pariatur adipisicing sint occaecat non esse minim nulla quis excepteur nostrud adipisicing voluptate excepteur. Aliqua amet esse tempor est irure."/>
                <Language  languageImage={japanFlag} languageName="日本人" languageText="Anim quis adipisicing cupidatat sit pariatur Lorem anim. Sit nisi excepteur ullamco deserunt eu veniam commodo quis elit incididunt consectetur. Eiusmod duis ex velit occaecat eiusmod reprehenderit cillum et esse et et eiusmod. Consequat sint aliqua anim commodo qui deserunt dolor ullamco velit veniam." disabled/>
                <Language  languageImage={chinaFlag} languageName="普通话" languageText="Dolore aliquip in veniam sunt Lorem deserunt laborum et. Tempor fugiat dolor veniam Lorem nostrud amet sit sunt ut est. In laboris consectetur ad proident nulla ipsum. Laborum labore aliquip ad proident eu culpa. Sint consectetur in cupidatat sunt velit adipisicing magna laboris. Occaecat proident veniam id quis irure ut reprehenderit. Qui deserunt officia quis amet exercitation excepteur culpa."disabled/>
                <Language  languageImage={italyFlag} languageName="Italiano" languageText="Officia esse quis aute voluptate commodo voluptate qui ipsum. Eu exercitation pariatur irure ipsum voluptate. Excepteur Lorem ullamco commodo commodo deserunt non mollit anim irure duis et labore mollit exercitation. Cupidatat ea anim proident qui esse anim culpa irure veniam qui dolore aliquip. Reprehenderit ex laborum eiusmod dolore ad aute deserunt velit nisi mollit enim fugiat consequat. Nisi aliquip elit et consequat est tempor nostrud amet irure veniam deserunt laboris. Laborum sunt id ipsum veniam consequat voluptate aliqua fugiat mollit aliquip nulla officia." disabled/>
                <Language  languageImage={finlandFlag} languageName="Suomalainen" languageText="Sunt magna ex qui ea excepteur tempor excepteur veniam ea ipsum dolor. Et enim nisi proident fugiat aliquip laboris non nisi sint magna. Ea enim ipsum elit non ad." disabled/>
                <Language  languageImage={lithuaniaFlag} languageName="Lietuviškai" languageText="Dolore eu ex nisi consequat laboris sint voluptate anim ea aliquip ex. Deserunt consequat officia est consectetur velit enim. Qui id esse sunt esse occaecat nulla duis eiusmod occaecat est exercitation. Ex sunt ipsum occaecat in ea eu qui magna velit occaecat. Excepteur qui aliqua mollit est esse irure ea excepteur labore ad cupidatat ullamco ad. Nostrud ex ipsum velit eu aliqua sunt excepteur ullamco aliquip." disabled/>
                <Language  languageImage={israelFlag} languageName="עברית" languageText="Et mollit culpa ex laboris consequat sint reprehenderit. Nostrud aliquip irure sit velit ex consequat qui proident sit quis. Mollit dolor aliqua velit cillum quis voluptate id cupidatat. Ad consequat adipisicing minim amet. Fugiat voluptate reprehenderit irure qui cupidatat sit nisi eiusmod do sit consectetur minim." disabled/>
                <Language  languageImage={czechFlag} languageName="Česky" languageText="Et mollit culpa ex laboris consequat sint reprehenderit. Nostrud aliquip irure sit velit ex consequat qui proident sit quis. Mollit dolor aliqua velit cillum quis voluptate id cupidatat. Ad consequat adipisicing minim amet. Fugiat voluptate reprehenderit irure qui cupidatat sit nisi eiusmod do sit consectetur minim." disabled/>
            </section>
        );
    }
}

export default LanguagesSection;