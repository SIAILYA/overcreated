export class GetAllParamsDto {
    limit?: number;
    offset?: number;
    order?: { [key: string]: "ASC" | "DESC" };
    search?: string;
}

export class GetAllParamsOrderable extends GetAllParamsDto {
    order?: { [key: string]: "ASC" | "DESC" } = {order: "ASC"};

    constructor() {
        super();
        this.order = {order: "ASC"};
    }
}
