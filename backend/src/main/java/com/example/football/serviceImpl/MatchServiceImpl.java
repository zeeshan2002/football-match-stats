package com.example.football.serviceImpl;

import com.example.football.model.Match;
import com.example.football.model.MatchDTO;
import com.example.football.model.Team;
import com.example.football.repository.MatchRepository;
import com.example.football.repository.TeamRepository;
import com.example.football.serviceInterface.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class MatchServiceImpl implements MatchService {

    @Autowired
    private MatchRepository matchRepo;

    @Autowired
    private TeamRepository teamRepository;

    @Override
    @Transactional
    public Match createMatch(MatchDTO match) {
        Team teamA = teamRepository.findById(match.getTeamAId())
                .orElseThrow(() -> new RuntimeException("Team A not found"));
        Team teamB = teamRepository.findById(match.getTeamBId())
                .orElseThrow(() -> new RuntimeException("Team B not found"));
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date parsedDate;
        try {
            parsedDate = dateFormat.parse(match.getDate());
        } catch (ParseException e) {
            throw new RuntimeException("Invalid date format. Expected format: yyyy-MM-dd");
        }
        Match new_match = new Match();
        new_match.setName(match.getName());
        new_match.setDate(parsedDate);
        new_match.setTeam_A(teamA);
        new_match.setTeam_B(teamB);
        return matchRepo.save(new_match);
    }

    @Override
    public List<Match> getAllMatch() {
        return matchRepo.findAll();
    }

    @Override
    public Match getMatchById(int id) {
        return matchRepo.findById(id).get();
    }
}
