package com.coffeetime.pro20.domain.member;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "member")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

//    private String userId;

    @Column(length = 255, nullable = false, unique = true)  //unique : 중복방지 -> 휴대폰번호 추가되면 휴대폰번호를 유니크로 바꾸ㅜ기
    private String email;

//    @Column(length = 20, nullable = false)
//    private String userName;

    @NonNull
    @Column(length = 16, nullable = false)
    private String password;

    private String role;
}
