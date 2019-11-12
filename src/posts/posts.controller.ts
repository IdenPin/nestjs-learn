import { Controller, Get, Post, Body, Query, Param, Put, Delete, Inject } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { InjectModel } from 'nestjs-typegoose';
import { Post as PostSchema } from './post.model'
import { ModelType } from '@typegoose/typegoose/lib/types';
// Dto: data transfer object 
class PostDto {
  @ApiModelProperty({ description: '帖子标题', example: '帖子标题1' })
  @IsNotEmpty({ message: '请填写标题' })
  title: string
  @ApiModelProperty({ description: '帖子内容', example: '内容1' })
  content: string
}

@Controller('posts')
@ApiUseTags('帖子')
export class PostsController {
  constructor(
    @InjectModel(PostSchema) private readonly postModel: ModelType<PostSchema>
  ) { }

  @Get()
  @ApiOperation({ title: '显示帖子列表' })
  async index() {
    return await this.postModel.find()
  }

  @Post()
  @ApiOperation({ title: '创建帖子' })
  // 参数装饰器 @Body() body, @Query() query, @Param() params
  async create(@Body() createPostDto: PostDto, ) {
    await this.postModel.create(createPostDto)
    return {
      success: true
    }
  }

  @Get(':id')
  @ApiOperation({ title: '通过 id 查找帖子详情' })
  async detail(@Param('id') id: string) {
    return await this.postModel.findById(id)
  }

  @Put(':id')
  @ApiOperation({ title: '修改帖子' })
  async update(@Param('id') id: string, @Body() updatePostDto: PostDto) {
    await this.postModel.findByIdAndUpdate(id, updatePostDto)
    return {
      success: true
    }
  }

  @Delete(':id')
  @ApiOperation({ title: '删除帖子' })
  async remove(@Param('id') id: string) {
    await this.postModel.findByIdAndRemove(id)
    return {
      success: true
    }
  }

}
