import { IAllSources } from '../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    data: IAllSources | null;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
        this.data = null;
    }

    start() {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) => {
            this.controller.getNews(e, (data) => this.view.drawNews(data));
            const newsDiv = document.querySelector('.news');
            const sourcesDiv = document.querySelector('.sources');
            newsDiv?.classList.add('active');
            sourcesDiv?.classList.add('inactive');
        });
        (document.querySelector('.submit') as HTMLElement).addEventListener('click', () => {
            const input = document.querySelector('.search') as HTMLInputElement;
            if (this.data) {
                this.view.clearSources();
                this.view.drawSources({
                    status: this.data.status,
                    sources: this.data.sources.filter((el) => {
                        return el.name.toLowerCase().includes(input.value);
                    }),
                });
            }
        });

        (document.querySelector('.submitChange') as HTMLElement).addEventListener('click', () => {
            const news = document.querySelector('.news');
            const source = document.querySelector('.sources');
            if (news && source) {
                if (news.classList.contains('active')) {
                    news.classList.remove('active');
                    news.classList.add('inactive');
                    source.classList.remove('inactive');
                    source.classList.add('active');
                } else {
                    source.classList.remove('active');
                    source.classList.add('inactive');
                    news.classList.add('active');
                    news.classList.remove('inactive');
                }
            }
        });

        this.controller.getSources((data) => {
            this.data = data;
            this.view.drawSources(data);
        });
    }
}

export default App;
