package com.coffeetime.pro20.answer.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostAnswerDto {
    private long postId; // 질문
    private String answerContents;
    private long userId; // 작성자

}
