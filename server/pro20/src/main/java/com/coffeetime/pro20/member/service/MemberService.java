package com.coffeetime.pro20.member.service;

import com.coffeetime.pro20.auth.utils.CustomAuthorityUtils;
import com.coffeetime.pro20.exception.BusinessLogicException;
import com.coffeetime.pro20.exception.ExceptionCode;
import com.coffeetime.pro20.member.entity.Member;
import com.coffeetime.pro20.member.repository.MemberRepository;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MemberService {
    private final MemberRepository memberRepository;
    private final ApplicationEventPublisher publisher;

    // (1) 추가
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    // (2) 생성자 DI용 파라미터 추가
    public MemberService(MemberRepository memberRepository,
                         ApplicationEventPublisher publisher,
                         PasswordEncoder passwordEncoder,
                         CustomAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.publisher = publisher;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail());

        // 추가: Password 암호화
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        // 추가: DB에 User Role 저장
        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        return memberRepository.save(member);
    }

    @Transactional(propagation = Propagation.REQUIRED)
    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getUserId());

        Optional.ofNullable(member.getUsername())
                .ifPresent(findMember::setUsername);
        Optional.ofNullable(member.getPassword())
                .ifPresent(findMember::setPassword);
        // (1) 추가된 부분
        Optional.ofNullable(member.getMemberStatus())
                .ifPresent(findMember::setMemberStatus);

        // (2) 추가된 부분
        findMember.setModifiedAt(LocalDateTime.now());

        return memberRepository.save(findMember);
    }

    @Transactional(readOnly = true)
    public Member findMember(long userId) {
        return findVerifiedMember(userId);
    }

    public Page<Member> findMembers(int page, int size) {
        return memberRepository.findAll(PageRequest.of(page, size,
                Sort.by("userId").descending()));
    }

    public void deleteMember(long userId) {
        Member findMember = findVerifiedMember(userId);

        memberRepository.delete(findMember);
    }

    public Member findVerifiedMember(long userId) {
        Optional<Member> optionalMember =
                memberRepository.findById(userId);
        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
}
