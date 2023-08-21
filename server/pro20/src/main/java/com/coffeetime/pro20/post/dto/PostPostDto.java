package com.coffeetime.pro20.post.dto;

import com.coffeetime.pro20.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostPostDto {
    private String postTitle;
    private String postContents;
    private long userId;
}
