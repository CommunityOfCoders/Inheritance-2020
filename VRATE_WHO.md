# VRATE

## Team name: WHO(We help others)
## Team Members:
1. Ananya Pawar - ananyapawar23@gmail.com
2. Sidhya Jain - sidhyajain@gmail.com
3. Kalpana Yadav - kalpanayadav6479@gmail.com
4. Tejas Shinde - tejas.shinde8101@gmail.com

## Mentors:
* Shubhankar Gupta
* Akshat Shah

## Decsription:
VRATE is an app that enables students to rate every lecture, everyday. The main problem we faced as FY's was, that we didnt understand what teachers teach. Also there is a significant section of class who cannot approach teacher's directly incase they have any problem. VRATE solves all these problems. To start with, we have limited it to the First Year's of VJTI.
Students have to complete the Sign Up process first, once that's done student can login through an unique email id and password.As soon as Login is done student is directed to a calendar cum time table page. As we have 6 batches for FY, so while logging in the system checks the batch of student from the database and accordingly respective time table is displayed. On tapped on a particular subject, a rating page displays. Here user can rate the particular lecture on a rating scale of 1 to 5 stars. If user rates less , giving the desired valid reason for it is *mandatory* . Also while commenting student identity is kept hidden.
So in this way this app would be a very good platform for students to keep their problems as well as teacher's to improvise.

* Github repo link : [Link to Github](https://github.com/ananya-2311/VRATE-1.git)
* Drive Link : [Link to Drive](https://drive.google.com/drive/folders/1ZMXJbW4PnHE7iPYwgfhM-dR-6UDJH7vO)

## Technology Stack
1. Flutter
2. Dart language
3. Firebase

## Project Setup
We have made this project in Android Studio using flutter and have used firebase for storing the data of user. Flutter facilitates us with with a beautiful and creative UI .Also flutter supports cross platform which allows app to open both in ios and android.  We used a course of udemy as well as Youtube to learn flutter. To run our project:
* Copy the repository link of our project above and paste it under the option get from version control(in android studio). Project will simply open, click on the run button then.
* You can simply download our app by installing the apk present in drive folder above.

## Usage: 

WORKING:
As soon as user opens the app, App logo is displayed followed by three introductory swipe screens. Then comes the Login Page. 
* Login Page consist of two input credentials that is email Id and password. In case user forgets the password,there is a seperate option for forget password as well. If email or password is invalid, a error validator is displayed. SIGN IN button navigates to home page directly(HOME PAGE IS THE TIMETABLE PAGE). If you are  a new user,there is a SIGN UP button in the bottom of the page. On clicking SIGN UP, it asks whether we are a teacher or student. There are seperate SignUp pages for Teacher and Student.
* Student SignUp Page: It consists of 7 input credentials i.e Name, Email ID, Dropdown's for Branch and Batch , Phone no, Password and Confirm Password.
If any of the input is invalid(Eg: Email id format is not valid, Password is not greater than 8 characters or Password re-entered doesn't match with the above Password etc.), an error message is displayed.
As soon as all the inputs are perfect, user gets registered to the app. In firebase console too, the new user is displayed. SIGNUP button navigates to the Home Page of app that is the TimeTable Page.
* TimeTable Page: Time table consists of the calendar. User needs to tap the day just above the desired date. On tapped, screen displays the timetable of that day. Subjects in calendar are flat buttons. This subject flat button on clicked navigates to the respective rating page of that subject.
* Rating Page: This consists of a rating stars bar. If any student is giving less rating then he/she needs to specify the reason for that. We will keep the student identity hidden in the comment section(In this way students can write their problems without hesitation). At the end of day , teachers would get a averaged rating of whole class. This averaged rating would be displayed on both teacher and student rating pages. Teachers have a seperate "Display Rating page" for this, for that Teacher Sign Up is important too. For teachers sign up again 7 credentials are taken.
There is a log out button in the rating page itself. On tapped it navigates back to log in page. Once the user is 'logged in' he/she need not enter the credentials again till they themselves log out.

## Future Scope:
* For now our app is working for one batch only. We are planning to expand it to all 6 batches.
* We still have to work on the backend part more.

## Screenshots
![WhatsApp Image 2020-07-11 at 6 27 52 PM](https://user-images.githubusercontent.com/64465190/87224631-887a7100-c3a4-11ea-88b6-f89a17dd9eda.jpeg)

![WhatsApp Image 2020-07-11 at 6 27 53 PM (5)](https://user-images.githubusercontent.com/64465190/87224672-e14a0980-c3a4-11ea-9066-0eaa2bfd8f76.jpeg)

![WhatsApp Image 2020-07-11 at 6 27 53 PM (4)](https://user-images.githubusercontent.com/64465190/87224674-e60ebd80-c3a4-11ea-96a5-5b5572e18f4a.jpeg)

![WhatsApp Image 2020-07-11 at 6 27 53 PM (3)](https://user-images.githubusercontent.com/64465190/87224684-f3c44300-c3a4-11ea-869e-850da785ec9f.jpeg)

![WhatsApp Image 2020-07-11 at 6 27 53 PM](https://user-images.githubusercontent.com/64465190/87224690-faeb5100-c3a4-11ea-9e17-37ab54f2d66b.jpeg)

![WhatsApp Image 2020-07-11 at 6 27 53 PM (2)](https://user-images.githubusercontent.com/64465190/87224692-ffb00500-c3a4-11ea-945f-bc0c27ec3d4b.jpeg)

![WhatsApp Image 2020-07-11 at 6 27 53 PM (1)](https://user-images.githubusercontent.com/64465190/87224699-0dfe2100-c3a5-11ea-8e99-f84941f7339e.jpeg)






