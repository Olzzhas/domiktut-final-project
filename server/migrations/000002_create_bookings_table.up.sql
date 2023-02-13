CREATE TABLE IF NOT EXISTS bookings (
    id bigserial primary key,
    date_in date not null,
    date_out date not null,
    hotel_id bigint references hotels(id)
)
-- select * from houses join booking on (houses.id = booking.house_id) and (('2023-2-15' < booking.date_in and '2023-2-19' < booking.date_in) or ('2023-2-15' > booking.date_out and '2023-2-19' > booking.date_out));