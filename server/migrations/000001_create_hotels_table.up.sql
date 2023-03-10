CREATE TABLE IF NOT EXISTS hotels (
                                      id bigserial PRIMARY KEY,
                                      created_at timestamp(0) with time zone NOT NULL DEFAULT NOW(),
                                      title text NOT NULL,
                                      capacity int not null ,
                                      price integer NOT NULL,
                                      city text NOT NULL,
                                      img text NOT NULL,
                                      tags text[] NOT NULL,
                                      version integer NOT NULL DEFAULT 1
);