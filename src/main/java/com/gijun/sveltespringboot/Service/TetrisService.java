package com.gijun.sveltespringboot.Service;

import com.gijun.sveltespringboot.Entity.TetrisEntity;
import com.gijun.sveltespringboot.Repository.TetrisRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TetrisService {

	private final TetrisRepository tetrisRepository;

	public TetrisService (TetrisRepository tetrisRepository) {
		this.tetrisRepository = tetrisRepository;
	}

	public void recordScore(TetrisEntity tetrisEntity) {
		System.out.println("서비스 호출");
		tetrisRepository.save(tetrisEntity);
	}

	public List<TetrisEntity> makeLeaderBoard(){
		return tetrisRepository.findAllByOrderByScoreDesc();
	}
}
