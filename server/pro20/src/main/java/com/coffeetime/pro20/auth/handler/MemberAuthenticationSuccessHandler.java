package com.coffeetime.pro20.auth.handler;

import com.coffeetime.pro20.member.entity.Member;
import com.coffeetime.pro20.member.repository.MemberRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Slf4j
@Component
public class MemberAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    private final MemberRepository memberRepository;

    public MemberAuthenticationSuccessHandler(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException {
        // 사용자 정보를 가져와서 JSON 응답으로 변환
        String email = authentication.getName();
        Optional<Member> member = memberRepository.findByEmail(email);
        String username = member.get().getUsername();


        // 응답 데이터 생성
        Map<String, String> responseData = new HashMap<>();
        responseData.put("message", "Login Success!");
        responseData.put("username", username);
        // ... (사용자 정보를 응답 데이터에 추가)

        // JSON 응답 생성 및 전송
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.getWriter().write(new ObjectMapper().writeValueAsString(responseData));

        log.info("# 로그인 성공! 토큰을 발급합니다.");
    }
}
