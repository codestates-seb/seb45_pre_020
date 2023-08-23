package com.coffeetime.pro20.comment;

import com.coffeetime.pro20.comment.dto.CommentResponseDto;
import com.coffeetime.pro20.comment.dto.PatchCommentDto;
import com.coffeetime.pro20.comment.dto.PostCommentDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface CommentMapper {

    @Mappings({
            @Mapping(target = "commentContents", source = "commentContents")
    })
    Comment postCommentDtoToComment(PostCommentDto postCommentDto);

    Comment patchCommentDtoToComment(PatchCommentDto patchCommentDto);

    @Mappings({
            @Mapping(target = "commentResponseInfo.userId", source = "member.userId"),
            @Mapping(target = "commentResponseInfo.createdAt", source = "createdAt")
    })
    CommentResponseDto commentToCommentResponseDto(Comment comment);
}
