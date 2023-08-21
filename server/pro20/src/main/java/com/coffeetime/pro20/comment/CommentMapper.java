package com.coffeetime.pro20.comment;

import com.coffeetime.pro20.comment.dto.CommentResponseDto;
import com.coffeetime.pro20.comment.dto.PatchCommentDto;
import com.coffeetime.pro20.comment.dto.PostCommentDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment postCommentDtoToComment(PostCommentDto postCommentDto);
    Comment patchCommentDtoToComment(PatchCommentDto patchCommentDto);
    CommentResponseDto commentToCommentResponseDto(Comment comment);
}
