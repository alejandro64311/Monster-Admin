import { RequestPaginationApi } from "src/app/utils/models/api.model";


export class GetUsersByFilter extends RequestPaginationApi{
    constructor(page?: number, size?:number){
        super(page, size);
    }
}
