package com.coffeetime.pro20.post.dto;

import com.coffeetime.pro20.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class PostPostDto {
    private PostInfo postInfo;
    private String postContents;
    private String type = "question";

    @Getter
    @Setter
    public static class PostInfo {
        private String postTitle;
        private long userId;
        private String createdAt;
        private boolean postStatus = true;
        private boolean adopted;
    }
}
