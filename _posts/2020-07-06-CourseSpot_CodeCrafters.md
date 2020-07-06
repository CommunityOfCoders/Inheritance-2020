---
title: COURSESPOT
permalink: "/submissions/:title"
team_name: CodeCrafters
description: "COURSESPOT is a web app that shows most of the courses available on internet of various domains."
---

# COURSESPOT - A course suggesting web app

## Team name: CodeCrafters

## Team members
* [Dhairya Shah](https://github.com/dhairyashah1) - dhairyashah110501@gmail.com
* [Tushar Bauskar](https://github.com/tusharb12-hash) - tusharsb8@gmail.com
* [Prathamesh Tagore](https://github.com/meshtag) - prathameshtagore@gmail.com
* [Utsav Khatu](https://github.com/utsavk28) - utsavkhatu416@gmail.com

## Mentors
* [Gaurav Sharma](https://github.com/Leovaldez42)
* [Devanshi Shah](https://github.com/Devanshi1500)
* [Hrim Gandhi](https://github.com/hrimG)

## Description
There are so many online educational platforms offering courses on various topics. It becomes a tedious task to go to each site and search for courses. COURSESPOT is a web app that shows most of the courses available on internet of various domains. These domains include
1. Astronomy 
2. Computer Science
3. Data Science
4. Economics
5. Maths
6. Physics

* You just have to select the domain and find the topic that you want to learn!

## Links
* GitHub repo link: [CodeCrafters-CourseSuggestingWebApp](https://github.com/dhairyashah1/CodeCrafters-CourseSuggestingWebApp)
* Drive link: [DEMO VIDEO](https://drive.google.com/file/d/1ZHcTog-5BTn41gTJkB6yAp1o6ARrfOn-/view?usp=sharing) and [SCREENSHOTS](https://drive.google.com/drive/folders/1EVDGG7TJdLYeWVfu_MmEzeDiW7QFqz2u)
* Website link: [COURSESPOT](https://coursespot.herokuapp.com)


## Technology stack

Tools and technologies that you learnt and used in the project.

1. Flask - For Backend
2. HTML CSS JS and Bootstrap - For Frontend
3. BeautifulSoup (bs4) - For Web Scrapping



## Web Scrapping

We scraped ```http://www.openculture.com/``` for getting the data


    url = "http://www.openculture.com/"
    course_dict = [{},{},{},{},{},{}]  #list of 6 dictionaries
    sub_url=["computer_science_free_courses","free-online-data-science-courses",
             "economics_free_courses","math_free_courses","physics_free_courses",
             "astronomy-free-online-courses"]
    csv_files=["computerscience","datascience","economics","math","physics","astronomy"]
    #extraction of data
    for i in range(len(sub_url)):
        course_no = 0
        url_new = url + sub_url[i]
        response = requests.get(url_new)
        data = response.text
        soup = BeautifulSoup(data, 'html.parser')
        contents = soup.find_all("ul")
        for content in contents:
            names = content.find_all("strong")
            for name in names:
                if len(name.text)>=6:
                    course_link = []
                    course_name = name.text
                    courses = name.find_next_siblings("a")
                    course_provider = name.find_parent("li").text[len(course_name)+1:]
                    count =0
                    for course in courses:
                        if count<=3 :
                            course_link.append(course.get('href'))
                            count +=1

                    #print(course_no,course_name,course_provider,course_link)
                    (course_dict[i])[course_no] = [course_name,course_provider,course_link]
                    course_no += 1

                else:
                    continue 

## Project Setup
Clone the [repository](https://github.com/dhairyashah1/CodeCrafters-CourseSuggestingWebApp) or download it. For cloning you must have GIT installed. For downloading git refer this [link](https://git-scm.com/downloads).

Type this command in the git bash terminal
```bash
    git clone https://github.com/dhairyashah1/CodeCrafters-CourseSuggestingWebApp
```

You must also have [python](https://www.python.org/downloads/) and [pip](https://pip.pypa.io/en/stable/installing/) installed

Then you must install the required dependencies. In this repository 'requirements.txt' contains a list of all dependencies required for the project.
The virutal environment is already present in the repository. You just have to activate it using the following command by opening cmd in the project directory.
* For windows
```bash
    venv/Scripts/activate
```
* For Ubuntu
```bash
    source venv/bin/activate
```
If you are not using the virtual environment then enter the command given below
```bash
    pip install -r requirements.txt
```

### Setting up the configuration key
Before running this web application on your machine you have to make some changes in [coursespot/__init__.py](coursespot/__init__.py) file.
* Replace the os.environ.get('SECRET_KEY') variable with a random string
* Replace os.environ.get('EMAIL_USER') and os.environ.get('EMAIL_PASS') with the email id and password of the account from which you want to send email.

+ or you can add these variables to your machine environment(more secure)


## Usages
On the terminal enter

```bash
    python run.py
```

## Applications
>The Course Suggesting Web App suggests courses available in various domains from across many websites offering them.

## Future scope
* Using ML and AI further our recommendations will become user specific. Suggestions based on star ratings from various sites is one of them. Also the number of course domains and courses may increase enabling the user to find everything at one place.
* Also blogging feature will enable the users to write educational blogs, thus making it a fully educational site.

## Screenshots
>Here are some screenshots of your web app.
![**CourseSpot_2**](https://github.com/dhairyashah1/CodeCrafters-CourseSuggestingWebApp/blob/master/coursespot/screenshots/CourseSpot_2.PNG)
![**CourseSpot_3**](https://github.com/dhairyashah1/CodeCrafters-CourseSuggestingWebApp/blob/master/coursespot/screenshots/CourseSpot_3.PNG)
![**CourseSpot_4**](https://github.com/dhairyashah1/CodeCrafters-CourseSuggestingWebApp/blob/master/coursespot/screenshots/CourseSpot_4.PNG)
![**CourseSpot_5**](https://github.com/dhairyashah1/CodeCrafters-CourseSuggestingWebApp/blob/master/coursespot/screenshots/CourseSpot_5.PNG)
![**CourseSpot_6**](https://github.com/dhairyashah1/CodeCrafters-CourseSuggestingWebApp/blob/master/coursespot/screenshots/CourseSpot_6.PNG)
![**CourseSpot_7**](https://github.com/dhairyashah1/CodeCrafters-CourseSuggestingWebApp/blob/master/coursespot/screenshots/CourseSpot_7.PNG)
![**CourseSpot_8**](https://github.com/dhairyashah1/CodeCrafters-CourseSuggestingWebApp/blob/master/coursespot/screenshots/CourseSpot_8.PNG)
