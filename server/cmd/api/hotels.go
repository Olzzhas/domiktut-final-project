package main

import (
	"FinalProject/internal/data"
	"FinalProject/internal/validator"
	"encoding/json"
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
		Img      string   `json:"img"`
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
		Img:      input.Img,
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
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")

	hotels, err := app.models.Hotels.GetAll()
	if err != nil {
		switch {
		case errors.Is(err, data.ErrRecordNotFound):
			app.notFoundResponse(w, r)
		default:
			app.serverErrorResponse(w, r, err)
		}
		return
	}

	err = app.writeJSON(w, http.StatusOK, hotels, nil)
	if err != nil {
		app.serverErrorResponse(w, r, err)
	}

}

func (app *application) showHotelHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
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

type filter struct {
	DateIn           any    `json:"date_in"`
	DateOut          any    `json:"date_out"`
	QuantityOfPeople any    `json:"quantity_of_people"`
	City             string `json:"city"`
	PriceMin         any    `json:"price_min"`
	PriceMax         any    `json:"price_max"`
}

func (app *application) showFilteredHotelsHandler(w http.ResponseWriter, r *http.Request) {
	//enableCors(&w)

	var f filter

	err := json.NewDecoder(r.Body).Decode(&f)
	if err != nil {
		app.badRequestResponse(w, r, err)
		return
	}

	fmt.Fprintf(w, "Filtered data: %+v", f)
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	//http.Redirect(w, r, "http://localhost:3000", http.StatusSeeOther)
}
