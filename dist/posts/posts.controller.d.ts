declare class PostDto {
    title: string;
    content: string;
}
export declare class PostsController {
    index(): Promise<import("@hasezoey/typegoose").DocumentType<import("./post.model").Post>[]>;
    create(createPostDto: PostDto): Promise<{
        success: boolean;
    }>;
    detail(id: string): Promise<import("@hasezoey/typegoose").DocumentType<import("./post.model").Post>>;
    update(id: string, updatePostDto: PostDto): Promise<{
        success: boolean;
    }>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
export {};
