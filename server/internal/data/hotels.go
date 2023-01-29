package data

import "time"

type Hotel struct {
	ID        int64     `json:"id"`
	CreatedAt time.Time `json:"created_at"`
	Title     string    `json:"title"`
	City      string    `json:"city"`
	Price     int64     `json:"price"`
	Tags      []string  `json:"tags"`
	Version   int32     `json:"version"`
}
