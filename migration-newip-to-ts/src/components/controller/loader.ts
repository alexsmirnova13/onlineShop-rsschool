import { IOptions, IGetNewsParam, Statuses, cb, Options, RequestMethod } from '../../types/index';

class Loader {
    private baseLink: string;
    private options: IOptions;
    constructor(baseLink: string, options: IOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<D>(
        { endpoint, options = {} }: IGetNewsParam,
        callback: cb<D> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load<D>(RequestMethod.GET, endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === Statuses.UNAUTHORIZED || res.status === Statuses.NOT_FOUND)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Partial<Options>, endpoint: string): string {
        const urlOptions: { [index: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<D>(method: string, endpoint: string, callback: cb<D>, options: Partial<Options>): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data as D))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
