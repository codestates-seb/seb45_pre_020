package com.coffeetime.pro20.board;

import com.coffeetime.pro20.answer.Answer;
import com.coffeetime.pro20.member.entity.Member;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long postId;

    @Column(nullable = false)
    private String title;

    @Lob //대용량 데이터
    private String content;

    private int count; //조회수

    @ManyToOne //many=board, user=one
    @JoinColumn(name = "userId")
    private Member member; //Fk //db는 오브젝트를 저장할 수 없음. fk, 자바는 오브젝트 저장할 수 있음

    @OneToMany (mappedBy = "board",fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JsonIgnoreProperties({"board"})
    @OrderBy("id desc")
    private List<Answer> answers;

    private LocalDateTime crateAt;
}
