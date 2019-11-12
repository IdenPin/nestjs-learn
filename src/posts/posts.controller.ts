import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiModelProperty } from '@nestjs/swagger';

// Dto: data transfer object 
class PostDto {
  @ApiModelProperty({ description: '帖子标题' })
  title: string
  @ApiModelProperty({ description: '帖子内容' })
  content: string
}

@Controller('posts')
@ApiUseTags('帖子')
export class PostsController {
  @Get()
  @ApiOperation({ title: '显示帖子列表' })
  index() {
    return [
      { id: 1, title: '帖子1' },
      { id: 1, title: '帖子1' },
      { id: 1, title: '帖子1' },
      { id: 1, title: '帖子1' },
    ];
  }

  @Post()
  @ApiOperation({ title: '创建帖子' })
  // 参数装饰器 @Body() body, @Query() query, @Param() params
  create(@Body() body: PostDto, ) {
    return {
      success: true
    }
  }

  @Get(':id')
  @ApiOperation({ title: '通过 id 查找帖子详情' })
  detail(@Param('id') id: string) {
    return {
      id,
      title: 'pdeng'
    }
  }

  @Put(':id')
  @ApiOperation({ title: '修改帖子' })
  update(@Param('id') id: string, @Body() body: PostDto) {
    return {
      success: true
    }
  }

  @Delete(':id')
  @ApiOperation({ title: '删除帖子' })
  remove(@Param('id') id: string) {
    return {
      success: true
    }
  }

}
