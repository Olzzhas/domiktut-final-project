package main

import (
	"FinalProject/internal/data"
	"net/http"
)

func (app *application) createReservationHandler(w http.ResponseWriter, r *http.Request) {
	var input struct {
		DateIn  string `json:"date_in"`
		DateOut string `json:"date_out"`
		HotelID int64  `json:"hotel_id"`
	}

	err := app.readJSON(w, r, &input)
	if err != nil {
		app.badRequestResponse(w, r, err)
		return
	}

	booking := &data.Booking{
		DateIn:  input.DateIn,
		DateOut: input.DateOut,
		HotelID: input.HotelID,
	}

	err = app.models.Bookings.Create(booking)
	if err != nil {
		app.serverErrorResponse(w, r, err)
		return
	}

}
