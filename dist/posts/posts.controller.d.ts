declare class PostDto {
    title: string;
    content: string;
}
export declare class PostsController {
    index(): {
        id: number;
        title: string;
    }[];
    create(body: PostDto): {
        success: boolean;
    };
    detail(id: string): {
        id: string;
        title: string;
    };
    update(id: string, body: PostDto): {
        success: boolean;
    };
    remove(id: string): {
        success: boolean;
    };
}
export {};
