package com.coffeetime.pro20.member.controller;

import com.coffeetime.pro20.member.dto.MemberPatchDto;
import com.coffeetime.pro20.member.dto.MemberPostDto;
import com.coffeetime.pro20.member.dto.MemberResponseDto;
import com.coffeetime.pro20.member.entity.Member;
import com.coffeetime.pro20.member.mapper.MemberMapper;
import com.coffeetime.pro20.member.service.MemberService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/members")
@Validated
@CrossOrigin
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    // (1) MemberMapper DI
    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping("/join")
    @CrossOrigin
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberDto) {
        // (2) 매퍼를 이용해서 MemberPostDto를 Member로 변환
        Member member = mapper.memberPostDtoToMember(memberDto);

        Member response = memberService.createMember(member);

        // (3) 매퍼를 이용해서 Member를 MemberResponseDto로 변환
        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response),
                HttpStatus.CREATED);
    }

    @PatchMapping("/{user-id}")
    public ResponseEntity patchMember(
            @PathVariable("user-id") @Positive long userId,
            @Valid @RequestBody MemberPatchDto memberPatchDto) {
        memberPatchDto.setUserId(userId);

        // (4) 매퍼를 이용해서 MemberPatchDto를 Member로 변환
        Member response =
                memberService.updateMember(mapper.memberPatchDtoToMember(memberPatchDto));

        // (5) 매퍼를 이용해서 Member를 MemberResponseDto로 변환
        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response),
                HttpStatus.OK);
    }

    @GetMapping("/{user-id}")
    public ResponseEntity getMember(
            @PathVariable("user-id") @Positive long userId) {
        Member response = memberService.findMember(userId);

        // (6) 매퍼를 이용해서 Member를 MemberResponseDto로 변환
        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMembers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Member> pageMembers = memberService.findMembers(page - 1, size);
        List<Member> members = pageMembers.getContent();

        // (7) 매퍼를 이용해서 List<Member>를 MemberResponseDto로 변환
        List<MemberResponseDto> response =
                members.stream()
                        .map(mapper::memberToMemberResponseDto)
                        .collect(Collectors.toList());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{user-id}")
    public ResponseEntity deleteMember(
            @PathVariable("user-id") @Positive long userId) {
        System.out.println("# delete member");
        memberService.deleteMember(userId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
