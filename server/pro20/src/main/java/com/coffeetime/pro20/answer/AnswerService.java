package com.coffeetime.pro20.answer;

import com.coffeetime.pro20.exception.BusinessLogicException;
import com.coffeetime.pro20.exception.ExceptionCode;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findCorrectAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getAnswerContents())
                .ifPresent(findAnswer::setAnswerContents);

        findAnswer.setModifiedAt(LocalDateTime.now());

        return answerRepository.save(findAnswer);
    }

    public Answer findAnswer(long answerId) {
        return findCorrectAnswer(answerId);
    }

    // 질문에 대한 답변 목록 조회
    public List<Answer> findAnswers(long postId) {
        return answerRepository.findByPostId(postId);
    }

    public void deleteAnswer(long answerId) {
        answerRepository.delete(findCorrectAnswer(answerId));
    }

    private Answer findCorrectAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        return optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    }
}
