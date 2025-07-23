package com.jungchongmu.demo.controller;

import com.jungchongmu.demo.dto.KakaoUserResponse;
import com.jungchongmu.demo.service.KakaoAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://192.168.219.104:5173")
@RestController
@RequestMapping("/auth/kakao")
public class KakaoAuthController {

    @Autowired
    private KakaoAuthService kakaoAuthService;

    @GetMapping("/callback")
    public KakaoUserResponse kakaoCallback(@RequestParam String code) {
        System.out.println("💡 인가 코드 수신: " + code);

        KakaoUserResponse userInfo = kakaoAuthService.kakaoLogin(code);
        System.out.println("✅ 사용자 정보: " + userInfo);

        return userInfo;
    }
}
