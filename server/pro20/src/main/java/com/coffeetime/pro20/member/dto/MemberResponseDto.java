package com.coffeetime.pro20.member.dto;

import com.coffeetime.pro20.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MemberResponseDto {
    private long userId;
    private String email;
    private String username;
    private String password;
    private Member.MemberStatus memberStatus;

    public String getMemberStatus() {
        return memberStatus.getStatus();
    }
}
