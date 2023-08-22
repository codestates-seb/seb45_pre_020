package com.coffeetime.pro20.adopt;

import com.coffeetime.pro20.response.HttpResponseEntity;
import com.coffeetime.pro20.response.HttpResponseEntity.ResponseResult;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static com.coffeetime.pro20.response.HttpResponseEntity.success;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/adopt")
@RestController
public class AdoptController {

    private final AdoptService adoptService;

    //채택
    @PostMapping
    public ResponseResult<?> insert(@RequestBody @Valid AdoptRequestDto adoptRequestDto) throws Exception {
        adoptService.insert(adoptRequestDto);
        return success();
    }

    //채택 취소
    @DeleteMapping
    public ResponseResult<?> delete(@RequestBody @Valid AdoptRequestDto adoptRequestDto) {
        adoptService.delete(adoptRequestDto);
        return success();
    }
}
