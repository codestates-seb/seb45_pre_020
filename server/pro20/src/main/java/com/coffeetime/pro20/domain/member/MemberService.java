package com.coffeetime.pro20.domain.member;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {

    private final MemberRepository memberRepository;


    public Member joinUser(Member member) {
        member.setRole("USER");
        Member savedMember = memberRepository.save(member);

        return savedMember;
    }
}
