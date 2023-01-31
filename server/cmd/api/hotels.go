package main

import (
	"FinalProject/internal/data"
	"FinalProject/internal/validator"
	"errors"
	"fmt"
	"net/http"
)

func (app *application) createHotelHandler(w http.ResponseWriter, r *http.Request) {
	var input struct {
		Title    string   `json:"title"`
		City     string   `json:"city"`
		Price    int64    `json:"price"`
		Capacity int64    `json:"capacity"`
		Tags     []string `json:"tags"`
	}

	err := app.readJSON(w, r, &input)
	if err != nil {
		app.badRequestResponse(w, r, err)
		return
	}

	hotel := &data.Hotel{
		Title:    input.Title,
		City:     input.City,
		Price:    input.Price,
		Capacity: input.Capacity,
		Tags:     input.Tags,
	}

	v := validator.New()

	if data.ValidateHotel(v, hotel); !v.Valid() {
		app.failedValidationResponse(w, r, v.Errors)
		return
	}

	err = app.models.Hotels.Insert(hotel)
	if err != nil {
		app.serverErrorResponse(w, r, err)
		return
	}

	headers := make(http.Header)
	headers.Set("Location", fmt.Sprintf("/v1/hotles/%d", hotel.ID))

	err = app.writeJSON(w, http.StatusCreated, envelope{"hotel": hotel}, headers)
	if err != nil {
		app.serverErrorResponse(w, r, err)
	}
}

func (app *application) getHotelsHandler(w http.ResponseWriter, r *http.Request) {
	data := map[string]string{
		"title": "Test",
		"city":  "Kostanay",
		"price": "10000",
	}

	err := app.writeJSON(w, http.StatusOK, envelope{"hotel": data}, nil)
	if err != nil {
		app.logger.Print(err)
		http.Error(w, "The server encountered a problem and could not process your request", http.StatusInternalServerError)
	}

}

func (app *application) showHotelHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	id, err := app.readIDParam(r)
	if err != nil {
		http.NotFound(w, r)
		return
	}

	hotel, err := app.models.Hotels.Get(id)
	if err != nil {
		switch {
		case errors.Is(err, data.ErrRecordNotFound):
			app.notFoundResponse(w, r)
		default:
			app.serverErrorResponse(w, r, err)
		}
		return
	}

	err = app.writeJSON(w, http.StatusOK, envelope{"hotel": hotel}, nil)
	if err != nil {
		app.serverErrorResponse(w, r, err)
	}

}
