type method = "all" | "create" | "update" | "delete" | "getAll" | "getById"

export class ModelApi {
    constructor(
        public path: string,
        public methods: "all" | method[] = "all"
    ) {
        if (methods === "all") {
            this.methods = ["create", "update", "getById", "getAll", "delete"]
        }
    }
}
