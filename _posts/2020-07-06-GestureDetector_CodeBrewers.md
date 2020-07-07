---
title: Gesture Detector
permalink: "/submissions/:title"
team_name: CodeBrewers
description: "A machine learning algorithm capable of classifying images of different hand gestures (such as fists, palm, etc.) and use it for gesture detection and recognition."
---

# Gesture Detector

### Team name: CodeBrewers

## Team members
* Rutuja Ajay Kolte - kolterutuja1@gmail.com
* Mahek Ajay Salia - saliamahek13@gmail.com
* Reshmika Sreenath Nambiar - reshmikasnambiar@gmail.com
* Prerna Jagesia - pkjagesia@gmail.com

## Mentors
* Anuj Raghani
* Bhavya Sheth
* Owais Hetavkar
* Vedant Paranjape

## Description
The goal of our project was to train a machine learning algorithm capable of classifying images of different hand gestures (such as fists, palm, etc.) and use it for gesture detection and recognition.  
  
We have used the [Hand Gesture Recognition Database from Kaggle](https://www.kaggle.com/gti-upm/leapgestrecog/version/1).  
   
### Creating the Model
* First we load the images from proj.zip
* Their sizes are reduced and their color space is turned to gray. They are stored in array X while their labels are stored in array Y.
* The model is constructed using Tensorflow and Keras.
```
    model = Sequential()
    model.add(Conv2D(32, (5, 5), activation='relu', input_shape=(120, 320, 1))) 
    model.add(MaxPooling2D((2, 2)))
    model.add(Conv2D(64, (3, 3), activation='relu')) 
    model.add(MaxPooling2D((2, 2)))
    model.add(Conv2D(64, (3, 3), activation='relu'))
    model.add(MaxPooling2D((2, 2)))
    model.add(Flatten())
    model.add(Dense(128, activation='relu'))
    model.add(Dense(10, activation='softmax'))
```
* The model is then configured and trained.
```
    model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
    model.fit(X, Y, epochs=5, batch_size=64, verbose=2, validation_data=(X, Y))
```
* The model is then saved as an HDF5 file.
### Using the Model
* The model from GestureRecognition.h is loaded.
* The image is taken from webcam.
* It is resized and changed to grayscale.
* Running average method is used for background subtraction.
```
    averageValue1 = np.float32(img)
    while True:
        try:
            filename = take_photo()
            img = cv2.imread('/content/photo.jpg')  # Reads the picture taken from webcam
            cv2.accumulateWeighted(img, averageValue1, 0.02)  # Updates the running average
            resultingFrames1 = cv2.convertScaleAbs(averageValue1) # Converts the matrix elements to absolute values and converts the result to 8-bit
            cv2_imshow(resultingFrames1)  # Background using Running Average Method
            m = cv2.subtract(img,resultingFrames1)  # Foreground by subtracting background from original image
        except Exception as err:
            # Errors will be thrown if the user does not have a webcam or if they do not grant the page permission to access it
            print(str(err))
```
* The model then predicts the gesture and prints it.
```
    gesture = ("down", "palm", "l", "fist", "fist_moved", "thumb", "index", "ok", "palm_moved", "c")
    prediction = model.predict(np.expand_dims(m, axis = 0)) # Makes predictions
    ans = np.argmax(prediction[0])
    print(prediction[0][ans]) # Prints probability of prediction
    print(gesture[ans]) # Prints predicted gesture
```
#### Links
* GitHub repo link: [Link to repository](https://github.com/Rutuja-Kolte/CodeBrewers)
* Drive link: [Drive link here](https://drive.google.com/drive/folders/1YxJxfa36NaUZYAGVKP1biX78SaF2loQw?usp=sharing)

## Technology stack

Tools and technologies that we learnt and used in the project.

1. Python
2. Open CV and CNN
3. Jupyter notebook
4. Machine learning

## Project Setup
### Method 1  
1. Clone the CodeBrewers repository  
```bash
    git clone https://github.com/Rutuja-Kolte/CodeBrewers
```
2. Open Google Drive and create a folder named CodeBrewers.
3. Upload all files from the CodeBrewers repository on your PC to Google Drive.
4. Also add the [dataset from Kaggle](https://www.kaggle.com/gti-upm/leapgestrecog/version/1) and name it proj.zip

  
### Method 2  
1. Clone the CodeBrewers repository  
```bash
    git clone https://github.com/Rutuja-Kolte/CodeBrewers
```
2. Go to the [drive link](https://drive.google.com/drive/folders/1YxJxfa36NaUZYAGVKP1biX78SaF2loQw?usp=sharing) and copy the folder and save it in your own drive.
## Usage
### To Create the Model (skip this if you want to use the pre-trained model)
#### Method 1
1. Right click on CodeBrewers.ipynb file in Google Drive.
2. Click on open with Google Colab.
3. Run the code.  
#### Method 2
1. Open CodeBrewers.ipynb from the CodeBrewers repository in Google Colab.
2. Run the code.

### To Use the Model
#### Method 1
1. Right click on GestureDetector.ipynb file in Google Drive.
2. Click on open with Google Colab.
3. Run the code.  
#### Method 2
1. Open GestureDetector.ipynb from the CodeBrewers repository in Google Colab.
2. Run the code.

## Applications
1. Touchless user interface is an emerging type of technology in relation to gesture control. One type of touchless interface uses the bluetooth connectivity of a smartphone to activate a company's visitor management system. This prevents having to touch an interface during the COVID-19 pandemic.
2. Hand gesture recognition has great value in sign language recognition and sign language interpreters for the disabled.
3. In cranes, this can be used instead of remotes so that easy picking and shedding of load can be done at difficult locations.

## Future scope
The project can be linked to a Media player such as VLC and the gestures can be used to control the video like increasing or decreasing its volume or fast forwarding and rewinding the video. Also, instead of using a mouse the gestures can also be used to control your mouse pointer.  
  
Currently, the model used cannot recognise when there are no gestures detected. This functionality can be added as well.   
  
In the above project we have used only static gestures. It can be modified to include dynamic gestures (swiping your fist to the right or left, moving your finger up and down, etc.).

## Screenshots
* Down Gesture (down)  
![Down Gesture (down)](https://raw.githubusercontent.com/Rutuja-Kolte/CodeBrewers/master/Screenshots/down.JPG "Down Gesture (down)")  
  
* Palm Gesture (palm)  
![Palm Gesture (palm)](https://raw.githubusercontent.com/Rutuja-Kolte/CodeBrewers/master/Screenshots/palm.JPG "Palm Gesture (palm)")  
  
* L-Shape Gesture (l)  
![L-Shape Gesture (l)](https://raw.githubusercontent.com/Rutuja-Kolte/CodeBrewers/master/Screenshots/l.JPG "L-Shape Gesture (l)")   
  
* Fist Gesture (fist)  
![Fist Gesture (fist)](https://raw.githubusercontent.com/Rutuja-Kolte/CodeBrewers/master/Screenshots/fist.JPG "Fist Gesture (fist)")  
  
* Turned Fist Gesture (fist_moved)  
![Turned Fist Gesture (fist_moved)](https://raw.githubusercontent.com/Rutuja-Kolte/CodeBrewers/blob/master/Screenshots/fist_moved.JPG "Turned Fist Gesture (fist_moved)")  
  
* Fist with Thumb Sticking Out Gesture (thumb)  
![Fist with Thumb Sticking Out Gesture (thumb)](https://raw.githubusercontent.com/Rutuja-Kolte/CodeBrewers/master/Screenshots/thumb.JPG "Fist with Thumb Sticking Out Gesture (thumb)") 
  
* Index Finger Up Gesture (index)  
![Index Finger Up Gesture (index)](https://raw.githubusercontent.com/Rutuja-Kolte/CodeBrewers/master/Screenshots/index.JPG "Index Finger Up Gesture (index)")  
  
* OK Gesture (ok)  
![OK Gesture (ok)](https://raw.githubusercontent.com/Rutuja-Kolte/CodeBrewers/master/Screenshots/ok.JPG "OK Gesture (ok)")  
  
* Turned Palm Gesture (palm_moved)  
![Turned Palm Gesture (palm_moved)](https://raw.githubusercontent.com/Rutuja-Kolte/CodeBrewers/master/Screenshots/palm_moved.JPG "Turned Palm Gesture (palm_moved)")  
  
* C-Shape Gesture (c)  
![C-Shape Gesture (c)](https://raw.githubusercontent.com/Rutuja-Kolte/CodeBrewers/master/Screenshots/c.JPG "C-Shape Gesture (c)")  
  
## Demo Video
[Link to Demo Video](https://drive.google.com/file/d/16xmpxe-5s1VeitDUrmdZ9yi47GWhkeAr/view?usp=sharing)