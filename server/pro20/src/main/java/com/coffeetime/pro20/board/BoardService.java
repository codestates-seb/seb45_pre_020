package com.coffeetime.pro20.board;

import com.coffeetime.pro20.answer.Answer;
import com.coffeetime.pro20.answer.AnswerRepository;
import com.coffeetime.pro20.answer.AnswerSaveRequestDto;
import com.coffeetime.pro20.member.repository.MemberRepository;
import org.springframework.transaction.annotation.Transactional;
import com.coffeetime.pro20.member.entity.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    @Autowired
    private AnswerRepository answerRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Transactional
    public void post(Board board, Member member) {
        board.setCount(0); //조회수
        board.setMember(member);
        boardRepository.save(board);
    }

    @Transactional(readOnly = true)
    public Page<Board> postList(Pageable pageable) {
        return boardRepository.findAll(pageable);
    }

    @Transactional(readOnly = true)
    public Board postDetail(int id) {
        return boardRepository.findById(id)
                .orElseThrow(()->{
                    return new IllegalArgumentException("글 상세보기 실패: 아이디를 찾을 수 없습니다.");
                });
    }

    @Transactional
    public void postDelete(int id) {
        boardRepository.deleteById(id);
    }

    public void postUpdate(int id, Board requestBoard) {
        Board board = boardRepository.findById(id)
                .orElseThrow(()->{
                    return new IllegalArgumentException("글 찾기 실패: 아이디를 찾을 수 없습니다.");
                }); //영속화 완료
        board.setTitle(requestBoard.getTitle());
        board.setContent(requestBoard.getContent());
    }

    @Transactional
    public void postAnswer(AnswerSaveRequestDto answerSaveRequestDto) {

        Member member = memberRepository.findById(answerSaveRequestDto.getUserId())
                .orElseThrow(()->{
                    return new IllegalArgumentException("댓글 쓰기 실패: 사용자 아이디를 찾을 수 없습니다.");
                }); //영속화 완료

        Board board = boardRepository.findById(answerSaveRequestDto.getPostId())
                .orElseThrow(()->{
            return new IllegalArgumentException("댓글 쓰기 실패: 게시글 아이디를 찾을 수 없습니다.");
        }); //영속화 완료

        Answer answer = Answer.builder()
                .member(member)
                .board(board)
                .content(answerSaveRequestDto.getContent())
                .build();

        answerRepository.save(answer);
    }

    @Transactional
    public void answerDelete(int answerId) {
        answerRepository.deleteById(answerId);
    }
}
