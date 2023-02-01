package main

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
)

func (app *application) routes() *httprouter.Router {
	router := httprouter.New()

	router.HandlerFunc(http.MethodGet, "/api/getAllHotels", app.getHotelsHandler)
	router.HandlerFunc(http.MethodPost, "/api/hotels", app.createHotelHandler)
	router.HandlerFunc(http.MethodGet, "/api/hotels/:id", app.showHotelHandler)

	return router
}
