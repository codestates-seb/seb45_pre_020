package com.coffeetime.pro20.comment.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class CommentResponseDto {
    private CommentResponseInfo commentResponseInfo;
    private String commentContents;
    private String type = "comment";

    @Getter
    @Setter
    public static class CommentResponseInfo {
        private long userId;
        private LocalDateTime createdAt;
    }
}
