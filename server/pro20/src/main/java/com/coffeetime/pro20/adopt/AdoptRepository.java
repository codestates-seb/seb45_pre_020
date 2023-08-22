package com.coffeetime.pro20.adopt;

import com.coffeetime.pro20.answer.Answer;
import com.coffeetime.pro20.member.entity.Member;
import com.coffeetime.pro20.post.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdoptRepository extends JpaRepository<Adopt, Long> {
    Optional<Adopt> findByMemberAndPostAndAnswer(Member member, Post post, Answer answer);

}
