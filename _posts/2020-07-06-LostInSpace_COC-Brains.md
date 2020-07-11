---
title: Lost In Space
permalink: "/submissions/:title"
team_name: COC-Brains
description: "Can you save the missing scientist and unravel the ongoings ? Is this all or is there more to this quest?"
---


# LostInSpace
### **Team name : COC-Brains**
# **Team Members**
* Devayani Shivankar- (shivankardevayani@gmail.com)
* Karina Hedaoo- (hedaoos2055@gmail.com)
* Vanshita Singh- (singhvanshita898@gmail.com)
* Gayatri M Vernekar- (gvernekar11sept@gmail.com)
# **Mentors**
* Shubhankar Gupta
* Saif Kazi
# **Description**
You are now chosen to unlock the greatest mystery of 21st century : **Where did Ms. Vishnoi disappear?**
Ms. Vishnoi, the scientist sought to reveal the alien-like happenings in your time. But she mysteriously disappeared a few days ago. You reach her lab and find strange things after some searching. You also come across some coordinates and a peculiar machine where you try to insert those but everything starts rumbling and you find yourself travelling to a different world ! Is this the place where Ms. Vishnoi travelled? Can you save her and unravel the ongoings ? Is this all or *is there more to this quest?*
***Play now and follow the instructions to find out !***
This is a **3D desktop game** with **first person mode** throughout. In it's main part, you face and **terminate aliens** using the weapon. Here are some code snippets:
* Behaviour of enemy following the player:


       public void Update() { float distance = Vector3.Distance(target.position, transform.position);
    
        if (distance > lookRadius)
        {
            _animator.SetBool("IsWalking", false);
            agent.enabled = false;
        }

        if (distance <= lookRadius)
        {
            AlienSound.Play();
            agent.enabled = true;
            agent.destination = target.position;
            _animator.SetBool("IsWalking", true);
            _animator.SetBool("Attack", false);

            if (agent.remainingDistance <= agent.stoppingDistance)
            {
                agent.destination = target.position;
                _animator.SetBool("Attack", true);
                      
                StartCoroutine(healthreduce());
            }
        }
   
    
* The scene where player finds the scientist is trigerred at the end after killing all aliens:

{

    private void Start()
    {
        enemies = GameObject.FindGameObjectsWithTag("Enemy");
        KillAllText.SetActive(false);
    }
    private void OnTriggerEnter(Collider other)
    {
        if(other.CompareTag("Player") && PlayerManager.instance.EnemiesKilled==52)
        {
            transition.SetTrigger("start");
            SceneManager.LoadScene("ScientistTalk");   
        }

        else
        {
            StartCoroutine(Killallfirst());
        }
    }

    IEnumerator Killallfirst()
    {
        KillAllText.SetActive(true);
        yield return new WaitForSeconds(3f);
        KillAllText.SetActive(false);
    }

 

The links for details are given below : 

* [GitHub repo link](https://devayanishivankar.github.io/COC-Brains/)
* [Drive link](https://drive.google.com/drive/folders/1hswk99uKauwniFC51uR5ICuy-NITPK6t?usp=sharing)


# **Technology stack**
1. Language : C#
2. Engine : Unity ( Version 2019.3.12f1)
3. Editor : Visual Studio ( Version 16.6.3)

# **Project Setup**
The game can be installed on your desktop/pc through suppllied application setup. The link is given below.
#### [Link for download](https://drive.google.com/file/d/1YzZn-Wd50uJQuA6YxZwLyMuVehc5YZVV/view?usp=drivesdk)

# **Usage**
After the user has installed the application, he just has to open the game and the main menu will appear stating a 'PLAY' , 'ABOUT' and 'EXIT' key. The user will further be guided by instructions as to how to advance in the game.


# **Future Scope**
The game can be additionally developed by adding some features of reward system. Following the execution of each alien, the player will be rewarded some points which he/she can further use to repair and enhance its spaceship and gun. After the 1st level, the scientist can now guide him towards the bigger goal that is unraveling the final mystery. After every passing level, the difficulty is raised with number of aliens approaching increased as well as their endurance so that more bullets are required to vanquish the enemy.


# **Screenshots**
1. ### The ship
![The ship](https://drive.google.com/uc?export=view&id=1HuQA-kR_Ox5hz0bSvBZ13301ryDWC-rm)

2. ### The lab
![The lab](https://drive.google.com/uc?export=view&id=1IL0AU9fnf-8-l6oD9IWsfHu6go4MVd7B)

3. ### Image of lab
![Image of Lab](https://drive.google.com/uc?export=view&id=1I6hhryKGoVSWEfEf6gaaq8kgx2nyjU6j)

4. ### The Alien
![The aliens](https://drive.google.com/uc?export=view&id=1IQKPY3_zunpkjjcm3F9YS6Pvo-VZj2Fz)

5. ### The Scientist
![The scientist](https://drive.google.com/uc?export=view&id=1Icvbeng4V6nd7HfStchViKcnAsAxmXkv)
