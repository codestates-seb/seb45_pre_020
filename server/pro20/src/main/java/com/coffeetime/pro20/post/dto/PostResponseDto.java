package com.coffeetime.pro20.post.dto;

import com.coffeetime.pro20.answer.dto.AnswerResponseDto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class PostResponseDto {
    private PostResponseInfo postResponseInfo;
    private String postContents;

    @Getter
    @Setter
    public static class PostResponseInfo {
        private long userId;
        private String postTitle;
        private long postId;
        private LocalDateTime createdAt;
        private boolean postStatus = true;
        private boolean adopted;
        private List<AnswerResponseDto> answerResponseDto;
    }
}
