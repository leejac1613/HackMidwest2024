package com.example.demo.run;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class RunRepository {
    private List<Run> runs = new ArrayList<>();
    List<Run> findAll(){
        return runs;
    }
    @PostConstruct
    private void init() {
        runs.add(new Run(1, "Monday Morning Run",
                LocalDateTime.now(),
                LocalDateTime.now().plusHours(1),
                3, Location.INDOOR));

        runs.add(new Run(2, "Wednesday Morning Run",
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(30),
                2, Location.INDOOR));
    }

    Optional<Run> findById(Integer id){
        return Optional.of(runs.stream()
                .filter(run -> run.id() == id)
                .findFirst().get());
    }

    void create(Run run){
        runs.add(run);
    }


}
