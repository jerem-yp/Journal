package main

import (
	"encoding/json"
	"log"
	"net/http"
)

// Json returns
type errResponse struct {
	Error string `json:"error"` // "error" in json
}

func respondWithJSON(w http.ResponseWriter, code int, payload interface{}) {
	data, err := json.Marshal(payload)
	if err != nil { // Could not marshal data
		w.WriteHeader(http.StatusInternalServerError)
		log.Println("Failed to marshal JSON response:", payload)
		return
	}
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(code)
	w.Write(data)
}

func respondError(w http.ResponseWriter, code int, message string) {
	if code > 499 {
		log.Println("Responding with 5xx error:", code)
	}
	respondWithJSON(w, code, errResponse{
		Error: message,
	})
}
