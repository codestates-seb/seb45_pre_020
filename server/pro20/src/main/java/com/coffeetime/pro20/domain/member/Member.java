package com.coffeetime.pro20.domain.member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
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

    @Column(length = 20, nullable = false)
    private String name;

    @Column(length = 16, nullable = false)
    private String password;
}
