package com.coffeetime.pro20.domain.member;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Member findAllByEmail(String email);  //email로 member 조회

    List<Member> findAll();  //전체조회
}
