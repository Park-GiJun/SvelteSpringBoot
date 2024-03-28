package com.gijun.sveltespringboot.Controller;

import com.gijun.sveltespringboot.Service.ChessService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.Mapping;

@Controller
public class ChessController {

    private final ChessService chessService;

    public ChessController(ChessService chessService) {
        this.chessService = chessService;
    }

}
