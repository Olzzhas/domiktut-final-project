package main

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
)

func (app *application) routes() http.Handler {
	router := httprouter.New()

	router.HandlerFunc(http.MethodGet, "/api/getAllHotels", app.getHotelsHandler)
	router.HandlerFunc(http.MethodPost, "/api/hotels", app.createHotelHandler)
	router.HandlerFunc(http.MethodGet, "/api/hotels/:id", app.showHotelHandler)

	router.HandlerFunc(http.MethodPost, "/api/filter", app.showFilteredHotelsHandler)

	router.HandlerFunc(http.MethodPost, "/api/users", app.registerUserHandler)
	router.HandlerFunc(http.MethodPut, "/api/users/activated", app.activateUserHandler)

	return app.recoverPanic(app.rateLimit(router))
}
