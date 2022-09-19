import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'a66703b5e095420cbfabd42164b3f475', // получите свой ключ https://newsapi.org/
            // apiKey: ''
        });
    }
}

export default AppLoader;
