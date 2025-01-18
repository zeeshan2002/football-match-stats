package com.example.football.serviceInterface;

import com.example.football.model.Team;

import java.util.List;

public interface TeamService {
    Team addTeam(Team team);

    List<Team> getAllTeam();
}
