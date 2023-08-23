package com.coffeetime.pro20.answer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    @Query(value = "SELECT a FROM Answer a WHERE a.post.postId = :postId")
    List<Answer> findByPostId(long postId);
}
