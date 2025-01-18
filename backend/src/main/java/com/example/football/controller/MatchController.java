package com.example.football.controller;

import com.example.football.model.Match;
import com.example.football.model.MatchDTO;
import com.example.football.model.Team;
import com.example.football.serviceImpl.MatchServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/match")
public class MatchController {

    @Autowired
    private MatchServiceImpl matchService;

    // create match
    @PostMapping
    public ResponseEntity<?> createMatch(@RequestBody MatchDTO matchDTO){
        try {
            Match match = matchService.createMatch(matchDTO);
            return new ResponseEntity<>(match, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
    // retrieve all match information
    @GetMapping
    public ResponseEntity<?> getAllMatch(){
        try{
            List<Match> matchList = matchService.getAllMatch();
            return new ResponseEntity<>(matchList, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    // retrieve information of match by id
    @GetMapping("/id")
    public ResponseEntity<?> getMatchById(@RequestParam int id){
        try{
            Match matchList = matchService.getMatchById(id);
            return new ResponseEntity<>(matchList, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}
