package com.coffeetime.pro20.post;

import com.coffeetime.pro20.answer.Answer;
import com.coffeetime.pro20.answer.dto.AnswerResponseDto;
import com.coffeetime.pro20.post.dto.PatchPostDto;
import com.coffeetime.pro20.post.dto.PostPostDto;
import com.coffeetime.pro20.post.dto.PostResponseDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PostMapper {

    @Mappings({
            @Mapping(target = "postTitle", source = "postInfo.postTitle"),
            @Mapping(target = "postContents", source = "postContents"),
            @Mapping(target = "postStatus", source = "postInfo.postStatus"),
            @Mapping(target = "adopted", source = "postInfo.adopted")
    })
    Post postPostDtoToPost(PostPostDto postPostDto);

    Post patchPostDtoToPost(PatchPostDto patchPostDto);

    @Mappings({
            @Mapping(target = "postResponseInfo.userId", source = "member.userId"),
            @Mapping(target = "postResponseInfo.postTitle", source = "postTitle"),
            @Mapping(target = "postResponseInfo.postId", source = "postId"),
            @Mapping(target = "postResponseInfo.createdAt", source = "createdAt"),
            @Mapping(target = "postResponseInfo.postStatus", source = "postStatus"),
            @Mapping(target = "postResponseInfo.adopted", source = "adopted"),
            @Mapping(target = "postResponseInfo.answerList", source = "answers")
    })
    PostResponseDto postToPostResponseDto(Post post);
}
