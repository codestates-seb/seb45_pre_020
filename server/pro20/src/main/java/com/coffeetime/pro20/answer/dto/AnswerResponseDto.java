package com.coffeetime.pro20.answer.dto;

import com.coffeetime.pro20.answer.Answer;
import com.coffeetime.pro20.answer.AnswerService;
import com.coffeetime.pro20.member.entity.Member;
import com.coffeetime.pro20.member.service.MemberService;
import com.coffeetime.pro20.post.Post;
import com.coffeetime.pro20.post.PostService;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDto {
    private long answerId;
    private String answerContents;
    private long userId;
    private long postId;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    public void setMember(Member member) {
        this.userId = member.getUserId();
    }

    public void setPost(Post post) {
        this.postId = post.getPostId();
    }
}
