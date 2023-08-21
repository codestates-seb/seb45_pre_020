package com.coffeetime.pro20.post;

import com.coffeetime.pro20.post.dto.PatchPostDto;
import com.coffeetime.pro20.post.dto.PostPostDto;
import com.coffeetime.pro20.post.dto.PostResponseDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PostMapper {
    Post postPostDtoToPost(PostPostDto postPostDto);
    Post patchPostDtoToPost(PatchPostDto patchPostDto);
    PostResponseDto postToPostResponseDto(Post post);
}
