import { Injectable } from '@nestjs/common';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Post } from './entities/post.entity';
import { User } from './entities/user.entity';
import { PostsService } from './posts.service';

@Injectable()
@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly postService: PostsService) {}
  @ResolveField(() => [Post])
  posts(@Parent() user: User): Post[] {
    return this.postService.forAuthor(user.id);
  }
}
