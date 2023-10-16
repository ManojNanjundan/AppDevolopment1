package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Entity.Player;
import com.example.demo.Service.PlayerService;

import java.util.List;

@RestController
@RequestMapping("/api/players")
@CrossOrigin("*")
public class PlayerController {
    @Autowired
    private PlayerService playerService;

    @GetMapping("/voteall")
    public List<Player> getAllPlayers() {
        return playerService.getAllPlayers();
    }

    @PostMapping("/vote")
    public String voteForPlayer(@RequestBody Player play) {
        return playerService.voteForPlayer(play);
    }
}
