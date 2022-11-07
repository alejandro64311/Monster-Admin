export class ResponseApi<T> {
  transactionId: string;
  code: number;
  success: string;
  data: T;
}

export class ResponsePaginationApi<T> extends ResponseApi<PaginationWrapper<T>> {}

export class PaginationWrapper<T> {
  items: T[];
  currentPage: number;
  totalItems: number;
  totalPages: number;

  constructor() {}
}

export class RequestPaginationApi {
  page: number = 0;
  size: number = 10;

  /**
     * const parameters = {
      var1: 'value1',
      var2: 'value2'
    };
   */
  parameters: any;

  /**
   * Obtain Search Params
   * @returns UriSeachParams
   */
  getUri(): string {
    return (
      "page=" +
      this.page +
      "&size=" +
      this.size +
      (this.parameters
        ? "&" + new URLSearchParams(this.parameters).toString()
        : "")
    );
  }
}
