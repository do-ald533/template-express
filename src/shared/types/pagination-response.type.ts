export type PaginationResponse<T> = {
    page: number;
    limit: number;
    total: number;
    results: Array<T>
}