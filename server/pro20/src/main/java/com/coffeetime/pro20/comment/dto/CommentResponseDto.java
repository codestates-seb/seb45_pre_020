package com.coffeetime.pro20.comment.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class CommentResponseDto {
    private long commentId;
    private long userId;
    private long answerId;
    private String commentContents;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
