package com.coffeetime.pro20.post;

import com.coffeetime.pro20.answer.Answer;
import com.coffeetime.pro20.member.entity.Member;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long postId;

    @Column(length = 100)
    private String postTitle;

    @Column(columnDefinition = "text")
    private String postContents;

    @ManyToOne //many=post, one=user
    @JoinColumn(name = "userId")
    private Member member; // 게시글 작성자

    @OneToMany (mappedBy = "post",fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JsonIgnoreProperties({"post"})
    @OrderBy("answerId desc")
    private List<Answer> answers = new ArrayList<>();

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();
}