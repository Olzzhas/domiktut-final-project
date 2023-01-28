package main

import (
	"flag"
	"fmt"
	"net/http"
)

type config struct {
	port int
	env  string
}

type application struct {
	config config
}

func main() {
	var cfg config
	flag.IntVar(&cfg.port, "port", 5000, "API Server Port")

	app := &application{
		config: cfg,
	}

	srv := http.Server{
		Addr: fmt.Sprintf(":%d", cfg.port),
	}

	mux := http.NewServeMux()
	mux.HandleFunc("/test", app.testHandler)

	err := srv.ListenAndServe()
	if err != nil {
		fmt.Print("Server Error!!!")
	} else {
		fmt.Print("Server starting...")
	}

}

func (app *application) testHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Print("test handler is working...")
}
