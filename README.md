# Poodle - Python integration with Moodle Web Service API

> This package is used by [Moodle Organizer Bot](https://github.com/lsglucas/mob)  a Discord multipurpose bot to get users data inside the Discord environment.

[![Latest Release][release]][release]

Description

## Usage

```py
from poodle import Mdl

# Instantiate Moodle object
mdl = Mdl()

# Moodle Web Service function call
mdl(token="YOUR_TOKEN", url="MOODLE_BASE_URL", wsfunction="MOODLE_API_FUNCTION")
```

## 💻 Development Setup

For the firsts dependencies, you need to install all requirements in ```requirements.txt``` and you must have PostgreSQL installed in your machine. For now, you need to create the ```DiscordDB``` in your default public Schema, in the future that will be changed.

```sh
pip install -r requirements.txt  
```
  
## ✅ Release History

* 4.5.0
  * [Moodle Rewrite Update](https://github.com/lsglucas/mob/releases/tag/4.5.0)
* 3.0.0
  * [Database Update](https://github.com/lsglucas/mob/releases/tag/3.0.0)
* 2.0.0
  * [Assignments Update](https://github.com/lsglucas/mob/releases/tag/2.0.0)
* 1.0.0
  * [Project and initial version release](https://github.com/lsglucas/mob/releases/tag/1.0.0)

## 👨🏻‍💻 Meta

Daniel Kauffmann – [@danieldowombo](https://twitter.com/danieldowombo) – vkdaniel@icloud.com

Lucas Garcia – [@lsglucass](https://twitter.com/lsglucass) – lsglucas@pm.me

[release]: https://img.shields.io/github/v/release/lsglucas/mob
[wiki]: https://github.com/lsglucas/mob/wiki
