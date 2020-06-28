package com.example.demo.config;

import com.example.demo.document.Country;
import com.example.demo.repository.CountriesRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories(basePackageClasses = CountriesRepository.class)
@Configuration
public class MongoDBConfig {

    @Bean
    CommandLineRunner commandLineRunner(CountriesRepository countriesRepository) {
        return args -> {
            countriesRepository.save(new Country(1, "Poland", 33907, 193, 1438, 3, 20548, 576, 11921));
            countriesRepository.save(new Country(2, "Spain", 295549, 0, 28341, 3, 150376, 0, 267208));
            countriesRepository.save(new Country(3, "USA", 2597415, 878, 128163, 11, 1081531, 94, 1387721));
            countriesRepository.save(new Country(4, "Germany", 194705, 16, 9026, 0, 177500, 0, 8179));
            countriesRepository.save(new Country(5, "Guatemala", 16397, 569, 706, 34, 3123, 95, 12568));
            countriesRepository.save(new Country(6, "Mexico", 212802, 4410, 26381, 602, 123797, 3235, 62624));
            countriesRepository.save(new Country(7, "China", 83500, 17, 4634, 0, 78451, 7, 415));
        };
    }
}
