package com.coffeetime.pro20.post;

import com.coffeetime.pro20.answer.AnswerRepository;
import com.coffeetime.pro20.exception.BusinessLogicException;
import com.coffeetime.pro20.exception.ExceptionCode;
import com.coffeetime.pro20.member.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Transactional
@Service
public class PostService {
    private final PostRepository postRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private AnswerRepository answerRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public Post updatePost(Post post) {
        Post findPost = findCorrectPost(post.getPostId());

        Optional.ofNullable(post.getPostTitle())
                .ifPresent(findPost::setPostTitle);

        Optional.ofNullable(post.getPostContents())
                .ifPresent(findPost::setPostContents);

        findPost.setModifiedAt(LocalDateTime.now());

        return postRepository.save(findPost);
    }

    @Transactional(readOnly = true)
    public Post findPost(long postId) {
        return findCorrectPost(postId);
    }

    public Page<Post> findPosts(int page, int size) {
        return postRepository.findAll(PageRequest.of(page, size,
                Sort.by("createdAt").descending()));
    }

    public void deletePost(long postId) {
        Post findPost = findCorrectPost(postId);
        postRepository.delete(findPost);
    }

    private Post findCorrectPost(long postId) {
        Optional<Post> optionalPost = postRepository.findById(postId);
        return optionalPost.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));
    }
}
