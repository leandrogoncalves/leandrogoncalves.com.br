import intl from 'react-intl-universal';
const search = window.location.search;
const params = new URLSearchParams(search);
const permitedLangs = ['pt-BR', 'en-US'];
const lang = params.get('lang');

const locales = {
	'pt-BR': require('../_i18n/pt-BR.json'),
	'en-US': require('../_i18n/en-US.json')
};

/**
 * REf https://evertonstrack.com.br/blog/internacionalizacao-com-create-react-app/
 */
class I18n {

    constructor(){
        const currentLocale = this.getLaguage();

        intl.init({
            currentLocale,
            locales
        });
    
        this.translater = intl;
    }

    getLaguage() {

        let langState = navigator.language;
    
        if (lang && permitedLangs.includes(lang)) {
          langState = lang;
        }
    
        return langState;

    }

    getTranslater(){
        return this.translater;
    }
}

export default new I18n();