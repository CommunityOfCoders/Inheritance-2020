---
title: Percy
permalink: "/submissions/:title"
team_name: PeRKS
description: "Percy is a console AI based chatbot that uses python, neural networks and deep learning, Tensorflow, keras, openCV, Speechrecognition and Natural language toolkit. The user can communicate with Percy using text, speech or sign language."
---

# Percy

### Team-Name: PeRKS

## Team Members
* Sarah Nisar Tisekar - sarahtisekar@gmail.com

## Mentors
* Deep Vora
* Pranav
* Vedant Paranjape

## Description
Percy is a console AI based chatbot that uses python, neural networks and deep learning, Tensorflow, keras, openCV, Speechrecognition and Natural language toolkit. The user can communicate with Percy using text, speech or sign language. In addition to features like chatting, telling the time,jokes and funfacts, showing the news and browsing the web, Percy can recognize the user's emotions based on the user's facial expressions or speech. 

## Links
* GitHub repo link: [Link To Repository](https://github.com/sarah-nisar/CoC_PeRKS)
* Drive Link(Demo Video): [Drive Link here](https://drive.google.com/drive/folders/1ujusYhxw2JFwtsWNJUT8NktI85R5NCCk?usp=sharing)
 
## Technology Stack
* Python
* Tensorflow  
* openCV  
* CNN
* RNN  
* Machine Learning  

## Project Setup  
Clone the CoC_PeRKS repository  

```bash
    git clone https://github.com/sarah-nisar/CoC_PeRKS  
```
  
### 1. Sign language recognition  
Python, openCV and tensorflow for training InceptionV3 model, a convolutional neural network model for classification.The framework used for the CNN implementation can be found here: [Simple transfer learning with an Inception V3 architecture model](https://github.com/xuetsing/image-classification-tensorflow) by xuetsing.The project contains the dataset (1Go).  
See requirements.txt and Dockerfile for versions and required APT packages

##### Using Docker:  

```bash
    docker build -t hands-classifier .  
    docker run -it hands-classifier bash  
```

##### Using pip:  

```bash
    pip install -r requirements.txt
```

#### Training  
unzip dataset.zip in the sign-language-hand-gesture-recognition directory
To train the model, use the following command:  
    
    python train.py \
      --bottleneck_dir=logs/bottlenecks \
      --how_many_training_steps=2000 \
      --model_dir=inception \
      --summaries_dir=logs/training_summaries/basic \
      --output_graph=logs/trained_graph.pb \
      --output_labels=logs/trained_labels.txt \
      --image_dir=./dataset  
        
 If you're using the provided dataset, it may take up to three hours.  

#### Classifying  

 To test classification, use the following command:  
 
    python classify.py path/to/image.jpg  
      
### 2. Facial Emotion Recognition  
This aims to classify the emotion on a person's face into one of seven categories, using deep convolutional neural networks. It is an implementation of [this](https://github.com/sarah-nisar/CoC_PeRKS/blob/master/ResearchPaper.pdf) research paper. The model is trained on the FER-2013 dataset which was published on International Conference on Machine Learning (ICML). This dataset consists of 35887 grayscale, 48x48 sized face images with seven emotions - angry, disgusted, fearful, happy, neutral, sad and surprised. 

#### Usage  

To install the required packages, run 

    pip install -r requirements.txt  
    
This is currently compatible with tensorflow-2.0 and makes use of the Keras API using the tensorflow.keras library.  .
        
Download the FER-2013 dataset from [here](https://github.com/sarah-nisar/CoC_PeRKS/blob/master/data-emotion-detection.zip) and unzip it inside the src folder. Rename the folder to Data.  
To train the model,  
   
    cd src
    python emotions.py --mode train  
      
If you want to view the predictions without training again, you can download the pre-trained model from [here](https://github.com/sarah-nisar/CoC_PeRKS/blob/master/Facial-Emotion-detection/src/model.h5)  

### 3. Speech Emotion Recognition

Install the dependencies using the following command:  
    
    pip install -r requirements.txt  
     
In addition to the above requirements you might also require ffmpeg if you want to add more sample audio.  
Four Datasets(RAVDESS, TESS, EMO-DB, Custom) are already downloaded and already formatted [here](https://github.com/sarah-nisar/CoC_PeRKS/blob/master/data-speech-emotion.zip) 

## Usage

### Integration With Chatbot(Percy) 

All the above mention commands and training have to be executed only once.  

#### Requirements:  

    Python==3.6  
    Tensorflow==1.12.0  
    tflearn==0.3.2  
    numpy==1.19.0  
    nltk==3.5  
      
Since TFLearn requires Tensorflow (version 1.0+) to be installed and  tensorflow.contrib is being removed in version 2.0, two conda environments have been created. One with Tensorflow version 1.12.0 and the other with Tensorflow version 2.2.0.  
replace newenv in the trial.sh and trial1.sh to the name of the anaconda environment which has tensorflow version 2.2.0.  
To run the Project:  
  
    python project2.py  
      
You can then start communicating with the bot.  

## Applications  

* Chatbots are being made to ease the pain that the industries are facing today. The purpose of chat bots is to support and scale business teams in their relations with customers. It could live in any major chat applications like Facebook Messenger, Slack, Telegram, Text Messages, etc.
* Sign language recognition can be of great value to the disabled.
* A key step in the humanization of robotics is the ability to classify the emotion of the human operator.One possible application for this lies in the area
of surveillance and behavioural analysis by law en-forcement.Furthermore such techniques are used in digital cameras to automatically take pictures when the user smiles.  

## Future Scope  
Percy which is presently console based can be given a proper UI and can be made into a web app.
percy can be trained to answer more questions by adding more patterns and responses in the intents2.json file, and thus training it better.  
One very promising applications involves the humanization of artificial intelligent systems.If Percy is able to keep track of the mental state of the user,it can react upon this and behave appropriately.   
Another interesting thing that could be tried is to use Percy to Automate Interviews.




