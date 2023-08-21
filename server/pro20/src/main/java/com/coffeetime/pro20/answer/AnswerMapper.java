package com.coffeetime.pro20.answer;

import com.coffeetime.pro20.answer.dto.AnswerResponseDto;
import com.coffeetime.pro20.answer.dto.PatchAnswerDto;
import com.coffeetime.pro20.answer.dto.PostAnswerDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer postAnswerDtoToAnswer(PostAnswerDto postAnswerDto);
    Answer patchAnswerDtoToAnswer(PatchAnswerDto patchAnswerDto);
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
}
