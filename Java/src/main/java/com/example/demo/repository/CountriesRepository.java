package com.example.demo.repository;

import com.example.demo.document.Country;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CountriesRepository extends MongoRepository<Country, Integer> {
}
