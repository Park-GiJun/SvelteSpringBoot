package com.gijun.sveltespringboot.Controller;

import com.gijun.sveltespringboot.Entity.RoomEntity;
import com.gijun.sveltespringboot.Service.RoomService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class ChessController {

    private final RoomService roomService;

    public ChessController(RoomService roomService) {
        this.roomService = roomService;
    }


    @GetMapping("/api/roomLists")
    public ResponseEntity<List<RoomEntity>> roomLists() {
        return ResponseEntity.ok(roomService.roomEntityList());
    }

    @GetMapping("/api/roomInfo")
    public Optional<RoomEntity> roomInfo(@RequestParam("roomId") Long roomId) {
        return roomService.getRoomInfo(roomId);
    }

    @GetMapping("/api/createRoom")
    public ResponseEntity<List<RoomEntity>> createRoom(@RequestParam("nickName") String nickName) {
        roomService.createRoom(nickName);
        return ResponseEntity.ok(roomService.roomEntityList());
    }
}
