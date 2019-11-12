/// <reference types="mongoose" />
import { Post as PostSchema } from './post.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
declare class PostDto {
    title: string;
    content: string;
}
export declare class PostsController {
    private readonly postModel;
    constructor(postModel: ModelType<PostSchema>);
    index(): Promise<(import("mongoose").Document & PostSchema)[]>;
    create(createPostDto: PostDto): Promise<{
        success: boolean;
    }>;
    detail(id: string): Promise<import("mongoose").Document & PostSchema>;
    update(id: string, updatePostDto: PostDto): Promise<{
        success: boolean;
    }>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
export {};
