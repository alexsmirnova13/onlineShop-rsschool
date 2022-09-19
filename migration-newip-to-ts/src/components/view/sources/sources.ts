import './sources.css';
import { ISourсe } from '../../../types/index';

class Sources {
    draw(data: ISourсe[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            if (sourceClone) {
                const sourceItemName = sourceClone.querySelector('.source__item-name');
                const sourceItem = sourceClone.querySelector('.source__item');
                if (sourceItemName) {
                    sourceItemName.textContent = item.name;
                }
                if (sourceItem && item.id) {
                    sourceItem.setAttribute('data-source-id', item.id);
                }
            }

            fragment.append(sourceClone);
        });

        const sources = document.querySelector('.sources');
        if (sources) {
            sources.append(fragment);
        }
    }

    clear() {
        const sourceItems = document.querySelector('.sources') as HTMLElement;
        sourceItems.innerHTML = '';
    }
}

export default Sources;
