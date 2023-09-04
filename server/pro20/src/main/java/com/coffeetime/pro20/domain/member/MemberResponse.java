package com.coffeetime.pro20.domain.member;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class MemberResponse {

    private Long id;
    private String password;
    private String userName;
    private String email;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;

    public void ClearPassword() {
        this.password = "";
    }
}
