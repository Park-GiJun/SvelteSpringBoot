package com.gijun.sveltespringboot.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Tetris")
@Getter
@Setter
public class TetrisEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String nickname;
	private int score;
}
