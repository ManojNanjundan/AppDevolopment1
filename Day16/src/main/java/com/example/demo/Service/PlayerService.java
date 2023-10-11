package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Player;
import com.example.demo.Repository.PlayerRepository;

import java.util.List;

@Service
public class PlayerService {
    @Autowired
    private PlayerRepository playerRepository;

    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

	public String voteForPlayer(Player play) {
		
		playerRepository.save(play);
		return "player vote added successfully";
	}
}
