package com.coffeetime.pro20.post.dto;

import com.coffeetime.pro20.answer.dto.AnswerResponseDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostAnswerResponseDto {
    private PostResponseDto postResponseDto;
    private AnswerResponseDto answerResponseDto;
}
