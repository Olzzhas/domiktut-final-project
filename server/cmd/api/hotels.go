package main

import (
	"FinalProject/internal/data"
	"FinalProject/internal/validator"
	"fmt"
	"net/http"
	"time"
)

func (app *application) createHotelHandler(w http.ResponseWriter, r *http.Request) {
	var input struct {
		Title string   `json:"title"`
		City  string   `json:"city"`
		Price int64    `json:"price"`
		Tags  []string `json:"tags"`
	}

	err := app.readJSON(w, r, &input)
	if err != nil {
		app.badRequestResponse(w, r, err)
		return
	}

	hotel := &data.Hotel{
		Title: input.Title,
		City:  input.City,
		Price: input.Price,
		Tags:  input.Tags,
	}

	v := validator.New()

	if data.ValidateHotel(v, hotel); !v.Valid() {
		app.failedValidationResponse(w, r, v.Errors)
		return
	}

	fmt.Fprintf(w, "%+v\n", input)
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
	id, err := app.readIDParam(r)
	if err != nil {
		http.NotFound(w, r)
		return
	}

	hotel := data.Hotel{
		ID:        id,
		CreatedAt: time.Now(),
		Title:     "Салмачи",
		City:      "Костанай",
		Tags:      []string{"Бассейн", "Баня", "Настольный теннис"},
		Price:     15000,
		Version:   1,
	}

	err = app.writeJSON(w, http.StatusOK, envelope{"hotel": hotel}, nil)
	if err != nil {
		app.logger.Print(err)
		http.Error(w, "The server encountered a problem and could not process your request", http.StatusInternalServerError)
	}
}
