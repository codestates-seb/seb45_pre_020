package com.coffeetime.pro20.answer;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnswerVO {

    /*
    create table answer (
            answer_id           long        not null,
            answer_contents     text        not null,
            user_id             long        not null,
            recommended_user    long
            answer_adopted      boolean     not null,
            answer_status       boolean     not null,
            created_at          timestamp   not null,
            modified_at         timestamp   not null,
            PK (answer_id),
            FK (user_id, recommended_user)
     */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;

    private String answerContents;
    private long userId;
    private long recommendedUser;
    private boolean answerAdopted;
    private boolean answerStatus;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
