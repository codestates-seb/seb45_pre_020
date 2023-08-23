package com.coffeetime.pro20.answer.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostAnswerDto {
    private long postId;
    private AnswerInfo answerInfo;
    private String answerContents;
    private String type = "answer";

    @Getter
    @Setter
    public static class AnswerInfo {
        private long userId;
        private String createdAt;
        private boolean postStatus = true;
        private boolean adopted;
    }
}
