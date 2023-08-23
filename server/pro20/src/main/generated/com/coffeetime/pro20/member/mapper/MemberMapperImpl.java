package com.coffeetime.pro20.member.mapper;

import com.coffeetime.pro20.member.dto.MemberPatchDto;
import com.coffeetime.pro20.member.dto.MemberPostDto;
import com.coffeetime.pro20.member.dto.MemberResponseDto;
import com.coffeetime.pro20.member.entity.Member;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-08-21T10:42:13+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.19 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostDtoToMember(MemberPostDto memberPostDto) {
        if ( memberPostDto == null ) {
            return null;
        }

        Member.MemberBuilder member = Member.builder();

        member.email( memberPostDto.getEmail() );
        member.username( memberPostDto.getUsername() );
        member.password( memberPostDto.getPassword() );

        return member.build();
    }

    @Override
    public Member memberPatchDtoToMember(MemberPatchDto memberPatchDto) {
        if ( memberPatchDto == null ) {
            return null;
        }

        Member.MemberBuilder member = Member.builder();

        member.userId( memberPatchDto.getUserId() );
        member.username( memberPatchDto.getUsername() );
        member.password( memberPatchDto.getPassword() );
        member.memberStatus( memberPatchDto.getMemberStatus() );

        return member.build();
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
