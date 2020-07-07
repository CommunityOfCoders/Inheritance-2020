---
title: ALPR
permalink: "/submissions/:title"
team_name: Binary Beasts
description: "ALPR is an image-processing innovation which is used to perceive vehicles by their tags. This Recognition System is an application of Deep Learning and Computer Vision."
---

# Automatic License Plate Recognition System (ALPR)

### Team name: Binary Beasts

## Team members
* Akshay Bakshi - apbakshi@hotmail.com
* Nikhil Sharma - nikhil0512gwl@gmail.com
* Shivam Pawar - vivekrajput8244@gmail.com
* Vivek Rajput - shivamdarasingpawar@gmail.com

## Mentors
* Mohammed Mehdi Aliraza Patel
* Anuj Raghani 
* Devanshi Shah
* Riya Gupta

## About the Project
Traffic control and vehicle owner identification has become major problem in every country. Sometimes it becomes difficult to identify vehicle owner who violates traffic rules. Therefore, there is a need to develop an Automatic License Plate Recognition (ALPR) system as one of the solutions to this problem. ALPR is an image-processing innovation which is used to perceive vehicles by their tags. This Recognition System is an application of Deep Learning and Computer Vision.

The ALPR system consists of following steps:-
* Vehicle Image Capture
* Preprocessing
* Number Plate Extraction
* Character Segmentation
* Character Recognition (Training a Deep Neural Network)

For the frontend, we have made a Flutter Mobile Application that does all of the above steps.

* [Link to repository](https://github.com/akshayb80/Automatic-License-Plate-Recognition-ALPR-)
* [Google Drive Link](https://drive.google.com/drive/folders/10YfLOcAPhNM3nTKsAh86JRXvLxqU5BVZ)
* [App APK Link](https://drive.google.com/drive/folders/10YfLOcAPhNM3nTKsAh86JRXvLxqU5BVZ)

## Technology stack

1. Anaconda Environment
2. Jupyter Notebook
3. Pycharm IDE
4. Tensorflow & Keras
5. Flask
6. Android Studio / VS Code for Flutter

## Project Setup

### Prerequisites

* #### Anaconda Environment

  You can visit the [Anaconda Website](https://www.anaconda.com/) for the installation packages.

* #### Tensorflow-GPU version 2.1.0 (GPU version is recommended for faster performance)

  Tensorflow installation in [Conda Environment](https://docs.anaconda.com/anaconda/user-guide/tasks/tensorflow/)

  #### Command for One Step installation (If the system has NVIDIA GPU):

```sh
conda create --name tensor_gpu tensorflow-gpu anaconda
```

* #### OpenCV version 4.3.0
```sh
conda install -c conda-forge opencv
```

* #### Android Studio

  You can visit the [Android Studio Website](https://developer.android.com/studio) for the installation.

* #### Flutter

  You can visit the [Flutter Website](https://flutter.dev/) for the installation.


## Usage

* #### Starting the local host server 

  Open the Rest API folder in VS Code and run the following in terminal:

```sh
python appapi.py
```

* #### Running the Flutter App in VS Code

  Open the ALPR App folder while a mobile is connected via USB debugging & press F5 in 'main.dart'


## Applications

* Traffic Control
* Vehicle Owner Identification to prevent fake license plate crimes
* Real time Surveillance System

## Future scope
>We're working on developing the real time functionality in the app. It can be also used for vehicle speed control and vehicle location tracking. Also, it can further extended as multilangual ALPR to identify the language of characters automatically based on the training data. It will provide various benefits like traffic safety enforcement, security in case of suspicious activity by vehicles.

## Screenshots

![App_screenshot](https://user-images.githubusercontent.com/64036185/86537876-dceaa000-bf0f-11ea-91d8-2c87747c310d.jpg){: style="height: 500px"}