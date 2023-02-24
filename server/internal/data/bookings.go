package data

import (
	"database/sql"
	"time"
)

type Booking struct {
	ID        int64     `json:"id"`
	CreatedAt time.Time `json:"created_at"`
	DateIn    string    `json:"date_in"`
	DateOut   string    `json:"date_out"`
	HotelID   int64     `json:"hotel_id"`
}

type BookingModel struct {
	DB *sql.DB
}

func (b BookingModel) Create(booking *Booking) error {
	query := `
		INSERT INTO bookings (date_in, date_out, hotel_id)
		VALUES ($1, $2, $3)
		RETURNING id
	`

	args := []any{booking.DateIn, booking.DateOut, booking.HotelID}

	return b.DB.QueryRow(query, args...).Scan(&booking.ID)
}
