# Build a web app in JavaScript
In this project, you will implement 3 web pages with Bootstrap. You will use all HTML/CSS/Accessibility/Responsive design/Bootstrap knowledges that you learned previously.

You won’t have a lot of instruction, you are free to implement it the way that you want - the objective is simple: Have fully functional web pages that look the same as the designer file.

### Here the final result:
![alt text](https://github.com/GioRubioHolberton/holberton-smiling-school/blob/master/img-readme/layout.jpg)

#### This webpage has been designed by Nicolas Philippot, UI/UX designer.

## Requirements
* You have to use Bootstrap
* Your styles.css must be as small as you can - you must use as much as you can Bootstrap classes

## Tasks

### 0. Reuse and polish your Bootstrap integration

### 1. Homepage - quotes
Replace static quotes by dynamic loading:

* URL: https://smileschool-api.hbtn.info/quotes
* No static quotes should be present in the quotes section
* During the Ajax request, a loader should be present
* Carousel should work like before

### 2. Homepage - popular tutorials
Replace static video cards by dynamic loading:
* URL: `https://smileschool-api.hbtn.info/popular-tutorials`
* No static video cards should be present in the section
* During the Ajax request, a loader should be present
* Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!
* Don’t forget the responsive part!

### 3. Homepage - latest videos
Replace static video card by dynamic loading:

 URL: `https://smileschool-api.hbtn.info/latest-videos`
* No static video cards should be present in the section
* During the Ajax request, a loader should be present
* Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!
* Don’t forget the responsive part!

### 4. Pricing - quotes
Replace static quotes by dynamic loading:

* URL: `https://smileschool-api.hbtn.info/quotes`
* No static quotes should be present in the quotes section
* During the Ajax request, a loader should be present
* Carousel should work like before

### 5. Courses
Replace static video card by dynamic loading:

* URL: `https://smileschool-api.hbtn.info/courses`
    * GET parameters:
        - q: search value (in our case, the value of the field KEYWORDS)
        - topic: topic filter value (in our case, the value of the field TOPICS)
        - sort: order of all courses (in our case, the value of the field SORT BY)
    * No static video cards should be present in the section
    * During the Ajax request, a loader should be present
    * Dropdowns are dynamic (coming from the API):
        - Topic: list of topics
        - Sort by: list of sorts
    * Search value should be initialized by the value q in the API response
    * The list of video cards is coming from courses in the API response
    * API request must be done when:
        - Search value is changing
        - A new Topic is selected
        - A new Sort by is selected

### 6. JSON to XML
Convert all your JSON Ajax call to another API… a XML API!
```
    quotes: https://smileschool-api.hbtn.info/xml/quotes
    popular tutorials: https://smileschool-api.hbtn.info/xml/popular-tutorials
    latest videos: https://smileschool-api.hbtn.info/xml/latest-videos
    courses: https://smileschool-api.hbtn.info/xml/courses
```


## Author
* [Giovanny Rubio](https://github.com/GioRubioHolberton)
