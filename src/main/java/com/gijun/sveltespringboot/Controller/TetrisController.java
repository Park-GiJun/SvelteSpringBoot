package com.gijun.sveltespringboot.Controller;

import com.gijun.sveltespringboot.Entity.TetrisEntity;
import com.gijun.sveltespringboot.Service.TetrisService;
import com.google.gson.Gson;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TetrisController {

	private final TetrisService tetrisService;

	public TetrisController(TetrisService tetrisService) {
		this.tetrisService = tetrisService;
	}

	@PostMapping("/api/score")
	public ResponseEntity<?> submitScore(@RequestBody ScoreRequest scoreRequest) {
		System.out.println("닉네임: " + scoreRequest.getNickname() + ", 점수: " + scoreRequest.getScore());

		TetrisEntity tetrisEntity = new TetrisEntity();
		tetrisEntity.setNickname(scoreRequest.getNickname());
		tetrisEntity.setScore(scoreRequest.getScore());

		System.out.println("확인 1 : " + tetrisEntity);

		tetrisService.recordScore(tetrisEntity);

		return ResponseEntity.ok().body("점수가 성공적으로 제출되었습니다.");
	}

	@PostMapping("/api/leaderBoard")
	public ResponseEntity<List<TetrisEntity>> getLeaderBoard(){
		List<TetrisEntity> list = tetrisService.makeLeaderBoard();
		return ResponseEntity.ok(list);
	}


	@Setter
	@Getter
	static class ScoreRequest {
		private String nickname;
		private int score;

	}
}
