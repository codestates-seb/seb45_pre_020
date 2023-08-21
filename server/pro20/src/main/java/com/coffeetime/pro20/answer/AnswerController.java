package com.coffeetime.pro20.answer;

import com.coffeetime.pro20.answer.dto.AnswerResponseDto;
import com.coffeetime.pro20.answer.dto.PatchAnswerDto;
import com.coffeetime.pro20.answer.dto.PostAnswerDto;
import com.coffeetime.pro20.member.service.MemberService;
import com.coffeetime.pro20.post.PostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/answers")
public class AnswerController {
    private final AnswerService answerService;
    private final PostService postService;
    private final MemberService memberService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, PostService postService, MemberService memberService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.postService = postService;
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postAnswer(@RequestBody PostAnswerDto postAnswerDto) {

        Answer answer = mapper.postAnswerDtoToAnswer(postAnswerDto);
        answer.setPost(postService.findPost(postAnswerDto.getPostId()));
        answer.setMember(memberService.findMember(postAnswerDto.getUserId()));

        answerService.createAnswer(answer);
        AnswerResponseDto response = mapper.answerToAnswerResponseDto(answer);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PatchMapping
    public ResponseEntity patchAnswer(@RequestBody PatchAnswerDto patchAnswerDto) {

        Answer answer = mapper.patchAnswerDtoToAnswer(patchAnswerDto);
        answerService.updateAnswer(answer);

        String message = "수정됐습니다.";

        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(@PathVariable ("answer-id") long answerId) {

        Answer answer = answerService.findAnswer(answerId);
        AnswerResponseDto response = mapper.answerToAnswerResponseDto(answer);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 질문에 대한 답변 전체 조회
    @GetMapping("/all/{post-id}")
    public ResponseEntity getAnswers(@PathVariable ("post-id") long postId) {

        List<Answer> answerList = answerService.findAnswers(postId);
        List<AnswerResponseDto> response =
                answerList.stream()
                        .map(mapper::answerToAnswerResponseDto)
                        .collect(Collectors.toList());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable ("answer-id") long answerId) {
        answerService.deleteAnswer(answerId);

        String message = "답변이 삭제됐습니다.";
        return new ResponseEntity<>(message, HttpStatus.NO_CONTENT);
    }
}
