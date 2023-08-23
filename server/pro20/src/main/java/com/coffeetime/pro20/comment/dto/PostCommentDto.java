package com.coffeetime.pro20.comment.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostCommentDto {
    private long answerId;
    private long userId;
    private String commentContents;
}
