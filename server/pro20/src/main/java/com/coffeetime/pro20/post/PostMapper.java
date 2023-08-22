package com.coffeetime.pro20.post;

import com.coffeetime.pro20.post.dto.PatchPostDto;
import com.coffeetime.pro20.post.dto.PostPostDto;
import com.coffeetime.pro20.post.dto.PostResponseDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface PostMapper {
    Post postPostDtoToPost(PostPostDto postPostDto);
    Post patchPostDtoToPost(PatchPostDto patchPostDto);

    @Mappings({
            @Mapping(target = "postResponseInfo.userId", source = "member.userId"),
            @Mapping(target = "postResponseInfo.postTitle", source = "postTitle"),
            @Mapping(target = "postResponseInfo.postId", source = "postId"),
            @Mapping(target = "postResponseInfo.createdAt", source = "createdAt"),
            @Mapping(target = "postResponseInfo.postStatus", source = "postStatus"),
            @Mapping(target = "postResponseInfo.adopted", source = "adopted"),
            @Mapping(target = "postResponseInfo.answerResponseDto", ignore = true) // Ignore answerResponseDto
    })
    PostResponseDto postToPostResponseDto(Post post);
}
