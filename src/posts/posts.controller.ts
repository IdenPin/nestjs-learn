import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';

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
  // 参数装饰器
  create(@Body() body, @Query() query, @Param() params) {
    return {
      body,
      query,
      params,
      success: true
    }
  }

  @Get(':id')
  @ApiOperation({ title: '通过 id 查找帖子详情' })
  detail() {
    return {
      id: 1,
      title: 'pdeng'
    }
  }
}
