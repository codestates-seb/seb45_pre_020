package com.coffeetime.pro20.board;

import com.coffeetime.pro20.answer.Answer;
import com.coffeetime.pro20.answer.AnswerSaveRequestDto;
import com.coffeetime.pro20.auth.userdetails.MemberDetailsService;
import com.coffeetime.pro20.auth.userdetails.PrincipalDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.Banner;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/board")
@RestController
public class BoardApiController {

    @Autowired
    private BoardService boardService;

    @PostMapping("/")
    public ResponseDto<Integer> save(@RequestBody Board board,
                                     @AuthenticationPrincipal PrincipalDetail principalDetail) {
        boardService.post(board, principalDetail.getMember());
        return new ResponseDto<Integer>(HttpStatus.OK.value(), 1);
    }

    @DeleteMapping("/{id}")
    public ResponseDto<Integer> deleteById(@PathVariable int id) {
        boardService.postDelete(id);
        return new ResponseDto<Integer>(HttpStatus.OK.value(), 1);
    }

    @PutMapping("/{id}")
    public ResponseDto<Integer> update(@PathVariable int id, @RequestBody Board board) {
        boardService.postUpdate(id, board);
        return new ResponseDto<Integer>(HttpStatus.OK.value(), 1);
    }

    @PostMapping("/{postId}/answer")
    public ResponseDto<Integer> answerSave(@RequestBody AnswerSaveRequestDto answerSaveRequestDto) {

        boardService.postAnswer(answerSaveRequestDto);
        return new ResponseDto<Integer>(HttpStatus.OK.value(), 1);
    }

    @DeleteMapping("/{postId}/answer/{answerId}")
    public ResponseDto<Integer> answerDelete(@PathVariable int answerId) {
        boardService.answerDelete(answerId);
        return new ResponseDto<Integer>(HttpStatus.OK.value(), 1);
    }
}
