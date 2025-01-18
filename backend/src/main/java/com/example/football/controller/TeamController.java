package com.example.football.controller;

import com.example.football.model.Team;
import com.example.football.serviceImpl.TeamServiceImpl;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/team")
public class TeamController {

    @Autowired
    private TeamServiceImpl teamService;

    // to create team by this "/add" end point
    @PostMapping("/add")
    public ResponseEntity<?> createTeam(@RequestBody Team team){
        try {
            Team team1 = teamService.addTeam(team);
            return new ResponseEntity<>(team1, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // retrieve all team information
    @GetMapping
    public ResponseEntity<?> getAllTeam(){
        try {
            List<Team> teams = teamService.getAllTeam();
            return new ResponseEntity<>(teams, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}
