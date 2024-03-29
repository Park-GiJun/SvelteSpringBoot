package com.gijun.sveltespringboot.Repository;

import com.gijun.sveltespringboot.Entity.RoomEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<RoomEntity, Long> {
}
