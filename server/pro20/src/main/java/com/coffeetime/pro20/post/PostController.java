package com.coffeetime.pro20.post;

import com.coffeetime.pro20.answer.Answer;
import com.coffeetime.pro20.answer.AnswerMapper;
import com.coffeetime.pro20.answer.AnswerSaveRequestDto;
import com.coffeetime.pro20.answer.AnswerService;
import com.coffeetime.pro20.answer.dto.AnswerResponseDto;
import com.coffeetime.pro20.member.service.MemberService;
import com.coffeetime.pro20.post.dto.ResponseDto;
import com.coffeetime.pro20.post.dto.PatchPostDto;
import com.coffeetime.pro20.post.dto.PostPostDto;
import com.coffeetime.pro20.post.dto.PostResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/posts")
@Slf4j
@Validated
public class PostController {
    private final PostService postService;
    private final MemberService memberService;
    private final PostMapper mapper;

    private final AnswerService answerService;
    private final AnswerMapper answerMapper;

//    public PostController(PostService postService, MemberService memberService, PostMapper mapper) {
//        this.postService = postService;
//        this.memberService = memberService;
//        this.mapper = mapper;
//    }

    public PostController(PostService postService, MemberService memberService, PostMapper mapper, AnswerService answerService, AnswerMapper answerMapper) {
        this.postService = postService;
        this.memberService = memberService;
        this.mapper = mapper;
        this.answerService = answerService;
        this.answerMapper = answerMapper;
    }

    @PostMapping
    public ResponseEntity postPost(@RequestBody PostPostDto postPostDto) {
        Post post = mapper.postPostDtoToPost(postPostDto);
        post.setMember(memberService.findMember(postPostDto.getPostInfo().getUserId()));
        postService.createPost(post);
        log.info("# 질문이 게시됐습니다!");
        String message = "질문이 게시됐습니다!";

        return new ResponseEntity<>(message, HttpStatus.CREATED);
    }

    @PatchMapping("/{post-id}")
    public ResponseEntity patchPost(@PathVariable ("post-id") long postId,
                                    @RequestBody PatchPostDto patchPostDto) {
        patchPostDto.setPostId(postId);

        Post post = mapper.patchPostDtoToPost(patchPostDto);
        postService.updatePost(post);

        log.info("# 질문이 수정됐습니다!");
        String message = "질문이 수정됐습니다!";

        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @GetMapping("/{post-id}")
    public ResponseEntity getPost(@PathVariable ("post-id") @Positive long postId) {
        Post post = postService.findPost(postId);
        PostResponseDto response = mapper.postToPostResponseDto(post);

        log.info("# 질문 전송 완료");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity getPosts(@Positive @RequestParam int page,
                                   @Positive @RequestParam int size) {
        Page<Post> pagePosts = postService.findPosts(page - 1, size);
        List<Post> posts = pagePosts.getContent();

        // (7) 매퍼를 이용해서 List<Post>를 PostResponseDto로 변환
        List<PostResponseDto> response =
                posts.stream()
                        .map(mapper::postToPostResponseDto)
                        .collect(Collectors.toList());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{post-id}")
    public ResponseEntity deletePost(@PathVariable ("post-id") @Positive long postId) {
        postService.deletePost(postId);
        log.info("# 질문 삭제 완료");
        String message = "질문이 삭제됐습니다.";
        return new ResponseEntity<>(message, HttpStatus.NO_CONTENT);
    }

}
