package com.coffeetime.pro20.post.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class PostResponseDto {
    private long postId;
    private String postTitle;
    private String postContents;
    private long userId;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
