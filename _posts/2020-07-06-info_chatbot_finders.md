---
title: info_chatbot
permalink: "/submissions/:title"
team_name: Finders
description: "A chatbot that answers your questions."
---

# Project: info_chatbot

### Team name: Finders

## Team members
* Member-1: Dushant Panchbhai
  Email: dushantrpanchbhai@gmail.com
* Member-2: Mithilesh Patil
  Email: mithileshpatil2000@gmail.com
 
## Mentors
* Mentor-1 : Parth
* Mentor-2 : Priyesh Vakharia

## Description
In this project, we had made a website consisting of chatbot functioning.

This chatbot model is based on the web scrapping. Whatever the question we give to the chatbot, the chatbot does a google search based on the topic.

```
        from googlesearch import search
        search_result_list = list(search(question, tld="co.in",start=0,num=10, stop=10, pause=2))
```

after doing google search the bot will pickup the first hyperlink.extract the whole text and do the natural language processing it and display the appropriate result based on it.
```     #getting page of particular hyperlink. here index means hyperlink number
        page = requests.get(search_result_list[index])
        tree = html.fromstring(page.content)
        #prints the whole .html script
        soup = BeautifulSoup(page.content, features="lxml")
        
        article_text = ''
        article = soup.findAll('p')
        
        for element in article:
            article_text += '\n' + ''.join(element.findAll(text = True))
        first_sentence = article_text.split('\n')
        #first_sentence consist of list of text of the webpage seprated by newline.
```

we had also embedded some greeting syntax file which will deal with some greeting and natural conversation questions like who are you? , tell me a joke, etc.
```
        def filter(question):
            # path1 is the address of greeting.yml file which consist of all the greeting syntax.
            a_yaml_file = open(path1)
            par = yaml.load(a_yaml_file, Loader=yaml.FullLoader)
```
so, the model will first check if the entered question is greeting type or not. if the question is not greeting type then it will show result according to web scrapping

* GitHub repo link: [Link to repository](https://github.com/dushantpanchbhai/chatbot2.git)
* Drive link: [Drive link here](https://drive.google.com/drive/folders/1CIqauP6lBFn7vU7RKxF5kjTZVj47IcwN?usp=sharing)

## Technology stack

1. Python
2. Django
3. Natural language processing libraries include Spacy, Nltk.
4. HTML,CSS, and javascript.

## Project Setup
1. clone the project from the GitHub [link](https://github.com/dushantpanchbhai/chatbot2.git)
2. open the terminal and create a virtual environment
```
      pip install virtualenv
      virtualenv [virtual environment name]
      *to enter virtual environment syntax is:
      source (environment name)/bin/activate
      NOTE: you should be in the folder containing the environment while doing this.
```
3. install the requirement.txt file present in the folder in that environment
```
      syntax: pip install -r requirements.txt
```
4. In terminal enter following command to install 'en_core_web_sm'.
```
        python -m spacy download en_core_web_sm
```
## Usage
1. In terminal activate the virtual environment

2. enter the folder containing project in terminal using the cd command

3. after that type this command and press enter:
```
        python manage.py runserver
```

## Applications

* This project can help in finding the main solution to many questions. so instead of surfing over the internet, enter your question here and get the answer.

## Future scope
>This project can build further by implementing a voice search in it. Also, the model can be modified so as to get a more effective and accurate answer

## Screenshots

![image1](https://drive.google.com/uc?export=view&id=12qPwZT_ceavDAiznWk1w6v83CBMYqULY)


![image2](https://drive.google.com/uc?export=view&id=1iQ_Q-xKiklaa6b2bcroJ3dpOKln6QKqz)


![image3](https://drive.google.com/uc?export=view&id=1RjCcwxe_90M1s68eAecG6CIqhXRZB_3P)


![image4](https://drive.google.com/uc?export=view&id=1NbLU7utpC0hpiGBsnv49HC_Mu2X1ZAD0)


![image5](https://drive.google.com/uc?export=view&id=17FxFzzrmLpoBZ0uS_kzJcv09ofEzo1cc)


![image6](https://drive.google.com/uc?export=view&id=1AnzzH-tpjVJ-RjK--H_-_xsTXwmoDkdC)


for recording of chatbot [clickhere](https://drive.google.com/file/d/1TJXv5YZ3RqRLNuUdWdeF17kH29IWNOcV/view?usp=sharing)
