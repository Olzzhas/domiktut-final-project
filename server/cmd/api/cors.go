package main

import (
	"github.com/rs/cors"
	"net/http"
)

func CorsSettings() *cors.Cors {
	c := cors.New(cors.Options{
		AllowedMethods: []string{
			http.MethodPost, http.MethodGet, http.MethodDelete, http.MethodPatch,
		},
		AllowedOrigins: []string{
			"http://localhost:3000",
			"http://localhost:3001",
		},
		AllowCredentials: true,
		AllowedHeaders: []string{
			"Access-Control-Allow-Origin",
			"Content-Type",
			"Authorization",
		},
		OptionsPassthrough: true,
		ExposedHeaders: []string{
			"Access-Control-Allow-Origin",
			"Content-Type",
		},
		Debug: false,
	})
	return c
}
