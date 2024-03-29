package com.gijun.sveltespringboot.Service;

import com.gijun.sveltespringboot.Entity.RoomEntity;
import com.gijun.sveltespringboot.Repository.RoomRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Log4j2
public class RoomService {

    private final RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }


    public List<RoomEntity> roomEntityList(){
        return roomRepository.findAll();
    }

    public Optional<RoomEntity> getRoomInfo(Long roomId){
        return roomRepository.findById(roomId);
    }

    public void createRoom(String nickName){
        log.fatal(nickName + " 진입");
        RoomEntity roomEntity = new RoomEntity();
        roomEntity.setWhitePlayer(nickName);
        roomRepository.save(roomEntity);
    }
}
