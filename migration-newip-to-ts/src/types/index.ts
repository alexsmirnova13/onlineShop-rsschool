export interface IArticle {
    source: Pick<ISourсe, 'id' | 'name'>;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface IArticleResponse {
    status: string;
    totalResults: number;
    articles: IArticle[];
}

export interface ISourсe {
    id: string | null;
    name: string;
    description: string;
    category: string;
    language: string;
    country: string;
}
export interface IAllSources {
    status: string;
    sources: ISourсe[];
}

export interface IOptions {
    apiKey: string;
}

export type Options = {
    sources: string;
};

export interface IGetNewsParam {
    endpoint: string;
    options?: Partial<Options>;
}

export const enum Statuses {
    OK = 200,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
}

export type cb<D> = (data: D) => void;

export const enum RequestMethod {
    GET = 'GET',
    POST = 'POST',
}
