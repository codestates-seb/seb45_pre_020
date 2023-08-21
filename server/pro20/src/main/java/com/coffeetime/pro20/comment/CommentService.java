package com.coffeetime.pro20.comment;

import com.coffeetime.pro20.exception.BusinessLogicException;
import com.coffeetime.pro20.exception.ExceptionCode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment createComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public Comment updateComment(Comment comment) {
        Comment findComment = findCorrectComment(comment.getCommentId());

        Optional.ofNullable(comment.getCommentContents())
                .ifPresent(findComment::setCommentContents);

        findComment.setModifiedAt(LocalDateTime.now());

        return commentRepository.save(findComment);
    }

    public Comment findComment(long commentId) {
        return findCorrectComment(commentId);
    }

    public List<Comment> findComments(long answerId) {
        return commentRepository.findByAnswerId(answerId);
    }

    public void deleteComment(long commentId) {
        Comment findComment = findCorrectComment(commentId);
        commentRepository.delete(findComment);
    }

    private Comment findCorrectComment(long commentId) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        return optionalComment.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
    }
}
