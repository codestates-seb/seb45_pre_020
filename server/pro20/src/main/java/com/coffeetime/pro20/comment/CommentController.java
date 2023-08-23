package com.coffeetime.pro20.comment;

import com.coffeetime.pro20.answer.AnswerService;
import com.coffeetime.pro20.comment.dto.CommentResponseDto;
import com.coffeetime.pro20.comment.dto.PatchCommentDto;
import com.coffeetime.pro20.comment.dto.PostCommentDto;
import com.coffeetime.pro20.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/comments")
@Validated
@Slf4j
@CrossOrigin
public class CommentController {
    private final CommentService commentService;
    private final MemberService memberService;
    private final AnswerService answerService;
    private final CommentMapper mapper;

    public CommentController(CommentService commentService, MemberService memberService, AnswerService answerService, CommentMapper mapper) {
        this.commentService = commentService;
        this.memberService = memberService;
        this.answerService = answerService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postComment(@RequestBody PostCommentDto postCommentDto) {
        Comment comment = mapper.postCommentDtoToComment(postCommentDto);

        comment.setAnswer(answerService.findAnswer(postCommentDto.getAnswerId()));
        comment.setMember(memberService.findMember(postCommentDto.getCommentInfo().getUserId()));

        commentService.createComment(comment);

        log.info("# 코멘트가 작성됐습니다!");
        String message = "코멘트가 작성됐습니다!";

        return new ResponseEntity<>(message, HttpStatus.CREATED);
    }

    @PatchMapping("/{comment-id}")
    public ResponseEntity patchComment(@PathVariable ("comment-id") long commentId,
                                       @RequestBody PatchCommentDto patchCommentDto) {
        patchCommentDto.setCommentId(commentId);

        Comment comment = mapper.patchCommentDtoToComment(patchCommentDto);
        commentService.updateComment(comment);

        log.info("# 코멘트가 수정됐습니다!");
        String message = "코멘트가 수정됐습니다!";
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @GetMapping("/{comment-id}")
    public ResponseEntity getComment(@PathVariable ("comment-id") long commentId) {
        Comment findComment = commentService.findComment(commentId);
        CommentResponseDto response = mapper.commentToCommentResponseDto(findComment);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // answer-id로 해당 답변에 달린 코멘트들 불러오기
    @GetMapping("/answer-id/{answer-id}")
    public ResponseEntity getComments(@PathVariable ("answer-id") long answerId) {
        List<Comment> comments = commentService.findComments(answerId);

        List<CommentResponseDto> response =
                comments.stream()
                        .map(mapper::commentToCommentResponseDto)
                        .collect(Collectors.toList());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{comment-id}")
    public ResponseEntity deleteComment(@PathVariable ("comment-id") long commentId) {
        commentService.deleteComment(commentId);
        log.info("# 코멘트 삭제 완료");
        String message = "코멘트가 삭제됐습니다.";
        return new ResponseEntity<>(message, HttpStatus.NO_CONTENT);
    }
}
