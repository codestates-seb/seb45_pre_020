package com.coffeetime.pro20.domain.member;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class MemberController {

    @GetMapping("/join")
    public String login() {
        return "join";
    }
}
