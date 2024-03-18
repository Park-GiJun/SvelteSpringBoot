package com.gijun.sveltespringboot.Repository;

import com.gijun.sveltespringboot.Entity.TetrisEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TetrisRepository extends JpaRepository<TetrisEntity, Long>{

    List<TetrisEntity> findAllByOrderByScoreDesc();
}
