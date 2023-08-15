package com.coffeetime.pro20.domain.member;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@NoArgsConstructor
public class MemberDto {

    @Getter
    public static class Post {
        @NotBlank
        @Email
        private String email;

        @NotBlank
        private String userName;

        private String password;
    }



}
