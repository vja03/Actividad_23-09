
export interface TodosFeriados{
    status: string;
    totalResults: number;
    data:Data[];
}

export interface Data{
    date:boolean;
    title:string;
    type:string;
    inalienable:string;
    extra:string;

}

