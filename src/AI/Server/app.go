package main

import (
	"context"
	"database/sql"
	"fmt"
	"log"

	_ "github.com/"
)

var server = "sql9.freesqldatabase.com"
var port = "3306"
var user = "sql9589474"
var password = "A4enJHlRcG"
var database = "sql9589474"

var db *sql.db

func main() {
	var err error

	// Build connection string
	connString := fmt.Sprintf("server=%s;user id=%s;password=%s;port=%d;database=%s;",
	server, user, password, port, database);
	
	// Create connection pool
	db, err = sql.Open("sqlserver", connString)
	if err != nil{
		log.Fatal("Error creating connection pool: " + err.Error())
	}
	log.Printf("Connected!\n")
	// Close the database connection pool after program executes
	defer db.close()
	selectversion()
}