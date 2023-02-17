package data

import (
	"database/sql"
	"errors"
)

var (
	ErrRecordNotFound = errors.New("record not found")
)

type Models struct {
	Hotels HotelModel
	Users  UserModel
}

func NewModels(db *sql.DB) Models {
	return Models{
		Hotels: HotelModel{DB: db},
		Users:  UserModel{DB: db},
	}
}
