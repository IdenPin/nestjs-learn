export declare class PostsController {
    index(): {
        id: number;
        title: string;
    }[];
    create(body: any, query: any, params: any): {
        body: any;
        query: any;
        params: any;
        success: boolean;
    };
    detail(): {
        id: number;
        title: string;
    };
}
