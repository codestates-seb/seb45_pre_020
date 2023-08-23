package com.coffeetime.pro20.post.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PatchPostDto {
    private long postId;
    private String postTitle;
    private String postContents;
}
