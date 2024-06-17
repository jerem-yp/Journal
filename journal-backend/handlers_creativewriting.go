package main

import (
	"log"
	"net/http"
)

type prompt struct {
	ID     int    `json:"id"`
	Prompt string `json:"prompt"`
}

// Fetch entries from the database

func handlerError(w http.ResponseWriter, r *http.Request) {
	respondError(w, 400, "Error!")
}

func handlerFetchPrompts(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query("SELECT id, prompt from prompts ORDER BY RANDOM() LIMIT 5;")
	if err != nil {
		log.Println("Error executing query: ", err)
		respondError(w, 500, "Error with SQL query.")
		return
	}
	defer rows.Close() // Make sure rows close

	// Slice
	var rowsData []prompt
	for rows.Next() {
		var p prompt
		if err := rows.Scan(&p.ID, &p.Prompt); err != nil {
			log.Println("Error scanning row: ", err)
			respondError(w, http.StatusInternalServerError, "SQL Error")
			return
		}
		rowsData = append(rowsData, p)
	}
	// Return it
	// Make sure that exported fields have uppercased
	respondWithJSON(w, http.StatusOK, struct {
		Prompts []prompt `json:"prompts"`
	}{
		Prompts: rowsData,
	})
}

//
