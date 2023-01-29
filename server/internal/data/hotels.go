package data

import (
	"FinalProject/internal/validator"
	"time"
)

type Hotel struct {
	ID        int64     `json:"id"`
	CreatedAt time.Time `json:"created_at"`
	Title     string    `json:"title"`
	City      string    `json:"city"`
	Price     int64     `json:"price"`
	Tags      []string  `json:"tags"`
	Version   int32     `json:"version"`
}

func ValidateHotel(v *validator.Validator, hotel *Hotel) {
	v.Check(hotel.Title != "", "title", "must be provided")
	v.Check(len(hotel.Title) <= 64, "title", "must not be more than 64 bytes long")

	v.Check(hotel.Price > 0, "price", "must be more than 0")

	v.Check(hotel.City != "", "city", "must be provided")
	v.Check(len(hotel.City) <= 64, "city", "must not be more than 64 bytes long")

	v.Check(len(hotel.Tags) >= 1, "tags", "must contain at least 1 tag")
	v.Check(validator.Unique(hotel.Tags), "tags", "must not contain duplicate values")
}
