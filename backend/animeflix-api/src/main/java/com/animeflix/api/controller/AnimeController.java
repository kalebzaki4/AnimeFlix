package com.animeflix.api.controller;

import com.animeflix.api.model.Anime;
import com.animeflix.api.service.AnimeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/animes")
public class AnimeController {
    private final AnimeService service;
    public AnimeController(AnimeService service) { this.service = service; }

    @GetMapping
    public List<Anime> all() { return service.findAll(); }

    @GetMapping("/{id}")
    public ResponseEntity<Anime> one(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Anime create(@RequestBody Anime anime) {
        return service.save(anime);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Anime> update(@PathVariable Long id, @RequestBody Anime anime) {
        return service.findById(id)
                .map(existing -> {
                    anime.setId(id);
                    return ResponseEntity.ok(service.save(anime));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/search")
    public List<Anime> search(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String genre
    ) {
        if (title != null) return service.searchByTitle(title);
        if (genre != null) return service.searchByGenre(genre);
        return service.findAll();
    }
}
