package com.example.demo.Resource;

import com.example.demo.document.Country;
import com.example.demo.repository.CountriesRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CountriesResource {

    private CountriesRepository countriesRepository;

    public CountriesResource(CountriesRepository countriesRepository) {
        this.countriesRepository = countriesRepository;
    }

    @CrossOrigin(origins = "http://localhost:3000")

    @GetMapping("/countries")
    public List<Country> getAll() {
        return countriesRepository.findAll();
    }
}
