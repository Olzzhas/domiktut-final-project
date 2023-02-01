package data

import (
	"FinalProject/internal/validator"
	"database/sql"
	"errors"
	"github.com/lib/pq"
	"time"
)

type Hotel struct {
	ID        int64     `json:"id"`
	CreatedAt time.Time `json:"created_at"`
	Title     string    `json:"title"`
	City      string    `json:"city"`
	Price     int64     `json:"price"`
	Capacity  int64     `json:"capacity"`
	Img       string    `json:"img"`
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

type HotelModel struct {
	DB *sql.DB
}

func (h HotelModel) Insert(hotel *Hotel) error {
	query := `
		INSERT INTO hotels (title, city, price, capacity, img, tags)
		VALUES ($1, $2, $3, $4, $5, $6)
		RETURNING id, created_at, version
	`

	args := []any{hotel.Title, hotel.City, hotel.Price, hotel.Capacity, hotel.Img, pq.Array(hotel.Tags)}

	return h.DB.QueryRow(query, args...).Scan(&hotel.ID, &hotel.CreatedAt, &hotel.Version)
}

func (h HotelModel) Get(id int64) (*Hotel, error) {
	if id < 1 {
		return nil, ErrRecordNotFound
	}

	query := `
		SELECT id, created_at, title, city, price, capacity, img, tags, version
		from hotels
		where id = $1
	`

	var hotel Hotel

	err := h.DB.QueryRow(query, id).Scan(
		&hotel.ID,
		&hotel.CreatedAt,
		&hotel.Title,
		&hotel.City,
		&hotel.Price,
		&hotel.Capacity,
		&hotel.Img,
		pq.Array(&hotel.Tags),
		&hotel.Version,
	)

	if err != nil {
		switch {
		case errors.Is(err, sql.ErrNoRows):
			return nil, ErrRecordNotFound
		default:
			return nil, err
		}
	}

	return &hotel, nil
}

func (h HotelModel) GetAll() ([]Hotel, error) {
	query := `
		SELECT id, created_at, title, city, price, capacity, img, tags, version
		from hotels
		where id > 0
	`

	var hotels []Hotel

	rows, err := h.DB.Query(query)

	for rows.Next() {
		var hotel Hotel
		if err := rows.Scan(
			&hotel.ID,
			&hotel.CreatedAt,
			&hotel.Title,
			&hotel.City,
			&hotel.Price,
			&hotel.Capacity,
			&hotel.Img,
			pq.Array(&hotel.Tags),
			&hotel.Version); err != nil {
			return hotels, err
		}
		hotels = append(hotels, hotel)
	}

	if err = rows.Err(); err != nil {
		return hotels, err
	}
	return hotels, nil
}

func (h HotelModel) Update(hotel *Hotel) error {
	return nil
}

func (h HotelModel) Delete(hotel *Hotel) error {
	return nil
}
