package main

import (
	"net/http"

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
}

func getQuotes(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, collectQuotes)
}

func postQuotes(c *gin.Context) {
	var newQuotes quotes
	if err := c.BindJSON(&newQuotes); err != nil {
		return
	}
	collectQuotes = append(collectQuotes, newQuotes)
}

func getQuotesById(c *gin.Context) {
	id := c.Param("id")

	for _, a := range collectQuotes {
		if a.ID == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "quotes not found"})
}

func main() {
	router := gin.Default()
	router.GET("/quotes", getQuotes)
	router.GET("/quotes/:id", getQuotesById)
	router.POST("/quotes", postQuotes)
	router.Run(":8080")
}
