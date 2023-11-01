package main

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type quotes struct {
	ID     string `json:"id"`
	Author string `json:"author"`
	Quote  string `json:"quote"`
}

var collectQuotes = []quotes{
	{ID: "1", Quote: "Lorem ipsum sit amet dolor", Author: "Yanto"},
	{ID: "2", Quote: "Lorem ipsum sit amet dolor", Author: "Yanto"},
	{ID: "3", Quote: "Lorem ipsum sit amet dolor", Author: "Yanto"},
	{ID: "4", Quote: "Lorem ipsum sit amet dolor", Author: "Yanto"},
}

func getQuotes(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, collectQuotes)
}

func searchQuotesByAuthor(c *gin.Context) {
	author := c.Query("author")
	var matchingQuotes []quotes

	for _, q := range collectQuotes {
		if q.Author == author {
			matchingQuotes = append(matchingQuotes, q)
		}
	}

	if len(matchingQuotes) > 0 {
		c.IndentedJSON(http.StatusOK, matchingQuotes)
	} else {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "No quotes found for the specified author"})
	}
}

func postQuotes(c *gin.Context) {
	var newQuotes quotes
	if err := c.BindJSON(&newQuotes); err != nil {
		return
	}
	collectQuotes = append(collectQuotes, newQuotes)
}

func updateQuote(c *gin.Context) {
	id := c.Param("id")

	var updateQuote quotes
	if err := c.BindJSON(&updateQuote); err != nil {
		return
	}

	for i, q := range collectQuotes {
		if q.ID == id {
			collectQuotes[i] = updateQuote
			c.IndentedJSON(http.StatusOK, updateQuote)
			return
		}
	}
}

func deleteQuote(c *gin.Context) {
	id := c.Param("id")

	for i, q := range collectQuotes {
		if q.ID == id {
			collectQuotes = append(collectQuotes[:i], collectQuotes[i+1:]...)
			c.IndentedJSON(http.StatusNoContent, nil)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Quote not found"})
}

func getQuotesById(c *gin.Context) {
	id := c.Param("id")

	for _, a := range collectQuotes {
		if a.ID == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Quotes not found"})
}

func main() {
	router := gin.Default()

	// CORS
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5173"}
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE"}
	router.Use(cors.New(config))

	// API Routes
	router.GET("/quotes", getQuotes)
	router.GET("/quotes/:id", getQuotesById)
	router.GET("/quotes/search", searchQuotesByAuthor)
	router.PUT("/quotes/:id", updateQuote)
	router.POST("/quotes", postQuotes)
	router.DELETE("/quotes/:id", deleteQuote)

	// Running server
	router.Run(":8080")
}
