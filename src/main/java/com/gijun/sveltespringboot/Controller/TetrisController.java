package com.gijun.sveltespringboot.Controller;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TetrisController {

	@PostMapping("/api/score")
	public ResponseEntity<?> submitScore(@RequestBody ScoreRequest scoreRequest) {
		System.out.println("닉네임: " + scoreRequest.getNickname() + ", 점수: " + scoreRequest.getScore());

		// 여기에서 점수 데이터를 처리합니다 (예: 데이터베이스에 저장)

		return ResponseEntity.ok().body("점수가 성공적으로 제출되었습니다.");
	}

	@Setter
	@Getter
	static class ScoreRequest {
		private String nickname;
		private int score;

	}
}
