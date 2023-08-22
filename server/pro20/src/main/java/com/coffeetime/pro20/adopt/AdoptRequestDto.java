package com.coffeetime.pro20.adopt;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AdoptRequestDto {

    private Long userId;
    private Long postId;
    private Long answerId;

    public AdoptRequestDto(Long userId, Long postId, Long answerId) {
        this.userId = userId;
        this.postId = postId;
        this.answerId = answerId;
    }
}
