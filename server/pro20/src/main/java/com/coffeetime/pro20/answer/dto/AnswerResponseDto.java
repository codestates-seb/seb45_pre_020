package com.coffeetime.pro20.answer.dto;

import com.coffeetime.pro20.answer.Answer;
import com.coffeetime.pro20.answer.AnswerService;
import com.coffeetime.pro20.comment.dto.CommentResponseDto;
import com.coffeetime.pro20.member.entity.Member;
import com.coffeetime.pro20.member.service.MemberService;
import com.coffeetime.pro20.post.Post;
import com.coffeetime.pro20.post.PostService;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class AnswerResponseDto {
    private AnswerResponseInfo answerResponseInfo;
    private String answerContents;
    private String type = "answer";
    private List<CommentResponseDto> commentResponseDto;

    @Getter
    @Setter
    public static class AnswerResponseInfo {
        private long userId;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private boolean postStatus = true;
        private boolean adopted;
    }
}
