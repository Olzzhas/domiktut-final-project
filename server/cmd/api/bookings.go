package main

import (
	"FinalProject/internal/data"
	"fmt"
	"net/http"
)

func (app *application) createReservationHandler(w http.ResponseWriter, r *http.Request) {
	var input struct {
		DateIn  string `json:"date_in"`
		DateOut string `json:"date_out"`
		HotelID int64  `json:"hotel_id"`
	}

	fmt.Println("check 1")

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
	fmt.Println("check 2")

	err = app.models.Bookings.Create(booking)
	if err != nil {
		app.serverErrorResponse(w, r, err)
		return
	}
	fmt.Println("check 3")

	err = app.writeJSON(w, http.StatusOK, envelope{"booking": booking}, nil)
	if err != nil {
		fmt.Errorf("asdasdowadiwajnijwad")
	}

}
