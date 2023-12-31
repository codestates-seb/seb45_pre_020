package com.coffeetime.pro20.answer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnswerSaveRequestDto {
    private long userId;
    private long postId;
    private String answerContents;
}
