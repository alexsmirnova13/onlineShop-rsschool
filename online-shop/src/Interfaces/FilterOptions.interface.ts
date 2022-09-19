
export interface ICostRange {
    min: number;
    max: number;
    selection: [min:number, max:number]
}

interface IFilterOptions {
    costRange?: ICostRange
}

export default IFilterOptions;