package com.coffeetime.pro20.domain.member;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping(value = "/coffeeTime")
@Validated
@RequiredArgsConstructor
public class MemberController {
    private final static String MEMBER_DEFAULT_URL = "/coffeeTime";
    private final MemberService memberService;
    private final MemberRepository memberRepository;
    private final MemberMapper mapper;

    @PostMapping
    @CrossOrigin
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody) {
        Member member = mapper.memberPostToMember(requestBody);

        Member createdMember = memberService.joinUser(member);
        URI location = UriCreator.createUri(MEMBER_DEFAULT_URL, createdMember.getId());

        return ResponseEntity.created(location).build();
    }
}
