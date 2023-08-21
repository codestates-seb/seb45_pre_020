package com.coffeetime.pro20.answer;

import com.coffeetime.pro20.exception.BusinessLogicException;
import com.coffeetime.pro20.exception.ExceptionCode;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer findAnswer(long postId) {
        return findCorrectPost(postId);
    }
    private Answer findCorrectPost(long postId) {
        Optional<Answer> optionalPost = answerRepository.findById(postId);
        return optionalPost.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    }
}
