package com.coffeetime.pro20.answer;

import com.coffeetime.pro20.board.Board;
import com.coffeetime.pro20.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "posrId")
    private Board board;

    @ManyToOne
    @JoinColumn(name = "userId")
    private Member member;

    @CreationTimestamp
    private LocalDateTime createAt;
}
