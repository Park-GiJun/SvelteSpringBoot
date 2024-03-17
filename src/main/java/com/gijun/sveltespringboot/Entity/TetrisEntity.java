package com.gijun.sveltespringboot.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class TetrisEntity {

	@Id
	private int id;
	private String nickname;
	private int score;

}
