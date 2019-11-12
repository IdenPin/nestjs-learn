declare class PostDto {
    title: string;
    content: string;
}
export declare class PostsController {
    index(): Promise<import("@hasezoey/typegoose").DocumentType<import("./post.model").Post>[]>;
    create(body: PostDto): Promise<{
        success: boolean;
    }>;
    detail(id: string): Promise<import("@hasezoey/typegoose").DocumentType<import("./post.model").Post>>;
    update(id: string, body: PostDto): Promise<{
        success: boolean;
    }>;
    remove(id: string): {
        success: boolean;
    };
}
export {};
