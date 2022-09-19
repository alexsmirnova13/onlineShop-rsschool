import News from './news/news';
import Sources from './sources/sources';
import { IArticleResponse, IAllSources } from '../../types/index';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IArticleResponse) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IAllSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }

    clearSources() {
        this.sources.clear();
    }
}

export default AppView;
