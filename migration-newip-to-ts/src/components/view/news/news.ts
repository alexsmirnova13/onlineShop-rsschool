import './news.css';
import { IArticle } from '../../../types/index';
import placeholder from '../../../assets/img/newsNotFound.png';

class News {
    private readonly itemsPerPage = 10;
    draw(data: IArticle[]) {
        const news = data.length >= this.itemsPerPage ? data.filter((_item, idx) => idx < this.itemsPerPage) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;
            if (newsClone && idx % 2) {
                const ourElement = newsClone.querySelector('.news_item');
                if (ourElement) {
                    ourElement.classList.add('alt');
                }
            }

            if (newsClone) {
                const ourElement = newsClone.querySelector('.news__meta-photo') as HTMLElement;
                if (ourElement) {
                    ourElement.style.backgroundImage = `url(${item.urlToImage || placeholder})`;
                }
            }

            if (newsClone) {
                const ourElement = newsClone.querySelector('.news__meta-author') as HTMLElement;
                if (ourElement) {
                    ourElement.textContent = item.author || item.source.name;
                }
            }
            if (newsClone) {
                const ourElement = newsClone.querySelector('.news__meta-date') as HTMLElement;
                if (ourElement) {
                    ourElement.textContent = item.publishedAt
                        .slice(0, this.itemsPerPage)
                        .split('-')
                        .reverse()
                        .join('-');
                }
            }
            if (newsClone) {
                const ourElement = newsClone.querySelector('.news__description-title') as HTMLElement;
                if (ourElement) {
                    ourElement.textContent = item.title;
                }
            }
            if (newsClone) {
                const ourElement = newsClone.querySelector('.news__description-source') as HTMLElement;
                if (ourElement) {
                    ourElement.textContent = item.source.name;
                }
            }
            if (newsClone) {
                const ourElement = newsClone.querySelector('.news__description-content') as HTMLElement;
                if (ourElement) {
                    ourElement.textContent = item.description;
                }
            }
            if (newsClone) {
                const ourElement = newsClone.querySelector('.news__read-more a') as HTMLElement;
                if (ourElement) {
                    ourElement.setAttribute('href', item.url);
                }
            }

            fragment.append(newsClone);
        });

        const docEl = document.querySelector('.news') as HTMLElement;
        if (docEl) {
            docEl.innerHTML = '';
            docEl.appendChild(fragment);
        }
    }
}

export default News;
