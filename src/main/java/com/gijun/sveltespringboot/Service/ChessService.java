package com.gijun.sveltespringboot.Service;

import com.gijun.sveltespringboot.Repository.ChessRepository;
import org.springframework.stereotype.Service;

@Service
public class ChessService {

    private final ChessRepository chessRepository;

    public ChessService(ChessRepository chessRepository) {
        this.chessRepository = chessRepository;
    }

}
