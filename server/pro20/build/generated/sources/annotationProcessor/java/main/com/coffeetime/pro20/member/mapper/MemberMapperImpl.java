package com.coffeetime.pro20.member.mapper;

import com.coffeetime.pro20.member.dto.MemberPatchDto;
import com.coffeetime.pro20.member.dto.MemberPostDto;
import com.coffeetime.pro20.member.dto.MemberResponseDto;
import com.coffeetime.pro20.member.entity.Member;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-08-17T10:09:00+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-8.2.1.jar, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostDtoToMember(MemberPostDto memberPostDto) {
        if ( memberPostDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setEmail( memberPostDto.getEmail() );
        member.setUsername( memberPostDto.getUsername() );
        member.setPassword( memberPostDto.getPassword() );

        return member;
    }

    @Override
    public Member memberPatchDtoToMember(MemberPatchDto memberPatchDto) {
        if ( memberPatchDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setUserId( memberPatchDto.getUserId() );
        member.setUsername( memberPatchDto.getUsername() );
        member.setPassword( memberPatchDto.getPassword() );
        member.setMemberStatus( memberPatchDto.getMemberStatus() );

        return member;
    }

    @Override
    public MemberResponseDto memberToMemberResponseDto(Member member) {
        if ( member == null ) {
            return null;
        }

        long userId = 0L;
        String email = null;
        String username = null;
        String password = null;
        Member.MemberStatus memberStatus = null;

        userId = member.getUserId();
        email = member.getEmail();
        username = member.getUsername();
        password = member.getPassword();
        memberStatus = member.getMemberStatus();

        MemberResponseDto memberResponseDto = new MemberResponseDto( userId, email, username, password, memberStatus );

        return memberResponseDto;
    }
}
