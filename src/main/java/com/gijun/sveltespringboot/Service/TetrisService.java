package com.gijun.sveltespringboot.Service;

import com.gijun.sveltespringboot.Repository.TetrisRepository;
import org.springframework.stereotype.Service;

@Service
public class TetrisService {

	private final TetrisRepository tetrisRepository;

	public TetrisService (TetrisRepository tetrisRepository) {
		this.tetrisRepository = tetrisRepository;
	}
}
