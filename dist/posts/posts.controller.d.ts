declare class PostDto {
    title: string;
    content: string;
}
export declare class PostsController {
    index(): Promise<any>;
    create(createPostDto: PostDto): Promise<{
        success: boolean;
    }>;
    detail(id: string): Promise<any>;
    update(id: string, updatePostDto: PostDto): Promise<{
        success: boolean;
    }>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
export {};
