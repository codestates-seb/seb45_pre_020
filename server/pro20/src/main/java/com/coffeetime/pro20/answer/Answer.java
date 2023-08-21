package com.coffeetime.pro20.answer;

import com.coffeetime.pro20.comment.Comment;
import com.coffeetime.pro20.member.entity.Member;
import com.coffeetime.pro20.post.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;

    @Column(nullable = false)
    private String answerContents;

    @ManyToOne
    @JoinColumn(name = "postId")
    private Post post;

    @ManyToOne
    @JoinColumn(name = "userId")
    private Member member;

    @OneToMany(mappedBy = "answer")
    private List<Comment> comments;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();
}
