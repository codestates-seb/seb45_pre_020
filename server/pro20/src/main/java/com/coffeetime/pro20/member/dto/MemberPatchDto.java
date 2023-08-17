package com.coffeetime.pro20.member.dto;

import com.coffeetime.pro20.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberPatchDto {
    private long userId;
    private String username;
    private String password;
    private Member.MemberStatus memberStatus;

    public void setMemberId(long userId) {
        this.userId = userId;
    }
}
