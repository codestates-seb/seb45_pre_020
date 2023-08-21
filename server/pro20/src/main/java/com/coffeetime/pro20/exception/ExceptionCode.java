package com.coffeetime.pro20.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member Not Found"),
    MEMBER_EXISTS(409, "Member Already Exists"),
    POST_NOT_FOUND(404, "Post Not Found"),
    ANSWER_NOT_FOUND(404, "Answer Not Found"),
    COMMENT_NOT_FOUND(404, "Comment Not Found");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
