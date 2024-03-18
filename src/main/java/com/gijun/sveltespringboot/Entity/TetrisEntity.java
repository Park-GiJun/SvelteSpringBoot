package com.gijun.sveltespringboot.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Tetris") // 테이블 이름을 명시적으로 지정
@Getter
@Setter
public class TetrisEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String nickname;
	private int score;
}
