"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let PostsController = class PostsController {
    index() {
        return [
            { id: 1, title: '帖子1' },
            { id: 1, title: '帖子1' },
            { id: 1, title: '帖子1' },
            { id: 1, title: '帖子1' },
        ];
    }
    create(body, query, params) {
        return {
            body,
            query,
            params,
            success: true
        };
    }
    detail() {
        return {
            id: 1,
            title: 'pdeng'
        };
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ title: '显示帖子列表' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "index", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ title: '创建帖子' }),
    __param(0, common_1.Body()), __param(1, common_1.Query()), __param(2, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "create", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOperation({ title: '通过 id 查找帖子详情' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "detail", null);
PostsController = __decorate([
    common_1.Controller('posts'),
    swagger_1.ApiUseTags('帖子')
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map