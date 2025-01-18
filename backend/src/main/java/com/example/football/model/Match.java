package com.example.football.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "football_match")
public class Match {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Date date;


    @ManyToOne
    @JoinColumn(name = "team_a_id")
    private Team team_A;

    @ManyToOne
    @JoinColumn(name = "team_b_id")
    private Team team_B;
}


