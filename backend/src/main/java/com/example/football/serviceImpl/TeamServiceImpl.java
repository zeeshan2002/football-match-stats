package com.example.football.serviceImpl;

import com.example.football.model.Team;
import com.example.football.repository.TeamRepository;
import com.example.football.serviceInterface.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TeamServiceImpl implements TeamService {

    @Autowired
    private TeamRepository teamRepo;

    @Override
    public Team addTeam(Team team) {
        return teamRepo.save(team);

    }

    @Override
    public List<Team> getAllTeam() {
        return teamRepo.findAll();
    }
}
