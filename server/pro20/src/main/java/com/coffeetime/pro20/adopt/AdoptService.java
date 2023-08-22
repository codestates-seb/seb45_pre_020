package com.coffeetime.pro20.adopt;

import com.coffeetime.pro20.answer.Answer;
import com.coffeetime.pro20.answer.AnswerRepository;
import com.coffeetime.pro20.exception.NotFoundException;
import com.coffeetime.pro20.member.entity.Member;
import com.coffeetime.pro20.member.repository.MemberRepository;
import com.coffeetime.pro20.post.Post;
import com.coffeetime.pro20.post.PostRepository;
import com.sun.jdi.request.DuplicateRequestException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class AdoptService {

    private final AdoptRepository adoptRepository;
    private final MemberRepository memberRepository;
    private final PostRepository postRepository;
    private final AnswerRepository answerRepository;

    @Transactional
    public void insert(AdoptRequestDto adoptRequestDto) throws Exception {

        Member member = memberRepository.findById(adoptRequestDto.getUserId())
                .orElseThrow(()-> new NotFoundException("사용자를 찾을 수 없습니다. : " + adoptRequestDto.getUserId()));

        Post post = postRepository.findById(adoptRequestDto.getPostId())
                .orElseThrow(()-> new NotFoundException("채택 실패: 게시글을 찾을 수 없습니다. : " + adoptRequestDto.getPostId()));

        Answer answer = answerRepository.findById(adoptRequestDto.getAnswerId())
                .orElseThrow(()-> new NotFoundException("채택 실패: 댓글을 찾을 수 없습니다. : " + adoptRequestDto.getAnswerId()));

        //이미 채택 눌렀을 경우 에러 반환
        if (adoptRepository.findByMemberAndPostAndAnswer(member, post, answer).isPresent()){
            throw new DuplicateRequestException("이미 채택을 눌렀습니다. : " + member.getUserId() + " ,"
                    + "글 작성자 :" + post.getPostId()); //409에러
        }

        Adopt adopt = Adopt.builder()
                .member(member)
                .post(post)
                .answer(answer)
                .build();

        adoptRepository.save(adopt);
    }

    @Transactional
    public void delete(AdoptRequestDto adoptRequestDto) {

        Member member = memberRepository.findById(adoptRequestDto.getUserId())
                .orElseThrow(() -> new NotFoundException("사용자를 찾을 수 없습니다. : " + adoptRequestDto.getUserId()));

        Post post = postRepository.findById(adoptRequestDto.getPostId())
                .orElseThrow(() -> new NotFoundException("채택 취소 실패: 게시글을 찾을 수 없습니다. : " + adoptRequestDto.getPostId()));

        Answer answer = answerRepository.findById(adoptRequestDto.getAnswerId())
                .orElseThrow(()-> new NotFoundException(
                        "채택 취소 실패: 댓글을 찾을 수 없습니다. : " + adoptRequestDto.getAnswerId()));

        Adopt adopt = adoptRepository.findByMemberAndPostAndAnswer(member, post, answer)
                .orElseThrow(() -> new NotFoundException("Could not found adopt id"));

        adoptRepository.delete(adopt);
    }
}

