package com.coffeetime.pro20.answer;

import com.coffeetime.pro20.answer.dto.AnswerResponseDto;
import com.coffeetime.pro20.answer.dto.PatchAnswerDto;
import com.coffeetime.pro20.answer.dto.PostAnswerDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    @Mappings({
            @Mapping(target = "answerContents", source = "answerContents"),
            @Mapping(target = "postStatus", source = "answerInfo.postStatus"),
            @Mapping(target = "adopted", source = "answerInfo.adopted")
    })
    Answer postAnswerDtoToAnswer(PostAnswerDto postAnswerDto);

    Answer patchAnswerDtoToAnswer(PatchAnswerDto patchAnswerDto);

    @Mappings({
            @Mapping(target = "answerResponseInfo.userId", source = "member.userId"),
            @Mapping(target = "answerResponseInfo.createdAt", source = "createdAt"),
            @Mapping(target = "answerResponseInfo.modifiedAt", source = "modifiedAt"),
            @Mapping(target = "answerResponseInfo.postStatus", source = "postStatus"),
            @Mapping(target = "answerResponseInfo.adopted", source = "adopted")
    })
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
}
