package com.animeflix.api.controller;

import com.animeflix.api.model.User;
import com.animeflix.api.repository.UserRepository;
import com.animeflix.api.security.JwtUtil;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private PasswordEncoder encoder;
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest req) {
        if (userRepo.findByEmail(req.getEmail()).isPresent())
            return ResponseEntity.badRequest().body("Email já cadastrado.");
        User user = User.builder()
                .email(req.getEmail())
                .username(req.getUsername())
                .password(encoder.encode(req.getPassword()))
                .role("USER")
                .build();
        userRepo.save(user);
        return ResponseEntity.ok("Usuário criado com sucesso.");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        var userOpt = userRepo.findByEmail(req.getEmail());
        if (userOpt.isEmpty()) return ResponseEntity.status(401).body("Credenciais inválidas.");
        User user = userOpt.get();
        if (!encoder.matches(req.getPassword(), user.getPassword()))
            return ResponseEntity.status(401).body("Credenciais inválidas.");
        String token = jwtUtil.generateToken(user.getEmail());
        return ResponseEntity.ok(new JwtResponse(token, user.getUsername(), user.getEmail()));
    }

    @Data static class SignupRequest { private String email, username, password; }
    @Data static class LoginRequest { private String email, password; }
    @Data static class JwtResponse {
        private final String token, username, email;
    }
}
