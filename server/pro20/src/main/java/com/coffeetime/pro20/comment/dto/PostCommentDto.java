package com.coffeetime.pro20.comment.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostCommentDto {
    private long answerId;
    private CommentInfo commentInfo;
    private String commentContents;
    private String type = "comment";

    @Getter
    @Setter
    public static class CommentInfo {
        private long userId;
        private String createdAt;
    }
}
