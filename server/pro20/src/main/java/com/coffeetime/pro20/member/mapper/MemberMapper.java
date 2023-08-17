package com.coffeetime.pro20.member.mapper;

import com.coffeetime.pro20.member.dto.MemberPatchDto;
import com.coffeetime.pro20.member.dto.MemberPostDto;
import com.coffeetime.pro20.member.dto.MemberResponseDto;
import com.coffeetime.pro20.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto memberPostDto);
    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);
    MemberResponseDto memberToMemberResponseDto(Member member);
}
