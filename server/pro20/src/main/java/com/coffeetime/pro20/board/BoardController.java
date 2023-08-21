package com.coffeetime.pro20.board;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class BoardController {

    @Autowired
    private BoardService boardService;

    @GetMapping
    public String index(Model model, @PageableDefault(size = 3, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        model.addAttribute("boards", boardService.postList(pageable));
        return "index";
    }

    @GetMapping("/board/{id}")
    public String findById(@PathVariable int id, Model model) {
        model.addAttribute("board", boardService.postDetail(id));
        return "board/detail";
    }

    @GetMapping("/board/{id}/updatePost")
    public String updatePost(@PathVariable int id, Model model){
        model.addAttribute("board", boardService.postDetail(id));
        return "board/updatePost";
    }

    @GetMapping("/board/")
    public String save() {
        return "board/";
    }
}
