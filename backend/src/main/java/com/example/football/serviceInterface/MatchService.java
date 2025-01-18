package com.example.football.serviceInterface;

import com.example.football.model.Match;
import com.example.football.model.MatchDTO;

import java.util.List;

public interface MatchService {
    Match createMatch(MatchDTO match);
    List<Match> getAllMatch();

    Match getMatchById(int id);
}
