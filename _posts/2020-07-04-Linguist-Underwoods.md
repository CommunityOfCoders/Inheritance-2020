---
title: Linguist
permalink: "/submissions/:title"
team_name: Linguist Underwoods
description: "An app that translates to and from the six Latin based languages i.e. English, Spanish, French, Italian, Portuguese and Romanian."
# read-time: true
---

# Linguist

### Team - Underwoods

## Team members
* Priyanka Avhad - pravhad_b19@ce.vjti.ac.in
* Urvi Ranjan - urviranjan123@gmail.com
* Mahek Nakhua - maheknakhua11@gmail.com
* Vedanti Anil Kshirsagar - vedantikshirsagar22@gmail.com

## Mentors
* Saif Kazi
* Archeel Parekh

## Description

An app that translates to and from the six Latin based languages i.e. English, Spanish, French, Italian, Portuguese and Romanian.   

This app supports various input modes such as: 
 - Speech 
 - Image (either from gallery or camera) 
 - Text 
 
The important concepts used in this app are: 

* Speech to Text 

Package used: speech_to_text
    
    
    void initializeSpeechState() async { 
        bool hasSpeech = await speech.initialize( 
        onError: errorListener, onStatus: statusListener); 
        if (!mounted) return; 
        setState(() { 
        _hasSpeech = hasSpeech; 
        }); 
    }
    
 
 * Image to Text  
    
 Package used: image_picker, image_cropper
    
     Future<void> textDetect(var img) async { 
      FirebaseVisionImage ourImage = FirebaseVisionImage.fromFile(img); 
      TextRecognizer ourtext = FirebaseVision.instance.textRecognizer(); 
      VisionText readtext = await ourtext.processImage(ourImage); 
 
      //Extracting each word for every line in text block  
      for (TextBlock block in readtext.blocks) { 
        for (TextLine line in block.lines) { 
          for (TextElement element in line.elements) { 
            text = text + element.text + ' '; 
          } 
        } 
      } 
      ourtext.close(); 
      await translate(text); 
     } 
    }
  
    
To crop the image

    
    Future<void> cropImage(var img) async { 
      var cropped = await ImageCropper.cropImage( 
      sourcePath: img.path, 
      aspectRatioPresets: Platform.isAndroid 
      ? [ 
          CropAspectRatioPreset.square, 
          CropAspectRatioPreset.ratio3x2, 
          CropAspectRatioPreset.original, 
          CropAspectRatioPreset.tRatioPreset.ratio4x3, 
          CropAspectRatioPreset.ratio16x9 
        ] 
      : [ 
          CropAspectRatioPreset.original, 
          CropAspectRatioPreset.tRatioPreset.square,  
          CropAspectRatioPreset.ratio3x2, 
          CropAspectRatioPreset.ratio4x3, 
          CropAspectRatioPreset.ratio5x3, 
          CropAspectRatioPreset.ratio5x4, 
          CropAspectRatioPreset.ratio7x5, 
          CropAspectRatioPreset.ratio16x9 
        ], 
       
   
 * Translation
   
Package used: firebase_mlkit_language

_This package takes time to download the language files when used for the first time._ 

Function with both languages as parameters to translate text

    
    Future<void> translate(String text) async { 
     inputText = text; 
     var result = await FirebaseLanguage.instance 
     .languageTranslator(MainScreen.translateFrom, MainScreen.translateTo) 
     .processText(inputText); 
     setState(() { 
     MainScreen.translatedText = result; 
     });
    }
       
    
 * Text to audio 
    
 Package used: flutter_tts
 
 Function for pronunciation of translated text
 

    Future _speak({String text, String lang}) async { 
     await flutterTts.setVolume(volume); 
     await flutterTts.setSpeechRate(rate); 
     await flutterTts.setPitch(pitch); 
     await flutterTts.setLanguage(lang); 
 
     if (text != null) { 
      if (text.isNotEmpty) { 
        var result = await flutterTts.speak(text); 
        if (result == 1) setState(() => ttsState = TtsState.playing); 
      } 
     } 
    } 
    

* GitHub repository link: [Link to repository](https://github.com/MahekNakhua/Linguist.git)
* Drive link: [Drive link](https://drive.google.com/drive/folders/10BDol13jzBzpk8mgG5MAUVj6DDYIlZxW?usp=sharing)

## Technology stack
* Language
  * Dart

* Framework
  * Flutter

## Applications

- In this ever developing world we cannot let language become a barrier for communication, hence Linguist provides translation services to our users.
When you are lost in a foreign country with nothing but street signs that you cannot decipher, Linguist will come to your rescue.
With the text to speech feature the user can communicate without being misunderstood due to language issues.
- If you're a multilingual book lover who's stuck at a sentence, just Linguist it !

## Future scope

- Currently Linguist offers six Latin based languages. In the near future we hope to make a plethora of languages available to our users.
- We also plan to add a history feature so that our users can revisit their previous searches.

## UI design

![image](https://drive.google.com/uc?export=view&id=1zjPr34n6-aZ4lQop-DaU5hgGpY8O5ABN)
