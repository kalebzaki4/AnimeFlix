package com.animeflix.api.service;

import com.animeflix.api.model.Anime;
import com.animeflix.api.repository.AnimeRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class AnimeService {
    private final AnimeRepository repo;
    public AnimeService(AnimeRepository repo) { this.repo = repo; }

    public List<Anime> findAll() { return repo.findAll(); }
    public Optional<Anime> findById(Long id) { return repo.findById(id); }
    public Anime save(Anime anime) { return repo.save(anime); }
    public void delete(Long id) { repo.deleteById(id); }
    public List<Anime> searchByTitle(String q) { return repo.findByTitleContainingIgnoreCase(q); }
    public List<Anime> searchByGenre(String g) { return repo.findByGenreIgnoreCase(g); }
}
