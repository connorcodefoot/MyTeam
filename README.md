<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->
<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">MyTeam</h3>

  <p align="center">
    Think Microsoft Teams or Slack, except the entire team is made up of AI personas, each primed with details on their role within the team and eventually with context from past interactions. Built using Flask, Python, React and LangChain.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Installation</a>
    <li>
      <a href="#installation">Getting Started</a></li>
    </li>
  </ol>
    <li>
      <a href="#roadmap">Roadmap</a>
    <li>
      <li>
      <a href="#contact">Contact</a>
    <li>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This project is in progress. Using an instant messaging model, MyTeam enables a non-technical user to create bots and agents that can perform specific tasks. Users can create teammates with different personas and converse accordingly. Behind the scenes, the new teammate is created using ChatGPT specific to the parameters the user inputs, while the conversation history is fed back into the model, further developing the persona and ensuring context is maintained indefinitely. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* React
* Flask
* Supabase
* [Langchain](https://langchain.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
### Installation

1. Create local copy of MyTeam and [MyTeam Backend](https://github.com/connorcodefoot/myteam-backend)
2. Within backend directory, initiate a virtual environment ```python -m venv /path/to/new/virtual/environment```
3. Install dependencies for frontend and backend using npm install and pip install respectively
4. For backend, create new .env file with the following:
```
OPENAI_API_KEY = YOUR_KEY
GOOGLE_CSE_ID = YOUR_ID
GOOGLE_API_KEY = YOUR_KEY
``` 

To Create an OpenAI API Key https://platform.openai.com/
To [create a custom google search engine and retrieve CSE and API](https://stackoverflow.com/questions/37083058/programmatically-searching-google-in-python-using-custom-search)
  
## Getting Started

1. Create a new teammate using the New Teammate button
2. Complete the form, providing as much or as little detail as you would like. The teammate's persona will initially be shaped by their title, temperature (creativity), verbose (how talkative) and persona description. If you can't think of anything, you can set the title to Cat and the persona to Meow and you will most likely receive only Meows to each message you send. 
3. Begin chatting about whatever you like!
4. Create a different bot, rinse and repeat. Note how they will conduct themselves differently and answer accordingly.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [X] Add option to create new personas
- [ ] Integrate supabase
- [ ] Cleanup UI
- [ ] Add users table to DB
- [ ] Add auth
- [ ] Lite deploy to friends and fam


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Connor Broadfoot- [twitter](https://twitter.com/brocollihotdog) - cgbroadfoot@gmail.com


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
