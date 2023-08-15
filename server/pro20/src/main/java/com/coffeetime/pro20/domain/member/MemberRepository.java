package com.coffeetime.pro20.domain.member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

    Member findAllByEmail(String email);  //email로 member 조회
    List<Member> findAll();  //전체조회
}
